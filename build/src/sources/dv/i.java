package dv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class i extends iv.a {

    /* renamed from: a  reason: collision with root package name */
    private final gv.g f21129a;

    /* renamed from: b  reason: collision with root package name */
    private String f21130b;

    /* renamed from: c  reason: collision with root package name */
    private StringBuilder f21131c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a extends iv.b {
        @Override // iv.e
        public iv.f a(iv.h hVar, iv.g gVar) {
            int a10 = hVar.a();
            if (a10 >= fv.d.f24825a) {
                return iv.f.c();
            }
            int c10 = hVar.c();
            i k10 = i.k(hVar.getLine(), c10, a10);
            if (k10 != null) {
                return iv.f.d(k10).b(c10 + k10.f21129a.p());
            }
            return iv.f.c();
        }
    }

    public i(char c10, int i10, int i11) {
        gv.g gVar = new gv.g();
        this.f21129a = gVar;
        this.f21131c = new StringBuilder();
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
            if (fv.d.b('`', charSequence, i10 + i12) != -1) {
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
        char n10 = this.f21129a.n();
        int p10 = this.f21129a.p();
        int k10 = fv.d.k(n10, charSequence, i10, charSequence.length()) - i10;
        if (k10 < p10 || fv.d.m(charSequence, i10 + k10, charSequence.length()) != charSequence.length()) {
            return false;
        }
        return true;
    }

    @Override // iv.d
    public gv.a d() {
        return this.f21129a;
    }

    @Override // iv.a, iv.d
    public void e(CharSequence charSequence) {
        if (this.f21130b == null) {
            this.f21130b = charSequence.toString();
            return;
        }
        this.f21131c.append(charSequence);
        this.f21131c.append('\n');
    }

    @Override // iv.a, iv.d
    public void f() {
        this.f21129a.v(fv.a.e(this.f21130b.trim()));
        this.f21129a.w(this.f21131c.toString());
    }

    @Override // iv.d
    public iv.c g(iv.h hVar) {
        int c10 = hVar.c();
        int index = hVar.getIndex();
        CharSequence line = hVar.getLine();
        if (hVar.a() < fv.d.f24825a && l(line, c10)) {
            return iv.c.c();
        }
        int length = line.length();
        for (int o10 = this.f21129a.o(); o10 > 0 && index < length && line.charAt(index) == ' '; o10--) {
            index++;
        }
        return iv.c.b(index);
    }
}
