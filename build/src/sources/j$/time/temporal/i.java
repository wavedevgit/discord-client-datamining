package j$.time.temporal;

import j$.time.Duration;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public enum i implements p {
    WEEK_BASED_YEARS("WeekBasedYears"),
    QUARTER_YEARS("QuarterYears");
    

    /* renamed from: a  reason: collision with root package name */
    public final String f29560a;

    static {
        Duration.r(31556952L, 0);
        Duration.r(7889238L, 0);
    }

    i(String str) {
        this.f29560a = str;
    }

    @Override // j$.time.temporal.p
    public final k r(k kVar, long j10) {
        int i10 = c.f29556a[ordinal()];
        if (i10 == 1) {
            h hVar = j.f29563c;
            return kVar.b(Math.addExact(kVar.g(hVar), j10), hVar);
        } else if (i10 == 2) {
            return kVar.h(j10 / 256, b.YEARS).h((j10 % 256) * 3, b.MONTHS);
        } else {
            throw new IllegalStateException("Unreachable");
        }
    }

    @Override // java.lang.Enum
    public final String toString() {
        return this.f29560a;
    }
}
