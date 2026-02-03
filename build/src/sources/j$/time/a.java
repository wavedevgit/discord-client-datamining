package j$.time;

import java.io.Serializable;
import java.math.BigInteger;
import java.util.regex.Pattern;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class a implements Comparable, Serializable {

    /* renamed from: c  reason: collision with root package name */
    public static final a f31282c = new a(0, 0);

    /* renamed from: a  reason: collision with root package name */
    public final long f31283a;

    /* renamed from: b  reason: collision with root package name */
    public final int f31284b;

    @Override // java.lang.Comparable
    public final int compareTo(Object obj) {
        a aVar = (a) obj;
        int compare = Long.compare(this.f31283a, aVar.f31283a);
        return compare != 0 ? compare : this.f31284b - aVar.f31284b;
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
            return f31282c;
        }
        return new a(j10, i10);
    }

    public a(long j10, int i10) {
        this.f31283a = j10;
        this.f31284b = i10;
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a) {
            a aVar = (a) obj;
            if (this.f31283a == aVar.f31283a && this.f31284b == aVar.f31284b) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        long j10 = this.f31283a;
        return (this.f31284b * 51) + ((int) (j10 ^ (j10 >>> 32)));
    }

    public final String toString() {
        if (this == f31282c) {
            return "PT0S";
        }
        long j10 = this.f31283a;
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
        if (i11 == 0 && this.f31284b == 0 && sb2.length() > 2) {
            return sb2.toString();
        }
        if (i11 >= 0 || this.f31284b <= 0) {
            sb2.append(i11);
        } else if (i11 == -1) {
            sb2.append("-0");
        } else {
            sb2.append(i11 + 1);
        }
        if (this.f31284b > 0) {
            int length = sb2.length();
            if (i11 < 0) {
                sb2.append(2000000000 - this.f31284b);
            } else {
                sb2.append(this.f31284b + 1000000000);
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
