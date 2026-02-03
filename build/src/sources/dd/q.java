package dd;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.android.exoplayer2.Format;
import dd.i0;
import java.util.Collections;
import kotlin.jvm.internal.ByteCompanionObject;
import ne.d0;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class q implements m {

    /* renamed from: a  reason: collision with root package name */
    private final d0 f20442a;

    /* renamed from: b  reason: collision with root package name */
    private String f20443b;

    /* renamed from: c  reason: collision with root package name */
    private tc.b0 f20444c;

    /* renamed from: d  reason: collision with root package name */
    private a f20445d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f20446e;

    /* renamed from: l  reason: collision with root package name */
    private long f20453l;

    /* renamed from: f  reason: collision with root package name */
    private final boolean[] f20447f = new boolean[3];

    /* renamed from: g  reason: collision with root package name */
    private final u f20448g = new u(32, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: h  reason: collision with root package name */
    private final u f20449h = new u(33, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: i  reason: collision with root package name */
    private final u f20450i = new u(34, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: j  reason: collision with root package name */
    private final u f20451j = new u(39, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: k  reason: collision with root package name */
    private final u f20452k = new u(40, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: m  reason: collision with root package name */
    private long f20454m = -9223372036854775807L;

    /* renamed from: n  reason: collision with root package name */
    private final ne.h0 f20455n = new ne.h0();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final tc.b0 f20456a;

        /* renamed from: b  reason: collision with root package name */
        private long f20457b;

        /* renamed from: c  reason: collision with root package name */
        private boolean f20458c;

        /* renamed from: d  reason: collision with root package name */
        private int f20459d;

        /* renamed from: e  reason: collision with root package name */
        private long f20460e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f20461f;

        /* renamed from: g  reason: collision with root package name */
        private boolean f20462g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f20463h;

        /* renamed from: i  reason: collision with root package name */
        private boolean f20464i;

        /* renamed from: j  reason: collision with root package name */
        private boolean f20465j;

        /* renamed from: k  reason: collision with root package name */
        private long f20466k;

        /* renamed from: l  reason: collision with root package name */
        private long f20467l;

        /* renamed from: m  reason: collision with root package name */
        private boolean f20468m;

        public a(tc.b0 b0Var) {
            this.f20456a = b0Var;
        }

        private static boolean b(int i10) {
            if ((32 <= i10 && i10 <= 35) || i10 == 39) {
                return true;
            }
            return false;
        }

        private static boolean c(int i10) {
            if (i10 >= 32 && i10 != 40) {
                return false;
            }
            return true;
        }

        private void d(int i10) {
            long j10 = this.f20467l;
            if (j10 == -9223372036854775807L) {
                return;
            }
            boolean z10 = this.f20468m;
            this.f20456a.d(j10, z10 ? 1 : 0, (int) (this.f20457b - this.f20466k), i10, null);
        }

        public void a(long j10, int i10, boolean z10) {
            if (this.f20465j && this.f20462g) {
                this.f20468m = this.f20458c;
                this.f20465j = false;
            } else if (!this.f20463h && !this.f20462g) {
            } else {
                if (z10 && this.f20464i) {
                    d(i10 + ((int) (j10 - this.f20457b)));
                }
                this.f20466k = this.f20457b;
                this.f20467l = this.f20460e;
                this.f20468m = this.f20458c;
                this.f20464i = true;
            }
        }

        public void e(byte[] bArr, int i10, int i11) {
            boolean z10;
            if (this.f20461f) {
                int i12 = this.f20459d;
                int i13 = (i10 + 2) - i12;
                if (i13 < i11) {
                    if ((bArr[i13] & ByteCompanionObject.MIN_VALUE) != 0) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    this.f20462g = z10;
                    this.f20461f = false;
                    return;
                }
                this.f20459d = i12 + (i11 - i10);
            }
        }

        public void f() {
            this.f20461f = false;
            this.f20462g = false;
            this.f20463h = false;
            this.f20464i = false;
            this.f20465j = false;
        }

        public void g(long j10, int i10, int i11, long j11, boolean z10) {
            boolean z11;
            boolean z12 = false;
            this.f20462g = false;
            this.f20463h = false;
            this.f20460e = j11;
            this.f20459d = 0;
            this.f20457b = j10;
            if (!c(i11)) {
                if (this.f20464i && !this.f20465j) {
                    if (z10) {
                        d(i10);
                    }
                    this.f20464i = false;
                }
                if (b(i11)) {
                    this.f20463h = !this.f20465j;
                    this.f20465j = true;
                }
            }
            if (i11 >= 16 && i11 <= 21) {
                z11 = true;
            } else {
                z11 = false;
            }
            this.f20458c = z11;
            if (z11 || i11 <= 9) {
                z12 = true;
            }
            this.f20461f = z12;
        }
    }

    public q(d0 d0Var) {
        this.f20442a = d0Var;
    }

    private void a() {
        ne.a.i(this.f20444c);
        w0.j(this.f20445d);
    }

    private void g(long j10, int i10, int i11, long j11) {
        this.f20445d.a(j10, i10, this.f20446e);
        if (!this.f20446e) {
            this.f20448g.b(i11);
            this.f20449h.b(i11);
            this.f20450i.b(i11);
            if (this.f20448g.c() && this.f20449h.c() && this.f20450i.c()) {
                this.f20444c.b(i(this.f20443b, this.f20448g, this.f20449h, this.f20450i));
                this.f20446e = true;
            }
        }
        if (this.f20451j.b(i11)) {
            u uVar = this.f20451j;
            this.f20455n.S(this.f20451j.f20511d, ne.d0.q(uVar.f20511d, uVar.f20512e));
            this.f20455n.V(5);
            this.f20442a.a(j11, this.f20455n);
        }
        if (this.f20452k.b(i11)) {
            u uVar2 = this.f20452k;
            this.f20455n.S(this.f20452k.f20511d, ne.d0.q(uVar2.f20511d, uVar2.f20512e));
            this.f20455n.V(5);
            this.f20442a.a(j11, this.f20455n);
        }
    }

    private void h(byte[] bArr, int i10, int i11) {
        this.f20445d.e(bArr, i10, i11);
        if (!this.f20446e) {
            this.f20448g.a(bArr, i10, i11);
            this.f20449h.a(bArr, i10, i11);
            this.f20450i.a(bArr, i10, i11);
        }
        this.f20451j.a(bArr, i10, i11);
        this.f20452k.a(bArr, i10, i11);
    }

    private static Format i(String str, u uVar, u uVar2, u uVar3) {
        int i10 = uVar.f20512e;
        byte[] bArr = new byte[uVar2.f20512e + i10 + uVar3.f20512e];
        System.arraycopy(uVar.f20511d, 0, bArr, 0, i10);
        System.arraycopy(uVar2.f20511d, 0, bArr, uVar.f20512e, uVar2.f20512e);
        System.arraycopy(uVar3.f20511d, 0, bArr, uVar.f20512e + uVar2.f20512e, uVar3.f20512e);
        d0.a h10 = ne.d0.h(uVar2.f20511d, 3, uVar2.f20512e);
        return new Format.b().U(str).g0("video/hevc").K(ne.f.c(h10.f40054a, h10.f40055b, h10.f40056c, h10.f40057d, h10.f40061h, h10.f40062i)).n0(h10.f40064k).S(h10.f40065l).c0(h10.f40066m).V(Collections.singletonList(bArr)).G();
    }

    private void j(long j10, int i10, int i11, long j11) {
        this.f20445d.g(j10, i10, i11, j11, this.f20446e);
        if (!this.f20446e) {
            this.f20448g.e(i11);
            this.f20449h.e(i11);
            this.f20450i.e(i11);
        }
        this.f20451j.e(i11);
        this.f20452k.e(i11);
    }

    @Override // dd.m
    public void b(ne.h0 h0Var) {
        int i10;
        a();
        while (h0Var.a() > 0) {
            int f10 = h0Var.f();
            int g10 = h0Var.g();
            byte[] e10 = h0Var.e();
            this.f20453l += h0Var.a();
            this.f20444c.f(h0Var, h0Var.a());
            while (f10 < g10) {
                int c10 = ne.d0.c(e10, f10, g10, this.f20447f);
                if (c10 == g10) {
                    h(e10, f10, g10);
                    return;
                }
                int e11 = ne.d0.e(e10, c10);
                int i11 = c10 - f10;
                if (i11 > 0) {
                    h(e10, f10, c10);
                }
                int i12 = g10 - c10;
                long j10 = this.f20453l - i12;
                if (i11 < 0) {
                    i10 = -i11;
                } else {
                    i10 = 0;
                }
                g(j10, i12, i10, this.f20454m);
                j(j10, i12, e11, this.f20454m);
                f10 = c10 + 3;
            }
        }
    }

    @Override // dd.m
    public void c() {
        this.f20453l = 0L;
        this.f20454m = -9223372036854775807L;
        ne.d0.a(this.f20447f);
        this.f20448g.d();
        this.f20449h.d();
        this.f20450i.d();
        this.f20451j.d();
        this.f20452k.d();
        a aVar = this.f20445d;
        if (aVar != null) {
            aVar.f();
        }
    }

    @Override // dd.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f20454m = j10;
        }
    }

    @Override // dd.m
    public void f(tc.m mVar, i0.d dVar) {
        dVar.a();
        this.f20443b = dVar.b();
        tc.b0 c10 = mVar.c(dVar.c(), 2);
        this.f20444c = c10;
        this.f20445d = new a(c10);
        this.f20442a.b(mVar, dVar);
    }

    @Override // dd.m
    public void d() {
    }
}
