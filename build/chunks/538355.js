/** chunk id: 538355 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => A
});
var l = n(627968),
    s = n(64700),
    i = n(954571),
    r = n(903369),
    a = n(465364),
    o = n(380512),
    u = n(78377),
    c = n(536048),
    d = n(652215),
    m = n(985018),
    h = n(900543);
let g = s.lazy(() => Promise.all([n.e("369"), n.e("72756")]).then(n.bind(n, 532255)));

function A(e, t) {
    let {
        hideSimpleEmbedContent: A,
        formatInline: f = !1,
        noStyleAndInteraction: p = !1,
        isInteracting: x = !1,
        allowHeading: v = !1,
        allowList: C = !1,
        allowLinks: N = !1,
        allowDevLinks: b = !1,
        previewLinkTarget: T = !1,
        viewingChannelId: E
    } = t, j = (0, c.I)({
        location: "useMessageRenderedContent"
    }), [I, _] = s.useState(!1), S = s.useCallback(e => {
        e && _(!0)
    }, []);
    return s.useEffect(() => {
        _(!1)
    }, [e.content]), s.useMemo(() => {
        if (null != e.customRenderedContent) return e.customRenderedContent;
        if (e.isUnsupported) return {
            content: m.intl.string(m.t.sWi5EU),
            hasSpoilerEmbeds: !1,
            hasBailedAst: !1
        };
        if (e.isCommandType() && 0 === e.content.length || e.hasFlag(d.pr7.LOADING)) return (0, o.A)(e);
        if (e.type === d.lAJ.CHANGELOG) {
            let {
                renderChangelogMessageMarkup: t
            } = n(550997);
            return t(e, h, {
                track: (e, t) => {
                    i.default.track(e, t)
                }
            })
        }
        return j.enabled ? {
            content: (0, l.jsx)(s.Suspense, {
                children: (0, l.jsx)(u.O.Provider, {
                    value: {
                        messageId: e.id,
                        channelId: e.channel_id,
                        viewingChannelId: E,
                        guildId: (0, r.U)(e),
                        setHasSpoilerEmbeds: S
                    },
                    children: (0, l.jsx)(g, {
                        content: e.content
                    })
                })
            }),
            hasSpoilerEmbeds: I,
            hasBailedAst: !1
        } : (0, a.Ay)(e, {
            hideSimpleEmbedContent: A,
            formatInline: f,
            noStyleAndInteraction: p,
            isInteracting: x,
            allowHeading: v,
            allowList: C,
            allowLinks: N,
            allowDevLinks: b,
            previewLinkTarget: T,
            viewingChannelId: E
        })
    }, [e.content, e.customRenderedContent, e.embeds, e.interaction, e.state, e.type, A, f, p, x, v, C, N, T, b, E, j.enabled, I])
}