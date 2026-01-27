/** Chunk was on 77870 **/
/** chunk id: 823508, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var r = n(397927),
    l = n(267102),
    i = n(70456),
    s = n(652215);
let a = "guild-event-modal",
    o = () => {
        let e = (0, l.Us)() === s.BRT.POPOUT ? r.KX8 : r.SYi;
        return {
            modalKey: a,
            contextKey: e,
            onCloseRequest: () => {
                i.N.getState().canCloseModal && (0, r.OoC)(a, e)
            }
        }
    }