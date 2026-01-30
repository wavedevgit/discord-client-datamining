/** chunk id: 266536, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
});
var r = n(627968),
    i = n(64700),
    a = n(861382),
    o = n(580424),
    s = n(968011),
    l = n(399777),
    c = n(253932),
    u = n(696451),
    d = n(374803),
    f = n(311036);
let p = {
    selectMode: d.SB.TAB_ONLY,
    stores: [u.Ay],
    matches(e, t, n, r, i) {
        var o;
        let {
            enabled: u
        } = (0, s.sA)("MentionSuggestionAutocompletes", {
            autoTrackExposure: !0
        });
        return !(!u || e.isDM()) && !!c.ng.getSetting() && !!(null == (o = i.chatInputType.autocomplete) ? void 0 : o.mentionSuggestions) && i.mentions.user !== d.Vf.DENY && null != i.currentFullWord && !(i.currentFullWord.length < l.$) && null == a.A.getActiveCommand(e.id) && !0
    },
    queryResults(e, t, n, r) {
        var i;
        let a = n.length;
        return (0, l.W)(e, null != (i = r.currentFullWord) ? i : "", a, {
            isIdle: r.isEditorIdle,
            currentAutocompleteType: r.currentAutocompleteType
        })
    },
    renderResults(e) {
        let {
            results: {
                suggestions: t
            },
            selectedIndex: n,
            channel: a,
            options: l,
            onHover: c,
            onClick: u
        } = e, {
            suggestionDesign: d
        } = (0, s.sA)("MentionSuggestionAutocompletes", {
            autoTrackExposure: !1
        }), f = t.map((e, t) => (0, r.jsx)(o.Ay.UserSuggestion, {
            guildId: a.guild_id,
            onClick: u,
            onHover: c,
            selected: n === t,
            index: t,
            user: e.user,
            nick: e.nick,
            comparator: e.comparator,
            status: e.status,
            hidePersonalInformation: l.hidePersonalInformation,
            layout: "vertical" === d ? "vertical-suggestion" : "horizontal-suggestion"
        }, e.user.id));
        return (0, r.jsx)(i.Fragment, {
            children: f
        }, "mention-suggestions")
    },
    onSelect(e) {
        let {
            results: {
                suggestions: t,
                queryInfo: {
                    prefix: n,
                    suffix: r
                }
            },
            index: i,
            options: a,
            channel: o
        } = e, s = t[i];
        return null != s && a.insertText(n + (0, f.JB)(s.user, o, a.hidePersonalInformation) + r, n + (0, f.z$)(s.user) + r, {
            replaceFullWord: !0
        }), {
            type: d.kc.MENTION
        }
    }
}