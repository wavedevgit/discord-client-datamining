package ko;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i4 {

    /* renamed from: a  reason: collision with root package name */
    private final int f31329a;

    /* renamed from: b  reason: collision with root package name */
    private final int f31330b;

    public i4(int i10, int i11) {
        this.f31329a = i10;
        this.f31330b = i11;
    }

    public final int a() {
        return this.f31330b;
    }

    public final int b() {
        return this.f31329a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof i4)) {
            return false;
        }
        i4 i4Var = (i4) obj;
        if (this.f31329a == i4Var.f31329a && this.f31330b == i4Var.f31330b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Integer.hashCode(this.f31329a) * 31) + Integer.hashCode(this.f31330b);
    }

    public String toString() {
        int i10 = this.f31329a;
        int i11 = this.f31330b;
        return "OverlayAssets(hintAnimation=" + i10 + ", guideDrawable=" + i11 + ")";
    }
}
