package j$.time.chrono;

import j$.time.DateTimeException;
import j$.time.LocalTime;
import j$.time.temporal.TemporalQuery;
import j$.time.temporal.l;
import j$.time.temporal.n;
import j$.time.temporal.o;
import j$.time.temporal.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public interface ChronoLocalDate extends j$.time.temporal.k, l, Comparable<ChronoLocalDate> {
    boolean equals(Object obj);

    j f();

    int hashCode();

    String toString();

    default c z(LocalTime localTime) {
        return new e(this, localTime);
    }

    @Override // j$.time.temporal.TemporalAccessor
    default boolean j(n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            return ((j$.time.temporal.a) nVar).isDateBased();
        }
        return nVar != null && nVar.r(this);
    }

    @Override // j$.time.temporal.k
    /* renamed from: k */
    default ChronoLocalDate c(l lVar) {
        f();
        return b.r(k.f29416a, lVar.d(this));
    }

    @Override // j$.time.temporal.k
    default ChronoLocalDate b(long j10, n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            throw new DateTimeException("Unsupported field: " + nVar);
        }
        f();
        return b.r(k.f29416a, nVar.C(this, j10));
    }

    default ChronoLocalDate u(j$.time.h hVar) {
        f();
        return b.r(k.f29416a, hVar.a(this));
    }

    @Override // j$.time.temporal.k
    /* renamed from: p */
    default ChronoLocalDate h(long j10, p pVar) {
        if (pVar instanceof j$.time.temporal.b) {
            throw new DateTimeException("Unsupported unit: " + pVar);
        }
        f();
        return b.r(k.f29416a, pVar.r(this, j10));
    }

    @Override // j$.time.temporal.TemporalAccessor
    default Object a(TemporalQuery temporalQuery) {
        if (temporalQuery == o.f29517a || temporalQuery == o.f29521e || temporalQuery == o.f29520d || temporalQuery == o.f29523g) {
            return null;
        }
        if (temporalQuery == o.f29518b) {
            f();
            return k.f29416a;
        } else if (temporalQuery == o.f29519c) {
            return j$.time.temporal.b.DAYS;
        } else {
            return temporalQuery.queryFrom(this);
        }
    }

    @Override // j$.time.temporal.l
    default j$.time.temporal.k d(j$.time.temporal.k kVar) {
        return kVar.b(toEpochDay(), j$.time.temporal.a.EPOCH_DAY);
    }

    default long toEpochDay() {
        return m(j$.time.temporal.a.EPOCH_DAY);
    }

    @Override // java.lang.Comparable
    default int compareTo(ChronoLocalDate chronoLocalDate) {
        int compare = Long.compare(toEpochDay(), chronoLocalDate.toEpochDay());
        if (compare == 0) {
            f();
            k kVar = k.f29416a;
            chronoLocalDate.f();
            return 0;
        }
        return compare;
    }
}
