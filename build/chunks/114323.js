/** chunk id: 114323, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => w,
    f: () => T
}), n(591487), n(727858), n(747238), n(733351);
var r = n(627968);
n(64700);
var i = n(158954),
    a = n(192308),
    o = n(155718),
    s = n(721768),
    l = n(827785),
    c = n(264322),
    u = n(842209),
    d = n(210978),
    f = n(861382),
    p = n(392054),
    _ = n(168186),
    h = n(664929),
    m = n(580424),
    g = n(576705),
    E = n(257120),
    y = n(634788),
    b = n(374803);
n(827669);
var O = n(73510),
    v = n(985018),
    A = n(31639);

function I(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            I(e, t, n[t])
        })
    }
    return e
}
let T = {
    results: {
        entries: []
    }
};

function C() {
    (0, a.openModalLazy)(async () => {
        let {
            default: e
        } = await n.e("76429").then(n.bind(n, 717020));
        return t => (0, r.jsx)(e, S({}, t))
    })
}

function N(e) {
    return "".concat("/").concat(e.displayName)
}
let w = {
    sentinel: "/",
    stores: [f.A, c.Ay, g.A],
    matches: (e, t, n, r, i) => i.commands !== b.Ze.DISABLED && null == f.A.getActiveCommand(e.id) && (r || i.commands !== b.Ze.OLD_BUILT_INS),
    queryResults(e, t, n, r, i) {
        if (0 === n.length && r.commands !== b.Ze.OLD_BUILT_INS) return T;
        if (r.commands === b.Ze.OLD_BUILT_INS) {
            let r = (0, l.Ez)([o.kc.CHAT], !1, !1),
                i = RegExp("^".concat(E.A.escape(n)), "i"),
                a = (0, _.PV)(r, i, {
                    channel: e,
                    guild: t
                }, 20),
                s = l.gZ[O.Ik.BUILT_IN];
            return 0 === a.length ? T : {
                results: {
                    entries: a.map(e => ({
                        command: e,
                        section: s
                    }))
                }
            }
        }
        let a = (0, h.Yn)(e, n),
            {
                commands: s,
                sections: c
            } = u.eW({
                channel: e,
                type: "channel"
            }, {
                commandTypes: [o.kc.CHAT],
                text: a.text
            }, {
                limit: 20,
                placeholderCount: 3,
                scoreMethod: d.M.COMMAND_OR_APPLICATION,
                allowFetch: i
            });
        if (null == s) return T;
        let f = s;
        if (a.hasSpaceTerminator) {
            let e = a.text.trim(),
                t = e + " ";
            f = f.filter(n => n.displayName === e || n.displayName.startsWith(t))
        }
        return 0 === f.length ? T : {
            results: {
                entries: f.slice(0, 20).map(e => ({
                    command: e,
                    section: null == c ? void 0 : c.find(t => t.id === e.applicationId)
                }))
            }
        }
    },
    renderResults(e) {
        let {
            results: {
                entries: t
            },
            selectedIndex: n,
            channel: a,
            query: o,
            options: s,
            onHover: l,
            onClick: c
        } = e, u = (0, h.Yn)(a, o), d = s.commands === b.Ze.OLD_BUILT_INS;
        return (0, y.GM)({
            query: u.text,
            selectedIndex: n,
            autocompletes: t,
            onHover: l,
            onClick: c,
            titleWithQuery: v.t.HFRoZR,
            titleWithoutQuery: v.intl.string(v.t["0hKkS+"]),
            getQuery: e => "".concat("/").concat(e),
            Component: d ? m.Ay.Command : m.Ay.NewCommand,
            getProps: e => {
                let {
                    command: t,
                    section: n
                } = e;
                return {
                    key: t.id,
                    command: t,
                    channel: a,
                    guildId: a.guild_id,
                    showImage: !0,
                    section: n
                }
            },
            key: "commands",
            headerClassName: d ? A.Y : null,
            headerTrailingContent: d && (0, r.jsx)(i.QWc, {
                size: "xs",
                onClick: C,
                text: v.intl.string(v.t["8a0P0y"])
            })
        })
    },
    onSelect(e) {
        let {
            results: {
                entries: t
            },
            index: n,
            queryText: r,
            options: i,
            channel: a,
            location: o,
            tabOrEnter: l
        } = e, {
            command: c,
            section: u
        } = t[n];
        if (c.inputType === p.y$.PLACEHOLDER) return null;
        if (i.commands === b.Ze.OLD_BUILT_INS) i.insertText(N(c));
        else {
            let e = o;
            null == e && (e = l ? p.Oh.QUERY : p.Oh.DISCOVERY), s.Gf({
                channelId: a.id,
                command: c,
                section: null != u ? u : null,
                location: e,
                queryLength: null == r ? void 0 : r.length
            })
        }
        return {
            type: b.kc.COMMAND
        }
    }
}