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
    public final LocalDateTime f30498a;

    /* renamed from: b  reason: collision with root package name */
    public final ZoneOffset f30499b;

    @Override // java.lang.Comparable
    public final int compareTo(OffsetDateTime offsetDateTime) {
        int compare;
        OffsetDateTime offsetDateTime2 = offsetDateTime;
        if (this.f30499b.equals(offsetDateTime2.f30499b)) {
            compare = toLocalDateTime().compareTo(offsetDateTime2.toLocalDateTime());
        } else {
            compare = Long.compare(this.f30498a.q(this.f30499b), offsetDateTime2.f30498a.q(offsetDateTime2.f30499b));
            if (compare == 0) {
                compare = this.f30498a.f30489b.f30495d - offsetDateTime2.f30498a.f30489b.f30495d;
            }
        }
        return compare == 0 ? toLocalDateTime().compareTo(offsetDateTime2.toLocalDateTime()) : compare;
    }

    static {
        LocalDateTime localDateTime = LocalDateTime.f30486c;
        ZoneOffset zoneOffset = ZoneOffset.f30503f;
        localDateTime.getClass();
        new OffsetDateTime(localDateTime, zoneOffset);
        LocalDateTime localDateTime2 = LocalDateTime.f30487d;
        ZoneOffset zoneOffset2 = ZoneOffset.f30502e;
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
        this.f30498a = localDateTime;
        Objects.requireNonNull(zoneOffset, "offset");
        this.f30499b = zoneOffset;
    }

    public final OffsetDateTime t(LocalDateTime localDateTime, ZoneOffset zoneOffset) {
        return (this.f30498a == localDateTime && this.f30499b.equals(zoneOffset)) ? this : new OffsetDateTime(localDateTime, zoneOffset);
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
                return this.f30498a.i(nVar);
            }
            return ((j$.time.temporal.a) nVar).f30608b;
        }
        return nVar.t(this);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final int g(n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            int i10 = g.f30596a[((j$.time.temporal.a) nVar).ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    return this.f30499b.getTotalSeconds();
                }
                return this.f30498a.g(nVar);
            }
            throw new DateTimeException("Invalid field 'InstantSeconds' for get() method, use getLong() instead");
        }
        return super.g(nVar);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final long m(n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            int i10 = g.f30596a[((j$.time.temporal.a) nVar).ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    return this.f30499b.getTotalSeconds();
                }
                return this.f30498a.m(nVar);
            }
            return this.f30498a.q(this.f30499b);
        }
        return nVar.B(this);
    }

    public LocalDateTime toLocalDateTime() {
        return this.f30498a;
    }

    @Override // j$.time.temporal.k
    public final j$.time.temporal.k c(LocalDate localDate) {
        if (localDate != null) {
            return t(this.f30498a.c(localDate), this.f30499b);
        }
        return (OffsetDateTime) localDate.d(this);
    }

    @Override // j$.time.temporal.k
    public final j$.time.temporal.k b(long j10, n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            j$.time.temporal.a aVar = (j$.time.temporal.a) nVar;
            int i10 = g.f30596a[aVar.ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    return t(this.f30498a, ZoneOffset.ofTotalSeconds(aVar.f30608b.a(j10, aVar)));
                }
                return t(this.f30498a.b(j10, nVar), this.f30499b);
            }
            return r(Instant.ofEpochSecond(j10, this.f30498a.f30489b.f30495d), this.f30499b);
        }
        return (OffsetDateTime) nVar.C(this, j10);
    }

    @Override // j$.time.temporal.k
    public final j$.time.temporal.k h(long j10, j$.time.temporal.b bVar) {
        if (bVar != null) {
            return t(this.f30498a.h(j10, bVar), this.f30499b);
        }
        bVar.getClass();
        return (OffsetDateTime) h(j10, bVar);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final Object a(TemporalQuery temporalQuery) {
        if (temporalQuery == o.f30623d || temporalQuery == o.f30624e) {
            return this.f30499b;
        }
        if (temporalQuery == o.f30620a) {
            return null;
        }
        if (temporalQuery == o.f30625f) {
            return this.f30498a.f30488a;
        }
        if (temporalQuery == o.f30626g) {
            return this.f30498a.f30489b;
        }
        if (temporalQuery == o.f30621b) {
            return j$.time.chrono.k.f30519a;
        }
        if (temporalQuery == o.f30622c) {
            return j$.time.temporal.b.NANOS;
        }
        return temporalQuery.queryFrom(this);
    }

    @Override // j$.time.temporal.l
    public final j$.time.temporal.k d(j$.time.temporal.k kVar) {
        return kVar.b(this.f30498a.f30488a.toEpochDay(), j$.time.temporal.a.EPOCH_DAY).b(this.f30498a.f30489b.G(), j$.time.temporal.a.NANO_OF_DAY).b(this.f30499b.getTotalSeconds(), j$.time.temporal.a.OFFSET_SECONDS);
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof OffsetDateTime) {
            OffsetDateTime offsetDateTime = (OffsetDateTime) obj;
            if (this.f30498a.equals(offsetDateTime.f30498a) && this.f30499b.equals(offsetDateTime.f30499b)) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        return this.f30498a.hashCode() ^ this.f30499b.hashCode();
    }

    public final String toString() {
        return this.f30498a.toString() + this.f30499b.toString();
    }
}
