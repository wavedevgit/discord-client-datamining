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
    private final d0 f21534a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f21535b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f21536c;

    /* renamed from: g  reason: collision with root package name */
    private long f21540g;

    /* renamed from: i  reason: collision with root package name */
    private String f21542i;

    /* renamed from: j  reason: collision with root package name */
    private tc.b0 f21543j;

    /* renamed from: k  reason: collision with root package name */
    private b f21544k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f21545l;

    /* renamed from: n  reason: collision with root package name */
    private boolean f21547n;

    /* renamed from: h  reason: collision with root package name */
    private final boolean[] f21541h = new boolean[3];

    /* renamed from: d  reason: collision with root package name */
    private final u f21537d = new u(7, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: e  reason: collision with root package name */
    private final u f21538e = new u(8, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: f  reason: collision with root package name */
    private final u f21539f = new u(6, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: m  reason: collision with root package name */
    private long f21546m = -9223372036854775807L;

    /* renamed from: o  reason: collision with root package name */
    private final ne.h0 f21548o = new ne.h0();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final tc.b0 f21549a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f21550b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f21551c;

        /* renamed from: f  reason: collision with root package name */
        private final ne.i0 f21554f;

        /* renamed from: g  reason: collision with root package name */
        private byte[] f21555g;

        /* renamed from: h  reason: collision with root package name */
        private int f21556h;

        /* renamed from: i  reason: collision with root package name */
        private int f21557i;

        /* renamed from: j  reason: collision with root package name */
        private long f21558j;

        /* renamed from: k  reason: collision with root package name */
        private boolean f21559k;

        /* renamed from: l  reason: collision with root package name */
        private long f21560l;

        /* renamed from: o  reason: collision with root package name */
        private boolean f21563o;

        /* renamed from: p  reason: collision with root package name */
        private long f21564p;

        /* renamed from: q  reason: collision with root package name */
        private long f21565q;

        /* renamed from: r  reason: collision with root package name */
        private boolean f21566r;

        /* renamed from: d  reason: collision with root package name */
        private final SparseArray f21552d = new SparseArray();

        /* renamed from: e  reason: collision with root package name */
        private final SparseArray f21553e = new SparseArray();

        /* renamed from: m  reason: collision with root package name */
        private a f21561m = new a();

        /* renamed from: n  reason: collision with root package name */
        private a f21562n = new a();

        /* JADX INFO: Access modifiers changed from: private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f21567a;

            /* renamed from: b  reason: collision with root package name */
            private boolean f21568b;

            /* renamed from: c  reason: collision with root package name */
            private d0.c f21569c;

            /* renamed from: d  reason: collision with root package name */
            private int f21570d;

            /* renamed from: e  reason: collision with root package name */
            private int f21571e;

            /* renamed from: f  reason: collision with root package name */
            private int f21572f;

            /* renamed from: g  reason: collision with root package name */
            private int f21573g;

            /* renamed from: h  reason: collision with root package name */
            private boolean f21574h;

            /* renamed from: i  reason: collision with root package name */
            private boolean f21575i;

            /* renamed from: j  reason: collision with root package name */
            private boolean f21576j;

            /* renamed from: k  reason: collision with root package name */
            private boolean f21577k;

            /* renamed from: l  reason: collision with root package name */
            private int f21578l;

            /* renamed from: m  reason: collision with root package name */
            private int f21579m;

            /* renamed from: n  reason: collision with root package name */
            private int f21580n;

            /* renamed from: o  reason: collision with root package name */
            private int f21581o;

            /* renamed from: p  reason: collision with root package name */
            private int f21582p;

            private a() {
            }

            /* JADX INFO: Access modifiers changed from: private */
            public boolean c(a aVar) {
                int i10;
                int i11;
                int i12;
                boolean z10;
                if (!this.f21567a) {
                    return false;
                }
                if (!aVar.f21567a) {
                    return true;
                }
                d0.c cVar = (d0.c) ne.a.i(this.f21569c);
                d0.c cVar2 = (d0.c) ne.a.i(aVar.f21569c);
                if (this.f21572f == aVar.f21572f && this.f21573g == aVar.f21573g && this.f21574h == aVar.f21574h && ((!this.f21575i || !aVar.f21575i || this.f21576j == aVar.f21576j) && (((i10 = this.f21570d) == (i11 = aVar.f21570d) || (i10 != 0 && i11 != 0)) && (((i12 = cVar.f40045l) != 0 || cVar2.f40045l != 0 || (this.f21579m == aVar.f21579m && this.f21580n == aVar.f21580n)) && ((i12 != 1 || cVar2.f40045l != 1 || (this.f21581o == aVar.f21581o && this.f21582p == aVar.f21582p)) && (z10 = this.f21577k) == aVar.f21577k && (!z10 || this.f21578l == aVar.f21578l)))))) {
                    return false;
                }
                return true;
            }

            public void b() {
                this.f21568b = false;
                this.f21567a = false;
            }

            public boolean d() {
                if (this.f21568b) {
                    int i10 = this.f21571e;
                    if (i10 == 7 || i10 == 2) {
                        return true;
                    }
                    return false;
                }
                return false;
            }

            public void e(d0.c cVar, int i10, int i11, int i12, int i13, boolean z10, boolean z11, boolean z12, boolean z13, int i14, int i15, int i16, int i17, int i18) {
                this.f21569c = cVar;
                this.f21570d = i10;
                this.f21571e = i11;
                this.f21572f = i12;
                this.f21573g = i13;
                this.f21574h = z10;
                this.f21575i = z11;
                this.f21576j = z12;
                this.f21577k = z13;
                this.f21578l = i14;
                this.f21579m = i15;
                this.f21580n = i16;
                this.f21581o = i17;
                this.f21582p = i18;
                this.f21567a = true;
                this.f21568b = true;
            }

            public void f(int i10) {
                this.f21571e = i10;
                this.f21568b = true;
            }
        }

        public b(tc.b0 b0Var, boolean z10, boolean z11) {
            this.f21549a = b0Var;
            this.f21550b = z10;
            this.f21551c = z11;
            byte[] bArr = new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT];
            this.f21555g = bArr;
            this.f21554f = new ne.i0(bArr, 0, 0);
            g();
        }

        private void d(int i10) {
            long j10 = this.f21565q;
            if (j10 == -9223372036854775807L) {
                return;
            }
            boolean z10 = this.f21566r;
            this.f21549a.d(j10, z10 ? 1 : 0, (int) (this.f21558j - this.f21564p), i10, null);
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
            if (this.f21557i == 9 || (this.f21551c && this.f21562n.c(this.f21561m))) {
                if (z10 && this.f21563o) {
                    d(i10 + ((int) (j10 - this.f21558j)));
                }
                this.f21564p = this.f21558j;
                this.f21565q = this.f21560l;
                this.f21566r = false;
                this.f21563o = true;
            }
            if (this.f21550b) {
                z11 = this.f21562n.d();
            }
            boolean z13 = this.f21566r;
            int i11 = this.f21557i;
            if (i11 == 5 || (z11 && i11 == 1)) {
                z12 = true;
            }
            boolean z14 = z13 | z12;
            this.f21566r = z14;
            return z14;
        }

        public boolean c() {
            return this.f21551c;
        }

        public void e(d0.b bVar) {
            this.f21553e.append(bVar.f40031a, bVar);
        }

        public void f(d0.c cVar) {
            this.f21552d.append(cVar.f40037d, cVar);
        }

        public void g() {
            this.f21559k = false;
            this.f21563o = false;
            this.f21562n.b();
        }

        public void h(long j10, int i10, long j11) {
            this.f21557i = i10;
            this.f21560l = j11;
            this.f21558j = j10;
            if (!this.f21550b || i10 != 1) {
                if (this.f21551c) {
                    if (i10 != 5 && i10 != 1 && i10 != 2) {
                        return;
                    }
                } else {
                    return;
                }
            }
            a aVar = this.f21561m;
            this.f21561m = this.f21562n;
            this.f21562n = aVar;
            aVar.b();
            this.f21556h = 0;
            this.f21559k = true;
        }
    }

    public p(d0 d0Var, boolean z10, boolean z11) {
        this.f21534a = d0Var;
        this.f21535b = z10;
        this.f21536c = z11;
    }

    private void a() {
        ne.a.i(this.f21543j);
        w0.j(this.f21544k);
    }

    private void g(long j10, int i10, int i11, long j11) {
        if (!this.f21545l || this.f21544k.c()) {
            this.f21537d.b(i11);
            this.f21538e.b(i11);
            if (!this.f21545l) {
                if (this.f21537d.c() && this.f21538e.c()) {
                    ArrayList arrayList = new ArrayList();
                    u uVar = this.f21537d;
                    arrayList.add(Arrays.copyOf(uVar.f21652d, uVar.f21653e));
                    u uVar2 = this.f21538e;
                    arrayList.add(Arrays.copyOf(uVar2.f21652d, uVar2.f21653e));
                    u uVar3 = this.f21537d;
                    d0.c l10 = ne.d0.l(uVar3.f21652d, 3, uVar3.f21653e);
                    u uVar4 = this.f21538e;
                    d0.b j12 = ne.d0.j(uVar4.f21652d, 3, uVar4.f21653e);
                    this.f21543j.b(new Format.b().U(this.f21542i).g0("video/avc").K(ne.f.a(l10.f40034a, l10.f40035b, l10.f40036c)).n0(l10.f40039f).S(l10.f40040g).c0(l10.f40041h).V(arrayList).G());
                    this.f21545l = true;
                    this.f21544k.f(l10);
                    this.f21544k.e(j12);
                    this.f21537d.d();
                    this.f21538e.d();
                }
            } else if (this.f21537d.c()) {
                u uVar5 = this.f21537d;
                this.f21544k.f(ne.d0.l(uVar5.f21652d, 3, uVar5.f21653e));
                this.f21537d.d();
            } else if (this.f21538e.c()) {
                u uVar6 = this.f21538e;
                this.f21544k.e(ne.d0.j(uVar6.f21652d, 3, uVar6.f21653e));
                this.f21538e.d();
            }
        }
        if (this.f21539f.b(i11)) {
            u uVar7 = this.f21539f;
            this.f21548o.S(this.f21539f.f21652d, ne.d0.q(uVar7.f21652d, uVar7.f21653e));
            this.f21548o.U(4);
            this.f21534a.a(j11, this.f21548o);
        }
        if (this.f21544k.b(j10, i10, this.f21545l, this.f21547n)) {
            this.f21547n = false;
        }
    }

    private void h(byte[] bArr, int i10, int i11) {
        if (!this.f21545l || this.f21544k.c()) {
            this.f21537d.a(bArr, i10, i11);
            this.f21538e.a(bArr, i10, i11);
        }
        this.f21539f.a(bArr, i10, i11);
        this.f21544k.a(bArr, i10, i11);
    }

    private void i(long j10, int i10, long j11) {
        if (!this.f21545l || this.f21544k.c()) {
            this.f21537d.e(i10);
            this.f21538e.e(i10);
        }
        this.f21539f.e(i10);
        this.f21544k.h(j10, i10, j11);
    }

    @Override // dd.m
    public void b(ne.h0 h0Var) {
        int i10;
        a();
        int f10 = h0Var.f();
        int g10 = h0Var.g();
        byte[] e10 = h0Var.e();
        this.f21540g += h0Var.a();
        this.f21543j.f(h0Var, h0Var.a());
        while (true) {
            int c10 = ne.d0.c(e10, f10, g10, this.f21541h);
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
            long j10 = this.f21540g - i12;
            if (i11 < 0) {
                i10 = -i11;
            } else {
                i10 = 0;
            }
            g(j10, i12, i10, this.f21546m);
            i(j10, f11, this.f21546m);
            f10 = c10 + 3;
        }
    }

    @Override // dd.m
    public void c() {
        this.f21540g = 0L;
        this.f21547n = false;
        this.f21546m = -9223372036854775807L;
        ne.d0.a(this.f21541h);
        this.f21537d.d();
        this.f21538e.d();
        this.f21539f.d();
        b bVar = this.f21544k;
        if (bVar != null) {
            bVar.g();
        }
    }

    @Override // dd.m
    public void e(long j10, int i10) {
        boolean z10;
        if (j10 != -9223372036854775807L) {
            this.f21546m = j10;
        }
        boolean z11 = this.f21547n;
        if ((i10 & 2) != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f21547n = z11 | z10;
    }

    @Override // dd.m
    public void f(tc.m mVar, i0.d dVar) {
        dVar.a();
        this.f21542i = dVar.b();
        tc.b0 c10 = mVar.c(dVar.c(), 2);
        this.f21543j = c10;
        this.f21544k = new b(c10, this.f21535b, this.f21536c);
        this.f21534a.b(mVar, dVar);
    }

    @Override // dd.m
    public void d() {
    }
}
