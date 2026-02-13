package net.time4j;

import java.io.InvalidObjectException;
import java.io.ObjectInputStream;
import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y implements bu.l0, Comparable, Serializable {

    /* renamed from: o  reason: collision with root package name */
    private static final y f38365o;

    /* renamed from: p  reason: collision with root package name */
    private static final y f38366p;

    /* renamed from: q  reason: collision with root package name */
    public static final bu.j0 f38367q;

    /* renamed from: r  reason: collision with root package name */
    public static final bu.j0 f38368r;
    private static final long serialVersionUID = -4150291820807606229L;

    /* renamed from: d  reason: collision with root package name */
    private final transient long f38369d;

    /* renamed from: e  reason: collision with root package name */
    private final transient int f38370e;

    /* renamed from: i  reason: collision with root package name */
    private final transient iu.f f38371i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements bu.j0 {

        /* renamed from: d  reason: collision with root package name */
        private final iu.f f38372d;

        private b(iu.f fVar) {
            this.f38372d = fVar;
        }
    }

    static {
        iu.f fVar = iu.f.POSIX;
        f38365o = new y(0L, 0, fVar);
        iu.f fVar2 = iu.f.UTC;
        f38366p = new y(0L, 0, fVar2);
        f38367q = new b(fVar);
        f38368r = new b(fVar2);
    }

    private y(long j10, int i10, iu.f fVar) {
        while (i10 < 0) {
            i10 += 1000000000;
            j10 = zt.c.m(j10, 1L);
        }
        while (i10 >= 1000000000) {
            i10 -= 1000000000;
            j10 = zt.c.f(j10, 1L);
        }
        if (j10 < 0 && i10 > 0) {
            j10++;
            i10 -= 1000000000;
        }
        this.f38369d = j10;
        this.f38370e = i10;
        this.f38371i = fVar;
    }

    private void e(StringBuilder sb2) {
        if (i()) {
            sb2.append('-');
            sb2.append(Math.abs(this.f38369d));
        } else {
            sb2.append(this.f38369d);
        }
        if (this.f38370e != 0) {
            sb2.append('.');
            String valueOf = String.valueOf(Math.abs(this.f38370e));
            for (int length = 9 - valueOf.length(); length > 0; length--) {
                sb2.append('0');
            }
            sb2.append(valueOf);
        }
    }

    public static y k(long j10, int i10) {
        if (j10 == 0 && i10 == 0) {
            return f38365o;
        }
        return new y(j10, i10, iu.f.POSIX);
    }

    public static y l(long j10, int i10) {
        if (j10 == 0 && i10 == 0) {
            return f38366p;
        }
        return new y(j10, i10, iu.f.UTC);
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
        if (this.f38371i == yVar.f38371i) {
            long j10 = this.f38369d;
            long j11 = yVar.f38369d;
            if (j10 < j11) {
                return -1;
            }
            if (j10 > j11) {
                return 1;
            }
            return this.f38370e - yVar.f38370e;
        }
        throw new ClassCastException("Different time scales.");
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof y) {
            y yVar = (y) obj;
            if (this.f38369d == yVar.f38369d && this.f38370e == yVar.f38370e && this.f38371i == yVar.f38371i) {
                return true;
            }
        }
        return false;
    }

    public int f() {
        int i10 = this.f38370e;
        if (i10 < 0) {
            return i10 + 1000000000;
        }
        return i10;
    }

    public iu.f g() {
        return this.f38371i;
    }

    public long h() {
        long j10 = this.f38369d;
        if (this.f38370e < 0) {
            return j10 - 1;
        }
        return j10;
    }

    public int hashCode() {
        long j10 = this.f38369d;
        return ((((161 + ((int) (j10 ^ (j10 >>> 32)))) * 23) + this.f38370e) * 23) + this.f38371i.hashCode();
    }

    public boolean i() {
        if (this.f38369d >= 0 && this.f38370e >= 0) {
            return false;
        }
        return true;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        e(sb2);
        sb2.append("s [");
        sb2.append(this.f38371i.name());
        sb2.append(']');
        return sb2.toString();
    }
}
