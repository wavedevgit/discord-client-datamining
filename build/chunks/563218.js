/** chunk id: 563218 params = (module,exports,require) **/
n.d(t, {
    A: () => v
});
var l = n(627968),
    a = n(64700),
    i = n(311907),
    r = n(397927),
    s = n(964486),
    d = n(58149),
    o = n(632738),
    c = n(780964),
    u = n(858897),
    _ = n(734057),
    m = n(319582),
    p = n(369053),
    h = n(652215),
    x = n(985018),
    g = n(479531);

function A(e) {
    let {
        title: t,
        description: n,
        onButtonClick: i,
        trackSettingsUpsellsAction: r
    } = e, [d, c] = a.useState(!1);
    return (0, s.Ay)(() => {
        r(p.lJ.SETTINGS_UPSELLS_VIEWED)
    }), (0, l.jsx)(o.PQ, {
        title: t,
        description: n,
        buttonText: d ? x.intl.string(x.t["h+WsPb"]) : x.intl.string(x.t.A8t4Nf),
        buttonDisabled: d,
        onButtonPress: () => {
            i(), c(!0), r(p.lJ.SETTINGS_UPSELLS_APPLY_CLICKED)
        }
    })
}

function v(e) {
    let {
        settingsUpsells: t,
        channelId: n,
        onModalClose: a,
        reportId: s,
        reportType: o,
        reportSubType: v
    } = e, b = (0, i.bG)([_.A], () => _.A.getChannel(n)), f = (0, m.MR)(t, b?.type), T = (0, p.Mw)(o, v, s);
    return 0 === f.length ? null : (0, l.jsxs)("div", {
        className: g.kL,
        children: [(0, l.jsx)(r.Heading, {
            variant: "text-sm/semibold",
            className: g.wx,
            children: x.intl.string(x.t["1yxTIJ"])
        }), (0, l.jsx)("div", {
            className: g.uk,
            children: f.map((e, n) => {
                let {
                    getTitle: a,
                    getDescription: i,
                    onApply: r
                } = e;
                return (0, l.jsx)(A, {
                    title: a(),
                    description: i(),
                    onButtonClick: r,
                    trackSettingsUpsellsAction: T(t[n])
                }, n)
            })
        }), (0, l.jsx)(r.QWc, {
            text: x.intl.string(x.t.olebGx),
            onClick: () => {
                (0, u.openUserSettings)(c.X.CONTENT_AND_SOCIAL_PANEL), a(), d.Ay.trackWithMetadata(h.HAw.IAR_SETTINGS_UPSELLS_ACTION, {
                    report_id: s,
                    report_type: o.name,
                    report_subtype: v,
                    action: p.lJ.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED
                })
            }
        })]
    })
}