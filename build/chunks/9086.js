/** chunk id: 9086 params = (module,exports,require) **/
a.d(t, {
    A: () => h
});
var n = a(627968),
    i = a(64700),
    l = a(397927),
    s = a(973925),
    r = a(975571),
    o = a(307600),
    c = a(652215),
    d = a(985018),
    u = a(997006);
let m = r.A.getArticleURL(c.MVz.BOT_DATA_ACCESS);

function h(e) {
    let {
        application: t
    } = e, {
        hasMessageContent: a,
        hasGuildPresences: r,
        hasGuildMembers: c,
        hasIntents: h
    } = (0, s.Z)(t), _ = i.useCallback(() => {
        null != t.privacy_policy_url && (0, o.h)({
            href: t.privacy_policy_url
        })
    }, [t.privacy_policy_url]);
    return (0, n.jsxs)("div", {
        className: u.hd,
        children: [(0, n.jsx)(l.Heading, {
            variant: "heading-lg/semibold",
            color: "text-strong",
            children: d.intl.string(d.t.QzDgMq)
        }), (0, n.jsxs)("div", {
            className: u.hQ,
            children: [h && (0, n.jsxs)("ul", {
                className: u.In,
                children: [(0, n.jsx)(l.Heading, {
                    variant: "heading-md/semibold",
                    color: "text-default",
                    children: d.intl.string(d.t.U6KH5S)
                }), a && (0, n.jsx)(p, {
                    icon: l.oyn,
                    heading: d.intl.string(d.t.gJpBO2),
                    body: d.intl.string(d.t["L+QVbh"])
                }), r && (0, n.jsx)(p, {
                    icon: l.nRI,
                    heading: d.intl.string(d.t["jo0oj/"]),
                    body: d.intl.string(d.t.Dm0jqx)
                }), c && (0, n.jsx)(p, {
                    icon: l.nFg,
                    heading: d.intl.string(d.t.QZql7O),
                    body: d.intl.string(d.t["ez/N/R"])
                })]
            }), (0, n.jsx)(l.Text, {
                variant: "text-md/normal",
                color: "text-default",
                children: d.intl.format(d.t.b6nqk0, {
                    helpCenterUrl: m
                })
            }), null != t.privacy_policy_url && (0, n.jsx)(l.Text, {
                variant: "text-md/normal",
                color: "text-default",
                className: u.hM,
                children: d.intl.format(d.t.agYVY5, {
                    onClick: _
                })
            })]
        })]
    })
}

function p(e) {
    let {
        icon: t,
        heading: a,
        body: i
    } = e;
    return (0, n.jsxs)("li", {
        className: u.KT,
        children: [(0, n.jsx)(t, {
            color: "currentColor",
            size: "md"
        }), (0, n.jsxs)("div", {
            className: u.D6,
            children: [(0, n.jsx)(l.Heading, {
                variant: "heading-md/semibold",
                color: "text-default",
                children: a
            }), (0, n.jsx)(l.Text, {
                variant: "text-md/normal",
                color: "text-default",
                children: i
            })]
        })]
    })
}