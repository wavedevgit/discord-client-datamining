package j$.time;

import j$.time.format.DateTimeFormatter;
import j$.time.temporal.TemporalQuery;
import j$.time.temporal.n;
import j$.time.temporal.o;
import java.io.Serializable;
import java.util.concurrent.ConcurrentMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class Instant implements j$.time.temporal.k, j$.time.temporal.l, Comparable<Instant>, Serializable {

    /* renamed from: a  reason: collision with root package name */
    public final long f30481a;

    /* renamed from: b  reason: collision with root package name */
    public final int f30482b;

    /* renamed from: c  reason: collision with root package name */
    public static final Instant f30480c = new Instant(0, 0);
    public static final Instant MIN = ofEpochSecond(-31557014167219200L, 0);
    public static final Instant MAX = ofEpochSecond(31556889864403199L, 999999999);

    public static Instant now() {
        ConcurrentMap concurrentMap = ZoneOffset.f30500c;
        long currentTimeMillis = System.currentTimeMillis();
        return r(Math.floorDiv(currentTimeMillis, 1000L), ((int) Math.floorMod(currentTimeMillis, 1000L)) * 1000000);
    }

    public static Instant ofEpochSecond(long j10, long j11) {
        return r(Math.addExact(j10, Math.floorDiv(j11, 1000000000L)), (int) Math.floorMod(j11, 1000000000L));
    }

    public static Instant r(long j10, int i10) {
        if ((i10 | j10) == 0) {
            return f30480c;
        }
        if (j10 < -31557014167219200L || j10 > 31556889864403199L) {
            throw new DateTimeException("Instant exceeds minimum or maximum instant");
        }
        return new Instant(j10, i10);
    }

    public Instant(long j10, int i10) {
        this.f30481a = j10;
        this.f30482b = i10;
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final boolean j(n nVar) {
        return nVar instanceof j$.time.temporal.a ? nVar == j$.time.temporal.a.INSTANT_SECONDS || nVar == j$.time.temporal.a.NANO_OF_SECOND || nVar == j$.time.temporal.a.MICRO_OF_SECOND || nVar == j$.time.temporal.a.MILLI_OF_SECOND : nVar != null && nVar.r(this);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final int g(n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            int i10 = a.f30506a[((j$.time.temporal.a) nVar).ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        return this.f30482b / 1000000;
                    }
                    if (i10 == 4) {
                        j$.time.temporal.a aVar = j$.time.temporal.a.INSTANT_SECONDS;
                        aVar.f30608b.a(this.f30481a, aVar);
                    }
                    throw new DateTimeException("Unsupported field: " + nVar);
                }
                return this.f30482b / 1000;
            }
            return this.f30482b;
        }
        return super.i(nVar).a(nVar.B(this), nVar);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final long m(n nVar) {
        int i10;
        if (nVar instanceof j$.time.temporal.a) {
            int i11 = a.f30506a[((j$.time.temporal.a) nVar).ordinal()];
            if (i11 == 1) {
                i10 = this.f30482b;
            } else if (i11 == 2) {
                i10 = this.f30482b / 1000;
            } else if (i11 != 3) {
                if (i11 == 4) {
                    return this.f30481a;
                }
                throw new DateTimeException("Unsupported field: " + nVar);
            } else {
                i10 = this.f30482b / 1000000;
            }
            return i10;
        }
        return nVar.B(this);
    }

    public long getEpochSecond() {
        return this.f30481a;
    }

    public int getNano() {
        return this.f30482b;
    }

    @Override // j$.time.temporal.k
    public final j$.time.temporal.k c(LocalDate localDate) {
        return (Instant) localDate.d(this);
    }

    @Override // j$.time.temporal.k
    public final j$.time.temporal.k b(long j10, n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            j$.time.temporal.a aVar = (j$.time.temporal.a) nVar;
            aVar.E(j10);
            int i10 = a.f30506a[aVar.ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    int i11 = ((int) j10) * 1000;
                    if (i11 != this.f30482b) {
                        return r(this.f30481a, i11);
                    }
                } else if (i10 == 3) {
                    int i12 = ((int) j10) * 1000000;
                    if (i12 != this.f30482b) {
                        return r(this.f30481a, i12);
                    }
                } else if (i10 == 4) {
                    if (j10 != this.f30481a) {
                        return r(j10, this.f30482b);
                    }
                } else {
                    throw new DateTimeException("Unsupported field: " + nVar);
                }
            } else if (j10 != this.f30482b) {
                return r(this.f30481a, (int) j10);
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
        switch (a.f30507b[bVar.ordinal()]) {
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
        return ofEpochSecond(Math.addExact(Math.addExact(this.f30481a, j10), j11 / 1000000000), this.f30482b + (j11 % 1000000000));
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final Object a(TemporalQuery temporalQuery) {
        if (temporalQuery == o.f30622c) {
            return j$.time.temporal.b.NANOS;
        }
        if (temporalQuery == o.f30621b || temporalQuery == o.f30620a || temporalQuery == o.f30624e || temporalQuery == o.f30623d || temporalQuery == o.f30625f || temporalQuery == o.f30626g) {
            return null;
        }
        return temporalQuery.queryFrom(this);
    }

    @Override // j$.time.temporal.l
    public final j$.time.temporal.k d(j$.time.temporal.k kVar) {
        return kVar.b(this.f30481a, j$.time.temporal.a.INSTANT_SECONDS).b(this.f30482b, j$.time.temporal.a.NANO_OF_SECOND);
    }

    public OffsetDateTime atOffset(ZoneOffset zoneOffset) {
        return OffsetDateTime.r(this, zoneOffset);
    }

    @Override // java.lang.Comparable
    public int compareTo(Instant instant) {
        int compare = Long.compare(this.f30481a, instant.f30481a);
        return compare != 0 ? compare : this.f30482b - instant.f30482b;
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof Instant) {
            Instant instant = (Instant) obj;
            if (this.f30481a == instant.f30481a && this.f30482b == instant.f30482b) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f30481a;
        return (this.f30482b * 51) + ((int) (j10 ^ (j10 >>> 32)));
    }

    public String toString() {
        return DateTimeFormatter.f30525g.a(this);
    }
}
