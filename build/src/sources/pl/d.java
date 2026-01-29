package pl;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements e {

    /* renamed from: a  reason: collision with root package name */
    private final double f46097a;

    /* renamed from: b  reason: collision with root package name */
    private final double f46098b;

    /* renamed from: c  reason: collision with root package name */
    private double f46099c;

    /* renamed from: d  reason: collision with root package name */
    private int f46100d;

    public d(int i10, int i11) {
        this.f46097a = 1.0d / i10;
        this.f46098b = 1.0d / i11;
    }

    @Override // pl.e
    public boolean a() {
        double d10 = this.f46099c + this.f46097a;
        this.f46099c = d10;
        int i10 = this.f46100d;
        this.f46100d = i10 + 1;
        if (i10 == 0) {
            return true;
        }
        double d11 = this.f46098b;
        if (d10 > d11) {
            this.f46099c = d10 - d11;
            return true;
        }
        return false;
    }
}
