package net.time4j;

import java.io.InvalidObjectException;
import java.io.ObjectInputStream;
import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y implements mt.l0, Comparable, Serializable {

    /* renamed from: o  reason: collision with root package name */
    private static final y f40837o;

    /* renamed from: p  reason: collision with root package name */
    private static final y f40838p;

    /* renamed from: q  reason: collision with root package name */
    public static final mt.j0 f40839q;

    /* renamed from: r  reason: collision with root package name */
    public static final mt.j0 f40840r;
    private static final long serialVersionUID = -4150291820807606229L;

    /* renamed from: d  reason: collision with root package name */
    private final transient long f40841d;

    /* renamed from: e  reason: collision with root package name */
    private final transient int f40842e;

    /* renamed from: i  reason: collision with root package name */
    private final transient tt.f f40843i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements mt.j0 {

        /* renamed from: d  reason: collision with root package name */
        private final tt.f f40844d;

        private b(tt.f fVar) {
            this.f40844d = fVar;
        }
    }

    static {
        tt.f fVar = tt.f.POSIX;
        f40837o = new y(0L, 0, fVar);
        tt.f fVar2 = tt.f.UTC;
        f40838p = new y(0L, 0, fVar2);
        f40839q = new b(fVar);
        f40840r = new b(fVar2);
    }

    private y(long j10, int i10, tt.f fVar) {
        while (i10 < 0) {
            i10 += 1000000000;
            j10 = kt.c.m(j10, 1L);
        }
        while (i10 >= 1000000000) {
            i10 -= 1000000000;
            j10 = kt.c.f(j10, 1L);
        }
        if (j10 < 0 && i10 > 0) {
            j10++;
            i10 -= 1000000000;
        }
        this.f40841d = j10;
        this.f40842e = i10;
        this.f40843i = fVar;
    }

    private void e(StringBuilder sb2) {
        if (i()) {
            sb2.append('-');
            sb2.append(Math.abs(this.f40841d));
        } else {
            sb2.append(this.f40841d);
        }
        if (this.f40842e != 0) {
            sb2.append('.');
            String valueOf = String.valueOf(Math.abs(this.f40842e));
            for (int length = 9 - valueOf.length(); length > 0; length--) {
                sb2.append('0');
            }
            sb2.append(valueOf);
        }
    }

    public static y j(long j10, int i10) {
        if (j10 == 0 && i10 == 0) {
            return f40837o;
        }
        return new y(j10, i10, tt.f.POSIX);
    }

    public static y k(long j10, int i10) {
        if (j10 == 0 && i10 == 0) {
            return f40838p;
        }
        return new y(j10, i10, tt.f.UTC);
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
        if (this.f40843i == yVar.f40843i) {
            long j10 = this.f40841d;
            long j11 = yVar.f40841d;
            if (j10 < j11) {
                return -1;
            }
            if (j10 > j11) {
                return 1;
            }
            return this.f40842e - yVar.f40842e;
        }
        throw new ClassCastException("Different time scales.");
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof y) {
            y yVar = (y) obj;
            if (this.f40841d == yVar.f40841d && this.f40842e == yVar.f40842e && this.f40843i == yVar.f40843i) {
                return true;
            }
        }
        return false;
    }

    public int f() {
        int i10 = this.f40842e;
        if (i10 < 0) {
            return i10 + 1000000000;
        }
        return i10;
    }

    public tt.f g() {
        return this.f40843i;
    }

    public long h() {
        long j10 = this.f40841d;
        if (this.f40842e < 0) {
            return j10 - 1;
        }
        return j10;
    }

    public int hashCode() {
        long j10 = this.f40841d;
        return ((((161 + ((int) (j10 ^ (j10 >>> 32)))) * 23) + this.f40842e) * 23) + this.f40843i.hashCode();
    }

    public boolean i() {
        if (this.f40841d >= 0 && this.f40842e >= 0) {
            return false;
        }
        return true;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        e(sb2);
        sb2.append("s [");
        sb2.append(this.f40843i.name());
        sb2.append(']');
        return sb2.toString();
    }
}
