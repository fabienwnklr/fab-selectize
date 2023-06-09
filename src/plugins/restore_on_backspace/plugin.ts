/**
 * Plugin: "restore_on_backspace" (Fab Select)
 * Copyright (c) contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 */
import FabSelectize from "../../fab-selectize";
import { FabOption } from "../../types/index";

type TPluginOptions = {
    text?: (option: FabOption) => string;
};

export default function (this: FabSelectize, userOptions: TPluginOptions) {
    const self = this;

    const options = Object.assign(
        {
            text: (option: FabOption) => {
                return option[self.settings.labelField];
            },
        },
        userOptions
    );

    self.on("item_remove", function (value: string) {
        if (!self.isFocused) {
            return;
        }

        if (self.control_input.value.trim() === "") {
            var option = self.options[value];
            if (option) {
                self.setTextboxValue(options.text.call(self, option));
            }
        }
    });
}
