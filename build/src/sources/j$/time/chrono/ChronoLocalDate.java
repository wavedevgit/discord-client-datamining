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
        return b.r(k.f31558a, lVar.d(this));
    }

    @Override // j$.time.temporal.k
    default ChronoLocalDate b(long j10, n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            throw new DateTimeException("Unsupported field: " + nVar);
        }
        f();
        return b.r(k.f31558a, nVar.C(this, j10));
    }

    default ChronoLocalDate u(j$.time.i iVar) {
        f();
        return b.r(k.f31558a, iVar.a(this));
    }

    @Override // j$.time.temporal.k
    /* renamed from: p */
    default ChronoLocalDate h(long j10, p pVar) {
        if (pVar instanceof j$.time.temporal.b) {
            throw new DateTimeException("Unsupported unit: " + pVar);
        }
        f();
        return b.r(k.f31558a, pVar.r(this, j10));
    }

    @Override // j$.time.temporal.TemporalAccessor
    default Object a(TemporalQuery temporalQuery) {
        if (temporalQuery == o.f31661a || temporalQuery == o.f31665e || temporalQuery == o.f31664d || temporalQuery == o.f31667g) {
            return null;
        }
        if (temporalQuery == o.f31662b) {
            f();
            return k.f31558a;
        } else if (temporalQuery == o.f31663c) {
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
            k kVar = k.f31558a;
            chronoLocalDate.f();
            return 0;
        }
        return compare;
    }
}
