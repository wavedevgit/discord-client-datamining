package ed;

import oe.s0;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f0 {

    /* renamed from: a  reason: collision with root package name */
    private final int f22468a;

    /* renamed from: d  reason: collision with root package name */
    private boolean f22471d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f22472e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f22473f;

    /* renamed from: b  reason: collision with root package name */
    private final s0 f22469b = new s0(0);

    /* renamed from: g  reason: collision with root package name */
    private long f22474g = -9223372036854775807L;

    /* renamed from: h  reason: collision with root package name */
    private long f22475h = -9223372036854775807L;

    /* renamed from: i  reason: collision with root package name */
    private long f22476i = -9223372036854775807L;

    /* renamed from: c  reason: collision with root package name */
    private final oe.h0 f22470c = new oe.h0();

    /* JADX INFO: Access modifiers changed from: package-private */
    public f0(int i10) {
        this.f22468a = i10;
    }

    private int a(uc.l lVar) {
        this.f22470c.R(w0.f39042f);
        this.f22471d = true;
        lVar.e();
        return 0;
    }

    private int f(uc.l lVar, uc.y yVar, int i10) {
        int min = (int) Math.min(this.f22468a, lVar.getLength());
        long j10 = 0;
        if (lVar.getPosition() != j10) {
            yVar.f50714a = j10;
            return 1;
        }
        this.f22470c.Q(min);
        lVar.e();
        lVar.n(this.f22470c.e(), 0, min);
        this.f22474g = g(this.f22470c, i10);
        this.f22472e = true;
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
        int min = (int) Math.min(this.f22468a, length);
        long j10 = length - min;
        if (lVar.getPosition() != j10) {
            yVar.f50714a = j10;
            return 1;
        }
        this.f22470c.Q(min);
        lVar.e();
        lVar.n(this.f22470c.e(), 0, min);
        this.f22475h = i(this.f22470c, i10);
        this.f22473f = true;
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
        return this.f22476i;
    }

    public s0 c() {
        return this.f22469b;
    }

    public boolean d() {
        return this.f22471d;
    }

    public int e(uc.l lVar, uc.y yVar, int i10) {
        if (i10 <= 0) {
            return a(lVar);
        }
        if (!this.f22473f) {
            return h(lVar, yVar, i10);
        }
        if (this.f22475h == -9223372036854775807L) {
            return a(lVar);
        }
        if (!this.f22472e) {
            return f(lVar, yVar, i10);
        }
        long j10 = this.f22474g;
        if (j10 == -9223372036854775807L) {
            return a(lVar);
        }
        long b10 = this.f22469b.b(this.f22475h) - this.f22469b.b(j10);
        this.f22476i = b10;
        if (b10 < 0) {
            oe.y.i("TsDurationReader", "Invalid duration: " + this.f22476i + ". Using TIME_UNSET instead.");
            this.f22476i = -9223372036854775807L;
        }
        return a(lVar);
    }
}
