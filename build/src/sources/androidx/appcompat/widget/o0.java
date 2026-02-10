package androidx.appcompat.widget;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class o0 {

    /* renamed from: a  reason: collision with root package name */
    private int f1906a = 0;

    /* renamed from: b  reason: collision with root package name */
    private int f1907b = 0;

    /* renamed from: c  reason: collision with root package name */
    private int f1908c = Integer.MIN_VALUE;

    /* renamed from: d  reason: collision with root package name */
    private int f1909d = Integer.MIN_VALUE;

    /* renamed from: e  reason: collision with root package name */
    private int f1910e = 0;

    /* renamed from: f  reason: collision with root package name */
    private int f1911f = 0;

    /* renamed from: g  reason: collision with root package name */
    private boolean f1912g = false;

    /* renamed from: h  reason: collision with root package name */
    private boolean f1913h = false;

    public int a() {
        if (this.f1912g) {
            return this.f1906a;
        }
        return this.f1907b;
    }

    public int b() {
        return this.f1906a;
    }

    public int c() {
        return this.f1907b;
    }

    public int d() {
        if (this.f1912g) {
            return this.f1907b;
        }
        return this.f1906a;
    }

    public void e(int i10, int i11) {
        this.f1913h = false;
        if (i10 != Integer.MIN_VALUE) {
            this.f1910e = i10;
            this.f1906a = i10;
        }
        if (i11 != Integer.MIN_VALUE) {
            this.f1911f = i11;
            this.f1907b = i11;
        }
    }

    public void f(boolean z10) {
        if (z10 == this.f1912g) {
            return;
        }
        this.f1912g = z10;
        if (this.f1913h) {
            if (z10) {
                int i10 = this.f1909d;
                if (i10 == Integer.MIN_VALUE) {
                    i10 = this.f1910e;
                }
                this.f1906a = i10;
                int i11 = this.f1908c;
                if (i11 == Integer.MIN_VALUE) {
                    i11 = this.f1911f;
                }
                this.f1907b = i11;
                return;
            }
            int i12 = this.f1908c;
            if (i12 == Integer.MIN_VALUE) {
                i12 = this.f1910e;
            }
            this.f1906a = i12;
            int i13 = this.f1909d;
            if (i13 == Integer.MIN_VALUE) {
                i13 = this.f1911f;
            }
            this.f1907b = i13;
            return;
        }
        this.f1906a = this.f1910e;
        this.f1907b = this.f1911f;
    }

    public void g(int i10, int i11) {
        this.f1908c = i10;
        this.f1909d = i11;
        this.f1913h = true;
        if (this.f1912g) {
            if (i11 != Integer.MIN_VALUE) {
                this.f1906a = i11;
            }
            if (i10 != Integer.MIN_VALUE) {
                this.f1907b = i10;
                return;
            }
            return;
        }
        if (i10 != Integer.MIN_VALUE) {
            this.f1906a = i10;
        }
        if (i11 != Integer.MIN_VALUE) {
            this.f1907b = i11;
        }
    }
}
