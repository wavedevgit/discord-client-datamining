package androidx.appcompat.widget;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class o0 {

    /* renamed from: a  reason: collision with root package name */
    private int f1796a = 0;

    /* renamed from: b  reason: collision with root package name */
    private int f1797b = 0;

    /* renamed from: c  reason: collision with root package name */
    private int f1798c = Integer.MIN_VALUE;

    /* renamed from: d  reason: collision with root package name */
    private int f1799d = Integer.MIN_VALUE;

    /* renamed from: e  reason: collision with root package name */
    private int f1800e = 0;

    /* renamed from: f  reason: collision with root package name */
    private int f1801f = 0;

    /* renamed from: g  reason: collision with root package name */
    private boolean f1802g = false;

    /* renamed from: h  reason: collision with root package name */
    private boolean f1803h = false;

    public int a() {
        if (this.f1802g) {
            return this.f1796a;
        }
        return this.f1797b;
    }

    public int b() {
        return this.f1796a;
    }

    public int c() {
        return this.f1797b;
    }

    public int d() {
        if (this.f1802g) {
            return this.f1797b;
        }
        return this.f1796a;
    }

    public void e(int i10, int i11) {
        this.f1803h = false;
        if (i10 != Integer.MIN_VALUE) {
            this.f1800e = i10;
            this.f1796a = i10;
        }
        if (i11 != Integer.MIN_VALUE) {
            this.f1801f = i11;
            this.f1797b = i11;
        }
    }

    public void f(boolean z10) {
        if (z10 == this.f1802g) {
            return;
        }
        this.f1802g = z10;
        if (this.f1803h) {
            if (z10) {
                int i10 = this.f1799d;
                if (i10 == Integer.MIN_VALUE) {
                    i10 = this.f1800e;
                }
                this.f1796a = i10;
                int i11 = this.f1798c;
                if (i11 == Integer.MIN_VALUE) {
                    i11 = this.f1801f;
                }
                this.f1797b = i11;
                return;
            }
            int i12 = this.f1798c;
            if (i12 == Integer.MIN_VALUE) {
                i12 = this.f1800e;
            }
            this.f1796a = i12;
            int i13 = this.f1799d;
            if (i13 == Integer.MIN_VALUE) {
                i13 = this.f1801f;
            }
            this.f1797b = i13;
            return;
        }
        this.f1796a = this.f1800e;
        this.f1797b = this.f1801f;
    }

    public void g(int i10, int i11) {
        this.f1798c = i10;
        this.f1799d = i11;
        this.f1803h = true;
        if (this.f1802g) {
            if (i11 != Integer.MIN_VALUE) {
                this.f1796a = i11;
            }
            if (i10 != Integer.MIN_VALUE) {
                this.f1797b = i10;
                return;
            }
            return;
        }
        if (i10 != Integer.MIN_VALUE) {
            this.f1796a = i10;
        }
        if (i11 != Integer.MIN_VALUE) {
            this.f1797b = i11;
        }
    }
}
