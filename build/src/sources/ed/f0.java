package ed;

import oe.s0;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f0 {

    /* renamed from: a  reason: collision with root package name */
    private final int f21301a;

    /* renamed from: d  reason: collision with root package name */
    private boolean f21304d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f21305e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f21306f;

    /* renamed from: b  reason: collision with root package name */
    private final s0 f21302b = new s0(0);

    /* renamed from: g  reason: collision with root package name */
    private long f21307g = -9223372036854775807L;

    /* renamed from: h  reason: collision with root package name */
    private long f21308h = -9223372036854775807L;

    /* renamed from: i  reason: collision with root package name */
    private long f21309i = -9223372036854775807L;

    /* renamed from: c  reason: collision with root package name */
    private final oe.h0 f21303c = new oe.h0();

    /* JADX INFO: Access modifiers changed from: package-private */
    public f0(int i10) {
        this.f21301a = i10;
    }

    private int a(uc.l lVar) {
        this.f21303c.R(w0.f40716f);
        this.f21304d = true;
        lVar.e();
        return 0;
    }

    private int f(uc.l lVar, uc.y yVar, int i10) {
        int min = (int) Math.min(this.f21301a, lVar.getLength());
        long j10 = 0;
        if (lVar.getPosition() != j10) {
            yVar.f51535a = j10;
            return 1;
        }
        this.f21303c.Q(min);
        lVar.e();
        lVar.n(this.f21303c.e(), 0, min);
        this.f21307g = g(this.f21303c, i10);
        this.f21305e = true;
        return 0;
    }

    private long g(oe.h0 h0Var, int i10) {
        int g10 = h0Var.g();
        for (int f10 = h0Var.f(); f10 < g10; f10++) {
            if (h0Var.e()[f10] == 71) {
                long c10 = j0.c(h0Var, f10, i10);
                if (c10 != -9223372036854775807L) {
                    return c10;
                }
            }
        }
        return -9223372036854775807L;
    }

    private int h(uc.l lVar, uc.y yVar, int i10) {
        long length = lVar.getLength();
        int min = (int) Math.min(this.f21301a, length);
        long j10 = length - min;
        if (lVar.getPosition() != j10) {
            yVar.f51535a = j10;
            return 1;
        }
        this.f21303c.Q(min);
        lVar.e();
        lVar.n(this.f21303c.e(), 0, min);
        this.f21308h = i(this.f21303c, i10);
        this.f21306f = true;
        return 0;
    }

    private long i(oe.h0 h0Var, int i10) {
        int f10 = h0Var.f();
        int g10 = h0Var.g();
        for (int i11 = g10 - 188; i11 >= f10; i11--) {
            if (j0.b(h0Var.e(), f10, g10, i11)) {
                long c10 = j0.c(h0Var, i11, i10);
                if (c10 != -9223372036854775807L) {
                    return c10;
                }
            }
        }
        return -9223372036854775807L;
    }

    public long b() {
        return this.f21309i;
    }

    public s0 c() {
        return this.f21302b;
    }

    public boolean d() {
        return this.f21304d;
    }

    public int e(uc.l lVar, uc.y yVar, int i10) {
        if (i10 <= 0) {
            return a(lVar);
        }
        if (!this.f21306f) {
            return h(lVar, yVar, i10);
        }
        if (this.f21308h == -9223372036854775807L) {
            return a(lVar);
        }
        if (!this.f21305e) {
            return f(lVar, yVar, i10);
        }
        long j10 = this.f21307g;
        if (j10 == -9223372036854775807L) {
            return a(lVar);
        }
        long b10 = this.f21302b.b(this.f21308h) - this.f21302b.b(j10);
        this.f21309i = b10;
        if (b10 < 0) {
            oe.y.i("TsDurationReader", "Invalid duration: " + this.f21309i + ". Using TIME_UNSET instead.");
            this.f21309i = -9223372036854775807L;
        }
        return a(lVar);
    }
}
