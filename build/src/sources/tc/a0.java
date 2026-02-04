package tc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a0 {

    /* renamed from: c  reason: collision with root package name */
    public static final a0 f49894c = new a0(0, 0);

    /* renamed from: a  reason: collision with root package name */
    public final long f49895a;

    /* renamed from: b  reason: collision with root package name */
    public final long f49896b;

    public a0(long j10, long j11) {
        this.f49895a = j10;
        this.f49896b = j11;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && a0.class == obj.getClass()) {
            a0 a0Var = (a0) obj;
            if (this.f49895a == a0Var.f49895a && this.f49896b == a0Var.f49896b) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return (((int) this.f49895a) * 31) + ((int) this.f49896b);
    }

    public String toString() {
        return "[timeUs=" + this.f49895a + ", position=" + this.f49896b + "]";
    }
}
