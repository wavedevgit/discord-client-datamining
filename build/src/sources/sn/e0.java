package sn;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e0 {

    /* renamed from: a  reason: collision with root package name */
    private final int f49851a;

    /* renamed from: b  reason: collision with root package name */
    private final int f49852b;

    /* renamed from: c  reason: collision with root package name */
    private final int f49853c;

    public e0(int i10, int i11, int i12) {
        this.f49851a = i10;
        this.f49852b = i11;
        this.f49853c = i12;
    }

    public final int a() {
        return this.f49852b;
    }

    public final int b() {
        return this.f49853c;
    }

    public final int c() {
        return this.f49851a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof e0)) {
            return false;
        }
        e0 e0Var = (e0) obj;
        if (this.f49851a == e0Var.f49851a && this.f49852b == e0Var.f49852b && this.f49853c == e0Var.f49853c) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((Integer.hashCode(this.f49851a) * 31) + Integer.hashCode(this.f49852b)) * 31) + Integer.hashCode(this.f49853c);
    }

    public String toString() {
        int i10 = this.f49851a;
        int i11 = this.f49852b;
        int i12 = this.f49853c;
        return "FrameMetadata(width=" + i10 + ", height=" + i11 + ", rotation=" + i12 + ")";
    }
}
