/** chunk id: 259065 params = (module,exports,require) **/
a.d(t, {
    L: () => d
});
var n = a(627968);
a(64700);
var r = a(397927),
    s = a(954571),
    l = a(652215);
let i = "display-name-styles-modal",
    d = e => {
        let {
            analyticsLocations: t,
            guildId: d
        } = e;
        (0, r.mMO)(async () => {
            let {
                default: e
            } = await a.e("15682").then(a.bind(a, 619481));
            return a => (0, n.jsx)(e, {
                ...a,
                guildId: d,
                analyticsLocations: t
            })
        }, {
            modalKey: i,
            onCloseRequest: () => {
                s.default.track(l.HAw.DISPLAY_NAME_STYLES_CLOSED), (0, r.OoC)(i)
            }
        })
    }