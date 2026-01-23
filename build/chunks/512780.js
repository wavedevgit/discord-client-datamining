/** Chunk was on web.js **/
/** chunk id: 512780, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => A
}), n(747238), n(733351);
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n.n(a),
    o = n(397927),
    l = n(73153),
    c = n(696459),
    u = n(58149),
    d = n(861382),
    f = n(392054),
    p = n(580424),
    _ = n(235986),
    h = n(29599),
    m = n(374803);
n(827669);
var g = n(652215),
    E = n(985018),
    y = n(538830);
let b = {
    results: {
        command: null,
        integrations: [],
        isLoading: !1
    }
};

function O(e, t, n) {
    var r, i;
    let a;
    return n.commands === m.Ze.OLD_BUILT_INS ? (a = t.split(" ")[0].substring(1), t = t.substring((null != (r = a.length) ? r : 0) + 1)) : a = null == (i = d.A.getActiveCommand(e.id)) ? void 0 : i.untranslatedName, {
        command: a,
        query: t.trim()
    }
}

function v(e) {
    return e.meta.url
}
let A = {
    stores: [d.A, h.A],
    matches(e, t, n, r, i) {
        var a;
        return i.commands !== m.Ze.DISABLED && (i.commands === m.Ze.OLD_BUILT_INS ? n.startsWith("/gif") || n.startsWith("/tenor") : (null == (a = d.A.getActiveCommand(e.id)) ? void 0 : a.integrationType) === g.p_j.GIF && d.A.getOptionStates(e.id).query.hasValue)
    },
    queryResults(e, t, n, r, i) {
        let {
            command: a,
            query: o
        } = O(e, n, r);
        if (null == a) return b;
        let l = s().findKey(g.Z86, e => e.command === a);
        i && null != l && o.length > 0 && c.A.search(l, o);
        let u = h.A.getResults(l, o);
        return null == u ? b : {
            results: {
                command: a,
                integrations: u.results,
                isLoading: u.loading
            }
        }
    },
    renderResults(e) {
        let {
            results: {
                integrations: t,
                isLoading: n
            },
            selectedIndex: a,
            channel: s,
            query: l,
            options: c,
            onHover: u,
            onClick: f
        } = e, {
            command: h,
            query: b
        } = O(s, l, c);
        if (null == h || 0 === b.length) return null;
        if (n) return (0, r.jsx)(o.y$y, {
            className: y.u1,
            type: o.y$y.Type.SPINNING_CIRCLE
        });
        if (null != t) {
            var v, A;
            let e = !1,
                n = t.map((t, n) => {
                    if (t.type === g.p_j.GIF) {
                        var i, s, o;
                        return e = !0, (0, r.jsx)(p.Ay.GIFIntegration, {
                            className: y.ho,
                            onClick: f,
                            onHover: u,
                            selected: a === n,
                            index: n,
                            width: null != (i = t.meta.width) ? i : 0,
                            height: null != (s = t.meta.height) ? s : 0,
                            src: null != (o = t.meta.src) ? o : "",
                            url: t.meta.url
                        }, "".concat(t.meta.url).concat(t.meta.src))
                    }
                }),
                o = c.commands === m.Ze.OLD_BUILT_INS ? h : null != (v = null == (A = d.A.getActiveCommand(s.id)) ? void 0 : A.integrationTitle) ? v : h,
                l = b.length > 0 && null != o ? E.intl.format(E.t["3njXz/"], {
                    query: b,
                    command: o
                }) : null != o ? o : h;
            return (0, r.jsxs)(i.Fragment, {
                children: [(0, r.jsx)(p.Ay.Title, {
                    title: l
                }), e ? (0, r.jsx)(_.A, {
                    className: y.os,
                    children: n
                }) : n]
            }, "gifs")
        }
    },
    onSelect(e) {
        let {
            results: {
                command: t,
                integrations: n
            },
            index: r,
            type: i,
            options: a,
            channel: s,
            guild: o
        } = e;
        if (null == t) return {
            type: null
        };
        let c = n[r];
        if (i === m.lg.INSERT ? a.replaceText(v(c)) : a.sendMessage(v(c)), u.Ay.trackWithMetadata(g.HAw.SEARCH_RESULT_SELECTED, {
                search_type: g.I4_.GIF,
                index_num: r,
                source_object: "/".concat(t)
            }), a.commands !== m.Ze.OLD_BUILT_INS) {
            let e = d.A.getActiveCommand(s.id);
            (null == e ? void 0 : e.inputType) === f.y$.BUILT_IN_INTEGRATION && (l.h.dispatch({
                type: "APPLICATION_COMMAND_USED",
                context: {
                    channel: s,
                    guild: o
                },
                command: e,
                commandOrigin: f.iw.CHAT
            }), u.Ay.trackWithMetadata(g.HAw.APPLICATION_COMMAND_USED, {
                command_id: e.id,
                application_id: e.applicationId,
                command_type: e.type,
                source: d.A.getSource(s.id)
            }))
        }
        return {
            type: m.kc.GIF
        }
    }
}