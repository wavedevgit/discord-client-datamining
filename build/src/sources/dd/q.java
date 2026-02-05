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
    private final d0 f20658a;

    /* renamed from: b  reason: collision with root package name */
    private String f20659b;

    /* renamed from: c  reason: collision with root package name */
    private tc.b0 f20660c;

    /* renamed from: d  reason: collision with root package name */
    private a f20661d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f20662e;

    /* renamed from: l  reason: collision with root package name */
    private long f20669l;

    /* renamed from: f  reason: collision with root package name */
    private final boolean[] f20663f = new boolean[3];

    /* renamed from: g  reason: collision with root package name */
    private final u f20664g = new u(32, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: h  reason: collision with root package name */
    private final u f20665h = new u(33, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: i  reason: collision with root package name */
    private final u f20666i = new u(34, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: j  reason: collision with root package name */
    private final u f20667j = new u(39, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: k  reason: collision with root package name */
    private final u f20668k = new u(40, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: m  reason: collision with root package name */
    private long f20670m = -9223372036854775807L;

    /* renamed from: n  reason: collision with root package name */
    private final ne.h0 f20671n = new ne.h0();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final tc.b0 f20672a;

        /* renamed from: b  reason: collision with root package name */
        private long f20673b;

        /* renamed from: c  reason: collision with root package name */
        private boolean f20674c;

        /* renamed from: d  reason: collision with root package name */
        private int f20675d;

        /* renamed from: e  reason: collision with root package name */
        private long f20676e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f20677f;

        /* renamed from: g  reason: collision with root package name */
        private boolean f20678g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f20679h;

        /* renamed from: i  reason: collision with root package name */
        private boolean f20680i;

        /* renamed from: j  reason: collision with root package name */
        private boolean f20681j;

        /* renamed from: k  reason: collision with root package name */
        private long f20682k;

        /* renamed from: l  reason: collision with root package name */
        private long f20683l;

        /* renamed from: m  reason: collision with root package name */
        private boolean f20684m;

        public a(tc.b0 b0Var) {
            this.f20672a = b0Var;
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
            long j10 = this.f20683l;
            if (j10 == -9223372036854775807L) {
                return;
            }
            boolean z10 = this.f20684m;
            this.f20672a.d(j10, z10 ? 1 : 0, (int) (this.f20673b - this.f20682k), i10, null);
        }

        public void a(long j10, int i10, boolean z10) {
            if (this.f20681j && this.f20678g) {
                this.f20684m = this.f20674c;
                this.f20681j = false;
            } else if (!this.f20679h && !this.f20678g) {
            } else {
                if (z10 && this.f20680i) {
                    d(i10 + ((int) (j10 - this.f20673b)));
                }
                this.f20682k = this.f20673b;
                this.f20683l = this.f20676e;
                this.f20684m = this.f20674c;
                this.f20680i = true;
            }
        }

        public void e(byte[] bArr, int i10, int i11) {
            boolean z10;
            if (this.f20677f) {
                int i12 = this.f20675d;
                int i13 = (i10 + 2) - i12;
                if (i13 < i11) {
                    if ((bArr[i13] & ByteCompanionObject.MIN_VALUE) != 0) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    this.f20678g = z10;
                    this.f20677f = false;
                    return;
                }
                this.f20675d = i12 + (i11 - i10);
            }
        }

        public void f() {
            this.f20677f = false;
            this.f20678g = false;
            this.f20679h = false;
            this.f20680i = false;
            this.f20681j = false;
        }

        public void g(long j10, int i10, int i11, long j11, boolean z10) {
            boolean z11;
            boolean z12 = false;
            this.f20678g = false;
            this.f20679h = false;
            this.f20676e = j11;
            this.f20675d = 0;
            this.f20673b = j10;
            if (!c(i11)) {
                if (this.f20680i && !this.f20681j) {
                    if (z10) {
                        d(i10);
                    }
                    this.f20680i = false;
                }
                if (b(i11)) {
                    this.f20679h = !this.f20681j;
                    this.f20681j = true;
                }
            }
            if (i11 >= 16 && i11 <= 21) {
                z11 = true;
            } else {
                z11 = false;
            }
            this.f20674c = z11;
            if (z11 || i11 <= 9) {
                z12 = true;
            }
            this.f20677f = z12;
        }
    }

    public q(d0 d0Var) {
        this.f20658a = d0Var;
    }

    private void a() {
        ne.a.i(this.f20660c);
        w0.j(this.f20661d);
    }

    private void g(long j10, int i10, int i11, long j11) {
        this.f20661d.a(j10, i10, this.f20662e);
        if (!this.f20662e) {
            this.f20664g.b(i11);
            this.f20665h.b(i11);
            this.f20666i.b(i11);
            if (this.f20664g.c() && this.f20665h.c() && this.f20666i.c()) {
                this.f20660c.b(i(this.f20659b, this.f20664g, this.f20665h, this.f20666i));
                this.f20662e = true;
            }
        }
        if (this.f20667j.b(i11)) {
            u uVar = this.f20667j;
            this.f20671n.S(this.f20667j.f20727d, ne.d0.q(uVar.f20727d, uVar.f20728e));
            this.f20671n.V(5);
            this.f20658a.a(j11, this.f20671n);
        }
        if (this.f20668k.b(i11)) {
            u uVar2 = this.f20668k;
            this.f20671n.S(this.f20668k.f20727d, ne.d0.q(uVar2.f20727d, uVar2.f20728e));
            this.f20671n.V(5);
            this.f20658a.a(j11, this.f20671n);
        }
    }

    private void h(byte[] bArr, int i10, int i11) {
        this.f20661d.e(bArr, i10, i11);
        if (!this.f20662e) {
            this.f20664g.a(bArr, i10, i11);
            this.f20665h.a(bArr, i10, i11);
            this.f20666i.a(bArr, i10, i11);
        }
        this.f20667j.a(bArr, i10, i11);
        this.f20668k.a(bArr, i10, i11);
    }

    private static Format i(String str, u uVar, u uVar2, u uVar3) {
        int i10 = uVar.f20728e;
        byte[] bArr = new byte[uVar2.f20728e + i10 + uVar3.f20728e];
        System.arraycopy(uVar.f20727d, 0, bArr, 0, i10);
        System.arraycopy(uVar2.f20727d, 0, bArr, uVar.f20728e, uVar2.f20728e);
        System.arraycopy(uVar3.f20727d, 0, bArr, uVar.f20728e + uVar2.f20728e, uVar3.f20728e);
        d0.a h10 = ne.d0.h(uVar2.f20727d, 3, uVar2.f20728e);
        return new Format.b().U(str).g0("video/hevc").K(ne.f.c(h10.f39514a, h10.f39515b, h10.f39516c, h10.f39517d, h10.f39521h, h10.f39522i)).n0(h10.f39524k).S(h10.f39525l).c0(h10.f39526m).V(Collections.singletonList(bArr)).G();
    }

    private void j(long j10, int i10, int i11, long j11) {
        this.f20661d.g(j10, i10, i11, j11, this.f20662e);
        if (!this.f20662e) {
            this.f20664g.e(i11);
            this.f20665h.e(i11);
            this.f20666i.e(i11);
        }
        this.f20667j.e(i11);
        this.f20668k.e(i11);
    }

    @Override // dd.m
    public void b(ne.h0 h0Var) {
        int i10;
        a();
        while (h0Var.a() > 0) {
            int f10 = h0Var.f();
            int g10 = h0Var.g();
            byte[] e10 = h0Var.e();
            this.f20669l += h0Var.a();
            this.f20660c.f(h0Var, h0Var.a());
            while (f10 < g10) {
                int c10 = ne.d0.c(e10, f10, g10, this.f20663f);
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
                long j10 = this.f20669l - i12;
                if (i11 < 0) {
                    i10 = -i11;
                } else {
                    i10 = 0;
                }
                g(j10, i12, i10, this.f20670m);
                j(j10, i12, e11, this.f20670m);
                f10 = c10 + 3;
            }
        }
    }

    @Override // dd.m
    public void c() {
        this.f20669l = 0L;
        this.f20670m = -9223372036854775807L;
        ne.d0.a(this.f20663f);
        this.f20664g.d();
        this.f20665h.d();
        this.f20666i.d();
        this.f20667j.d();
        this.f20668k.d();
        a aVar = this.f20661d;
        if (aVar != null) {
            aVar.f();
        }
    }

    @Override // dd.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f20670m = j10;
        }
    }

    @Override // dd.m
    public void f(tc.m mVar, i0.d dVar) {
        dVar.a();
        this.f20659b = dVar.b();
        tc.b0 c10 = mVar.c(dVar.c(), 2);
        this.f20660c = c10;
        this.f20661d = new a(c10);
        this.f20658a.b(mVar, dVar);
    }

    @Override // dd.m
    public void d() {
    }
}
