package j$.time.temporal;

import j$.time.DateTimeException;
import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class r implements Serializable {

    /* renamed from: a  reason: collision with root package name */
    public final long f31202a;

    /* renamed from: b  reason: collision with root package name */
    public final long f31203b;

    /* renamed from: c  reason: collision with root package name */
    public final long f31204c;

    /* renamed from: d  reason: collision with root package name */
    public final long f31205d;

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
        this.f31202a = j10;
        this.f31203b = j11;
        this.f31204c = j12;
        this.f31205d = j13;
    }

    public final int a(long j10, n nVar) {
        if (this.f31202a < -2147483648L || this.f31205d > 2147483647L || !d(j10)) {
            throw new DateTimeException(c(j10, nVar));
        }
        return (int) j10;
    }

    public final boolean d(long j10) {
        return j10 >= this.f31202a && j10 <= this.f31205d;
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
            if (this.f31202a == rVar.f31202a && this.f31203b == rVar.f31203b && this.f31204c == rVar.f31204c && this.f31205d == rVar.f31205d) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        long j10 = this.f31202a;
        long j11 = this.f31203b;
        long j12 = j10 + (j11 << 16) + (j11 >> 48);
        long j13 = this.f31204c;
        long j14 = j12 + (j13 << 32) + (j13 >> 32);
        long j15 = this.f31205d;
        long j16 = j14 + (j15 << 48) + (j15 >> 16);
        return (int) (j16 ^ (j16 >>> 32));
    }

    public final String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append(this.f31202a);
        if (this.f31202a != this.f31203b) {
            sb2.append('/');
            sb2.append(this.f31203b);
        }
        sb2.append(" - ");
        sb2.append(this.f31204c);
        if (this.f31204c != this.f31205d) {
            sb2.append('/');
            sb2.append(this.f31205d);
        }
        return sb2.toString();
    }
}
