package j$.time;

import j$.time.format.DateTimeFormatter;
import j$.time.temporal.TemporalAccessor;
import j$.time.temporal.TemporalQuery;
import j$.time.temporal.n;
import j$.time.temporal.o;
import java.io.Serializable;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class LocalTime implements j$.time.temporal.k, j$.time.temporal.l, Comparable<LocalTime>, Serializable {
    public static final LocalTime MAX;
    public static final LocalTime MIN;

    /* renamed from: e  reason: collision with root package name */
    public static final LocalTime f29435e;

    /* renamed from: f  reason: collision with root package name */
    public static final LocalTime[] f29436f = new LocalTime[24];

    /* renamed from: a  reason: collision with root package name */
    public final byte f29437a;

    /* renamed from: b  reason: collision with root package name */
    public final byte f29438b;

    /* renamed from: c  reason: collision with root package name */
    public final byte f29439c;

    /* renamed from: d  reason: collision with root package name */
    public final int f29440d;

    static {
        int i10 = 0;
        while (true) {
            LocalTime[] localTimeArr = f29436f;
            if (i10 < localTimeArr.length) {
                localTimeArr[i10] = new LocalTime(i10, 0, 0, 0);
                i10++;
            } else {
                LocalTime localTime = localTimeArr[0];
                f29435e = localTime;
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
        LocalTime localTime = (LocalTime) temporalAccessor.a(o.f29571g);
        if (localTime != null) {
            return localTime;
        }
        throw new DateTimeException("Unable to obtain LocalTime from TemporalAccessor: " + temporalAccessor + " of type " + temporalAccessor.getClass().getName());
    }

    public static LocalTime parse(CharSequence charSequence) {
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.f29469f;
        Objects.requireNonNull(dateTimeFormatter, "formatter");
        return (LocalTime) dateTimeFormatter.parse(charSequence, new b(1));
    }

    public static LocalTime r(int i10, int i11, int i12, int i13) {
        if ((i11 | i12 | i13) == 0) {
            return f29436f[i10];
        }
        return new LocalTime(i10, i11, i12, i13);
    }

    public LocalTime(int i10, int i11, int i12, int i13) {
        this.f29437a = (byte) i10;
        this.f29438b = (byte) i11;
        this.f29439c = (byte) i12;
        this.f29440d = i13;
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final boolean j(n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            return ((j$.time.temporal.a) nVar).F();
        }
        return nVar != null && nVar.r(this);
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

    public final int w(n nVar) {
        switch (e.f29466a[((j$.time.temporal.a) nVar).ordinal()]) {
            case 1:
                return this.f29440d;
            case 2:
                throw new DateTimeException("Invalid field 'NanoOfDay' for get() method, use getLong() instead");
            case 3:
                return this.f29440d / 1000;
            case 4:
                throw new DateTimeException("Invalid field 'MicroOfDay' for get() method, use getLong() instead");
            case 5:
                return this.f29440d / 1000000;
            case 6:
                return (int) (G() / 1000000);
            case 7:
                return this.f29439c;
            case 8:
                return toSecondOfDay();
            case 9:
                return this.f29438b;
            case 10:
                return (this.f29437a * 60) + this.f29438b;
            case 11:
                return this.f29437a % 12;
            case 12:
                int i10 = this.f29437a % 12;
                if (i10 % 12 == 0) {
                    return 12;
                }
                return i10;
            case 13:
                return this.f29437a;
            case 14:
                byte b10 = this.f29437a;
                if (b10 == 0) {
                    return 24;
                }
                return b10;
            case 15:
                return this.f29437a / 12;
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
    public final LocalTime b(long j10, n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            j$.time.temporal.a aVar = (j$.time.temporal.a) nVar;
            aVar.E(j10);
            switch (e.f29466a[aVar.ordinal()]) {
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
                    if (this.f29439c != i10) {
                        j$.time.temporal.a.SECOND_OF_MINUTE.E(i10);
                        return r(this.f29437a, this.f29438b, i10, this.f29440d);
                    }
                    break;
                case 8:
                    return F(j10 - toSecondOfDay());
                case 9:
                    int i11 = (int) j10;
                    if (this.f29438b != i11) {
                        j$.time.temporal.a.MINUTE_OF_HOUR.E(i11);
                        return r(this.f29437a, i11, this.f29439c, this.f29440d);
                    }
                    break;
                case 10:
                    return C(j10 - ((this.f29437a * 60) + this.f29438b));
                case 11:
                    return B(j10 - (this.f29437a % 12));
                case 12:
                    if (j10 == 12) {
                        j10 = 0;
                    }
                    return B(j10 - (this.f29437a % 12));
                case 13:
                    int i12 = (int) j10;
                    if (this.f29437a != i12) {
                        j$.time.temporal.a.HOUR_OF_DAY.E(i12);
                        return r(i12, this.f29438b, this.f29439c, this.f29440d);
                    }
                    break;
                case 14:
                    if (j10 == 24) {
                        j10 = 0;
                    }
                    int i13 = (int) j10;
                    if (this.f29437a != i13) {
                        j$.time.temporal.a.HOUR_OF_DAY.E(i13);
                        return r(i13, this.f29438b, this.f29439c, this.f29440d);
                    }
                    break;
                case 15:
                    return B((j10 - (this.f29437a / 12)) * 12);
                default:
                    throw new DateTimeException("Unsupported field: " + nVar);
            }
            return this;
        }
        return (LocalTime) nVar.C(this, j10);
    }

    public final LocalTime I(int i10) {
        if (this.f29440d == i10) {
            return this;
        }
        j$.time.temporal.a.NANO_OF_SECOND.E(i10);
        return r(this.f29437a, this.f29438b, this.f29439c, i10);
    }

    @Override // j$.time.temporal.k
    public final j$.time.temporal.k h(long j10, j$.time.temporal.b bVar) {
        if (bVar != null) {
            switch (e.f29467b[bVar.ordinal()]) {
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
        return j10 == 0 ? this : r(((((int) (j10 % 24)) + this.f29437a) + 24) % 24, this.f29438b, this.f29439c, this.f29440d);
    }

    public final LocalTime C(long j10) {
        if (j10 != 0) {
            int i10 = (this.f29437a * 60) + this.f29438b;
            int i11 = ((((int) (j10 % 1440)) + i10) + 1440) % 1440;
            if (i10 != i11) {
                return r(i11 / 60, i11 % 60, this.f29439c, this.f29440d);
            }
        }
        return this;
    }

    public final LocalTime F(long j10) {
        if (j10 != 0) {
            int i10 = (this.f29438b * 60) + (this.f29437a * 3600) + this.f29439c;
            int i11 = ((((int) (j10 % 86400)) + i10) + 86400) % 86400;
            if (i10 != i11) {
                return r(i11 / 3600, (i11 / 60) % 60, i11 % 60, this.f29440d);
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
        if (temporalQuery == o.f29566b || temporalQuery == o.f29565a || temporalQuery == o.f29569e || temporalQuery == o.f29568d) {
            return null;
        }
        if (temporalQuery == o.f29571g) {
            return this;
        }
        if (temporalQuery == o.f29570f) {
            return null;
        }
        if (temporalQuery == o.f29567c) {
            return j$.time.temporal.b.NANOS;
        }
        return temporalQuery.queryFrom(this);
    }

    @Override // j$.time.temporal.l
    public final j$.time.temporal.k d(j$.time.temporal.k kVar) {
        return kVar.b(G(), j$.time.temporal.a.NANO_OF_DAY);
    }

    public int toSecondOfDay() {
        return (this.f29438b * 60) + (this.f29437a * 3600) + this.f29439c;
    }

    public final long G() {
        return (this.f29439c * 1000000000) + (this.f29438b * 60000000000L) + (this.f29437a * 3600000000000L) + this.f29440d;
    }

    @Override // java.lang.Comparable
    public int compareTo(LocalTime localTime) {
        int compare = Integer.compare(this.f29437a, localTime.f29437a);
        return (compare == 0 && (compare = Integer.compare(this.f29438b, localTime.f29438b)) == 0 && (compare = Integer.compare(this.f29439c, localTime.f29439c)) == 0) ? Integer.compare(this.f29440d, localTime.f29440d) : compare;
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof LocalTime) {
            LocalTime localTime = (LocalTime) obj;
            if (this.f29437a == localTime.f29437a && this.f29438b == localTime.f29438b && this.f29439c == localTime.f29439c && this.f29440d == localTime.f29440d) {
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
        byte b10 = this.f29437a;
        byte b11 = this.f29438b;
        byte b12 = this.f29439c;
        int i10 = this.f29440d;
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
