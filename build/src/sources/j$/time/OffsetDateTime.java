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
    public final LocalDateTime f31066a;

    /* renamed from: b  reason: collision with root package name */
    public final ZoneOffset f31067b;

    @Override // java.lang.Comparable
    public final int compareTo(OffsetDateTime offsetDateTime) {
        int compare;
        OffsetDateTime offsetDateTime2 = offsetDateTime;
        if (this.f31067b.equals(offsetDateTime2.f31067b)) {
            compare = toLocalDateTime().compareTo(offsetDateTime2.toLocalDateTime());
        } else {
            compare = Long.compare(this.f31066a.q(this.f31067b), offsetDateTime2.f31066a.q(offsetDateTime2.f31067b));
            if (compare == 0) {
                compare = this.f31066a.f31057b.f31063d - offsetDateTime2.f31066a.f31057b.f31063d;
            }
        }
        return compare == 0 ? toLocalDateTime().compareTo(offsetDateTime2.toLocalDateTime()) : compare;
    }

    static {
        LocalDateTime localDateTime = LocalDateTime.f31054c;
        ZoneOffset zoneOffset = ZoneOffset.f31071f;
        localDateTime.getClass();
        new OffsetDateTime(localDateTime, zoneOffset);
        LocalDateTime localDateTime2 = LocalDateTime.f31055d;
        ZoneOffset zoneOffset2 = ZoneOffset.f31070e;
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
        this.f31066a = localDateTime;
        Objects.requireNonNull(zoneOffset, "offset");
        this.f31067b = zoneOffset;
    }

    public final OffsetDateTime t(LocalDateTime localDateTime, ZoneOffset zoneOffset) {
        return (this.f31066a == localDateTime && this.f31067b.equals(zoneOffset)) ? this : new OffsetDateTime(localDateTime, zoneOffset);
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
                return this.f31066a.i(nVar);
            }
            return ((j$.time.temporal.a) nVar).f31176b;
        }
        return nVar.t(this);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final int g(n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            int i10 = g.f31164a[((j$.time.temporal.a) nVar).ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    return this.f31067b.getTotalSeconds();
                }
                return this.f31066a.g(nVar);
            }
            throw new DateTimeException("Invalid field 'InstantSeconds' for get() method, use getLong() instead");
        }
        return super.g(nVar);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final long m(n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            int i10 = g.f31164a[((j$.time.temporal.a) nVar).ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    return this.f31067b.getTotalSeconds();
                }
                return this.f31066a.m(nVar);
            }
            return this.f31066a.q(this.f31067b);
        }
        return nVar.B(this);
    }

    public LocalDateTime toLocalDateTime() {
        return this.f31066a;
    }

    @Override // j$.time.temporal.k
    public final j$.time.temporal.k c(LocalDate localDate) {
        if (localDate != null) {
            return t(this.f31066a.c(localDate), this.f31067b);
        }
        return (OffsetDateTime) localDate.d(this);
    }

    @Override // j$.time.temporal.k
    public final j$.time.temporal.k b(long j10, n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            j$.time.temporal.a aVar = (j$.time.temporal.a) nVar;
            int i10 = g.f31164a[aVar.ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    return t(this.f31066a, ZoneOffset.ofTotalSeconds(aVar.f31176b.a(j10, aVar)));
                }
                return t(this.f31066a.b(j10, nVar), this.f31067b);
            }
            return r(Instant.ofEpochSecond(j10, this.f31066a.f31057b.f31063d), this.f31067b);
        }
        return (OffsetDateTime) nVar.C(this, j10);
    }

    @Override // j$.time.temporal.k
    public final j$.time.temporal.k h(long j10, j$.time.temporal.b bVar) {
        if (bVar != null) {
            return t(this.f31066a.h(j10, bVar), this.f31067b);
        }
        bVar.getClass();
        return (OffsetDateTime) h(j10, bVar);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final Object a(TemporalQuery temporalQuery) {
        if (temporalQuery == o.f31191d || temporalQuery == o.f31192e) {
            return this.f31067b;
        }
        if (temporalQuery == o.f31188a) {
            return null;
        }
        if (temporalQuery == o.f31193f) {
            return this.f31066a.f31056a;
        }
        if (temporalQuery == o.f31194g) {
            return this.f31066a.f31057b;
        }
        if (temporalQuery == o.f31189b) {
            return j$.time.chrono.k.f31087a;
        }
        if (temporalQuery == o.f31190c) {
            return j$.time.temporal.b.NANOS;
        }
        return temporalQuery.queryFrom(this);
    }

    @Override // j$.time.temporal.l
    public final j$.time.temporal.k d(j$.time.temporal.k kVar) {
        return kVar.b(this.f31066a.f31056a.toEpochDay(), j$.time.temporal.a.EPOCH_DAY).b(this.f31066a.f31057b.G(), j$.time.temporal.a.NANO_OF_DAY).b(this.f31067b.getTotalSeconds(), j$.time.temporal.a.OFFSET_SECONDS);
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof OffsetDateTime) {
            OffsetDateTime offsetDateTime = (OffsetDateTime) obj;
            if (this.f31066a.equals(offsetDateTime.f31066a) && this.f31067b.equals(offsetDateTime.f31067b)) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        return this.f31066a.hashCode() ^ this.f31067b.hashCode();
    }

    public final String toString() {
        return this.f31066a.toString() + this.f31067b.toString();
    }
}
