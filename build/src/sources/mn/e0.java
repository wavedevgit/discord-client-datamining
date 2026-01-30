package mn;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e0 {

    /* renamed from: a  reason: collision with root package name */
    private final int f39200a;

    /* renamed from: b  reason: collision with root package name */
    private final int f39201b;

    /* renamed from: c  reason: collision with root package name */
    private final int f39202c;

    public e0(int i10, int i11, int i12) {
        this.f39200a = i10;
        this.f39201b = i11;
        this.f39202c = i12;
    }

    public final int a() {
        return this.f39201b;
    }

    public final int b() {
        return this.f39202c;
    }

    public final int c() {
        return this.f39200a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof e0)) {
            return false;
        }
        e0 e0Var = (e0) obj;
        if (this.f39200a == e0Var.f39200a && this.f39201b == e0Var.f39201b && this.f39202c == e0Var.f39202c) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((Integer.hashCode(this.f39200a) * 31) + Integer.hashCode(this.f39201b)) * 31) + Integer.hashCode(this.f39202c);
    }

    public String toString() {
        int i10 = this.f39200a;
        int i11 = this.f39201b;
        int i12 = this.f39202c;
        return "FrameMetadata(width=" + i10 + ", height=" + i11 + ", rotation=" + i12 + ")";
    }
}
