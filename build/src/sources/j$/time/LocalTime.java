package j$.time;

import j$.time.format.DateTimeFormatter;
import j$.time.temporal.TemporalAccessor;
import j$.time.temporal.TemporalQuery;
import j$.time.temporal.o;
import java.io.Serializable;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class LocalTime implements j$.time.temporal.k, j$.time.temporal.l, Comparable<LocalTime>, Serializable {
    public static final LocalTime MAX;
    public static final LocalTime MIN;

    /* renamed from: e  reason: collision with root package name */
    public static final LocalTime f31528e;

    /* renamed from: f  reason: collision with root package name */
    public static final LocalTime[] f31529f = new LocalTime[24];

    /* renamed from: a  reason: collision with root package name */
    public final byte f31530a;

    /* renamed from: b  reason: collision with root package name */
    public final byte f31531b;

    /* renamed from: c  reason: collision with root package name */
    public final byte f31532c;

    /* renamed from: d  reason: collision with root package name */
    public final int f31533d;

    static {
        int i10 = 0;
        while (true) {
            LocalTime[] localTimeArr = f31529f;
            if (i10 < localTimeArr.length) {
                localTimeArr[i10] = new LocalTime(i10, 0, 0, 0);
                i10++;
            } else {
                LocalTime localTime = localTimeArr[0];
                f31528e = localTime;
                LocalTime localTime2 = localTimeArr[12];
                MIN = localTime;
                MAX = new LocalTime(23, 59, 59, 999999999);
                return;
            }
        }
    }

    public static LocalTime of(int i10, int i11, int i12, int i13) {
        j$.time.temporal.a.HOUR_OF_DAY.E(i10);
        j$.time.temporal.a.MINUTE_OF_HOUR.E(i11);
        j$.time.temporal.a.SECOND_OF_MINUTE.E(i12);
        j$.time.temporal.a.NANO_OF_SECOND.E(i13);
        return r(i10, i11, i12, i13);
    }

    public static LocalTime x(long j10) {
        j$.time.temporal.a.NANO_OF_DAY.E(j10);
        int i10 = (int) (j10 / 3600000000000L);
        long j11 = j10 - (i10 * 3600000000000L);
        int i11 = (int) (j11 / 60000000000L);
        long j12 = j11 - (i11 * 60000000000L);
        int i12 = (int) (j12 / 1000000000);
        return r(i10, i11, i12, (int) (j12 - (i12 * 1000000000)));
    }

    public static LocalTime t(TemporalAccessor temporalAccessor) {
        Objects.requireNonNull(temporalAccessor, "temporal");
        LocalTime localTime = (LocalTime) temporalAccessor.a(o.f31667g);
        if (localTime != null) {
            return localTime;
        }
        throw new DateTimeException("Unable to obtain LocalTime from TemporalAccessor: " + temporalAccessor + " of type " + temporalAccessor.getClass().getName());
    }

    public static LocalTime parse(CharSequence charSequence) {
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.f31564f;
        Objects.requireNonNull(dateTimeFormatter, "formatter");
        return (LocalTime) dateTimeFormatter.parse(charSequence, new c(1));
    }

    public static LocalTime r(int i10, int i11, int i12, int i13) {
        if ((i11 | i12 | i13) == 0) {
            return f31529f[i10];
        }
        return new LocalTime(i10, i11, i12, i13);
    }

    public LocalTime(int i10, int i11, int i12, int i13) {
        this.f31530a = (byte) i10;
        this.f31531b = (byte) i11;
        this.f31532c = (byte) i12;
        this.f31533d = i13;
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final boolean j(j$.time.temporal.n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            return ((j$.time.temporal.a) nVar).F();
        }
        return nVar != null && nVar.r(this);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final int g(j$.time.temporal.n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            return w(nVar);
        }
        return super.g(nVar);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final long m(j$.time.temporal.n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            if (nVar == j$.time.temporal.a.NANO_OF_DAY) {
                return G();
            }
            if (nVar == j$.time.temporal.a.MICRO_OF_DAY) {
                return G() / 1000;
            }
            return w(nVar);
        }
        return nVar.B(this);
    }

    public final int w(j$.time.temporal.n nVar) {
        switch (f.f31562a[((j$.time.temporal.a) nVar).ordinal()]) {
            case 1:
                return this.f31533d;
            case 2:
                throw new DateTimeException("Invalid field 'NanoOfDay' for get() method, use getLong() instead");
            case 3:
                return this.f31533d / 1000;
            case 4:
                throw new DateTimeException("Invalid field 'MicroOfDay' for get() method, use getLong() instead");
            case 5:
                return this.f31533d / 1000000;
            case 6:
                return (int) (G() / 1000000);
            case 7:
                return this.f31532c;
            case 8:
                return toSecondOfDay();
            case 9:
                return this.f31531b;
            case 10:
                return (this.f31530a * 60) + this.f31531b;
            case 11:
                return this.f31530a % 12;
            case 12:
                int i10 = this.f31530a % 12;
                if (i10 % 12 == 0) {
                    return 12;
                }
                return i10;
            case 13:
                return this.f31530a;
            case 14:
                byte b10 = this.f31530a;
                if (b10 == 0) {
                    return 24;
                }
                return b10;
            case 15:
                return this.f31530a / 12;
            default:
                throw new DateTimeException("Unsupported field: " + nVar);
        }
    }

    @Override // j$.time.temporal.k
    public final j$.time.temporal.k c(LocalDate localDate) {
        return (LocalTime) localDate.d(this);
    }

    @Override // j$.time.temporal.k
    /* renamed from: H */
    public final LocalTime b(long j10, j$.time.temporal.n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            j$.time.temporal.a aVar = (j$.time.temporal.a) nVar;
            aVar.E(j10);
            switch (f.f31562a[aVar.ordinal()]) {
                case 1:
                    return I((int) j10);
                case 2:
                    return x(j10);
                case 3:
                    return I(((int) j10) * 1000);
                case 4:
                    return x(j10 * 1000);
                case 5:
                    return I(((int) j10) * 1000000);
                case 6:
                    return x(j10 * 1000000);
                case 7:
                    int i10 = (int) j10;
                    if (this.f31532c != i10) {
                        j$.time.temporal.a.SECOND_OF_MINUTE.E(i10);
                        return r(this.f31530a, this.f31531b, i10, this.f31533d);
                    }
                    break;
                case 8:
                    return F(j10 - toSecondOfDay());
                case 9:
                    int i11 = (int) j10;
                    if (this.f31531b != i11) {
                        j$.time.temporal.a.MINUTE_OF_HOUR.E(i11);
                        return r(this.f31530a, i11, this.f31532c, this.f31533d);
                    }
                    break;
                case 10:
                    return C(j10 - ((this.f31530a * 60) + this.f31531b));
                case 11:
                    return B(j10 - (this.f31530a % 12));
                case 12:
                    if (j10 == 12) {
                        j10 = 0;
                    }
                    return B(j10 - (this.f31530a % 12));
                case 13:
                    int i12 = (int) j10;
                    if (this.f31530a != i12) {
                        j$.time.temporal.a.HOUR_OF_DAY.E(i12);
                        return r(i12, this.f31531b, this.f31532c, this.f31533d);
                    }
                    break;
                case 14:
                    if (j10 == 24) {
                        j10 = 0;
                    }
                    int i13 = (int) j10;
                    if (this.f31530a != i13) {
                        j$.time.temporal.a.HOUR_OF_DAY.E(i13);
                        return r(i13, this.f31531b, this.f31532c, this.f31533d);
                    }
                    break;
                case 15:
                    return B((j10 - (this.f31530a / 12)) * 12);
                default:
                    throw new DateTimeException("Unsupported field: " + nVar);
            }
            return this;
        }
        return (LocalTime) nVar.C(this, j10);
    }

    public final LocalTime I(int i10) {
        if (this.f31533d == i10) {
            return this;
        }
        j$.time.temporal.a.NANO_OF_SECOND.E(i10);
        return r(this.f31530a, this.f31531b, this.f31532c, i10);
    }

    @Override // j$.time.temporal.k
    public final j$.time.temporal.k h(long j10, j$.time.temporal.b bVar) {
        if (bVar != null) {
            switch (f.f31563b[bVar.ordinal()]) {
                case 1:
                    return E(j10);
                case 2:
                    return E((j10 % 86400000000L) * 1000);
                case 3:
                    return E((j10 % 86400000) * 1000000);
                case 4:
                    return F(j10);
                case 5:
                    return C(j10);
                case 6:
                    return B(j10);
                case 7:
                    return B((j10 % 2) * 12);
                default:
                    throw new DateTimeException("Unsupported unit: " + bVar);
            }
        }
        bVar.getClass();
        return (LocalTime) h(j10, bVar);
    }

    public final LocalTime B(long j10) {
        return j10 == 0 ? this : r(((((int) (j10 % 24)) + this.f31530a) + 24) % 24, this.f31531b, this.f31532c, this.f31533d);
    }

    public final LocalTime C(long j10) {
        if (j10 != 0) {
            int i10 = (this.f31530a * 60) + this.f31531b;
            int i11 = ((((int) (j10 % 1440)) + i10) + 1440) % 1440;
            if (i10 != i11) {
                return r(i11 / 60, i11 % 60, this.f31532c, this.f31533d);
            }
        }
        return this;
    }

    public final LocalTime F(long j10) {
        if (j10 != 0) {
            int i10 = (this.f31531b * 60) + (this.f31530a * 3600) + this.f31532c;
            int i11 = ((((int) (j10 % 86400)) + i10) + 86400) % 86400;
            if (i10 != i11) {
                return r(i11 / 3600, (i11 / 60) % 60, i11 % 60, this.f31533d);
            }
        }
        return this;
    }

    public final LocalTime E(long j10) {
        if (j10 != 0) {
            long G = G();
            long j11 = (((j10 % 86400000000000L) + G) + 86400000000000L) % 86400000000000L;
            if (G != j11) {
                return r((int) (j11 / 3600000000000L), (int) ((j11 / 60000000000L) % 60), (int) ((j11 / 1000000000) % 60), (int) (j11 % 1000000000));
            }
        }
        return this;
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final Object a(TemporalQuery temporalQuery) {
        if (temporalQuery == o.f31662b || temporalQuery == o.f31661a || temporalQuery == o.f31665e || temporalQuery == o.f31664d) {
            return null;
        }
        if (temporalQuery == o.f31667g) {
            return this;
        }
        if (temporalQuery == o.f31666f) {
            return null;
        }
        if (temporalQuery == o.f31663c) {
            return j$.time.temporal.b.NANOS;
        }
        return temporalQuery.queryFrom(this);
    }

    @Override // j$.time.temporal.l
    public final j$.time.temporal.k d(j$.time.temporal.k kVar) {
        return kVar.b(G(), j$.time.temporal.a.NANO_OF_DAY);
    }

    public int toSecondOfDay() {
        return (this.f31531b * 60) + (this.f31530a * 3600) + this.f31532c;
    }

    public final long G() {
        return (this.f31532c * 1000000000) + (this.f31531b * 60000000000L) + (this.f31530a * 3600000000000L) + this.f31533d;
    }

    @Override // java.lang.Comparable
    public int compareTo(LocalTime localTime) {
        int compare = Integer.compare(this.f31530a, localTime.f31530a);
        return (compare == 0 && (compare = Integer.compare(this.f31531b, localTime.f31531b)) == 0 && (compare = Integer.compare(this.f31532c, localTime.f31532c)) == 0) ? Integer.compare(this.f31533d, localTime.f31533d) : compare;
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof LocalTime) {
            LocalTime localTime = (LocalTime) obj;
            if (this.f31530a == localTime.f31530a && this.f31531b == localTime.f31531b && this.f31532c == localTime.f31532c && this.f31533d == localTime.f31533d) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long G = G();
        return (int) (G ^ (G >>> 32));
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(18);
        byte b10 = this.f31530a;
        byte b11 = this.f31531b;
        byte b12 = this.f31532c;
        int i10 = this.f31533d;
        sb2.append(b10 < 10 ? "0" : "");
        sb2.append((int) b10);
        sb2.append(b11 < 10 ? ":0" : ":");
        sb2.append((int) b11);
        if (b12 > 0 || i10 > 0) {
            sb2.append(b12 < 10 ? ":0" : ":");
            sb2.append((int) b12);
            if (i10 > 0) {
                sb2.append('.');
                if (i10 % 1000000 == 0) {
                    sb2.append(Integer.toString((i10 / 1000000) + 1000).substring(1));
                } else if (i10 % 1000 == 0) {
                    sb2.append(Integer.toString((i10 / 1000) + 1000000).substring(1));
                } else {
                    sb2.append(Integer.toString(i10 + 1000000000).substring(1));
                }
            }
        }
        return sb2.toString();
    }
}
