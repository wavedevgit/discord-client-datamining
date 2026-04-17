/** chunk id: 808821 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => N
}), n(938796);
var i = n(627968),
    r = n(64700),
    s = n(665260),
    l = n(311907),
    a = n(732955),
    o = n(397927),
    c = n(274372),
    u = n(17069),
    d = n(794905),
    _ = n(320501),
    E = n(998218),
    A = n(888675),
    m = n(652215),
    I = n(985018),
    T = n(970677);

function N(e) {
    let {
        message: t,
        compact: n
    } = e, N = t.channel_id, g = (0, l.bG)([_.A], () => null != t.messageReference ? _.A.getMessage(t.messageReference.channel_id, t.messageReference.message_id) : null, [t.messageReference]), {
        clipId: p,
        remoteTriggerClipId: f
    } = r.useMemo(() => null != g ? function(e) {
        let t = "__CLIP_METADATA__",
            n = e.indexOf(t);
        if (-1 === n) return {};
        let i = n + t.length,
            r = e.substring(i);
        try {
            let e = JSON.parse(r);
            return {
                clipId: e.id,
                remoteTriggerClipId: e.remoteTriggerClipId
            }
        } catch (e) {
            return {}
        }
    }(g.content) : {}, [g]), C = (0, l.bG)([c.A], () => c.A.getMatchingGroupClip(p, f)), h = (0, l.bG)([c.A], () => null != C && null != N && c.A.wasClipSharedInChannel(C.id, N)), {
        onShareClick: S
    } = (0, d.A)(N), R = r.useCallback(() => {
        null != C && null != N && t.messageReference?.message_id != null && S({
            clips: [C],
            messageReference: {
                channel_id: N,
                message_id: t.messageReference.message_id
            }
        })
    }, [C, N, t.messageReference, S]);
    if (null == g || null == p && null == f || null == C || h) return null;
    let x = g.attachments.find(e => (0, s.Lt)(e.flags ?? 0, m.sbO.IS_CLIP)),
        O = null;
    if (x?.proxy_url != null) {
        let e = E.A.toURLSafe(x.proxy_url);
        null != e && (e.searchParams.append("format", "webp"), O = e.toString())
    }
    let M = null != O ? [O, C.thumbnail] : [C.thumbnail];
    return (0, i.jsx)(A.A, {
        iconNode: (0, i.jsx)(o.xgA, {
            size: "md",
            color: "currentColor"
        }),
        timestamp: t.timestamp,
        compact: n,
        additionalContent: (0, i.jsxs)("div", {
            className: T.i,
            children: [(0, i.jsx)(u.A, {
                thumbnails: M,
                variant: "stacked"
            }), (0, i.jsx)(a.$nd, {
                size: "sm",
                onClick: R,
                text: I.intl.string(I.t["5qb8EX"]),
                icon: o.W4J
            })]
        }),
        children: I.intl.string(I.t.ThhsNG)
    })
}