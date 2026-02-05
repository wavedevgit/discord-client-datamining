package net.time4j;

import java.io.InvalidObjectException;
import java.io.ObjectInputStream;
import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y implements pt.l0, Comparable, Serializable {

    /* renamed from: o  reason: collision with root package name */
    private static final y f40297o;

    /* renamed from: p  reason: collision with root package name */
    private static final y f40298p;

    /* renamed from: q  reason: collision with root package name */
    public static final pt.j0 f40299q;

    /* renamed from: r  reason: collision with root package name */
    public static final pt.j0 f40300r;
    private static final long serialVersionUID = -4150291820807606229L;

    /* renamed from: d  reason: collision with root package name */
    private final transient long f40301d;

    /* renamed from: e  reason: collision with root package name */
    private final transient int f40302e;

    /* renamed from: i  reason: collision with root package name */
    private final transient wt.f f40303i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements pt.j0 {

        /* renamed from: d  reason: collision with root package name */
        private final wt.f f40304d;

        private b(wt.f fVar) {
            this.f40304d = fVar;
        }
    }

    static {
        wt.f fVar = wt.f.POSIX;
        f40297o = new y(0L, 0, fVar);
        wt.f fVar2 = wt.f.UTC;
        f40298p = new y(0L, 0, fVar2);
        f40299q = new b(fVar);
        f40300r = new b(fVar2);
    }

    private y(long j10, int i10, wt.f fVar) {
        while (i10 < 0) {
            i10 += 1000000000;
            j10 = nt.c.m(j10, 1L);
        }
        while (i10 >= 1000000000) {
            i10 -= 1000000000;
            j10 = nt.c.f(j10, 1L);
        }
        if (j10 < 0 && i10 > 0) {
            j10++;
            i10 -= 1000000000;
        }
        this.f40301d = j10;
        this.f40302e = i10;
        this.f40303i = fVar;
    }

    private void e(StringBuilder sb2) {
        if (i()) {
            sb2.append('-');
            sb2.append(Math.abs(this.f40301d));
        } else {
            sb2.append(this.f40301d);
        }
        if (this.f40302e != 0) {
            sb2.append('.');
            String valueOf = String.valueOf(Math.abs(this.f40302e));
            for (int length = 9 - valueOf.length(); length > 0; length--) {
                sb2.append('0');
            }
            sb2.append(valueOf);
        }
    }

    public static y k(long j10, int i10) {
        if (j10 == 0 && i10 == 0) {
            return f40297o;
        }
        return new y(j10, i10, wt.f.POSIX);
    }

    public static y l(long j10, int i10) {
        if (j10 == 0 && i10 == 0) {
            return f40298p;
        }
        return new y(j10, i10, wt.f.UTC);
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
        if (this.f40303i == yVar.f40303i) {
            long j10 = this.f40301d;
            long j11 = yVar.f40301d;
            if (j10 < j11) {
                return -1;
            }
            if (j10 > j11) {
                return 1;
            }
            return this.f40302e - yVar.f40302e;
        }
        throw new ClassCastException("Different time scales.");
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof y) {
            y yVar = (y) obj;
            if (this.f40301d == yVar.f40301d && this.f40302e == yVar.f40302e && this.f40303i == yVar.f40303i) {
                return true;
            }
        }
        return false;
    }

    public int f() {
        int i10 = this.f40302e;
        if (i10 < 0) {
            return i10 + 1000000000;
        }
        return i10;
    }

    public wt.f g() {
        return this.f40303i;
    }

    public long h() {
        long j10 = this.f40301d;
        if (this.f40302e < 0) {
            return j10 - 1;
        }
        return j10;
    }

    public int hashCode() {
        long j10 = this.f40301d;
        return ((((161 + ((int) (j10 ^ (j10 >>> 32)))) * 23) + this.f40302e) * 23) + this.f40303i.hashCode();
    }

    public boolean i() {
        if (this.f40301d >= 0 && this.f40302e >= 0) {
            return false;
        }
        return true;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        e(sb2);
        sb2.append("s [");
        sb2.append(this.f40303i.name());
        sb2.append(']');
        return sb2.toString();
    }
}
