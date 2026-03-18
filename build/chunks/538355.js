/** chunk id: 538355 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
});
var l = n(627968),
    s = n(64700),
    i = n(954571),
    a = n(903369),
    r = n(465364),
    o = n(380512),
    u = n(78377),
    c = n(536048),
    d = n(652215),
    m = n(985018),
    h = n(903957);
let g = s.lazy(() => Promise.all([n.e("369"), n.e("72756")]).then(n.bind(n, 532255)));

function p(e, t) {
    let {
        hideSimpleEmbedContent: p,
        formatInline: A = !1,
        noStyleAndInteraction: x = !1,
        isInteracting: f = !1,
        allowHeading: v = !1,
        allowList: j = !1,
        allowLinks: N = !1,
        allowDevLinks: C = !1,
        previewLinkTarget: b = !1,
        viewingChannelId: E
    } = t, I = (0, c.I)({
        location: "useMessageRenderedContent"
    }), [y, T] = s.useState(!1), R = s.useCallback(e => {
        e && T(!0)
    }, []);
    return s.useEffect(() => {
        T(!1)
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
        return I.enabled ? {
            content: (0, l.jsx)(s.Suspense, {
                children: (0, l.jsx)(u.O.Provider, {
                    value: {
                        messageId: e.id,
                        channelId: e.channel_id,
                        viewingChannelId: E,
                        guildId: (0, a.U)(e),
                        setHasSpoilerEmbeds: R
                    },
                    children: (0, l.jsx)(g, {
                        content: e.content
                    })
                })
            }),
            hasSpoilerEmbeds: y,
            hasBailedAst: !1
        } : (0, r.Ay)(e, {
            hideSimpleEmbedContent: p,
            formatInline: A,
            noStyleAndInteraction: x,
            isInteracting: f,
            allowHeading: v,
            allowList: j,
            allowLinks: N,
            allowDevLinks: C,
            previewLinkTarget: b,
            viewingChannelId: E
        })
    }, [e.content, e.customRenderedContent, e.embeds, e.interaction, e.state, e.type, p, A, x, f, v, j, N, b, C, E, I.enabled, y])
}