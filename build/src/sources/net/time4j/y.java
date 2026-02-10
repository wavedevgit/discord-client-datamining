package net.time4j;

import java.io.InvalidObjectException;
import java.io.ObjectInputStream;
import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y implements bu.l0, Comparable, Serializable {

    /* renamed from: o  reason: collision with root package name */
    private static final y f37796o;

    /* renamed from: p  reason: collision with root package name */
    private static final y f37797p;

    /* renamed from: q  reason: collision with root package name */
    public static final bu.j0 f37798q;

    /* renamed from: r  reason: collision with root package name */
    public static final bu.j0 f37799r;
    private static final long serialVersionUID = -4150291820807606229L;

    /* renamed from: d  reason: collision with root package name */
    private final transient long f37800d;

    /* renamed from: e  reason: collision with root package name */
    private final transient int f37801e;

    /* renamed from: i  reason: collision with root package name */
    private final transient iu.f f37802i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements bu.j0 {

        /* renamed from: d  reason: collision with root package name */
        private final iu.f f37803d;

        private b(iu.f fVar) {
            this.f37803d = fVar;
        }
    }

    static {
        iu.f fVar = iu.f.POSIX;
        f37796o = new y(0L, 0, fVar);
        iu.f fVar2 = iu.f.UTC;
        f37797p = new y(0L, 0, fVar2);
        f37798q = new b(fVar);
        f37799r = new b(fVar2);
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
        this.f37800d = j10;
        this.f37801e = i10;
        this.f37802i = fVar;
    }

    private void e(StringBuilder sb2) {
        if (i()) {
            sb2.append('-');
            sb2.append(Math.abs(this.f37800d));
        } else {
            sb2.append(this.f37800d);
        }
        if (this.f37801e != 0) {
            sb2.append('.');
            String valueOf = String.valueOf(Math.abs(this.f37801e));
            for (int length = 9 - valueOf.length(); length > 0; length--) {
                sb2.append('0');
            }
            sb2.append(valueOf);
        }
    }

    public static y k(long j10, int i10) {
        if (j10 == 0 && i10 == 0) {
            return f37796o;
        }
        return new y(j10, i10, iu.f.POSIX);
    }

    public static y l(long j10, int i10) {
        if (j10 == 0 && i10 == 0) {
            return f37797p;
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
        if (this.f37802i == yVar.f37802i) {
            long j10 = this.f37800d;
            long j11 = yVar.f37800d;
            if (j10 < j11) {
                return -1;
            }
            if (j10 > j11) {
                return 1;
            }
            return this.f37801e - yVar.f37801e;
        }
        throw new ClassCastException("Different time scales.");
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof y) {
            y yVar = (y) obj;
            if (this.f37800d == yVar.f37800d && this.f37801e == yVar.f37801e && this.f37802i == yVar.f37802i) {
                return true;
            }
        }
        return false;
    }

    public int f() {
        int i10 = this.f37801e;
        if (i10 < 0) {
            return i10 + 1000000000;
        }
        return i10;
    }

    public iu.f g() {
        return this.f37802i;
    }

    public long h() {
        long j10 = this.f37800d;
        if (this.f37801e < 0) {
            return j10 - 1;
        }
        return j10;
    }

    public int hashCode() {
        long j10 = this.f37800d;
        return ((((161 + ((int) (j10 ^ (j10 >>> 32)))) * 23) + this.f37801e) * 23) + this.f37802i.hashCode();
    }

    public boolean i() {
        if (this.f37800d >= 0 && this.f37801e >= 0) {
            return false;
        }
        return true;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        e(sb2);
        sb2.append("s [");
        sb2.append(this.f37802i.name());
        sb2.append(']');
        return sb2.toString();
    }
}
