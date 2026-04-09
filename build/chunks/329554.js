/** chunk id: 329554 params = (module,exports,require) **/
i.d(e, {
    A: () => g
});
var n = i(627968);
i(64700);
var a = i(311907),
    l = i(397927),
    s = i(302959),
    r = i(765379),
    d = i(592182),
    o = i(506326),
    c = i(409626),
    u = i(692969),
    p = i(78871),
    m = i(287809),
    A = i(804630),
    h = i(257081);

function E(t) {
    let {
        resolvedActivity: e,
        presenceActivity: i,
        showHeader: a = !0
    } = t, s = (0, u.A)({
        location: "UserActivityRow",
        applicationId: e.applicationId,
        source: c.Ob.UserProfile,
        sourceUserId: e.userId,
        trackEntryPointImpression: !0
    }), d = null != i && !(0, r.A)(i) && null != i.party, m = null != e.state && e.state.length > 0 && !d;
    return (0, n.jsxs)("div", {
        className: h.ec,
        children: [a ? (0, n.jsx)("div", {
            className: h.N1,
            children: (0, n.jsx)(l.Heading, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: (0, A._Q)(e.type)
            })
        }) : null, (0, n.jsxs)("div", {
            className: h.Wh,
            children: [(0, n.jsx)(A.Tf, {
                resolvedActivity: e
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
                        children: e.name
                    }), null != e.details ? (0, n.jsx)(l.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        children: e.details
                    }) : null, m ? (0, n.jsx)(l.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        children: e.state
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
let g = /^(14256|21552)$/.test(i.j) ? function(t) {
    let {
        channel: e,
        presenceActivity: i,
        userId: l,
        embeddedApp: r,
        applicationStream: o,
        onAction: c,
        showHeader: u = !0
    } = t, p = (0, a.bG)([m.default], () => null != l ? m.default.getUser(l) : null, [l]);
    if (null == p) return null;
    let h = (0, A.Gf)(p.id, i, r);
    return (0, n.jsxs)("div", {
        children: [h.isSpotify ? (0, n.jsx)(A.vP, {
            resolvedActivity: h,
            showHeader: u
        }) : (0, n.jsx)(E, {
            resolvedActivity: h,
            presenceActivity: i,
            showHeader: u
        }), (0, n.jsx)(d.A, {
            type: null != o ? s.M.STREAM_PREVIEW : s.M.VOICE_CHANNEL,
            activity: i,
            embeddedActivity: r?.embeddedActivity,
            applicationStream: o,
            user: p,
            guildId: e.guild_id,
            channelId: e.id,
            buttonVariant: "primary",
            onAction: c
        })]
    })
} : null