package yk;

import java.util.Formatter;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class f {

    /* renamed from: a  reason: collision with root package name */
    private final a f55507a;

    /* renamed from: b  reason: collision with root package name */
    private final g[] f55508b;

    /* renamed from: c  reason: collision with root package name */
    private c f55509c;

    /* renamed from: d  reason: collision with root package name */
    private final int f55510d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(a aVar, c cVar) {
        this.f55507a = aVar;
        int a10 = aVar.a();
        this.f55510d = a10;
        this.f55509c = cVar;
        this.f55508b = new g[a10 + 2];
    }

    private void a(g gVar) {
        if (gVar != null) {
            ((h) gVar).g(this.f55507a);
        }
    }

    private static boolean b(d dVar, d dVar2) {
        if (dVar2 == null || !dVar2.g() || dVar2.a() != dVar.a()) {
            return false;
        }
        dVar.i(dVar2.c());
        return true;
    }

    private static int c(int i10, int i11, d dVar) {
        if (dVar != null && !dVar.g()) {
            if (dVar.h(i10)) {
                dVar.i(i10);
                return 0;
            }
            return i11 + 1;
        }
        return i11;
    }

    private int d() {
        int f10 = f();
        if (f10 == 0) {
            return 0;
        }
        for (int i10 = 1; i10 < this.f55510d + 1; i10++) {
            d[] d10 = this.f55508b[i10].d();
            for (int i11 = 0; i11 < d10.length; i11++) {
                d dVar = d10[i11];
                if (dVar != null && !dVar.g()) {
                    e(i10, i11, d10);
                }
            }
        }
        return f10;
    }

    private void e(int i10, int i11, d[] dVarArr) {
        d[] dVarArr2;
        d dVar = dVarArr[i11];
        d[] d10 = this.f55508b[i10 - 1].d();
        g gVar = this.f55508b[i10 + 1];
        if (gVar != null) {
            dVarArr2 = gVar.d();
        } else {
            dVarArr2 = d10;
        }
        d[] dVarArr3 = new d[14];
        dVarArr3[2] = d10[i11];
        dVarArr3[3] = dVarArr2[i11];
        if (i11 > 0) {
            int i12 = i11 - 1;
            dVarArr3[0] = dVarArr[i12];
            dVarArr3[4] = d10[i12];
            dVarArr3[5] = dVarArr2[i12];
        }
        if (i11 > 1) {
            int i13 = i11 - 2;
            dVarArr3[8] = dVarArr[i13];
            dVarArr3[10] = d10[i13];
            dVarArr3[11] = dVarArr2[i13];
        }
        if (i11 < dVarArr.length - 1) {
            int i14 = i11 + 1;
            dVarArr3[1] = dVarArr[i14];
            dVarArr3[6] = d10[i14];
            dVarArr3[7] = dVarArr2[i14];
        }
        if (i11 < dVarArr.length - 2) {
            int i15 = i11 + 2;
            dVarArr3[9] = dVarArr[i15];
            dVarArr3[12] = d10[i15];
            dVarArr3[13] = dVarArr2[i15];
        }
        for (int i16 = 0; i16 < 14 && !b(dVar, dVarArr3[i16]); i16++) {
        }
    }

    private int f() {
        g();
        return h() + i();
    }

    private void g() {
        g[] gVarArr = this.f55508b;
        g gVar = gVarArr[0];
        if (gVar != null && gVarArr[this.f55510d + 1] != null) {
            d[] d10 = gVar.d();
            d[] d11 = this.f55508b[this.f55510d + 1].d();
            for (int i10 = 0; i10 < d10.length; i10++) {
                d dVar = d10[i10];
                if (dVar != null && d11[i10] != null && dVar.c() == d11[i10].c()) {
                    for (int i11 = 1; i11 <= this.f55510d; i11++) {
                        d dVar2 = this.f55508b[i11].d()[i10];
                        if (dVar2 != null) {
                            dVar2.i(d10[i10].c());
                            if (!dVar2.g()) {
                                this.f55508b[i11].d()[i10] = null;
                            }
                        }
                    }
                }
            }
        }
    }

    private int h() {
        g gVar = this.f55508b[0];
        if (gVar == null) {
            return 0;
        }
        d[] d10 = gVar.d();
        int i10 = 0;
        for (int i11 = 0; i11 < d10.length; i11++) {
            d dVar = d10[i11];
            if (dVar != null) {
                int c10 = dVar.c();
                int i12 = 0;
                for (int i13 = 1; i13 < this.f55510d + 1 && i12 < 2; i13++) {
                    d dVar2 = this.f55508b[i13].d()[i11];
                    if (dVar2 != null) {
                        i12 = c(c10, i12, dVar2);
                        if (!dVar2.g()) {
                            i10++;
                        }
                    }
                }
            }
        }
        return i10;
    }

    private int i() {
        g[] gVarArr = this.f55508b;
        int i10 = this.f55510d;
        if (gVarArr[i10 + 1] == null) {
            return 0;
        }
        d[] d10 = gVarArr[i10 + 1].d();
        int i11 = 0;
        for (int i12 = 0; i12 < d10.length; i12++) {
            d dVar = d10[i12];
            if (dVar != null) {
                int c10 = dVar.c();
                int i13 = 0;
                for (int i14 = this.f55510d + 1; i14 > 0 && i13 < 2; i14--) {
                    d dVar2 = this.f55508b[i14].d()[i12];
                    if (dVar2 != null) {
                        i13 = c(c10, i13, dVar2);
                        if (!dVar2.g()) {
                            i11++;
                        }
                    }
                }
            }
        }
        return i11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int j() {
        return this.f55510d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int k() {
        return this.f55507a.b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int l() {
        return this.f55507a.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c m() {
        return this.f55509c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g n(int i10) {
        return this.f55508b[i10];
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g[] o() {
        a(this.f55508b[0]);
        a(this.f55508b[this.f55510d + 1]);
        int i10 = 928;
        while (true) {
            int d10 = d();
            if (d10 <= 0 || d10 >= i10) {
                break;
            }
            i10 = d10;
        }
        return this.f55508b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void p(c cVar) {
        this.f55509c = cVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void q(int i10, g gVar) {
        this.f55508b[i10] = gVar;
    }

    public String toString() {
        g[] gVarArr = this.f55508b;
        g gVar = gVarArr[0];
        if (gVar == null) {
            gVar = gVarArr[this.f55510d + 1];
        }
        Formatter formatter = new Formatter();
        for (int i10 = 0; i10 < gVar.d().length; i10++) {
            try {
                formatter.format("CW %3d:", Integer.valueOf(i10));
                for (int i11 = 0; i11 < this.f55510d + 2; i11++) {
                    g gVar2 = this.f55508b[i11];
                    if (gVar2 == null) {
                        formatter.format("    |   ", new Object[0]);
                    } else {
                        d dVar = gVar2.d()[i10];
                        if (dVar == null) {
                            formatter.format("    |   ", new Object[0]);
                        } else {
                            formatter.format(" %3d|%3d", Integer.valueOf(dVar.c()), Integer.valueOf(dVar.e()));
                        }
                    }
                }
                formatter.format("%n", new Object[0]);
            } catch (Throwable th2) {
                try {
                    throw th2;
                } catch (Throwable th3) {
                    try {
                        formatter.close();
                    } catch (Throwable th4) {
                        th2.addSuppressed(th4);
                    }
                    throw th3;
                }
            }
        }
        String formatter2 = formatter.toString();
        formatter.close();
        return formatter2;
    }
}
