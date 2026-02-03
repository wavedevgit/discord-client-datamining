package net.time4j.tz;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.InvalidObjectException;
import java.io.ObjectInputStream;
import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class q implements Comparable, Serializable {
    private static final long serialVersionUID = 4594838367057225304L;
    private final int dst;
    private final long posix;
    private final int previous;
    private final int total;

    public q(long j10, int i10, int i11, int i12) {
        this.posix = j10;
        this.previous = i10;
        this.total = i11;
        this.dst = i12;
        d(i10);
        d(i11);
        a(i12);
    }

    private static void a(int i10) {
        if (i10 != Integer.MAX_VALUE) {
            d(i10);
        }
    }

    private static void d(int i10) {
        if (i10 >= -64800 && i10 <= 64800) {
            return;
        }
        throw new IllegalArgumentException("Offset out of range: " + i10);
    }

    private void readObject(ObjectInputStream objectInputStream) {
        objectInputStream.defaultReadObject();
        try {
            d(this.previous);
            d(this.total);
            a(this.dst);
        } catch (IllegalArgumentException e10) {
            throw new InvalidObjectException(e10.getMessage());
        }
    }

    @Override // java.lang.Comparable
    /* renamed from: e */
    public int compareTo(q qVar) {
        long j10 = this.posix - qVar.posix;
        if (j10 == 0) {
            j10 = this.previous - qVar.previous;
            if (j10 == 0) {
                j10 = this.total - qVar.total;
                if (j10 == 0) {
                    j10 = f() - qVar.f();
                    if (j10 == 0) {
                        return 0;
                    }
                }
            }
        }
        if (j10 < 0) {
            return -1;
        }
        return 1;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof q) {
            q qVar = (q) obj;
            if (this.posix == qVar.posix && this.previous == qVar.previous && this.total == qVar.total && f() == qVar.f()) {
                return true;
            }
        }
        return false;
    }

    public int f() {
        int i10 = this.dst;
        if (i10 == Integer.MAX_VALUE) {
            return 0;
        }
        return i10;
    }

    public long g() {
        return this.posix;
    }

    public int h() {
        return this.previous;
    }

    public int hashCode() {
        long j10 = this.posix;
        return (int) (j10 ^ (j10 >>> 32));
    }

    public int i() {
        return this.total - this.previous;
    }

    public int j() {
        return this.total - f();
    }

    public int k() {
        return this.total;
    }

    public boolean l() {
        if (this.total > this.previous) {
            return true;
        }
        return false;
    }

    public boolean o() {
        if (this.total < this.previous) {
            return true;
        }
        return false;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
        sb2.append("[POSIX=");
        sb2.append(this.posix);
        sb2.append(", previous-offset=");
        sb2.append(this.previous);
        sb2.append(", total-offset=");
        sb2.append(this.total);
        sb2.append(", dst-offset=");
        sb2.append(f());
        sb2.append(']');
        return sb2.toString();
    }
}
