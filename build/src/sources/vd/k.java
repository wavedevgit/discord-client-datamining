package vd;

import com.google.android.exoplayer2.Format;
import java.math.BigInteger;
import java.math.RoundingMode;
import java.util.List;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class k {

    /* renamed from: a  reason: collision with root package name */
    final i f52288a;

    /* renamed from: b  reason: collision with root package name */
    final long f52289b;

    /* renamed from: c  reason: collision with root package name */
    final long f52290c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class a extends k {

        /* renamed from: d  reason: collision with root package name */
        final long f52291d;

        /* renamed from: e  reason: collision with root package name */
        final long f52292e;

        /* renamed from: f  reason: collision with root package name */
        final List f52293f;

        /* renamed from: g  reason: collision with root package name */
        private final long f52294g;

        /* renamed from: h  reason: collision with root package name */
        private final long f52295h;

        /* renamed from: i  reason: collision with root package name */
        final long f52296i;

        public a(i iVar, long j10, long j11, long j12, long j13, List list, long j14, long j15, long j16) {
            super(iVar, j10, j11);
            this.f52291d = j12;
            this.f52292e = j13;
            this.f52293f = list;
            this.f52296i = j14;
            this.f52294g = j15;
            this.f52295h = j16;
        }

        public long c(long j10, long j11) {
            long g10 = g(j10);
            if (g10 != -1) {
                return g10;
            }
            return (int) (i((j11 - this.f52295h) + this.f52296i, j10) - d(j10, j11));
        }

        public long d(long j10, long j11) {
            if (g(j10) == -1) {
                long j12 = this.f52294g;
                if (j12 != -9223372036854775807L) {
                    return Math.max(e(), i((j11 - this.f52295h) - j12, j10));
                }
            }
            return e();
        }

        public long e() {
            return this.f52291d;
        }

        public long f(long j10, long j11) {
            if (this.f52293f != null) {
                return -9223372036854775807L;
            }
            long d10 = d(j10, j11) + c(j10, j11);
            return (j(d10) + h(d10, j10)) - this.f52296i;
        }

        public abstract long g(long j10);

        public final long h(long j10, long j11) {
            List list = this.f52293f;
            if (list != null) {
                return (((d) list.get((int) (j10 - this.f52291d))).f52302b * 1000000) / this.f52289b;
            }
            long g10 = g(j11);
            if (g10 != -1 && j10 == (e() + g10) - 1) {
                return j11 - j(j10);
            }
            return (this.f52292e * 1000000) / this.f52289b;
        }

        public long i(long j10, long j11) {
            long e10 = e();
            long g10 = g(j11);
            if (g10 != 0) {
                if (this.f52293f == null) {
                    long j12 = this.f52291d + (j10 / ((this.f52292e * 1000000) / this.f52289b));
                    if (j12 >= e10) {
                        if (g10 == -1) {
                            return j12;
                        }
                        return Math.min(j12, (e10 + g10) - 1);
                    }
                } else {
                    long j13 = (g10 + e10) - 1;
                    long j14 = e10;
                    while (j14 <= j13) {
                        long j15 = ((j13 - j14) / 2) + j14;
                        int i10 = (j(j15) > j10 ? 1 : (j(j15) == j10 ? 0 : -1));
                        if (i10 < 0) {
                            j14 = j15 + 1;
                        } else if (i10 > 0) {
                            j13 = j15 - 1;
                        } else {
                            return j15;
                        }
                    }
                    if (j14 == e10) {
                        return j14;
                    }
                    return j13;
                }
            }
            return e10;
        }

        public final long j(long j10) {
            long j11;
            List list = this.f52293f;
            if (list != null) {
                j11 = ((d) list.get((int) (j10 - this.f52291d))).f52301a - this.f52290c;
            } else {
                j11 = (j10 - this.f52291d) * this.f52292e;
            }
            return w0.X0(j11, 1000000L, this.f52289b);
        }

        public abstract i k(j jVar, long j10);

        public boolean l() {
            if (this.f52293f != null) {
                return true;
            }
            return false;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends a {

        /* renamed from: j  reason: collision with root package name */
        final List f52297j;

        public b(i iVar, long j10, long j11, long j12, long j13, List list, long j14, List list2, long j15, long j16) {
            super(iVar, j10, j11, j12, j13, list, j14, j15, j16);
            this.f52297j = list2;
        }

        @Override // vd.k.a
        public long g(long j10) {
            return this.f52297j.size();
        }

        @Override // vd.k.a
        public i k(j jVar, long j10) {
            return (i) this.f52297j.get((int) (j10 - this.f52291d));
        }

        @Override // vd.k.a
        public boolean l() {
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c extends a {

        /* renamed from: j  reason: collision with root package name */
        final n f52298j;

        /* renamed from: k  reason: collision with root package name */
        final n f52299k;

        /* renamed from: l  reason: collision with root package name */
        final long f52300l;

        public c(i iVar, long j10, long j11, long j12, long j13, long j14, List list, long j15, n nVar, n nVar2, long j16, long j17) {
            super(iVar, j10, j11, j12, j14, list, j15, j16, j17);
            this.f52298j = nVar;
            this.f52299k = nVar2;
            this.f52300l = j13;
        }

        @Override // vd.k
        public i a(j jVar) {
            n nVar = this.f52298j;
            if (nVar != null) {
                Format format = jVar.f52275b;
                return new i(nVar.a(format.f11716d, 0L, format.f11723s, 0L), 0L, -1L);
            }
            return super.a(jVar);
        }

        @Override // vd.k.a
        public long g(long j10) {
            List list = this.f52293f;
            if (list != null) {
                return list.size();
            }
            long j11 = this.f52300l;
            if (j11 != -1) {
                return (j11 - this.f52291d) + 1;
            }
            if (j10 == -9223372036854775807L) {
                return -1L;
            }
            return pi.a.a(BigInteger.valueOf(j10).multiply(BigInteger.valueOf(this.f52289b)), BigInteger.valueOf(this.f52292e).multiply(BigInteger.valueOf(1000000L)), RoundingMode.CEILING).longValue();
        }

        @Override // vd.k.a
        public i k(j jVar, long j10) {
            long j11;
            List list = this.f52293f;
            if (list != null) {
                j11 = ((d) list.get((int) (j10 - this.f52291d))).f52301a;
            } else {
                j11 = (j10 - this.f52291d) * this.f52292e;
            }
            long j12 = j11;
            n nVar = this.f52299k;
            Format format = jVar.f52275b;
            return new i(nVar.a(format.f11716d, j10, format.f11723s, j12), 0L, -1L);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d {

        /* renamed from: a  reason: collision with root package name */
        final long f52301a;

        /* renamed from: b  reason: collision with root package name */
        final long f52302b;

        public d(long j10, long j11) {
            this.f52301a = j10;
            this.f52302b = j11;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && d.class == obj.getClass()) {
                d dVar = (d) obj;
                if (this.f52301a == dVar.f52301a && this.f52302b == dVar.f52302b) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            return (((int) this.f52301a) * 31) + ((int) this.f52302b);
        }
    }

    public k(i iVar, long j10, long j11) {
        this.f52288a = iVar;
        this.f52289b = j10;
        this.f52290c = j11;
    }

    public i a(j jVar) {
        return this.f52288a;
    }

    public long b() {
        return w0.X0(this.f52290c, 1000000L, this.f52289b);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class e extends k {

        /* renamed from: d  reason: collision with root package name */
        final long f52303d;

        /* renamed from: e  reason: collision with root package name */
        final long f52304e;

        public e(i iVar, long j10, long j11, long j12, long j13) {
            super(iVar, j10, j11);
            this.f52303d = j12;
            this.f52304e = j13;
        }

        public i c() {
            long j10 = this.f52304e;
            if (j10 <= 0) {
                return null;
            }
            return new i(null, this.f52303d, j10);
        }

        public e() {
            this(null, 1L, 0L, 0L, 0L);
        }
    }
}
