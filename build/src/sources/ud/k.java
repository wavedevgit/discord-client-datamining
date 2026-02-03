package ud;

import com.google.android.exoplayer2.Format;
import java.math.BigInteger;
import java.math.RoundingMode;
import java.util.List;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class k {

    /* renamed from: a  reason: collision with root package name */
    final i f50283a;

    /* renamed from: b  reason: collision with root package name */
    final long f50284b;

    /* renamed from: c  reason: collision with root package name */
    final long f50285c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class a extends k {

        /* renamed from: d  reason: collision with root package name */
        final long f50286d;

        /* renamed from: e  reason: collision with root package name */
        final long f50287e;

        /* renamed from: f  reason: collision with root package name */
        final List f50288f;

        /* renamed from: g  reason: collision with root package name */
        private final long f50289g;

        /* renamed from: h  reason: collision with root package name */
        private final long f50290h;

        /* renamed from: i  reason: collision with root package name */
        final long f50291i;

        public a(i iVar, long j10, long j11, long j12, long j13, List list, long j14, long j15, long j16) {
            super(iVar, j10, j11);
            this.f50286d = j12;
            this.f50287e = j13;
            this.f50288f = list;
            this.f50291i = j14;
            this.f50289g = j15;
            this.f50290h = j16;
        }

        public long c(long j10, long j11) {
            long g10 = g(j10);
            if (g10 != -1) {
                return g10;
            }
            return (int) (i((j11 - this.f50290h) + this.f50291i, j10) - d(j10, j11));
        }

        public long d(long j10, long j11) {
            if (g(j10) == -1) {
                long j12 = this.f50289g;
                if (j12 != -9223372036854775807L) {
                    return Math.max(e(), i((j11 - this.f50290h) - j12, j10));
                }
            }
            return e();
        }

        public long e() {
            return this.f50286d;
        }

        public long f(long j10, long j11) {
            if (this.f50288f != null) {
                return -9223372036854775807L;
            }
            long d10 = d(j10, j11) + c(j10, j11);
            return (j(d10) + h(d10, j10)) - this.f50291i;
        }

        public abstract long g(long j10);

        public final long h(long j10, long j11) {
            List list = this.f50288f;
            if (list != null) {
                return (((d) list.get((int) (j10 - this.f50286d))).f50297b * 1000000) / this.f50284b;
            }
            long g10 = g(j11);
            if (g10 != -1 && j10 == (e() + g10) - 1) {
                return j11 - j(j10);
            }
            return (this.f50287e * 1000000) / this.f50284b;
        }

        public long i(long j10, long j11) {
            long e10 = e();
            long g10 = g(j11);
            if (g10 != 0) {
                if (this.f50288f == null) {
                    long j12 = this.f50286d + (j10 / ((this.f50287e * 1000000) / this.f50284b));
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
            List list = this.f50288f;
            if (list != null) {
                j11 = ((d) list.get((int) (j10 - this.f50286d))).f50296a - this.f50285c;
            } else {
                j11 = (j10 - this.f50286d) * this.f50287e;
            }
            return w0.X0(j11, 1000000L, this.f50284b);
        }

        public abstract i k(j jVar, long j10);

        public boolean l() {
            if (this.f50288f != null) {
                return true;
            }
            return false;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends a {

        /* renamed from: j  reason: collision with root package name */
        final List f50292j;

        public b(i iVar, long j10, long j11, long j12, long j13, List list, long j14, List list2, long j15, long j16) {
            super(iVar, j10, j11, j12, j13, list, j14, j15, j16);
            this.f50292j = list2;
        }

        @Override // ud.k.a
        public long g(long j10) {
            return this.f50292j.size();
        }

        @Override // ud.k.a
        public i k(j jVar, long j10) {
            return (i) this.f50292j.get((int) (j10 - this.f50286d));
        }

        @Override // ud.k.a
        public boolean l() {
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c extends a {

        /* renamed from: j  reason: collision with root package name */
        final n f50293j;

        /* renamed from: k  reason: collision with root package name */
        final n f50294k;

        /* renamed from: l  reason: collision with root package name */
        final long f50295l;

        public c(i iVar, long j10, long j11, long j12, long j13, long j14, List list, long j15, n nVar, n nVar2, long j16, long j17) {
            super(iVar, j10, j11, j12, j14, list, j15, j16, j17);
            this.f50293j = nVar;
            this.f50294k = nVar2;
            this.f50295l = j13;
        }

        @Override // ud.k
        public i a(j jVar) {
            n nVar = this.f50293j;
            if (nVar != null) {
                Format format = jVar.f50270b;
                return new i(nVar.a(format.f12324d, 0L, format.f12331s, 0L), 0L, -1L);
            }
            return super.a(jVar);
        }

        @Override // ud.k.a
        public long g(long j10) {
            List list = this.f50288f;
            if (list != null) {
                return list.size();
            }
            long j11 = this.f50295l;
            if (j11 != -1) {
                return (j11 - this.f50286d) + 1;
            }
            if (j10 == -9223372036854775807L) {
                return -1L;
            }
            return ki.a.a(BigInteger.valueOf(j10).multiply(BigInteger.valueOf(this.f50284b)), BigInteger.valueOf(this.f50287e).multiply(BigInteger.valueOf(1000000L)), RoundingMode.CEILING).longValue();
        }

        @Override // ud.k.a
        public i k(j jVar, long j10) {
            long j11;
            List list = this.f50288f;
            if (list != null) {
                j11 = ((d) list.get((int) (j10 - this.f50286d))).f50296a;
            } else {
                j11 = (j10 - this.f50286d) * this.f50287e;
            }
            long j12 = j11;
            n nVar = this.f50294k;
            Format format = jVar.f50270b;
            return new i(nVar.a(format.f12324d, j10, format.f12331s, j12), 0L, -1L);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d {

        /* renamed from: a  reason: collision with root package name */
        final long f50296a;

        /* renamed from: b  reason: collision with root package name */
        final long f50297b;

        public d(long j10, long j11) {
            this.f50296a = j10;
            this.f50297b = j11;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && d.class == obj.getClass()) {
                d dVar = (d) obj;
                if (this.f50296a == dVar.f50296a && this.f50297b == dVar.f50297b) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            return (((int) this.f50296a) * 31) + ((int) this.f50297b);
        }
    }

    public k(i iVar, long j10, long j11) {
        this.f50283a = iVar;
        this.f50284b = j10;
        this.f50285c = j11;
    }

    public i a(j jVar) {
        return this.f50283a;
    }

    public long b() {
        return w0.X0(this.f50285c, 1000000L, this.f50284b);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class e extends k {

        /* renamed from: d  reason: collision with root package name */
        final long f50298d;

        /* renamed from: e  reason: collision with root package name */
        final long f50299e;

        public e(i iVar, long j10, long j11, long j12, long j13) {
            super(iVar, j10, j11);
            this.f50298d = j12;
            this.f50299e = j13;
        }

        public i c() {
            long j10 = this.f50299e;
            if (j10 <= 0) {
                return null;
            }
            return new i(null, this.f50298d, j10);
        }

        public e() {
            this(null, 1L, 0L, 0L, 0L);
        }
    }
}
