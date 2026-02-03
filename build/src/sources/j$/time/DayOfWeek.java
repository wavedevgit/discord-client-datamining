package j$.time;

import j$.time.temporal.TemporalAccessor;
import j$.time.temporal.TemporalQuery;
import j$.time.temporal.o;
import j$.time.temporal.r;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class DayOfWeek implements TemporalAccessor, j$.time.temporal.l {
    public static final DayOfWeek FRIDAY;
    public static final DayOfWeek MONDAY;
    public static final DayOfWeek SATURDAY;
    public static final DayOfWeek SUNDAY;
    public static final DayOfWeek THURSDAY;
    public static final DayOfWeek TUESDAY;
    public static final DayOfWeek WEDNESDAY;

    /* renamed from: a  reason: collision with root package name */
    public static final DayOfWeek[] f31050a;

    /* renamed from: b  reason: collision with root package name */
    public static final /* synthetic */ DayOfWeek[] f31051b;

    public static DayOfWeek valueOf(String str) {
        return (DayOfWeek) Enum.valueOf(DayOfWeek.class, str);
    }

    public static DayOfWeek[] values() {
        return (DayOfWeek[]) f31051b.clone();
    }

    /* JADX WARN: Type inference failed for: r0v0, types: [j$.time.DayOfWeek, java.lang.Enum] */
    /* JADX WARN: Type inference failed for: r1v1, types: [j$.time.DayOfWeek, java.lang.Enum] */
    /* JADX WARN: Type inference failed for: r2v2, types: [j$.time.DayOfWeek, java.lang.Enum] */
    /* JADX WARN: Type inference failed for: r3v2, types: [j$.time.DayOfWeek, java.lang.Enum] */
    /* JADX WARN: Type inference failed for: r4v2, types: [j$.time.DayOfWeek, java.lang.Enum] */
    /* JADX WARN: Type inference failed for: r5v2, types: [j$.time.DayOfWeek, java.lang.Enum] */
    /* JADX WARN: Type inference failed for: r6v2, types: [j$.time.DayOfWeek, java.lang.Enum] */
    static {
        ?? r02 = new Enum("MONDAY", 0);
        MONDAY = r02;
        ?? r12 = new Enum("TUESDAY", 1);
        TUESDAY = r12;
        ?? r22 = new Enum("WEDNESDAY", 2);
        WEDNESDAY = r22;
        ?? r32 = new Enum("THURSDAY", 3);
        THURSDAY = r32;
        ?? r42 = new Enum("FRIDAY", 4);
        FRIDAY = r42;
        ?? r52 = new Enum("SATURDAY", 5);
        SATURDAY = r52;
        ?? r62 = new Enum("SUNDAY", 6);
        SUNDAY = r62;
        f31051b = new DayOfWeek[]{r02, r12, r22, r32, r42, r52, r62};
        f31050a = values();
    }

    public static DayOfWeek t(int i10) {
        if (i10 < 1 || i10 > 7) {
            throw new DateTimeException("Invalid value for DayOfWeek: " + i10);
        }
        return f31050a[i10 - 1];
    }

    public final int r() {
        return ordinal() + 1;
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final boolean j(j$.time.temporal.n nVar) {
        return nVar instanceof j$.time.temporal.a ? nVar == j$.time.temporal.a.DAY_OF_WEEK : nVar != null && nVar.r(this);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final r i(j$.time.temporal.n nVar) {
        if (nVar == j$.time.temporal.a.DAY_OF_WEEK) {
            return nVar.x();
        }
        return super.i(nVar);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final int g(j$.time.temporal.n nVar) {
        if (nVar == j$.time.temporal.a.DAY_OF_WEEK) {
            return r();
        }
        return super.g(nVar);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final long m(j$.time.temporal.n nVar) {
        if (nVar == j$.time.temporal.a.DAY_OF_WEEK) {
            return r();
        }
        if (nVar instanceof j$.time.temporal.a) {
            throw new DateTimeException("Unsupported field: " + nVar);
        }
        return nVar.B(this);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final Object a(TemporalQuery temporalQuery) {
        if (temporalQuery == o.f31197c) {
            return j$.time.temporal.b.DAYS;
        }
        return super.a(temporalQuery);
    }

    @Override // j$.time.temporal.l
    public final j$.time.temporal.k d(j$.time.temporal.k kVar) {
        return kVar.b(r(), j$.time.temporal.a.DAY_OF_WEEK);
    }
}
