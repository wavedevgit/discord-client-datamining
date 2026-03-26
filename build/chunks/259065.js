/** chunk id: 259065 params = (module,exports,require) **/
a.d(t, {
    L: () => d
});
var r = a(627968);
a(64700);
var n = a(397927),
    i = a(954571),
    s = a(652215);
let l = "display-name-styles-modal",
    d = e => {
        let {
            analyticsLocations: t,
            guildId: d
        } = e;
        (0, n.mMO)(async () => {
            let {
                default: e
            } = await a.e("15682").then(a.bind(a, 619481));
            return a => (0, r.jsx)(e, {
                ...a,
                guildId: d,
                analyticsLocations: t
            })
        }, {
            modalKey: l,
            onCloseRequest: () => {
                i.default.track(s.HAw.DISPLAY_NAME_STYLES_CLOSED), (0, n.OoC)(l)
            }
        })
    }