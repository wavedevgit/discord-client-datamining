package j$.time.temporal;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public enum i implements p {
    WEEK_BASED_YEARS("WeekBasedYears"),
    QUARTER_YEARS("QuarterYears");
    

    /* renamed from: a  reason: collision with root package name */
    public final String f30539a;

    static {
        j$.time.a.r(31556952L, 0);
        j$.time.a.r(7889238L, 0);
    }

    i(String str) {
        this.f30539a = str;
    }

    @Override // j$.time.temporal.p
    public final k r(k kVar, long j10) {
        int i10 = c.f30535a[ordinal()];
        if (i10 == 1) {
            h hVar = j.f30542c;
            return kVar.b(Math.addExact(kVar.g(hVar), j10), hVar);
        } else if (i10 == 2) {
            return kVar.h(j10 / 256, b.YEARS).h((j10 % 256) * 3, b.MONTHS);
        } else {
            throw new IllegalStateException("Unreachable");
        }
    }

    @Override // java.lang.Enum
    public final String toString() {
        return this.f30539a;
    }
}
