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
    public final LocalDateTime f29500a;

    /* renamed from: b  reason: collision with root package name */
    public final ZoneOffset f29501b;

    /* renamed from: c  reason: collision with root package name */
    public final j f29502c;

    @Override // j$.time.temporal.k
    public final j$.time.temporal.k h(long j10, j$.time.temporal.b bVar) {
        if (bVar != null) {
            if (bVar.compareTo(j$.time.temporal.b.DAYS) >= 0 && bVar != j$.time.temporal.b.FOREVER) {
                return t(this.f29500a.h(j10, bVar), this.f29502c, this.f29501b);
            }
            LocalDateTime h10 = this.f29500a.h(j10, bVar);
            ZoneOffset zoneOffset = this.f29501b;
            j jVar = this.f29502c;
            Objects.requireNonNull(h10, "localDateTime");
            Objects.requireNonNull(zoneOffset, "offset");
            Objects.requireNonNull(jVar, "zone");
            if (jVar.t().f(h10).contains(zoneOffset)) {
                return new m(h10, jVar, zoneOffset);
            }
            return r(h10.q(zoneOffset), h10.f29386b.f29392d, jVar);
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
            localDateTime = localDateTime.E(localDateTime.f29385a, 0L, 0L, Duration.r(aVar.f29530c.getTotalSeconds() - aVar.f29529b.getTotalSeconds(), 0).f29375a, 0L);
            zoneOffset = aVar.f29530c;
        }
        return new m(localDateTime, jVar, zoneOffset);
    }

    public static m r(long j10, int i10, j jVar) {
        ZoneOffset d10 = jVar.t().d(Instant.ofEpochSecond(j10, i10));
        return new m(LocalDateTime.B(j10, i10, d10), jVar, d10);
    }

    public m(LocalDateTime localDateTime, j jVar, ZoneOffset zoneOffset) {
        this.f29500a = localDateTime;
        this.f29501b = zoneOffset;
        this.f29502c = jVar;
    }

    public final m w(ZoneOffset zoneOffset) {
        return (zoneOffset.equals(this.f29501b) || !this.f29502c.t().f(this.f29500a).contains(zoneOffset)) ? this : new m(this.f29500a, this.f29502c, zoneOffset);
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
                return ((j$.time.temporal.a) nVar).f29505b;
            }
            return this.f29500a.i(nVar);
        }
        return nVar.t(this);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final int g(n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            int i10 = l.f29499a[((j$.time.temporal.a) nVar).ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    return this.f29501b.getTotalSeconds();
                }
                return this.f29500a.g(nVar);
            }
            throw new DateTimeException("Invalid field 'InstantSeconds' for get() method, use getLong() instead");
        }
        return super.g(nVar);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final long m(n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            int i10 = l.f29499a[((j$.time.temporal.a) nVar).ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    return this.f29501b.getTotalSeconds();
                }
                return this.f29500a.m(nVar);
            }
            return D();
        }
        return nVar.B(this);
    }

    @Override // j$.time.chrono.g
    public final ZoneOffset n() {
        return this.f29501b;
    }

    @Override // j$.time.chrono.g
    public final j y() {
        return this.f29502c;
    }

    @Override // j$.time.chrono.g
    public final j$.time.chrono.c s() {
        return this.f29500a;
    }

    @Override // j$.time.chrono.g
    public final ChronoLocalDate l() {
        return this.f29500a.f29385a;
    }

    @Override // j$.time.chrono.g
    public final LocalTime e() {
        return this.f29500a.f29386b;
    }

    @Override // j$.time.chrono.g
    /* renamed from: x */
    public final m k(j$.time.temporal.l lVar) {
        if (lVar instanceof LocalDate) {
            return t(LocalDateTime.x((LocalDate) lVar, this.f29500a.f29386b), this.f29502c, this.f29501b);
        }
        if (lVar instanceof LocalTime) {
            return t(LocalDateTime.x(this.f29500a.f29385a, (LocalTime) lVar), this.f29502c, this.f29501b);
        }
        if (lVar instanceof LocalDateTime) {
            return t((LocalDateTime) lVar, this.f29502c, this.f29501b);
        }
        if (lVar instanceof OffsetDateTime) {
            OffsetDateTime offsetDateTime = (OffsetDateTime) lVar;
            return t(offsetDateTime.toLocalDateTime(), this.f29502c, offsetDateTime.f29396b);
        } else if (lVar instanceof Instant) {
            Instant instant = (Instant) lVar;
            return r(instant.getEpochSecond(), instant.getNano(), this.f29502c);
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
            int i10 = l.f29499a[aVar.ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    return t(this.f29500a.b(j10, nVar), this.f29502c, this.f29501b);
                }
                return w(ZoneOffset.ofTotalSeconds(aVar.f29505b.a(j10, aVar)));
            }
            return r(j10, this.f29500a.f29386b.f29392d, this.f29502c);
        }
        return (m) nVar.C(this, j10);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final Object a(TemporalQuery temporalQuery) {
        if (temporalQuery == o.f29522f) {
            return this.f29500a.f29385a;
        }
        return super.a(temporalQuery);
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof m) {
            m mVar = (m) obj;
            if (this.f29500a.equals(mVar.f29500a) && this.f29501b.equals(mVar.f29501b) && this.f29502c.equals(mVar.f29502c)) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        return (this.f29500a.hashCode() ^ this.f29501b.hashCode()) ^ Integer.rotateLeft(this.f29502c.hashCode(), 3);
    }

    public final String toString() {
        String str = this.f29500a.toString() + this.f29501b.toString();
        if (this.f29501b != this.f29502c) {
            return str + '[' + this.f29502c.toString() + ']';
        }
        return str;
    }
}
