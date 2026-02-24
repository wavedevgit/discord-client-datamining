/** chunk id: 885293, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => p
});
var a = n(627968);
n(64700);
var i = n(484030),
    s = n(110259),
    l = n(158954),
    r = n(397927),
    o = n(139286),
    d = n(422230),
    c = n(954571),
    u = n(60888),
    m = n(652215),
    h = n(985018),
    x = n(280723);

function p(e) {
    let {
        url: t,
        trustUrl: n,
        isProtocol: p,
        onConfirm: g,
        onCancel: _,
        onClose: f,
        transitionState: b
    } = e, {
        protocol: v,
        authorityPrefix: j,
        hostname: C,
        theRestOfTheUrl: A,
        shouldTrustUrl: T,
        setShouldTrustUrl: S,
        handleConfirm: y,
        handleCancel: E
    } = (0, u.u)({
        url: t,
        trustUrl: n,
        onConfirm: g,
        onCancel: _,
        onClose: f
    });
    return (0, o.A)({
        type: s.ImpressionTypes.MODAL,
        name: s.ImpressionNames.MASKED_LINK_MODAL
    }), (0, a.jsxs)(l.Modal, {
        size: "md",
        transitionState: b,
        onClose: f,
        title: h.intl.string(h.t["3w1QGl"]),
        subtitle: p ? h.intl.format(h.t.aCYv1z, {}) : h.intl.string(h.t.soRxRe),
        actions: [{
            text: h.intl.string(h.t["/g10LC"]),
            onClick: () => {
                E(), c.default.track(m.HAw.MASKED_LINK_MODAL_CLICKED, {
                    is_trust_url_selected: T,
                    action_type: "cancel"
                })
            },
            variant: "secondary"
        }, {
            text: p ? h.intl.string(h.t.COq6kk) : h.intl.string(h.t.NcJfJG),
            onClick: () => {
                y(), c.default.track(m.HAw.MASKED_LINK_MODAL_CLICKED, {
                    is_trust_url_selected: T,
                    action_type: "confirm"
                })
            },
            variant: "primary"
        }],
        children: [(0, a.jsxs)(r.HOs, {
            className: x.ul,
            children: [(0, a.jsxs)(r.Text, {
                tag: "span",
                variant: p ? "text-md/semibold" : "text-md/normal",
                color: p ? "text-default" : "text-muted",
                children: [v, j]
            }), (0, a.jsx)(r.Text, {
                tag: "span",
                variant: p ? "text-md/normal" : "text-md/semibold",
                color: p ? "text-muted" : "text-default",
                children: C
            }), (0, a.jsx)(r.Text, {
                tag: "span",
                variant: "text-md/normal",
                color: "text-muted",
                children: A
            })]
        }), (0, a.jsx)("div", {
            className: x.F5,
            children: (0, a.jsx)(r.Checkbox, {
                checked: T,
                onChange: e => S(e),
                label: p ? h.intl.format(h.t["haA+Xw"], {
                    protocol: v.replace(":", "")
                }) : h.intl.format(h.t.ZgXDsI, {
                    domain: C
                }),
                labelType: "secondary"
            })
        }), (0, a.jsx)(i.tH, {
            fallback: null,
            children: (0, a.jsx)(d.l, {
                onClose: f
            })
        })]
    })
}