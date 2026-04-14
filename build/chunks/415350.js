/** chunk id: 415350 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(735438),
    a = n.n(i),
    l = n(223637),
    r = n(542664),
    s = n(46054);
let o = a().omit(r.A.RULES, ["codeBlock", "heading"]),
    d = {
        ...l.A,
        parse: function(e, t, n) {
            let i = l.A.parse(e, t, n),
                a = Math.min(6, (n.initialHeaderLevel ?? 3) + i.level);
            return {
                ...i,
                level: a
            }
        }
    },
    c = s.A.combineAndInjectMentionRule(o, [s.A.createReactRules(s.A.defaultReactRuleOptions), {
        header: d
    }]),
    u = s.A.reactParserFor(c)