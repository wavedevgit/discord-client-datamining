package xv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d extends cw.f {

    /* renamed from: a  reason: collision with root package name */
    private final cw.d[] f55173a;

    /* renamed from: b  reason: collision with root package name */
    private int f55174b = -1;

    /* renamed from: c  reason: collision with root package name */
    private int f55175c = -1;

    /* renamed from: d  reason: collision with root package name */
    private boolean f55176d = false;

    public d(cw.d... dVarArr) {
        this.f55173a = dVarArr;
    }

    @Override // cw.f
    public cw.f a(int i10) {
        this.f55175c = i10;
        return this;
    }

    @Override // cw.f
    public cw.f b(int i10) {
        this.f55174b = i10;
        return this;
    }

    @Override // cw.f
    public cw.f e() {
        this.f55176d = true;
        return this;
    }

    public cw.d[] f() {
        return this.f55173a;
    }

    public int g() {
        return this.f55175c;
    }

    public int h() {
        return this.f55174b;
    }

    public boolean i() {
        return this.f55176d;
    }
}
