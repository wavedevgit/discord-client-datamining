package androidx.appcompat.widget;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class o0 {

    /* renamed from: a  reason: collision with root package name */
    private int f1752a = 0;

    /* renamed from: b  reason: collision with root package name */
    private int f1753b = 0;

    /* renamed from: c  reason: collision with root package name */
    private int f1754c = Integer.MIN_VALUE;

    /* renamed from: d  reason: collision with root package name */
    private int f1755d = Integer.MIN_VALUE;

    /* renamed from: e  reason: collision with root package name */
    private int f1756e = 0;

    /* renamed from: f  reason: collision with root package name */
    private int f1757f = 0;

    /* renamed from: g  reason: collision with root package name */
    private boolean f1758g = false;

    /* renamed from: h  reason: collision with root package name */
    private boolean f1759h = false;

    public int a() {
        if (this.f1758g) {
            return this.f1752a;
        }
        return this.f1753b;
    }

    public int b() {
        return this.f1752a;
    }

    public int c() {
        return this.f1753b;
    }

    public int d() {
        if (this.f1758g) {
            return this.f1753b;
        }
        return this.f1752a;
    }

    public void e(int i10, int i11) {
        this.f1759h = false;
        if (i10 != Integer.MIN_VALUE) {
            this.f1756e = i10;
            this.f1752a = i10;
        }
        if (i11 != Integer.MIN_VALUE) {
            this.f1757f = i11;
            this.f1753b = i11;
        }
    }

    public void f(boolean z10) {
        if (z10 == this.f1758g) {
            return;
        }
        this.f1758g = z10;
        if (this.f1759h) {
            if (z10) {
                int i10 = this.f1755d;
                if (i10 == Integer.MIN_VALUE) {
                    i10 = this.f1756e;
                }
                this.f1752a = i10;
                int i11 = this.f1754c;
                if (i11 == Integer.MIN_VALUE) {
                    i11 = this.f1757f;
                }
                this.f1753b = i11;
                return;
            }
            int i12 = this.f1754c;
            if (i12 == Integer.MIN_VALUE) {
                i12 = this.f1756e;
            }
            this.f1752a = i12;
            int i13 = this.f1755d;
            if (i13 == Integer.MIN_VALUE) {
                i13 = this.f1757f;
            }
            this.f1753b = i13;
            return;
        }
        this.f1752a = this.f1756e;
        this.f1753b = this.f1757f;
    }

    public void g(int i10, int i11) {
        this.f1754c = i10;
        this.f1755d = i11;
        this.f1759h = true;
        if (this.f1758g) {
            if (i11 != Integer.MIN_VALUE) {
                this.f1752a = i11;
            }
            if (i10 != Integer.MIN_VALUE) {
                this.f1753b = i10;
                return;
            }
            return;
        }
        if (i10 != Integer.MIN_VALUE) {
            this.f1752a = i10;
        }
        if (i11 != Integer.MIN_VALUE) {
            this.f1753b = i11;
        }
    }
}
