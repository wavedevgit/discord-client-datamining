package xv;

import java.util.regex.Pattern;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class k extends cw.a {

    /* renamed from: e  reason: collision with root package name */
    private static final Pattern[][] f55784e = {new Pattern[]{null, null}, new Pattern[]{Pattern.compile("^<(?:script|pre|style)(?:\\s|>|$)", 2), Pattern.compile("</(?:script|pre|style)>", 2)}, new Pattern[]{Pattern.compile("^<!--"), Pattern.compile("-->")}, new Pattern[]{Pattern.compile("^<[?]"), Pattern.compile("\\?>")}, new Pattern[]{Pattern.compile("^<![A-Z]"), Pattern.compile(">")}, new Pattern[]{Pattern.compile("^<!\\[CDATA\\["), Pattern.compile("\\]\\]>")}, new Pattern[]{Pattern.compile("^</?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?:\\s|[/]?[>]|$)", 2), null}, new Pattern[]{Pattern.compile("^(?:<[A-Za-z][A-Za-z0-9-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*/?>|</[A-Za-z][A-Za-z0-9-]*\\s*[>])\\s*$", 2), null}};

    /* renamed from: a  reason: collision with root package name */
    private final aw.j f55785a;

    /* renamed from: b  reason: collision with root package name */
    private final Pattern f55786b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f55787c;

    /* renamed from: d  reason: collision with root package name */
    private xv.a f55788d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b extends cw.b {
        @Override // cw.e
        public cw.f a(cw.h hVar, cw.g gVar) {
            int c10 = hVar.c();
            CharSequence line = hVar.getLine();
            if (hVar.a() < 4 && line.charAt(c10) == '<') {
                for (int i10 = 1; i10 <= 7; i10++) {
                    if (i10 != 7 || !(gVar.b().d() instanceof aw.t)) {
                        Pattern pattern = k.f55784e[i10][0];
                        Pattern pattern2 = k.f55784e[i10][1];
                        if (pattern.matcher(line.subSequence(c10, line.length())).find()) {
                            return cw.f.d(new k(pattern2)).b(hVar.getIndex());
                        }
                    }
                }
            }
            return cw.f.c();
        }
    }

    @Override // cw.d
    public aw.a d() {
        return this.f55785a;
    }

    @Override // cw.a, cw.d
    public void e(CharSequence charSequence) {
        this.f55788d.a(charSequence);
        Pattern pattern = this.f55786b;
        if (pattern != null && pattern.matcher(charSequence).find()) {
            this.f55787c = true;
        }
    }

    @Override // cw.a, cw.d
    public void f() {
        this.f55785a.n(this.f55788d.b());
        this.f55788d = null;
    }

    @Override // cw.d
    public cw.c g(cw.h hVar) {
        if (this.f55787c) {
            return cw.c.d();
        }
        if (hVar.b() && this.f55786b == null) {
            return cw.c.d();
        }
        return cw.c.b(hVar.getIndex());
    }

    private k(Pattern pattern) {
        this.f55785a = new aw.j();
        this.f55787c = false;
        this.f55788d = new xv.a();
        this.f55786b = pattern;
    }
}
