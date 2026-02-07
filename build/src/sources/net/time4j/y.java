package net.time4j;

import java.io.InvalidObjectException;
import java.io.ObjectInputStream;
import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y implements rt.l0, Comparable, Serializable {

    /* renamed from: o  reason: collision with root package name */
    private static final y f39700o;

    /* renamed from: p  reason: collision with root package name */
    private static final y f39701p;

    /* renamed from: q  reason: collision with root package name */
    public static final rt.j0 f39702q;

    /* renamed from: r  reason: collision with root package name */
    public static final rt.j0 f39703r;
    private static final long serialVersionUID = -4150291820807606229L;

    /* renamed from: d  reason: collision with root package name */
    private final transient long f39704d;

    /* renamed from: e  reason: collision with root package name */
    private final transient int f39705e;

    /* renamed from: i  reason: collision with root package name */
    private final transient yt.f f39706i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements rt.j0 {

        /* renamed from: d  reason: collision with root package name */
        private final yt.f f39707d;

        private b(yt.f fVar) {
            this.f39707d = fVar;
        }
    }

    static {
        yt.f fVar = yt.f.POSIX;
        f39700o = new y(0L, 0, fVar);
        yt.f fVar2 = yt.f.UTC;
        f39701p = new y(0L, 0, fVar2);
        f39702q = new b(fVar);
        f39703r = new b(fVar2);
    }

    private y(long j10, int i10, yt.f fVar) {
        while (i10 < 0) {
            i10 += 1000000000;
            j10 = pt.c.m(j10, 1L);
        }
        while (i10 >= 1000000000) {
            i10 -= 1000000000;
            j10 = pt.c.f(j10, 1L);
        }
        if (j10 < 0 && i10 > 0) {
            j10++;
            i10 -= 1000000000;
        }
        this.f39704d = j10;
        this.f39705e = i10;
        this.f39706i = fVar;
    }

    private void e(StringBuilder sb2) {
        if (i()) {
            sb2.append('-');
            sb2.append(Math.abs(this.f39704d));
        } else {
            sb2.append(this.f39704d);
        }
        if (this.f39705e != 0) {
            sb2.append('.');
            String valueOf = String.valueOf(Math.abs(this.f39705e));
            for (int length = 9 - valueOf.length(); length > 0; length--) {
                sb2.append('0');
            }
            sb2.append(valueOf);
        }
    }

    public static y j(long j10, int i10) {
        if (j10 == 0 && i10 == 0) {
            return f39700o;
        }
        return new y(j10, i10, yt.f.POSIX);
    }

    public static y k(long j10, int i10) {
        if (j10 == 0 && i10 == 0) {
            return f39701p;
        }
        return new y(j10, i10, yt.f.UTC);
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
        if (this.f39706i == yVar.f39706i) {
            long j10 = this.f39704d;
            long j11 = yVar.f39704d;
            if (j10 < j11) {
                return -1;
            }
            if (j10 > j11) {
                return 1;
            }
            return this.f39705e - yVar.f39705e;
        }
        throw new ClassCastException("Different time scales.");
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof y) {
            y yVar = (y) obj;
            if (this.f39704d == yVar.f39704d && this.f39705e == yVar.f39705e && this.f39706i == yVar.f39706i) {
                return true;
            }
        }
        return false;
    }

    public int f() {
        int i10 = this.f39705e;
        if (i10 < 0) {
            return i10 + 1000000000;
        }
        return i10;
    }

    public yt.f g() {
        return this.f39706i;
    }

    public long h() {
        long j10 = this.f39704d;
        if (this.f39705e < 0) {
            return j10 - 1;
        }
        return j10;
    }

    public int hashCode() {
        long j10 = this.f39704d;
        return ((((161 + ((int) (j10 ^ (j10 >>> 32)))) * 23) + this.f39705e) * 23) + this.f39706i.hashCode();
    }

    public boolean i() {
        if (this.f39704d >= 0 && this.f39705e >= 0) {
            return false;
        }
        return true;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        e(sb2);
        sb2.append("s [");
        sb2.append(this.f39706i.name());
        sb2.append(']');
        return sb2.toString();
    }
}
