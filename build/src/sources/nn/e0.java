package nn;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e0 {

    /* renamed from: a  reason: collision with root package name */
    private final int f41943a;

    /* renamed from: b  reason: collision with root package name */
    private final int f41944b;

    /* renamed from: c  reason: collision with root package name */
    private final int f41945c;

    public e0(int i10, int i11, int i12) {
        this.f41943a = i10;
        this.f41944b = i11;
        this.f41945c = i12;
    }

    public final int a() {
        return this.f41944b;
    }

    public final int b() {
        return this.f41945c;
    }

    public final int c() {
        return this.f41943a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof e0)) {
            return false;
        }
        e0 e0Var = (e0) obj;
        if (this.f41943a == e0Var.f41943a && this.f41944b == e0Var.f41944b && this.f41945c == e0Var.f41945c) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((Integer.hashCode(this.f41943a) * 31) + Integer.hashCode(this.f41944b)) * 31) + Integer.hashCode(this.f41945c);
    }

    public String toString() {
        int i10 = this.f41943a;
        int i11 = this.f41944b;
        int i12 = this.f41945c;
        return "FrameMetadata(width=" + i10 + ", height=" + i11 + ", rotation=" + i12 + ")";
    }
}
