/** chunk id: 751258, original params: e,t,n (module,exports,require) **/
n.d(t, {
    S: () => b
}), n(733351), n(896048), n(747238), n(812715), n(866193);
var r = n(280230),
    l = n.n(r),
    i = n(715943),
    s = n(843472),
    a = n(58149),
    o = n(508675),
    c = n(649963),
    u = n(815807),
    d = n(253932),
    h = n(320501),
    p = n(652215);
let g = /\\([*?+/])/g,
    f = {
        tts: {
            action: () => ({
                tts: d.on.getSetting()
            })
        },
        me: {
            action: e => ({
                content: "_".concat(e, "_")
            })
        },
        tableflip: {
            action: e => ({
                content: "".concat(e, " (╯\xb0□\xb0)╯︵ ┻━┻").trim()
            })
        },
        unflip: {
            action: e => ({
                content: "".concat(e, " ┬─┬ノ( \xba _ \xbaノ)").trim()
            })
        },
        shrug: {
            action: e => ({
                content: "".concat(e, " \xaf\\_(ツ)_/\xaf").trim()
            })
        },
        nick: {
            action(e, t) {
                let {
                    channel: n
                } = t;
                if (null != n.guild_id) return i.A.changeNickname(n.guild_id, n.id, p.ME, e), {
                    content: ""
                }
            }
        },
        reaction: {
            match: l().anyScopeRegex(/^\+:(.+?): *$/),
            action(e, t) {
                let {
                    isEdit: n,
                    channel: r
                } = t;
                if (n || !h.A.hasPresent(r.id)) return;
                let l = h.A.getMessages(r.id).last();
                if (null == l || null == l.id) return;
                let i = o.Ay.getDisambiguatedEmojiContext(r.guild_id).getByName(e.trim().slice(2, -1));
                if (null != i) return (0, c.BB)(r.id, l.id, (0, u.jq)(i)), {
                    content: ""
                }
            }
        },
        searchReplace: {
            match: l().anyScopeRegex(/^s\/([^\/\\]*(?:\\.[^\/\\]*)*)\/([^\/\\]*(?:\\.[^\/\\]*)*)(?:\/([g]*))?$/),
            action(e, t) {
                var n, r;
                let {
                    isEdit: l,
                    channel: i
                } = t;
                if (l) return;
                let a = h.A.getLastEditableMessage(i.id);
                if (null == a || null == a.id) return {
                    content: ""
                };
                let [o, c, u, d] = Array.from(null != (n = e.match(this.match.regex)) ? n : []), p = null != (r = null == d ? void 0 : d.split("")) ? r : [];
                c = c.replace(g, (e, t) => t), u = u.replace(g, (e, t) => t);
                let f = p.includes("g") ? a.content.replaceAll(c, u) : a.content.replace(c, u);
                return (null == f || "" === f.trim()) && 0 === a.attachments.length ? s.A.deleteMessage(i.id, a.id) : f !== a.content && s.A.editMessage(i.id, a.id, {
                    content: f
                }), {
                    content: ""
                }
            }
        },
        spoiler: {
            action: e => ({
                content: (0, p.ZGg)(e).trim()
            })
        }
    };

function m(e, t, n, r) {
    return a.Ay.trackWithMetadata(p.HAw.SLASH_COMMAND_USED, {
        command: e
    }), t.action(n, r)
}

function b(e, t) {
    for (let r in f) {
        let l = f[r];
        if (null != l.match) {
            var n;
            if (null == (n = l.match.regex) ? void 0 : n.test(e)) return m(r, l, e, t);
            continue
        }
        if (d.D_.getSetting() && "/" === e[0]) {
            let n = e.split(" ");
            if (r === n[0].slice(1) && null != l.action) return m(r, l, n.slice(1).join(" "), t)
        }
    }
}
Object.setPrototypeOf(f, null)