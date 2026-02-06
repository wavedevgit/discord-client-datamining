package j$.time.chrono;

import j$.time.LocalTime;
import j$.time.ZoneOffset;
import j$.time.temporal.TemporalQuery;
import j$.time.temporal.l;
import j$.time.temporal.o;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public interface c extends j$.time.temporal.k, l, Comparable {
    LocalTime e();

    ChronoLocalDate l();

    g v(j$.time.j jVar);

    @Override // j$.time.temporal.TemporalAccessor
    default Object a(TemporalQuery temporalQuery) {
        if (temporalQuery == o.f29517a || temporalQuery == o.f29521e || temporalQuery == o.f29520d) {
            return null;
        }
        if (temporalQuery == o.f29523g) {
            return e();
        }
        if (temporalQuery == o.f29518b) {
            l().f();
            return k.f29416a;
        } else if (temporalQuery == o.f29519c) {
            return j$.time.temporal.b.NANOS;
        } else {
            return temporalQuery.queryFrom(this);
        }
    }

    @Override // j$.time.temporal.l
    default j$.time.temporal.k d(j$.time.temporal.k kVar) {
        return kVar.b(l().toEpochDay(), j$.time.temporal.a.EPOCH_DAY).b(e().G(), j$.time.temporal.a.NANO_OF_DAY);
    }

    default long q(ZoneOffset zoneOffset) {
        Objects.requireNonNull(zoneOffset, "offset");
        return ((l().toEpochDay() * 86400) + e().toSecondOfDay()) - zoneOffset.getTotalSeconds();
    }

    @Override // java.lang.Comparable
    /* renamed from: A */
    default int compareTo(c cVar) {
        int compareTo = l().compareTo(cVar.l());
        if (compareTo == 0 && (compareTo = e().compareTo(cVar.e())) == 0) {
            l().f();
            k kVar = k.f29416a;
            cVar.l().f();
            return 0;
        }
        return compareTo;
    }
}
