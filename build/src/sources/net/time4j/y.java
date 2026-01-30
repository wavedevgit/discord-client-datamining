package net.time4j;

import java.io.InvalidObjectException;
import java.io.ObjectInputStream;
import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y implements jt.l0, Comparable, Serializable {

    /* renamed from: o  reason: collision with root package name */
    private static final y f40935o;

    /* renamed from: p  reason: collision with root package name */
    private static final y f40936p;

    /* renamed from: q  reason: collision with root package name */
    public static final jt.j0 f40937q;

    /* renamed from: r  reason: collision with root package name */
    public static final jt.j0 f40938r;
    private static final long serialVersionUID = -4150291820807606229L;

    /* renamed from: d  reason: collision with root package name */
    private final transient long f40939d;

    /* renamed from: e  reason: collision with root package name */
    private final transient int f40940e;

    /* renamed from: i  reason: collision with root package name */
    private final transient qt.f f40941i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements jt.j0 {

        /* renamed from: d  reason: collision with root package name */
        private final qt.f f40942d;

        private b(qt.f fVar) {
            this.f40942d = fVar;
        }
    }

    static {
        qt.f fVar = qt.f.POSIX;
        f40935o = new y(0L, 0, fVar);
        qt.f fVar2 = qt.f.UTC;
        f40936p = new y(0L, 0, fVar2);
        f40937q = new b(fVar);
        f40938r = new b(fVar2);
    }

    private y(long j10, int i10, qt.f fVar) {
        while (i10 < 0) {
            i10 += 1000000000;
            j10 = gt.c.m(j10, 1L);
        }
        while (i10 >= 1000000000) {
            i10 -= 1000000000;
            j10 = gt.c.f(j10, 1L);
        }
        if (j10 < 0 && i10 > 0) {
            j10++;
            i10 -= 1000000000;
        }
        this.f40939d = j10;
        this.f40940e = i10;
        this.f40941i = fVar;
    }

    private void e(StringBuilder sb2) {
        if (i()) {
            sb2.append('-');
            sb2.append(Math.abs(this.f40939d));
        } else {
            sb2.append(this.f40939d);
        }
        if (this.f40940e != 0) {
            sb2.append('.');
            String valueOf = String.valueOf(Math.abs(this.f40940e));
            for (int length = 9 - valueOf.length(); length > 0; length--) {
                sb2.append('0');
            }
            sb2.append(valueOf);
        }
    }

    public static y j(long j10, int i10) {
        if (j10 == 0 && i10 == 0) {
            return f40935o;
        }
        return new y(j10, i10, qt.f.POSIX);
    }

    public static y k(long j10, int i10) {
        if (j10 == 0 && i10 == 0) {
            return f40936p;
        }
        return new y(j10, i10, qt.f.UTC);
    }

    private void readObject(ObjectInputStream objectInputStream) {
        throw new InvalidObjectException("Serialization proxy required.");
    }

    private Object writeReplace() {
        return new SPX(this, 5);
    }

    @Override // java.lang.Comparable
    /* renamed from: d */
    public int compareTo(y yVar) {
        if (this.f40941i == yVar.f40941i) {
            long j10 = this.f40939d;
            long j11 = yVar.f40939d;
            if (j10 < j11) {
                return -1;
            }
            if (j10 > j11) {
                return 1;
            }
            return this.f40940e - yVar.f40940e;
        }
        throw new ClassCastException("Different time scales.");
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof y) {
            y yVar = (y) obj;
            if (this.f40939d == yVar.f40939d && this.f40940e == yVar.f40940e && this.f40941i == yVar.f40941i) {
                return true;
            }
        }
        return false;
    }

    public int f() {
        int i10 = this.f40940e;
        if (i10 < 0) {
            return i10 + 1000000000;
        }
        return i10;
    }

    public qt.f g() {
        return this.f40941i;
    }

    public long h() {
        long j10 = this.f40939d;
        if (this.f40940e < 0) {
            return j10 - 1;
        }
        return j10;
    }

    public int hashCode() {
        long j10 = this.f40939d;
        return ((((161 + ((int) (j10 ^ (j10 >>> 32)))) * 23) + this.f40940e) * 23) + this.f40941i.hashCode();
    }

    public boolean i() {
        if (this.f40939d >= 0 && this.f40940e >= 0) {
            return false;
        }
        return true;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        e(sb2);
        sb2.append("s [");
        sb2.append(this.f40941i.name());
        sb2.append(']');
        return sb2.toString();
    }
}
