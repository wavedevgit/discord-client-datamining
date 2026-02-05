package bd;

import ne.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class q {

    /* renamed from: a  reason: collision with root package name */
    public c f6369a;

    /* renamed from: b  reason: collision with root package name */
    public long f6370b;

    /* renamed from: c  reason: collision with root package name */
    public long f6371c;

    /* renamed from: d  reason: collision with root package name */
    public long f6372d;

    /* renamed from: e  reason: collision with root package name */
    public int f6373e;

    /* renamed from: f  reason: collision with root package name */
    public int f6374f;

    /* renamed from: l  reason: collision with root package name */
    public boolean f6380l;

    /* renamed from: n  reason: collision with root package name */
    public p f6382n;

    /* renamed from: p  reason: collision with root package name */
    public boolean f6384p;

    /* renamed from: q  reason: collision with root package name */
    public long f6385q;

    /* renamed from: r  reason: collision with root package name */
    public boolean f6386r;

    /* renamed from: g  reason: collision with root package name */
    public long[] f6375g = new long[0];

    /* renamed from: h  reason: collision with root package name */
    public int[] f6376h = new int[0];

    /* renamed from: i  reason: collision with root package name */
    public int[] f6377i = new int[0];

    /* renamed from: j  reason: collision with root package name */
    public long[] f6378j = new long[0];

    /* renamed from: k  reason: collision with root package name */
    public boolean[] f6379k = new boolean[0];

    /* renamed from: m  reason: collision with root package name */
    public boolean[] f6381m = new boolean[0];

    /* renamed from: o  reason: collision with root package name */
    public final h0 f6383o = new h0();

    public void a(h0 h0Var) {
        h0Var.l(this.f6383o.e(), 0, this.f6383o.g());
        this.f6383o.U(0);
        this.f6384p = false;
    }

    public void b(tc.l lVar) {
        lVar.readFully(this.f6383o.e(), 0, this.f6383o.g());
        this.f6383o.U(0);
        this.f6384p = false;
    }

    public long c(int i10) {
        return this.f6378j[i10];
    }

    public void d(int i10) {
        this.f6383o.Q(i10);
        this.f6380l = true;
        this.f6384p = true;
    }

    public void e(int i10, int i11) {
        this.f6373e = i10;
        this.f6374f = i11;
        if (this.f6376h.length < i10) {
            this.f6375g = new long[i10];
            this.f6376h = new int[i10];
        }
        if (this.f6377i.length < i11) {
            int i12 = (i11 * 125) / 100;
            this.f6377i = new int[i12];
            this.f6378j = new long[i12];
            this.f6379k = new boolean[i12];
            this.f6381m = new boolean[i12];
        }
    }

    public void f() {
        this.f6373e = 0;
        this.f6385q = 0L;
        this.f6386r = false;
        this.f6380l = false;
        this.f6384p = false;
        this.f6382n = null;
    }

    public boolean g(int i10) {
        if (this.f6380l && this.f6381m[i10]) {
            return true;
        }
        return false;
    }
}
