package uc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a0 {

    /* renamed from: c  reason: collision with root package name */
    public static final a0 f51431c = new a0(0, 0);

    /* renamed from: a  reason: collision with root package name */
    public final long f51432a;

    /* renamed from: b  reason: collision with root package name */
    public final long f51433b;

    public a0(long j10, long j11) {
        this.f51432a = j10;
        this.f51433b = j11;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && a0.class == obj.getClass()) {
            a0 a0Var = (a0) obj;
            if (this.f51432a == a0Var.f51432a && this.f51433b == a0Var.f51433b) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return (((int) this.f51432a) * 31) + ((int) this.f51433b);
    }

    public String toString() {
        return "[timeUs=" + this.f51432a + ", position=" + this.f51433b + "]";
    }
}
