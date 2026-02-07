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
    public final LocalDateTime f29443a;

    /* renamed from: b  reason: collision with root package name */
    public final ZoneOffset f29444b;

    @Override // java.lang.Comparable
    public final int compareTo(OffsetDateTime offsetDateTime) {
        int compare;
        OffsetDateTime offsetDateTime2 = offsetDateTime;
        if (this.f29444b.equals(offsetDateTime2.f29444b)) {
            compare = toLocalDateTime().compareTo(offsetDateTime2.toLocalDateTime());
        } else {
            compare = Long.compare(this.f29443a.q(this.f29444b), offsetDateTime2.f29443a.q(offsetDateTime2.f29444b));
            if (compare == 0) {
                compare = this.f29443a.f29434b.f29440d - offsetDateTime2.f29443a.f29434b.f29440d;
            }
        }
        return compare == 0 ? toLocalDateTime().compareTo(offsetDateTime2.toLocalDateTime()) : compare;
    }

    static {
        LocalDateTime localDateTime = LocalDateTime.f29431c;
        ZoneOffset zoneOffset = ZoneOffset.f29448f;
        localDateTime.getClass();
        new OffsetDateTime(localDateTime, zoneOffset);
        LocalDateTime localDateTime2 = LocalDateTime.f29432d;
        ZoneOffset zoneOffset2 = ZoneOffset.f29447e;
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
        this.f29443a = localDateTime;
        Objects.requireNonNull(zoneOffset, "offset");
        this.f29444b = zoneOffset;
    }

    public final OffsetDateTime t(LocalDateTime localDateTime, ZoneOffset zoneOffset) {
        return (this.f29443a == localDateTime && this.f29444b.equals(zoneOffset)) ? this : new OffsetDateTime(localDateTime, zoneOffset);
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
                return this.f29443a.i(nVar);
            }
            return ((j$.time.temporal.a) nVar).f29553b;
        }
        return nVar.t(this);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final int g(n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            int i10 = g.f29541a[((j$.time.temporal.a) nVar).ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    return this.f29444b.getTotalSeconds();
                }
                return this.f29443a.g(nVar);
            }
            throw new DateTimeException("Invalid field 'InstantSeconds' for get() method, use getLong() instead");
        }
        return super.g(nVar);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final long m(n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            int i10 = g.f29541a[((j$.time.temporal.a) nVar).ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    return this.f29444b.getTotalSeconds();
                }
                return this.f29443a.m(nVar);
            }
            return this.f29443a.q(this.f29444b);
        }
        return nVar.B(this);
    }

    public LocalDateTime toLocalDateTime() {
        return this.f29443a;
    }

    @Override // j$.time.temporal.k
    public final j$.time.temporal.k c(LocalDate localDate) {
        if (localDate != null) {
            return t(this.f29443a.c(localDate), this.f29444b);
        }
        return (OffsetDateTime) localDate.d(this);
    }

    @Override // j$.time.temporal.k
    public final j$.time.temporal.k b(long j10, n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            j$.time.temporal.a aVar = (j$.time.temporal.a) nVar;
            int i10 = g.f29541a[aVar.ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    return t(this.f29443a, ZoneOffset.ofTotalSeconds(aVar.f29553b.a(j10, aVar)));
                }
                return t(this.f29443a.b(j10, nVar), this.f29444b);
            }
            return r(Instant.ofEpochSecond(j10, this.f29443a.f29434b.f29440d), this.f29444b);
        }
        return (OffsetDateTime) nVar.C(this, j10);
    }

    @Override // j$.time.temporal.k
    public final j$.time.temporal.k h(long j10, j$.time.temporal.b bVar) {
        if (bVar != null) {
            return t(this.f29443a.h(j10, bVar), this.f29444b);
        }
        bVar.getClass();
        return (OffsetDateTime) h(j10, bVar);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final Object a(TemporalQuery temporalQuery) {
        if (temporalQuery == o.f29568d || temporalQuery == o.f29569e) {
            return this.f29444b;
        }
        if (temporalQuery == o.f29565a) {
            return null;
        }
        if (temporalQuery == o.f29570f) {
            return this.f29443a.f29433a;
        }
        if (temporalQuery == o.f29571g) {
            return this.f29443a.f29434b;
        }
        if (temporalQuery == o.f29566b) {
            return j$.time.chrono.k.f29464a;
        }
        if (temporalQuery == o.f29567c) {
            return j$.time.temporal.b.NANOS;
        }
        return temporalQuery.queryFrom(this);
    }

    @Override // j$.time.temporal.l
    public final j$.time.temporal.k d(j$.time.temporal.k kVar) {
        return kVar.b(this.f29443a.f29433a.toEpochDay(), j$.time.temporal.a.EPOCH_DAY).b(this.f29443a.f29434b.G(), j$.time.temporal.a.NANO_OF_DAY).b(this.f29444b.getTotalSeconds(), j$.time.temporal.a.OFFSET_SECONDS);
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof OffsetDateTime) {
            OffsetDateTime offsetDateTime = (OffsetDateTime) obj;
            if (this.f29443a.equals(offsetDateTime.f29443a) && this.f29444b.equals(offsetDateTime.f29444b)) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        return this.f29443a.hashCode() ^ this.f29444b.hashCode();
    }

    public final String toString() {
        return this.f29443a.toString() + this.f29444b.toString();
    }
}
