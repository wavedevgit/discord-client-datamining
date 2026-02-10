package ed;

import android.util.SparseArray;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.android.exoplayer2.Format;
import ed.i0;
import java.util.ArrayList;
import java.util.Arrays;
import oe.d0;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p implements m {

    /* renamed from: a  reason: collision with root package name */
    private final d0 f21453a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f21454b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f21455c;

    /* renamed from: g  reason: collision with root package name */
    private long f21459g;

    /* renamed from: i  reason: collision with root package name */
    private String f21461i;

    /* renamed from: j  reason: collision with root package name */
    private uc.b0 f21462j;

    /* renamed from: k  reason: collision with root package name */
    private b f21463k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f21464l;

    /* renamed from: n  reason: collision with root package name */
    private boolean f21466n;

    /* renamed from: h  reason: collision with root package name */
    private final boolean[] f21460h = new boolean[3];

    /* renamed from: d  reason: collision with root package name */
    private final u f21456d = new u(7, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: e  reason: collision with root package name */
    private final u f21457e = new u(8, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: f  reason: collision with root package name */
    private final u f21458f = new u(6, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: m  reason: collision with root package name */
    private long f21465m = -9223372036854775807L;

    /* renamed from: o  reason: collision with root package name */
    private final oe.h0 f21467o = new oe.h0();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final uc.b0 f21468a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f21469b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f21470c;

        /* renamed from: f  reason: collision with root package name */
        private final oe.i0 f21473f;

        /* renamed from: g  reason: collision with root package name */
        private byte[] f21474g;

        /* renamed from: h  reason: collision with root package name */
        private int f21475h;

        /* renamed from: i  reason: collision with root package name */
        private int f21476i;

        /* renamed from: j  reason: collision with root package name */
        private long f21477j;

        /* renamed from: k  reason: collision with root package name */
        private boolean f21478k;

        /* renamed from: l  reason: collision with root package name */
        private long f21479l;

        /* renamed from: o  reason: collision with root package name */
        private boolean f21482o;

        /* renamed from: p  reason: collision with root package name */
        private long f21483p;

        /* renamed from: q  reason: collision with root package name */
        private long f21484q;

        /* renamed from: r  reason: collision with root package name */
        private boolean f21485r;

        /* renamed from: d  reason: collision with root package name */
        private final SparseArray f21471d = new SparseArray();

        /* renamed from: e  reason: collision with root package name */
        private final SparseArray f21472e = new SparseArray();

        /* renamed from: m  reason: collision with root package name */
        private a f21480m = new a();

        /* renamed from: n  reason: collision with root package name */
        private a f21481n = new a();

        /* JADX INFO: Access modifiers changed from: private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f21486a;

            /* renamed from: b  reason: collision with root package name */
            private boolean f21487b;

            /* renamed from: c  reason: collision with root package name */
            private d0.c f21488c;

            /* renamed from: d  reason: collision with root package name */
            private int f21489d;

            /* renamed from: e  reason: collision with root package name */
            private int f21490e;

            /* renamed from: f  reason: collision with root package name */
            private int f21491f;

            /* renamed from: g  reason: collision with root package name */
            private int f21492g;

            /* renamed from: h  reason: collision with root package name */
            private boolean f21493h;

            /* renamed from: i  reason: collision with root package name */
            private boolean f21494i;

            /* renamed from: j  reason: collision with root package name */
            private boolean f21495j;

            /* renamed from: k  reason: collision with root package name */
            private boolean f21496k;

            /* renamed from: l  reason: collision with root package name */
            private int f21497l;

            /* renamed from: m  reason: collision with root package name */
            private int f21498m;

            /* renamed from: n  reason: collision with root package name */
            private int f21499n;

            /* renamed from: o  reason: collision with root package name */
            private int f21500o;

            /* renamed from: p  reason: collision with root package name */
            private int f21501p;

            private a() {
            }

            /* JADX INFO: Access modifiers changed from: private */
            public boolean c(a aVar) {
                int i10;
                int i11;
                int i12;
                boolean z10;
                if (!this.f21486a) {
                    return false;
                }
                if (!aVar.f21486a) {
                    return true;
                }
                d0.c cVar = (d0.c) oe.a.i(this.f21488c);
                d0.c cVar2 = (d0.c) oe.a.i(aVar.f21488c);
                if (this.f21491f == aVar.f21491f && this.f21492g == aVar.f21492g && this.f21493h == aVar.f21493h && ((!this.f21494i || !aVar.f21494i || this.f21495j == aVar.f21495j) && (((i10 = this.f21489d) == (i11 = aVar.f21489d) || (i10 != 0 && i11 != 0)) && (((i12 = cVar.f40598l) != 0 || cVar2.f40598l != 0 || (this.f21498m == aVar.f21498m && this.f21499n == aVar.f21499n)) && ((i12 != 1 || cVar2.f40598l != 1 || (this.f21500o == aVar.f21500o && this.f21501p == aVar.f21501p)) && (z10 = this.f21496k) == aVar.f21496k && (!z10 || this.f21497l == aVar.f21497l)))))) {
                    return false;
                }
                return true;
            }

            public void b() {
                this.f21487b = false;
                this.f21486a = false;
            }

            public boolean d() {
                if (this.f21487b) {
                    int i10 = this.f21490e;
                    if (i10 == 7 || i10 == 2) {
                        return true;
                    }
                    return false;
                }
                return false;
            }

            public void e(d0.c cVar, int i10, int i11, int i12, int i13, boolean z10, boolean z11, boolean z12, boolean z13, int i14, int i15, int i16, int i17, int i18) {
                this.f21488c = cVar;
                this.f21489d = i10;
                this.f21490e = i11;
                this.f21491f = i12;
                this.f21492g = i13;
                this.f21493h = z10;
                this.f21494i = z11;
                this.f21495j = z12;
                this.f21496k = z13;
                this.f21497l = i14;
                this.f21498m = i15;
                this.f21499n = i16;
                this.f21500o = i17;
                this.f21501p = i18;
                this.f21486a = true;
                this.f21487b = true;
            }

            public void f(int i10) {
                this.f21490e = i10;
                this.f21487b = true;
            }
        }

        public b(uc.b0 b0Var, boolean z10, boolean z11) {
            this.f21468a = b0Var;
            this.f21469b = z10;
            this.f21470c = z11;
            byte[] bArr = new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT];
            this.f21474g = bArr;
            this.f21473f = new oe.i0(bArr, 0, 0);
            g();
        }

        private void d(int i10) {
            long j10 = this.f21484q;
            if (j10 == -9223372036854775807L) {
                return;
            }
            boolean z10 = this.f21485r;
            this.f21468a.a(j10, z10 ? 1 : 0, (int) (this.f21477j - this.f21483p), i10, null);
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
            throw new UnsupportedOperationException("Method not decompiled: ed.p.b.a(byte[], int, int):void");
        }

        public boolean b(long j10, int i10, boolean z10, boolean z11) {
            boolean z12 = false;
            if (this.f21476i == 9 || (this.f21470c && this.f21481n.c(this.f21480m))) {
                if (z10 && this.f21482o) {
                    d(i10 + ((int) (j10 - this.f21477j)));
                }
                this.f21483p = this.f21477j;
                this.f21484q = this.f21479l;
                this.f21485r = false;
                this.f21482o = true;
            }
            if (this.f21469b) {
                z11 = this.f21481n.d();
            }
            boolean z13 = this.f21485r;
            int i11 = this.f21476i;
            if (i11 == 5 || (z11 && i11 == 1)) {
                z12 = true;
            }
            boolean z14 = z13 | z12;
            this.f21485r = z14;
            return z14;
        }

        public boolean c() {
            return this.f21470c;
        }

        public void e(d0.b bVar) {
            this.f21472e.append(bVar.f40584a, bVar);
        }

        public void f(d0.c cVar) {
            this.f21471d.append(cVar.f40590d, cVar);
        }

        public void g() {
            this.f21478k = false;
            this.f21482o = false;
            this.f21481n.b();
        }

        public void h(long j10, int i10, long j11) {
            this.f21476i = i10;
            this.f21479l = j11;
            this.f21477j = j10;
            if (!this.f21469b || i10 != 1) {
                if (this.f21470c) {
                    if (i10 != 5 && i10 != 1 && i10 != 2) {
                        return;
                    }
                } else {
                    return;
                }
            }
            a aVar = this.f21480m;
            this.f21480m = this.f21481n;
            this.f21481n = aVar;
            aVar.b();
            this.f21475h = 0;
            this.f21478k = true;
        }
    }

    public p(d0 d0Var, boolean z10, boolean z11) {
        this.f21453a = d0Var;
        this.f21454b = z10;
        this.f21455c = z11;
    }

    private void f() {
        oe.a.i(this.f21462j);
        w0.j(this.f21463k);
    }

    private void g(long j10, int i10, int i11, long j11) {
        if (!this.f21464l || this.f21463k.c()) {
            this.f21456d.b(i11);
            this.f21457e.b(i11);
            if (!this.f21464l) {
                if (this.f21456d.c() && this.f21457e.c()) {
                    ArrayList arrayList = new ArrayList();
                    u uVar = this.f21456d;
                    arrayList.add(Arrays.copyOf(uVar.f21571d, uVar.f21572e));
                    u uVar2 = this.f21457e;
                    arrayList.add(Arrays.copyOf(uVar2.f21571d, uVar2.f21572e));
                    u uVar3 = this.f21456d;
                    d0.c l10 = oe.d0.l(uVar3.f21571d, 3, uVar3.f21572e);
                    u uVar4 = this.f21457e;
                    d0.b j12 = oe.d0.j(uVar4.f21571d, 3, uVar4.f21572e);
                    this.f21462j.c(new Format.b().U(this.f21461i).g0("video/avc").K(oe.f.a(l10.f40587a, l10.f40588b, l10.f40589c)).n0(l10.f40592f).S(l10.f40593g).c0(l10.f40594h).V(arrayList).G());
                    this.f21464l = true;
                    this.f21463k.f(l10);
                    this.f21463k.e(j12);
                    this.f21456d.d();
                    this.f21457e.d();
                }
            } else if (this.f21456d.c()) {
                u uVar5 = this.f21456d;
                this.f21463k.f(oe.d0.l(uVar5.f21571d, 3, uVar5.f21572e));
                this.f21456d.d();
            } else if (this.f21457e.c()) {
                u uVar6 = this.f21457e;
                this.f21463k.e(oe.d0.j(uVar6.f21571d, 3, uVar6.f21572e));
                this.f21457e.d();
            }
        }
        if (this.f21458f.b(i11)) {
            u uVar7 = this.f21458f;
            this.f21467o.S(this.f21458f.f21571d, oe.d0.q(uVar7.f21571d, uVar7.f21572e));
            this.f21467o.U(4);
            this.f21453a.a(j11, this.f21467o);
        }
        if (this.f21463k.b(j10, i10, this.f21464l, this.f21466n)) {
            this.f21466n = false;
        }
    }

    private void h(byte[] bArr, int i10, int i11) {
        if (!this.f21464l || this.f21463k.c()) {
            this.f21456d.a(bArr, i10, i11);
            this.f21457e.a(bArr, i10, i11);
        }
        this.f21458f.a(bArr, i10, i11);
        this.f21463k.a(bArr, i10, i11);
    }

    private void i(long j10, int i10, long j11) {
        if (!this.f21464l || this.f21463k.c()) {
            this.f21456d.e(i10);
            this.f21457e.e(i10);
        }
        this.f21458f.e(i10);
        this.f21463k.h(j10, i10, j11);
    }

    @Override // ed.m
    public void a(oe.h0 h0Var) {
        int i10;
        f();
        int f10 = h0Var.f();
        int g10 = h0Var.g();
        byte[] e10 = h0Var.e();
        this.f21459g += h0Var.a();
        this.f21462j.e(h0Var, h0Var.a());
        while (true) {
            int c10 = oe.d0.c(e10, f10, g10, this.f21460h);
            if (c10 == g10) {
                h(e10, f10, g10);
                return;
            }
            int f11 = oe.d0.f(e10, c10);
            int i11 = c10 - f10;
            if (i11 > 0) {
                h(e10, f10, c10);
            }
            int i12 = g10 - c10;
            long j10 = this.f21459g - i12;
            if (i11 < 0) {
                i10 = -i11;
            } else {
                i10 = 0;
            }
            g(j10, i12, i10, this.f21465m);
            i(j10, f11, this.f21465m);
            f10 = c10 + 3;
        }
    }

    @Override // ed.m
    public void b() {
        this.f21459g = 0L;
        this.f21466n = false;
        this.f21465m = -9223372036854775807L;
        oe.d0.a(this.f21460h);
        this.f21456d.d();
        this.f21457e.d();
        this.f21458f.d();
        b bVar = this.f21463k;
        if (bVar != null) {
            bVar.g();
        }
    }

    @Override // ed.m
    public void c(uc.m mVar, i0.d dVar) {
        dVar.a();
        this.f21461i = dVar.b();
        uc.b0 c10 = mVar.c(dVar.c(), 2);
        this.f21462j = c10;
        this.f21463k = new b(c10, this.f21454b, this.f21455c);
        this.f21453a.b(mVar, dVar);
    }

    @Override // ed.m
    public void e(long j10, int i10) {
        boolean z10;
        if (j10 != -9223372036854775807L) {
            this.f21465m = j10;
        }
        boolean z11 = this.f21466n;
        if ((i10 & 2) != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f21466n = z11 | z10;
    }

    @Override // ed.m
    public void d() {
    }
}
