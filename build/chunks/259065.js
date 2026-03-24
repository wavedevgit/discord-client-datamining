/** chunk id: 259065 params = (module,exports,require) **/
a.d(t, {
    L: () => l
});
var n = a(627968);
a(64700);
var r = a(397927),
    s = a(954571),
    i = a(652215);
let d = "display-name-styles-modal",
    l = e => {
        let {
            analyticsLocations: t,
            guildId: l
        } = e;
        (0, r.mMO)(async () => {
            let {
                default: e
            } = await a.e("15682").then(a.bind(a, 619481));
            return a => (0, n.jsx)(e, {
                ...a,
                guildId: l,
                analyticsLocations: t
            })
        }, {
            modalKey: d,
            onCloseRequest: () => {
                s.default.track(i.HAw.DISPLAY_NAME_STYLES_CLOSED), (0, r.OoC)(d)
            }
        })
    }