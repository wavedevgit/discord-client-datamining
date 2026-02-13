package vd;

import com.google.android.exoplayer2.Format;
import java.math.BigInteger;
import java.math.RoundingMode;
import java.util.List;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class k {

    /* renamed from: a  reason: collision with root package name */
    final i f52099a;

    /* renamed from: b  reason: collision with root package name */
    final long f52100b;

    /* renamed from: c  reason: collision with root package name */
    final long f52101c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class a extends k {

        /* renamed from: d  reason: collision with root package name */
        final long f52102d;

        /* renamed from: e  reason: collision with root package name */
        final long f52103e;

        /* renamed from: f  reason: collision with root package name */
        final List f52104f;

        /* renamed from: g  reason: collision with root package name */
        private final long f52105g;

        /* renamed from: h  reason: collision with root package name */
        private final long f52106h;

        /* renamed from: i  reason: collision with root package name */
        final long f52107i;

        public a(i iVar, long j10, long j11, long j12, long j13, List list, long j14, long j15, long j16) {
            super(iVar, j10, j11);
            this.f52102d = j12;
            this.f52103e = j13;
            this.f52104f = list;
            this.f52107i = j14;
            this.f52105g = j15;
            this.f52106h = j16;
        }

        public long c(long j10, long j11) {
            long g10 = g(j10);
            if (g10 != -1) {
                return g10;
            }
            return (int) (i((j11 - this.f52106h) + this.f52107i, j10) - d(j10, j11));
        }

        public long d(long j10, long j11) {
            if (g(j10) == -1) {
                long j12 = this.f52105g;
                if (j12 != -9223372036854775807L) {
                    return Math.max(e(), i((j11 - this.f52106h) - j12, j10));
                }
            }
            return e();
        }

        public long e() {
            return this.f52102d;
        }

        public long f(long j10, long j11) {
            if (this.f52104f != null) {
                return -9223372036854775807L;
            }
            long d10 = d(j10, j11) + c(j10, j11);
            return (j(d10) + h(d10, j10)) - this.f52107i;
        }

        public abstract long g(long j10);

        public final long h(long j10, long j11) {
            List list = this.f52104f;
            if (list != null) {
                return (((d) list.get((int) (j10 - this.f52102d))).f52113b * 1000000) / this.f52100b;
            }
            long g10 = g(j11);
            if (g10 != -1 && j10 == (e() + g10) - 1) {
                return j11 - j(j10);
            }
            return (this.f52103e * 1000000) / this.f52100b;
        }

        public long i(long j10, long j11) {
            long e10 = e();
            long g10 = g(j11);
            if (g10 != 0) {
                if (this.f52104f == null) {
                    long j12 = this.f52102d + (j10 / ((this.f52103e * 1000000) / this.f52100b));
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
            List list = this.f52104f;
            if (list != null) {
                j11 = ((d) list.get((int) (j10 - this.f52102d))).f52112a - this.f52101c;
            } else {
                j11 = (j10 - this.f52102d) * this.f52103e;
            }
            return w0.X0(j11, 1000000L, this.f52100b);
        }

        public abstract i k(j jVar, long j10);

        public boolean l() {
            if (this.f52104f != null) {
                return true;
            }
            return false;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends a {

        /* renamed from: j  reason: collision with root package name */
        final List f52108j;

        public b(i iVar, long j10, long j11, long j12, long j13, List list, long j14, List list2, long j15, long j16) {
            super(iVar, j10, j11, j12, j13, list, j14, j15, j16);
            this.f52108j = list2;
        }

        @Override // vd.k.a
        public long g(long j10) {
            return this.f52108j.size();
        }

        @Override // vd.k.a
        public i k(j jVar, long j10) {
            return (i) this.f52108j.get((int) (j10 - this.f52102d));
        }

        @Override // vd.k.a
        public boolean l() {
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c extends a {

        /* renamed from: j  reason: collision with root package name */
        final n f52109j;

        /* renamed from: k  reason: collision with root package name */
        final n f52110k;

        /* renamed from: l  reason: collision with root package name */
        final long f52111l;

        public c(i iVar, long j10, long j11, long j12, long j13, long j14, List list, long j15, n nVar, n nVar2, long j16, long j17) {
            super(iVar, j10, j11, j12, j14, list, j15, j16, j17);
            this.f52109j = nVar;
            this.f52110k = nVar2;
            this.f52111l = j13;
        }

        @Override // vd.k
        public i a(j jVar) {
            n nVar = this.f52109j;
            if (nVar != null) {
                Format format = jVar.f52086b;
                return new i(nVar.a(format.f12294d, 0L, format.f12301s, 0L), 0L, -1L);
            }
            return super.a(jVar);
        }

        @Override // vd.k.a
        public long g(long j10) {
            List list = this.f52104f;
            if (list != null) {
                return list.size();
            }
            long j11 = this.f52111l;
            if (j11 != -1) {
                return (j11 - this.f52102d) + 1;
            }
            if (j10 == -9223372036854775807L) {
                return -1L;
            }
            return ri.a.a(BigInteger.valueOf(j10).multiply(BigInteger.valueOf(this.f52100b)), BigInteger.valueOf(this.f52103e).multiply(BigInteger.valueOf(1000000L)), RoundingMode.CEILING).longValue();
        }

        @Override // vd.k.a
        public i k(j jVar, long j10) {
            long j11;
            List list = this.f52104f;
            if (list != null) {
                j11 = ((d) list.get((int) (j10 - this.f52102d))).f52112a;
            } else {
                j11 = (j10 - this.f52102d) * this.f52103e;
            }
            long j12 = j11;
            n nVar = this.f52110k;
            Format format = jVar.f52086b;
            return new i(nVar.a(format.f12294d, j10, format.f12301s, j12), 0L, -1L);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d {

        /* renamed from: a  reason: collision with root package name */
        final long f52112a;

        /* renamed from: b  reason: collision with root package name */
        final long f52113b;

        public d(long j10, long j11) {
            this.f52112a = j10;
            this.f52113b = j11;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && d.class == obj.getClass()) {
                d dVar = (d) obj;
                if (this.f52112a == dVar.f52112a && this.f52113b == dVar.f52113b) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            return (((int) this.f52112a) * 31) + ((int) this.f52113b);
        }
    }

    public k(i iVar, long j10, long j11) {
        this.f52099a = iVar;
        this.f52100b = j10;
        this.f52101c = j11;
    }

    public i a(j jVar) {
        return this.f52099a;
    }

    public long b() {
        return w0.X0(this.f52101c, 1000000L, this.f52100b);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class e extends k {

        /* renamed from: d  reason: collision with root package name */
        final long f52114d;

        /* renamed from: e  reason: collision with root package name */
        final long f52115e;

        public e(i iVar, long j10, long j11, long j12, long j13) {
            super(iVar, j10, j11);
            this.f52114d = j12;
            this.f52115e = j13;
        }

        public i c() {
            long j10 = this.f52115e;
            if (j10 <= 0) {
                return null;
            }
            return new i(null, this.f52114d, j10);
        }

        public e() {
            this(null, 1L, 0L, 0L, 0L);
        }
    }
}
