package com.android.volley;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e implements r {

    /* renamed from: a  reason: collision with root package name */
    private int f9175a;

    /* renamed from: b  reason: collision with root package name */
    private int f9176b;

    /* renamed from: c  reason: collision with root package name */
    private final int f9177c;

    /* renamed from: d  reason: collision with root package name */
    private final float f9178d;

    public e() {
        this(2500, 1, 1.0f);
    }

    @Override // com.android.volley.r
    public int a() {
        return this.f9176b;
    }

    @Override // com.android.volley.r
    public void b(u uVar) {
        this.f9176b++;
        int i10 = this.f9175a;
        this.f9175a = i10 + ((int) (i10 * this.f9178d));
        if (d()) {
            return;
        }
        throw uVar;
    }

    @Override // com.android.volley.r
    public int c() {
        return this.f9175a;
    }

    protected boolean d() {
        if (this.f9176b <= this.f9177c) {
            return true;
        }
        return false;
    }

    public e(int i10, int i11, float f10) {
        this.f9175a = i10;
        this.f9177c = i11;
        this.f9178d = f10;
    }
}
