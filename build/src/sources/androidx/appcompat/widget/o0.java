package androidx.appcompat.widget;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class o0 {

    /* renamed from: a  reason: collision with root package name */
    private int f1903a = 0;

    /* renamed from: b  reason: collision with root package name */
    private int f1904b = 0;

    /* renamed from: c  reason: collision with root package name */
    private int f1905c = Integer.MIN_VALUE;

    /* renamed from: d  reason: collision with root package name */
    private int f1906d = Integer.MIN_VALUE;

    /* renamed from: e  reason: collision with root package name */
    private int f1907e = 0;

    /* renamed from: f  reason: collision with root package name */
    private int f1908f = 0;

    /* renamed from: g  reason: collision with root package name */
    private boolean f1909g = false;

    /* renamed from: h  reason: collision with root package name */
    private boolean f1910h = false;

    public int a() {
        if (this.f1909g) {
            return this.f1903a;
        }
        return this.f1904b;
    }

    public int b() {
        return this.f1903a;
    }

    public int c() {
        return this.f1904b;
    }

    public int d() {
        if (this.f1909g) {
            return this.f1904b;
        }
        return this.f1903a;
    }

    public void e(int i10, int i11) {
        this.f1910h = false;
        if (i10 != Integer.MIN_VALUE) {
            this.f1907e = i10;
            this.f1903a = i10;
        }
        if (i11 != Integer.MIN_VALUE) {
            this.f1908f = i11;
            this.f1904b = i11;
        }
    }

    public void f(boolean z10) {
        if (z10 == this.f1909g) {
            return;
        }
        this.f1909g = z10;
        if (this.f1910h) {
            if (z10) {
                int i10 = this.f1906d;
                if (i10 == Integer.MIN_VALUE) {
                    i10 = this.f1907e;
                }
                this.f1903a = i10;
                int i11 = this.f1905c;
                if (i11 == Integer.MIN_VALUE) {
                    i11 = this.f1908f;
                }
                this.f1904b = i11;
                return;
            }
            int i12 = this.f1905c;
            if (i12 == Integer.MIN_VALUE) {
                i12 = this.f1907e;
            }
            this.f1903a = i12;
            int i13 = this.f1906d;
            if (i13 == Integer.MIN_VALUE) {
                i13 = this.f1908f;
            }
            this.f1904b = i13;
            return;
        }
        this.f1903a = this.f1907e;
        this.f1904b = this.f1908f;
    }

    public void g(int i10, int i11) {
        this.f1905c = i10;
        this.f1906d = i11;
        this.f1910h = true;
        if (this.f1909g) {
            if (i11 != Integer.MIN_VALUE) {
                this.f1903a = i11;
            }
            if (i10 != Integer.MIN_VALUE) {
                this.f1904b = i10;
                return;
            }
            return;
        }
        if (i10 != Integer.MIN_VALUE) {
            this.f1903a = i10;
        }
        if (i11 != Integer.MIN_VALUE) {
            this.f1904b = i11;
        }
    }
}
