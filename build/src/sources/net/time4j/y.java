package net.time4j;

import java.io.InvalidObjectException;
import java.io.ObjectInputStream;
import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y implements kt.l0, Comparable, Serializable {

    /* renamed from: o  reason: collision with root package name */
    private static final y f40798o;

    /* renamed from: p  reason: collision with root package name */
    private static final y f40799p;

    /* renamed from: q  reason: collision with root package name */
    public static final kt.j0 f40800q;

    /* renamed from: r  reason: collision with root package name */
    public static final kt.j0 f40801r;
    private static final long serialVersionUID = -4150291820807606229L;

    /* renamed from: d  reason: collision with root package name */
    private final transient long f40802d;

    /* renamed from: e  reason: collision with root package name */
    private final transient int f40803e;

    /* renamed from: i  reason: collision with root package name */
    private final transient rt.f f40804i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements kt.j0 {

        /* renamed from: d  reason: collision with root package name */
        private final rt.f f40805d;

        private b(rt.f fVar) {
            this.f40805d = fVar;
        }
    }

    static {
        rt.f fVar = rt.f.POSIX;
        f40798o = new y(0L, 0, fVar);
        rt.f fVar2 = rt.f.UTC;
        f40799p = new y(0L, 0, fVar2);
        f40800q = new b(fVar);
        f40801r = new b(fVar2);
    }

    private y(long j10, int i10, rt.f fVar) {
        while (i10 < 0) {
            i10 += 1000000000;
            j10 = ht.c.m(j10, 1L);
        }
        while (i10 >= 1000000000) {
            i10 -= 1000000000;
            j10 = ht.c.f(j10, 1L);
        }
        if (j10 < 0 && i10 > 0) {
            j10++;
            i10 -= 1000000000;
        }
        this.f40802d = j10;
        this.f40803e = i10;
        this.f40804i = fVar;
    }

    private void e(StringBuilder sb2) {
        if (i()) {
            sb2.append('-');
            sb2.append(Math.abs(this.f40802d));
        } else {
            sb2.append(this.f40802d);
        }
        if (this.f40803e != 0) {
            sb2.append('.');
            String valueOf = String.valueOf(Math.abs(this.f40803e));
            for (int length = 9 - valueOf.length(); length > 0; length--) {
                sb2.append('0');
            }
            sb2.append(valueOf);
        }
    }

    public static y k(long j10, int i10) {
        if (j10 == 0 && i10 == 0) {
            return f40798o;
        }
        return new y(j10, i10, rt.f.POSIX);
    }

    public static y l(long j10, int i10) {
        if (j10 == 0 && i10 == 0) {
            return f40799p;
        }
        return new y(j10, i10, rt.f.UTC);
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
        if (this.f40804i == yVar.f40804i) {
            long j10 = this.f40802d;
            long j11 = yVar.f40802d;
            if (j10 < j11) {
                return -1;
            }
            if (j10 > j11) {
                return 1;
            }
            return this.f40803e - yVar.f40803e;
        }
        throw new ClassCastException("Different time scales.");
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof y) {
            y yVar = (y) obj;
            if (this.f40802d == yVar.f40802d && this.f40803e == yVar.f40803e && this.f40804i == yVar.f40804i) {
                return true;
            }
        }
        return false;
    }

    public int f() {
        int i10 = this.f40803e;
        if (i10 < 0) {
            return i10 + 1000000000;
        }
        return i10;
    }

    public rt.f g() {
        return this.f40804i;
    }

    public long h() {
        long j10 = this.f40802d;
        if (this.f40803e < 0) {
            return j10 - 1;
        }
        return j10;
    }

    public int hashCode() {
        long j10 = this.f40802d;
        return ((((161 + ((int) (j10 ^ (j10 >>> 32)))) * 23) + this.f40803e) * 23) + this.f40804i.hashCode();
    }

    public boolean i() {
        if (this.f40802d >= 0 && this.f40803e >= 0) {
            return false;
        }
        return true;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        e(sb2);
        sb2.append("s [");
        sb2.append(this.f40804i.name());
        sb2.append(']');
        return sb2.toString();
    }
}
