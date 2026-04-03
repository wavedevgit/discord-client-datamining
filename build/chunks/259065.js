/** chunk id: 259065 params = (module,exports,require) **/
r.d(t, {
    L: () => d
});
var n = r(627968);
r(64700);
var a = r(397927),
    i = r(954571),
    s = r(652215);
let l = "display-name-styles-modal",
    d = e => {
        let {
            analyticsLocations: t,
            guildId: d
        } = e;
        (0, a.mMO)(async () => {
            let {
                default: e
            } = await r.e("15682").then(r.bind(r, 619481));
            return r => (0, n.jsx)(e, {
                ...r,
                guildId: d,
                analyticsLocations: t
            })
        }, {
            modalKey: l,
            onCloseRequest: () => {
                i.default.track(s.HAw.DISPLAY_NAME_STYLES_CLOSED), (0, a.OoC)(l)
            }
        })
    }