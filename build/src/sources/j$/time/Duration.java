package j$.time;

import java.io.Serializable;
import java.math.BigInteger;
import java.util.regex.Pattern;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class Duration implements Comparable<Duration>, Serializable {

    /* renamed from: c  reason: collision with root package name */
    public static final Duration f29374c = new Duration(0, 0);

    /* renamed from: a  reason: collision with root package name */
    public final long f29375a;

    /* renamed from: b  reason: collision with root package name */
    public final int f29376b;

    @Override // java.lang.Comparable
    public final int compareTo(Duration duration) {
        Duration duration2 = duration;
        int compare = Long.compare(this.f29375a, duration2.f29375a);
        return compare != 0 ? compare : this.f29376b - duration2.f29376b;
    }

    static {
        BigInteger.valueOf(1000000000L);
        Pattern.compile("([-+]?)P(?:([-+]?[0-9]+)D)?(T(?:([-+]?[0-9]+)H)?(?:([-+]?[0-9]+)M)?(?:([-+]?[0-9]+)(?:[.,]([0-9]{0,9}))?S)?)?", 2);
    }

    public static Duration t(long j10) {
        long j11 = j10 / 1000000000;
        int i10 = (int) (j10 % 1000000000);
        if (i10 < 0) {
            i10 = (int) (i10 + 1000000000);
            j11--;
        }
        return r(j11, i10);
    }

    public static Duration r(long j10, int i10) {
        if ((i10 | j10) == 0) {
            return f29374c;
        }
        return new Duration(j10, i10);
    }

    public Duration(long j10, int i10) {
        this.f29375a = j10;
        this.f29376b = i10;
    }

    public long toMillis() {
        return Math.addExact(Math.multiplyExact(this.f29375a, 1000L), this.f29376b / 1000000);
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof Duration) {
            Duration duration = (Duration) obj;
            if (this.f29375a == duration.f29375a && this.f29376b == duration.f29376b) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        long j10 = this.f29375a;
        return (this.f29376b * 51) + ((int) (j10 ^ (j10 >>> 32)));
    }

    public final String toString() {
        if (this == f29374c) {
            return "PT0S";
        }
        long j10 = this.f29375a;
        long j11 = j10 / 3600;
        int i10 = (int) ((j10 % 3600) / 60);
        int i11 = (int) (j10 % 60);
        StringBuilder sb2 = new StringBuilder(24);
        sb2.append("PT");
        if (j11 != 0) {
            sb2.append(j11);
            sb2.append('H');
        }
        if (i10 != 0) {
            sb2.append(i10);
            sb2.append('M');
        }
        if (i11 == 0 && this.f29376b == 0 && sb2.length() > 2) {
            return sb2.toString();
        }
        if (i11 >= 0 || this.f29376b <= 0) {
            sb2.append(i11);
        } else if (i11 == -1) {
            sb2.append("-0");
        } else {
            sb2.append(i11 + 1);
        }
        if (this.f29376b > 0) {
            int length = sb2.length();
            if (i11 < 0) {
                sb2.append(2000000000 - this.f29376b);
            } else {
                sb2.append(this.f29376b + 1000000000);
            }
            while (sb2.charAt(sb2.length() - 1) == '0') {
                sb2.setLength(sb2.length() - 1);
            }
            sb2.setCharAt(length, '.');
        }
        sb2.append('S');
        return sb2.toString();
    }
}
