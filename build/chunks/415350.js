/** chunk id: 415350 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(735438),
    r = n.n(i),
    a = n(223637),
    l = n(542664),
    s = n(46054);
let o = r().omit(l.A.RULES, ["codeBlock", "heading"]),
    d = {
        ...a.A,
        parse: function(e, t, n) {
            let i = a.A.parse(e, t, n),
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