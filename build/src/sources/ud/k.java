package ud;

import com.google.android.exoplayer2.Format;
import java.math.BigInteger;
import java.math.RoundingMode;
import java.util.List;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class k {

    /* renamed from: a  reason: collision with root package name */
    final i f51339a;

    /* renamed from: b  reason: collision with root package name */
    final long f51340b;

    /* renamed from: c  reason: collision with root package name */
    final long f51341c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class a extends k {

        /* renamed from: d  reason: collision with root package name */
        final long f51342d;

        /* renamed from: e  reason: collision with root package name */
        final long f51343e;

        /* renamed from: f  reason: collision with root package name */
        final List f51344f;

        /* renamed from: g  reason: collision with root package name */
        private final long f51345g;

        /* renamed from: h  reason: collision with root package name */
        private final long f51346h;

        /* renamed from: i  reason: collision with root package name */
        final long f51347i;

        public a(i iVar, long j10, long j11, long j12, long j13, List list, long j14, long j15, long j16) {
            super(iVar, j10, j11);
            this.f51342d = j12;
            this.f51343e = j13;
            this.f51344f = list;
            this.f51347i = j14;
            this.f51345g = j15;
            this.f51346h = j16;
        }

        public long c(long j10, long j11) {
            long g10 = g(j10);
            if (g10 != -1) {
                return g10;
            }
            return (int) (i((j11 - this.f51346h) + this.f51347i, j10) - d(j10, j11));
        }

        public long d(long j10, long j11) {
            if (g(j10) == -1) {
                long j12 = this.f51345g;
                if (j12 != -9223372036854775807L) {
                    return Math.max(e(), i((j11 - this.f51346h) - j12, j10));
                }
            }
            return e();
        }

        public long e() {
            return this.f51342d;
        }

        public long f(long j10, long j11) {
            if (this.f51344f != null) {
                return -9223372036854775807L;
            }
            long d10 = d(j10, j11) + c(j10, j11);
            return (j(d10) + h(d10, j10)) - this.f51347i;
        }

        public abstract long g(long j10);

        public final long h(long j10, long j11) {
            List list = this.f51344f;
            if (list != null) {
                return (((d) list.get((int) (j10 - this.f51342d))).f51353b * 1000000) / this.f51340b;
            }
            long g10 = g(j11);
            if (g10 != -1 && j10 == (e() + g10) - 1) {
                return j11 - j(j10);
            }
            return (this.f51343e * 1000000) / this.f51340b;
        }

        public long i(long j10, long j11) {
            long e10 = e();
            long g10 = g(j11);
            if (g10 != 0) {
                if (this.f51344f == null) {
                    long j12 = this.f51342d + (j10 / ((this.f51343e * 1000000) / this.f51340b));
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
            List list = this.f51344f;
            if (list != null) {
                j11 = ((d) list.get((int) (j10 - this.f51342d))).f51352a - this.f51341c;
            } else {
                j11 = (j10 - this.f51342d) * this.f51343e;
            }
            return w0.X0(j11, 1000000L, this.f51340b);
        }

        public abstract i k(j jVar, long j10);

        public boolean l() {
            if (this.f51344f != null) {
                return true;
            }
            return false;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends a {

        /* renamed from: j  reason: collision with root package name */
        final List f51348j;

        public b(i iVar, long j10, long j11, long j12, long j13, List list, long j14, List list2, long j15, long j16) {
            super(iVar, j10, j11, j12, j13, list, j14, j15, j16);
            this.f51348j = list2;
        }

        @Override // ud.k.a
        public long g(long j10) {
            return this.f51348j.size();
        }

        @Override // ud.k.a
        public i k(j jVar, long j10) {
            return (i) this.f51348j.get((int) (j10 - this.f51342d));
        }

        @Override // ud.k.a
        public boolean l() {
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c extends a {

        /* renamed from: j  reason: collision with root package name */
        final n f51349j;

        /* renamed from: k  reason: collision with root package name */
        final n f51350k;

        /* renamed from: l  reason: collision with root package name */
        final long f51351l;

        public c(i iVar, long j10, long j11, long j12, long j13, long j14, List list, long j15, n nVar, n nVar2, long j16, long j17) {
            super(iVar, j10, j11, j12, j14, list, j15, j16, j17);
            this.f51349j = nVar;
            this.f51350k = nVar2;
            this.f51351l = j13;
        }

        @Override // ud.k
        public i a(j jVar) {
            n nVar = this.f51349j;
            if (nVar != null) {
                Format format = jVar.f51326b;
                return new i(nVar.a(format.f11677d, 0L, format.f11684s, 0L), 0L, -1L);
            }
            return super.a(jVar);
        }

        @Override // ud.k.a
        public long g(long j10) {
            List list = this.f51344f;
            if (list != null) {
                return list.size();
            }
            long j11 = this.f51351l;
            if (j11 != -1) {
                return (j11 - this.f51342d) + 1;
            }
            if (j10 == -9223372036854775807L) {
                return -1L;
            }
            return ni.a.a(BigInteger.valueOf(j10).multiply(BigInteger.valueOf(this.f51340b)), BigInteger.valueOf(this.f51343e).multiply(BigInteger.valueOf(1000000L)), RoundingMode.CEILING).longValue();
        }

        @Override // ud.k.a
        public i k(j jVar, long j10) {
            long j11;
            List list = this.f51344f;
            if (list != null) {
                j11 = ((d) list.get((int) (j10 - this.f51342d))).f51352a;
            } else {
                j11 = (j10 - this.f51342d) * this.f51343e;
            }
            long j12 = j11;
            n nVar = this.f51350k;
            Format format = jVar.f51326b;
            return new i(nVar.a(format.f11677d, j10, format.f11684s, j12), 0L, -1L);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d {

        /* renamed from: a  reason: collision with root package name */
        final long f51352a;

        /* renamed from: b  reason: collision with root package name */
        final long f51353b;

        public d(long j10, long j11) {
            this.f51352a = j10;
            this.f51353b = j11;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && d.class == obj.getClass()) {
                d dVar = (d) obj;
                if (this.f51352a == dVar.f51352a && this.f51353b == dVar.f51353b) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            return (((int) this.f51352a) * 31) + ((int) this.f51353b);
        }
    }

    public k(i iVar, long j10, long j11) {
        this.f51339a = iVar;
        this.f51340b = j10;
        this.f51341c = j11;
    }

    public i a(j jVar) {
        return this.f51339a;
    }

    public long b() {
        return w0.X0(this.f51341c, 1000000L, this.f51340b);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class e extends k {

        /* renamed from: d  reason: collision with root package name */
        final long f51354d;

        /* renamed from: e  reason: collision with root package name */
        final long f51355e;

        public e(i iVar, long j10, long j11, long j12, long j13) {
            super(iVar, j10, j11);
            this.f51354d = j12;
            this.f51355e = j13;
        }

        public i c() {
            long j10 = this.f51355e;
            if (j10 <= 0) {
                return null;
            }
            return new i(null, this.f51354d, j10);
        }

        public e() {
            this(null, 1L, 0L, 0L, 0L);
        }
    }
}
