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
    public final LocalDateTime f30602a;

    /* renamed from: b  reason: collision with root package name */
    public final ZoneOffset f30603b;

    /* renamed from: c  reason: collision with root package name */
    public final j f30604c;

    @Override // j$.time.temporal.k
    public final j$.time.temporal.k h(long j10, j$.time.temporal.b bVar) {
        if (bVar != null) {
            if (bVar.compareTo(j$.time.temporal.b.DAYS) >= 0 && bVar != j$.time.temporal.b.FOREVER) {
                return t(this.f30602a.h(j10, bVar), this.f30604c, this.f30603b);
            }
            LocalDateTime h10 = this.f30602a.h(j10, bVar);
            ZoneOffset zoneOffset = this.f30603b;
            j jVar = this.f30604c;
            Objects.requireNonNull(h10, "localDateTime");
            Objects.requireNonNull(zoneOffset, "offset");
            Objects.requireNonNull(jVar, "zone");
            if (jVar.t().f(h10).contains(zoneOffset)) {
                return new m(h10, jVar, zoneOffset);
            }
            return r(h10.q(zoneOffset), h10.f30488b.f30494d, jVar);
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
            localDateTime = localDateTime.E(localDateTime.f30487a, 0L, 0L, Duration.r(aVar.f30632c.getTotalSeconds() - aVar.f30631b.getTotalSeconds(), 0).f30477a, 0L);
            zoneOffset = aVar.f30632c;
        }
        return new m(localDateTime, jVar, zoneOffset);
    }

    public static m r(long j10, int i10, j jVar) {
        ZoneOffset d10 = jVar.t().d(Instant.ofEpochSecond(j10, i10));
        return new m(LocalDateTime.B(j10, i10, d10), jVar, d10);
    }

    public m(LocalDateTime localDateTime, j jVar, ZoneOffset zoneOffset) {
        this.f30602a = localDateTime;
        this.f30603b = zoneOffset;
        this.f30604c = jVar;
    }

    public final m w(ZoneOffset zoneOffset) {
        return (zoneOffset.equals(this.f30603b) || !this.f30604c.t().f(this.f30602a).contains(zoneOffset)) ? this : new m(this.f30602a, this.f30604c, zoneOffset);
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
                return ((j$.time.temporal.a) nVar).f30607b;
            }
            return this.f30602a.i(nVar);
        }
        return nVar.t(this);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final int g(n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            int i10 = l.f30601a[((j$.time.temporal.a) nVar).ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    return this.f30603b.getTotalSeconds();
                }
                return this.f30602a.g(nVar);
            }
            throw new DateTimeException("Invalid field 'InstantSeconds' for get() method, use getLong() instead");
        }
        return super.g(nVar);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final long m(n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            int i10 = l.f30601a[((j$.time.temporal.a) nVar).ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    return this.f30603b.getTotalSeconds();
                }
                return this.f30602a.m(nVar);
            }
            return D();
        }
        return nVar.B(this);
    }

    @Override // j$.time.chrono.g
    public final ZoneOffset n() {
        return this.f30603b;
    }

    @Override // j$.time.chrono.g
    public final j y() {
        return this.f30604c;
    }

    @Override // j$.time.chrono.g
    public final j$.time.chrono.c s() {
        return this.f30602a;
    }

    @Override // j$.time.chrono.g
    public final ChronoLocalDate l() {
        return this.f30602a.f30487a;
    }

    @Override // j$.time.chrono.g
    public final LocalTime e() {
        return this.f30602a.f30488b;
    }

    @Override // j$.time.chrono.g
    /* renamed from: x */
    public final m k(j$.time.temporal.l lVar) {
        if (lVar instanceof LocalDate) {
            return t(LocalDateTime.x((LocalDate) lVar, this.f30602a.f30488b), this.f30604c, this.f30603b);
        }
        if (lVar instanceof LocalTime) {
            return t(LocalDateTime.x(this.f30602a.f30487a, (LocalTime) lVar), this.f30604c, this.f30603b);
        }
        if (lVar instanceof LocalDateTime) {
            return t((LocalDateTime) lVar, this.f30604c, this.f30603b);
        }
        if (lVar instanceof OffsetDateTime) {
            OffsetDateTime offsetDateTime = (OffsetDateTime) lVar;
            return t(offsetDateTime.toLocalDateTime(), this.f30604c, offsetDateTime.f30498b);
        } else if (lVar instanceof Instant) {
            Instant instant = (Instant) lVar;
            return r(instant.getEpochSecond(), instant.getNano(), this.f30604c);
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
            int i10 = l.f30601a[aVar.ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    return t(this.f30602a.b(j10, nVar), this.f30604c, this.f30603b);
                }
                return w(ZoneOffset.ofTotalSeconds(aVar.f30607b.a(j10, aVar)));
            }
            return r(j10, this.f30602a.f30488b.f30494d, this.f30604c);
        }
        return (m) nVar.C(this, j10);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final Object a(TemporalQuery temporalQuery) {
        if (temporalQuery == o.f30624f) {
            return this.f30602a.f30487a;
        }
        return super.a(temporalQuery);
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof m) {
            m mVar = (m) obj;
            if (this.f30602a.equals(mVar.f30602a) && this.f30603b.equals(mVar.f30603b) && this.f30604c.equals(mVar.f30604c)) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        return (this.f30602a.hashCode() ^ this.f30603b.hashCode()) ^ Integer.rotateLeft(this.f30604c.hashCode(), 3);
    }

    public final String toString() {
        String str = this.f30602a.toString() + this.f30603b.toString();
        if (this.f30603b != this.f30604c) {
            return str + '[' + this.f30604c.toString() + ']';
        }
        return str;
    }
}
