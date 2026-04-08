/** chunk id: 899894 params = (module,exports,require) **/
n.d(t, {
    V: () => u
});
var i = n(627968);
n(64700);
var l = n(989349),
    s = n.n(l),
    r = n(827734),
    a = n(397927),
    o = n(239093),
    d = n(985018),
    c = n(766902);

function u(e) {
    if (null == e.message.embeds || null == e.message.embeds[0].fields) return null;
    let t = e.message.embeds[0],
        l = t.fields?.find(e => e.rawName === o.AT.CLASSIFICATION_ID) ?? void 0,
        u = l?.rawValue ?? void 0,
        m = t.fields?.find(e => e.rawName === o.AT.INCIDENT_TIMESTAMP) ?? void 0,
        _ = null == m || null == m.rawValue ? void 0 : parseFloat(m.rawValue);
    return null == u || null == _ ? null : (0, i.jsxs)(a.DUT, {
        onClick: () => {
            (0, a.mMO)(async () => {
                let {
                    default: e
                } = await Promise.all([n.e("83518"), n.e("9407"), n.e("99944")]).then(n.bind(n, 956450));
                return t => (0, i.jsx)(e, {
                    classificationId: u,
                    source: o.XN.SystemDM,
                    transitionState: t.transitionState,
                    onClose: t.onClose
                })
            })
        },
        className: c.o3,
        children: [(0, i.jsxs)("div", {
            className: c.qZ,
            children: [(0, i.jsxs)("div", {
                className: c.U1,
                children: [(0, i.jsx)(a.id, {
                    className: c.QW,
                    color: r.A.colors.ICON_FEEDBACK_CRITICAL
                }), (0, i.jsx)(a.Text, {
                    variant: "text-md/semibold",
                    children: d.intl.string(d.t["4CxGXi"])
                })]
            }), (0, i.jsx)("div", {
                className: c.VU,
                children: (0, i.jsx)(a.Text, {
                    variant: "text-xs/medium",
                    children: d.intl.format(d.t.eevFb6, {
                        daysAgo: s()().diff(s().unix(_), "days")
                    })
                })
            }), (0, i.jsx)("div", {
                className: c.vv,
                children: (0, i.jsx)(a.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: d.intl.string(d.t["5CLb0A"])
                })
            })]
        }), (0, i.jsx)("div", {
            className: c.xQ,
            children: (0, i.jsx)(a.QWc, {
                text: d.intl.string(d.t.zKnzwm),
                variant: "secondary"
            })
        })]
    })
}