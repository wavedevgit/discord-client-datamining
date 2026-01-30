/** chunk id: 823508, original params: e,n,t (module,exports,require) **/
"use strict";
t.d(n, {
    A: () => o
});
var i = t(397927),
    l = t(267102),
    r = t(70456),
    u = t(652215);
let a = "guild-event-modal",
    o = () => {
        let e = (0, l.Us)() === u.BRT.POPOUT ? i.KX8 : i.SYi;
        return {
            modalKey: a,
            contextKey: e,
            onCloseRequest: () => {
                r.N.getState().canCloseModal && (0, i.OoC)(a, e)
            }
        }
    }