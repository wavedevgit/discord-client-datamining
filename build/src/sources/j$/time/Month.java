package j$.time;

import j$.time.temporal.TemporalAccessor;
import j$.time.temporal.TemporalQuery;
import j$.time.temporal.o;
import j$.time.temporal.r;
import java.util.Objects;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class Month implements TemporalAccessor, j$.time.temporal.l {
    public static final Month APRIL;
    public static final Month AUGUST;
    public static final Month DECEMBER;
    public static final Month FEBRUARY;
    public static final Month JANUARY;
    public static final Month JULY;
    public static final Month JUNE;
    public static final Month MARCH;
    public static final Month MAY;
    public static final Month NOVEMBER;
    public static final Month OCTOBER;
    public static final Month SEPTEMBER;

    /* renamed from: a  reason: collision with root package name */
    public static final Month[] f31272a;

    /* renamed from: b  reason: collision with root package name */
    public static final /* synthetic */ Month[] f31273b;

    public static Month valueOf(String str) {
        return (Month) Enum.valueOf(Month.class, str);
    }

    public static Month[] values() {
        return (Month[]) f31273b.clone();
    }

    /* JADX WARN: Type inference failed for: r0v0, types: [j$.time.Month, java.lang.Enum] */
    /* JADX WARN: Type inference failed for: r10v2, types: [j$.time.Month, java.lang.Enum] */
    /* JADX WARN: Type inference failed for: r11v2, types: [j$.time.Month, java.lang.Enum] */
    /* JADX WARN: Type inference failed for: r1v1, types: [j$.time.Month, java.lang.Enum] */
    /* JADX WARN: Type inference failed for: r2v2, types: [j$.time.Month, java.lang.Enum] */
    /* JADX WARN: Type inference failed for: r3v2, types: [j$.time.Month, java.lang.Enum] */
    /* JADX WARN: Type inference failed for: r4v2, types: [j$.time.Month, java.lang.Enum] */
    /* JADX WARN: Type inference failed for: r5v2, types: [j$.time.Month, java.lang.Enum] */
    /* JADX WARN: Type inference failed for: r6v2, types: [j$.time.Month, java.lang.Enum] */
    /* JADX WARN: Type inference failed for: r7v2, types: [j$.time.Month, java.lang.Enum] */
    /* JADX WARN: Type inference failed for: r8v2, types: [j$.time.Month, java.lang.Enum] */
    /* JADX WARN: Type inference failed for: r9v2, types: [j$.time.Month, java.lang.Enum] */
    static {
        ?? r02 = new Enum("JANUARY", 0);
        JANUARY = r02;
        ?? r12 = new Enum("FEBRUARY", 1);
        FEBRUARY = r12;
        ?? r22 = new Enum("MARCH", 2);
        MARCH = r22;
        ?? r32 = new Enum("APRIL", 3);
        APRIL = r32;
        ?? r42 = new Enum("MAY", 4);
        MAY = r42;
        ?? r52 = new Enum("JUNE", 5);
        JUNE = r52;
        ?? r62 = new Enum("JULY", 6);
        JULY = r62;
        ?? r72 = new Enum("AUGUST", 7);
        AUGUST = r72;
        ?? r82 = new Enum("SEPTEMBER", 8);
        SEPTEMBER = r82;
        ?? r92 = new Enum("OCTOBER", 9);
        OCTOBER = r92;
        ?? r10 = new Enum("NOVEMBER", 10);
        NOVEMBER = r10;
        ?? r11 = new Enum("DECEMBER", 11);
        DECEMBER = r11;
        f31273b = new Month[]{r02, r12, r22, r32, r42, r52, r62, r72, r82, r92, r10, r11};
        f31272a = values();
    }

    @Override // j$.time.temporal.l
    public final j$.time.temporal.k d(j$.time.temporal.k kVar) {
        Objects.requireNonNull(kVar, "temporal");
        Object obj = (j$.time.chrono.j) kVar.a(o.f31400b);
        if (obj == null) {
            obj = j$.time.chrono.k.f31296a;
        }
        if (!((j$.time.chrono.a) obj).equals(j$.time.chrono.k.f31296a)) {
            throw new DateTimeException("Adjustment only supported on ISO date-time");
        }
        return kVar.b(ordinal() + 1, j$.time.temporal.a.MONTH_OF_YEAR);
    }

    public static Month w(int i10) {
        if (i10 < 1 || i10 > 12) {
            throw new DateTimeException("Invalid value for MonthOfYear: " + i10);
        }
        return f31272a[i10 - 1];
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final boolean j(j$.time.temporal.n nVar) {
        return nVar instanceof j$.time.temporal.a ? nVar == j$.time.temporal.a.MONTH_OF_YEAR : nVar != null && nVar.r(this);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final r i(j$.time.temporal.n nVar) {
        if (nVar == j$.time.temporal.a.MONTH_OF_YEAR) {
            return nVar.x();
        }
        return super.i(nVar);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final int g(j$.time.temporal.n nVar) {
        if (nVar == j$.time.temporal.a.MONTH_OF_YEAR) {
            return ordinal() + 1;
        }
        return super.g(nVar);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final long m(j$.time.temporal.n nVar) {
        if (nVar == j$.time.temporal.a.MONTH_OF_YEAR) {
            return ordinal() + 1;
        }
        if (nVar instanceof j$.time.temporal.a) {
            throw new DateTimeException("Unsupported field: " + nVar);
        }
        return nVar.B(this);
    }

    public final int t(boolean z10) {
        int i10 = g.f31374a[ordinal()];
        return i10 != 1 ? (i10 == 2 || i10 == 3 || i10 == 4 || i10 == 5) ? 30 : 31 : z10 ? 29 : 28;
    }

    public final int r(boolean z10) {
        switch (g.f31374a[ordinal()]) {
            case 1:
                return 32;
            case 2:
                return (z10 ? 1 : 0) + 91;
            case 3:
                return (z10 ? 1 : 0) + 152;
            case 4:
                return (z10 ? 1 : 0) + 244;
            case 5:
                return (z10 ? 1 : 0) + 305;
            case 6:
                return 1;
            case 7:
                return (z10 ? 1 : 0) + 60;
            case 8:
                return (z10 ? 1 : 0) + 121;
            case 9:
                return (z10 ? 1 : 0) + 182;
            case 10:
                return (z10 ? 1 : 0) + 213;
            case 11:
                return (z10 ? 1 : 0) + 274;
            default:
                return (z10 ? 1 : 0) + 335;
        }
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final Object a(TemporalQuery temporalQuery) {
        if (temporalQuery == o.f31400b) {
            return j$.time.chrono.k.f31296a;
        }
        if (temporalQuery == o.f31401c) {
            return j$.time.temporal.b.MONTHS;
        }
        return super.a(temporalQuery);
    }
}
