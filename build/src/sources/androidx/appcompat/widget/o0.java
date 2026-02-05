package androidx.appcompat.widget;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class o0 {

    /* renamed from: a  reason: collision with root package name */
    private int f1877a = 0;

    /* renamed from: b  reason: collision with root package name */
    private int f1878b = 0;

    /* renamed from: c  reason: collision with root package name */
    private int f1879c = Integer.MIN_VALUE;

    /* renamed from: d  reason: collision with root package name */
    private int f1880d = Integer.MIN_VALUE;

    /* renamed from: e  reason: collision with root package name */
    private int f1881e = 0;

    /* renamed from: f  reason: collision with root package name */
    private int f1882f = 0;

    /* renamed from: g  reason: collision with root package name */
    private boolean f1883g = false;

    /* renamed from: h  reason: collision with root package name */
    private boolean f1884h = false;

    public int a() {
        if (this.f1883g) {
            return this.f1877a;
        }
        return this.f1878b;
    }

    public int b() {
        return this.f1877a;
    }

    public int c() {
        return this.f1878b;
    }

    public int d() {
        if (this.f1883g) {
            return this.f1878b;
        }
        return this.f1877a;
    }

    public void e(int i10, int i11) {
        this.f1884h = false;
        if (i10 != Integer.MIN_VALUE) {
            this.f1881e = i10;
            this.f1877a = i10;
        }
        if (i11 != Integer.MIN_VALUE) {
            this.f1882f = i11;
            this.f1878b = i11;
        }
    }

    public void f(boolean z10) {
        if (z10 == this.f1883g) {
            return;
        }
        this.f1883g = z10;
        if (this.f1884h) {
            if (z10) {
                int i10 = this.f1880d;
                if (i10 == Integer.MIN_VALUE) {
                    i10 = this.f1881e;
                }
                this.f1877a = i10;
                int i11 = this.f1879c;
                if (i11 == Integer.MIN_VALUE) {
                    i11 = this.f1882f;
                }
                this.f1878b = i11;
                return;
            }
            int i12 = this.f1879c;
            if (i12 == Integer.MIN_VALUE) {
                i12 = this.f1881e;
            }
            this.f1877a = i12;
            int i13 = this.f1880d;
            if (i13 == Integer.MIN_VALUE) {
                i13 = this.f1882f;
            }
            this.f1878b = i13;
            return;
        }
        this.f1877a = this.f1881e;
        this.f1878b = this.f1882f;
    }

    public void g(int i10, int i11) {
        this.f1879c = i10;
        this.f1880d = i11;
        this.f1884h = true;
        if (this.f1883g) {
            if (i11 != Integer.MIN_VALUE) {
                this.f1877a = i11;
            }
            if (i10 != Integer.MIN_VALUE) {
                this.f1878b = i10;
                return;
            }
            return;
        }
        if (i10 != Integer.MIN_VALUE) {
            this.f1877a = i10;
        }
        if (i11 != Integer.MIN_VALUE) {
            this.f1878b = i11;
        }
    }
}
