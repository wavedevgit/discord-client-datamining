package dd;

import android.util.SparseArray;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.android.exoplayer2.Format;
import dd.i0;
import java.util.ArrayList;
import java.util.Arrays;
import ne.d0;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p implements m {

    /* renamed from: a  reason: collision with root package name */
    private final d0 f20609a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f20610b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f20611c;

    /* renamed from: g  reason: collision with root package name */
    private long f20615g;

    /* renamed from: i  reason: collision with root package name */
    private String f20617i;

    /* renamed from: j  reason: collision with root package name */
    private tc.b0 f20618j;

    /* renamed from: k  reason: collision with root package name */
    private b f20619k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f20620l;

    /* renamed from: n  reason: collision with root package name */
    private boolean f20622n;

    /* renamed from: h  reason: collision with root package name */
    private final boolean[] f20616h = new boolean[3];

    /* renamed from: d  reason: collision with root package name */
    private final u f20612d = new u(7, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: e  reason: collision with root package name */
    private final u f20613e = new u(8, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: f  reason: collision with root package name */
    private final u f20614f = new u(6, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: m  reason: collision with root package name */
    private long f20621m = -9223372036854775807L;

    /* renamed from: o  reason: collision with root package name */
    private final ne.h0 f20623o = new ne.h0();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final tc.b0 f20624a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f20625b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f20626c;

        /* renamed from: f  reason: collision with root package name */
        private final ne.i0 f20629f;

        /* renamed from: g  reason: collision with root package name */
        private byte[] f20630g;

        /* renamed from: h  reason: collision with root package name */
        private int f20631h;

        /* renamed from: i  reason: collision with root package name */
        private int f20632i;

        /* renamed from: j  reason: collision with root package name */
        private long f20633j;

        /* renamed from: k  reason: collision with root package name */
        private boolean f20634k;

        /* renamed from: l  reason: collision with root package name */
        private long f20635l;

        /* renamed from: o  reason: collision with root package name */
        private boolean f20638o;

        /* renamed from: p  reason: collision with root package name */
        private long f20639p;

        /* renamed from: q  reason: collision with root package name */
        private long f20640q;

        /* renamed from: r  reason: collision with root package name */
        private boolean f20641r;

        /* renamed from: d  reason: collision with root package name */
        private final SparseArray f20627d = new SparseArray();

        /* renamed from: e  reason: collision with root package name */
        private final SparseArray f20628e = new SparseArray();

        /* renamed from: m  reason: collision with root package name */
        private a f20636m = new a();

        /* renamed from: n  reason: collision with root package name */
        private a f20637n = new a();

        /* JADX INFO: Access modifiers changed from: private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f20642a;

            /* renamed from: b  reason: collision with root package name */
            private boolean f20643b;

            /* renamed from: c  reason: collision with root package name */
            private d0.c f20644c;

            /* renamed from: d  reason: collision with root package name */
            private int f20645d;

            /* renamed from: e  reason: collision with root package name */
            private int f20646e;

            /* renamed from: f  reason: collision with root package name */
            private int f20647f;

            /* renamed from: g  reason: collision with root package name */
            private int f20648g;

            /* renamed from: h  reason: collision with root package name */
            private boolean f20649h;

            /* renamed from: i  reason: collision with root package name */
            private boolean f20650i;

            /* renamed from: j  reason: collision with root package name */
            private boolean f20651j;

            /* renamed from: k  reason: collision with root package name */
            private boolean f20652k;

            /* renamed from: l  reason: collision with root package name */
            private int f20653l;

            /* renamed from: m  reason: collision with root package name */
            private int f20654m;

            /* renamed from: n  reason: collision with root package name */
            private int f20655n;

            /* renamed from: o  reason: collision with root package name */
            private int f20656o;

            /* renamed from: p  reason: collision with root package name */
            private int f20657p;

            private a() {
            }

            /* JADX INFO: Access modifiers changed from: private */
            public boolean c(a aVar) {
                int i10;
                int i11;
                int i12;
                boolean z10;
                if (!this.f20642a) {
                    return false;
                }
                if (!aVar.f20642a) {
                    return true;
                }
                d0.c cVar = (d0.c) ne.a.i(this.f20644c);
                d0.c cVar2 = (d0.c) ne.a.i(aVar.f20644c);
                if (this.f20647f == aVar.f20647f && this.f20648g == aVar.f20648g && this.f20649h == aVar.f20649h && ((!this.f20650i || !aVar.f20650i || this.f20651j == aVar.f20651j) && (((i10 = this.f20645d) == (i11 = aVar.f20645d) || (i10 != 0 && i11 != 0)) && (((i12 = cVar.f39544l) != 0 || cVar2.f39544l != 0 || (this.f20654m == aVar.f20654m && this.f20655n == aVar.f20655n)) && ((i12 != 1 || cVar2.f39544l != 1 || (this.f20656o == aVar.f20656o && this.f20657p == aVar.f20657p)) && (z10 = this.f20652k) == aVar.f20652k && (!z10 || this.f20653l == aVar.f20653l)))))) {
                    return false;
                }
                return true;
            }

            public void b() {
                this.f20643b = false;
                this.f20642a = false;
            }

            public boolean d() {
                if (this.f20643b) {
                    int i10 = this.f20646e;
                    if (i10 == 7 || i10 == 2) {
                        return true;
                    }
                    return false;
                }
                return false;
            }

            public void e(d0.c cVar, int i10, int i11, int i12, int i13, boolean z10, boolean z11, boolean z12, boolean z13, int i14, int i15, int i16, int i17, int i18) {
                this.f20644c = cVar;
                this.f20645d = i10;
                this.f20646e = i11;
                this.f20647f = i12;
                this.f20648g = i13;
                this.f20649h = z10;
                this.f20650i = z11;
                this.f20651j = z12;
                this.f20652k = z13;
                this.f20653l = i14;
                this.f20654m = i15;
                this.f20655n = i16;
                this.f20656o = i17;
                this.f20657p = i18;
                this.f20642a = true;
                this.f20643b = true;
            }

            public void f(int i10) {
                this.f20646e = i10;
                this.f20643b = true;
            }
        }

        public b(tc.b0 b0Var, boolean z10, boolean z11) {
            this.f20624a = b0Var;
            this.f20625b = z10;
            this.f20626c = z11;
            byte[] bArr = new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT];
            this.f20630g = bArr;
            this.f20629f = new ne.i0(bArr, 0, 0);
            g();
        }

        private void d(int i10) {
            long j10 = this.f20640q;
            if (j10 == -9223372036854775807L) {
                return;
            }
            boolean z10 = this.f20641r;
            this.f20624a.d(j10, z10 ? 1 : 0, (int) (this.f20633j - this.f20639p), i10, null);
        }

        /* JADX WARN: Removed duplicated region for block: B:53:0x0109  */
        /* JADX WARN: Removed duplicated region for block: B:54:0x010c  */
        /* JADX WARN: Removed duplicated region for block: B:56:0x0110  */
        /* JADX WARN: Removed duplicated region for block: B:60:0x0123  */
        /* JADX WARN: Removed duplicated region for block: B:63:0x0129  */
        /* JADX WARN: Removed duplicated region for block: B:76:0x0161  */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public void a(byte[] r24, int r25, int r26) {
            /*
                Method dump skipped, instructions count: 426
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: dd.p.b.a(byte[], int, int):void");
        }

        public boolean b(long j10, int i10, boolean z10, boolean z11) {
            boolean z12 = false;
            if (this.f20632i == 9 || (this.f20626c && this.f20637n.c(this.f20636m))) {
                if (z10 && this.f20638o) {
                    d(i10 + ((int) (j10 - this.f20633j)));
                }
                this.f20639p = this.f20633j;
                this.f20640q = this.f20635l;
                this.f20641r = false;
                this.f20638o = true;
            }
            if (this.f20625b) {
                z11 = this.f20637n.d();
            }
            boolean z13 = this.f20641r;
            int i11 = this.f20632i;
            if (i11 == 5 || (z11 && i11 == 1)) {
                z12 = true;
            }
            boolean z14 = z13 | z12;
            this.f20641r = z14;
            return z14;
        }

        public boolean c() {
            return this.f20626c;
        }

        public void e(d0.b bVar) {
            this.f20628e.append(bVar.f39530a, bVar);
        }

        public void f(d0.c cVar) {
            this.f20627d.append(cVar.f39536d, cVar);
        }

        public void g() {
            this.f20634k = false;
            this.f20638o = false;
            this.f20637n.b();
        }

        public void h(long j10, int i10, long j11) {
            this.f20632i = i10;
            this.f20635l = j11;
            this.f20633j = j10;
            if (!this.f20625b || i10 != 1) {
                if (this.f20626c) {
                    if (i10 != 5 && i10 != 1 && i10 != 2) {
                        return;
                    }
                } else {
                    return;
                }
            }
            a aVar = this.f20636m;
            this.f20636m = this.f20637n;
            this.f20637n = aVar;
            aVar.b();
            this.f20631h = 0;
            this.f20634k = true;
        }
    }

    public p(d0 d0Var, boolean z10, boolean z11) {
        this.f20609a = d0Var;
        this.f20610b = z10;
        this.f20611c = z11;
    }

    private void a() {
        ne.a.i(this.f20618j);
        w0.j(this.f20619k);
    }

    private void g(long j10, int i10, int i11, long j11) {
        if (!this.f20620l || this.f20619k.c()) {
            this.f20612d.b(i11);
            this.f20613e.b(i11);
            if (!this.f20620l) {
                if (this.f20612d.c() && this.f20613e.c()) {
                    ArrayList arrayList = new ArrayList();
                    u uVar = this.f20612d;
                    arrayList.add(Arrays.copyOf(uVar.f20727d, uVar.f20728e));
                    u uVar2 = this.f20613e;
                    arrayList.add(Arrays.copyOf(uVar2.f20727d, uVar2.f20728e));
                    u uVar3 = this.f20612d;
                    d0.c l10 = ne.d0.l(uVar3.f20727d, 3, uVar3.f20728e);
                    u uVar4 = this.f20613e;
                    d0.b j12 = ne.d0.j(uVar4.f20727d, 3, uVar4.f20728e);
                    this.f20618j.b(new Format.b().U(this.f20617i).g0("video/avc").K(ne.f.a(l10.f39533a, l10.f39534b, l10.f39535c)).n0(l10.f39538f).S(l10.f39539g).c0(l10.f39540h).V(arrayList).G());
                    this.f20620l = true;
                    this.f20619k.f(l10);
                    this.f20619k.e(j12);
                    this.f20612d.d();
                    this.f20613e.d();
                }
            } else if (this.f20612d.c()) {
                u uVar5 = this.f20612d;
                this.f20619k.f(ne.d0.l(uVar5.f20727d, 3, uVar5.f20728e));
                this.f20612d.d();
            } else if (this.f20613e.c()) {
                u uVar6 = this.f20613e;
                this.f20619k.e(ne.d0.j(uVar6.f20727d, 3, uVar6.f20728e));
                this.f20613e.d();
            }
        }
        if (this.f20614f.b(i11)) {
            u uVar7 = this.f20614f;
            this.f20623o.S(this.f20614f.f20727d, ne.d0.q(uVar7.f20727d, uVar7.f20728e));
            this.f20623o.U(4);
            this.f20609a.a(j11, this.f20623o);
        }
        if (this.f20619k.b(j10, i10, this.f20620l, this.f20622n)) {
            this.f20622n = false;
        }
    }

    private void h(byte[] bArr, int i10, int i11) {
        if (!this.f20620l || this.f20619k.c()) {
            this.f20612d.a(bArr, i10, i11);
            this.f20613e.a(bArr, i10, i11);
        }
        this.f20614f.a(bArr, i10, i11);
        this.f20619k.a(bArr, i10, i11);
    }

    private void i(long j10, int i10, long j11) {
        if (!this.f20620l || this.f20619k.c()) {
            this.f20612d.e(i10);
            this.f20613e.e(i10);
        }
        this.f20614f.e(i10);
        this.f20619k.h(j10, i10, j11);
    }

    @Override // dd.m
    public void b(ne.h0 h0Var) {
        int i10;
        a();
        int f10 = h0Var.f();
        int g10 = h0Var.g();
        byte[] e10 = h0Var.e();
        this.f20615g += h0Var.a();
        this.f20618j.f(h0Var, h0Var.a());
        while (true) {
            int c10 = ne.d0.c(e10, f10, g10, this.f20616h);
            if (c10 == g10) {
                h(e10, f10, g10);
                return;
            }
            int f11 = ne.d0.f(e10, c10);
            int i11 = c10 - f10;
            if (i11 > 0) {
                h(e10, f10, c10);
            }
            int i12 = g10 - c10;
            long j10 = this.f20615g - i12;
            if (i11 < 0) {
                i10 = -i11;
            } else {
                i10 = 0;
            }
            g(j10, i12, i10, this.f20621m);
            i(j10, f11, this.f20621m);
            f10 = c10 + 3;
        }
    }

    @Override // dd.m
    public void c() {
        this.f20615g = 0L;
        this.f20622n = false;
        this.f20621m = -9223372036854775807L;
        ne.d0.a(this.f20616h);
        this.f20612d.d();
        this.f20613e.d();
        this.f20614f.d();
        b bVar = this.f20619k;
        if (bVar != null) {
            bVar.g();
        }
    }

    @Override // dd.m
    public void e(long j10, int i10) {
        boolean z10;
        if (j10 != -9223372036854775807L) {
            this.f20621m = j10;
        }
        boolean z11 = this.f20622n;
        if ((i10 & 2) != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f20622n = z11 | z10;
    }

    @Override // dd.m
    public void f(tc.m mVar, i0.d dVar) {
        dVar.a();
        this.f20617i = dVar.b();
        tc.b0 c10 = mVar.c(dVar.c(), 2);
        this.f20618j = c10;
        this.f20619k = new b(c10, this.f20610b, this.f20611c);
        this.f20609a.b(mVar, dVar);
    }

    @Override // dd.m
    public void d() {
    }
}
