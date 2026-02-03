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
    private final d0 f20393a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f20394b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f20395c;

    /* renamed from: g  reason: collision with root package name */
    private long f20399g;

    /* renamed from: i  reason: collision with root package name */
    private String f20401i;

    /* renamed from: j  reason: collision with root package name */
    private tc.b0 f20402j;

    /* renamed from: k  reason: collision with root package name */
    private b f20403k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f20404l;

    /* renamed from: n  reason: collision with root package name */
    private boolean f20406n;

    /* renamed from: h  reason: collision with root package name */
    private final boolean[] f20400h = new boolean[3];

    /* renamed from: d  reason: collision with root package name */
    private final u f20396d = new u(7, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: e  reason: collision with root package name */
    private final u f20397e = new u(8, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: f  reason: collision with root package name */
    private final u f20398f = new u(6, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: m  reason: collision with root package name */
    private long f20405m = -9223372036854775807L;

    /* renamed from: o  reason: collision with root package name */
    private final ne.h0 f20407o = new ne.h0();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final tc.b0 f20408a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f20409b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f20410c;

        /* renamed from: f  reason: collision with root package name */
        private final ne.i0 f20413f;

        /* renamed from: g  reason: collision with root package name */
        private byte[] f20414g;

        /* renamed from: h  reason: collision with root package name */
        private int f20415h;

        /* renamed from: i  reason: collision with root package name */
        private int f20416i;

        /* renamed from: j  reason: collision with root package name */
        private long f20417j;

        /* renamed from: k  reason: collision with root package name */
        private boolean f20418k;

        /* renamed from: l  reason: collision with root package name */
        private long f20419l;

        /* renamed from: o  reason: collision with root package name */
        private boolean f20422o;

        /* renamed from: p  reason: collision with root package name */
        private long f20423p;

        /* renamed from: q  reason: collision with root package name */
        private long f20424q;

        /* renamed from: r  reason: collision with root package name */
        private boolean f20425r;

        /* renamed from: d  reason: collision with root package name */
        private final SparseArray f20411d = new SparseArray();

        /* renamed from: e  reason: collision with root package name */
        private final SparseArray f20412e = new SparseArray();

        /* renamed from: m  reason: collision with root package name */
        private a f20420m = new a();

        /* renamed from: n  reason: collision with root package name */
        private a f20421n = new a();

        /* JADX INFO: Access modifiers changed from: private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f20426a;

            /* renamed from: b  reason: collision with root package name */
            private boolean f20427b;

            /* renamed from: c  reason: collision with root package name */
            private d0.c f20428c;

            /* renamed from: d  reason: collision with root package name */
            private int f20429d;

            /* renamed from: e  reason: collision with root package name */
            private int f20430e;

            /* renamed from: f  reason: collision with root package name */
            private int f20431f;

            /* renamed from: g  reason: collision with root package name */
            private int f20432g;

            /* renamed from: h  reason: collision with root package name */
            private boolean f20433h;

            /* renamed from: i  reason: collision with root package name */
            private boolean f20434i;

            /* renamed from: j  reason: collision with root package name */
            private boolean f20435j;

            /* renamed from: k  reason: collision with root package name */
            private boolean f20436k;

            /* renamed from: l  reason: collision with root package name */
            private int f20437l;

            /* renamed from: m  reason: collision with root package name */
            private int f20438m;

            /* renamed from: n  reason: collision with root package name */
            private int f20439n;

            /* renamed from: o  reason: collision with root package name */
            private int f20440o;

            /* renamed from: p  reason: collision with root package name */
            private int f20441p;

            private a() {
            }

            /* JADX INFO: Access modifiers changed from: private */
            public boolean c(a aVar) {
                int i10;
                int i11;
                int i12;
                boolean z10;
                if (!this.f20426a) {
                    return false;
                }
                if (!aVar.f20426a) {
                    return true;
                }
                d0.c cVar = (d0.c) ne.a.i(this.f20428c);
                d0.c cVar2 = (d0.c) ne.a.i(aVar.f20428c);
                if (this.f20431f == aVar.f20431f && this.f20432g == aVar.f20432g && this.f20433h == aVar.f20433h && ((!this.f20434i || !aVar.f20434i || this.f20435j == aVar.f20435j) && (((i10 = this.f20429d) == (i11 = aVar.f20429d) || (i10 != 0 && i11 != 0)) && (((i12 = cVar.f40084l) != 0 || cVar2.f40084l != 0 || (this.f20438m == aVar.f20438m && this.f20439n == aVar.f20439n)) && ((i12 != 1 || cVar2.f40084l != 1 || (this.f20440o == aVar.f20440o && this.f20441p == aVar.f20441p)) && (z10 = this.f20436k) == aVar.f20436k && (!z10 || this.f20437l == aVar.f20437l)))))) {
                    return false;
                }
                return true;
            }

            public void b() {
                this.f20427b = false;
                this.f20426a = false;
            }

            public boolean d() {
                if (this.f20427b) {
                    int i10 = this.f20430e;
                    if (i10 == 7 || i10 == 2) {
                        return true;
                    }
                    return false;
                }
                return false;
            }

            public void e(d0.c cVar, int i10, int i11, int i12, int i13, boolean z10, boolean z11, boolean z12, boolean z13, int i14, int i15, int i16, int i17, int i18) {
                this.f20428c = cVar;
                this.f20429d = i10;
                this.f20430e = i11;
                this.f20431f = i12;
                this.f20432g = i13;
                this.f20433h = z10;
                this.f20434i = z11;
                this.f20435j = z12;
                this.f20436k = z13;
                this.f20437l = i14;
                this.f20438m = i15;
                this.f20439n = i16;
                this.f20440o = i17;
                this.f20441p = i18;
                this.f20426a = true;
                this.f20427b = true;
            }

            public void f(int i10) {
                this.f20430e = i10;
                this.f20427b = true;
            }
        }

        public b(tc.b0 b0Var, boolean z10, boolean z11) {
            this.f20408a = b0Var;
            this.f20409b = z10;
            this.f20410c = z11;
            byte[] bArr = new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT];
            this.f20414g = bArr;
            this.f20413f = new ne.i0(bArr, 0, 0);
            g();
        }

        private void d(int i10) {
            long j10 = this.f20424q;
            if (j10 == -9223372036854775807L) {
                return;
            }
            boolean z10 = this.f20425r;
            this.f20408a.d(j10, z10 ? 1 : 0, (int) (this.f20417j - this.f20423p), i10, null);
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
            if (this.f20416i == 9 || (this.f20410c && this.f20421n.c(this.f20420m))) {
                if (z10 && this.f20422o) {
                    d(i10 + ((int) (j10 - this.f20417j)));
                }
                this.f20423p = this.f20417j;
                this.f20424q = this.f20419l;
                this.f20425r = false;
                this.f20422o = true;
            }
            if (this.f20409b) {
                z11 = this.f20421n.d();
            }
            boolean z13 = this.f20425r;
            int i11 = this.f20416i;
            if (i11 == 5 || (z11 && i11 == 1)) {
                z12 = true;
            }
            boolean z14 = z13 | z12;
            this.f20425r = z14;
            return z14;
        }

        public boolean c() {
            return this.f20410c;
        }

        public void e(d0.b bVar) {
            this.f20412e.append(bVar.f40070a, bVar);
        }

        public void f(d0.c cVar) {
            this.f20411d.append(cVar.f40076d, cVar);
        }

        public void g() {
            this.f20418k = false;
            this.f20422o = false;
            this.f20421n.b();
        }

        public void h(long j10, int i10, long j11) {
            this.f20416i = i10;
            this.f20419l = j11;
            this.f20417j = j10;
            if (!this.f20409b || i10 != 1) {
                if (this.f20410c) {
                    if (i10 != 5 && i10 != 1 && i10 != 2) {
                        return;
                    }
                } else {
                    return;
                }
            }
            a aVar = this.f20420m;
            this.f20420m = this.f20421n;
            this.f20421n = aVar;
            aVar.b();
            this.f20415h = 0;
            this.f20418k = true;
        }
    }

    public p(d0 d0Var, boolean z10, boolean z11) {
        this.f20393a = d0Var;
        this.f20394b = z10;
        this.f20395c = z11;
    }

    private void a() {
        ne.a.i(this.f20402j);
        w0.j(this.f20403k);
    }

    private void g(long j10, int i10, int i11, long j11) {
        if (!this.f20404l || this.f20403k.c()) {
            this.f20396d.b(i11);
            this.f20397e.b(i11);
            if (!this.f20404l) {
                if (this.f20396d.c() && this.f20397e.c()) {
                    ArrayList arrayList = new ArrayList();
                    u uVar = this.f20396d;
                    arrayList.add(Arrays.copyOf(uVar.f20511d, uVar.f20512e));
                    u uVar2 = this.f20397e;
                    arrayList.add(Arrays.copyOf(uVar2.f20511d, uVar2.f20512e));
                    u uVar3 = this.f20396d;
                    d0.c l10 = ne.d0.l(uVar3.f20511d, 3, uVar3.f20512e);
                    u uVar4 = this.f20397e;
                    d0.b j12 = ne.d0.j(uVar4.f20511d, 3, uVar4.f20512e);
                    this.f20402j.b(new Format.b().U(this.f20401i).g0("video/avc").K(ne.f.a(l10.f40073a, l10.f40074b, l10.f40075c)).n0(l10.f40078f).S(l10.f40079g).c0(l10.f40080h).V(arrayList).G());
                    this.f20404l = true;
                    this.f20403k.f(l10);
                    this.f20403k.e(j12);
                    this.f20396d.d();
                    this.f20397e.d();
                }
            } else if (this.f20396d.c()) {
                u uVar5 = this.f20396d;
                this.f20403k.f(ne.d0.l(uVar5.f20511d, 3, uVar5.f20512e));
                this.f20396d.d();
            } else if (this.f20397e.c()) {
                u uVar6 = this.f20397e;
                this.f20403k.e(ne.d0.j(uVar6.f20511d, 3, uVar6.f20512e));
                this.f20397e.d();
            }
        }
        if (this.f20398f.b(i11)) {
            u uVar7 = this.f20398f;
            this.f20407o.S(this.f20398f.f20511d, ne.d0.q(uVar7.f20511d, uVar7.f20512e));
            this.f20407o.U(4);
            this.f20393a.a(j11, this.f20407o);
        }
        if (this.f20403k.b(j10, i10, this.f20404l, this.f20406n)) {
            this.f20406n = false;
        }
    }

    private void h(byte[] bArr, int i10, int i11) {
        if (!this.f20404l || this.f20403k.c()) {
            this.f20396d.a(bArr, i10, i11);
            this.f20397e.a(bArr, i10, i11);
        }
        this.f20398f.a(bArr, i10, i11);
        this.f20403k.a(bArr, i10, i11);
    }

    private void i(long j10, int i10, long j11) {
        if (!this.f20404l || this.f20403k.c()) {
            this.f20396d.e(i10);
            this.f20397e.e(i10);
        }
        this.f20398f.e(i10);
        this.f20403k.h(j10, i10, j11);
    }

    @Override // dd.m
    public void b(ne.h0 h0Var) {
        int i10;
        a();
        int f10 = h0Var.f();
        int g10 = h0Var.g();
        byte[] e10 = h0Var.e();
        this.f20399g += h0Var.a();
        this.f20402j.f(h0Var, h0Var.a());
        while (true) {
            int c10 = ne.d0.c(e10, f10, g10, this.f20400h);
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
            long j10 = this.f20399g - i12;
            if (i11 < 0) {
                i10 = -i11;
            } else {
                i10 = 0;
            }
            g(j10, i12, i10, this.f20405m);
            i(j10, f11, this.f20405m);
            f10 = c10 + 3;
        }
    }

    @Override // dd.m
    public void c() {
        this.f20399g = 0L;
        this.f20406n = false;
        this.f20405m = -9223372036854775807L;
        ne.d0.a(this.f20400h);
        this.f20396d.d();
        this.f20397e.d();
        this.f20398f.d();
        b bVar = this.f20403k;
        if (bVar != null) {
            bVar.g();
        }
    }

    @Override // dd.m
    public void e(long j10, int i10) {
        boolean z10;
        if (j10 != -9223372036854775807L) {
            this.f20405m = j10;
        }
        boolean z11 = this.f20406n;
        if ((i10 & 2) != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f20406n = z11 | z10;
    }

    @Override // dd.m
    public void f(tc.m mVar, i0.d dVar) {
        dVar.a();
        this.f20401i = dVar.b();
        tc.b0 c10 = mVar.c(dVar.c(), 2);
        this.f20402j = c10;
        this.f20403k = new b(c10, this.f20394b, this.f20395c);
        this.f20393a.b(mVar, dVar);
    }

    @Override // dd.m
    public void d() {
    }
}
