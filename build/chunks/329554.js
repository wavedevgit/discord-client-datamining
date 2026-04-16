/** chunk id: 329554 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var a = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    s = n(302959),
    r = n(765379),
    c = n(592182),
    o = n(506326),
    d = n(409626),
    u = n(692969),
    p = n(78871),
    m = n(287809),
    h = n(804630),
    g = n(145225);

function _(e) {
    let {
        resolvedActivity: t,
        presenceActivity: n,
        showHeader: i = !0
    } = e, s = (0, u.A)({
        location: "UserActivityRow",
        applicationId: t.applicationId,
        source: d.Ob.UserProfile,
        sourceUserId: t.userId,
        trackEntryPointImpression: !0
    }), c = null != n && !(0, r.A)(n) && null != n.party, m = null != t.state && t.state.length > 0 && !c;
    return (0, a.jsxs)("div", {
        className: g.ec,
        children: [i ? (0, a.jsx)("div", {
            className: g.N1,
            children: (0, a.jsx)(l.Heading, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: (0, h._Q)(t.type)
            })
        }) : null, (0, a.jsxs)("div", {
            className: g.Wh,
            children: [(0, a.jsx)(h.Tf, {
                resolvedActivity: t
            }), (0, a.jsx)("div", {
                className: g.wt,
                children: (0, a.jsxs)(l.DUT, {
                    className: null != s ? g.wv : void 0,
                    onClick: s,
                    children: [(0, a.jsx)(l.Heading, {
                        variant: "heading-sm/medium",
                        color: "text-strong",
                        className: g.DD,
                        lineClamp: 1,
                        children: t.name
                    }), null != t.details ? (0, a.jsx)(l.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        children: t.details
                    }) : null, m ? (0, a.jsx)(l.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        children: t.state
                    }) : null, null != n ? (0, a.jsxs)(o.mG, {
                        location: o.N5.VOICE_USER_POPOUT,
                        children: [(0, a.jsx)(p.QA, {
                            activity: n
                        }), (0, a.jsx)(p.cy, {
                            activity: n
                        }), (0, a.jsx)(p.Rq, {
                            activity: n
                        })]
                    }) : null]
                })
            })]
        })]
    })
}
let A = /^(14256|21552)$/.test(n.j) ? function(e) {
    let {
        channel: t,
        presenceActivity: n,
        userId: l,
        embeddedApp: r,
        applicationStream: o,
        onAction: d,
        showHeader: u = !0
    } = e, p = (0, i.bG)([m.default], () => null != l ? m.default.getUser(l) : null, [l]);
    if (null == p) return null;
    let g = (0, h.Gf)(p.id, n, r);
    return (0, a.jsxs)("div", {
        children: [g.isSpotify ? (0, a.jsx)(h.vP, {
            resolvedActivity: g,
            showHeader: u
        }) : (0, a.jsx)(_, {
            resolvedActivity: g,
            presenceActivity: n,
            showHeader: u
        }), (0, a.jsx)(c.A, {
            type: null != o ? s.M.STREAM_PREVIEW : s.M.VOICE_CHANNEL,
            activity: n,
            embeddedActivity: r?.embeddedActivity,
            applicationStream: o,
            user: p,
            guildId: t.guild_id,
            channelId: t.id,
            buttonVariant: "primary",
            onAction: d
        })]
    })
} : null