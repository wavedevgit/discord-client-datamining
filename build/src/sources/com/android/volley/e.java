package com.android.volley;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e implements r {

    /* renamed from: a  reason: collision with root package name */
    private int f8196a;

    /* renamed from: b  reason: collision with root package name */
    private int f8197b;

    /* renamed from: c  reason: collision with root package name */
    private final int f8198c;

    /* renamed from: d  reason: collision with root package name */
    private final float f8199d;

    public e() {
        this(2500, 1, 1.0f);
    }

    @Override // com.android.volley.r
    public int a() {
        return this.f8197b;
    }

    @Override // com.android.volley.r
    public void b(u uVar) {
        this.f8197b++;
        int i10 = this.f8196a;
        this.f8196a = i10 + ((int) (i10 * this.f8199d));
        if (d()) {
            return;
        }
        throw uVar;
    }

    @Override // com.android.volley.r
    public int c() {
        return this.f8196a;
    }

    protected boolean d() {
        if (this.f8197b <= this.f8198c) {
            return true;
        }
        return false;
    }

    public e(int i10, int i11, float f10) {
        this.f8196a = i10;
        this.f8198c = i11;
        this.f8199d = f10;
    }
}
