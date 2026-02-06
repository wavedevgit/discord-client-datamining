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
    private final d0 f20564a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f20565b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f20566c;

    /* renamed from: g  reason: collision with root package name */
    private long f20570g;

    /* renamed from: i  reason: collision with root package name */
    private String f20572i;

    /* renamed from: j  reason: collision with root package name */
    private tc.b0 f20573j;

    /* renamed from: k  reason: collision with root package name */
    private b f20574k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f20575l;

    /* renamed from: n  reason: collision with root package name */
    private boolean f20577n;

    /* renamed from: h  reason: collision with root package name */
    private final boolean[] f20571h = new boolean[3];

    /* renamed from: d  reason: collision with root package name */
    private final u f20567d = new u(7, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: e  reason: collision with root package name */
    private final u f20568e = new u(8, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: f  reason: collision with root package name */
    private final u f20569f = new u(6, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: m  reason: collision with root package name */
    private long f20576m = -9223372036854775807L;

    /* renamed from: o  reason: collision with root package name */
    private final ne.h0 f20578o = new ne.h0();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final tc.b0 f20579a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f20580b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f20581c;

        /* renamed from: f  reason: collision with root package name */
        private final ne.i0 f20584f;

        /* renamed from: g  reason: collision with root package name */
        private byte[] f20585g;

        /* renamed from: h  reason: collision with root package name */
        private int f20586h;

        /* renamed from: i  reason: collision with root package name */
        private int f20587i;

        /* renamed from: j  reason: collision with root package name */
        private long f20588j;

        /* renamed from: k  reason: collision with root package name */
        private boolean f20589k;

        /* renamed from: l  reason: collision with root package name */
        private long f20590l;

        /* renamed from: o  reason: collision with root package name */
        private boolean f20593o;

        /* renamed from: p  reason: collision with root package name */
        private long f20594p;

        /* renamed from: q  reason: collision with root package name */
        private long f20595q;

        /* renamed from: r  reason: collision with root package name */
        private boolean f20596r;

        /* renamed from: d  reason: collision with root package name */
        private final SparseArray f20582d = new SparseArray();

        /* renamed from: e  reason: collision with root package name */
        private final SparseArray f20583e = new SparseArray();

        /* renamed from: m  reason: collision with root package name */
        private a f20591m = new a();

        /* renamed from: n  reason: collision with root package name */
        private a f20592n = new a();

        /* JADX INFO: Access modifiers changed from: private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f20597a;

            /* renamed from: b  reason: collision with root package name */
            private boolean f20598b;

            /* renamed from: c  reason: collision with root package name */
            private d0.c f20599c;

            /* renamed from: d  reason: collision with root package name */
            private int f20600d;

            /* renamed from: e  reason: collision with root package name */
            private int f20601e;

            /* renamed from: f  reason: collision with root package name */
            private int f20602f;

            /* renamed from: g  reason: collision with root package name */
            private int f20603g;

            /* renamed from: h  reason: collision with root package name */
            private boolean f20604h;

            /* renamed from: i  reason: collision with root package name */
            private boolean f20605i;

            /* renamed from: j  reason: collision with root package name */
            private boolean f20606j;

            /* renamed from: k  reason: collision with root package name */
            private boolean f20607k;

            /* renamed from: l  reason: collision with root package name */
            private int f20608l;

            /* renamed from: m  reason: collision with root package name */
            private int f20609m;

            /* renamed from: n  reason: collision with root package name */
            private int f20610n;

            /* renamed from: o  reason: collision with root package name */
            private int f20611o;

            /* renamed from: p  reason: collision with root package name */
            private int f20612p;

            private a() {
            }

            /* JADX INFO: Access modifiers changed from: private */
            public boolean c(a aVar) {
                int i10;
                int i11;
                int i12;
                boolean z10;
                if (!this.f20597a) {
                    return false;
                }
                if (!aVar.f20597a) {
                    return true;
                }
                d0.c cVar = (d0.c) ne.a.i(this.f20599c);
                d0.c cVar2 = (d0.c) ne.a.i(aVar.f20599c);
                if (this.f20602f == aVar.f20602f && this.f20603g == aVar.f20603g && this.f20604h == aVar.f20604h && ((!this.f20605i || !aVar.f20605i || this.f20606j == aVar.f20606j) && (((i10 = this.f20600d) == (i11 = aVar.f20600d) || (i10 != 0 && i11 != 0)) && (((i12 = cVar.f38899l) != 0 || cVar2.f38899l != 0 || (this.f20609m == aVar.f20609m && this.f20610n == aVar.f20610n)) && ((i12 != 1 || cVar2.f38899l != 1 || (this.f20611o == aVar.f20611o && this.f20612p == aVar.f20612p)) && (z10 = this.f20607k) == aVar.f20607k && (!z10 || this.f20608l == aVar.f20608l)))))) {
                    return false;
                }
                return true;
            }

            public void b() {
                this.f20598b = false;
                this.f20597a = false;
            }

            public boolean d() {
                if (this.f20598b) {
                    int i10 = this.f20601e;
                    if (i10 == 7 || i10 == 2) {
                        return true;
                    }
                    return false;
                }
                return false;
            }

            public void e(d0.c cVar, int i10, int i11, int i12, int i13, boolean z10, boolean z11, boolean z12, boolean z13, int i14, int i15, int i16, int i17, int i18) {
                this.f20599c = cVar;
                this.f20600d = i10;
                this.f20601e = i11;
                this.f20602f = i12;
                this.f20603g = i13;
                this.f20604h = z10;
                this.f20605i = z11;
                this.f20606j = z12;
                this.f20607k = z13;
                this.f20608l = i14;
                this.f20609m = i15;
                this.f20610n = i16;
                this.f20611o = i17;
                this.f20612p = i18;
                this.f20597a = true;
                this.f20598b = true;
            }

            public void f(int i10) {
                this.f20601e = i10;
                this.f20598b = true;
            }
        }

        public b(tc.b0 b0Var, boolean z10, boolean z11) {
            this.f20579a = b0Var;
            this.f20580b = z10;
            this.f20581c = z11;
            byte[] bArr = new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT];
            this.f20585g = bArr;
            this.f20584f = new ne.i0(bArr, 0, 0);
            g();
        }

        private void d(int i10) {
            long j10 = this.f20595q;
            if (j10 == -9223372036854775807L) {
                return;
            }
            boolean z10 = this.f20596r;
            this.f20579a.d(j10, z10 ? 1 : 0, (int) (this.f20588j - this.f20594p), i10, null);
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
            if (this.f20587i == 9 || (this.f20581c && this.f20592n.c(this.f20591m))) {
                if (z10 && this.f20593o) {
                    d(i10 + ((int) (j10 - this.f20588j)));
                }
                this.f20594p = this.f20588j;
                this.f20595q = this.f20590l;
                this.f20596r = false;
                this.f20593o = true;
            }
            if (this.f20580b) {
                z11 = this.f20592n.d();
            }
            boolean z13 = this.f20596r;
            int i11 = this.f20587i;
            if (i11 == 5 || (z11 && i11 == 1)) {
                z12 = true;
            }
            boolean z14 = z13 | z12;
            this.f20596r = z14;
            return z14;
        }

        public boolean c() {
            return this.f20581c;
        }

        public void e(d0.b bVar) {
            this.f20583e.append(bVar.f38885a, bVar);
        }

        public void f(d0.c cVar) {
            this.f20582d.append(cVar.f38891d, cVar);
        }

        public void g() {
            this.f20589k = false;
            this.f20593o = false;
            this.f20592n.b();
        }

        public void h(long j10, int i10, long j11) {
            this.f20587i = i10;
            this.f20590l = j11;
            this.f20588j = j10;
            if (!this.f20580b || i10 != 1) {
                if (this.f20581c) {
                    if (i10 != 5 && i10 != 1 && i10 != 2) {
                        return;
                    }
                } else {
                    return;
                }
            }
            a aVar = this.f20591m;
            this.f20591m = this.f20592n;
            this.f20592n = aVar;
            aVar.b();
            this.f20586h = 0;
            this.f20589k = true;
        }
    }

    public p(d0 d0Var, boolean z10, boolean z11) {
        this.f20564a = d0Var;
        this.f20565b = z10;
        this.f20566c = z11;
    }

    private void a() {
        ne.a.i(this.f20573j);
        w0.j(this.f20574k);
    }

    private void g(long j10, int i10, int i11, long j11) {
        if (!this.f20575l || this.f20574k.c()) {
            this.f20567d.b(i11);
            this.f20568e.b(i11);
            if (!this.f20575l) {
                if (this.f20567d.c() && this.f20568e.c()) {
                    ArrayList arrayList = new ArrayList();
                    u uVar = this.f20567d;
                    arrayList.add(Arrays.copyOf(uVar.f20682d, uVar.f20683e));
                    u uVar2 = this.f20568e;
                    arrayList.add(Arrays.copyOf(uVar2.f20682d, uVar2.f20683e));
                    u uVar3 = this.f20567d;
                    d0.c l10 = ne.d0.l(uVar3.f20682d, 3, uVar3.f20683e);
                    u uVar4 = this.f20568e;
                    d0.b j12 = ne.d0.j(uVar4.f20682d, 3, uVar4.f20683e);
                    this.f20573j.b(new Format.b().U(this.f20572i).g0("video/avc").K(ne.f.a(l10.f38888a, l10.f38889b, l10.f38890c)).n0(l10.f38893f).S(l10.f38894g).c0(l10.f38895h).V(arrayList).G());
                    this.f20575l = true;
                    this.f20574k.f(l10);
                    this.f20574k.e(j12);
                    this.f20567d.d();
                    this.f20568e.d();
                }
            } else if (this.f20567d.c()) {
                u uVar5 = this.f20567d;
                this.f20574k.f(ne.d0.l(uVar5.f20682d, 3, uVar5.f20683e));
                this.f20567d.d();
            } else if (this.f20568e.c()) {
                u uVar6 = this.f20568e;
                this.f20574k.e(ne.d0.j(uVar6.f20682d, 3, uVar6.f20683e));
                this.f20568e.d();
            }
        }
        if (this.f20569f.b(i11)) {
            u uVar7 = this.f20569f;
            this.f20578o.S(this.f20569f.f20682d, ne.d0.q(uVar7.f20682d, uVar7.f20683e));
            this.f20578o.U(4);
            this.f20564a.a(j11, this.f20578o);
        }
        if (this.f20574k.b(j10, i10, this.f20575l, this.f20577n)) {
            this.f20577n = false;
        }
    }

    private void h(byte[] bArr, int i10, int i11) {
        if (!this.f20575l || this.f20574k.c()) {
            this.f20567d.a(bArr, i10, i11);
            this.f20568e.a(bArr, i10, i11);
        }
        this.f20569f.a(bArr, i10, i11);
        this.f20574k.a(bArr, i10, i11);
    }

    private void i(long j10, int i10, long j11) {
        if (!this.f20575l || this.f20574k.c()) {
            this.f20567d.e(i10);
            this.f20568e.e(i10);
        }
        this.f20569f.e(i10);
        this.f20574k.h(j10, i10, j11);
    }

    @Override // dd.m
    public void b(ne.h0 h0Var) {
        int i10;
        a();
        int f10 = h0Var.f();
        int g10 = h0Var.g();
        byte[] e10 = h0Var.e();
        this.f20570g += h0Var.a();
        this.f20573j.f(h0Var, h0Var.a());
        while (true) {
            int c10 = ne.d0.c(e10, f10, g10, this.f20571h);
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
            long j10 = this.f20570g - i12;
            if (i11 < 0) {
                i10 = -i11;
            } else {
                i10 = 0;
            }
            g(j10, i12, i10, this.f20576m);
            i(j10, f11, this.f20576m);
            f10 = c10 + 3;
        }
    }

    @Override // dd.m
    public void c() {
        this.f20570g = 0L;
        this.f20577n = false;
        this.f20576m = -9223372036854775807L;
        ne.d0.a(this.f20571h);
        this.f20567d.d();
        this.f20568e.d();
        this.f20569f.d();
        b bVar = this.f20574k;
        if (bVar != null) {
            bVar.g();
        }
    }

    @Override // dd.m
    public void e(long j10, int i10) {
        boolean z10;
        if (j10 != -9223372036854775807L) {
            this.f20576m = j10;
        }
        boolean z11 = this.f20577n;
        if ((i10 & 2) != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f20577n = z11 | z10;
    }

    @Override // dd.m
    public void f(tc.m mVar, i0.d dVar) {
        dVar.a();
        this.f20572i = dVar.b();
        tc.b0 c10 = mVar.c(dVar.c(), 2);
        this.f20573j = c10;
        this.f20574k = new b(c10, this.f20565b, this.f20566c);
        this.f20564a.b(mVar, dVar);
    }

    @Override // dd.m
    public void d() {
    }
}
