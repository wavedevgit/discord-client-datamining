package j$.time;

import j$.time.chrono.ChronoLocalDate;
import j$.time.temporal.TemporalQuery;
import j$.time.temporal.o;
import j$.time.temporal.r;
import java.io.Serializable;
import java.util.List;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class n implements j$.time.temporal.k, j$.time.chrono.g, Serializable {

    /* renamed from: a  reason: collision with root package name */
    public final LocalDateTime f30527a;

    /* renamed from: b  reason: collision with root package name */
    public final ZoneOffset f30528b;

    /* renamed from: c  reason: collision with root package name */
    public final k f30529c;

    @Override // j$.time.temporal.k
    public final j$.time.temporal.k h(long j10, j$.time.temporal.b bVar) {
        if (bVar != null) {
            if (bVar.compareTo(j$.time.temporal.b.DAYS) >= 0 && bVar != j$.time.temporal.b.FOREVER) {
                return t(this.f30527a.h(j10, bVar), this.f30529c, this.f30528b);
            }
            LocalDateTime h10 = this.f30527a.h(j10, bVar);
            ZoneOffset zoneOffset = this.f30528b;
            k kVar = this.f30529c;
            Objects.requireNonNull(h10, "localDateTime");
            Objects.requireNonNull(zoneOffset, "offset");
            Objects.requireNonNull(kVar, "zone");
            if (kVar.t().f(h10).contains(zoneOffset)) {
                return new n(h10, kVar, zoneOffset);
            }
            return r(h10.q(zoneOffset), h10.f30410b.f30416d, kVar);
        }
        bVar.getClass();
        return (n) h(j10, bVar);
    }

    public static n t(LocalDateTime localDateTime, k kVar, ZoneOffset zoneOffset) {
        Objects.requireNonNull(localDateTime, "localDateTime");
        Objects.requireNonNull(kVar, "zone");
        if (kVar instanceof ZoneOffset) {
            return new n(localDateTime, kVar, (ZoneOffset) kVar);
        }
        j$.time.zone.c t10 = kVar.t();
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
            localDateTime = localDateTime.E(localDateTime.f30409a, 0L, 0L, a.r(aVar.f30557c.getTotalSeconds() - aVar.f30556b.getTotalSeconds(), 0).f30428a, 0L);
            zoneOffset = aVar.f30557c;
        }
        return new n(localDateTime, kVar, zoneOffset);
    }

    public static n r(long j10, int i10, k kVar) {
        ZoneOffset d10 = kVar.t().d(Instant.ofEpochSecond(j10, i10));
        return new n(LocalDateTime.B(j10, i10, d10), kVar, d10);
    }

    public n(LocalDateTime localDateTime, k kVar, ZoneOffset zoneOffset) {
        this.f30527a = localDateTime;
        this.f30528b = zoneOffset;
        this.f30529c = kVar;
    }

    public final n w(ZoneOffset zoneOffset) {
        return (zoneOffset.equals(this.f30528b) || !this.f30529c.t().f(this.f30527a).contains(zoneOffset)) ? this : new n(this.f30527a, this.f30529c, zoneOffset);
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
            if (nVar == j$.time.temporal.a.INSTANT_SECONDS || nVar == j$.time.temporal.a.OFFSET_SECONDS) {
                return ((j$.time.temporal.a) nVar).f30532b;
            }
            return this.f30527a.i(nVar);
        }
        return nVar.t(this);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final int g(j$.time.temporal.n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            int i10 = m.f30526a[((j$.time.temporal.a) nVar).ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    return this.f30528b.getTotalSeconds();
                }
                return this.f30527a.g(nVar);
            }
            throw new DateTimeException("Invalid field 'InstantSeconds' for get() method, use getLong() instead");
        }
        return super.g(nVar);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final long m(j$.time.temporal.n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            int i10 = m.f30526a[((j$.time.temporal.a) nVar).ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    return this.f30528b.getTotalSeconds();
                }
                return this.f30527a.m(nVar);
            }
            return D();
        }
        return nVar.B(this);
    }

    @Override // j$.time.chrono.g
    public final ZoneOffset n() {
        return this.f30528b;
    }

    @Override // j$.time.chrono.g
    public final k y() {
        return this.f30529c;
    }

    @Override // j$.time.chrono.g
    public final j$.time.chrono.c s() {
        return this.f30527a;
    }

    @Override // j$.time.chrono.g
    public final ChronoLocalDate l() {
        return this.f30527a.f30409a;
    }

    @Override // j$.time.chrono.g
    public final LocalTime e() {
        return this.f30527a.f30410b;
    }

    @Override // j$.time.chrono.g
    /* renamed from: x */
    public final n k(j$.time.temporal.l lVar) {
        if (lVar instanceof LocalDate) {
            return t(LocalDateTime.x((LocalDate) lVar, this.f30527a.f30410b), this.f30529c, this.f30528b);
        }
        if (lVar instanceof LocalTime) {
            return t(LocalDateTime.x(this.f30527a.f30409a, (LocalTime) lVar), this.f30529c, this.f30528b);
        }
        if (lVar instanceof LocalDateTime) {
            return t((LocalDateTime) lVar, this.f30529c, this.f30528b);
        }
        if (lVar instanceof OffsetDateTime) {
            OffsetDateTime offsetDateTime = (OffsetDateTime) lVar;
            return t(offsetDateTime.toLocalDateTime(), this.f30529c, offsetDateTime.f30420b);
        } else if (lVar instanceof Instant) {
            Instant instant = (Instant) lVar;
            return r(instant.getEpochSecond(), instant.getNano(), this.f30529c);
        } else if (lVar instanceof ZoneOffset) {
            return w((ZoneOffset) lVar);
        } else {
            return (n) lVar.d(this);
        }
    }

    @Override // j$.time.temporal.k
    public final j$.time.temporal.k b(long j10, j$.time.temporal.n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            j$.time.temporal.a aVar = (j$.time.temporal.a) nVar;
            int i10 = m.f30526a[aVar.ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    return t(this.f30527a.b(j10, nVar), this.f30529c, this.f30528b);
                }
                return w(ZoneOffset.ofTotalSeconds(aVar.f30532b.a(j10, aVar)));
            }
            return r(j10, this.f30527a.f30410b.f30416d, this.f30529c);
        }
        return (n) nVar.C(this, j10);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final Object a(TemporalQuery temporalQuery) {
        if (temporalQuery == o.f30549f) {
            return this.f30527a.f30409a;
        }
        return super.a(temporalQuery);
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof n) {
            n nVar = (n) obj;
            if (this.f30527a.equals(nVar.f30527a) && this.f30528b.equals(nVar.f30528b) && this.f30529c.equals(nVar.f30529c)) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        return (this.f30527a.hashCode() ^ this.f30528b.hashCode()) ^ Integer.rotateLeft(this.f30529c.hashCode(), 3);
    }

    public final String toString() {
        String str = this.f30527a.toString() + this.f30528b.toString();
        if (this.f30528b != this.f30529c) {
            return str + '[' + this.f30529c.toString() + ']';
        }
        return str;
    }
}
