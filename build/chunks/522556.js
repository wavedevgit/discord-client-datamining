/** chunk id: 522556 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(397927),
    o = n(686956),
    c = n(935649),
    d = n(847599),
    u = n(36149),
    h = n(323073),
    A = n(506164),
    m = n(204925),
    _ = n(985018),
    p = n(324025);

function g(e) {
    let {
        guild: t,
        channelId: n
    } = e, {
        modalType: l,
        ...r
    } = (0, h.k$)(t), a = s.useCallback(() => {
        null != t && o.A.nsfwReturnToSafety(t.id)
    }, [t]), p = s.useCallback(() => {
        null != t && o.A.nsfwAgree(t.id)
    }, [t]), g = s.useCallback(() => {
        c.A.showAgeVerificationGetStartedModal({
            entryPoint: d.q1.NSFW_GUILD
        })
    }, []);
    (0, u.I7)(m.w_.NSFW_SERVER);
    let f = {
        ...r,
        guildId: t?.id,
        channelId: n,
        disagreement: _.intl.string(_.t["/g10LC"])
    };
    switch (l) {
        case d.A5.NSFW_CHANNEL_AGE_VERIFY:
        case d.A5.GUILD_LARGE_SERVER:
            return (0, i.jsx)(A.A, {
                onAgree: g,
                onDisagree: a,
                modalType: l,
                ...f
            });
        default:
            return (0, i.jsx)(A.A, {
                onAgree: p,
                onDisagree: a,
                modalType: l,
                ...f
            })
    }
}
let f = function(e) {
    let {
        guild: t,
        channelId: n,
        className: l
    } = e, o = s.useRef(null);
    return s.useEffect(() => {
        let {
            current: e
        } = o;
        e?.scrollToBottom()
    }, []), (0, i.jsx)(a.T7Y, {
        ref: o,
        className: p.X,
        children: (0, i.jsx)("div", {
            className: r()(l, p.i),
            children: (0, i.jsx)(g, {
                guild: t,
                channelId: n
            })
        })
    })
}