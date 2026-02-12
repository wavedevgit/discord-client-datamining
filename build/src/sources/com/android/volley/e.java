package com.android.volley;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e implements r {

    /* renamed from: a  reason: collision with root package name */
    private int f8774a;

    /* renamed from: b  reason: collision with root package name */
    private int f8775b;

    /* renamed from: c  reason: collision with root package name */
    private final int f8776c;

    /* renamed from: d  reason: collision with root package name */
    private final float f8777d;

    public e() {
        this(2500, 1, 1.0f);
    }

    @Override // com.android.volley.r
    public int a() {
        return this.f8775b;
    }

    @Override // com.android.volley.r
    public void b(u uVar) {
        this.f8775b++;
        int i10 = this.f8774a;
        this.f8774a = i10 + ((int) (i10 * this.f8777d));
        if (d()) {
            return;
        }
        throw uVar;
    }

    @Override // com.android.volley.r
    public int c() {
        return this.f8774a;
    }

    protected boolean d() {
        if (this.f8775b <= this.f8776c) {
            return true;
        }
        return false;
    }

    public e(int i10, int i11, float f10) {
        this.f8774a = i10;
        this.f8776c = i11;
        this.f8777d = f10;
    }
}
