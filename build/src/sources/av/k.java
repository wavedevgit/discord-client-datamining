package av;

import java.util.regex.Pattern;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class k extends fv.a {

    /* renamed from: e  reason: collision with root package name */
    private static final Pattern[][] f7004e = {new Pattern[]{null, null}, new Pattern[]{Pattern.compile("^<(?:script|pre|style)(?:\\s|>|$)", 2), Pattern.compile("</(?:script|pre|style)>", 2)}, new Pattern[]{Pattern.compile("^<!--"), Pattern.compile("-->")}, new Pattern[]{Pattern.compile("^<[?]"), Pattern.compile("\\?>")}, new Pattern[]{Pattern.compile("^<![A-Z]"), Pattern.compile(">")}, new Pattern[]{Pattern.compile("^<!\\[CDATA\\["), Pattern.compile("\\]\\]>")}, new Pattern[]{Pattern.compile("^</?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?:\\s|[/]?[>]|$)", 2), null}, new Pattern[]{Pattern.compile("^(?:<[A-Za-z][A-Za-z0-9-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*/?>|</[A-Za-z][A-Za-z0-9-]*\\s*[>])\\s*$", 2), null}};

    /* renamed from: a  reason: collision with root package name */
    private final dv.j f7005a;

    /* renamed from: b  reason: collision with root package name */
    private final Pattern f7006b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f7007c;

    /* renamed from: d  reason: collision with root package name */
    private av.a f7008d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b extends fv.b {
        @Override // fv.e
        public fv.f a(fv.h hVar, fv.g gVar) {
            int c10 = hVar.c();
            CharSequence line = hVar.getLine();
            if (hVar.a() < 4 && line.charAt(c10) == '<') {
                for (int i10 = 1; i10 <= 7; i10++) {
                    if (i10 != 7 || !(gVar.b().d() instanceof dv.t)) {
                        Pattern pattern = k.f7004e[i10][0];
                        Pattern pattern2 = k.f7004e[i10][1];
                        if (pattern.matcher(line.subSequence(c10, line.length())).find()) {
                            return fv.f.d(new k(pattern2)).b(hVar.getIndex());
                        }
                    }
                }
            }
            return fv.f.c();
        }
    }

    @Override // fv.d
    public fv.c a(fv.h hVar) {
        if (this.f7007c) {
            return fv.c.d();
        }
        if (hVar.b() && this.f7006b == null) {
            return fv.c.d();
        }
        return fv.c.b(hVar.getIndex());
    }

    @Override // fv.d
    public dv.a d() {
        return this.f7005a;
    }

    @Override // fv.a, fv.d
    public void e(CharSequence charSequence) {
        this.f7008d.a(charSequence);
        Pattern pattern = this.f7006b;
        if (pattern != null && pattern.matcher(charSequence).find()) {
            this.f7007c = true;
        }
    }

    @Override // fv.a, fv.d
    public void g() {
        this.f7005a.n(this.f7008d.b());
        this.f7008d = null;
    }

    private k(Pattern pattern) {
        this.f7005a = new dv.j();
        this.f7007c = false;
        this.f7008d = new av.a();
        this.f7006b = pattern;
    }
}
