/** chunk id: 829963, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
}), n(321073);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    a = n(572211),
    s = n(354287),
    o = n(693879),
    c = n(353411),
    u = n(882171),
    d = n(206589),
    p = n(768349),
    m = n(985018),
    f = n(609653);

function g(e) {
    var t, n, g, _;
    let {
        application: h,
        message: b,
        header: y,
        presenceActivity: A,
        hideParty: v,
        partyStatusElement: O,
        currentUserPresenceActivity: x,
        onClickContent: E,
        onView: j,
        guildId: C
    } = e, I = (0, d.w)(x, A), S = (0, c.Gq)(A, b.author, "Invite Embed"), T = i.useMemo(() => {
        let e = [];
        if (!I) {
            var t;
            e.push({
                label: null != (t = S.label) ? t : m.intl.string(m.t.VJlc0S),
                trackingArea: s.kY.SYNC,
                onClick: () => {
                    S.onClick()
                },
                disabled: S.disabled,
                disabledReason: S.disabled ? S.tooltip : void 0
            })
        }
        return e
    }, [I, S]), N = null != A && null != A.details && null != A.state ? m.intl.formatToPlainString(m.t.JCvHtx, {
        track: A.details,
        artist: A.state
    }) : h.name, P = null != (t = null == A || null == (g = A.timestamps) ? void 0 : g.start) ? t : null == A ? void 0 : A.created_at, w = i.useMemo(() => {
        var e;
        return null != P ? (0, r.jsxs)("div", {
            className: f.Ym,
            children: [(0, r.jsx)(l.T7G, {
                size: "xxs",
                color: "currentColor"
            }), (0, r.jsx)(o.z, {
                entry: {
                    start: P,
                    end: null == A || null == (e = A.timestamps) ? void 0 : e.end
                },
                textColor: "currentColor",
                textTabularNumbers: !1,
                textFontCode: !1
            })]
        }) : null
    }, [P, null == A || null == (_ = A.timestamps) ? void 0 : _.end]), R = i.useMemo(() => (0, r.jsxs)("div", {
        className: f.pq,
        children: [(0, r.jsx)(l.Text, {
            variant: "text-xs/normal",
            className: f.dS,
            color: "none",
            lineClamp: 1,
            children: w
        }), v ? null : O]
    }), [w, v, O]);
    return (0, r.jsx)(a.h, {
        header: y,
        title: N,
        iconSrc: null != (n = (0, u.A)(A, h.id)) ? n : void 0,
        info: R,
        actions: T,
        onClickContent: E,
        trackingConfig: {
            id: h.id,
            linkType: p.J.RICH_PRESENCE_INVITE,
            onView: j,
            referrerId: b.author.id,
            guildId: C,
            channelId: b.channel_id,
            messageId: b.id
        }
    })
}