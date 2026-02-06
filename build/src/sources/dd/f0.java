package dd;

import ne.s0;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f0 {

    /* renamed from: a  reason: collision with root package name */
    private final int f20412a;

    /* renamed from: d  reason: collision with root package name */
    private boolean f20415d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f20416e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f20417f;

    /* renamed from: b  reason: collision with root package name */
    private final s0 f20413b = new s0(0);

    /* renamed from: g  reason: collision with root package name */
    private long f20418g = -9223372036854775807L;

    /* renamed from: h  reason: collision with root package name */
    private long f20419h = -9223372036854775807L;

    /* renamed from: i  reason: collision with root package name */
    private long f20420i = -9223372036854775807L;

    /* renamed from: c  reason: collision with root package name */
    private final ne.h0 f20414c = new ne.h0();

    /* JADX INFO: Access modifiers changed from: package-private */
    public f0(int i10) {
        this.f20412a = i10;
    }

    private int a(tc.l lVar) {
        this.f20414c.R(w0.f39017f);
        this.f20415d = true;
        lVar.e();
        return 0;
    }

    private int f(tc.l lVar, tc.y yVar, int i10) {
        int min = (int) Math.min(this.f20412a, lVar.getLength());
        long j10 = 0;
        if (lVar.getPosition() != j10) {
            yVar.f50579a = j10;
            return 1;
        }
        this.f20414c.Q(min);
        lVar.e();
        lVar.n(this.f20414c.e(), 0, min);
        this.f20418g = g(this.f20414c, i10);
        this.f20416e = true;
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
        int min = (int) Math.min(this.f20412a, length);
        long j10 = length - min;
        if (lVar.getPosition() != j10) {
            yVar.f50579a = j10;
            return 1;
        }
        this.f20414c.Q(min);
        lVar.e();
        lVar.n(this.f20414c.e(), 0, min);
        this.f20419h = i(this.f20414c, i10);
        this.f20417f = true;
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
        return this.f20420i;
    }

    public s0 c() {
        return this.f20413b;
    }

    public boolean d() {
        return this.f20415d;
    }

    public int e(tc.l lVar, tc.y yVar, int i10) {
        if (i10 <= 0) {
            return a(lVar);
        }
        if (!this.f20417f) {
            return h(lVar, yVar, i10);
        }
        if (this.f20419h == -9223372036854775807L) {
            return a(lVar);
        }
        if (!this.f20416e) {
            return f(lVar, yVar, i10);
        }
        long j10 = this.f20418g;
        if (j10 == -9223372036854775807L) {
            return a(lVar);
        }
        long b10 = this.f20413b.b(this.f20419h) - this.f20413b.b(j10);
        this.f20420i = b10;
        if (b10 < 0) {
            ne.y.i("TsDurationReader", "Invalid duration: " + this.f20420i + ". Using TIME_UNSET instead.");
            this.f20420i = -9223372036854775807L;
        }
        return a(lVar);
    }
}
