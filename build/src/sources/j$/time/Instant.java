package j$.time;

import j$.time.format.DateTimeFormatter;
import j$.time.temporal.TemporalQuery;
import j$.time.temporal.o;
import java.io.Serializable;
import java.util.concurrent.ConcurrentMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class Instant implements j$.time.temporal.k, j$.time.temporal.l, Comparable<Instant>, Serializable {

    /* renamed from: a  reason: collision with root package name */
    public final long f31503a;

    /* renamed from: b  reason: collision with root package name */
    public final int f31504b;

    /* renamed from: c  reason: collision with root package name */
    public static final Instant f31502c = new Instant(0, 0);
    public static final Instant MIN = ofEpochSecond(-31557014167219200L, 0);
    public static final Instant MAX = ofEpochSecond(31556889864403199L, 999999999);

    public static Instant now() {
        ConcurrentMap concurrentMap = ZoneOffset.f31522c;
        long currentTimeMillis = System.currentTimeMillis();
        return r(Math.floorDiv(currentTimeMillis, 1000L), ((int) Math.floorMod(currentTimeMillis, 1000L)) * 1000000);
    }

    public static Instant ofEpochSecond(long j10, long j11) {
        return r(Math.addExact(j10, Math.floorDiv(j11, 1000000000L)), (int) Math.floorMod(j11, 1000000000L));
    }

    public static Instant r(long j10, int i10) {
        if ((i10 | j10) == 0) {
            return f31502c;
        }
        if (j10 < -31557014167219200L || j10 > 31556889864403199L) {
            throw new DateTimeException("Instant exceeds minimum or maximum instant");
        }
        return new Instant(j10, i10);
    }

    public Instant(long j10, int i10) {
        this.f31503a = j10;
        this.f31504b = i10;
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final boolean j(j$.time.temporal.n nVar) {
        return nVar instanceof j$.time.temporal.a ? nVar == j$.time.temporal.a.INSTANT_SECONDS || nVar == j$.time.temporal.a.NANO_OF_SECOND || nVar == j$.time.temporal.a.MICRO_OF_SECOND || nVar == j$.time.temporal.a.MILLI_OF_SECOND : nVar != null && nVar.r(this);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final int g(j$.time.temporal.n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            int i10 = b.f31531a[((j$.time.temporal.a) nVar).ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        return this.f31504b / 1000000;
                    }
                    if (i10 == 4) {
                        j$.time.temporal.a aVar = j$.time.temporal.a.INSTANT_SECONDS;
                        aVar.f31633b.a(this.f31503a, aVar);
                    }
                    throw new DateTimeException("Unsupported field: " + nVar);
                }
                return this.f31504b / 1000;
            }
            return this.f31504b;
        }
        return super.i(nVar).a(nVar.B(this), nVar);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final long m(j$.time.temporal.n nVar) {
        int i10;
        if (nVar instanceof j$.time.temporal.a) {
            int i11 = b.f31531a[((j$.time.temporal.a) nVar).ordinal()];
            if (i11 == 1) {
                i10 = this.f31504b;
            } else if (i11 == 2) {
                i10 = this.f31504b / 1000;
            } else if (i11 != 3) {
                if (i11 == 4) {
                    return this.f31503a;
                }
                throw new DateTimeException("Unsupported field: " + nVar);
            } else {
                i10 = this.f31504b / 1000000;
            }
            return i10;
        }
        return nVar.B(this);
    }

    public long getEpochSecond() {
        return this.f31503a;
    }

    public int getNano() {
        return this.f31504b;
    }

    @Override // j$.time.temporal.k
    public final j$.time.temporal.k c(LocalDate localDate) {
        return (Instant) localDate.d(this);
    }

    @Override // j$.time.temporal.k
    public final j$.time.temporal.k b(long j10, j$.time.temporal.n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            j$.time.temporal.a aVar = (j$.time.temporal.a) nVar;
            aVar.E(j10);
            int i10 = b.f31531a[aVar.ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    int i11 = ((int) j10) * 1000;
                    if (i11 != this.f31504b) {
                        return r(this.f31503a, i11);
                    }
                } else if (i10 == 3) {
                    int i12 = ((int) j10) * 1000000;
                    if (i12 != this.f31504b) {
                        return r(this.f31503a, i12);
                    }
                } else if (i10 == 4) {
                    if (j10 != this.f31503a) {
                        return r(j10, this.f31504b);
                    }
                } else {
                    throw new DateTimeException("Unsupported field: " + nVar);
                }
            } else if (j10 != this.f31504b) {
                return r(this.f31503a, (int) j10);
            }
            return this;
        }
        return (Instant) nVar.C(this, j10);
    }

    @Override // j$.time.temporal.k
    public final j$.time.temporal.k h(long j10, j$.time.temporal.b bVar) {
        if (bVar == null) {
            bVar.getClass();
            return (Instant) h(j10, bVar);
        }
        switch (b.f31532b[bVar.ordinal()]) {
            case 1:
                return t(0L, j10);
            case 2:
                return t(j10 / 1000000, (j10 % 1000000) * 1000);
            case 3:
                return t(j10 / 1000, (j10 % 1000) * 1000000);
            case 4:
                return t(j10, 0L);
            case 5:
                return t(Math.multiplyExact(j10, 60L), 0L);
            case 6:
                return t(Math.multiplyExact(j10, 3600L), 0L);
            case 7:
                return t(Math.multiplyExact(j10, 43200L), 0L);
            case 8:
                return t(Math.multiplyExact(j10, 86400L), 0L);
            default:
                throw new DateTimeException("Unsupported unit: " + bVar);
        }
    }

    public final Instant t(long j10, long j11) {
        if ((j10 | j11) == 0) {
            return this;
        }
        return ofEpochSecond(Math.addExact(Math.addExact(this.f31503a, j10), j11 / 1000000000), this.f31504b + (j11 % 1000000000));
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final Object a(TemporalQuery temporalQuery) {
        if (temporalQuery == o.f31647c) {
            return j$.time.temporal.b.NANOS;
        }
        if (temporalQuery == o.f31646b || temporalQuery == o.f31645a || temporalQuery == o.f31649e || temporalQuery == o.f31648d || temporalQuery == o.f31650f || temporalQuery == o.f31651g) {
            return null;
        }
        return temporalQuery.queryFrom(this);
    }

    @Override // j$.time.temporal.l
    public final j$.time.temporal.k d(j$.time.temporal.k kVar) {
        return kVar.b(this.f31503a, j$.time.temporal.a.INSTANT_SECONDS).b(this.f31504b, j$.time.temporal.a.NANO_OF_SECOND);
    }

    public OffsetDateTime atOffset(ZoneOffset zoneOffset) {
        return OffsetDateTime.r(this, zoneOffset);
    }

    @Override // java.lang.Comparable
    public int compareTo(Instant instant) {
        int compare = Long.compare(this.f31503a, instant.f31503a);
        return compare != 0 ? compare : this.f31504b - instant.f31504b;
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof Instant) {
            Instant instant = (Instant) obj;
            if (this.f31503a == instant.f31503a && this.f31504b == instant.f31504b) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f31503a;
        return (this.f31504b * 51) + ((int) (j10 ^ (j10 >>> 32)));
    }

    public String toString() {
        return DateTimeFormatter.f31549g.a(this);
    }
}
