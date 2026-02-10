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
    private final d0 f22620a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f22621b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f22622c;

    /* renamed from: g  reason: collision with root package name */
    private long f22626g;

    /* renamed from: i  reason: collision with root package name */
    private String f22628i;

    /* renamed from: j  reason: collision with root package name */
    private uc.b0 f22629j;

    /* renamed from: k  reason: collision with root package name */
    private b f22630k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f22631l;

    /* renamed from: n  reason: collision with root package name */
    private boolean f22633n;

    /* renamed from: h  reason: collision with root package name */
    private final boolean[] f22627h = new boolean[3];

    /* renamed from: d  reason: collision with root package name */
    private final u f22623d = new u(7, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: e  reason: collision with root package name */
    private final u f22624e = new u(8, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: f  reason: collision with root package name */
    private final u f22625f = new u(6, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: m  reason: collision with root package name */
    private long f22632m = -9223372036854775807L;

    /* renamed from: o  reason: collision with root package name */
    private final oe.h0 f22634o = new oe.h0();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final uc.b0 f22635a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f22636b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f22637c;

        /* renamed from: f  reason: collision with root package name */
        private final oe.i0 f22640f;

        /* renamed from: g  reason: collision with root package name */
        private byte[] f22641g;

        /* renamed from: h  reason: collision with root package name */
        private int f22642h;

        /* renamed from: i  reason: collision with root package name */
        private int f22643i;

        /* renamed from: j  reason: collision with root package name */
        private long f22644j;

        /* renamed from: k  reason: collision with root package name */
        private boolean f22645k;

        /* renamed from: l  reason: collision with root package name */
        private long f22646l;

        /* renamed from: o  reason: collision with root package name */
        private boolean f22649o;

        /* renamed from: p  reason: collision with root package name */
        private long f22650p;

        /* renamed from: q  reason: collision with root package name */
        private long f22651q;

        /* renamed from: r  reason: collision with root package name */
        private boolean f22652r;

        /* renamed from: d  reason: collision with root package name */
        private final SparseArray f22638d = new SparseArray();

        /* renamed from: e  reason: collision with root package name */
        private final SparseArray f22639e = new SparseArray();

        /* renamed from: m  reason: collision with root package name */
        private a f22647m = new a();

        /* renamed from: n  reason: collision with root package name */
        private a f22648n = new a();

        /* JADX INFO: Access modifiers changed from: private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f22653a;

            /* renamed from: b  reason: collision with root package name */
            private boolean f22654b;

            /* renamed from: c  reason: collision with root package name */
            private d0.c f22655c;

            /* renamed from: d  reason: collision with root package name */
            private int f22656d;

            /* renamed from: e  reason: collision with root package name */
            private int f22657e;

            /* renamed from: f  reason: collision with root package name */
            private int f22658f;

            /* renamed from: g  reason: collision with root package name */
            private int f22659g;

            /* renamed from: h  reason: collision with root package name */
            private boolean f22660h;

            /* renamed from: i  reason: collision with root package name */
            private boolean f22661i;

            /* renamed from: j  reason: collision with root package name */
            private boolean f22662j;

            /* renamed from: k  reason: collision with root package name */
            private boolean f22663k;

            /* renamed from: l  reason: collision with root package name */
            private int f22664l;

            /* renamed from: m  reason: collision with root package name */
            private int f22665m;

            /* renamed from: n  reason: collision with root package name */
            private int f22666n;

            /* renamed from: o  reason: collision with root package name */
            private int f22667o;

            /* renamed from: p  reason: collision with root package name */
            private int f22668p;

            private a() {
            }

            /* JADX INFO: Access modifiers changed from: private */
            public boolean c(a aVar) {
                int i10;
                int i11;
                int i12;
                boolean z10;
                if (!this.f22653a) {
                    return false;
                }
                if (!aVar.f22653a) {
                    return true;
                }
                d0.c cVar = (d0.c) oe.a.i(this.f22655c);
                d0.c cVar2 = (d0.c) oe.a.i(aVar.f22655c);
                if (this.f22658f == aVar.f22658f && this.f22659g == aVar.f22659g && this.f22660h == aVar.f22660h && ((!this.f22661i || !aVar.f22661i || this.f22662j == aVar.f22662j) && (((i10 = this.f22656d) == (i11 = aVar.f22656d) || (i10 != 0 && i11 != 0)) && (((i12 = cVar.f38924l) != 0 || cVar2.f38924l != 0 || (this.f22665m == aVar.f22665m && this.f22666n == aVar.f22666n)) && ((i12 != 1 || cVar2.f38924l != 1 || (this.f22667o == aVar.f22667o && this.f22668p == aVar.f22668p)) && (z10 = this.f22663k) == aVar.f22663k && (!z10 || this.f22664l == aVar.f22664l)))))) {
                    return false;
                }
                return true;
            }

            public void b() {
                this.f22654b = false;
                this.f22653a = false;
            }

            public boolean d() {
                if (this.f22654b) {
                    int i10 = this.f22657e;
                    if (i10 == 7 || i10 == 2) {
                        return true;
                    }
                    return false;
                }
                return false;
            }

            public void e(d0.c cVar, int i10, int i11, int i12, int i13, boolean z10, boolean z11, boolean z12, boolean z13, int i14, int i15, int i16, int i17, int i18) {
                this.f22655c = cVar;
                this.f22656d = i10;
                this.f22657e = i11;
                this.f22658f = i12;
                this.f22659g = i13;
                this.f22660h = z10;
                this.f22661i = z11;
                this.f22662j = z12;
                this.f22663k = z13;
                this.f22664l = i14;
                this.f22665m = i15;
                this.f22666n = i16;
                this.f22667o = i17;
                this.f22668p = i18;
                this.f22653a = true;
                this.f22654b = true;
            }

            public void f(int i10) {
                this.f22657e = i10;
                this.f22654b = true;
            }
        }

        public b(uc.b0 b0Var, boolean z10, boolean z11) {
            this.f22635a = b0Var;
            this.f22636b = z10;
            this.f22637c = z11;
            byte[] bArr = new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT];
            this.f22641g = bArr;
            this.f22640f = new oe.i0(bArr, 0, 0);
            g();
        }

        private void d(int i10) {
            long j10 = this.f22651q;
            if (j10 == -9223372036854775807L) {
                return;
            }
            boolean z10 = this.f22652r;
            this.f22635a.a(j10, z10 ? 1 : 0, (int) (this.f22644j - this.f22650p), i10, null);
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
            if (this.f22643i == 9 || (this.f22637c && this.f22648n.c(this.f22647m))) {
                if (z10 && this.f22649o) {
                    d(i10 + ((int) (j10 - this.f22644j)));
                }
                this.f22650p = this.f22644j;
                this.f22651q = this.f22646l;
                this.f22652r = false;
                this.f22649o = true;
            }
            if (this.f22636b) {
                z11 = this.f22648n.d();
            }
            boolean z13 = this.f22652r;
            int i11 = this.f22643i;
            if (i11 == 5 || (z11 && i11 == 1)) {
                z12 = true;
            }
            boolean z14 = z13 | z12;
            this.f22652r = z14;
            return z14;
        }

        public boolean c() {
            return this.f22637c;
        }

        public void e(d0.b bVar) {
            this.f22639e.append(bVar.f38910a, bVar);
        }

        public void f(d0.c cVar) {
            this.f22638d.append(cVar.f38916d, cVar);
        }

        public void g() {
            this.f22645k = false;
            this.f22649o = false;
            this.f22648n.b();
        }

        public void h(long j10, int i10, long j11) {
            this.f22643i = i10;
            this.f22646l = j11;
            this.f22644j = j10;
            if (!this.f22636b || i10 != 1) {
                if (this.f22637c) {
                    if (i10 != 5 && i10 != 1 && i10 != 2) {
                        return;
                    }
                } else {
                    return;
                }
            }
            a aVar = this.f22647m;
            this.f22647m = this.f22648n;
            this.f22648n = aVar;
            aVar.b();
            this.f22642h = 0;
            this.f22645k = true;
        }
    }

    public p(d0 d0Var, boolean z10, boolean z11) {
        this.f22620a = d0Var;
        this.f22621b = z10;
        this.f22622c = z11;
    }

    private void f() {
        oe.a.i(this.f22629j);
        w0.j(this.f22630k);
    }

    private void g(long j10, int i10, int i11, long j11) {
        if (!this.f22631l || this.f22630k.c()) {
            this.f22623d.b(i11);
            this.f22624e.b(i11);
            if (!this.f22631l) {
                if (this.f22623d.c() && this.f22624e.c()) {
                    ArrayList arrayList = new ArrayList();
                    u uVar = this.f22623d;
                    arrayList.add(Arrays.copyOf(uVar.f22738d, uVar.f22739e));
                    u uVar2 = this.f22624e;
                    arrayList.add(Arrays.copyOf(uVar2.f22738d, uVar2.f22739e));
                    u uVar3 = this.f22623d;
                    d0.c l10 = oe.d0.l(uVar3.f22738d, 3, uVar3.f22739e);
                    u uVar4 = this.f22624e;
                    d0.b j12 = oe.d0.j(uVar4.f22738d, 3, uVar4.f22739e);
                    this.f22629j.c(new Format.b().U(this.f22628i).g0("video/avc").K(oe.f.a(l10.f38913a, l10.f38914b, l10.f38915c)).n0(l10.f38918f).S(l10.f38919g).c0(l10.f38920h).V(arrayList).G());
                    this.f22631l = true;
                    this.f22630k.f(l10);
                    this.f22630k.e(j12);
                    this.f22623d.d();
                    this.f22624e.d();
                }
            } else if (this.f22623d.c()) {
                u uVar5 = this.f22623d;
                this.f22630k.f(oe.d0.l(uVar5.f22738d, 3, uVar5.f22739e));
                this.f22623d.d();
            } else if (this.f22624e.c()) {
                u uVar6 = this.f22624e;
                this.f22630k.e(oe.d0.j(uVar6.f22738d, 3, uVar6.f22739e));
                this.f22624e.d();
            }
        }
        if (this.f22625f.b(i11)) {
            u uVar7 = this.f22625f;
            this.f22634o.S(this.f22625f.f22738d, oe.d0.q(uVar7.f22738d, uVar7.f22739e));
            this.f22634o.U(4);
            this.f22620a.a(j11, this.f22634o);
        }
        if (this.f22630k.b(j10, i10, this.f22631l, this.f22633n)) {
            this.f22633n = false;
        }
    }

    private void h(byte[] bArr, int i10, int i11) {
        if (!this.f22631l || this.f22630k.c()) {
            this.f22623d.a(bArr, i10, i11);
            this.f22624e.a(bArr, i10, i11);
        }
        this.f22625f.a(bArr, i10, i11);
        this.f22630k.a(bArr, i10, i11);
    }

    private void i(long j10, int i10, long j11) {
        if (!this.f22631l || this.f22630k.c()) {
            this.f22623d.e(i10);
            this.f22624e.e(i10);
        }
        this.f22625f.e(i10);
        this.f22630k.h(j10, i10, j11);
    }

    @Override // ed.m
    public void a(oe.h0 h0Var) {
        int i10;
        f();
        int f10 = h0Var.f();
        int g10 = h0Var.g();
        byte[] e10 = h0Var.e();
        this.f22626g += h0Var.a();
        this.f22629j.e(h0Var, h0Var.a());
        while (true) {
            int c10 = oe.d0.c(e10, f10, g10, this.f22627h);
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
            long j10 = this.f22626g - i12;
            if (i11 < 0) {
                i10 = -i11;
            } else {
                i10 = 0;
            }
            g(j10, i12, i10, this.f22632m);
            i(j10, f11, this.f22632m);
            f10 = c10 + 3;
        }
    }

    @Override // ed.m
    public void b() {
        this.f22626g = 0L;
        this.f22633n = false;
        this.f22632m = -9223372036854775807L;
        oe.d0.a(this.f22627h);
        this.f22623d.d();
        this.f22624e.d();
        this.f22625f.d();
        b bVar = this.f22630k;
        if (bVar != null) {
            bVar.g();
        }
    }

    @Override // ed.m
    public void c(uc.m mVar, i0.d dVar) {
        dVar.a();
        this.f22628i = dVar.b();
        uc.b0 c10 = mVar.c(dVar.c(), 2);
        this.f22629j = c10;
        this.f22630k = new b(c10, this.f22621b, this.f22622c);
        this.f22620a.b(mVar, dVar);
    }

    @Override // ed.m
    public void e(long j10, int i10) {
        boolean z10;
        if (j10 != -9223372036854775807L) {
            this.f22632m = j10;
        }
        boolean z11 = this.f22633n;
        if ((i10 & 2) != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f22633n = z11 | z10;
    }

    @Override // ed.m
    public void d() {
    }
}
