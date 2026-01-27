/** Chunk was on web.js **/
/** chunk id: 33557, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
});
var r = n(580424),
    i = n(71393),
    a = n(576705),
    o = n(248465),
    s = n(634788),
    l = n(374803);
n(827669);
var c = n(652215),
    u = n(307731),
    d = n(985018);
let f = 50;

function p(e) {
    return "".concat("+:").concat(e.name).concat(":")
}
let _ = {
    sentinel: "+:",
    matches(e, t, n, r, i) {
        var o, s;
        return r && null != (o = null == (s = i.chatInputType.autocomplete) ? void 0 : s.addReactionShortcut) && o && (a.A.can(c.xBc.ADD_REACTIONS, e) || e.isPrivate())
    },
    queryResults(e, t, n, r, i) {
        let {
            emojis: a
        } = o.Ay.queryEmojiResults({
            query: n,
            channel: e,
            intention: u.b_.REACTION,
            maxCount: f
        });
        return {
            results: {
                emojis: a.unlocked
            }
        }
    },
    renderResults(e) {
        let {
            results: {
                emojis: t
            },
            selectedIndex: n,
            query: a,
            onHover: o,
            onClick: l
        } = e;
        return (0, s.GM)({
            query: a,
            selectedIndex: n,
            autocompletes: t,
            onHover: o,
            onClick: l,
            titleWithQuery: d.t.o1Nmpc,
            titleWithoutQuery: d.intl.string(d.t.sMOuuS),
            Component: r.Ay.Emoji,
            getProps: e => ({
                emoji: e,
                key: e.id || e.uniqueName || e.name,
                sentinel: ":",
                guild: null != e.guildId ? i.A.getGuild(e.guildId) : null
            }),
            getQuery: e => "".concat("+:").concat(e),
            key: "reactions"
        })
    },
    onSelect(e) {
        let {
            results: {
                emojis: t
            },
            index: n,
            options: r
        } = e, i = t[n];
        return r.sendMessage(p(i)), {
            type: l.kc.REACTION
        }
    }
}