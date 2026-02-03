package j$.time.temporal;

import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public enum a implements n {
    NANO_OF_SECOND("NanoOfSecond", r.e(0, 999999999)),
    NANO_OF_DAY("NanoOfDay", r.e(0, 86399999999999L)),
    MICRO_OF_SECOND("MicroOfSecond", r.e(0, 999999)),
    MICRO_OF_DAY("MicroOfDay", r.e(0, 86399999999L)),
    MILLI_OF_SECOND("MilliOfSecond", r.e(0, 999)),
    MILLI_OF_DAY("MilliOfDay", r.e(0, 86399999)),
    SECOND_OF_MINUTE("SecondOfMinute", r.e(0, 59), 0),
    SECOND_OF_DAY("SecondOfDay", r.e(0, 86399)),
    MINUTE_OF_HOUR("MinuteOfHour", r.e(0, 59), 0),
    MINUTE_OF_DAY("MinuteOfDay", r.e(0, 1439)),
    HOUR_OF_AMPM("HourOfAmPm", r.e(0, 11)),
    CLOCK_HOUR_OF_AMPM("ClockHourOfAmPm", r.e(1, 12)),
    HOUR_OF_DAY("HourOfDay", r.e(0, 23), 0),
    CLOCK_HOUR_OF_DAY("ClockHourOfDay", r.e(1, 24)),
    AMPM_OF_DAY("AmPmOfDay", r.e(0, 1), 0),
    DAY_OF_WEEK("DayOfWeek", r.e(1, 7), 0),
    ALIGNED_DAY_OF_WEEK_IN_MONTH("AlignedDayOfWeekInMonth", r.e(1, 7)),
    ALIGNED_DAY_OF_WEEK_IN_YEAR("AlignedDayOfWeekInYear", r.e(1, 7)),
    DAY_OF_MONTH("DayOfMonth", r.f(28, 31), 0),
    DAY_OF_YEAR("DayOfYear", r.f(365, 366)),
    EPOCH_DAY("EpochDay", r.e(-365249999634L, 365249999634L)),
    ALIGNED_WEEK_OF_MONTH("AlignedWeekOfMonth", r.f(4, 5)),
    ALIGNED_WEEK_OF_YEAR("AlignedWeekOfYear", r.e(1, 53)),
    MONTH_OF_YEAR("MonthOfYear", r.e(1, 12), 0),
    PROLEPTIC_MONTH("ProlepticMonth", r.e(-11999999988L, 11999999999L)),
    YEAR_OF_ERA("YearOfEra", r.f(999999999, 1000000000)),
    YEAR("Year", r.e(-999999999, 999999999), 0),
    ERA("Era", r.e(0, 1), 0),
    INSTANT_SECONDS("InstantSeconds", r.e(Long.MIN_VALUE, LongCompanionObject.MAX_VALUE)),
    OFFSET_SECONDS("OffsetSeconds", r.e(-64800, 64800));
    

    /* renamed from: a  reason: collision with root package name */
    public final String f31182a;

    /* renamed from: b  reason: collision with root package name */
    public final r f31183b;

    static {
        b bVar = b.NANOS;
    }

    a(String str, r rVar) {
        this.f31182a = str;
        this.f31183b = rVar;
    }

    a(String str, r rVar, int i10) {
        this.f31182a = str;
        this.f31183b = rVar;
    }

    public final void E(long j10) {
        this.f31183b.b(j10, this);
    }

    @Override // j$.time.temporal.n
    public final r x() {
        return this.f31183b;
    }

    @Override // j$.time.temporal.n
    public final boolean isDateBased() {
        return ordinal() >= DAY_OF_WEEK.ordinal() && ordinal() <= ERA.ordinal();
    }

    public final boolean F() {
        return ordinal() < DAY_OF_WEEK.ordinal();
    }

    @Override // j$.time.temporal.n
    public final boolean r(TemporalAccessor temporalAccessor) {
        return temporalAccessor.j(this);
    }

    @Override // j$.time.temporal.n
    public final r t(TemporalAccessor temporalAccessor) {
        return temporalAccessor.i(this);
    }

    @Override // j$.time.temporal.n
    public final long B(TemporalAccessor temporalAccessor) {
        return temporalAccessor.m(this);
    }

    @Override // j$.time.temporal.n
    public final k C(k kVar, long j10) {
        return kVar.b(j10, this);
    }

    @Override // java.lang.Enum
    public final String toString() {
        return this.f31182a;
    }
}
