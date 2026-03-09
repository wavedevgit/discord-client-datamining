/** chunk id: 415350 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(735438),
    r = n.n(i),
    l = n(223637),
    a = n(542664),
    s = n(46054);
let o = r().omit(a.A.RULES, ["codeBlock", "heading"]),
    d = {
        ...l.A,
        parse: function(e, t, n) {
            let i = l.A.parse(e, t, n),
                r = Math.min(6, (n.initialHeaderLevel ?? 3) + i.level);
            return {
                ...i,
                level: r
            }
        }
    },
    c = s.A.combineAndInjectMentionRule(o, [s.A.createReactRules(s.A.defaultReactRuleOptions), {
        header: d
    }]),
    u = s.A.reactParserFor(c)