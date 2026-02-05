package j$.time;

import java.io.Serializable;
import java.math.BigInteger;
import java.util.regex.Pattern;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class a implements Comparable, Serializable {

    /* renamed from: c  reason: collision with root package name */
    public static final a f30427c = new a(0, 0);

    /* renamed from: a  reason: collision with root package name */
    public final long f30428a;

    /* renamed from: b  reason: collision with root package name */
    public final int f30429b;

    @Override // java.lang.Comparable
    public final int compareTo(Object obj) {
        a aVar = (a) obj;
        int compare = Long.compare(this.f30428a, aVar.f30428a);
        return compare != 0 ? compare : this.f30429b - aVar.f30429b;
    }

    static {
        BigInteger.valueOf(1000000000L);
        Pattern.compile("([-+]?)P(?:([-+]?[0-9]+)D)?(T(?:([-+]?[0-9]+)H)?(?:([-+]?[0-9]+)M)?(?:([-+]?[0-9]+)(?:[.,]([0-9]{0,9}))?S)?)?", 2);
    }

    public static a t(long j10) {
        long j11 = j10 / 1000000000;
        int i10 = (int) (j10 % 1000000000);
        if (i10 < 0) {
            i10 = (int) (i10 + 1000000000);
            j11--;
        }
        return r(j11, i10);
    }

    public static a r(long j10, int i10) {
        if ((i10 | j10) == 0) {
            return f30427c;
        }
        return new a(j10, i10);
    }

    public a(long j10, int i10) {
        this.f30428a = j10;
        this.f30429b = i10;
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a) {
            a aVar = (a) obj;
            if (this.f30428a == aVar.f30428a && this.f30429b == aVar.f30429b) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        long j10 = this.f30428a;
        return (this.f30429b * 51) + ((int) (j10 ^ (j10 >>> 32)));
    }

    public final String toString() {
        if (this == f30427c) {
            return "PT0S";
        }
        long j10 = this.f30428a;
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
        if (i11 == 0 && this.f30429b == 0 && sb2.length() > 2) {
            return sb2.toString();
        }
        if (i11 >= 0 || this.f30429b <= 0) {
            sb2.append(i11);
        } else if (i11 == -1) {
            sb2.append("-0");
        } else {
            sb2.append(i11 + 1);
        }
        if (this.f30429b > 0) {
            int length = sb2.length();
            if (i11 < 0) {
                sb2.append(2000000000 - this.f30429b);
            } else {
                sb2.append(this.f30429b + 1000000000);
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
