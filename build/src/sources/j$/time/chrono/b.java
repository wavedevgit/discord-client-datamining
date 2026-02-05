package j$.time.chrono;

import j$.time.temporal.l;
import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public abstract class b implements ChronoLocalDate, j$.time.temporal.k, l, Serializable {
    public static ChronoLocalDate r(j jVar, j$.time.temporal.k kVar) {
        ChronoLocalDate chronoLocalDate = (ChronoLocalDate) kVar;
        chronoLocalDate.f();
        if (((a) jVar).equals(k.f30441a)) {
            return chronoLocalDate;
        }
        chronoLocalDate.f();
        throw new ClassCastException("Chronology mismatch, expected: ISO, actual: ISO");
    }
}
