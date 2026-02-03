package kt;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h implements Comparable, Serializable {

    /* renamed from: d  reason: collision with root package name */
    public static final h f36684d = new h(0);

    /* renamed from: e  reason: collision with root package name */
    public static final h f36685e = new h(1);
    private final long days;

    private h(long j10) {
        this.days = j10;
    }

    public static h e(long j10) {
        if (j10 == 0) {
            return f36684d;
        }
        if (j10 == 1) {
            return f36685e;
        }
        return new h(j10);
    }

    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(h hVar) {
        long j10 = this.days;
        long j11 = hVar.days;
        if (j10 < j11) {
            return -1;
        }
        if (j10 > j11) {
            return 1;
        }
        return 0;
    }

    public long d() {
        return this.days;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if ((obj instanceof h) && this.days == ((h) obj).days) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.days;
        return (int) (j10 ^ (j10 >>> 32));
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        if (this.days < 0) {
            sb2.append('-');
        }
        sb2.append('P');
        sb2.append(Math.abs(this.days));
        sb2.append('D');
        return sb2.toString();
    }
}
