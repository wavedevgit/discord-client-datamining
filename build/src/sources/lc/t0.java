package lc;

import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class t0 {

    /* renamed from: c  reason: collision with root package name */
    public static final t0 f37115c;

    /* renamed from: d  reason: collision with root package name */
    public static final t0 f37116d;

    /* renamed from: e  reason: collision with root package name */
    public static final t0 f37117e;

    /* renamed from: f  reason: collision with root package name */
    public static final t0 f37118f;

    /* renamed from: g  reason: collision with root package name */
    public static final t0 f37119g;

    /* renamed from: a  reason: collision with root package name */
    public final long f37120a;

    /* renamed from: b  reason: collision with root package name */
    public final long f37121b;

    static {
        t0 t0Var = new t0(0L, 0L);
        f37115c = t0Var;
        f37116d = new t0(LongCompanionObject.MAX_VALUE, LongCompanionObject.MAX_VALUE);
        f37117e = new t0(LongCompanionObject.MAX_VALUE, 0L);
        f37118f = new t0(0L, LongCompanionObject.MAX_VALUE);
        f37119g = t0Var;
    }

    public t0(long j10, long j11) {
        boolean z10;
        if (j10 >= 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.a(z10);
        ne.a.a(j11 >= 0);
        this.f37120a = j10;
        this.f37121b = j11;
    }

    /* JADX WARN: Removed duplicated region for block: B:26:0x0051 A[RETURN] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public long a(long r9, long r11, long r13) {
        /*
            r8 = this;
            long r2 = r8.f37120a
            r0 = 0
            int r4 = (r2 > r0 ? 1 : (r2 == r0 ? 0 : -1))
            if (r4 != 0) goto Lf
            long r4 = r8.f37121b
            int r0 = (r4 > r0 ? 1 : (r4 == r0 ? 0 : -1))
            if (r0 != 0) goto Lf
            return r9
        Lf:
            r4 = -9223372036854775808
            r0 = r9
            long r9 = ne.w0.g1(r0, r2, r4)
            long r2 = r8.f37121b
            r4 = 9223372036854775807(0x7fffffffffffffff, double:NaN)
            long r2 = ne.w0.b(r0, r2, r4)
            int r4 = (r9 > r11 ? 1 : (r9 == r11 ? 0 : -1))
            r5 = 0
            r6 = 1
            if (r4 > 0) goto L2d
            int r4 = (r11 > r2 ? 1 : (r11 == r2 ? 0 : -1))
            if (r4 > 0) goto L2d
            r4 = r6
            goto L2e
        L2d:
            r4 = r5
        L2e:
            int r7 = (r9 > r13 ? 1 : (r9 == r13 ? 0 : -1))
            if (r7 > 0) goto L37
            int r2 = (r13 > r2 ? 1 : (r13 == r2 ? 0 : -1))
            if (r2 > 0) goto L37
            r5 = r6
        L37:
            if (r4 == 0) goto L4c
            if (r5 == 0) goto L4c
            long r9 = r11 - r0
            long r9 = java.lang.Math.abs(r9)
            long r0 = r13 - r0
            long r0 = java.lang.Math.abs(r0)
            int r9 = (r9 > r0 ? 1 : (r9 == r0 ? 0 : -1))
            if (r9 > 0) goto L51
            goto L4e
        L4c:
            if (r4 == 0) goto L4f
        L4e:
            return r11
        L4f:
            if (r5 == 0) goto L52
        L51:
            return r13
        L52:
            return r9
        */
        throw new UnsupportedOperationException("Method not decompiled: lc.t0.a(long, long, long):long");
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && t0.class == obj.getClass()) {
            t0 t0Var = (t0) obj;
            if (this.f37120a == t0Var.f37120a && this.f37121b == t0Var.f37121b) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return (((int) this.f37120a) * 31) + ((int) this.f37121b);
    }
}
