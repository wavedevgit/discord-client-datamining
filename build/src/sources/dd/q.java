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
    private final d0 f22007a;

    /* renamed from: b  reason: collision with root package name */
    private String f22008b;

    /* renamed from: c  reason: collision with root package name */
    private tc.b0 f22009c;

    /* renamed from: d  reason: collision with root package name */
    private a f22010d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f22011e;

    /* renamed from: l  reason: collision with root package name */
    private long f22018l;

    /* renamed from: f  reason: collision with root package name */
    private final boolean[] f22012f = new boolean[3];

    /* renamed from: g  reason: collision with root package name */
    private final u f22013g = new u(32, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: h  reason: collision with root package name */
    private final u f22014h = new u(33, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: i  reason: collision with root package name */
    private final u f22015i = new u(34, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: j  reason: collision with root package name */
    private final u f22016j = new u(39, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: k  reason: collision with root package name */
    private final u f22017k = new u(40, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: m  reason: collision with root package name */
    private long f22019m = -9223372036854775807L;

    /* renamed from: n  reason: collision with root package name */
    private final ne.h0 f22020n = new ne.h0();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final tc.b0 f22021a;

        /* renamed from: b  reason: collision with root package name */
        private long f22022b;

        /* renamed from: c  reason: collision with root package name */
        private boolean f22023c;

        /* renamed from: d  reason: collision with root package name */
        private int f22024d;

        /* renamed from: e  reason: collision with root package name */
        private long f22025e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f22026f;

        /* renamed from: g  reason: collision with root package name */
        private boolean f22027g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f22028h;

        /* renamed from: i  reason: collision with root package name */
        private boolean f22029i;

        /* renamed from: j  reason: collision with root package name */
        private boolean f22030j;

        /* renamed from: k  reason: collision with root package name */
        private long f22031k;

        /* renamed from: l  reason: collision with root package name */
        private long f22032l;

        /* renamed from: m  reason: collision with root package name */
        private boolean f22033m;

        public a(tc.b0 b0Var) {
            this.f22021a = b0Var;
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
            long j10 = this.f22032l;
            if (j10 == -9223372036854775807L) {
                return;
            }
            boolean z10 = this.f22033m;
            this.f22021a.d(j10, z10 ? 1 : 0, (int) (this.f22022b - this.f22031k), i10, null);
        }

        public void a(long j10, int i10, boolean z10) {
            if (this.f22030j && this.f22027g) {
                this.f22033m = this.f22023c;
                this.f22030j = false;
            } else if (!this.f22028h && !this.f22027g) {
            } else {
                if (z10 && this.f22029i) {
                    d(i10 + ((int) (j10 - this.f22022b)));
                }
                this.f22031k = this.f22022b;
                this.f22032l = this.f22025e;
                this.f22033m = this.f22023c;
                this.f22029i = true;
            }
        }

        public void e(byte[] bArr, int i10, int i11) {
            boolean z10;
            if (this.f22026f) {
                int i12 = this.f22024d;
                int i13 = (i10 + 2) - i12;
                if (i13 < i11) {
                    if ((bArr[i13] & ByteCompanionObject.MIN_VALUE) != 0) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    this.f22027g = z10;
                    this.f22026f = false;
                    return;
                }
                this.f22024d = i12 + (i11 - i10);
            }
        }

        public void f() {
            this.f22026f = false;
            this.f22027g = false;
            this.f22028h = false;
            this.f22029i = false;
            this.f22030j = false;
        }

        public void g(long j10, int i10, int i11, long j11, boolean z10) {
            boolean z11;
            boolean z12 = false;
            this.f22027g = false;
            this.f22028h = false;
            this.f22025e = j11;
            this.f22024d = 0;
            this.f22022b = j10;
            if (!c(i11)) {
                if (this.f22029i && !this.f22030j) {
                    if (z10) {
                        d(i10);
                    }
                    this.f22029i = false;
                }
                if (b(i11)) {
                    this.f22028h = !this.f22030j;
                    this.f22030j = true;
                }
            }
            if (i11 >= 16 && i11 <= 21) {
                z11 = true;
            } else {
                z11 = false;
            }
            this.f22023c = z11;
            if (z11 || i11 <= 9) {
                z12 = true;
            }
            this.f22026f = z12;
        }
    }

    public q(d0 d0Var) {
        this.f22007a = d0Var;
    }

    private void a() {
        ne.a.i(this.f22009c);
        w0.j(this.f22010d);
    }

    private void g(long j10, int i10, int i11, long j11) {
        this.f22010d.a(j10, i10, this.f22011e);
        if (!this.f22011e) {
            this.f22013g.b(i11);
            this.f22014h.b(i11);
            this.f22015i.b(i11);
            if (this.f22013g.c() && this.f22014h.c() && this.f22015i.c()) {
                this.f22009c.b(i(this.f22008b, this.f22013g, this.f22014h, this.f22015i));
                this.f22011e = true;
            }
        }
        if (this.f22016j.b(i11)) {
            u uVar = this.f22016j;
            this.f22020n.S(this.f22016j.f22076d, ne.d0.q(uVar.f22076d, uVar.f22077e));
            this.f22020n.V(5);
            this.f22007a.a(j11, this.f22020n);
        }
        if (this.f22017k.b(i11)) {
            u uVar2 = this.f22017k;
            this.f22020n.S(this.f22017k.f22076d, ne.d0.q(uVar2.f22076d, uVar2.f22077e));
            this.f22020n.V(5);
            this.f22007a.a(j11, this.f22020n);
        }
    }

    private void h(byte[] bArr, int i10, int i11) {
        this.f22010d.e(bArr, i10, i11);
        if (!this.f22011e) {
            this.f22013g.a(bArr, i10, i11);
            this.f22014h.a(bArr, i10, i11);
            this.f22015i.a(bArr, i10, i11);
        }
        this.f22016j.a(bArr, i10, i11);
        this.f22017k.a(bArr, i10, i11);
    }

    private static Format i(String str, u uVar, u uVar2, u uVar3) {
        int i10 = uVar.f22077e;
        byte[] bArr = new byte[uVar2.f22077e + i10 + uVar3.f22077e];
        System.arraycopy(uVar.f22076d, 0, bArr, 0, i10);
        System.arraycopy(uVar2.f22076d, 0, bArr, uVar.f22077e, uVar2.f22077e);
        System.arraycopy(uVar3.f22076d, 0, bArr, uVar.f22077e + uVar2.f22077e, uVar3.f22077e);
        d0.a h10 = ne.d0.h(uVar2.f22076d, 3, uVar2.f22077e);
        return new Format.b().U(str).g0("video/hevc").K(ne.f.c(h10.f40136a, h10.f40137b, h10.f40138c, h10.f40139d, h10.f40143h, h10.f40144i)).n0(h10.f40146k).S(h10.f40147l).c0(h10.f40148m).V(Collections.singletonList(bArr)).G();
    }

    private void j(long j10, int i10, int i11, long j11) {
        this.f22010d.g(j10, i10, i11, j11, this.f22011e);
        if (!this.f22011e) {
            this.f22013g.e(i11);
            this.f22014h.e(i11);
            this.f22015i.e(i11);
        }
        this.f22016j.e(i11);
        this.f22017k.e(i11);
    }

    @Override // dd.m
    public void b(ne.h0 h0Var) {
        int i10;
        a();
        while (h0Var.a() > 0) {
            int f10 = h0Var.f();
            int g10 = h0Var.g();
            byte[] e10 = h0Var.e();
            this.f22018l += h0Var.a();
            this.f22009c.f(h0Var, h0Var.a());
            while (f10 < g10) {
                int c10 = ne.d0.c(e10, f10, g10, this.f22012f);
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
                long j10 = this.f22018l - i12;
                if (i11 < 0) {
                    i10 = -i11;
                } else {
                    i10 = 0;
                }
                g(j10, i12, i10, this.f22019m);
                j(j10, i12, e11, this.f22019m);
                f10 = c10 + 3;
            }
        }
    }

    @Override // dd.m
    public void c() {
        this.f22018l = 0L;
        this.f22019m = -9223372036854775807L;
        ne.d0.a(this.f22012f);
        this.f22013g.d();
        this.f22014h.d();
        this.f22015i.d();
        this.f22016j.d();
        this.f22017k.d();
        a aVar = this.f22010d;
        if (aVar != null) {
            aVar.f();
        }
    }

    @Override // dd.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f22019m = j10;
        }
    }

    @Override // dd.m
    public void f(tc.m mVar, i0.d dVar) {
        dVar.a();
        this.f22008b = dVar.b();
        tc.b0 c10 = mVar.c(dVar.c(), 2);
        this.f22009c = c10;
        this.f22010d = new a(c10);
        this.f22007a.b(mVar, dVar);
    }

    @Override // dd.m
    public void d() {
    }
}
