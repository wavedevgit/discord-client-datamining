/** chunk id: 823508, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var i = n(397927),
    r = n(267102),
    l = n(70456),
    a = n(652215);
let o = "guild-event-modal",
    s = () => {
        let e = (0, r.Us)() === a.BRT.POPOUT ? i.KX8 : i.SYi;
        return {
            modalKey: o,
            contextKey: e,
            onCloseRequest: () => {
                l.N.getState().canCloseModal && (0, i.OoC)(o, e)
            }
        }
    }