/** chunk id: 444901, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => j
}), n(321073), n(228524);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(397927),
    c = n(544420),
    u = n(572211),
    d = n(354287),
    p = n(769015),
    m = n(763754),
    f = n(447215),
    g = n(888675),
    _ = n(320501),
    h = n(456060),
    b = n(472590),
    A = n(878831),
    y = n(768349),
    v = n(985018),
    x = n(609653),
    O = n(103467);

function E(e) {
    let {
        message: t,
        applicationName: n,
        iconSrc: i,
        channel: l,
        currentUserId: s,
        viewAction: c
    } = e, u = (0, m.Ay)(t), d = (0, f.P)({
        user: t.author,
        channelId: l.id,
        guildId: l.guild_id,
        messageId: t.id
    })(u);
    return (0, r.jsx)(g.A, {
        compact: !1,
        children: v.intl.format(s === t.author.id ? v.t.anvg2q : v.t.AxVbYF, {
            username: u.nick,
            usernameHook: d,
            applicationHook: () => {
                let e = null != c ? o.MzZ : "div";
                return (0, r.jsxs)(e, {
                    onClick: c,
                    className: x.Lf,
                    children: [(0, r.jsx)("img", {
                        alt: v.intl.string(v.t["2B/phM"]),
                        src: i,
                        className: a()(O.Gt, p.M.XSMALL)
                    }), (0, r.jsx)(o.Text, {
                        variant: "text-sm/semibold",
                        color: "text-muted",
                        children: n
                    })]
                })
            }
        })
    })
}

function j(e) {
    let {
        message: t,
        application: n,
        applicationName: l,
        channel: a,
        header: p,
        currentUserId: m,
        launchableAppId: f,
        isEmbeddedApplication: g,
        tryWithGdnAction: O,
        staticBannerSrc: j,
        onClickContent: C,
        iconSrc: I,
        onView: S,
        presenceActivity: T,
        analyticsLocations: N,
        showAuthButton: P,
        startAuthorization: w,
        accountLinkButtonRef: R,
        renderAccountLinkUpsell: D
    } = e, L = (0, s.bG)([_.A], () => _.A.getMessages(a.id)), {
        actions: M,
        hasAccountLinkButton: k
    } = i.useMemo(() => {
        let e = [],
            r = !0,
            i = !1;
        if (null != f ? e = [{
                label: v.intl.string(v.t["s+J8Dl"]),
                trackingArea: d.kY.PLAY,
                isDeadEnd: !0,
                onClick: () => {
                    c.A.launch({
                        applicationId: f,
                        embedded: g
                    })
                }
            }] : null != O && (e = [O], r = !1), e.length > 0)
            if (!(0, b.p)(t.id, L, n.id, T)) return {
                actions: [],
                hasAccountLinkButton: !1
            };
            else P && r && (e.push({
                label: v.intl.string(v.t.lw71Nf),
                trackingArea: d.kY.CONNECT_ACCOUNT,
                onClick: () => {
                    w({
                        analyticsLocations: N
                    })
                },
                icon: o.A5T,
                iconButton: !0,
                buttonRef: R
            }), i = !0);
        return {
            actions: e,
            hasAccountLinkButton: i
        }
    }, [g, f, O, L, T, n.id, t.id, P, w, N, R]), U = M.some(e => e.trackingArea === d.kY.CLOUD_PLAY);
    (0, A.A)(U, N);
    let G = M.length > 0,
        B = i.useMemo(() => (0, r.jsx)(o.Text, {
            variant: "text-xs/medium",
            className: x.h_,
            color: "none",
            lineClamp: 3,
            children: (0, h.BE)(t, l, a, m, G)
        }), [t, l, a, m, G]);
    return 0 === M.length ? (0, r.jsx)(E, {
        message: t,
        applicationName: l,
        iconSrc: I,
        channel: a,
        currentUserId: m,
        viewAction: C
    }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(u.h, {
            header: p,
            title: l,
            staticBannerSrc: j,
            onClickBanner: C,
            bannerAspectRatio: u.u.ACTIVITY,
            iconSrc: null != I ? I : void 0,
            info: B,
            actions: M,
            primaryActionFirst: !0,
            onClickContent: C,
            trackingConfig: {
                id: n.id,
                linkType: y.J.RICH_PRESENCE_INVITE,
                onView: S,
                referrerId: t.author.id,
                guildId: a.guild_id,
                channelId: t.channel_id,
                messageId: t.id,
                isDeadEnd: !0
            }
        }), k ? D() : null]
    })
}