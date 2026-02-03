package pl;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements e {

    /* renamed from: a  reason: collision with root package name */
    private final double f46145a;

    /* renamed from: b  reason: collision with root package name */
    private final double f46146b;

    /* renamed from: c  reason: collision with root package name */
    private double f46147c;

    /* renamed from: d  reason: collision with root package name */
    private int f46148d;

    public d(int i10, int i11) {
        this.f46145a = 1.0d / i10;
        this.f46146b = 1.0d / i11;
    }

    @Override // pl.e
    public boolean a() {
        double d10 = this.f46147c + this.f46145a;
        this.f46147c = d10;
        int i10 = this.f46148d;
        this.f46148d = i10 + 1;
        if (i10 == 0) {
            return true;
        }
        double d11 = this.f46146b;
        if (d10 > d11) {
            this.f46147c = d10 - d11;
            return true;
        }
        return false;
    }
}
