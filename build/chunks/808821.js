/** chunk id: 808821 params = (module,exports,require) **/
n.d(t, {
    A: () => g
}), n(938796);
var i = n(627968),
    l = n(64700),
    a = n(665260),
    r = n(311907),
    s = n(732955),
    o = n(397927),
    c = n(274372),
    d = n(17069),
    u = n(794905),
    _ = n(320501),
    A = n(998218),
    m = n(888675),
    E = n(652215),
    T = n(985018),
    I = n(419397);

function g(e) {
    let {
        message: t,
        compact: n
    } = e, g = t.channel_id, N = (0, r.bG)([_.A], () => null != t.messageReference ? _.A.getMessage(t.messageReference.channel_id, t.messageReference.message_id) : null, [t.messageReference]), {
        clipId: f,
        remoteTriggerClipId: C
    } = l.useMemo(() => null != N ? function(e) {
        let t = "__CLIP_METADATA__",
            n = e.indexOf(t);
        if (-1 === n) return {};
        let i = n + t.length,
            l = e.substring(i);
        try {
            let e = JSON.parse(l);
            return {
                clipId: e.id,
                remoteTriggerClipId: e.remoteTriggerClipId
            }
        } catch (e) {
            return {}
        }
    }(N.content) : {}, [N]), h = (0, r.bG)([c.A], () => c.A.getMatchingGroupClip(f, C)), p = (0, r.bG)([c.A], () => null != h && null != g && c.A.wasClipSharedInChannel(h.id, g)), {
        onShareClick: S
    } = (0, u.A)(g), x = l.useCallback(() => {
        null != h && null != g && t.messageReference?.message_id != null && S({
            clips: [h],
            messageReference: {
                channel_id: g,
                message_id: t.messageReference.message_id
            }
        })
    }, [h, g, t.messageReference, S]);
    if (null == N || null == f && null == C || null == h || p) return null;
    let R = N.attachments.find(e => (0, a.Lt)(e.flags ?? 0, E.sbO.IS_CLIP)),
        O = null;
    if (R?.proxy_url != null) {
        let e = A.A.toURLSafe(R.proxy_url);
        null != e && (e.searchParams.append("format", "webp"), O = e.toString())
    }
    let M = null != O ? [O, h.thumbnail] : [h.thumbnail];
    return (0, i.jsx)(m.A, {
        iconNode: (0, i.jsx)(o.xgA, {
            size: "md",
            color: "currentColor"
        }),
        timestamp: t.timestamp,
        compact: n,
        additionalContent: (0, i.jsxs)("div", {
            className: I.i,
            children: [(0, i.jsx)(d.A, {
                thumbnails: M,
                variant: "stacked"
            }), (0, i.jsx)(s.$nd, {
                size: "sm",
                onClick: x,
                text: T.intl.string(T.t["5qb8EX"]),
                icon: o.W4J
            })]
        }),
        children: T.intl.string(T.t.ThhsNG)
    })
}