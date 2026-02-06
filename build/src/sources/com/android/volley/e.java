package com.android.volley;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e implements r {

    /* renamed from: a  reason: collision with root package name */
    private int f8056a;

    /* renamed from: b  reason: collision with root package name */
    private int f8057b;

    /* renamed from: c  reason: collision with root package name */
    private final int f8058c;

    /* renamed from: d  reason: collision with root package name */
    private final float f8059d;

    public e() {
        this(2500, 1, 1.0f);
    }

    @Override // com.android.volley.r
    public int a() {
        return this.f8057b;
    }

    @Override // com.android.volley.r
    public void b(u uVar) {
        this.f8057b++;
        int i10 = this.f8056a;
        this.f8056a = i10 + ((int) (i10 * this.f8059d));
        if (d()) {
            return;
        }
        throw uVar;
    }

    @Override // com.android.volley.r
    public int c() {
        return this.f8056a;
    }

    protected boolean d() {
        if (this.f8057b <= this.f8058c) {
            return true;
        }
        return false;
    }

    public e(int i10, int i11, float f10) {
        this.f8056a = i10;
        this.f8058c = i11;
        this.f8059d = f10;
    }
}
