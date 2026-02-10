package net.time4j;

import java.io.InvalidObjectException;
import java.io.ObjectInputStream;
import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y implements st.l0, Comparable, Serializable {

    /* renamed from: o  reason: collision with root package name */
    private static final y f38792o;

    /* renamed from: p  reason: collision with root package name */
    private static final y f38793p;

    /* renamed from: q  reason: collision with root package name */
    public static final st.j0 f38794q;

    /* renamed from: r  reason: collision with root package name */
    public static final st.j0 f38795r;
    private static final long serialVersionUID = -4150291820807606229L;

    /* renamed from: d  reason: collision with root package name */
    private final transient long f38796d;

    /* renamed from: e  reason: collision with root package name */
    private final transient int f38797e;

    /* renamed from: i  reason: collision with root package name */
    private final transient zt.f f38798i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements st.j0 {

        /* renamed from: d  reason: collision with root package name */
        private final zt.f f38799d;

        private b(zt.f fVar) {
            this.f38799d = fVar;
        }
    }

    static {
        zt.f fVar = zt.f.POSIX;
        f38792o = new y(0L, 0, fVar);
        zt.f fVar2 = zt.f.UTC;
        f38793p = new y(0L, 0, fVar2);
        f38794q = new b(fVar);
        f38795r = new b(fVar2);
    }

    private y(long j10, int i10, zt.f fVar) {
        while (i10 < 0) {
            i10 += 1000000000;
            j10 = qt.c.m(j10, 1L);
        }
        while (i10 >= 1000000000) {
            i10 -= 1000000000;
            j10 = qt.c.f(j10, 1L);
        }
        if (j10 < 0 && i10 > 0) {
            j10++;
            i10 -= 1000000000;
        }
        this.f38796d = j10;
        this.f38797e = i10;
        this.f38798i = fVar;
    }

    private void e(StringBuilder sb2) {
        if (i()) {
            sb2.append('-');
            sb2.append(Math.abs(this.f38796d));
        } else {
            sb2.append(this.f38796d);
        }
        if (this.f38797e != 0) {
            sb2.append('.');
            String valueOf = String.valueOf(Math.abs(this.f38797e));
            for (int length = 9 - valueOf.length(); length > 0; length--) {
                sb2.append('0');
            }
            sb2.append(valueOf);
        }
    }

    public static y k(long j10, int i10) {
        if (j10 == 0 && i10 == 0) {
            return f38792o;
        }
        return new y(j10, i10, zt.f.POSIX);
    }

    public static y l(long j10, int i10) {
        if (j10 == 0 && i10 == 0) {
            return f38793p;
        }
        return new y(j10, i10, zt.f.UTC);
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
        if (this.f38798i == yVar.f38798i) {
            long j10 = this.f38796d;
            long j11 = yVar.f38796d;
            if (j10 < j11) {
                return -1;
            }
            if (j10 > j11) {
                return 1;
            }
            return this.f38797e - yVar.f38797e;
        }
        throw new ClassCastException("Different time scales.");
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof y) {
            y yVar = (y) obj;
            if (this.f38796d == yVar.f38796d && this.f38797e == yVar.f38797e && this.f38798i == yVar.f38798i) {
                return true;
            }
        }
        return false;
    }

    public int f() {
        int i10 = this.f38797e;
        if (i10 < 0) {
            return i10 + 1000000000;
        }
        return i10;
    }

    public zt.f g() {
        return this.f38798i;
    }

    public long h() {
        long j10 = this.f38796d;
        if (this.f38797e < 0) {
            return j10 - 1;
        }
        return j10;
    }

    public int hashCode() {
        long j10 = this.f38796d;
        return ((((161 + ((int) (j10 ^ (j10 >>> 32)))) * 23) + this.f38797e) * 23) + this.f38798i.hashCode();
    }

    public boolean i() {
        if (this.f38796d >= 0 && this.f38797e >= 0) {
            return false;
        }
        return true;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        e(sb2);
        sb2.append("s [");
        sb2.append(this.f38798i.name());
        sb2.append(']');
        return sb2.toString();
    }
}
