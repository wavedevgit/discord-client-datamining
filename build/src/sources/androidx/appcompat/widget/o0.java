package androidx.appcompat.widget;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class o0 {

    /* renamed from: a  reason: collision with root package name */
    private int f2206a = 0;

    /* renamed from: b  reason: collision with root package name */
    private int f2207b = 0;

    /* renamed from: c  reason: collision with root package name */
    private int f2208c = Integer.MIN_VALUE;

    /* renamed from: d  reason: collision with root package name */
    private int f2209d = Integer.MIN_VALUE;

    /* renamed from: e  reason: collision with root package name */
    private int f2210e = 0;

    /* renamed from: f  reason: collision with root package name */
    private int f2211f = 0;

    /* renamed from: g  reason: collision with root package name */
    private boolean f2212g = false;

    /* renamed from: h  reason: collision with root package name */
    private boolean f2213h = false;

    public int a() {
        if (this.f2212g) {
            return this.f2206a;
        }
        return this.f2207b;
    }

    public int b() {
        return this.f2206a;
    }

    public int c() {
        return this.f2207b;
    }

    public int d() {
        if (this.f2212g) {
            return this.f2207b;
        }
        return this.f2206a;
    }

    public void e(int i10, int i11) {
        this.f2213h = false;
        if (i10 != Integer.MIN_VALUE) {
            this.f2210e = i10;
            this.f2206a = i10;
        }
        if (i11 != Integer.MIN_VALUE) {
            this.f2211f = i11;
            this.f2207b = i11;
        }
    }

    public void f(boolean z10) {
        if (z10 == this.f2212g) {
            return;
        }
        this.f2212g = z10;
        if (this.f2213h) {
            if (z10) {
                int i10 = this.f2209d;
                if (i10 == Integer.MIN_VALUE) {
                    i10 = this.f2210e;
                }
                this.f2206a = i10;
                int i11 = this.f2208c;
                if (i11 == Integer.MIN_VALUE) {
                    i11 = this.f2211f;
                }
                this.f2207b = i11;
                return;
            }
            int i12 = this.f2208c;
            if (i12 == Integer.MIN_VALUE) {
                i12 = this.f2210e;
            }
            this.f2206a = i12;
            int i13 = this.f2209d;
            if (i13 == Integer.MIN_VALUE) {
                i13 = this.f2211f;
            }
            this.f2207b = i13;
            return;
        }
        this.f2206a = this.f2210e;
        this.f2207b = this.f2211f;
    }

    public void g(int i10, int i11) {
        this.f2208c = i10;
        this.f2209d = i11;
        this.f2213h = true;
        if (this.f2212g) {
            if (i11 != Integer.MIN_VALUE) {
                this.f2206a = i11;
            }
            if (i10 != Integer.MIN_VALUE) {
                this.f2207b = i10;
                return;
            }
            return;
        }
        if (i10 != Integer.MIN_VALUE) {
            this.f2206a = i10;
        }
        if (i11 != Integer.MIN_VALUE) {
            this.f2207b = i11;
        }
    }
}
