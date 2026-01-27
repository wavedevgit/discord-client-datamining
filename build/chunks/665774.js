/** Chunk was on web.js **/
/** chunk id: 665774, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
}), n(321073);
var r = n(627968);
n(64700);
var i = n(861382),
    a = n(580424),
    o = n(634788),
    s = n(374803),
    l = n(985018);
let c = {
    results: {
        commandOptions: []
    }
};

function u(e) {
    return "".concat(e.displayName, ":")
}
let d = {
    stores: [i.A],
    focusMode: s.e.AUTO_WHEN_FILTERED,
    matches: (e, t, n, r, a) => !(r || null == i.A.getActiveCommand(e.id) || null != i.A.getActiveOption(e.id)),
    queryResults(e, t, n, r, a) {
        let o = i.A.getActiveCommand(e.id);
        if ((null == o ? void 0 : o.options) == null) return c;
        let s = i.A.getOptionStates(e.id),
            l = o.options.filter(e => {
                var t;
                return e.displayName.startsWith(n) && !(null == (t = s[e.name]) ? void 0 : t.hasValue)
            });
        return 0 === l.length ? c : {
            results: {
                commandOptions: l
            }
        }
    },
    renderResults(e) {
        let {
            results: {
                commandOptions: t
            },
            selectedIndex: n,
            query: i,
            onHover: s,
            onClick: c
        } = e, u = [], d = [];
        t.forEach(e => {
            (e.required ? u : d).push(e)
        });
        let f = u.length > 0 ? (0, o.GM)({
                query: i,
                selectedIndex: n,
                autocompletes: u,
                onHover: s,
                onClick: c,
                titleWithQuery: l.t["iO/jnA"],
                titleWithoutQuery: l.intl.string(l.t["7II2G3"]),
                Component: a.Ay.Generic,
                getProps: (e, t) => ({
                    key: t.toString(),
                    text: e.displayName,
                    description: e.displayDescription
                }),
                getQuery: e => e,
                key: "required-options"
            }) : null,
            p = d.length > 0 ? (0, o.GM)({
                query: i,
                selectedIndex: n,
                autocompletes: d,
                onHover: s,
                onClick: c,
                titleWithQuery: l.t.pg0anB,
                titleWithoutQuery: u.length > 0 ? l.intl.string(l.t.TpDXm4) : l.intl.string(l.t["+1H47t"]),
                Component: a.Ay.Generic,
                getProps: (e, t) => ({
                    key: t.toString(),
                    text: e.displayName,
                    description: e.displayDescription
                }),
                getQuery: e => e,
                key: "optional-options",
                indexOffset: u.length
            }) : null;
        return (0, r.jsxs)(r.Fragment, {
            children: [f, p]
        })
    },
    onSelect(e) {
        let {
            results: {
                commandOptions: t
            },
            index: n,
            options: r
        } = e, i = t[n];
        return r.insertText(u(i)), {
            type: s.kc.COMMAND_OPTION
        }
    }
}