/** Chunk was on web.js **/
/** chunk id: 698405, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m,
    w: () => h
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(421380),
    o = n(397927),
    l = n(686956),
    c = n(915089),
    u = n(403362),
    d = n(857071),
    f = n(652215),
    p = n(985018),
    _ = n(270920),
    h = function(e) {
        return e[e.CHAT = 0] = "CHAT", e[e.REACTIONS = 1] = "REACTIONS", e
    }({});
let m = e => {
    let {
        type: t,
        guild: h,
        closePopout: m,
        ctaRef: g
    } = e, E = (0, c.GV)(), [y, b] = i.useState(!1), O = (0, a.bG)([d.A], () => d.A.isLurking(h.id), [h.id]);
    i.useEffect(() => {
        y && !O && m()
    }, [y, O, m]);
    let v = null,
        A = p.intl.string(p.t.d7b1p6);
    switch (t) {
        case 0:
            v = p.intl.string(p.t.Xiwf1Q);
            break;
        case 1:
            v = p.intl.string(p.t.GXvlU9);
            break;
        default:
            return (0, u.xb)(t)
    }
    if (null == v) return null;
    let I = async () => {
        b(!0);
        try {
            await l.A.joinGuild(h.id, {
                source: f.Q4z.CHAT_INPUT_BLOCKER
            }), m()
        } catch (e) {
            b(!1)
        }
    };
    return (0, r.jsxs)(o.lGe, {
        className: _.kL,
        "aria-labelledby": E,
        children: [(0, r.jsx)("img", {
            alt: "",
            className: _.Sl,
            src: n(303528)
        }), (0, r.jsxs)("div", {
            className: _.Qs,
            children: [(0, r.jsx)(o.Heading, {
                variant: "heading-md/semibold",
                id: E,
                children: v
            }), (0, r.jsx)(o.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                children: A
            }), (0, r.jsxs)("div", {
                className: _.UD,
                children: [(0, r.jsx)(o.Button, {
                    variant: "primary",
                    text: p.intl.string(p.t["9VLmlZ"]),
                    buttonRef: g,
                    onClick: I,
                    loading: y
                }), (0, r.jsx)(s.$n, {
                    onClick: m,
                    look: s.$n.Looks.BLANK,
                    className: _.ZT,
                    children: p.intl.string(p.t["2m+Sqk"])
                })]
            })]
        })]
    })
}