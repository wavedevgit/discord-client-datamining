package ov;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d extends tv.f {

    /* renamed from: a  reason: collision with root package name */
    private final tv.d[] f42750a;

    /* renamed from: b  reason: collision with root package name */
    private int f42751b = -1;

    /* renamed from: c  reason: collision with root package name */
    private int f42752c = -1;

    /* renamed from: d  reason: collision with root package name */
    private boolean f42753d = false;

    public d(tv.d... dVarArr) {
        this.f42750a = dVarArr;
    }

    @Override // tv.f
    public tv.f a(int i10) {
        this.f42752c = i10;
        return this;
    }

    @Override // tv.f
    public tv.f b(int i10) {
        this.f42751b = i10;
        return this;
    }

    @Override // tv.f
    public tv.f e() {
        this.f42753d = true;
        return this;
    }

    public tv.d[] f() {
        return this.f42750a;
    }

    public int g() {
        return this.f42752c;
    }

    public int h() {
        return this.f42751b;
    }

    public boolean i() {
        return this.f42753d;
    }
}
