package fo;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e0 {

    /* renamed from: a  reason: collision with root package name */
    private final int f24000a;

    /* renamed from: b  reason: collision with root package name */
    private final int f24001b;

    /* renamed from: c  reason: collision with root package name */
    private final int f24002c;

    public e0(int i10, int i11, int i12) {
        this.f24000a = i10;
        this.f24001b = i11;
        this.f24002c = i12;
    }

    public final int a() {
        return this.f24001b;
    }

    public final int b() {
        return this.f24002c;
    }

    public final int c() {
        return this.f24000a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof e0)) {
            return false;
        }
        e0 e0Var = (e0) obj;
        if (this.f24000a == e0Var.f24000a && this.f24001b == e0Var.f24001b && this.f24002c == e0Var.f24002c) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((Integer.hashCode(this.f24000a) * 31) + Integer.hashCode(this.f24001b)) * 31) + Integer.hashCode(this.f24002c);
    }

    public String toString() {
        int i10 = this.f24000a;
        int i11 = this.f24001b;
        int i12 = this.f24002c;
        return "FrameMetadata(width=" + i10 + ", height=" + i11 + ", rotation=" + i12 + ")";
    }
}
