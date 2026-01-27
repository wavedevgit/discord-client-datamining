/** Chunk was on web.js **/
/** chunk id: 774363, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => y
}), n(938796), n(896048), n(693327), n(554719), n(680155), n(323874), n(14289), n(35956);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    o = n(179771),
    s = n(665260),
    l = n(571356),
    c = n(397927),
    u = n(537569),
    d = n(224750),
    f = n(661191),
    p = n(510783),
    _ = n(647053),
    h = n(652215),
    m = n(985018),
    g = n(934715);
let E = e => {
    switch (e) {
        case d.yW.IP_LOCATION:
            return c.L_e;
        case d.yW.DISPLAYS_ADVERTISEMENTS:
            return c.JD7;
        default:
            return null
    }
};

function y(e) {
    var t;
    let n, {
            application: i,
            scopes: l,
            redirectUri: y,
            approximateGuildCount: O,
            isEmbeddedFlow: v,
            disclosures: A
        } = e,
        I = new Date(f.default.extractTimestamp(i.id)),
        S = (0, _.i4)(l),
        T = (0, s.Lt)(null != (t = i.flags) ? t : 0, h.gfo.EMBEDDED);
    if (null != y && !T && !v) try {
        let e = new URL(y);
        n = null != e.host && e.host.length > 0 ? e.origin : e.href
    } catch (e) {
        n = null
    }
    let C = u.v.useExperiment({
        location: "oauth2_authorize"
    });
    return (0, r.jsxs)("div", {
        className: a()(g.B_, {
            [g.pN]: C.enabled
        }),
        children: [null != n ? (0, r.jsx)(b, {
            icon: c.qYV,
            text: m.intl.format(m.t["5k5OKD"], {
                origin: n
            })
        }) : null, (0, r.jsx)(b, {
            icon: c.XAi,
            text: (0, p.w)(i)
        }), (0, r.jsx)(b, {
            icon: c.O4,
            text: m.intl.formatToPlainString(m.t["+1bjc8"], {
                date: I
            })
        }), l.includes(o.F.BOT) && null != O ? (0, r.jsx)(b, {
            icon: c.CnV,
            text: m.intl.formatToPlainString(m.t.UHGHSP, {
                guildCount: O
            })
        }) : null, (0, r.jsx)(b, {
            icon: c.lmn,
            text: S
        }), null != A ? A.map(e => {
            let t = (0, d.wI)(e),
                n = E(e);
            return null != n && null != t ? (0, r.jsx)(b, {
                icon: n,
                text: t
            }) : null
        }) : null]
    })
}

function b(e) {
    let {
        icon: t,
        text: n
    } = e;
    return (0, r.jsxs)("div", {
        className: g.f_,
        children: [(0, r.jsx)(t, {
            className: g.u7,
            color: "currentColor"
        }), (0, r.jsx)(l.E, {
            variant: "text-xs/normal",
            className: g.z9,
            children: n
        })]
    })
}