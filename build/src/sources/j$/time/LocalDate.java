package j$.time;

import j$.time.chrono.ChronoLocalDate;
import j$.time.format.DateTimeFormatter;
import j$.time.temporal.TemporalAccessor;
import j$.time.temporal.TemporalQuery;
import j$.time.temporal.n;
import j$.time.temporal.o;
import j$.time.temporal.p;
import j$.time.temporal.r;
import java.io.Serializable;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class LocalDate implements j$.time.temporal.k, j$.time.temporal.l, ChronoLocalDate, Serializable {

    /* renamed from: a  reason: collision with root package name */
    public final int f29380a;

    /* renamed from: b  reason: collision with root package name */
    public final short f29381b;

    /* renamed from: c  reason: collision with root package name */
    public final short f29382c;
    public static final LocalDate MIN = of(-999999999, 1, 1);
    public static final LocalDate MAX = of(999999999, 12, 31);

    @Override // j$.time.chrono.ChronoLocalDate
    public final j$.time.chrono.j f() {
        return j$.time.chrono.k.f29416a;
    }

    public static LocalDate of(int i10, int i11, int i12) {
        long j10 = i10;
        j$.time.temporal.a.YEAR.E(j10);
        j$.time.temporal.a.MONTH_OF_YEAR.E(i11);
        j$.time.temporal.a.DAY_OF_MONTH.E(i12);
        int i13 = 28;
        if (i12 > 28) {
            if (i11 != 2) {
                i13 = (i11 == 4 || i11 == 6 || i11 == 9 || i11 == 11) ? 30 : 31;
            } else {
                j$.time.chrono.k kVar = j$.time.chrono.k.f29416a;
                if (j$.time.chrono.k.w(j10)) {
                    i13 = 29;
                }
            }
            if (i12 > i13) {
                if (i12 == 29) {
                    throw new DateTimeException("Invalid date 'February 29' as '" + i10 + "' is not a leap year");
                }
                throw new DateTimeException("Invalid date '" + Month.w(i11).name() + " " + i12 + "'");
            }
        }
        return new LocalDate(i10, i11, i12);
    }

    public static LocalDate C(int i10, int i11) {
        long j10 = i10;
        j$.time.temporal.a.YEAR.E(j10);
        j$.time.temporal.a.DAY_OF_YEAR.E(i11);
        j$.time.chrono.k kVar = j$.time.chrono.k.f29416a;
        boolean w10 = j$.time.chrono.k.w(j10);
        if (i11 == 366 && !w10) {
            throw new DateTimeException("Invalid date 'DayOfYear 366' as '" + i10 + "' is not a leap year");
        }
        Month w11 = Month.w(((i11 - 1) / 31) + 1);
        if (i11 > (w11.t(w10) + w11.r(w10)) - 1) {
            w11 = Month.f29393a[((((int) 1) + 12) + w11.ordinal()) % 12];
        }
        return new LocalDate(i10, w11.ordinal() + 1, (i11 - w11.r(w10)) + 1);
    }

    public static LocalDate ofEpochDay(long j10) {
        long j11;
        long j12 = j10 + 719468;
        if (j12 < 0) {
            long j13 = ((j10 + 719469) / 146097) - 1;
            j11 = j13 * 400;
            j12 += (-j13) * 146097;
        } else {
            j11 = 0;
        }
        long j14 = ((j12 * 400) + 591) / 146097;
        long j15 = j12 - ((j14 / 400) + (((j14 / 4) + (j14 * 365)) - (j14 / 100)));
        if (j15 < 0) {
            j14--;
            j15 = j12 - ((j14 / 400) + (((j14 / 4) + (365 * j14)) - (j14 / 100)));
        }
        int i10 = (int) j15;
        int i11 = ((i10 * 5) + 2) / 153;
        long j16 = j14 + j11 + (i11 / 10);
        j$.time.temporal.a aVar = j$.time.temporal.a.YEAR;
        return new LocalDate(aVar.f29505b.a(j16, aVar), ((i11 + 2) % 12) + 1, (i10 - (((i11 * 306) + 5) / 10)) + 1);
    }

    public static LocalDate t(TemporalAccessor temporalAccessor) {
        Objects.requireNonNull(temporalAccessor, "temporal");
        LocalDate localDate = (LocalDate) temporalAccessor.a(o.f29522f);
        if (localDate != null) {
            return localDate;
        }
        throw new DateTimeException("Unable to obtain LocalDate from TemporalAccessor: " + temporalAccessor + " of type " + temporalAccessor.getClass().getName());
    }

    public static LocalDate parse(CharSequence charSequence) {
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ISO_LOCAL_DATE;
        Objects.requireNonNull(dateTimeFormatter, "formatter");
        return (LocalDate) dateTimeFormatter.parse(charSequence, new b(0));
    }

    public static LocalDate I(int i10, int i11, int i12) {
        if (i11 == 2) {
            j$.time.chrono.k kVar = j$.time.chrono.k.f29416a;
            i12 = Math.min(i12, j$.time.chrono.k.w((long) i10) ? 29 : 28);
        } else if (i11 == 4 || i11 == 6 || i11 == 9 || i11 == 11) {
            i12 = Math.min(i12, 30);
        }
        return new LocalDate(i10, i11, i12);
    }

    public LocalDate(int i10, int i11, int i12) {
        this.f29380a = i10;
        this.f29381b = (short) i11;
        this.f29382c = (short) i12;
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final r i(n nVar) {
        int i10;
        if (nVar instanceof j$.time.temporal.a) {
            j$.time.temporal.a aVar = (j$.time.temporal.a) nVar;
            if (aVar.isDateBased()) {
                int i11 = c.f29406a[aVar.ordinal()];
                if (i11 == 1) {
                    short s10 = this.f29381b;
                    if (s10 != 2) {
                        i10 = (s10 == 4 || s10 == 6 || s10 == 9 || s10 == 11) ? 30 : 31;
                    } else {
                        i10 = B() ? 29 : 28;
                    }
                    return r.e(1L, i10);
                } else if (i11 == 2) {
                    return r.e(1L, B() ? 366 : 365);
                } else if (i11 == 3) {
                    return r.e(1L, (getMonth() != Month.FEBRUARY || B()) ? 5L : 4L);
                } else if (i11 != 4) {
                    return aVar.f29505b;
                } else {
                    return getYear() <= 0 ? r.e(1L, 1000000000L) : r.e(1L, 999999999L);
                }
            }
            throw new DateTimeException("Unsupported field: " + nVar);
        }
        return nVar.t(this);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final int g(n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            return w(nVar);
        }
        return super.g(nVar);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final long m(n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            if (nVar == j$.time.temporal.a.EPOCH_DAY) {
                return toEpochDay();
            }
            if (nVar != j$.time.temporal.a.PROLEPTIC_MONTH) {
                return w(nVar);
            }
            return ((this.f29380a * 12) + this.f29381b) - 1;
        }
        return nVar.B(this);
    }

    public final int w(n nVar) {
        switch (c.f29406a[((j$.time.temporal.a) nVar).ordinal()]) {
            case 1:
                return this.f29382c;
            case 2:
                return x();
            case 3:
                return ((this.f29382c - 1) / 7) + 1;
            case 4:
                int i10 = this.f29380a;
                return i10 >= 1 ? i10 : 1 - i10;
            case 5:
                return getDayOfWeek().r();
            case 6:
                return ((this.f29382c - 1) % 7) + 1;
            case 7:
                return ((x() - 1) % 7) + 1;
            case 8:
                throw new DateTimeException("Invalid field 'EpochDay' for get() method, use getLong() instead");
            case 9:
                return ((x() - 1) / 7) + 1;
            case 10:
                return this.f29381b;
            case 11:
                throw new DateTimeException("Invalid field 'ProlepticMonth' for get() method, use getLong() instead");
            case 12:
                return this.f29380a;
            case 13:
                return this.f29380a >= 1 ? 1 : 0;
            default:
                throw new DateTimeException("Unsupported field: " + nVar);
        }
    }

    public int getYear() {
        return this.f29380a;
    }

    public int getMonthValue() {
        return this.f29381b;
    }

    public Month getMonth() {
        return Month.w(this.f29381b);
    }

    public int getDayOfMonth() {
        return this.f29382c;
    }

    public final int x() {
        return (getMonth().r(B()) + this.f29382c) - 1;
    }

    public DayOfWeek getDayOfWeek() {
        return DayOfWeek.t(((int) Math.floorMod(toEpochDay() + 3, 7L)) + 1);
    }

    public final boolean B() {
        j$.time.chrono.k kVar = j$.time.chrono.k.f29416a;
        return j$.time.chrono.k.w(this.f29380a);
    }

    @Override // j$.time.chrono.ChronoLocalDate
    /* renamed from: K */
    public final LocalDate k(j$.time.temporal.l lVar) {
        if (lVar instanceof LocalDate) {
            return (LocalDate) lVar;
        }
        return (LocalDate) lVar.d(this);
    }

    @Override // j$.time.temporal.k
    /* renamed from: J */
    public final LocalDate b(long j10, n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            j$.time.temporal.a aVar = (j$.time.temporal.a) nVar;
            aVar.E(j10);
            switch (c.f29406a[aVar.ordinal()]) {
                case 1:
                    int i10 = (int) j10;
                    if (this.f29382c != i10) {
                        return of(this.f29380a, this.f29381b, i10);
                    }
                    break;
                case 2:
                    int i11 = (int) j10;
                    if (x() != i11) {
                        return C(this.f29380a, i11);
                    }
                    break;
                case 3:
                    return G(j10 - m(j$.time.temporal.a.ALIGNED_WEEK_OF_MONTH));
                case 4:
                    if (this.f29380a < 1) {
                        j10 = 1 - j10;
                    }
                    return L((int) j10);
                case 5:
                    return F(j10 - getDayOfWeek().r());
                case 6:
                    return F(j10 - m(j$.time.temporal.a.ALIGNED_DAY_OF_WEEK_IN_MONTH));
                case 7:
                    return F(j10 - m(j$.time.temporal.a.ALIGNED_DAY_OF_WEEK_IN_YEAR));
                case 8:
                    return ofEpochDay(j10);
                case 9:
                    return G(j10 - m(j$.time.temporal.a.ALIGNED_WEEK_OF_YEAR));
                case 10:
                    int i12 = (int) j10;
                    if (this.f29381b != i12) {
                        j$.time.temporal.a.MONTH_OF_YEAR.E(i12);
                        return I(this.f29380a, i12, this.f29382c);
                    }
                    break;
                case 11:
                    return plusMonths(j10 - (((this.f29380a * 12) + this.f29381b) - 1));
                case 12:
                    return L((int) j10);
                case 13:
                    if (m(j$.time.temporal.a.ERA) != j10) {
                        return L(1 - this.f29380a);
                    }
                    break;
                default:
                    throw new DateTimeException("Unsupported field: " + nVar);
            }
            return this;
        }
        return (LocalDate) nVar.C(this, j10);
    }

    public final LocalDate L(int i10) {
        if (this.f29380a == i10) {
            return this;
        }
        j$.time.temporal.a.YEAR.E(i10);
        return I(i10, this.f29381b, this.f29382c);
    }

    @Override // j$.time.chrono.ChronoLocalDate
    public final ChronoLocalDate u(h hVar) {
        if (hVar != null) {
            long j10 = 0;
            return plusMonths((12 * j10) + j10).F(hVar.f29495a);
        }
        Objects.requireNonNull(hVar, "amountToAdd");
        return (LocalDate) hVar.a(this);
    }

    @Override // j$.time.chrono.ChronoLocalDate
    /* renamed from: E */
    public final LocalDate p(long j10, p pVar) {
        if (pVar instanceof j$.time.temporal.b) {
            switch (c.f29407b[((j$.time.temporal.b) pVar).ordinal()]) {
                case 1:
                    return F(j10);
                case 2:
                    return G(j10);
                case 3:
                    return plusMonths(j10);
                case 4:
                    return H(j10);
                case 5:
                    return H(Math.multiplyExact(j10, 10L));
                case 6:
                    return H(Math.multiplyExact(j10, 100L));
                case 7:
                    return H(Math.multiplyExact(j10, 1000L));
                case 8:
                    j$.time.temporal.a aVar = j$.time.temporal.a.ERA;
                    return b(Math.addExact(m(aVar), j10), aVar);
                default:
                    throw new DateTimeException("Unsupported unit: " + pVar);
            }
        }
        return (LocalDate) pVar.r(this, j10);
    }

    public final LocalDate H(long j10) {
        if (j10 == 0) {
            return this;
        }
        j$.time.temporal.a aVar = j$.time.temporal.a.YEAR;
        return I(aVar.f29505b.a(this.f29380a + j10, aVar), this.f29381b, this.f29382c);
    }

    public LocalDate plusMonths(long j10) {
        if (j10 == 0) {
            return this;
        }
        long j11 = (this.f29380a * 12) + (this.f29381b - 1) + j10;
        j$.time.temporal.a aVar = j$.time.temporal.a.YEAR;
        return I(aVar.f29505b.a(Math.floorDiv(j11, 12L), aVar), ((int) Math.floorMod(j11, 12L)) + 1, this.f29382c);
    }

    public final LocalDate G(long j10) {
        return F(Math.multiplyExact(j10, 7L));
    }

    public final LocalDate F(long j10) {
        return j10 == 0 ? this : ofEpochDay(Math.addExact(toEpochDay(), j10));
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final Object a(TemporalQuery temporalQuery) {
        return temporalQuery == o.f29522f ? this : super.a(temporalQuery);
    }

    @Override // j$.time.chrono.ChronoLocalDate
    public final j$.time.chrono.c z(LocalTime localTime) {
        return LocalDateTime.x(this, localTime);
    }

    @Override // j$.time.chrono.ChronoLocalDate
    public long toEpochDay() {
        long j10;
        long j11 = this.f29380a;
        long j12 = this.f29381b;
        long j13 = 365 * j11;
        if (j11 >= 0) {
            j10 = ((j11 + 399) / 400) + (((3 + j11) / 4) - ((99 + j11) / 100)) + j13;
        } else {
            j10 = j13 - ((j11 / (-400)) + ((j11 / (-4)) - (j11 / (-100))));
        }
        long j14 = (((367 * j12) - 362) / 12) + j10 + (this.f29382c - 1);
        if (j12 > 2) {
            j14 = !B() ? j14 - 2 : j14 - 1;
        }
        return j14 - 719528;
    }

    @Override // j$.time.chrono.ChronoLocalDate, java.lang.Comparable
    public int compareTo(ChronoLocalDate chronoLocalDate) {
        if (chronoLocalDate instanceof LocalDate) {
            return r((LocalDate) chronoLocalDate);
        }
        return super.compareTo(chronoLocalDate);
    }

    public final int r(LocalDate localDate) {
        int i10 = this.f29380a - localDate.f29380a;
        if (i10 == 0) {
            int i11 = this.f29381b - localDate.f29381b;
            return i11 == 0 ? this.f29382c - localDate.f29382c : i11;
        }
        return i10;
    }

    @Override // j$.time.chrono.ChronoLocalDate
    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        return (obj instanceof LocalDate) && r((LocalDate) obj) == 0;
    }

    @Override // j$.time.chrono.ChronoLocalDate
    public int hashCode() {
        int i10 = this.f29380a;
        return (((i10 << 11) + (this.f29381b << 6)) + this.f29382c) ^ (i10 & (-2048));
    }

    @Override // j$.time.chrono.ChronoLocalDate
    public String toString() {
        int i10 = this.f29380a;
        short s10 = this.f29381b;
        short s11 = this.f29382c;
        int abs = Math.abs(i10);
        StringBuilder sb2 = new StringBuilder(10);
        if (abs >= 1000) {
            if (i10 > 9999) {
                sb2.append('+');
            }
            sb2.append(i10);
        } else if (i10 < 0) {
            sb2.append(i10 - 10000);
            sb2.deleteCharAt(1);
        } else {
            sb2.append(i10 + 10000);
            sb2.deleteCharAt(0);
        }
        sb2.append(s10 < 10 ? "-0" : "-");
        sb2.append((int) s10);
        sb2.append(s11 < 10 ? "-0" : "-");
        sb2.append((int) s11);
        return sb2.toString();
    }
}
