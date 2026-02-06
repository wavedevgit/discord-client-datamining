package nv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d extends sv.f {

    /* renamed from: a  reason: collision with root package name */
    private final sv.d[] f41174a;

    /* renamed from: b  reason: collision with root package name */
    private int f41175b = -1;

    /* renamed from: c  reason: collision with root package name */
    private int f41176c = -1;

    /* renamed from: d  reason: collision with root package name */
    private boolean f41177d = false;

    public d(sv.d... dVarArr) {
        this.f41174a = dVarArr;
    }

    @Override // sv.f
    public sv.f a(int i10) {
        this.f41176c = i10;
        return this;
    }

    @Override // sv.f
    public sv.f b(int i10) {
        this.f41175b = i10;
        return this;
    }

    @Override // sv.f
    public sv.f e() {
        this.f41177d = true;
        return this;
    }

    public sv.d[] f() {
        return this.f41174a;
    }

    public int g() {
        return this.f41176c;
    }

    public int h() {
        return this.f41175b;
    }

    public boolean i() {
        return this.f41177d;
    }
}
