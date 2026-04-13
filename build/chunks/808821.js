/** chunk id: 808821 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => N
}), n(938796);
var i = n(627968),
    r = n(64700),
    s = n(665260),
    a = n(311907),
    l = n(732955),
    o = n(397927),
    c = n(274372),
    u = n(17069),
    d = n(794905),
    _ = n(320501),
    E = n(998218),
    A = n(888675),
    m = n(652215),
    I = n(985018),
    T = n(419397);

function N(e) {
    let {
        message: t,
        compact: n
    } = e, N = t.channel_id, g = (0, a.bG)([_.A], () => null != t.messageReference ? _.A.getMessage(t.messageReference.channel_id, t.messageReference.message_id) : null, [t.messageReference]), {
        clipId: p,
        remoteTriggerClipId: C
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
    }(g.content) : {}, [g]), f = (0, a.bG)([c.A], () => c.A.getMatchingGroupClip(p, C)), h = (0, a.bG)([c.A], () => null != f && null != N && c.A.wasClipSharedInChannel(f.id, N)), {
        onShareClick: S
    } = (0, d.A)(N), R = r.useCallback(() => {
        null != f && null != N && t.messageReference?.message_id != null && S({
            clips: [f],
            messageReference: {
                channel_id: N,
                message_id: t.messageReference.message_id
            }
        })
    }, [f, N, t.messageReference, S]);
    if (null == g || null == p && null == C || null == f || h) return null;
    let x = g.attachments.find(e => (0, s.Lt)(e.flags ?? 0, m.sbO.IS_CLIP)),
        O = null;
    if (x?.proxy_url != null) {
        let e = E.A.toURLSafe(x.proxy_url);
        null != e && (e.searchParams.append("format", "webp"), O = e.toString())
    }
    let M = null != O ? [O, f.thumbnail] : [f.thumbnail];
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
            }), (0, i.jsx)(l.$nd, {
                size: "sm",
                onClick: R,
                text: I.intl.string(I.t["5qb8EX"]),
                icon: o.W4J
            })]
        }),
        children: I.intl.string(I.t.ThhsNG)
    })
}