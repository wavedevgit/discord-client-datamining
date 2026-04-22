/** chunk id: 892921 params = (module,exports,require) **/
n.d(t, {
    A: () => x,
    AddQuestionsContextMenu: () => u
});
var i = n(627968);
n(64700);
var r = n(397927),
    s = n(442433),
    l = n(828208),
    a = n(513461),
    o = n(557420),
    c = n(322388),
    d = n(985018);

function u(e) {
    let {
        addFormField: t,
        onSelect: n,
        guild: o,
        allowTerms: u
    } = e;
    return (0, i.jsx)(r.W1t, {
        "data-menu-migrated": !0,
        navId: "add-questions",
        onClose: s.Z_,
        "aria-label": d.intl.string(d.t.liqwPJ),
        onSelect: n,
        children: (0, i.jsxs)(r.rXV, {
            children: [(0, i.jsx)(r.Drp, {
                id: "text-input",
                icon: (0, r.kHD)(l.A),
                leadingAccessory: {
                    type: "icon",
                    icon: (0, r.kHD)(l.A)
                },
                label: d.intl.string(d.t.w6Q9wz),
                action: () => (0, c.PV)(a.rX.TEXT_INPUT, t, o)
            }), (0, i.jsx)(r.Drp, {
                id: "paragraph",
                icon: r.$tc,
                leadingAccessory: {
                    type: "icon",
                    icon: r.$tc
                },
                label: d.intl.string(d.t.gG0JBN),
                action: () => (0, c.PV)(a.rX.PARAGRAPH, t, o)
            }), (0, i.jsx)(r.Drp, {
                id: "multiple-choice",
                icon: r.jsc,
                leadingAccessory: {
                    type: "icon",
                    icon: r.jsc
                },
                label: d.intl.string(d.t.ooKh3m),
                action: () => (0, c.PV)(a.rX.MULTIPLE_CHOICE, t, o)
            }), u && (0, i.jsx)(r.Drp, {
                id: "terms",
                icon: r.B8Q,
                leadingAccessory: {
                    type: "icon",
                    icon: r.B8Q
                },
                label: d.intl.string(d.t["3pz9t3"]),
                action: () => (0, c.PV)(a.rX.TERMS, t, o)
            })]
        })
    })
}
let x = function(e) {
    let {
        addFormField: t,
        guild: n,
        allowTerms: r
    } = e;
    return (0, i.jsx)(o.d, {
        text: d.intl.string(d.t.CoHdoG),
        tooltipText: d.intl.string(d.t.nsI4dU),
        onClick: e => {
            (0, s.jA)(e, e => (0, i.jsx)(u, {
                ...e,
                addFormField: t,
                guild: n,
                allowTerms: r
            }), {
                position: "top",
                align: "center"
            })
        }
    })
}