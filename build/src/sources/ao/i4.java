package ao;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i4 {

    /* renamed from: a  reason: collision with root package name */
    private final int f6144a;

    /* renamed from: b  reason: collision with root package name */
    private final int f6145b;

    public i4(int i10, int i11) {
        this.f6144a = i10;
        this.f6145b = i11;
    }

    public final int a() {
        return this.f6145b;
    }

    public final int b() {
        return this.f6144a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof i4)) {
            return false;
        }
        i4 i4Var = (i4) obj;
        if (this.f6144a == i4Var.f6144a && this.f6145b == i4Var.f6145b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Integer.hashCode(this.f6144a) * 31) + Integer.hashCode(this.f6145b);
    }

    public String toString() {
        int i10 = this.f6144a;
        int i11 = this.f6145b;
        return "OverlayAssets(hintAnimation=" + i10 + ", guideDrawable=" + i11 + ")";
    }
}
