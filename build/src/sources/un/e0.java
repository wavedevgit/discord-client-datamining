package un;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e0 {

    /* renamed from: a  reason: collision with root package name */
    private final int f51697a;

    /* renamed from: b  reason: collision with root package name */
    private final int f51698b;

    /* renamed from: c  reason: collision with root package name */
    private final int f51699c;

    public e0(int i10, int i11, int i12) {
        this.f51697a = i10;
        this.f51698b = i11;
        this.f51699c = i12;
    }

    public final int a() {
        return this.f51698b;
    }

    public final int b() {
        return this.f51699c;
    }

    public final int c() {
        return this.f51697a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof e0)) {
            return false;
        }
        e0 e0Var = (e0) obj;
        if (this.f51697a == e0Var.f51697a && this.f51698b == e0Var.f51698b && this.f51699c == e0Var.f51699c) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((Integer.hashCode(this.f51697a) * 31) + Integer.hashCode(this.f51698b)) * 31) + Integer.hashCode(this.f51699c);
    }

    public String toString() {
        int i10 = this.f51697a;
        int i11 = this.f51698b;
        int i12 = this.f51699c;
        return "FrameMetadata(width=" + i10 + ", height=" + i11 + ", rotation=" + i12 + ")";
    }
}
