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
    private final d0 f22621a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f22622b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f22623c;

    /* renamed from: g  reason: collision with root package name */
    private long f22627g;

    /* renamed from: i  reason: collision with root package name */
    private String f22629i;

    /* renamed from: j  reason: collision with root package name */
    private uc.b0 f22630j;

    /* renamed from: k  reason: collision with root package name */
    private b f22631k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f22632l;

    /* renamed from: n  reason: collision with root package name */
    private boolean f22634n;

    /* renamed from: h  reason: collision with root package name */
    private final boolean[] f22628h = new boolean[3];

    /* renamed from: d  reason: collision with root package name */
    private final u f22624d = new u(7, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: e  reason: collision with root package name */
    private final u f22625e = new u(8, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: f  reason: collision with root package name */
    private final u f22626f = new u(6, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: m  reason: collision with root package name */
    private long f22633m = -9223372036854775807L;

    /* renamed from: o  reason: collision with root package name */
    private final oe.h0 f22635o = new oe.h0();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final uc.b0 f22636a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f22637b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f22638c;

        /* renamed from: f  reason: collision with root package name */
        private final oe.i0 f22641f;

        /* renamed from: g  reason: collision with root package name */
        private byte[] f22642g;

        /* renamed from: h  reason: collision with root package name */
        private int f22643h;

        /* renamed from: i  reason: collision with root package name */
        private int f22644i;

        /* renamed from: j  reason: collision with root package name */
        private long f22645j;

        /* renamed from: k  reason: collision with root package name */
        private boolean f22646k;

        /* renamed from: l  reason: collision with root package name */
        private long f22647l;

        /* renamed from: o  reason: collision with root package name */
        private boolean f22650o;

        /* renamed from: p  reason: collision with root package name */
        private long f22651p;

        /* renamed from: q  reason: collision with root package name */
        private long f22652q;

        /* renamed from: r  reason: collision with root package name */
        private boolean f22653r;

        /* renamed from: d  reason: collision with root package name */
        private final SparseArray f22639d = new SparseArray();

        /* renamed from: e  reason: collision with root package name */
        private final SparseArray f22640e = new SparseArray();

        /* renamed from: m  reason: collision with root package name */
        private a f22648m = new a();

        /* renamed from: n  reason: collision with root package name */
        private a f22649n = new a();

        /* JADX INFO: Access modifiers changed from: private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f22654a;

            /* renamed from: b  reason: collision with root package name */
            private boolean f22655b;

            /* renamed from: c  reason: collision with root package name */
            private d0.c f22656c;

            /* renamed from: d  reason: collision with root package name */
            private int f22657d;

            /* renamed from: e  reason: collision with root package name */
            private int f22658e;

            /* renamed from: f  reason: collision with root package name */
            private int f22659f;

            /* renamed from: g  reason: collision with root package name */
            private int f22660g;

            /* renamed from: h  reason: collision with root package name */
            private boolean f22661h;

            /* renamed from: i  reason: collision with root package name */
            private boolean f22662i;

            /* renamed from: j  reason: collision with root package name */
            private boolean f22663j;

            /* renamed from: k  reason: collision with root package name */
            private boolean f22664k;

            /* renamed from: l  reason: collision with root package name */
            private int f22665l;

            /* renamed from: m  reason: collision with root package name */
            private int f22666m;

            /* renamed from: n  reason: collision with root package name */
            private int f22667n;

            /* renamed from: o  reason: collision with root package name */
            private int f22668o;

            /* renamed from: p  reason: collision with root package name */
            private int f22669p;

            private a() {
            }

            /* JADX INFO: Access modifiers changed from: private */
            public boolean c(a aVar) {
                int i10;
                int i11;
                int i12;
                boolean z10;
                if (!this.f22654a) {
                    return false;
                }
                if (!aVar.f22654a) {
                    return true;
                }
                d0.c cVar = (d0.c) oe.a.i(this.f22656c);
                d0.c cVar2 = (d0.c) oe.a.i(aVar.f22656c);
                if (this.f22659f == aVar.f22659f && this.f22660g == aVar.f22660g && this.f22661h == aVar.f22661h && ((!this.f22662i || !aVar.f22662i || this.f22663j == aVar.f22663j) && (((i10 = this.f22657d) == (i11 = aVar.f22657d) || (i10 != 0 && i11 != 0)) && (((i12 = cVar.f39493l) != 0 || cVar2.f39493l != 0 || (this.f22666m == aVar.f22666m && this.f22667n == aVar.f22667n)) && ((i12 != 1 || cVar2.f39493l != 1 || (this.f22668o == aVar.f22668o && this.f22669p == aVar.f22669p)) && (z10 = this.f22664k) == aVar.f22664k && (!z10 || this.f22665l == aVar.f22665l)))))) {
                    return false;
                }
                return true;
            }

            public void b() {
                this.f22655b = false;
                this.f22654a = false;
            }

            public boolean d() {
                if (this.f22655b) {
                    int i10 = this.f22658e;
                    if (i10 == 7 || i10 == 2) {
                        return true;
                    }
                    return false;
                }
                return false;
            }

            public void e(d0.c cVar, int i10, int i11, int i12, int i13, boolean z10, boolean z11, boolean z12, boolean z13, int i14, int i15, int i16, int i17, int i18) {
                this.f22656c = cVar;
                this.f22657d = i10;
                this.f22658e = i11;
                this.f22659f = i12;
                this.f22660g = i13;
                this.f22661h = z10;
                this.f22662i = z11;
                this.f22663j = z12;
                this.f22664k = z13;
                this.f22665l = i14;
                this.f22666m = i15;
                this.f22667n = i16;
                this.f22668o = i17;
                this.f22669p = i18;
                this.f22654a = true;
                this.f22655b = true;
            }

            public void f(int i10) {
                this.f22658e = i10;
                this.f22655b = true;
            }
        }

        public b(uc.b0 b0Var, boolean z10, boolean z11) {
            this.f22636a = b0Var;
            this.f22637b = z10;
            this.f22638c = z11;
            byte[] bArr = new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT];
            this.f22642g = bArr;
            this.f22641f = new oe.i0(bArr, 0, 0);
            g();
        }

        private void d(int i10) {
            long j10 = this.f22652q;
            if (j10 == -9223372036854775807L) {
                return;
            }
            boolean z10 = this.f22653r;
            this.f22636a.a(j10, z10 ? 1 : 0, (int) (this.f22645j - this.f22651p), i10, null);
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
            if (this.f22644i == 9 || (this.f22638c && this.f22649n.c(this.f22648m))) {
                if (z10 && this.f22650o) {
                    d(i10 + ((int) (j10 - this.f22645j)));
                }
                this.f22651p = this.f22645j;
                this.f22652q = this.f22647l;
                this.f22653r = false;
                this.f22650o = true;
            }
            if (this.f22637b) {
                z11 = this.f22649n.d();
            }
            boolean z13 = this.f22653r;
            int i11 = this.f22644i;
            if (i11 == 5 || (z11 && i11 == 1)) {
                z12 = true;
            }
            boolean z14 = z13 | z12;
            this.f22653r = z14;
            return z14;
        }

        public boolean c() {
            return this.f22638c;
        }

        public void e(d0.b bVar) {
            this.f22640e.append(bVar.f39479a, bVar);
        }

        public void f(d0.c cVar) {
            this.f22639d.append(cVar.f39485d, cVar);
        }

        public void g() {
            this.f22646k = false;
            this.f22650o = false;
            this.f22649n.b();
        }

        public void h(long j10, int i10, long j11) {
            this.f22644i = i10;
            this.f22647l = j11;
            this.f22645j = j10;
            if (!this.f22637b || i10 != 1) {
                if (this.f22638c) {
                    if (i10 != 5 && i10 != 1 && i10 != 2) {
                        return;
                    }
                } else {
                    return;
                }
            }
            a aVar = this.f22648m;
            this.f22648m = this.f22649n;
            this.f22649n = aVar;
            aVar.b();
            this.f22643h = 0;
            this.f22646k = true;
        }
    }

    public p(d0 d0Var, boolean z10, boolean z11) {
        this.f22621a = d0Var;
        this.f22622b = z10;
        this.f22623c = z11;
    }

    private void f() {
        oe.a.i(this.f22630j);
        w0.j(this.f22631k);
    }

    private void g(long j10, int i10, int i11, long j11) {
        if (!this.f22632l || this.f22631k.c()) {
            this.f22624d.b(i11);
            this.f22625e.b(i11);
            if (!this.f22632l) {
                if (this.f22624d.c() && this.f22625e.c()) {
                    ArrayList arrayList = new ArrayList();
                    u uVar = this.f22624d;
                    arrayList.add(Arrays.copyOf(uVar.f22739d, uVar.f22740e));
                    u uVar2 = this.f22625e;
                    arrayList.add(Arrays.copyOf(uVar2.f22739d, uVar2.f22740e));
                    u uVar3 = this.f22624d;
                    d0.c l10 = oe.d0.l(uVar3.f22739d, 3, uVar3.f22740e);
                    u uVar4 = this.f22625e;
                    d0.b j12 = oe.d0.j(uVar4.f22739d, 3, uVar4.f22740e);
                    this.f22630j.c(new Format.b().U(this.f22629i).g0("video/avc").K(oe.f.a(l10.f39482a, l10.f39483b, l10.f39484c)).n0(l10.f39487f).S(l10.f39488g).c0(l10.f39489h).V(arrayList).G());
                    this.f22632l = true;
                    this.f22631k.f(l10);
                    this.f22631k.e(j12);
                    this.f22624d.d();
                    this.f22625e.d();
                }
            } else if (this.f22624d.c()) {
                u uVar5 = this.f22624d;
                this.f22631k.f(oe.d0.l(uVar5.f22739d, 3, uVar5.f22740e));
                this.f22624d.d();
            } else if (this.f22625e.c()) {
                u uVar6 = this.f22625e;
                this.f22631k.e(oe.d0.j(uVar6.f22739d, 3, uVar6.f22740e));
                this.f22625e.d();
            }
        }
        if (this.f22626f.b(i11)) {
            u uVar7 = this.f22626f;
            this.f22635o.S(this.f22626f.f22739d, oe.d0.q(uVar7.f22739d, uVar7.f22740e));
            this.f22635o.U(4);
            this.f22621a.a(j11, this.f22635o);
        }
        if (this.f22631k.b(j10, i10, this.f22632l, this.f22634n)) {
            this.f22634n = false;
        }
    }

    private void h(byte[] bArr, int i10, int i11) {
        if (!this.f22632l || this.f22631k.c()) {
            this.f22624d.a(bArr, i10, i11);
            this.f22625e.a(bArr, i10, i11);
        }
        this.f22626f.a(bArr, i10, i11);
        this.f22631k.a(bArr, i10, i11);
    }

    private void i(long j10, int i10, long j11) {
        if (!this.f22632l || this.f22631k.c()) {
            this.f22624d.e(i10);
            this.f22625e.e(i10);
        }
        this.f22626f.e(i10);
        this.f22631k.h(j10, i10, j11);
    }

    @Override // ed.m
    public void a(oe.h0 h0Var) {
        int i10;
        f();
        int f10 = h0Var.f();
        int g10 = h0Var.g();
        byte[] e10 = h0Var.e();
        this.f22627g += h0Var.a();
        this.f22630j.e(h0Var, h0Var.a());
        while (true) {
            int c10 = oe.d0.c(e10, f10, g10, this.f22628h);
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
            long j10 = this.f22627g - i12;
            if (i11 < 0) {
                i10 = -i11;
            } else {
                i10 = 0;
            }
            g(j10, i12, i10, this.f22633m);
            i(j10, f11, this.f22633m);
            f10 = c10 + 3;
        }
    }

    @Override // ed.m
    public void b() {
        this.f22627g = 0L;
        this.f22634n = false;
        this.f22633m = -9223372036854775807L;
        oe.d0.a(this.f22628h);
        this.f22624d.d();
        this.f22625e.d();
        this.f22626f.d();
        b bVar = this.f22631k;
        if (bVar != null) {
            bVar.g();
        }
    }

    @Override // ed.m
    public void c(uc.m mVar, i0.d dVar) {
        dVar.a();
        this.f22629i = dVar.b();
        uc.b0 c10 = mVar.c(dVar.c(), 2);
        this.f22630j = c10;
        this.f22631k = new b(c10, this.f22622b, this.f22623c);
        this.f22621a.b(mVar, dVar);
    }

    @Override // ed.m
    public void e(long j10, int i10) {
        boolean z10;
        if (j10 != -9223372036854775807L) {
            this.f22633m = j10;
        }
        boolean z11 = this.f22634n;
        if ((i10 & 2) != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f22634n = z11 | z10;
    }

    @Override // ed.m
    public void d() {
    }
}
