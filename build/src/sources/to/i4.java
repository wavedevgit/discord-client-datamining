package to;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i4 {

    /* renamed from: a  reason: collision with root package name */
    private final int f49322a;

    /* renamed from: b  reason: collision with root package name */
    private final int f49323b;

    public i4(int i10, int i11) {
        this.f49322a = i10;
        this.f49323b = i11;
    }

    public final int a() {
        return this.f49323b;
    }

    public final int b() {
        return this.f49322a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof i4)) {
            return false;
        }
        i4 i4Var = (i4) obj;
        if (this.f49322a == i4Var.f49322a && this.f49323b == i4Var.f49323b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Integer.hashCode(this.f49322a) * 31) + Integer.hashCode(this.f49323b);
    }

    public String toString() {
        int i10 = this.f49322a;
        int i11 = this.f49323b;
        return "OverlayAssets(hintAnimation=" + i10 + ", guideDrawable=" + i11 + ")";
    }
}
