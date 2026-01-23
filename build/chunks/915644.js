/** Chunk was on 72165 **/
/** chunk id: 915644, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b,
    C: () => x
}), n(228524);
var l = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    a = n(554146),
    s = n(397927),
    o = n(826673),
    c = n(367727),
    d = n(997509),
    u = n(307879),
    h = n(395504),
    p = n(652215),
    f = n(49999),
    _ = n(985018),
    m = n(932726),
    g = n(529732);

function x(e) {
    return (0, h.Xn)(e) ? 250 : 152
}

function b(e) {
    let {
        guild: t
    } = e, n = (0, h.Xn)(t.id), r = (0, o.JZ)(a.M.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL), x = n && !r ? a.M.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL : a.M.CHANNEL_BROWSER_NUX;
    (0, c.Vh)(x);
    let b = n ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsxs)("div", {
            children: [(0, l.jsx)(s.Heading, {
                className: m.R_,
                color: "always-white",
                variant: "heading-lg/semibold",
                children: _.intl.string(_.t.AalzkJ)
            }), (0, l.jsx)(s.Text, {
                className: m.h_,
                variant: "text-md/normal",
                color: "always-white",
                children: _.intl.string(_.t.CXh95Z)
            }), (0, l.jsx)(s.Button, {
                variant: "overlay-primary",
                onClick: () => {
                    d.A.open(t.id, p.BEX.ONBOARDING), (0, o.Dr)(x, {
                        dismissAction: f.i.PRIMARY
                    })
                },
                text: _.intl.string(_.t["+OtO4e"])
            })]
        }), (0, l.jsx)(u.M, {
            isTooltip: !0
        })]
    }) : (0, l.jsxs)("div", {
        className: m.FQ,
        children: [(0, l.jsx)("img", {
            width: 180,
            className: m.Sl,
            src: g,
            alt: "",
            "aria-hidden": !0
        }), (0, l.jsxs)("div", {
            children: [(0, l.jsx)(s.Heading, {
                className: m.R_,
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: _.intl.string(_.t.utqWEC)
            }), (0, l.jsx)(s.Text, {
                variant: "text-md/normal",
                color: "text-default",
                children: _.intl.string(_.t["+9etcM"])
            }), (0, l.jsx)(s.Text, {
                className: m.uN,
                variant: "text-md/normal",
                color: "text-default",
                children: _.intl.format(_.t.Z0axjk, {})
            })]
        })]
    });
    return (0, l.jsxs)("div", {
        className: i()(m.kL, {
            [m.xY]: n
        }),
        children: [(0, l.jsx)(s.DUT, {
            className: m.b,
            onClick: () => {
                (0, o.Dr)(x, {
                    dismissAction: f.i.DISMISS
                })
            },
            children: (0, l.jsx)(s.PGe, {
                size: "md",
                color: "currentColor"
            })
        }), b]
    })
}