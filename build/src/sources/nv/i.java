package nv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class i extends sv.a {

    /* renamed from: a  reason: collision with root package name */
    private final qv.g f41212a;

    /* renamed from: b  reason: collision with root package name */
    private String f41213b;

    /* renamed from: c  reason: collision with root package name */
    private StringBuilder f41214c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a extends sv.b {
        @Override // sv.e
        public sv.f a(sv.h hVar, sv.g gVar) {
            int a10 = hVar.a();
            if (a10 >= pv.d.f45756a) {
                return sv.f.c();
            }
            int c10 = hVar.c();
            i k10 = i.k(hVar.getLine(), c10, a10);
            if (k10 != null) {
                return sv.f.d(k10).b(c10 + k10.f41212a.p());
            }
            return sv.f.c();
        }
    }

    public i(char c10, int i10, int i11) {
        qv.g gVar = new qv.g();
        this.f41212a = gVar;
        this.f41214c = new StringBuilder();
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
            if (pv.d.b('`', charSequence, i10 + i12) != -1) {
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
        char n10 = this.f41212a.n();
        int p10 = this.f41212a.p();
        int k10 = pv.d.k(n10, charSequence, i10, charSequence.length()) - i10;
        if (k10 < p10 || pv.d.m(charSequence, i10 + k10, charSequence.length()) != charSequence.length()) {
            return false;
        }
        return true;
    }

    @Override // sv.d
    public sv.c c(sv.h hVar) {
        int c10 = hVar.c();
        int index = hVar.getIndex();
        CharSequence line = hVar.getLine();
        if (hVar.a() < pv.d.f45756a && l(line, c10)) {
            return sv.c.c();
        }
        int length = line.length();
        for (int o10 = this.f41212a.o(); o10 > 0 && index < length && line.charAt(index) == ' '; o10--) {
            index++;
        }
        return sv.c.b(index);
    }

    @Override // sv.d
    public qv.a e() {
        return this.f41212a;
    }

    @Override // sv.a, sv.d
    public void f(CharSequence charSequence) {
        if (this.f41213b == null) {
            this.f41213b = charSequence.toString();
            return;
        }
        this.f41214c.append(charSequence);
        this.f41214c.append('\n');
    }

    @Override // sv.a, sv.d
    public void g() {
        this.f41212a.v(pv.a.e(this.f41213b.trim()));
        this.f41212a.w(this.f41214c.toString());
    }
}
