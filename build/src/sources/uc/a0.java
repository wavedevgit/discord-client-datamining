package uc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a0 {

    /* renamed from: c  reason: collision with root package name */
    public static final a0 f50610c = new a0(0, 0);

    /* renamed from: a  reason: collision with root package name */
    public final long f50611a;

    /* renamed from: b  reason: collision with root package name */
    public final long f50612b;

    public a0(long j10, long j11) {
        this.f50611a = j10;
        this.f50612b = j11;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && a0.class == obj.getClass()) {
            a0 a0Var = (a0) obj;
            if (this.f50611a == a0Var.f50611a && this.f50612b == a0Var.f50612b) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return (((int) this.f50611a) * 31) + ((int) this.f50612b);
    }

    public String toString() {
        return "[timeUs=" + this.f50611a + ", position=" + this.f50612b + "]";
    }
}
