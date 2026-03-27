/** chunk id: 823508 params = (module,exports,require) **/
"use strict";
t.d(n, {
    A: () => u
});
var i = t(397927),
    l = t(267102),
    r = t(70456),
    s = t(652215);
let a = "guild-event-modal",
    u = () => {
        let e = (0, l.Us)() === s.BRT.POPOUT ? i.KX8 : i.SYi;
        return {
            modalKey: a,
            contextKey: e,
            onCloseRequest: () => {
                r.N.getState().canCloseModal && (0, i.OoC)(a, e)
            }
        }
    }