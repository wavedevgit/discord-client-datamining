package mn;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e0 {

    /* renamed from: a  reason: collision with root package name */
    private final int f39184a;

    /* renamed from: b  reason: collision with root package name */
    private final int f39185b;

    /* renamed from: c  reason: collision with root package name */
    private final int f39186c;

    public e0(int i10, int i11, int i12) {
        this.f39184a = i10;
        this.f39185b = i11;
        this.f39186c = i12;
    }

    public final int a() {
        return this.f39185b;
    }

    public final int b() {
        return this.f39186c;
    }

    public final int c() {
        return this.f39184a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof e0)) {
            return false;
        }
        e0 e0Var = (e0) obj;
        if (this.f39184a == e0Var.f39184a && this.f39185b == e0Var.f39185b && this.f39186c == e0Var.f39186c) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((Integer.hashCode(this.f39184a) * 31) + Integer.hashCode(this.f39185b)) * 31) + Integer.hashCode(this.f39186c);
    }

    public String toString() {
        int i10 = this.f39184a;
        int i11 = this.f39185b;
        int i12 = this.f39186c;
        return "FrameMetadata(width=" + i10 + ", height=" + i11 + ", rotation=" + i12 + ")";
    }
}
