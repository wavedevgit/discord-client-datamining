package gv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class i extends lv.a {

    /* renamed from: a  reason: collision with root package name */
    private final jv.g f25453a;

    /* renamed from: b  reason: collision with root package name */
    private String f25454b;

    /* renamed from: c  reason: collision with root package name */
    private StringBuilder f25455c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a extends lv.b {
        @Override // lv.e
        public lv.f a(lv.h hVar, lv.g gVar) {
            int a10 = hVar.a();
            if (a10 >= iv.d.f30397a) {
                return lv.f.c();
            }
            int c10 = hVar.c();
            i k10 = i.k(hVar.getLine(), c10, a10);
            if (k10 != null) {
                return lv.f.d(k10).b(c10 + k10.f25453a.p());
            }
            return lv.f.c();
        }
    }

    public i(char c10, int i10, int i11) {
        jv.g gVar = new jv.g();
        this.f25453a = gVar;
        this.f25455c = new StringBuilder();
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
            if (iv.d.b('`', charSequence, i10 + i12) != -1) {
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
        char n10 = this.f25453a.n();
        int p10 = this.f25453a.p();
        int k10 = iv.d.k(n10, charSequence, i10, charSequence.length()) - i10;
        if (k10 < p10 || iv.d.m(charSequence, i10 + k10, charSequence.length()) != charSequence.length()) {
            return false;
        }
        return true;
    }

    @Override // lv.d
    public jv.a c() {
        return this.f25453a;
    }

    @Override // lv.a, lv.d
    public void e(CharSequence charSequence) {
        if (this.f25454b == null) {
            this.f25454b = charSequence.toString();
            return;
        }
        this.f25455c.append(charSequence);
        this.f25455c.append('\n');
    }

    @Override // lv.a, lv.d
    public void f() {
        this.f25453a.v(iv.a.e(this.f25454b.trim()));
        this.f25453a.w(this.f25455c.toString());
    }

    @Override // lv.d
    public lv.c g(lv.h hVar) {
        int c10 = hVar.c();
        int index = hVar.getIndex();
        CharSequence line = hVar.getLine();
        if (hVar.a() < iv.d.f30397a && l(line, c10)) {
            return lv.c.c();
        }
        int length = line.length();
        for (int o10 = this.f25453a.o(); o10 > 0 && index < length && line.charAt(index) == ' '; o10--) {
            index++;
        }
        return lv.c.b(index);
    }
}
