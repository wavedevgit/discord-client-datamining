package uk;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s {

    /* renamed from: a  reason: collision with root package name */
    private final jk.a f51460a;

    /* renamed from: b  reason: collision with root package name */
    private final m f51461b = new m();

    /* renamed from: c  reason: collision with root package name */
    private final StringBuilder f51462c = new StringBuilder();

    /* JADX INFO: Access modifiers changed from: package-private */
    public s(jk.a aVar) {
        this.f51460a = aVar;
    }

    private n b(int i10) {
        char c10;
        int f10 = f(i10, 5);
        if (f10 == 15) {
            return new n(i10 + 5, '$');
        }
        if (f10 >= 5 && f10 < 15) {
            return new n(i10 + 5, (char) (f10 + 43));
        }
        int f11 = f(i10, 6);
        if (f11 >= 32 && f11 < 58) {
            return new n(i10 + 6, (char) (f11 + 33));
        }
        switch (f11) {
            case 58:
                c10 = '*';
                break;
            case 59:
                c10 = ',';
                break;
            case 60:
                c10 = '-';
                break;
            case 61:
                c10 = '.';
                break;
            case 62:
                c10 = '/';
                break;
            default:
                throw new IllegalStateException("Decoding invalid alphanumeric value: " + f11);
        }
        return new n(i10 + 6, c10);
    }

    private n d(int i10) {
        int f10 = f(i10, 5);
        if (f10 == 15) {
            return new n(i10 + 5, '$');
        }
        char c10 = '+';
        if (f10 >= 5 && f10 < 15) {
            return new n(i10 + 5, (char) (f10 + 43));
        }
        int f11 = f(i10, 7);
        if (f11 >= 64 && f11 < 90) {
            return new n(i10 + 7, (char) (f11 + 1));
        }
        if (f11 >= 90 && f11 < 116) {
            return new n(i10 + 7, (char) (f11 + 7));
        }
        switch (f(i10, 8)) {
            case 232:
                c10 = '!';
                break;
            case 233:
                c10 = '\"';
                break;
            case 234:
                c10 = '%';
                break;
            case 235:
                c10 = '&';
                break;
            case 236:
                c10 = '\'';
                break;
            case 237:
                c10 = '(';
                break;
            case 238:
                c10 = ')';
                break;
            case 239:
                c10 = '*';
                break;
            case 240:
                break;
            case 241:
                c10 = ',';
                break;
            case 242:
                c10 = '-';
                break;
            case 243:
                c10 = '.';
                break;
            case 244:
                c10 = '/';
                break;
            case 245:
                c10 = ':';
                break;
            case 246:
                c10 = ';';
                break;
            case 247:
                c10 = '<';
                break;
            case 248:
                c10 = '=';
                break;
            case 249:
                c10 = '>';
                break;
            case androidx.recyclerview.widget.h.DEFAULT_SWIPE_ANIMATION_DURATION /* 250 */:
                c10 = '?';
                break;
            case 251:
                c10 = '_';
                break;
            case 252:
                c10 = ' ';
                break;
            default:
                throw fk.g.a();
        }
        return new n(i10 + 8, c10);
    }

    private p e(int i10) {
        int i11 = i10 + 7;
        if (i11 > this.f51460a.l()) {
            int f10 = f(i10, 4);
            if (f10 == 0) {
                return new p(this.f51460a.l(), 10, 10);
            }
            return new p(this.f51460a.l(), f10 - 1, 10);
        }
        int f11 = f(i10, 7) - 8;
        return new p(i11, f11 / 11, f11 % 11);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int g(jk.a aVar, int i10, int i11) {
        int i12 = 0;
        for (int i13 = 0; i13 < i11; i13++) {
            if (aVar.g(i10 + i13)) {
                i12 |= 1 << ((i11 - i13) - 1);
            }
        }
        return i12;
    }

    private boolean h(int i10) {
        int i11 = i10 + 3;
        if (i11 > this.f51460a.l()) {
            return false;
        }
        while (i10 < i11) {
            if (this.f51460a.g(i10)) {
                return false;
            }
            i10++;
        }
        return true;
    }

    private boolean i(int i10) {
        int i11;
        if (i10 + 1 > this.f51460a.l()) {
            return false;
        }
        for (int i12 = 0; i12 < 5 && (i11 = i12 + i10) < this.f51460a.l(); i12++) {
            if (i12 == 2) {
                if (!this.f51460a.g(i10 + 2)) {
                    return false;
                }
            } else if (this.f51460a.g(i11)) {
                return false;
            }
        }
        return true;
    }

    private boolean j(int i10) {
        int i11;
        if (i10 + 1 > this.f51460a.l()) {
            return false;
        }
        for (int i12 = 0; i12 < 4 && (i11 = i12 + i10) < this.f51460a.l(); i12++) {
            if (this.f51460a.g(i11)) {
                return false;
            }
        }
        return true;
    }

    private boolean k(int i10) {
        int f10;
        if (i10 + 5 > this.f51460a.l()) {
            return false;
        }
        int f11 = f(i10, 5);
        if (f11 >= 5 && f11 < 16) {
            return true;
        }
        if (i10 + 6 > this.f51460a.l() || (f10 = f(i10, 6)) < 16 || f10 >= 63) {
            return false;
        }
        return true;
    }

    private boolean l(int i10) {
        int f10;
        if (i10 + 5 > this.f51460a.l()) {
            return false;
        }
        int f11 = f(i10, 5);
        if (f11 >= 5 && f11 < 16) {
            return true;
        }
        if (i10 + 7 > this.f51460a.l()) {
            return false;
        }
        int f12 = f(i10, 7);
        if (f12 >= 64 && f12 < 116) {
            return true;
        }
        if (i10 + 8 > this.f51460a.l() || (f10 = f(i10, 8)) < 232 || f10 >= 253) {
            return false;
        }
        return true;
    }

    private boolean m(int i10) {
        if (i10 + 7 > this.f51460a.l()) {
            if (i10 + 4 <= this.f51460a.l()) {
                return true;
            }
            return false;
        }
        int i11 = i10;
        while (true) {
            int i12 = i10 + 3;
            if (i11 < i12) {
                if (this.f51460a.g(i11)) {
                    return true;
                }
                i11++;
            } else {
                return this.f51460a.g(i12);
            }
        }
    }

    private l n() {
        while (k(this.f51461b.a())) {
            n b10 = b(this.f51461b.a());
            this.f51461b.h(b10.a());
            if (b10.c()) {
                return new l(new o(this.f51461b.a(), this.f51462c.toString()), true);
            }
            this.f51462c.append(b10.b());
        }
        if (h(this.f51461b.a())) {
            this.f51461b.b(3);
            this.f51461b.g();
        } else if (i(this.f51461b.a())) {
            if (this.f51461b.a() + 5 < this.f51460a.l()) {
                this.f51461b.b(5);
            } else {
                this.f51461b.h(this.f51460a.l());
            }
            this.f51461b.f();
        }
        return new l();
    }

    private o o() {
        l q10;
        boolean b10;
        do {
            int a10 = this.f51461b.a();
            if (this.f51461b.c()) {
                q10 = n();
                b10 = q10.b();
            } else if (this.f51461b.d()) {
                q10 = p();
                b10 = q10.b();
            } else {
                q10 = q();
                b10 = q10.b();
            }
            if (a10 != this.f51461b.a() || b10) {
                break;
                break;
            }
            break;
        } while (!b10);
        return q10.a();
    }

    private l p() {
        while (l(this.f51461b.a())) {
            n d10 = d(this.f51461b.a());
            this.f51461b.h(d10.a());
            if (d10.c()) {
                return new l(new o(this.f51461b.a(), this.f51462c.toString()), true);
            }
            this.f51462c.append(d10.b());
        }
        if (h(this.f51461b.a())) {
            this.f51461b.b(3);
            this.f51461b.g();
        } else if (i(this.f51461b.a())) {
            if (this.f51461b.a() + 5 < this.f51460a.l()) {
                this.f51461b.b(5);
            } else {
                this.f51461b.h(this.f51460a.l());
            }
            this.f51461b.e();
        }
        return new l();
    }

    private l q() {
        o oVar;
        while (m(this.f51461b.a())) {
            p e10 = e(this.f51461b.a());
            this.f51461b.h(e10.a());
            if (e10.d()) {
                if (e10.e()) {
                    oVar = new o(this.f51461b.a(), this.f51462c.toString());
                } else {
                    oVar = new o(this.f51461b.a(), this.f51462c.toString(), e10.c());
                }
                return new l(oVar, true);
            }
            this.f51462c.append(e10.b());
            if (e10.e()) {
                return new l(new o(this.f51461b.a(), this.f51462c.toString()), true);
            }
            this.f51462c.append(e10.c());
        }
        if (j(this.f51461b.a())) {
            this.f51461b.e();
            this.f51461b.b(4);
        }
        return new l();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String a(StringBuilder sb2, int i10) {
        String str;
        String str2 = null;
        while (true) {
            o c10 = c(i10, str2);
            String a10 = r.a(c10.b());
            if (a10 != null) {
                sb2.append(a10);
            }
            if (c10.d()) {
                str = String.valueOf(c10.c());
            } else {
                str = null;
            }
            if (i10 == c10.a()) {
                return sb2.toString();
            }
            i10 = c10.a();
            str2 = str;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public o c(int i10, String str) {
        this.f51462c.setLength(0);
        if (str != null) {
            this.f51462c.append(str);
        }
        this.f51461b.h(i10);
        o o10 = o();
        if (o10 != null && o10.d()) {
            return new o(this.f51461b.a(), this.f51462c.toString(), o10.c());
        }
        return new o(this.f51461b.a(), this.f51462c.toString());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int f(int i10, int i11) {
        return g(this.f51460a, i10, i11);
    }
}
