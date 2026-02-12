package j$.time;

import j$.time.chrono.ChronoLocalDate;
import j$.time.temporal.TemporalQuery;
import j$.time.temporal.n;
import j$.time.temporal.o;
import j$.time.temporal.r;
import java.io.Serializable;
import java.util.List;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class m implements j$.time.temporal.k, j$.time.chrono.g, Serializable {

    /* renamed from: a  reason: collision with root package name */
    public final LocalDateTime f30603a;

    /* renamed from: b  reason: collision with root package name */
    public final ZoneOffset f30604b;

    /* renamed from: c  reason: collision with root package name */
    public final j f30605c;

    @Override // j$.time.temporal.k
    public final j$.time.temporal.k h(long j10, j$.time.temporal.b bVar) {
        if (bVar != null) {
            if (bVar.compareTo(j$.time.temporal.b.DAYS) >= 0 && bVar != j$.time.temporal.b.FOREVER) {
                return t(this.f30603a.h(j10, bVar), this.f30605c, this.f30604b);
            }
            LocalDateTime h10 = this.f30603a.h(j10, bVar);
            ZoneOffset zoneOffset = this.f30604b;
            j jVar = this.f30605c;
            Objects.requireNonNull(h10, "localDateTime");
            Objects.requireNonNull(zoneOffset, "offset");
            Objects.requireNonNull(jVar, "zone");
            if (jVar.t().f(h10).contains(zoneOffset)) {
                return new m(h10, jVar, zoneOffset);
            }
            return r(h10.q(zoneOffset), h10.f30489b.f30495d, jVar);
        }
        bVar.getClass();
        return (m) h(j10, bVar);
    }

    public static m t(LocalDateTime localDateTime, j jVar, ZoneOffset zoneOffset) {
        Objects.requireNonNull(localDateTime, "localDateTime");
        Objects.requireNonNull(jVar, "zone");
        if (jVar instanceof ZoneOffset) {
            return new m(localDateTime, jVar, (ZoneOffset) jVar);
        }
        j$.time.zone.c t10 = jVar.t();
        List f10 = t10.f(localDateTime);
        if (f10.size() == 1) {
            zoneOffset = (ZoneOffset) f10.get(0);
        } else if (f10.size() != 0) {
            if (zoneOffset == null || !f10.contains(zoneOffset)) {
                zoneOffset = (ZoneOffset) f10.get(0);
                Objects.requireNonNull(zoneOffset, "offset");
            }
        } else {
            Object e10 = t10.e(localDateTime);
            j$.time.zone.a aVar = e10 instanceof j$.time.zone.a ? (j$.time.zone.a) e10 : null;
            localDateTime = localDateTime.E(localDateTime.f30488a, 0L, 0L, Duration.r(aVar.f30633c.getTotalSeconds() - aVar.f30632b.getTotalSeconds(), 0).f30478a, 0L);
            zoneOffset = aVar.f30633c;
        }
        return new m(localDateTime, jVar, zoneOffset);
    }

    public static m r(long j10, int i10, j jVar) {
        ZoneOffset d10 = jVar.t().d(Instant.ofEpochSecond(j10, i10));
        return new m(LocalDateTime.B(j10, i10, d10), jVar, d10);
    }

    public m(LocalDateTime localDateTime, j jVar, ZoneOffset zoneOffset) {
        this.f30603a = localDateTime;
        this.f30604b = zoneOffset;
        this.f30605c = jVar;
    }

    public final m w(ZoneOffset zoneOffset) {
        return (zoneOffset.equals(this.f30604b) || !this.f30605c.t().f(this.f30603a).contains(zoneOffset)) ? this : new m(this.f30603a, this.f30605c, zoneOffset);
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
            if (nVar == j$.time.temporal.a.INSTANT_SECONDS || nVar == j$.time.temporal.a.OFFSET_SECONDS) {
                return ((j$.time.temporal.a) nVar).f30608b;
            }
            return this.f30603a.i(nVar);
        }
        return nVar.t(this);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final int g(n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            int i10 = l.f30602a[((j$.time.temporal.a) nVar).ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    return this.f30604b.getTotalSeconds();
                }
                return this.f30603a.g(nVar);
            }
            throw new DateTimeException("Invalid field 'InstantSeconds' for get() method, use getLong() instead");
        }
        return super.g(nVar);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final long m(n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            int i10 = l.f30602a[((j$.time.temporal.a) nVar).ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    return this.f30604b.getTotalSeconds();
                }
                return this.f30603a.m(nVar);
            }
            return D();
        }
        return nVar.B(this);
    }

    @Override // j$.time.chrono.g
    public final ZoneOffset n() {
        return this.f30604b;
    }

    @Override // j$.time.chrono.g
    public final j y() {
        return this.f30605c;
    }

    @Override // j$.time.chrono.g
    public final j$.time.chrono.c s() {
        return this.f30603a;
    }

    @Override // j$.time.chrono.g
    public final ChronoLocalDate l() {
        return this.f30603a.f30488a;
    }

    @Override // j$.time.chrono.g
    public final LocalTime e() {
        return this.f30603a.f30489b;
    }

    @Override // j$.time.chrono.g
    /* renamed from: x */
    public final m k(j$.time.temporal.l lVar) {
        if (lVar instanceof LocalDate) {
            return t(LocalDateTime.x((LocalDate) lVar, this.f30603a.f30489b), this.f30605c, this.f30604b);
        }
        if (lVar instanceof LocalTime) {
            return t(LocalDateTime.x(this.f30603a.f30488a, (LocalTime) lVar), this.f30605c, this.f30604b);
        }
        if (lVar instanceof LocalDateTime) {
            return t((LocalDateTime) lVar, this.f30605c, this.f30604b);
        }
        if (lVar instanceof OffsetDateTime) {
            OffsetDateTime offsetDateTime = (OffsetDateTime) lVar;
            return t(offsetDateTime.toLocalDateTime(), this.f30605c, offsetDateTime.f30499b);
        } else if (lVar instanceof Instant) {
            Instant instant = (Instant) lVar;
            return r(instant.getEpochSecond(), instant.getNano(), this.f30605c);
        } else if (lVar instanceof ZoneOffset) {
            return w((ZoneOffset) lVar);
        } else {
            return (m) lVar.d(this);
        }
    }

    @Override // j$.time.temporal.k
    public final j$.time.temporal.k b(long j10, n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            j$.time.temporal.a aVar = (j$.time.temporal.a) nVar;
            int i10 = l.f30602a[aVar.ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    return t(this.f30603a.b(j10, nVar), this.f30605c, this.f30604b);
                }
                return w(ZoneOffset.ofTotalSeconds(aVar.f30608b.a(j10, aVar)));
            }
            return r(j10, this.f30603a.f30489b.f30495d, this.f30605c);
        }
        return (m) nVar.C(this, j10);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final Object a(TemporalQuery temporalQuery) {
        if (temporalQuery == o.f30625f) {
            return this.f30603a.f30488a;
        }
        return super.a(temporalQuery);
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof m) {
            m mVar = (m) obj;
            if (this.f30603a.equals(mVar.f30603a) && this.f30604b.equals(mVar.f30604b) && this.f30605c.equals(mVar.f30605c)) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        return (this.f30603a.hashCode() ^ this.f30604b.hashCode()) ^ Integer.rotateLeft(this.f30605c.hashCode(), 3);
    }

    public final String toString() {
        String str = this.f30603a.toString() + this.f30604b.toString();
        if (this.f30604b != this.f30605c) {
            return str + '[' + this.f30605c.toString() + ']';
        }
        return str;
    }
}
