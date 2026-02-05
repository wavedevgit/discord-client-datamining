package ho;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i4 {

    /* renamed from: a  reason: collision with root package name */
    private final int f26334a;

    /* renamed from: b  reason: collision with root package name */
    private final int f26335b;

    public i4(int i10, int i11) {
        this.f26334a = i10;
        this.f26335b = i11;
    }

    public final int a() {
        return this.f26335b;
    }

    public final int b() {
        return this.f26334a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof i4)) {
            return false;
        }
        i4 i4Var = (i4) obj;
        if (this.f26334a == i4Var.f26334a && this.f26335b == i4Var.f26335b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Integer.hashCode(this.f26334a) * 31) + Integer.hashCode(this.f26335b);
    }

    public String toString() {
        int i10 = this.f26334a;
        int i11 = this.f26335b;
        return "OverlayAssets(hintAnimation=" + i10 + ", guideDrawable=" + i11 + ")";
    }
}
