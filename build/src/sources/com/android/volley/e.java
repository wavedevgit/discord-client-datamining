package com.android.volley;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e implements r {

    /* renamed from: a  reason: collision with root package name */
    private int f8804a;

    /* renamed from: b  reason: collision with root package name */
    private int f8805b;

    /* renamed from: c  reason: collision with root package name */
    private final int f8806c;

    /* renamed from: d  reason: collision with root package name */
    private final float f8807d;

    public e() {
        this(2500, 1, 1.0f);
    }

    @Override // com.android.volley.r
    public int a() {
        return this.f8805b;
    }

    @Override // com.android.volley.r
    public void b(u uVar) {
        this.f8805b++;
        int i10 = this.f8804a;
        this.f8804a = i10 + ((int) (i10 * this.f8807d));
        if (d()) {
            return;
        }
        throw uVar;
    }

    @Override // com.android.volley.r
    public int c() {
        return this.f8804a;
    }

    protected boolean d() {
        if (this.f8805b <= this.f8806c) {
            return true;
        }
        return false;
    }

    public e(int i10, int i11, float f10) {
        this.f8804a = i10;
        this.f8806c = i11;
        this.f8807d = f10;
    }
}
