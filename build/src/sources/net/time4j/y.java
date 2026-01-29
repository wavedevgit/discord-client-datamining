package net.time4j;

import java.io.InvalidObjectException;
import java.io.ObjectInputStream;
import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y implements jt.l0, Comparable, Serializable {

    /* renamed from: o  reason: collision with root package name */
    private static final y f40919o;

    /* renamed from: p  reason: collision with root package name */
    private static final y f40920p;

    /* renamed from: q  reason: collision with root package name */
    public static final jt.j0 f40921q;

    /* renamed from: r  reason: collision with root package name */
    public static final jt.j0 f40922r;
    private static final long serialVersionUID = -4150291820807606229L;

    /* renamed from: d  reason: collision with root package name */
    private final transient long f40923d;

    /* renamed from: e  reason: collision with root package name */
    private final transient int f40924e;

    /* renamed from: i  reason: collision with root package name */
    private final transient qt.f f40925i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements jt.j0 {

        /* renamed from: d  reason: collision with root package name */
        private final qt.f f40926d;

        private b(qt.f fVar) {
            this.f40926d = fVar;
        }
    }

    static {
        qt.f fVar = qt.f.POSIX;
        f40919o = new y(0L, 0, fVar);
        qt.f fVar2 = qt.f.UTC;
        f40920p = new y(0L, 0, fVar2);
        f40921q = new b(fVar);
        f40922r = new b(fVar2);
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
        this.f40923d = j10;
        this.f40924e = i10;
        this.f40925i = fVar;
    }

    private void e(StringBuilder sb2) {
        if (i()) {
            sb2.append('-');
            sb2.append(Math.abs(this.f40923d));
        } else {
            sb2.append(this.f40923d);
        }
        if (this.f40924e != 0) {
            sb2.append('.');
            String valueOf = String.valueOf(Math.abs(this.f40924e));
            for (int length = 9 - valueOf.length(); length > 0; length--) {
                sb2.append('0');
            }
            sb2.append(valueOf);
        }
    }

    public static y j(long j10, int i10) {
        if (j10 == 0 && i10 == 0) {
            return f40919o;
        }
        return new y(j10, i10, qt.f.POSIX);
    }

    public static y k(long j10, int i10) {
        if (j10 == 0 && i10 == 0) {
            return f40920p;
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
        if (this.f40925i == yVar.f40925i) {
            long j10 = this.f40923d;
            long j11 = yVar.f40923d;
            if (j10 < j11) {
                return -1;
            }
            if (j10 > j11) {
                return 1;
            }
            return this.f40924e - yVar.f40924e;
        }
        throw new ClassCastException("Different time scales.");
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof y) {
            y yVar = (y) obj;
            if (this.f40923d == yVar.f40923d && this.f40924e == yVar.f40924e && this.f40925i == yVar.f40925i) {
                return true;
            }
        }
        return false;
    }

    public int f() {
        int i10 = this.f40924e;
        if (i10 < 0) {
            return i10 + 1000000000;
        }
        return i10;
    }

    public qt.f g() {
        return this.f40925i;
    }

    public long h() {
        long j10 = this.f40923d;
        if (this.f40924e < 0) {
            return j10 - 1;
        }
        return j10;
    }

    public int hashCode() {
        long j10 = this.f40923d;
        return ((((161 + ((int) (j10 ^ (j10 >>> 32)))) * 23) + this.f40924e) * 23) + this.f40925i.hashCode();
    }

    public boolean i() {
        if (this.f40923d >= 0 && this.f40924e >= 0) {
            return false;
        }
        return true;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        e(sb2);
        sb2.append("s [");
        sb2.append(this.f40925i.name());
        sb2.append(']');
        return sb2.toString();
    }
}
