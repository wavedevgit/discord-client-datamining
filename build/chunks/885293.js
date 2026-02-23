/** chunk id: 885293, original params: t,e,n (module,exports,require) **/
n.d(e, {
    default: () => m
});
var a = n(627968);
n(64700);
var i = n(484030),
    s = n(110259),
    l = n(158954),
    r = n(397927),
    d = n(139286),
    c = n(422230),
    o = n(954571),
    u = n(60888),
    h = n(652215),
    _ = n(985018),
    b = n(589049);

function m(t) {
    let {
        url: e,
        trustUrl: n,
        isProtocol: m,
        onConfirm: x,
        onCancel: E,
        onClose: L,
        transitionState: C
    } = t, {
        protocol: I,
        authorityPrefix: p,
        hostname: A,
        theRestOfTheUrl: N,
        shouldTrustUrl: f,
        setShouldTrustUrl: k,
        handleConfirm: T,
        handleCancel: g
    } = (0, u.u)({
        url: e,
        trustUrl: n,
        onConfirm: x,
        onCancel: E,
        onClose: L
    });
    return (0, d.A)({
        type: s.ImpressionTypes.MODAL,
        name: s.ImpressionNames.MASKED_LINK_MODAL
    }), (0, a.jsxs)(l.Modal, {
        size: "md",
        transitionState: C,
        onClose: L,
        title: _.intl.string(_.t["3w1QGl"]),
        subtitle: m ? _.intl.format(_.t.aCYv1z, {}) : _.intl.string(_.t.soRxRe),
        actions: [{
            text: _.intl.string(_.t["/g10LC"]),
            onClick: () => {
                g(), o.default.track(h.HAw.MASKED_LINK_MODAL_CLICKED, {
                    is_trust_url_selected: f,
                    action_type: "cancel"
                })
            },
            variant: "secondary"
        }, {
            text: m ? _.intl.string(_.t.COq6kk) : _.intl.string(_.t.NcJfJG),
            onClick: () => {
                T(), o.default.track(h.HAw.MASKED_LINK_MODAL_CLICKED, {
                    is_trust_url_selected: f,
                    action_type: "confirm"
                })
            },
            variant: "primary"
        }],
        children: [(0, a.jsxs)(r.HOs, {
            className: b.ul,
            children: [(0, a.jsxs)(r.Text, {
                tag: "span",
                variant: m ? "text-md/semibold" : "text-md/normal",
                color: m ? "text-default" : "text-muted",
                children: [I, p]
            }), (0, a.jsx)(r.Text, {
                tag: "span",
                variant: m ? "text-md/normal" : "text-md/semibold",
                color: m ? "text-muted" : "text-default",
                children: A
            }), (0, a.jsx)(r.Text, {
                tag: "span",
                variant: "text-md/normal",
                color: "text-muted",
                children: N
            })]
        }), (0, a.jsx)("div", {
            className: b.F5,
            children: (0, a.jsx)(r.Checkbox, {
                checked: f,
                onChange: t => k(t),
                label: m ? _.intl.format(_.t["haA+Xw"], {
                    protocol: I.replace(":", "")
                }) : _.intl.format(_.t.ZgXDsI, {
                    domain: A
                }),
                labelType: "secondary"
            })
        }), (0, a.jsx)(i.tH, {
            fallback: null,
            children: (0, a.jsx)(c.l, {
                onClose: L
            })
        })]
    })
}