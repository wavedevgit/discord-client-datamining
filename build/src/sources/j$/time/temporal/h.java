package j$.time.temporal;

import j$.time.DateTimeException;
import j$.time.DayOfWeek;
import j$.time.LocalDate;
import j$.time.format.u;
import j$.time.format.v;
import java.util.Map;
import java.util.Objects;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public abstract class h implements n {
    public static final h DAY_OF_QUARTER;
    public static final h QUARTER_OF_YEAR;
    public static final h WEEK_BASED_YEAR;
    public static final h WEEK_OF_WEEK_BASED_YEAR;

    /* renamed from: a  reason: collision with root package name */
    public static final int[] f29557a;

    /* renamed from: b  reason: collision with root package name */
    public static final /* synthetic */ h[] f29558b;

    @Override // j$.time.temporal.n
    public final boolean isDateBased() {
        return true;
    }

    public static boolean I(TemporalAccessor temporalAccessor) {
        Objects.requireNonNull(temporalAccessor, "temporal");
        Object obj = (j$.time.chrono.j) temporalAccessor.a(o.f29566b);
        if (obj == null) {
            obj = j$.time.chrono.k.f29464a;
        }
        return ((j$.time.chrono.a) obj).equals(j$.time.chrono.k.f29464a);
    }

    public static h valueOf(String str) {
        return (h) Enum.valueOf(h.class, str);
    }

    public static h[] values() {
        return (h[]) f29558b.clone();
    }

    static {
        h hVar = new h() { // from class: j$.time.temporal.d
            @Override // j$.time.temporal.n
            public final r x() {
                return r.f(90L, 92L);
            }

            @Override // j$.time.temporal.n
            public final boolean r(TemporalAccessor temporalAccessor) {
                return temporalAccessor.j(a.DAY_OF_YEAR) && temporalAccessor.j(a.MONTH_OF_YEAR) && temporalAccessor.j(a.YEAR) && h.I(temporalAccessor);
            }

            @Override // j$.time.temporal.h, j$.time.temporal.n
            public final r t(TemporalAccessor temporalAccessor) {
                if (!r(temporalAccessor)) {
                    throw new DateTimeException("Unsupported field: DayOfQuarter");
                }
                long m10 = temporalAccessor.m(h.QUARTER_OF_YEAR);
                if (m10 == 1) {
                    long m11 = temporalAccessor.m(a.YEAR);
                    j$.time.chrono.k kVar = j$.time.chrono.k.f29464a;
                    return j$.time.chrono.k.w(m11) ? r.e(1L, 91L) : r.e(1L, 90L);
                } else if (m10 == 2) {
                    return r.e(1L, 91L);
                } else {
                    if (m10 == 3 || m10 == 4) {
                        return r.e(1L, 92L);
                    }
                    return x();
                }
            }

            @Override // j$.time.temporal.n
            public final long B(TemporalAccessor temporalAccessor) {
                if (!r(temporalAccessor)) {
                    throw new DateTimeException("Unsupported field: DayOfQuarter");
                }
                int g10 = temporalAccessor.g(a.DAY_OF_YEAR);
                int g11 = temporalAccessor.g(a.MONTH_OF_YEAR);
                long m10 = temporalAccessor.m(a.YEAR);
                int i10 = (g11 - 1) / 3;
                j$.time.chrono.k kVar = j$.time.chrono.k.f29464a;
                return g10 - h.f29557a[i10 + (j$.time.chrono.k.w(m10) ? 4 : 0)];
            }

            @Override // j$.time.temporal.n
            public final k C(k kVar, long j10) {
                long B = B(kVar);
                x().b(j10, this);
                a aVar = a.DAY_OF_YEAR;
                return kVar.b((j10 - B) + kVar.m(aVar), aVar);
            }

            @Override // j$.time.temporal.n
            public final TemporalAccessor w(Map map, u uVar, v vVar) {
                LocalDate of2;
                long j10;
                a aVar = a.YEAR;
                Long l10 = (Long) map.get(aVar);
                n nVar = h.QUARTER_OF_YEAR;
                Long l11 = (Long) map.get(nVar);
                if (l10 == null || l11 == null) {
                    return null;
                }
                int a10 = aVar.f29553b.a(l10.longValue(), aVar);
                long longValue = ((Long) map.get(h.DAY_OF_QUARTER)).longValue();
                if (h.I(uVar)) {
                    if (vVar == v.LENIENT) {
                        of2 = LocalDate.of(a10, 1, 1).plusMonths(Math.multiplyExact(Math.subtractExact(l11.longValue(), 1L), 3L));
                        j10 = Math.subtractExact(longValue, 1L);
                    } else {
                        of2 = LocalDate.of(a10, ((nVar.x().a(l11.longValue(), nVar) - 1) * 3) + 1, 1);
                        if (longValue < 1 || longValue > 90) {
                            if (vVar == v.STRICT) {
                                t(of2).b(longValue, this);
                            } else {
                                x().b(longValue, this);
                            }
                        }
                        j10 = longValue - 1;
                    }
                    map.remove(this);
                    map.remove(aVar);
                    map.remove(nVar);
                    return of2.F(j10);
                }
                throw new DateTimeException("Resolve requires IsoChronology");
            }

            @Override // java.lang.Enum
            public final String toString() {
                return "DayOfQuarter";
            }
        };
        DAY_OF_QUARTER = hVar;
        h hVar2 = new h() { // from class: j$.time.temporal.e
            @Override // j$.time.temporal.n
            public final r x() {
                return r.e(1L, 4L);
            }

            @Override // j$.time.temporal.n
            public final boolean r(TemporalAccessor temporalAccessor) {
                return temporalAccessor.j(a.MONTH_OF_YEAR) && h.I(temporalAccessor);
            }

            @Override // j$.time.temporal.n
            public final long B(TemporalAccessor temporalAccessor) {
                if (!r(temporalAccessor)) {
                    throw new DateTimeException("Unsupported field: QuarterOfYear");
                }
                return (temporalAccessor.m(a.MONTH_OF_YEAR) + 2) / 3;
            }

            @Override // j$.time.temporal.n
            public final k C(k kVar, long j10) {
                long B = B(kVar);
                x().b(j10, this);
                a aVar = a.MONTH_OF_YEAR;
                return kVar.b(((j10 - B) * 3) + kVar.m(aVar), aVar);
            }

            @Override // java.lang.Enum
            public final String toString() {
                return "QuarterOfYear";
            }
        };
        QUARTER_OF_YEAR = hVar2;
        h hVar3 = new h() { // from class: j$.time.temporal.f
            @Override // j$.time.temporal.n
            public final r x() {
                return r.f(52L, 53L);
            }

            @Override // j$.time.temporal.n
            public final boolean r(TemporalAccessor temporalAccessor) {
                return temporalAccessor.j(a.EPOCH_DAY) && h.I(temporalAccessor);
            }

            @Override // j$.time.temporal.h, j$.time.temporal.n
            public final r t(TemporalAccessor temporalAccessor) {
                if (r(temporalAccessor)) {
                    return h.H(LocalDate.t(temporalAccessor));
                }
                throw new DateTimeException("Unsupported field: WeekOfWeekBasedYear");
            }

            @Override // j$.time.temporal.n
            public final long B(TemporalAccessor temporalAccessor) {
                if (!r(temporalAccessor)) {
                    throw new DateTimeException("Unsupported field: WeekOfWeekBasedYear");
                }
                return h.E(LocalDate.t(temporalAccessor));
            }

            @Override // j$.time.temporal.n
            public final k C(k kVar, long j10) {
                x().b(j10, this);
                return kVar.h(Math.subtractExact(j10, B(kVar)), b.WEEKS);
            }

            @Override // j$.time.temporal.n
            public final TemporalAccessor w(Map map, u uVar, v vVar) {
                LocalDate b10;
                long j10;
                long j11;
                n nVar = h.WEEK_BASED_YEAR;
                Long l10 = (Long) map.get(nVar);
                a aVar = a.DAY_OF_WEEK;
                Long l11 = (Long) map.get(aVar);
                if (l10 == null || l11 == null) {
                    return null;
                }
                int a10 = nVar.x().a(l10.longValue(), nVar);
                long longValue = ((Long) map.get(h.WEEK_OF_WEEK_BASED_YEAR)).longValue();
                if (h.I(uVar)) {
                    LocalDate of2 = LocalDate.of(a10, 1, 4);
                    if (vVar == v.LENIENT) {
                        long longValue2 = l11.longValue();
                        if (longValue2 > 7) {
                            long j12 = longValue2 - 1;
                            j10 = 1;
                            of2 = of2.G(j12 / 7);
                            j11 = j12 % 7;
                        } else {
                            j10 = 1;
                            if (longValue2 < 1) {
                                of2 = of2.G(Math.subtractExact(longValue2, 7L) / 7);
                                j11 = (longValue2 + 6) % 7;
                            }
                            b10 = of2.G(Math.subtractExact(longValue, j10)).b(longValue2, aVar);
                        }
                        longValue2 = j11 + j10;
                        b10 = of2.G(Math.subtractExact(longValue, j10)).b(longValue2, aVar);
                    } else {
                        int a11 = aVar.f29553b.a(l11.longValue(), aVar);
                        if (longValue < 1 || longValue > 52) {
                            if (vVar == v.STRICT) {
                                h.H(of2).b(longValue, this);
                            } else {
                                x().b(longValue, this);
                            }
                        }
                        b10 = of2.G(longValue - 1).b(a11, aVar);
                    }
                    map.remove(this);
                    map.remove(nVar);
                    map.remove(aVar);
                    return b10;
                }
                throw new DateTimeException("Resolve requires IsoChronology");
            }

            @Override // java.lang.Enum
            public final String toString() {
                return "WeekOfWeekBasedYear";
            }
        };
        WEEK_OF_WEEK_BASED_YEAR = hVar3;
        h hVar4 = new h() { // from class: j$.time.temporal.g
            @Override // j$.time.temporal.n
            public final r x() {
                return a.YEAR.f29553b;
            }

            @Override // j$.time.temporal.n
            public final boolean r(TemporalAccessor temporalAccessor) {
                return temporalAccessor.j(a.EPOCH_DAY) && h.I(temporalAccessor);
            }

            @Override // j$.time.temporal.n
            public final long B(TemporalAccessor temporalAccessor) {
                if (r(temporalAccessor)) {
                    return h.F(LocalDate.t(temporalAccessor));
                }
                throw new DateTimeException("Unsupported field: WeekBasedYear");
            }

            @Override // j$.time.temporal.n
            public final k C(k kVar, long j10) {
                a aVar;
                LocalDate of2;
                if (!r(kVar)) {
                    throw new DateTimeException("Unsupported field: WeekBasedYear");
                }
                int a10 = a.YEAR.f29553b.a(j10, h.WEEK_BASED_YEAR);
                LocalDate t10 = LocalDate.t(kVar);
                int g10 = t10.g(a.DAY_OF_WEEK);
                int E = h.E(t10);
                if (E == 53 && h.G(a10) == 52) {
                    E = 52;
                }
                return kVar.c(LocalDate.of(a10, 1, 4).F(((E - 1) * 7) + (g10 - of2.g(aVar))));
            }

            @Override // java.lang.Enum
            public final String toString() {
                return "WeekBasedYear";
            }
        };
        WEEK_BASED_YEAR = hVar4;
        f29558b = new h[]{hVar, hVar2, hVar3, hVar4};
        f29557a = new int[]{0, 90, 181, 273, 0, 91, 182, 274};
    }

    public r t(TemporalAccessor temporalAccessor) {
        return x();
    }

    public static r H(LocalDate localDate) {
        return r.e(1L, G(F(localDate)));
    }

    public static int G(int i10) {
        LocalDate of2 = LocalDate.of(i10, 1, 1);
        if (of2.getDayOfWeek() != DayOfWeek.THURSDAY) {
            return (of2.getDayOfWeek() == DayOfWeek.WEDNESDAY && of2.B()) ? 53 : 52;
        }
        return 53;
    }

    public static int E(LocalDate localDate) {
        int ordinal = localDate.getDayOfWeek().ordinal();
        int x10 = localDate.x() - 1;
        int i10 = (3 - ordinal) + x10;
        int i11 = i10 - ((i10 / 7) * 7);
        int i12 = i11 - 3;
        if (i12 < -3) {
            i12 = i11 + 4;
        }
        if (x10 >= i12) {
            int i13 = ((x10 - i12) / 7) + 1;
            if (i13 != 53 || i12 == -3 || (i12 == -2 && localDate.B())) {
                return i13;
            }
            return 1;
        }
        if (localDate.x() != 180) {
            localDate = LocalDate.C(localDate.f29428a, 180);
        }
        return (int) H(localDate.H(-1L)).f29575d;
    }

    public static int F(LocalDate localDate) {
        int year = localDate.getYear();
        int x10 = localDate.x();
        if (x10 <= 3) {
            return x10 - localDate.getDayOfWeek().ordinal() < -2 ? year - 1 : year;
        } else if (x10 >= 363) {
            return ((x10 - 363) - (localDate.B() ? 1 : 0)) - localDate.getDayOfWeek().ordinal() >= 0 ? year + 1 : year;
        } else {
            return year;
        }
    }
}
