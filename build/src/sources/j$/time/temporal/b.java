package j$.time.temporal;

import j$.time.Duration;
import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public enum b implements p {
    NANOS("Nanos"),
    MICROS("Micros"),
    MILLIS("Millis"),
    SECONDS("Seconds"),
    MINUTES("Minutes"),
    HOURS("Hours"),
    HALF_DAYS("HalfDays"),
    DAYS("Days"),
    WEEKS("Weeks"),
    MONTHS("Months"),
    YEARS("Years"),
    DECADES("Decades"),
    CENTURIES("Centuries"),
    MILLENNIA("Millennia"),
    ERAS("Eras"),
    FOREVER("Forever");
    

    /* renamed from: a  reason: collision with root package name */
    public final String f29507a;

    static {
        Duration.t(1L);
        Duration.t(1000L);
        Duration.t(1000000L);
        Duration.r(1L, 0);
        Duration.r(60L, 0);
        Duration.r(3600L, 0);
        Duration.r(43200L, 0);
        Duration.r(86400L, 0);
        Duration.r(604800L, 0);
        Duration.r(2629746L, 0);
        Duration.r(31556952L, 0);
        Duration.r(315569520L, 0);
        Duration.r(3155695200L, 0);
        Duration.r(31556952000L, 0);
        Duration.r(31556952000000000L, 0);
        Duration.r(Math.addExact((long) LongCompanionObject.MAX_VALUE, Math.floorDiv(999999999L, 1000000000L)), (int) Math.floorMod(999999999L, 1000000000L));
    }

    b(String str) {
        this.f29507a = str;
    }

    @Override // j$.time.temporal.p
    public final k r(k kVar, long j10) {
        return kVar.h(j10, this);
    }

    @Override // java.lang.Enum
    public final String toString() {
        return this.f29507a;
    }
}
