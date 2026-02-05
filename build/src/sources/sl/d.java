package sl;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements e {

    /* renamed from: a  reason: collision with root package name */
    private final double f49761a;

    /* renamed from: b  reason: collision with root package name */
    private final double f49762b;

    /* renamed from: c  reason: collision with root package name */
    private double f49763c;

    /* renamed from: d  reason: collision with root package name */
    private int f49764d;

    public d(int i10, int i11) {
        this.f49761a = 1.0d / i10;
        this.f49762b = 1.0d / i11;
    }

    @Override // sl.e
    public boolean a() {
        double d10 = this.f49763c + this.f49761a;
        this.f49763c = d10;
        int i10 = this.f49764d;
        this.f49764d = i10 + 1;
        if (i10 == 0) {
            return true;
        }
        double d11 = this.f49762b;
        if (d10 > d11) {
            this.f49763c = d10 - d11;
            return true;
        }
        return false;
    }
}
