package pl;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements e {

    /* renamed from: a  reason: collision with root package name */
    private final double f46113a;

    /* renamed from: b  reason: collision with root package name */
    private final double f46114b;

    /* renamed from: c  reason: collision with root package name */
    private double f46115c;

    /* renamed from: d  reason: collision with root package name */
    private int f46116d;

    public d(int i10, int i11) {
        this.f46113a = 1.0d / i10;
        this.f46114b = 1.0d / i11;
    }

    @Override // pl.e
    public boolean a() {
        double d10 = this.f46115c + this.f46113a;
        this.f46115c = d10;
        int i10 = this.f46116d;
        this.f46116d = i10 + 1;
        if (i10 == 0) {
            return true;
        }
        double d11 = this.f46114b;
        if (d10 > d11) {
            this.f46115c = d10 - d11;
            return true;
        }
        return false;
    }
}
