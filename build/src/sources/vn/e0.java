package vn;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e0 {

    /* renamed from: a  reason: collision with root package name */
    private final int f52605a;

    /* renamed from: b  reason: collision with root package name */
    private final int f52606b;

    /* renamed from: c  reason: collision with root package name */
    private final int f52607c;

    public e0(int i10, int i11, int i12) {
        this.f52605a = i10;
        this.f52606b = i11;
        this.f52607c = i12;
    }

    public final int a() {
        return this.f52606b;
    }

    public final int b() {
        return this.f52607c;
    }

    public final int c() {
        return this.f52605a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof e0)) {
            return false;
        }
        e0 e0Var = (e0) obj;
        if (this.f52605a == e0Var.f52605a && this.f52606b == e0Var.f52606b && this.f52607c == e0Var.f52607c) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((Integer.hashCode(this.f52605a) * 31) + Integer.hashCode(this.f52606b)) * 31) + Integer.hashCode(this.f52607c);
    }

    public String toString() {
        int i10 = this.f52605a;
        int i11 = this.f52606b;
        int i12 = this.f52607c;
        return "FrameMetadata(width=" + i10 + ", height=" + i11 + ", rotation=" + i12 + ")";
    }
}
