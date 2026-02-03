package androidx.appcompat.widget;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class o0 {

    /* renamed from: a  reason: collision with root package name */
    private int f1765a = 0;

    /* renamed from: b  reason: collision with root package name */
    private int f1766b = 0;

    /* renamed from: c  reason: collision with root package name */
    private int f1767c = Integer.MIN_VALUE;

    /* renamed from: d  reason: collision with root package name */
    private int f1768d = Integer.MIN_VALUE;

    /* renamed from: e  reason: collision with root package name */
    private int f1769e = 0;

    /* renamed from: f  reason: collision with root package name */
    private int f1770f = 0;

    /* renamed from: g  reason: collision with root package name */
    private boolean f1771g = false;

    /* renamed from: h  reason: collision with root package name */
    private boolean f1772h = false;

    public int a() {
        if (this.f1771g) {
            return this.f1765a;
        }
        return this.f1766b;
    }

    public int b() {
        return this.f1765a;
    }

    public int c() {
        return this.f1766b;
    }

    public int d() {
        if (this.f1771g) {
            return this.f1766b;
        }
        return this.f1765a;
    }

    public void e(int i10, int i11) {
        this.f1772h = false;
        if (i10 != Integer.MIN_VALUE) {
            this.f1769e = i10;
            this.f1765a = i10;
        }
        if (i11 != Integer.MIN_VALUE) {
            this.f1770f = i11;
            this.f1766b = i11;
        }
    }

    public void f(boolean z10) {
        if (z10 == this.f1771g) {
            return;
        }
        this.f1771g = z10;
        if (this.f1772h) {
            if (z10) {
                int i10 = this.f1768d;
                if (i10 == Integer.MIN_VALUE) {
                    i10 = this.f1769e;
                }
                this.f1765a = i10;
                int i11 = this.f1767c;
                if (i11 == Integer.MIN_VALUE) {
                    i11 = this.f1770f;
                }
                this.f1766b = i11;
                return;
            }
            int i12 = this.f1767c;
            if (i12 == Integer.MIN_VALUE) {
                i12 = this.f1769e;
            }
            this.f1765a = i12;
            int i13 = this.f1768d;
            if (i13 == Integer.MIN_VALUE) {
                i13 = this.f1770f;
            }
            this.f1766b = i13;
            return;
        }
        this.f1765a = this.f1769e;
        this.f1766b = this.f1770f;
    }

    public void g(int i10, int i11) {
        this.f1767c = i10;
        this.f1768d = i11;
        this.f1772h = true;
        if (this.f1771g) {
            if (i11 != Integer.MIN_VALUE) {
                this.f1765a = i11;
            }
            if (i10 != Integer.MIN_VALUE) {
                this.f1766b = i10;
                return;
            }
            return;
        }
        if (i10 != Integer.MIN_VALUE) {
            this.f1765a = i10;
        }
        if (i11 != Integer.MIN_VALUE) {
            this.f1766b = i11;
        }
    }
}
