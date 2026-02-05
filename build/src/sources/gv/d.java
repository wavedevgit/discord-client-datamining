package gv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d extends lv.f {

    /* renamed from: a  reason: collision with root package name */
    private final lv.d[] f25415a;

    /* renamed from: b  reason: collision with root package name */
    private int f25416b = -1;

    /* renamed from: c  reason: collision with root package name */
    private int f25417c = -1;

    /* renamed from: d  reason: collision with root package name */
    private boolean f25418d = false;

    public d(lv.d... dVarArr) {
        this.f25415a = dVarArr;
    }

    @Override // lv.f
    public lv.f a(int i10) {
        this.f25417c = i10;
        return this;
    }

    @Override // lv.f
    public lv.f b(int i10) {
        this.f25416b = i10;
        return this;
    }

    @Override // lv.f
    public lv.f e() {
        this.f25418d = true;
        return this;
    }

    public lv.d[] f() {
        return this.f25415a;
    }

    public int g() {
        return this.f25417c;
    }

    public int h() {
        return this.f25416b;
    }

    public boolean i() {
        return this.f25418d;
    }
}
