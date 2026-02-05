package com.android.volley;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e implements r {

    /* renamed from: a  reason: collision with root package name */
    private int f8157a;

    /* renamed from: b  reason: collision with root package name */
    private int f8158b;

    /* renamed from: c  reason: collision with root package name */
    private final int f8159c;

    /* renamed from: d  reason: collision with root package name */
    private final float f8160d;

    public e() {
        this(2500, 1, 1.0f);
    }

    @Override // com.android.volley.r
    public int a() {
        return this.f8158b;
    }

    @Override // com.android.volley.r
    public void b(u uVar) {
        this.f8158b++;
        int i10 = this.f8157a;
        this.f8157a = i10 + ((int) (i10 * this.f8160d));
        if (d()) {
            return;
        }
        throw uVar;
    }

    @Override // com.android.volley.r
    public int c() {
        return this.f8157a;
    }

    protected boolean d() {
        if (this.f8158b <= this.f8159c) {
            return true;
        }
        return false;
    }

    public e(int i10, int i11, float f10) {
        this.f8157a = i10;
        this.f8159c = i11;
        this.f8160d = f10;
    }
}
