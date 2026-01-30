/** chunk id: 878360, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => S
});
var r = n(627968);
n(64700);
var i = n(735438),
    a = n.n(i),
    o = n(537652),
    s = n(155718),
    l = n(166862),
    c = n(861382),
    u = n(545152),
    d = n(580424),
    f = n(248465),
    p = n(634788),
    _ = n(374803),
    h = n(73510),
    m = n(985018),
    g = n(570330),
    E = n(911385);
let y = {
        results: {
            choices: []
        }
    },
    b = {
        results: {
            choices: [],
            isLoading: !0
        }
    },
    O = Array.from({
        length: 5
    }, () => ({
        name: "",
        displayName: "",
        value: ""
    })),
    v = {
        results: {
            choices: [],
            isError: !0
        }
    },
    A = a().debounce(u.A, h.$r, {
        leading: !0,
        trailing: !0
    });

function I(e) {
    return e.displayName
}
let S = {
    stores: [c.A, l.A],
    showEmpty: !0,
    matches(e, t, n, r, i) {
        let a = c.A.getActiveOption(e.id);
        return i.commands !== _.Ze.DISABLED && null != a && (a.type === s.n4.BOOLEAN || !!(null == a ? void 0 : a.autocomplete) || (null == a ? void 0 : a.choices) != null && a.choices.length > 0)
    },
    queryResults(e, t, n, r, i) {
        var a;
        let o = c.A.getActiveOption(e.id);
        if (null == o) return y;
        if (o.autocomplete) {
            if (i && A({
                    command: c.A.getActiveCommand(e.id),
                    optionValues: r.getCommandOptionValues(),
                    context: {
                        channel: e,
                        guild: t,
                        autocomplete: {
                            name: o.name,
                            query: n
                        }
                    }
                }), l.A.getLastErrored(e.id)) return v;
            let a = l.A.getAutocompleteChoices(e.id, o.name, n);
            return null == a ? b : {
                results: {
                    choices: a
                }
            }
        }
        return {
            results: f.Ay.queryChoiceResults({
                query: n,
                choices: o.type === s.n4.BOOLEAN ? h.Ss : null != (a = o.choices) ? a : []
            })
        }
    },
    renderResults(e) {
        let {
            results: {
                choices: t,
                isLoading: n,
                isError: i
            },
            selectedIndex: a,
            query: s,
            onHover: l,
            onClick: c
        } = e;
        return i ? (0, r.jsx)(o.A, {
            message: m.intl.string(m.t.rTAbPn),
            noResultsImageURL: E,
            className: g.k
        }) : 0 !== t.length || n ? (0, p.GM)({
            query: s,
            selectedIndex: a,
            autocompletes: n ? O : t,
            onHover: l,
            onClick: c,
            titleWithQuery: m.t.pg0anB,
            titleWithoutQuery: m.intl.string(m.t["+1H47t"]),
            Component: n ? d.Ay.Loading : d.Ay.Generic,
            getProps: (e, t) => ({
                key: t.toString(),
                text: e.displayName
            }),
            getQuery: e => e,
            key: "choice"
        }) : (0, r.jsx)(o.A, {
            message: m.intl.string(m.t["41014u"]),
            noResultsImageURL: E,
            className: g.k
        })
    },
    onSelect(e) {
        let {
            results: {
                choices: t
            },
            index: n,
            options: r
        } = e, i = t[n];
        return r.insertText(I(i)), {
            type: _.kc.CHOICE
        }
    }
}