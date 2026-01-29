package j$.time;

import j$.time.temporal.TemporalQuery;
import j$.time.temporal.o;
import j$.time.temporal.r;
import java.io.Serializable;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class OffsetDateTime implements j$.time.temporal.k, j$.time.temporal.l, Comparable<OffsetDateTime>, Serializable {

    /* renamed from: a  reason: collision with root package name */
    public final LocalDateTime f31520a;

    /* renamed from: b  reason: collision with root package name */
    public final ZoneOffset f31521b;

    @Override // java.lang.Comparable
    public final int compareTo(OffsetDateTime offsetDateTime) {
        int compare;
        OffsetDateTime offsetDateTime2 = offsetDateTime;
        if (this.f31521b.equals(offsetDateTime2.f31521b)) {
            compare = toLocalDateTime().compareTo(offsetDateTime2.toLocalDateTime());
        } else {
            compare = Long.compare(this.f31520a.q(this.f31521b), offsetDateTime2.f31520a.q(offsetDateTime2.f31521b));
            if (compare == 0) {
                compare = this.f31520a.f31511b.f31517d - offsetDateTime2.f31520a.f31511b.f31517d;
            }
        }
        return compare == 0 ? toLocalDateTime().compareTo(offsetDateTime2.toLocalDateTime()) : compare;
    }

    static {
        LocalDateTime localDateTime = LocalDateTime.f31508c;
        ZoneOffset zoneOffset = ZoneOffset.f31525f;
        localDateTime.getClass();
        new OffsetDateTime(localDateTime, zoneOffset);
        LocalDateTime localDateTime2 = LocalDateTime.f31509d;
        ZoneOffset zoneOffset2 = ZoneOffset.f31524e;
        localDateTime2.getClass();
        new OffsetDateTime(localDateTime2, zoneOffset2);
    }

    public static OffsetDateTime r(Instant instant, k kVar) {
        Objects.requireNonNull(instant, "instant");
        Objects.requireNonNull(kVar, "zone");
        ZoneOffset d10 = kVar.t().d(instant);
        return new OffsetDateTime(LocalDateTime.B(instant.getEpochSecond(), instant.getNano(), d10), d10);
    }

    public OffsetDateTime(LocalDateTime localDateTime, ZoneOffset zoneOffset) {
        Objects.requireNonNull(localDateTime, "dateTime");
        this.f31520a = localDateTime;
        Objects.requireNonNull(zoneOffset, "offset");
        this.f31521b = zoneOffset;
    }

    public final OffsetDateTime t(LocalDateTime localDateTime, ZoneOffset zoneOffset) {
        return (this.f31520a == localDateTime && this.f31521b.equals(zoneOffset)) ? this : new OffsetDateTime(localDateTime, zoneOffset);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final boolean j(j$.time.temporal.n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            return true;
        }
        return nVar != null && nVar.r(this);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final r i(j$.time.temporal.n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            if (nVar != j$.time.temporal.a.INSTANT_SECONDS && nVar != j$.time.temporal.a.OFFSET_SECONDS) {
                return this.f31520a.i(nVar);
            }
            return ((j$.time.temporal.a) nVar).f31633b;
        }
        return nVar.t(this);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final int g(j$.time.temporal.n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            int i10 = h.f31621a[((j$.time.temporal.a) nVar).ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    return this.f31521b.getTotalSeconds();
                }
                return this.f31520a.g(nVar);
            }
            throw new DateTimeException("Invalid field 'InstantSeconds' for get() method, use getLong() instead");
        }
        return super.g(nVar);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final long m(j$.time.temporal.n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            int i10 = h.f31621a[((j$.time.temporal.a) nVar).ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    return this.f31521b.getTotalSeconds();
                }
                return this.f31520a.m(nVar);
            }
            return this.f31520a.q(this.f31521b);
        }
        return nVar.B(this);
    }

    public LocalDateTime toLocalDateTime() {
        return this.f31520a;
    }

    @Override // j$.time.temporal.k
    public final j$.time.temporal.k c(LocalDate localDate) {
        if (localDate != null) {
            return t(this.f31520a.c(localDate), this.f31521b);
        }
        return (OffsetDateTime) localDate.d(this);
    }

    @Override // j$.time.temporal.k
    public final j$.time.temporal.k b(long j10, j$.time.temporal.n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            j$.time.temporal.a aVar = (j$.time.temporal.a) nVar;
            int i10 = h.f31621a[aVar.ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    return t(this.f31520a, ZoneOffset.ofTotalSeconds(aVar.f31633b.a(j10, aVar)));
                }
                return t(this.f31520a.b(j10, nVar), this.f31521b);
            }
            return r(Instant.ofEpochSecond(j10, this.f31520a.f31511b.f31517d), this.f31521b);
        }
        return (OffsetDateTime) nVar.C(this, j10);
    }

    @Override // j$.time.temporal.k
    public final j$.time.temporal.k h(long j10, j$.time.temporal.b bVar) {
        if (bVar != null) {
            return t(this.f31520a.h(j10, bVar), this.f31521b);
        }
        bVar.getClass();
        return (OffsetDateTime) h(j10, bVar);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final Object a(TemporalQuery temporalQuery) {
        if (temporalQuery == o.f31648d || temporalQuery == o.f31649e) {
            return this.f31521b;
        }
        if (temporalQuery == o.f31645a) {
            return null;
        }
        if (temporalQuery == o.f31650f) {
            return this.f31520a.f31510a;
        }
        if (temporalQuery == o.f31651g) {
            return this.f31520a.f31511b;
        }
        if (temporalQuery == o.f31646b) {
            return j$.time.chrono.k.f31542a;
        }
        if (temporalQuery == o.f31647c) {
            return j$.time.temporal.b.NANOS;
        }
        return temporalQuery.queryFrom(this);
    }

    @Override // j$.time.temporal.l
    public final j$.time.temporal.k d(j$.time.temporal.k kVar) {
        return kVar.b(this.f31520a.f31510a.toEpochDay(), j$.time.temporal.a.EPOCH_DAY).b(this.f31520a.f31511b.G(), j$.time.temporal.a.NANO_OF_DAY).b(this.f31521b.getTotalSeconds(), j$.time.temporal.a.OFFSET_SECONDS);
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof OffsetDateTime) {
            OffsetDateTime offsetDateTime = (OffsetDateTime) obj;
            if (this.f31520a.equals(offsetDateTime.f31520a) && this.f31521b.equals(offsetDateTime.f31521b)) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        return this.f31520a.hashCode() ^ this.f31521b.hashCode();
    }

    public final String toString() {
        return this.f31520a.toString() + this.f31521b.toString();
    }
}
