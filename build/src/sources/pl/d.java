package pl;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements e {

    /* renamed from: a  reason: collision with root package name */
    private final double f46187a;

    /* renamed from: b  reason: collision with root package name */
    private final double f46188b;

    /* renamed from: c  reason: collision with root package name */
    private double f46189c;

    /* renamed from: d  reason: collision with root package name */
    private int f46190d;

    public d(int i10, int i11) {
        this.f46187a = 1.0d / i10;
        this.f46188b = 1.0d / i11;
    }

    @Override // pl.e
    public boolean a() {
        double d10 = this.f46189c + this.f46187a;
        this.f46189c = d10;
        int i10 = this.f46190d;
        this.f46190d = i10 + 1;
        if (i10 == 0) {
            return true;
        }
        double d11 = this.f46188b;
        if (d10 > d11) {
            this.f46189c = d10 - d11;
            return true;
        }
        return false;
    }
}
