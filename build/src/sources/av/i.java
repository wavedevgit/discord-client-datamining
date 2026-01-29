package av;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class i extends fv.a {

    /* renamed from: a  reason: collision with root package name */
    private final dv.g f6999a;

    /* renamed from: b  reason: collision with root package name */
    private String f7000b;

    /* renamed from: c  reason: collision with root package name */
    private StringBuilder f7001c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a extends fv.b {
        @Override // fv.e
        public fv.f a(fv.h hVar, fv.g gVar) {
            int a10 = hVar.a();
            if (a10 >= cv.d.f21448a) {
                return fv.f.c();
            }
            int c10 = hVar.c();
            i k10 = i.k(hVar.getLine(), c10, a10);
            if (k10 != null) {
                return fv.f.d(k10).b(c10 + k10.f6999a.p());
            }
            return fv.f.c();
        }
    }

    public i(char c10, int i10, int i11) {
        dv.g gVar = new dv.g();
        this.f6999a = gVar;
        this.f7001c = new StringBuilder();
        gVar.s(c10);
        gVar.u(i10);
        gVar.t(i11);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static i k(CharSequence charSequence, int i10, int i11) {
        int length = charSequence.length();
        int i12 = 0;
        int i13 = 0;
        for (int i14 = i10; i14 < length; i14++) {
            char charAt = charSequence.charAt(i14);
            if (charAt != '`') {
                if (charAt != '~') {
                    break;
                }
                i13++;
            } else {
                i12++;
            }
        }
        if (i12 >= 3 && i13 == 0) {
            if (cv.d.b('`', charSequence, i10 + i12) != -1) {
                return null;
            }
            return new i('`', i12, i11);
        } else if (i13 < 3 || i12 != 0) {
            return null;
        } else {
            return new i('~', i13, i11);
        }
    }

    private boolean l(CharSequence charSequence, int i10) {
        char n10 = this.f6999a.n();
        int p10 = this.f6999a.p();
        int k10 = cv.d.k(n10, charSequence, i10, charSequence.length()) - i10;
        if (k10 < p10 || cv.d.m(charSequence, i10 + k10, charSequence.length()) != charSequence.length()) {
            return false;
        }
        return true;
    }

    @Override // fv.d
    public fv.c a(fv.h hVar) {
        int c10 = hVar.c();
        int index = hVar.getIndex();
        CharSequence line = hVar.getLine();
        if (hVar.a() < cv.d.f21448a && l(line, c10)) {
            return fv.c.c();
        }
        int length = line.length();
        for (int o10 = this.f6999a.o(); o10 > 0 && index < length && line.charAt(index) == ' '; o10--) {
            index++;
        }
        return fv.c.b(index);
    }

    @Override // fv.d
    public dv.a d() {
        return this.f6999a;
    }

    @Override // fv.a, fv.d
    public void e(CharSequence charSequence) {
        if (this.f7000b == null) {
            this.f7000b = charSequence.toString();
            return;
        }
        this.f7001c.append(charSequence);
        this.f7001c.append('\n');
    }

    @Override // fv.a, fv.d
    public void g() {
        this.f6999a.v(cv.a.e(this.f7000b.trim()));
        this.f6999a.w(this.f7001c.toString());
    }
}
