package ud;

import com.google.android.exoplayer2.Format;
import java.math.BigInteger;
import java.math.RoundingMode;
import java.util.List;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class k {

    /* renamed from: a  reason: collision with root package name */
    final i f50211a;

    /* renamed from: b  reason: collision with root package name */
    final long f50212b;

    /* renamed from: c  reason: collision with root package name */
    final long f50213c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class a extends k {

        /* renamed from: d  reason: collision with root package name */
        final long f50214d;

        /* renamed from: e  reason: collision with root package name */
        final long f50215e;

        /* renamed from: f  reason: collision with root package name */
        final List f50216f;

        /* renamed from: g  reason: collision with root package name */
        private final long f50217g;

        /* renamed from: h  reason: collision with root package name */
        private final long f50218h;

        /* renamed from: i  reason: collision with root package name */
        final long f50219i;

        public a(i iVar, long j10, long j11, long j12, long j13, List list, long j14, long j15, long j16) {
            super(iVar, j10, j11);
            this.f50214d = j12;
            this.f50215e = j13;
            this.f50216f = list;
            this.f50219i = j14;
            this.f50217g = j15;
            this.f50218h = j16;
        }

        public long c(long j10, long j11) {
            long g10 = g(j10);
            if (g10 != -1) {
                return g10;
            }
            return (int) (i((j11 - this.f50218h) + this.f50219i, j10) - d(j10, j11));
        }

        public long d(long j10, long j11) {
            if (g(j10) == -1) {
                long j12 = this.f50217g;
                if (j12 != -9223372036854775807L) {
                    return Math.max(e(), i((j11 - this.f50218h) - j12, j10));
                }
            }
            return e();
        }

        public long e() {
            return this.f50214d;
        }

        public long f(long j10, long j11) {
            if (this.f50216f != null) {
                return -9223372036854775807L;
            }
            long d10 = d(j10, j11) + c(j10, j11);
            return (j(d10) + h(d10, j10)) - this.f50219i;
        }

        public abstract long g(long j10);

        public final long h(long j10, long j11) {
            List list = this.f50216f;
            if (list != null) {
                return (((d) list.get((int) (j10 - this.f50214d))).f50225b * 1000000) / this.f50212b;
            }
            long g10 = g(j11);
            if (g10 != -1 && j10 == (e() + g10) - 1) {
                return j11 - j(j10);
            }
            return (this.f50215e * 1000000) / this.f50212b;
        }

        public long i(long j10, long j11) {
            long e10 = e();
            long g10 = g(j11);
            if (g10 != 0) {
                if (this.f50216f == null) {
                    long j12 = this.f50214d + (j10 / ((this.f50215e * 1000000) / this.f50212b));
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
            List list = this.f50216f;
            if (list != null) {
                j11 = ((d) list.get((int) (j10 - this.f50214d))).f50224a - this.f50213c;
            } else {
                j11 = (j10 - this.f50214d) * this.f50215e;
            }
            return w0.X0(j11, 1000000L, this.f50212b);
        }

        public abstract i k(j jVar, long j10);

        public boolean l() {
            if (this.f50216f != null) {
                return true;
            }
            return false;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends a {

        /* renamed from: j  reason: collision with root package name */
        final List f50220j;

        public b(i iVar, long j10, long j11, long j12, long j13, List list, long j14, List list2, long j15, long j16) {
            super(iVar, j10, j11, j12, j13, list, j14, j15, j16);
            this.f50220j = list2;
        }

        @Override // ud.k.a
        public long g(long j10) {
            return this.f50220j.size();
        }

        @Override // ud.k.a
        public i k(j jVar, long j10) {
            return (i) this.f50220j.get((int) (j10 - this.f50214d));
        }

        @Override // ud.k.a
        public boolean l() {
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c extends a {

        /* renamed from: j  reason: collision with root package name */
        final n f50221j;

        /* renamed from: k  reason: collision with root package name */
        final n f50222k;

        /* renamed from: l  reason: collision with root package name */
        final long f50223l;

        public c(i iVar, long j10, long j11, long j12, long j13, long j14, List list, long j15, n nVar, n nVar2, long j16, long j17) {
            super(iVar, j10, j11, j12, j14, list, j15, j16, j17);
            this.f50221j = nVar;
            this.f50222k = nVar2;
            this.f50223l = j13;
        }

        @Override // ud.k
        public i a(j jVar) {
            n nVar = this.f50221j;
            if (nVar != null) {
                Format format = jVar.f50198b;
                return new i(nVar.a(format.f12695d, 0L, format.f12702s, 0L), 0L, -1L);
            }
            return super.a(jVar);
        }

        @Override // ud.k.a
        public long g(long j10) {
            List list = this.f50216f;
            if (list != null) {
                return list.size();
            }
            long j11 = this.f50223l;
            if (j11 != -1) {
                return (j11 - this.f50214d) + 1;
            }
            if (j10 == -9223372036854775807L) {
                return -1L;
            }
            return ki.a.a(BigInteger.valueOf(j10).multiply(BigInteger.valueOf(this.f50212b)), BigInteger.valueOf(this.f50215e).multiply(BigInteger.valueOf(1000000L)), RoundingMode.CEILING).longValue();
        }

        @Override // ud.k.a
        public i k(j jVar, long j10) {
            long j11;
            List list = this.f50216f;
            if (list != null) {
                j11 = ((d) list.get((int) (j10 - this.f50214d))).f50224a;
            } else {
                j11 = (j10 - this.f50214d) * this.f50215e;
            }
            long j12 = j11;
            n nVar = this.f50222k;
            Format format = jVar.f50198b;
            return new i(nVar.a(format.f12695d, j10, format.f12702s, j12), 0L, -1L);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d {

        /* renamed from: a  reason: collision with root package name */
        final long f50224a;

        /* renamed from: b  reason: collision with root package name */
        final long f50225b;

        public d(long j10, long j11) {
            this.f50224a = j10;
            this.f50225b = j11;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && d.class == obj.getClass()) {
                d dVar = (d) obj;
                if (this.f50224a == dVar.f50224a && this.f50225b == dVar.f50225b) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            return (((int) this.f50224a) * 31) + ((int) this.f50225b);
        }
    }

    public k(i iVar, long j10, long j11) {
        this.f50211a = iVar;
        this.f50212b = j10;
        this.f50213c = j11;
    }

    public i a(j jVar) {
        return this.f50211a;
    }

    public long b() {
        return w0.X0(this.f50213c, 1000000L, this.f50212b);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class e extends k {

        /* renamed from: d  reason: collision with root package name */
        final long f50226d;

        /* renamed from: e  reason: collision with root package name */
        final long f50227e;

        public e(i iVar, long j10, long j11, long j12, long j13) {
            super(iVar, j10, j11);
            this.f50226d = j12;
            this.f50227e = j13;
        }

        public i c() {
            long j10 = this.f50227e;
            if (j10 <= 0) {
                return null;
            }
            return new i(null, this.f50226d, j10);
        }

        public e() {
            this(null, 1L, 0L, 0L, 0L);
        }
    }
}
