/**
 * Plugin: "input_autogrow" (Tom Select)
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

import FabSelectize from '../../fab-selectize';

export default function(this:FabSelectize) {
	var self = this;
	var orig_deleteSelection = self.deleteSelection;

	this.hook('instead','deleteSelection',(evt:KeyboardEvent) => {

		if( self.activeItems.length ){
			return orig_deleteSelection.call(self, evt);
		}

		return false;
	});

};
