/** chunk id: 823508 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var i = n(397927),
    s = n(267102),
    l = n(70456),
    a = n(652215);
let r = "guild-event-modal",
    o = () => {
        let e = (0, s.Us)() === a.BRT.POPOUT ? i.KX8 : i.SYi;
        return {
            modalKey: r,
            contextKey: e,
            onCloseRequest: () => {
                l.N.getState().canCloseModal && (0, i.OoC)(r, e)
            }
        }
    }