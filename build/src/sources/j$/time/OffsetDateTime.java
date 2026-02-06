package j$.time;

import j$.time.temporal.TemporalQuery;
import j$.time.temporal.n;
import j$.time.temporal.o;
import j$.time.temporal.r;
import java.io.Serializable;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class OffsetDateTime implements j$.time.temporal.k, j$.time.temporal.l, Comparable<OffsetDateTime>, Serializable {

    /* renamed from: a  reason: collision with root package name */
    public final LocalDateTime f29395a;

    /* renamed from: b  reason: collision with root package name */
    public final ZoneOffset f29396b;

    @Override // java.lang.Comparable
    public final int compareTo(OffsetDateTime offsetDateTime) {
        int compare;
        OffsetDateTime offsetDateTime2 = offsetDateTime;
        if (this.f29396b.equals(offsetDateTime2.f29396b)) {
            compare = toLocalDateTime().compareTo(offsetDateTime2.toLocalDateTime());
        } else {
            compare = Long.compare(this.f29395a.q(this.f29396b), offsetDateTime2.f29395a.q(offsetDateTime2.f29396b));
            if (compare == 0) {
                compare = this.f29395a.f29386b.f29392d - offsetDateTime2.f29395a.f29386b.f29392d;
            }
        }
        return compare == 0 ? toLocalDateTime().compareTo(offsetDateTime2.toLocalDateTime()) : compare;
    }

    static {
        LocalDateTime localDateTime = LocalDateTime.f29383c;
        ZoneOffset zoneOffset = ZoneOffset.f29400f;
        localDateTime.getClass();
        new OffsetDateTime(localDateTime, zoneOffset);
        LocalDateTime localDateTime2 = LocalDateTime.f29384d;
        ZoneOffset zoneOffset2 = ZoneOffset.f29399e;
        localDateTime2.getClass();
        new OffsetDateTime(localDateTime2, zoneOffset2);
    }

    public static OffsetDateTime r(Instant instant, j jVar) {
        Objects.requireNonNull(instant, "instant");
        Objects.requireNonNull(jVar, "zone");
        ZoneOffset d10 = jVar.t().d(instant);
        return new OffsetDateTime(LocalDateTime.B(instant.getEpochSecond(), instant.getNano(), d10), d10);
    }

    public OffsetDateTime(LocalDateTime localDateTime, ZoneOffset zoneOffset) {
        Objects.requireNonNull(localDateTime, "dateTime");
        this.f29395a = localDateTime;
        Objects.requireNonNull(zoneOffset, "offset");
        this.f29396b = zoneOffset;
    }

    public final OffsetDateTime t(LocalDateTime localDateTime, ZoneOffset zoneOffset) {
        return (this.f29395a == localDateTime && this.f29396b.equals(zoneOffset)) ? this : new OffsetDateTime(localDateTime, zoneOffset);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final boolean j(n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            return true;
        }
        return nVar != null && nVar.r(this);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final r i(n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            if (nVar != j$.time.temporal.a.INSTANT_SECONDS && nVar != j$.time.temporal.a.OFFSET_SECONDS) {
                return this.f29395a.i(nVar);
            }
            return ((j$.time.temporal.a) nVar).f29505b;
        }
        return nVar.t(this);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final int g(n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            int i10 = g.f29493a[((j$.time.temporal.a) nVar).ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    return this.f29396b.getTotalSeconds();
                }
                return this.f29395a.g(nVar);
            }
            throw new DateTimeException("Invalid field 'InstantSeconds' for get() method, use getLong() instead");
        }
        return super.g(nVar);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final long m(n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            int i10 = g.f29493a[((j$.time.temporal.a) nVar).ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    return this.f29396b.getTotalSeconds();
                }
                return this.f29395a.m(nVar);
            }
            return this.f29395a.q(this.f29396b);
        }
        return nVar.B(this);
    }

    public LocalDateTime toLocalDateTime() {
        return this.f29395a;
    }

    @Override // j$.time.temporal.k
    public final j$.time.temporal.k c(LocalDate localDate) {
        if (localDate != null) {
            return t(this.f29395a.c(localDate), this.f29396b);
        }
        return (OffsetDateTime) localDate.d(this);
    }

    @Override // j$.time.temporal.k
    public final j$.time.temporal.k b(long j10, n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            j$.time.temporal.a aVar = (j$.time.temporal.a) nVar;
            int i10 = g.f29493a[aVar.ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    return t(this.f29395a, ZoneOffset.ofTotalSeconds(aVar.f29505b.a(j10, aVar)));
                }
                return t(this.f29395a.b(j10, nVar), this.f29396b);
            }
            return r(Instant.ofEpochSecond(j10, this.f29395a.f29386b.f29392d), this.f29396b);
        }
        return (OffsetDateTime) nVar.C(this, j10);
    }

    @Override // j$.time.temporal.k
    public final j$.time.temporal.k h(long j10, j$.time.temporal.b bVar) {
        if (bVar != null) {
            return t(this.f29395a.h(j10, bVar), this.f29396b);
        }
        bVar.getClass();
        return (OffsetDateTime) h(j10, bVar);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final Object a(TemporalQuery temporalQuery) {
        if (temporalQuery == o.f29520d || temporalQuery == o.f29521e) {
            return this.f29396b;
        }
        if (temporalQuery == o.f29517a) {
            return null;
        }
        if (temporalQuery == o.f29522f) {
            return this.f29395a.f29385a;
        }
        if (temporalQuery == o.f29523g) {
            return this.f29395a.f29386b;
        }
        if (temporalQuery == o.f29518b) {
            return j$.time.chrono.k.f29416a;
        }
        if (temporalQuery == o.f29519c) {
            return j$.time.temporal.b.NANOS;
        }
        return temporalQuery.queryFrom(this);
    }

    @Override // j$.time.temporal.l
    public final j$.time.temporal.k d(j$.time.temporal.k kVar) {
        return kVar.b(this.f29395a.f29385a.toEpochDay(), j$.time.temporal.a.EPOCH_DAY).b(this.f29395a.f29386b.G(), j$.time.temporal.a.NANO_OF_DAY).b(this.f29396b.getTotalSeconds(), j$.time.temporal.a.OFFSET_SECONDS);
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof OffsetDateTime) {
            OffsetDateTime offsetDateTime = (OffsetDateTime) obj;
            if (this.f29395a.equals(offsetDateTime.f29395a) && this.f29396b.equals(offsetDateTime.f29396b)) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        return this.f29395a.hashCode() ^ this.f29396b.hashCode();
    }

    public final String toString() {
        return this.f29395a.toString() + this.f29396b.toString();
    }
}
