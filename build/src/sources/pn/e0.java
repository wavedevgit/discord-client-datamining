package pn;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e0 {

    /* renamed from: a  reason: collision with root package name */
    private final int f46235a;

    /* renamed from: b  reason: collision with root package name */
    private final int f46236b;

    /* renamed from: c  reason: collision with root package name */
    private final int f46237c;

    public e0(int i10, int i11, int i12) {
        this.f46235a = i10;
        this.f46236b = i11;
        this.f46237c = i12;
    }

    public final int a() {
        return this.f46236b;
    }

    public final int b() {
        return this.f46237c;
    }

    public final int c() {
        return this.f46235a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof e0)) {
            return false;
        }
        e0 e0Var = (e0) obj;
        if (this.f46235a == e0Var.f46235a && this.f46236b == e0Var.f46236b && this.f46237c == e0Var.f46237c) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((Integer.hashCode(this.f46235a) * 31) + Integer.hashCode(this.f46236b)) * 31) + Integer.hashCode(this.f46237c);
    }

    public String toString() {
        int i10 = this.f46235a;
        int i11 = this.f46236b;
        int i12 = this.f46237c;
        return "FrameMetadata(width=" + i10 + ", height=" + i11 + ", rotation=" + i12 + ")";
    }
}
