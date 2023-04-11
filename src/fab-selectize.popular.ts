import FabSelectize from "./fab-selectize";

import caret_position from "./plugins/caret_position/plugin";
import dropdown_input from "./plugins/dropdown_input/plugin";
import no_backspace_delete from "./plugins/no_backspace_delete/plugin";
import remove_button from "./plugins/remove_button/plugin";
import restore_on_backspace from "./plugins/restore_on_backspace/plugin";

FabSelectize.define("caret_position", caret_position);
FabSelectize.define("dropdown_input", dropdown_input);
FabSelectize.define("no_backspace_delete", no_backspace_delete);
FabSelectize.define("remove_button", remove_button);
FabSelectize.define("restore_on_backspace", restore_on_backspace);

export default FabSelectize;
