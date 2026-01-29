package j$.time;

import com.withpersona.sdk2.inquiry.network.dto.InquiryField;
import j$.time.chrono.ChronoLocalDate;
import j$.time.format.DateTimeFormatter;
import j$.time.temporal.TemporalAccessor;
import j$.time.temporal.TemporalQuery;
import j$.time.temporal.o;
import j$.time.temporal.p;
import j$.time.temporal.r;
import java.io.Serializable;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class LocalDateTime implements j$.time.temporal.k, j$.time.temporal.l, j$.time.chrono.c, Serializable {

    /* renamed from: c  reason: collision with root package name */
    public static final LocalDateTime f31508c = x(LocalDate.MIN, LocalTime.MIN);

    /* renamed from: d  reason: collision with root package name */
    public static final LocalDateTime f31509d = x(LocalDate.MAX, LocalTime.MAX);

    /* renamed from: a  reason: collision with root package name */
    public final LocalDate f31510a;

    /* renamed from: b  reason: collision with root package name */
    public final LocalTime f31511b;

    @Override // j$.time.chrono.c
    public final j$.time.chrono.g v(k kVar) {
        return n.t(this, kVar, null);
    }

    public static LocalDateTime x(LocalDate localDate, LocalTime localTime) {
        Objects.requireNonNull(localDate, InquiryField.DateField.TYPE);
        Objects.requireNonNull(localTime, "time");
        return new LocalDateTime(localDate, localTime);
    }

    public static LocalDateTime B(long j10, int i10, ZoneOffset zoneOffset) {
        long totalSeconds;
        Objects.requireNonNull(zoneOffset, "offset");
        long j11 = i10;
        j$.time.temporal.a.NANO_OF_SECOND.E(j11);
        return new LocalDateTime(LocalDate.ofEpochDay(Math.floorDiv(j10 + zoneOffset.getTotalSeconds(), 86400L)), LocalTime.x((((int) Math.floorMod(totalSeconds, 86400L)) * 1000000000) + j11));
    }

    public static LocalDateTime t(TemporalAccessor temporalAccessor) {
        if (temporalAccessor instanceof LocalDateTime) {
            return (LocalDateTime) temporalAccessor;
        }
        if (!(temporalAccessor instanceof n)) {
            if (temporalAccessor instanceof OffsetDateTime) {
                return ((OffsetDateTime) temporalAccessor).toLocalDateTime();
            }
            try {
                return new LocalDateTime(LocalDate.t(temporalAccessor), LocalTime.t(temporalAccessor));
            } catch (DateTimeException e10) {
                throw new RuntimeException("Unable to obtain LocalDateTime from TemporalAccessor: " + temporalAccessor + " of type " + temporalAccessor.getClass().getName(), e10);
            }
        }
        return ((n) temporalAccessor).f31628a;
    }

    public LocalDateTime(LocalDate localDate, LocalTime localTime) {
        this.f31510a = localDate;
        this.f31511b = localTime;
    }

    public final LocalDateTime G(LocalDate localDate, LocalTime localTime) {
        return (this.f31510a == localDate && this.f31511b == localTime) ? this : new LocalDateTime(localDate, localTime);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final boolean j(j$.time.temporal.n nVar) {
        if (!(nVar instanceof j$.time.temporal.a)) {
            return nVar != null && nVar.r(this);
        }
        j$.time.temporal.a aVar = (j$.time.temporal.a) nVar;
        return aVar.isDateBased() || aVar.F();
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final r i(j$.time.temporal.n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            return ((j$.time.temporal.a) nVar).F() ? this.f31511b.i(nVar) : this.f31510a.i(nVar);
        }
        return nVar.t(this);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final int g(j$.time.temporal.n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            return ((j$.time.temporal.a) nVar).F() ? this.f31511b.g(nVar) : this.f31510a.g(nVar);
        }
        return super.g(nVar);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final long m(j$.time.temporal.n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            return ((j$.time.temporal.a) nVar).F() ? this.f31511b.m(nVar) : this.f31510a.m(nVar);
        }
        return nVar.B(this);
    }

    @Override // j$.time.chrono.c
    public final ChronoLocalDate l() {
        return this.f31510a;
    }

    @Override // j$.time.chrono.c
    public final LocalTime e() {
        return this.f31511b;
    }

    @Override // j$.time.temporal.k
    /* renamed from: H */
    public final LocalDateTime c(j$.time.temporal.l lVar) {
        if (lVar instanceof LocalDate) {
            return G((LocalDate) lVar, this.f31511b);
        }
        if (lVar instanceof LocalTime) {
            return G(this.f31510a, (LocalTime) lVar);
        }
        if (lVar instanceof LocalDateTime) {
            return (LocalDateTime) lVar;
        }
        return (LocalDateTime) lVar.d(this);
    }

    @Override // j$.time.temporal.k
    /* renamed from: F */
    public final LocalDateTime b(long j10, j$.time.temporal.n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            if (((j$.time.temporal.a) nVar).F()) {
                return G(this.f31510a, this.f31511b.b(j10, nVar));
            }
            return G(this.f31510a.b(j10, nVar), this.f31511b);
        }
        return (LocalDateTime) nVar.C(this, j10);
    }

    @Override // j$.time.temporal.k
    /* renamed from: C */
    public final LocalDateTime h(long j10, p pVar) {
        if (!(pVar instanceof j$.time.temporal.b)) {
            return (LocalDateTime) pVar.r(this, j10);
        }
        switch (e.f31545a[((j$.time.temporal.b) pVar).ordinal()]) {
            case 1:
                return E(this.f31510a, 0L, 0L, 0L, j10);
            case 2:
                LocalDateTime G = G(this.f31510a.F(j10 / 86400000000L), this.f31511b);
                return G.E(G.f31510a, 0L, 0L, 0L, (j10 % 86400000000L) * 1000);
            case 3:
                LocalDateTime G2 = G(this.f31510a.F(j10 / 86400000), this.f31511b);
                return G2.E(G2.f31510a, 0L, 0L, 0L, (j10 % 86400000) * 1000000);
            case 4:
                return E(this.f31510a, 0L, 0L, j10, 0L);
            case 5:
                return E(this.f31510a, 0L, j10, 0L, 0L);
            case 6:
                return E(this.f31510a, j10, 0L, 0L, 0L);
            case 7:
                LocalDateTime G3 = G(this.f31510a.F(j10 / 256), this.f31511b);
                return G3.E(G3.f31510a, (j10 % 256) * 12, 0L, 0L, 0L);
            default:
                return G(this.f31510a.p(j10, pVar), this.f31511b);
        }
    }

    public final LocalDateTime E(LocalDate localDate, long j10, long j11, long j12, long j13) {
        if ((j10 | j11 | j12 | j13) == 0) {
            return G(localDate, this.f31511b);
        }
        long j14 = 1;
        long G = this.f31511b.G();
        long j15 = ((((j10 % 24) * 3600000000000L) + ((j11 % 1440) * 60000000000L) + ((j12 % 86400) * 1000000000) + (j13 % 86400000000000L)) * j14) + G;
        long floorDiv = Math.floorDiv(j15, 86400000000000L) + (((j10 / 24) + (j11 / 1440) + (j12 / 86400) + (j13 / 86400000000000L)) * j14);
        long floorMod = Math.floorMod(j15, 86400000000000L);
        return G(localDate.F(floorDiv), floorMod == G ? this.f31511b : LocalTime.x(floorMod));
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final Object a(TemporalQuery temporalQuery) {
        if (temporalQuery == o.f31650f) {
            return this.f31510a;
        }
        return super.a(temporalQuery);
    }

    public String format(DateTimeFormatter dateTimeFormatter) {
        Objects.requireNonNull(dateTimeFormatter, "formatter");
        return dateTimeFormatter.a(this);
    }

    @Override // j$.time.chrono.c, java.lang.Comparable
    /* renamed from: A */
    public final int compareTo(j$.time.chrono.c cVar) {
        if (cVar instanceof LocalDateTime) {
            return r((LocalDateTime) cVar);
        }
        return super.compareTo(cVar);
    }

    public final int r(LocalDateTime localDateTime) {
        int r10 = this.f31510a.r(localDateTime.f31510a);
        return r10 == 0 ? this.f31511b.compareTo(localDateTime.f31511b) : r10;
    }

    public final boolean w(j$.time.chrono.c cVar) {
        if (cVar instanceof LocalDateTime) {
            return r((LocalDateTime) cVar) < 0;
        }
        int i10 = (this.f31510a.toEpochDay() > cVar.l().toEpochDay() ? 1 : (this.f31510a.toEpochDay() == cVar.l().toEpochDay() ? 0 : -1));
        if (i10 >= 0) {
            return i10 == 0 && this.f31511b.G() < cVar.e().G();
        }
        return true;
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof LocalDateTime) {
            LocalDateTime localDateTime = (LocalDateTime) obj;
            if (this.f31510a.equals(localDateTime.f31510a) && this.f31511b.equals(localDateTime.f31511b)) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        return this.f31510a.hashCode() ^ this.f31511b.hashCode();
    }

    public final String toString() {
        return this.f31510a.toString() + 'T' + this.f31511b.toString();
    }
}
