/** chunk id: 752942, original params: e,t,a (module,exports,require) **/
a.d(t, {
    A: () => f
}), a(228524);
var r = a(627968);
a(64700);
var n = a(317097),
    s = a(827734),
    l = a(397927),
    i = a(580630),
    c = a(35275),
    o = a(652215),
    d = a(985018),
    m = a(558304);

function x(e) {
    let {
        listing: t
    } = e, {
        name: a,
        image: s,
        description: c
    } = t, d = (0, i.$g)(t.price_tier, o.Yri.USD);
    return (0, r.jsxs)("div", {
        children: [(0, r.jsxs)("div", {
            className: m.l8,
            children: [(0, r.jsx)("img", {
                src: s,
                alt: "",
                className: m.my
            }), (0, r.jsxs)("div", {
                children: [(0, r.jsx)(l.Heading, {
                    variant: "heading-md/medium",
                    className: m.KR,
                    children: a
                }), (0, r.jsx)(l.Text, {
                    variant: "text-md/medium",
                    tag: "span",
                    children: d
                }), (0, r.jsx)(l.Text, {
                    variant: "text-xxs/medium",
                    tag: "span",
                    children: "/mo."
                })]
            })]
        }), (0, r.jsxs)("div", {
            className: m.FE,
            children: [(0, r.jsx)("div", {
                style: {
                    backgroundColor: (0, n.Hl)(t.role_color)
                },
                className: m.yY
            }), (0, r.jsx)("img", {
                src: s,
                alt: "",
                className: m.UT
            }), (0, r.jsx)(l.Text, {
                variant: "text-xs/medium",
                children: a
            })]
        }), (0, r.jsx)(l.Text, {
            variant: "text-xs/normal",
            className: m.rj,
            children: c
        })]
    })
}

function u(e) {
    let {
        channel: t
    } = e, a = function(e) {
        switch (e) {
            case o.rbe.GUILD_TEXT:
                return l.I$d;
            case o.rbe.GUILD_VOICE:
                return l.trU;
            case o.rbe.GUILD_STAGE_VOICE:
                return l.DC;
            case o.rbe.GUILD_FORUM:
                return l.QVg;
            case o.rbe.GUILD_MEDIA:
                return l.cfi;
            case o.rbe.GUILD_ANNOUNCEMENT:
                return l.XDC;
            default:
                return null
        }
    }(t.type);
    return (0, r.jsxs)("div", {
        className: m.$r,
        children: [null != a && (0, r.jsx)(a, {
            className: m.WH,
            color: "currentColor"
        }), (0, r.jsxs)("div", {
            className: m.WA,
            children: [(0, r.jsx)(l.Text, {
                variant: "text-sm/normal",
                children: t.name
            }), (0, r.jsx)(l.Text, {
                variant: "text-xs/normal",
                className: m.zC,
                children: t.tagline
            })]
        }), (0, r.jsx)(c.A, {
            className: m.__invalid_emojiIcon,
            color: s.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css
        })]
    })
}

function _(e) {
    let {
        benefit: t
    } = e;
    return void 0 === t ? null : (0, r.jsxs)("div", {
        className: m.Rr,
        children: [(0, r.jsx)("div", {
            className: m.KI
        }), (0, r.jsx)(l.Text, {
            variant: "text-sm/normal",
            children: t
        })]
    })
}

function p(e) {
    let {
        listing: t
    } = e;
    return (0, r.jsxs)("div", {
        children: [(0, r.jsx)(l.Heading, {
            variant: "heading-sm/semibold",
            className: m.Ts,
            children: d.intl.string(d.t.CjC5XZ)
        }), (0, r.jsx)(l.Text, {
            variant: "text-xs/semibold",
            className: m.hM,
            children: d.intl.string(d.t.rI43Wx)
        }), t.channels.map(e => (0, r.jsx)(u, {
            channel: e
        }, e.id)), (0, r.jsx)(l.Text, {
            variant: "text-xs/semibold",
            className: m.hM,
            children: d.intl.string(d.t.XqWRLj)
        }), t.additional_perks.map((e, t) => (0, r.jsx)(_, {
            benefit: e.name
        }, t))]
    })
}

function f(e) {
    let {
        selectedTemplate: t,
        handleSelectTemplate: a
    } = e;
    if (void 0 === t) return null;
    let n = t.listings[0];
    return (0, r.jsxs)("div", {
        className: m.kL,
        children: [(0, r.jsxs)(l.IpV, {
            className: m.Qs,
            children: [(0, r.jsx)(x, {
                listing: n
            }), (0, r.jsx)("div", {
                className: m.yF
            }), (0, r.jsx)(p, {
                listing: n
            })]
        }), (0, r.jsx)(l.Button, {
            variant: "primary",
            text: d.intl.string(d.t["1W7mCt"]),
            onClick: () => {
                a(t)
            }
        })]
    })
}