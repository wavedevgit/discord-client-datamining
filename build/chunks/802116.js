/** chunk id: 802116 params = (module,exports,require) **/
i.d(t, {
    i: () => m
});
var n = i(735438),
    l = i.n(n),
    a = i(815807),
    s = i(734057),
    r = i(956703),
    o = i(994500),
    u = i(562153),
    d = i(505527),
    c = i(985018);
let h = {
    standard: {
        reactionTooltip1NInteractive: c.t.dgtYDJ,
        reactionTooltip1N: c.t.mXild1,
        reactionTooltip1: c.t.Oro30L,
        reactionTooltip2NInteractive: c.t["0GBwVR"],
        reactionTooltip2N: c.t.UWGs2n,
        reactionTooltip2: c.t["p+0jvt"],
        reactionTooltip3NInteractive: c.t["dK6/7W"],
        reactionTooltip3N: c.t["UnXdX/"],
        reactionTooltip3: c.t.bbPMcR,
        reactionTooltipNInteractive: c.t.Thj7LX,
        reactionTooltipN: c.t.CRrc7c
    },
    burst: {
        reactionTooltip1NInteractive: c.t.G98B0W,
        reactionTooltip1N: c.t["u/03eN"],
        reactionTooltip1: c.t["z4q3+w"],
        reactionTooltip2NInteractive: c.t.wkcffp,
        reactionTooltip2N: c.t.T4EYUu,
        reactionTooltip2: c.t.R2HykW,
        reactionTooltip3NInteractive: c.t.OhtGxz,
        reactionTooltip3N: c.t["M8bwl+"],
        reactionTooltip3: c.t.sNl6XR,
        reactionTooltipNInteractive: c.t.nsITOq,
        reactionTooltipN: c.t.dkieH5
    }
};

function m(e, t) {
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.v.NORMAL,
        n = arguments.length > 3 ? arguments[3] : void 0,
        m = r.A.getReactions(e.getChannelId(), e.id, t, 3, i),
        p = s.A.getChannel(e.getChannelId()),
        g = null == p || p.isPrivate() ? null : p.getGuildId(),
        A = e.getReaction(t),
        f = i === d.v.BURST,
        T = l()(Array.from(m?.values() ?? [])).reject(e => o.A.isBlockedOrIgnored(e.id)).take(3).map(e => u.Ay.getName(g, p?.id, e)).value();
    if (0 === T.length) return "";
    let E = f ? h.burst : h.standard,
        x = Math.max(0, ((f ? A?.burst_count : A?.count) ?? 0) - T.length),
        N = (0, a.b3)(t);
    if (1 === T.length)
        if (!(x > 0)) return c.intl.formatToPlainString(E.reactionTooltip1, {
            a: T[0],
            emojiName: N
        });
        else if (null != n) return c.intl.format(E.reactionTooltip1NInteractive, {
        a: T[0],
        n: x,
        emojiName: N,
        onClick: n
    });
    else return c.intl.formatToPlainString(E.reactionTooltip1N, {
        a: T[0],
        n: x,
        emojiName: N
    });
    if (2 === T.length)
        if (!(x > 0)) return c.intl.formatToPlainString(E.reactionTooltip2, {
            a: T[0],
            b: T[1],
            emojiName: N
        });
        else if (null != n) return c.intl.format(E.reactionTooltip2NInteractive, {
        a: T[0],
        b: T[1],
        n: x,
        emojiName: N,
        onClick: n
    });
    else return c.intl.formatToPlainString(E.reactionTooltip2N, {
        a: T[0],
        b: T[1],
        n: x,
        emojiName: N
    });
    return 3 !== T.length ? null != n ? c.intl.format(E.reactionTooltipNInteractive, {
        n: x,
        emojiName: N,
        onClick: n
    }) : c.intl.formatToPlainString(E.reactionTooltipN, {
        n: x,
        emojiName: N
    }) : x > 0 ? null != n ? c.intl.format(E.reactionTooltip3NInteractive, {
        a: T[0],
        b: T[1],
        c: T[2],
        n: x,
        emojiName: N,
        onClick: n
    }) : c.intl.formatToPlainString(E.reactionTooltip3N, {
        a: T[0],
        b: T[1],
        c: T[2],
        n: x,
        emojiName: N
    }) : c.intl.formatToPlainString(E.reactionTooltip3, {
        a: T[0],
        b: T[1],
        c: T[2],
        emojiName: N
    })
}