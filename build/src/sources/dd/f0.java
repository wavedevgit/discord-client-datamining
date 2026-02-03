package dd;

import ne.s0;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f0 {

    /* renamed from: a  reason: collision with root package name */
    private final int f21382a;

    /* renamed from: d  reason: collision with root package name */
    private boolean f21385d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f21386e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f21387f;

    /* renamed from: b  reason: collision with root package name */
    private final s0 f21383b = new s0(0);

    /* renamed from: g  reason: collision with root package name */
    private long f21388g = -9223372036854775807L;

    /* renamed from: h  reason: collision with root package name */
    private long f21389h = -9223372036854775807L;

    /* renamed from: i  reason: collision with root package name */
    private long f21390i = -9223372036854775807L;

    /* renamed from: c  reason: collision with root package name */
    private final ne.h0 f21384c = new ne.h0();

    /* JADX INFO: Access modifiers changed from: package-private */
    public f0(int i10) {
        this.f21382a = i10;
    }

    private int a(tc.l lVar) {
        this.f21384c.R(w0.f40163f);
        this.f21385d = true;
        lVar.e();
        return 0;
    }

    private int f(tc.l lVar, tc.y yVar, int i10) {
        int min = (int) Math.min(this.f21382a, lVar.getLength());
        long j10 = 0;
        if (lVar.getPosition() != j10) {
            yVar.f49790a = j10;
            return 1;
        }
        this.f21384c.Q(min);
        lVar.e();
        lVar.n(this.f21384c.e(), 0, min);
        this.f21388g = g(this.f21384c, i10);
        this.f21386e = true;
        return 0;
    }

    private long g(ne.h0 h0Var, int i10) {
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

    private int h(tc.l lVar, tc.y yVar, int i10) {
        long length = lVar.getLength();
        int min = (int) Math.min(this.f21382a, length);
        long j10 = length - min;
        if (lVar.getPosition() != j10) {
            yVar.f49790a = j10;
            return 1;
        }
        this.f21384c.Q(min);
        lVar.e();
        lVar.n(this.f21384c.e(), 0, min);
        this.f21389h = i(this.f21384c, i10);
        this.f21387f = true;
        return 0;
    }

    private long i(ne.h0 h0Var, int i10) {
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
        return this.f21390i;
    }

    public s0 c() {
        return this.f21383b;
    }

    public boolean d() {
        return this.f21385d;
    }

    public int e(tc.l lVar, tc.y yVar, int i10) {
        if (i10 <= 0) {
            return a(lVar);
        }
        if (!this.f21387f) {
            return h(lVar, yVar, i10);
        }
        if (this.f21389h == -9223372036854775807L) {
            return a(lVar);
        }
        if (!this.f21386e) {
            return f(lVar, yVar, i10);
        }
        long j10 = this.f21388g;
        if (j10 == -9223372036854775807L) {
            return a(lVar);
        }
        long b10 = this.f21383b.b(this.f21389h) - this.f21383b.b(j10);
        this.f21390i = b10;
        if (b10 < 0) {
            ne.y.i("TsDurationReader", "Invalid duration: " + this.f21390i + ". Using TIME_UNSET instead.");
            this.f21390i = -9223372036854775807L;
        }
        return a(lVar);
    }
}
