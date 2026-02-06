package nv;

import java.util.regex.Pattern;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class k extends sv.a {

    /* renamed from: e  reason: collision with root package name */
    private static final Pattern[][] f41217e = {new Pattern[]{null, null}, new Pattern[]{Pattern.compile("^<(?:script|pre|style)(?:\\s|>|$)", 2), Pattern.compile("</(?:script|pre|style)>", 2)}, new Pattern[]{Pattern.compile("^<!--"), Pattern.compile("-->")}, new Pattern[]{Pattern.compile("^<[?]"), Pattern.compile("\\?>")}, new Pattern[]{Pattern.compile("^<![A-Z]"), Pattern.compile(">")}, new Pattern[]{Pattern.compile("^<!\\[CDATA\\["), Pattern.compile("\\]\\]>")}, new Pattern[]{Pattern.compile("^</?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?:\\s|[/]?[>]|$)", 2), null}, new Pattern[]{Pattern.compile("^(?:<[A-Za-z][A-Za-z0-9-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*/?>|</[A-Za-z][A-Za-z0-9-]*\\s*[>])\\s*$", 2), null}};

    /* renamed from: a  reason: collision with root package name */
    private final qv.j f41218a;

    /* renamed from: b  reason: collision with root package name */
    private final Pattern f41219b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f41220c;

    /* renamed from: d  reason: collision with root package name */
    private nv.a f41221d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b extends sv.b {
        @Override // sv.e
        public sv.f a(sv.h hVar, sv.g gVar) {
            int c10 = hVar.c();
            CharSequence line = hVar.getLine();
            if (hVar.a() < 4 && line.charAt(c10) == '<') {
                for (int i10 = 1; i10 <= 7; i10++) {
                    if (i10 != 7 || !(gVar.b().e() instanceof qv.t)) {
                        Pattern pattern = k.f41217e[i10][0];
                        Pattern pattern2 = k.f41217e[i10][1];
                        if (pattern.matcher(line.subSequence(c10, line.length())).find()) {
                            return sv.f.d(new k(pattern2)).b(hVar.getIndex());
                        }
                    }
                }
            }
            return sv.f.c();
        }
    }

    @Override // sv.d
    public sv.c c(sv.h hVar) {
        if (this.f41220c) {
            return sv.c.d();
        }
        if (hVar.b() && this.f41219b == null) {
            return sv.c.d();
        }
        return sv.c.b(hVar.getIndex());
    }

    @Override // sv.d
    public qv.a e() {
        return this.f41218a;
    }

    @Override // sv.a, sv.d
    public void f(CharSequence charSequence) {
        this.f41221d.a(charSequence);
        Pattern pattern = this.f41219b;
        if (pattern != null && pattern.matcher(charSequence).find()) {
            this.f41220c = true;
        }
    }

    @Override // sv.a, sv.d
    public void g() {
        this.f41218a.n(this.f41221d.b());
        this.f41221d = null;
    }

    private k(Pattern pattern) {
        this.f41218a = new qv.j();
        this.f41220c = false;
        this.f41221d = new nv.a();
        this.f41219b = pattern;
    }
}
