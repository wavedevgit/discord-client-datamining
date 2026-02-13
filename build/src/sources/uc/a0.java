package uc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a0 {

    /* renamed from: c  reason: collision with root package name */
    public static final a0 f51179c = new a0(0, 0);

    /* renamed from: a  reason: collision with root package name */
    public final long f51180a;

    /* renamed from: b  reason: collision with root package name */
    public final long f51181b;

    public a0(long j10, long j11) {
        this.f51180a = j10;
        this.f51181b = j11;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && a0.class == obj.getClass()) {
            a0 a0Var = (a0) obj;
            if (this.f51180a == a0Var.f51180a && this.f51181b == a0Var.f51181b) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return (((int) this.f51180a) * 31) + ((int) this.f51181b);
    }

    public String toString() {
        return "[timeUs=" + this.f51180a + ", position=" + this.f51181b + "]";
    }
}
