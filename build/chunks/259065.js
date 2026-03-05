/** chunk id: 259065, original params: e,t,n (module,exports,require) **/
n.d(t, {
    L: () => o
});
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(954571),
    a = n(652215);
let r = "display-name-styles-modal",
    o = e => {
        let {
            analyticsLocations: t,
            guildId: o
        } = e;
        (0, s.mMO)(async () => {
            let {
                default: e
            } = await n.e("15682").then(n.bind(n, 619481));
            return n => (0, i.jsx)(e, {
                ...n,
                guildId: o,
                analyticsLocations: t
            })
        }, {
            modalKey: r,
            onCloseRequest: () => {
                l.default.track(a.HAw.DISPLAY_NAME_STYLES_CLOSED), (0, s.OoC)(r)
            }
        })
    }