/** chunk id: 415350 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(735438),
    a = n.n(i),
    l = n(223637),
    s = n(542664),
    r = n(46054);
let o = a().omit(s.A.RULES, ["codeBlock", "heading"]),
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
    c = r.A.combineAndInjectMentionRule(o, [r.A.createReactRules(r.A.defaultReactRuleOptions), {
        header: d
    }]),
    u = r.A.reactParserFor(c)