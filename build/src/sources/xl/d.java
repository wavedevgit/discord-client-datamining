package xl;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements e {

    /* renamed from: a  reason: collision with root package name */
    private final double f55480a;

    /* renamed from: b  reason: collision with root package name */
    private final double f55481b;

    /* renamed from: c  reason: collision with root package name */
    private double f55482c;

    /* renamed from: d  reason: collision with root package name */
    private int f55483d;

    public d(int i10, int i11) {
        this.f55480a = 1.0d / i10;
        this.f55481b = 1.0d / i11;
    }

    @Override // xl.e
    public boolean a() {
        double d10 = this.f55482c + this.f55480a;
        this.f55482c = d10;
        int i10 = this.f55483d;
        this.f55483d = i10 + 1;
        if (i10 == 0) {
            return true;
        }
        double d11 = this.f55481b;
        if (d10 > d11) {
            this.f55482c = d10 - d11;
            return true;
        }
        return false;
    }
}
