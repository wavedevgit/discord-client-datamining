package fo;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e0 {

    /* renamed from: a  reason: collision with root package name */
    private final int f24001a;

    /* renamed from: b  reason: collision with root package name */
    private final int f24002b;

    /* renamed from: c  reason: collision with root package name */
    private final int f24003c;

    public e0(int i10, int i11, int i12) {
        this.f24001a = i10;
        this.f24002b = i11;
        this.f24003c = i12;
    }

    public final int a() {
        return this.f24002b;
    }

    public final int b() {
        return this.f24003c;
    }

    public final int c() {
        return this.f24001a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof e0)) {
            return false;
        }
        e0 e0Var = (e0) obj;
        if (this.f24001a == e0Var.f24001a && this.f24002b == e0Var.f24002b && this.f24003c == e0Var.f24003c) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((Integer.hashCode(this.f24001a) * 31) + Integer.hashCode(this.f24002b)) * 31) + Integer.hashCode(this.f24003c);
    }

    public String toString() {
        int i10 = this.f24001a;
        int i11 = this.f24002b;
        int i12 = this.f24003c;
        return "FrameMetadata(width=" + i10 + ", height=" + i11 + ", rotation=" + i12 + ")";
    }
}
