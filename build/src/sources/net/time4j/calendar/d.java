package net.time4j.calendar;

import kt.a0;
import net.time4j.f0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class d implements kt.k {

    /* renamed from: a  reason: collision with root package name */
    private static final long f40317a = f0.H0(1645, 1, 28).i();

    /* renamed from: b  reason: collision with root package name */
    private static final long f40318b = f0.H0(3000, 1, 27).i();

    /* renamed from: c  reason: collision with root package name */
    private static final long f40319c = f0.H0(-2636, 2, 15).i();

    private long f(int i10, int i11, h hVar) {
        long p10 = p(q(i10, i11) + ((hVar.getNumber() - 1) * 29));
        if (hVar.equals(b(p10).b0())) {
            return p10;
        }
        return p(p10 + 1);
    }

    private boolean j(long j10, long j11) {
        if (j11 >= j10) {
            if (k(j11) || j(j10, o(j11))) {
                return true;
            }
            return false;
        }
        return false;
    }

    private static long m(long j10, long j11) {
        return Math.round((j11 - j10) / 29.530588861d);
    }

    private long o(long j10) {
        return jt.d.NEW_MOON.e(n(j10)).t0(i(j10)).f0().i();
    }

    private long r(long j10) {
        long w10 = w(j10);
        long w11 = w(370 + w10);
        long p10 = p(w10 + 1);
        long p11 = p(p10 + 1);
        if (m(p10, o(w11 + 1)) == 12 && (k(p10) || k(p11))) {
            return p(p11 + 1);
        }
        return p11;
    }

    private long s(long j10) {
        long r10 = r(j10);
        if (j10 >= r10) {
            return r10;
        }
        return r(j10 - 180);
    }

    private long w(long j10) {
        int f10;
        net.time4j.tz.p i10 = i(j10);
        f0 M0 = f0.M0(j10, a0.UTC);
        if (M0.r() > 11 && M0.g() > 15) {
            f10 = M0.f();
        } else {
            f10 = M0.f() - 1;
        }
        jt.b bVar = jt.b.WINTER_SOLSTICE;
        f0 V = bVar.e(f10).t0(i10).V();
        if (V.P(M0)) {
            V = bVar.e(f10 - 1).t0(i10).V();
        }
        return V.i();
    }

    @Override // kt.k
    public final long a() {
        return f40318b;
    }

    @Override // kt.k
    public long d() {
        return f40317a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract f e(int i10, int i11, h hVar, int i12, long j10);

    /* JADX INFO: Access modifiers changed from: package-private */
    public final int g(int i10, int i11) {
        int[] h10 = h();
        int i12 = (((i10 - 1) * 60) + i11) - 1;
        int i13 = ((i12 - h10[0]) / 3) * 2;
        while (true) {
            if (i13 >= h10.length) {
                break;
            }
            int i14 = h10[i13];
            if (i14 < i12) {
                i13 += Math.max(((i12 - i14) / 3) * 2, 2);
            } else if (i14 <= i12) {
                return h10[i13 + 1];
            }
        }
        return 0;
    }

    abstract int[] h();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract net.time4j.tz.p i(long j10);

    final boolean k(long j10) {
        if ((((int) Math.floor(p.p(jt.c.g(n(j10)).c()) / 30.0d)) + 2) % 12 == (((int) Math.floor(p.p(jt.c.g(n(p(j10 + 1))).c()) / 30.0d)) + 2) % 12) {
            return true;
        }
        return false;
    }

    boolean l(int i10, int i11, h hVar, int i12) {
        if (i10 < 72 || i10 > 94 || i11 < 1 || i11 > 60 || ((i10 == 72 && i11 < 22) || ((i10 == 94 && i11 > 56) || i12 < 1 || i12 > 30 || hVar == null || (hVar.e() && hVar.getNumber() != g(i10, i11))))) {
            return false;
        }
        if (i12 != 30) {
            return true;
        }
        long f10 = f(i10, i11, hVar);
        if (p(1 + f10) - f10 != 30) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public net.time4j.a0 n(long j10) {
        return f0.M0(j10, a0.UTC).p0().Q(i(j10));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final long p(long j10) {
        return jt.d.NEW_MOON.d(n(j10)).t0(i(j10)).f0().i();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final long q(int i10, int i11) {
        return s((long) Math.floor(f40319c + (((((i10 - 1) * 60) + i11) - 0.5d) * 365.242189d)));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final long t(int i10, int i11, h hVar, int i12) {
        if (l(i10, i11, hVar, i12)) {
            return (f(i10, i11, hVar) + i12) - 1;
        }
        throw new IllegalArgumentException("Invalid date.");
    }

    @Override // kt.k
    /* renamed from: u */
    public final long c(f fVar) {
        return t(fVar.V(), fVar.f0().getNumber(), fVar.b0(), fVar.g());
    }

    @Override // kt.k
    /* renamed from: v */
    public final f b(long j10) {
        boolean z10;
        long w10 = w(j10);
        long w11 = w(370 + w10);
        long p10 = p(w10 + 1);
        long o10 = o(w11 + 1);
        long o11 = o(j10 + 1);
        if (m(p10, o10) == 12) {
            z10 = true;
        } else {
            z10 = false;
        }
        long m10 = m(p10, o11);
        if (z10 && j(p10, o11)) {
            m10--;
        }
        int i10 = 12;
        int d10 = ht.c.d(m10, 12);
        if (d10 != 0) {
            i10 = d10;
        }
        long floor = (long) Math.floor((1.5d - (i10 / 12.0d)) + ((j10 - f40319c) / 365.242189d));
        int i11 = 60;
        int b10 = ((int) ht.c.b(floor - 1, 60)) + 1;
        int d11 = ht.c.d(floor, 60);
        if (d11 != 0) {
            i11 = d11;
        }
        int i12 = (int) ((j10 - o11) + 1);
        h f10 = h.f(i10);
        if (z10 && k(o11) && !j(p10, o(o11))) {
            f10 = f10.g();
        }
        return e(b10, i11, f10, i12, j10);
    }
}
