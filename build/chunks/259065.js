/** chunk id: 259065 params = (module,exports,require) **/
r.d(t, {
    L: () => o
});
var a = r(627968);
r(64700);
var n = r(397927),
    s = r(954571),
    i = r(652215);
let l = "display-name-styles-modal",
    o = e => {
        let {
            analyticsLocations: t,
            guildId: o
        } = e;
        (0, n.mMO)(async () => {
            let {
                default: e
            } = await r.e("15682").then(r.bind(r, 619481));
            return r => (0, a.jsx)(e, {
                ...r,
                guildId: o,
                analyticsLocations: t
            })
        }, {
            modalKey: l,
            onCloseRequest: () => {
                s.default.track(i.HAw.DISPLAY_NAME_STYLES_CLOSED), (0, n.OoC)(l)
            }
        })
    }