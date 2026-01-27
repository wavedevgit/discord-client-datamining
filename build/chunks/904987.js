/** Chunk was on web.js **/
/** chunk id: 904987, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
}), n(896048);
var r = n(719442),
    i = n(374803),
    a = n(968011),
    o = n(399777),
    s = n(253932),
    l = n(711371);
let c = "line",
    u = [];

function d(e, t, n, d) {
    var f;
    let {
        enabled: p,
        highlightDesign: _
    } = (0, a.sA)("decorateMentionSuggestion", {
        autoTrackExposure: !1
    }), h = e.selection, {
        currentAutocompleteType: m
    } = d, g = null !== m && m !== i.DB.MENTION_SUGGESTIONS;
    if (!p || n.isDM() || g || l.VW.areStylesDisabled(e) || !(null == (f = e.chatInputType.autocomplete) ? void 0 : f.mentionSuggestions) || !s.ng.getSetting() || null == h || l.ZF.isExpanded(h)) return u;
    let [E, y] = t;
    if (!l.l5.isText(E)) return u;
    let [b] = l.VW.node(e, l.PW.parent(y));
    if (!l.AS.isType(b, c) || !r.Q6.includes(l.VW.range(e, y), h.anchor)) return u;
    let O = h.anchor.offset,
        {
            results: {
                suggestions: v,
                queryInfo: A
            }
        } = (0, o.W)(n, E.text, O, d);
    return 0 === v.length ? u : [{
        anchor: {
            path: y,
            offset: A.startIndex
        },
        focus: {
            path: y,
            offset: A.startIndex + A.query.length
        },
        mentionSuggestion: !0,
        mentionSuggestionSimpleColorVariant: "simple" === _
    }]
}