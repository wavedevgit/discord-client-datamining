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
    private final d0 f21958a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f21959b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f21960c;

    /* renamed from: g  reason: collision with root package name */
    private long f21964g;

    /* renamed from: i  reason: collision with root package name */
    private String f21966i;

    /* renamed from: j  reason: collision with root package name */
    private tc.b0 f21967j;

    /* renamed from: k  reason: collision with root package name */
    private b f21968k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f21969l;

    /* renamed from: n  reason: collision with root package name */
    private boolean f21971n;

    /* renamed from: h  reason: collision with root package name */
    private final boolean[] f21965h = new boolean[3];

    /* renamed from: d  reason: collision with root package name */
    private final u f21961d = new u(7, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: e  reason: collision with root package name */
    private final u f21962e = new u(8, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: f  reason: collision with root package name */
    private final u f21963f = new u(6, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: m  reason: collision with root package name */
    private long f21970m = -9223372036854775807L;

    /* renamed from: o  reason: collision with root package name */
    private final ne.h0 f21972o = new ne.h0();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final tc.b0 f21973a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f21974b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f21975c;

        /* renamed from: f  reason: collision with root package name */
        private final ne.i0 f21978f;

        /* renamed from: g  reason: collision with root package name */
        private byte[] f21979g;

        /* renamed from: h  reason: collision with root package name */
        private int f21980h;

        /* renamed from: i  reason: collision with root package name */
        private int f21981i;

        /* renamed from: j  reason: collision with root package name */
        private long f21982j;

        /* renamed from: k  reason: collision with root package name */
        private boolean f21983k;

        /* renamed from: l  reason: collision with root package name */
        private long f21984l;

        /* renamed from: o  reason: collision with root package name */
        private boolean f21987o;

        /* renamed from: p  reason: collision with root package name */
        private long f21988p;

        /* renamed from: q  reason: collision with root package name */
        private long f21989q;

        /* renamed from: r  reason: collision with root package name */
        private boolean f21990r;

        /* renamed from: d  reason: collision with root package name */
        private final SparseArray f21976d = new SparseArray();

        /* renamed from: e  reason: collision with root package name */
        private final SparseArray f21977e = new SparseArray();

        /* renamed from: m  reason: collision with root package name */
        private a f21985m = new a();

        /* renamed from: n  reason: collision with root package name */
        private a f21986n = new a();

        /* JADX INFO: Access modifiers changed from: private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f21991a;

            /* renamed from: b  reason: collision with root package name */
            private boolean f21992b;

            /* renamed from: c  reason: collision with root package name */
            private d0.c f21993c;

            /* renamed from: d  reason: collision with root package name */
            private int f21994d;

            /* renamed from: e  reason: collision with root package name */
            private int f21995e;

            /* renamed from: f  reason: collision with root package name */
            private int f21996f;

            /* renamed from: g  reason: collision with root package name */
            private int f21997g;

            /* renamed from: h  reason: collision with root package name */
            private boolean f21998h;

            /* renamed from: i  reason: collision with root package name */
            private boolean f21999i;

            /* renamed from: j  reason: collision with root package name */
            private boolean f22000j;

            /* renamed from: k  reason: collision with root package name */
            private boolean f22001k;

            /* renamed from: l  reason: collision with root package name */
            private int f22002l;

            /* renamed from: m  reason: collision with root package name */
            private int f22003m;

            /* renamed from: n  reason: collision with root package name */
            private int f22004n;

            /* renamed from: o  reason: collision with root package name */
            private int f22005o;

            /* renamed from: p  reason: collision with root package name */
            private int f22006p;

            private a() {
            }

            /* JADX INFO: Access modifiers changed from: private */
            public boolean c(a aVar) {
                int i10;
                int i11;
                int i12;
                boolean z10;
                if (!this.f21991a) {
                    return false;
                }
                if (!aVar.f21991a) {
                    return true;
                }
                d0.c cVar = (d0.c) ne.a.i(this.f21993c);
                d0.c cVar2 = (d0.c) ne.a.i(aVar.f21993c);
                if (this.f21996f == aVar.f21996f && this.f21997g == aVar.f21997g && this.f21998h == aVar.f21998h && ((!this.f21999i || !aVar.f21999i || this.f22000j == aVar.f22000j) && (((i10 = this.f21994d) == (i11 = aVar.f21994d) || (i10 != 0 && i11 != 0)) && (((i12 = cVar.f40166l) != 0 || cVar2.f40166l != 0 || (this.f22003m == aVar.f22003m && this.f22004n == aVar.f22004n)) && ((i12 != 1 || cVar2.f40166l != 1 || (this.f22005o == aVar.f22005o && this.f22006p == aVar.f22006p)) && (z10 = this.f22001k) == aVar.f22001k && (!z10 || this.f22002l == aVar.f22002l)))))) {
                    return false;
                }
                return true;
            }

            public void b() {
                this.f21992b = false;
                this.f21991a = false;
            }

            public boolean d() {
                if (this.f21992b) {
                    int i10 = this.f21995e;
                    if (i10 == 7 || i10 == 2) {
                        return true;
                    }
                    return false;
                }
                return false;
            }

            public void e(d0.c cVar, int i10, int i11, int i12, int i13, boolean z10, boolean z11, boolean z12, boolean z13, int i14, int i15, int i16, int i17, int i18) {
                this.f21993c = cVar;
                this.f21994d = i10;
                this.f21995e = i11;
                this.f21996f = i12;
                this.f21997g = i13;
                this.f21998h = z10;
                this.f21999i = z11;
                this.f22000j = z12;
                this.f22001k = z13;
                this.f22002l = i14;
                this.f22003m = i15;
                this.f22004n = i16;
                this.f22005o = i17;
                this.f22006p = i18;
                this.f21991a = true;
                this.f21992b = true;
            }

            public void f(int i10) {
                this.f21995e = i10;
                this.f21992b = true;
            }
        }

        public b(tc.b0 b0Var, boolean z10, boolean z11) {
            this.f21973a = b0Var;
            this.f21974b = z10;
            this.f21975c = z11;
            byte[] bArr = new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT];
            this.f21979g = bArr;
            this.f21978f = new ne.i0(bArr, 0, 0);
            g();
        }

        private void d(int i10) {
            long j10 = this.f21989q;
            if (j10 == -9223372036854775807L) {
                return;
            }
            boolean z10 = this.f21990r;
            this.f21973a.d(j10, z10 ? 1 : 0, (int) (this.f21982j - this.f21988p), i10, null);
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
            if (this.f21981i == 9 || (this.f21975c && this.f21986n.c(this.f21985m))) {
                if (z10 && this.f21987o) {
                    d(i10 + ((int) (j10 - this.f21982j)));
                }
                this.f21988p = this.f21982j;
                this.f21989q = this.f21984l;
                this.f21990r = false;
                this.f21987o = true;
            }
            if (this.f21974b) {
                z11 = this.f21986n.d();
            }
            boolean z13 = this.f21990r;
            int i11 = this.f21981i;
            if (i11 == 5 || (z11 && i11 == 1)) {
                z12 = true;
            }
            boolean z14 = z13 | z12;
            this.f21990r = z14;
            return z14;
        }

        public boolean c() {
            return this.f21975c;
        }

        public void e(d0.b bVar) {
            this.f21977e.append(bVar.f40152a, bVar);
        }

        public void f(d0.c cVar) {
            this.f21976d.append(cVar.f40158d, cVar);
        }

        public void g() {
            this.f21983k = false;
            this.f21987o = false;
            this.f21986n.b();
        }

        public void h(long j10, int i10, long j11) {
            this.f21981i = i10;
            this.f21984l = j11;
            this.f21982j = j10;
            if (!this.f21974b || i10 != 1) {
                if (this.f21975c) {
                    if (i10 != 5 && i10 != 1 && i10 != 2) {
                        return;
                    }
                } else {
                    return;
                }
            }
            a aVar = this.f21985m;
            this.f21985m = this.f21986n;
            this.f21986n = aVar;
            aVar.b();
            this.f21980h = 0;
            this.f21983k = true;
        }
    }

    public p(d0 d0Var, boolean z10, boolean z11) {
        this.f21958a = d0Var;
        this.f21959b = z10;
        this.f21960c = z11;
    }

    private void a() {
        ne.a.i(this.f21967j);
        w0.j(this.f21968k);
    }

    private void g(long j10, int i10, int i11, long j11) {
        if (!this.f21969l || this.f21968k.c()) {
            this.f21961d.b(i11);
            this.f21962e.b(i11);
            if (!this.f21969l) {
                if (this.f21961d.c() && this.f21962e.c()) {
                    ArrayList arrayList = new ArrayList();
                    u uVar = this.f21961d;
                    arrayList.add(Arrays.copyOf(uVar.f22076d, uVar.f22077e));
                    u uVar2 = this.f21962e;
                    arrayList.add(Arrays.copyOf(uVar2.f22076d, uVar2.f22077e));
                    u uVar3 = this.f21961d;
                    d0.c l10 = ne.d0.l(uVar3.f22076d, 3, uVar3.f22077e);
                    u uVar4 = this.f21962e;
                    d0.b j12 = ne.d0.j(uVar4.f22076d, 3, uVar4.f22077e);
                    this.f21967j.b(new Format.b().U(this.f21966i).g0("video/avc").K(ne.f.a(l10.f40155a, l10.f40156b, l10.f40157c)).n0(l10.f40160f).S(l10.f40161g).c0(l10.f40162h).V(arrayList).G());
                    this.f21969l = true;
                    this.f21968k.f(l10);
                    this.f21968k.e(j12);
                    this.f21961d.d();
                    this.f21962e.d();
                }
            } else if (this.f21961d.c()) {
                u uVar5 = this.f21961d;
                this.f21968k.f(ne.d0.l(uVar5.f22076d, 3, uVar5.f22077e));
                this.f21961d.d();
            } else if (this.f21962e.c()) {
                u uVar6 = this.f21962e;
                this.f21968k.e(ne.d0.j(uVar6.f22076d, 3, uVar6.f22077e));
                this.f21962e.d();
            }
        }
        if (this.f21963f.b(i11)) {
            u uVar7 = this.f21963f;
            this.f21972o.S(this.f21963f.f22076d, ne.d0.q(uVar7.f22076d, uVar7.f22077e));
            this.f21972o.U(4);
            this.f21958a.a(j11, this.f21972o);
        }
        if (this.f21968k.b(j10, i10, this.f21969l, this.f21971n)) {
            this.f21971n = false;
        }
    }

    private void h(byte[] bArr, int i10, int i11) {
        if (!this.f21969l || this.f21968k.c()) {
            this.f21961d.a(bArr, i10, i11);
            this.f21962e.a(bArr, i10, i11);
        }
        this.f21963f.a(bArr, i10, i11);
        this.f21968k.a(bArr, i10, i11);
    }

    private void i(long j10, int i10, long j11) {
        if (!this.f21969l || this.f21968k.c()) {
            this.f21961d.e(i10);
            this.f21962e.e(i10);
        }
        this.f21963f.e(i10);
        this.f21968k.h(j10, i10, j11);
    }

    @Override // dd.m
    public void b(ne.h0 h0Var) {
        int i10;
        a();
        int f10 = h0Var.f();
        int g10 = h0Var.g();
        byte[] e10 = h0Var.e();
        this.f21964g += h0Var.a();
        this.f21967j.f(h0Var, h0Var.a());
        while (true) {
            int c10 = ne.d0.c(e10, f10, g10, this.f21965h);
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
            long j10 = this.f21964g - i12;
            if (i11 < 0) {
                i10 = -i11;
            } else {
                i10 = 0;
            }
            g(j10, i12, i10, this.f21970m);
            i(j10, f11, this.f21970m);
            f10 = c10 + 3;
        }
    }

    @Override // dd.m
    public void c() {
        this.f21964g = 0L;
        this.f21971n = false;
        this.f21970m = -9223372036854775807L;
        ne.d0.a(this.f21965h);
        this.f21961d.d();
        this.f21962e.d();
        this.f21963f.d();
        b bVar = this.f21968k;
        if (bVar != null) {
            bVar.g();
        }
    }

    @Override // dd.m
    public void e(long j10, int i10) {
        boolean z10;
        if (j10 != -9223372036854775807L) {
            this.f21970m = j10;
        }
        boolean z11 = this.f21971n;
        if ((i10 & 2) != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f21971n = z11 | z10;
    }

    @Override // dd.m
    public void f(tc.m mVar, i0.d dVar) {
        dVar.a();
        this.f21966i = dVar.b();
        tc.b0 c10 = mVar.c(dVar.c(), 2);
        this.f21967j = c10;
        this.f21968k = new b(c10, this.f21959b, this.f21960c);
        this.f21958a.b(mVar, dVar);
    }

    @Override // dd.m
    public void d() {
    }
}
