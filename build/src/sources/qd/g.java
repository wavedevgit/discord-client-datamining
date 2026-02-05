package qd;

import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class g implements n0 {

    /* renamed from: d  reason: collision with root package name */
    protected final n0[] f47629d;

    public g(n0[] n0VarArr) {
        this.f47629d = n0VarArr;
    }

    @Override // qd.n0
    public final long b() {
        long j10 = Long.MAX_VALUE;
        for (n0 n0Var : this.f47629d) {
            long b10 = n0Var.b();
            if (b10 != Long.MIN_VALUE) {
                j10 = Math.min(j10, b10);
            }
        }
        if (j10 == LongCompanionObject.MAX_VALUE) {
            return Long.MIN_VALUE;
        }
        return j10;
    }

    @Override // qd.n0
    public boolean d() {
        for (n0 n0Var : this.f47629d) {
            if (n0Var.d()) {
                return true;
            }
        }
        return false;
    }

    @Override // qd.n0
    public boolean f(long j10) {
        n0[] n0VarArr;
        boolean z10;
        boolean z11;
        boolean z12 = false;
        do {
            long b10 = b();
            if (b10 == Long.MIN_VALUE) {
                return z12;
            }
            z10 = false;
            for (n0 n0Var : this.f47629d) {
                long b11 = n0Var.b();
                if (b11 != Long.MIN_VALUE && b11 <= j10) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                if (b11 == b10 || z11) {
                    z10 |= n0Var.f(j10);
                }
            }
            z12 |= z10;
        } while (z10);
        return z12;
    }

    @Override // qd.n0
    public final long g() {
        long j10 = Long.MAX_VALUE;
        for (n0 n0Var : this.f47629d) {
            long g10 = n0Var.g();
            if (g10 != Long.MIN_VALUE) {
                j10 = Math.min(j10, g10);
            }
        }
        if (j10 == LongCompanionObject.MAX_VALUE) {
            return Long.MIN_VALUE;
        }
        return j10;
    }

    @Override // qd.n0
    public final void h(long j10) {
        for (n0 n0Var : this.f47629d) {
            n0Var.h(j10);
        }
    }
}
