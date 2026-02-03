package com.android.volley;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e implements r {

    /* renamed from: a  reason: collision with root package name */
    private int f7772a;

    /* renamed from: b  reason: collision with root package name */
    private int f7773b;

    /* renamed from: c  reason: collision with root package name */
    private final int f7774c;

    /* renamed from: d  reason: collision with root package name */
    private final float f7775d;

    public e() {
        this(2500, 1, 1.0f);
    }

    @Override // com.android.volley.r
    public int a() {
        return this.f7773b;
    }

    @Override // com.android.volley.r
    public void b(u uVar) {
        this.f7773b++;
        int i10 = this.f7772a;
        this.f7772a = i10 + ((int) (i10 * this.f7775d));
        if (d()) {
            return;
        }
        throw uVar;
    }

    @Override // com.android.volley.r
    public int c() {
        return this.f7772a;
    }

    protected boolean d() {
        if (this.f7773b <= this.f7774c) {
            return true;
        }
        return false;
    }

    public e(int i10, int i11, float f10) {
        this.f7772a = i10;
        this.f7774c = i11;
        this.f7775d = f10;
    }
}
