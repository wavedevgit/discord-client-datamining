/** chunk id: 280481, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => c
});
var n = r(627968);
r(64700);
var i = r(397927),
    l = r(793574),
    s = r(688810),
    a = r(213279),
    o = r(357281);

function c(e) {
    let {
        onClose: t
    } = e, {
        analyticsLocations: r
    } = (0, s.Ay)(l.A.GO_LIVE_MODAL_V2);
    return (0, n.jsx)(i.IzF, {
        options: [{
            name: "SD",
            value: "sd"
        }, {
            name: "HD",
            value: "hd",
            className: o.T
        }],
        className: o.g,
        value: "sd",
        look: "pill",
        onChange: function(e) {
            "hd" === e.value && (0, a.p)({
                analyticsLocation: null == r ? void 0 : r[0],
                onClose: t
            })
        }
    })
}