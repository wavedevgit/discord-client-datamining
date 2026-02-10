package cd;

import oe.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class q {

    /* renamed from: a  reason: collision with root package name */
    public c f8184a;

    /* renamed from: b  reason: collision with root package name */
    public long f8185b;

    /* renamed from: c  reason: collision with root package name */
    public long f8186c;

    /* renamed from: d  reason: collision with root package name */
    public long f8187d;

    /* renamed from: e  reason: collision with root package name */
    public int f8188e;

    /* renamed from: f  reason: collision with root package name */
    public int f8189f;

    /* renamed from: l  reason: collision with root package name */
    public boolean f8195l;

    /* renamed from: n  reason: collision with root package name */
    public p f8197n;

    /* renamed from: p  reason: collision with root package name */
    public boolean f8199p;

    /* renamed from: q  reason: collision with root package name */
    public long f8200q;

    /* renamed from: r  reason: collision with root package name */
    public boolean f8201r;

    /* renamed from: g  reason: collision with root package name */
    public long[] f8190g = new long[0];

    /* renamed from: h  reason: collision with root package name */
    public int[] f8191h = new int[0];

    /* renamed from: i  reason: collision with root package name */
    public int[] f8192i = new int[0];

    /* renamed from: j  reason: collision with root package name */
    public long[] f8193j = new long[0];

    /* renamed from: k  reason: collision with root package name */
    public boolean[] f8194k = new boolean[0];

    /* renamed from: m  reason: collision with root package name */
    public boolean[] f8196m = new boolean[0];

    /* renamed from: o  reason: collision with root package name */
    public final h0 f8198o = new h0();

    public void a(h0 h0Var) {
        h0Var.l(this.f8198o.e(), 0, this.f8198o.g());
        this.f8198o.U(0);
        this.f8199p = false;
    }

    public void b(uc.l lVar) {
        lVar.readFully(this.f8198o.e(), 0, this.f8198o.g());
        this.f8198o.U(0);
        this.f8199p = false;
    }

    public long c(int i10) {
        return this.f8193j[i10];
    }

    public void d(int i10) {
        this.f8198o.Q(i10);
        this.f8195l = true;
        this.f8199p = true;
    }

    public void e(int i10, int i11) {
        this.f8188e = i10;
        this.f8189f = i11;
        if (this.f8191h.length < i10) {
            this.f8190g = new long[i10];
            this.f8191h = new int[i10];
        }
        if (this.f8192i.length < i11) {
            int i12 = (i11 * 125) / 100;
            this.f8192i = new int[i12];
            this.f8193j = new long[i12];
            this.f8194k = new boolean[i12];
            this.f8196m = new boolean[i12];
        }
    }

    public void f() {
        this.f8188e = 0;
        this.f8200q = 0L;
        this.f8201r = false;
        this.f8195l = false;
        this.f8199p = false;
        this.f8197n = null;
    }

    public boolean g(int i10) {
        if (this.f8195l && this.f8196m[i10]) {
            return true;
        }
        return false;
    }
}
