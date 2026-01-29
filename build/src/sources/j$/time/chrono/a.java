package j$.time.chrono;

import j$.time.DateTimeException;
import j$.time.DayOfWeek;
import j$.time.LocalDate;
import j$.time.temporal.m;
import java.util.Locale;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public abstract class a implements j {
    @Override // java.lang.Comparable
    public final int compareTo(Object obj) {
        ((j) obj).getClass();
        return 0;
    }

    static {
        new ConcurrentHashMap();
        new ConcurrentHashMap();
        new Locale("ja", "JP", "JP");
    }

    public static ChronoLocalDate t(LocalDate localDate, long j10, long j11, long j12) {
        long j13;
        LocalDate p10 = localDate.p(j10, j$.time.temporal.b.MONTHS);
        j$.time.temporal.b bVar = j$.time.temporal.b.WEEKS;
        LocalDate p11 = p10.p(j11, bVar);
        if (j12 <= 7) {
            if (j12 < 1) {
                p11 = p11.p(Math.subtractExact(j12, 7L) / 7, bVar);
                j13 = (j12 + 6) % 7;
            }
            return p11.k(new m(DayOfWeek.t((int) j12).r()));
        }
        long j14 = j12 - 1;
        p11 = p11.p(j14 / 7, bVar);
        j13 = j14 % 7;
        j12 = j13 + 1;
        return p11.k(new m(DayOfWeek.t((int) j12).r()));
    }

    public static void r(Map map, j$.time.temporal.a aVar, long j10) {
        Long l10 = (Long) map.get(aVar);
        if (l10 != null && l10.longValue() != j10) {
            throw new DateTimeException("Conflict found: " + aVar + " " + l10 + " differs from " + aVar + " " + j10);
        }
        map.put(aVar, Long.valueOf(j10));
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a) {
            a aVar = (a) obj;
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return getClass().hashCode() ^ 72805;
    }

    public final String toString() {
        return "ISO";
    }
}
