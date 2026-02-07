package un;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e0 {

    /* renamed from: a  reason: collision with root package name */
    private final int f51745a;

    /* renamed from: b  reason: collision with root package name */
    private final int f51746b;

    /* renamed from: c  reason: collision with root package name */
    private final int f51747c;

    public e0(int i10, int i11, int i12) {
        this.f51745a = i10;
        this.f51746b = i11;
        this.f51747c = i12;
    }

    public final int a() {
        return this.f51746b;
    }

    public final int b() {
        return this.f51747c;
    }

    public final int c() {
        return this.f51745a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof e0)) {
            return false;
        }
        e0 e0Var = (e0) obj;
        if (this.f51745a == e0Var.f51745a && this.f51746b == e0Var.f51746b && this.f51747c == e0Var.f51747c) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((Integer.hashCode(this.f51745a) * 31) + Integer.hashCode(this.f51746b)) * 31) + Integer.hashCode(this.f51747c);
    }

    public String toString() {
        int i10 = this.f51745a;
        int i11 = this.f51746b;
        int i12 = this.f51747c;
        return "FrameMetadata(width=" + i10 + ", height=" + i11 + ", rotation=" + i12 + ")";
    }
}
