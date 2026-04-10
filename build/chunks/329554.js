/** chunk id: 329554 params = (module,exports,require) **/
i.d(t, {
    A: () => A
});
var n = i(627968);
i(64700);
var a = i(311907),
    l = i(397927),
    s = i(302959),
    r = i(765379),
    c = i(592182),
    o = i(506326),
    d = i(409626),
    u = i(692969),
    p = i(78871),
    m = i(287809),
    _ = i(804630),
    h = i(257081);

function g(e) {
    let {
        resolvedActivity: t,
        presenceActivity: i,
        showHeader: a = !0
    } = e, s = (0, u.A)({
        location: "UserActivityRow",
        applicationId: t.applicationId,
        source: d.Ob.UserProfile,
        sourceUserId: t.userId,
        trackEntryPointImpression: !0
    }), c = null != i && !(0, r.A)(i) && null != i.party, m = null != t.state && t.state.length > 0 && !c;
    return (0, n.jsxs)("div", {
        className: h.ec,
        children: [a ? (0, n.jsx)("div", {
            className: h.N1,
            children: (0, n.jsx)(l.Heading, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: (0, _._Q)(t.type)
            })
        }) : null, (0, n.jsxs)("div", {
            className: h.Wh,
            children: [(0, n.jsx)(_.Tf, {
                resolvedActivity: t
            }), (0, n.jsx)("div", {
                className: h.wt,
                children: (0, n.jsxs)(l.DUT, {
                    className: null != s ? h.wv : void 0,
                    onClick: s,
                    children: [(0, n.jsx)(l.Heading, {
                        variant: "heading-sm/medium",
                        color: "text-strong",
                        className: h.DD,
                        lineClamp: 1,
                        children: t.name
                    }), null != t.details ? (0, n.jsx)(l.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        children: t.details
                    }) : null, m ? (0, n.jsx)(l.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        children: t.state
                    }) : null, null != i ? (0, n.jsxs)(o.mG, {
                        location: o.N5.VOICE_USER_POPOUT,
                        children: [(0, n.jsx)(p.QA, {
                            activity: i
                        }), (0, n.jsx)(p.cy, {
                            activity: i
                        }), (0, n.jsx)(p.Rq, {
                            activity: i
                        })]
                    }) : null]
                })
            })]
        })]
    })
}
let A = /^(14256|21552)$/.test(i.j) ? function(e) {
    let {
        channel: t,
        presenceActivity: i,
        userId: l,
        embeddedApp: r,
        applicationStream: o,
        onAction: d,
        showHeader: u = !0
    } = e, p = (0, a.bG)([m.default], () => null != l ? m.default.getUser(l) : null, [l]);
    if (null == p) return null;
    let h = (0, _.Gf)(p.id, i, r);
    return (0, n.jsxs)("div", {
        children: [h.isSpotify ? (0, n.jsx)(_.vP, {
            resolvedActivity: h,
            showHeader: u
        }) : (0, n.jsx)(g, {
            resolvedActivity: h,
            presenceActivity: i,
            showHeader: u
        }), (0, n.jsx)(c.A, {
            type: null != o ? s.M.STREAM_PREVIEW : s.M.VOICE_CHANNEL,
            activity: i,
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