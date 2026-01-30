package j$.time.temporal;

import j$.time.DateTimeException;
import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class r implements Serializable {

    /* renamed from: a  reason: collision with root package name */
    public final long f31668a;

    /* renamed from: b  reason: collision with root package name */
    public final long f31669b;

    /* renamed from: c  reason: collision with root package name */
    public final long f31670c;

    /* renamed from: d  reason: collision with root package name */
    public final long f31671d;

    public static r e(long j10, long j11) {
        if (j10 > j11) {
            throw new IllegalArgumentException("Minimum value must be less than maximum value");
        }
        return new r(j10, j10, j11, j11);
    }

    public static r f(long j10, long j11) {
        if (j10 <= j11) {
            if (1 > j11) {
                throw new IllegalArgumentException("Minimum value must be less than maximum value");
            }
            return new r(1L, 1L, j10, j11);
        }
        throw new IllegalArgumentException("Smallest maximum value must be less than largest maximum value");
    }

    public r(long j10, long j11, long j12, long j13) {
        this.f31668a = j10;
        this.f31669b = j11;
        this.f31670c = j12;
        this.f31671d = j13;
    }

    public final int a(long j10, n nVar) {
        if (this.f31668a < -2147483648L || this.f31671d > 2147483647L || !d(j10)) {
            throw new DateTimeException(c(j10, nVar));
        }
        return (int) j10;
    }

    public final boolean d(long j10) {
        return j10 >= this.f31668a && j10 <= this.f31671d;
    }

    public final void b(long j10, n nVar) {
        if (!d(j10)) {
            throw new DateTimeException(c(j10, nVar));
        }
    }

    public final String c(long j10, n nVar) {
        if (nVar != null) {
            return "Invalid value for " + nVar + " (valid values " + this + "): " + j10;
        }
        return "Invalid value (valid values " + this + "): " + j10;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof r) {
            r rVar = (r) obj;
            if (this.f31668a == rVar.f31668a && this.f31669b == rVar.f31669b && this.f31670c == rVar.f31670c && this.f31671d == rVar.f31671d) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        long j10 = this.f31668a;
        long j11 = this.f31669b;
        long j12 = j10 + (j11 << 16) + (j11 >> 48);
        long j13 = this.f31670c;
        long j14 = j12 + (j13 << 32) + (j13 >> 32);
        long j15 = this.f31671d;
        long j16 = j14 + (j15 << 48) + (j15 >> 16);
        return (int) (j16 ^ (j16 >>> 32));
    }

    public final String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append(this.f31668a);
        if (this.f31668a != this.f31669b) {
            sb2.append('/');
            sb2.append(this.f31669b);
        }
        sb2.append(" - ");
        sb2.append(this.f31670c);
        if (this.f31670c != this.f31671d) {
            sb2.append('/');
            sb2.append(this.f31671d);
        }
        return sb2.toString();
    }
}
