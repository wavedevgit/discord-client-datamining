/** chunk id: 563218, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
});
var l = n(627968),
    a = n(64700),
    i = n(311907),
    r = n(397927),
    s = n(964486),
    o = n(58149),
    d = n(632738),
    c = n(780964),
    u = n(840065),
    _ = n(734057),
    m = n(319582),
    x = n(369053),
    p = n(652215),
    g = n(985018),
    A = n(71561);

function h(e) {
    let {
        title: t,
        description: n,
        onButtonClick: i,
        trackSettingsUpsellsAction: r
    } = e, [o, c] = a.useState(!1);
    return (0, s.Ay)(() => {
        r(x.lJ.SETTINGS_UPSELLS_VIEWED)
    }), (0, l.jsx)(d.PQ, {
        title: t,
        description: n,
        buttonText: o ? g.intl.string(g.t["h+WsPb"]) : g.intl.string(g.t.A8t4Nf),
        buttonDisabled: o,
        onButtonPress: () => {
            i(), c(!0), r(x.lJ.SETTINGS_UPSELLS_APPLY_CLICKED)
        }
    })
}

function b(e) {
    let {
        settingsUpsells: t,
        channelId: n,
        onModalClose: a,
        reportId: s,
        reportType: d,
        reportSubType: b
    } = e, v = (0, i.bG)([_.A], () => _.A.getChannel(n)), f = (0, m.MR)(t, v?.type), C = (0, x.Mw)(d, b, s);
    return 0 === f.length ? null : (0, l.jsxs)("div", {
        className: A.kL,
        children: [(0, l.jsx)(r.Heading, {
            variant: "text-sm/semibold",
            className: A.wx,
            children: g.intl.string(g.t["1yxTIJ"])
        }), (0, l.jsx)("div", {
            className: A.uk,
            children: f.map((e, n) => {
                let {
                    getTitle: a,
                    getDescription: i,
                    onApply: r
                } = e;
                return (0, l.jsx)(h, {
                    title: a(),
                    description: i(),
                    onButtonClick: r,
                    trackSettingsUpsellsAction: C(t[n])
                }, n)
            })
        }), (0, l.jsx)(r.QWc, {
            text: g.intl.string(g.t.olebGx),
            onClick: () => {
                (0, u.openUserSettings)(c.X.CONTENT_AND_SOCIAL_PANEL, {
                    section: p.nc_.CONTENT_AND_SOCIAL
                }), a(), o.Ay.trackWithMetadata(p.HAw.IAR_SETTINGS_UPSELLS_ACTION, {
                    report_id: s,
                    report_type: d.name,
                    report_subtype: b,
                    action: x.lJ.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED
                })
            }
        })]
    })
}