/** chunk id: 699256 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(219504),
    o = n(975571),
    d = n(923121),
    c = n(352821),
    u = n(949034),
    m = n(250006),
    g = n(652215),
    x = n(539916),
    h = n(985018),
    _ = n(136187);

function p(e) {
    let {
        guildId: t
    } = e, p = (0, l.bG)([c.A], () => c.A.getEditedConnections()), A = (0, l.bG)([c.A], () => c.A.isSubmitting()), f = s.useCallback(() => {
        (0, r.mMO)(async () => {
            let {
                default: e
            } = await n.e("90194").then(n.bind(n, 566857));
            return t => (0, i.jsx)(e, {
                ...t
            })
        })
    }, []), j = s.useMemo(() => p.map(e => ({
        ...e,
        id: (0, x.Sq)(e)
    })), [p]), N = s.useCallback(e => {
        let t = e.map(e => {
            let {
                id: t,
                ...n
            } = e;
            return n
        });
        (0, d.Bq)(t)
    }, []), {
        handleDragStart: E,
        handleDragReset: C,
        handleDragComplete: T,
        draggingId: I
    } = (0, a.A)(j, N), {
        enabled: b
    } = u.A.useExperiment({
        guildId: t,
        location: "guild_settings"
    }, {
        autoTrackExposure: !0
    });
    if (!b) return null;
    let v = p.length < x.pA;
    return (0, i.jsxs)("div", {
        className: _.jx,
        children: [(0, i.jsxs)("div", {
            className: _.G6,
            children: [(0, i.jsx)(r.Heading, {
                variant: "heading-lg/bold",
                children: h.intl.string(h.t.Cl8F8H)
            }), (0, i.jsx)(r.Text, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: h.intl.format(h.t.vqgyJR, {
                    linkedRolesUrl: o.A.getArticleURL(g.MVz.CONNECTION_DETAILS_ADMIN)
                })
            }), !v && (0, i.jsx)(r.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: h.intl.format(h.t.Nc7guW, {
                    max: x.pA
                })
            })]
        }), p.length > 0 && (0, i.jsx)("div", {
            className: _.eF,
            children: j.map((e, t) => (0, i.jsx)(m.A, {
                connection: e,
                index: t,
                onDragStart: E,
                onDragReset: C,
                onDragComplete: T,
                draggingId: I
            }, e.id))
        }), (0, i.jsxs)("button", {
            className: _.qG,
            onClick: f,
            disabled: !v || A,
            type: "button",
            children: [(0, i.jsx)(r.U1e, {
                size: "custom",
                width: 20,
                height: 20,
                color: "currentColor"
            }), (0, i.jsx)(r.Text, {
                variant: "text-md/semibold",
                color: "text-brand",
                children: h.intl.string(h.t["03EqaC"])
            })]
        })]
    })
}