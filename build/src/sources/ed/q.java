package ed;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.android.exoplayer2.Format;
import ed.i0;
import java.util.Collections;
import kotlin.jvm.internal.ByteCompanionObject;
import oe.d0;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class q implements m {

    /* renamed from: a  reason: collision with root package name */
    private final d0 f22670a;

    /* renamed from: b  reason: collision with root package name */
    private String f22671b;

    /* renamed from: c  reason: collision with root package name */
    private uc.b0 f22672c;

    /* renamed from: d  reason: collision with root package name */
    private a f22673d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f22674e;

    /* renamed from: l  reason: collision with root package name */
    private long f22681l;

    /* renamed from: f  reason: collision with root package name */
    private final boolean[] f22675f = new boolean[3];

    /* renamed from: g  reason: collision with root package name */
    private final u f22676g = new u(32, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: h  reason: collision with root package name */
    private final u f22677h = new u(33, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: i  reason: collision with root package name */
    private final u f22678i = new u(34, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: j  reason: collision with root package name */
    private final u f22679j = new u(39, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: k  reason: collision with root package name */
    private final u f22680k = new u(40, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: m  reason: collision with root package name */
    private long f22682m = -9223372036854775807L;

    /* renamed from: n  reason: collision with root package name */
    private final oe.h0 f22683n = new oe.h0();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final uc.b0 f22684a;

        /* renamed from: b  reason: collision with root package name */
        private long f22685b;

        /* renamed from: c  reason: collision with root package name */
        private boolean f22686c;

        /* renamed from: d  reason: collision with root package name */
        private int f22687d;

        /* renamed from: e  reason: collision with root package name */
        private long f22688e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f22689f;

        /* renamed from: g  reason: collision with root package name */
        private boolean f22690g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f22691h;

        /* renamed from: i  reason: collision with root package name */
        private boolean f22692i;

        /* renamed from: j  reason: collision with root package name */
        private boolean f22693j;

        /* renamed from: k  reason: collision with root package name */
        private long f22694k;

        /* renamed from: l  reason: collision with root package name */
        private long f22695l;

        /* renamed from: m  reason: collision with root package name */
        private boolean f22696m;

        public a(uc.b0 b0Var) {
            this.f22684a = b0Var;
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
            long j10 = this.f22695l;
            if (j10 == -9223372036854775807L) {
                return;
            }
            boolean z10 = this.f22696m;
            this.f22684a.a(j10, z10 ? 1 : 0, (int) (this.f22685b - this.f22694k), i10, null);
        }

        public void a(long j10, int i10, boolean z10) {
            if (this.f22693j && this.f22690g) {
                this.f22696m = this.f22686c;
                this.f22693j = false;
            } else if (!this.f22691h && !this.f22690g) {
            } else {
                if (z10 && this.f22692i) {
                    d(i10 + ((int) (j10 - this.f22685b)));
                }
                this.f22694k = this.f22685b;
                this.f22695l = this.f22688e;
                this.f22696m = this.f22686c;
                this.f22692i = true;
            }
        }

        public void e(byte[] bArr, int i10, int i11) {
            boolean z10;
            if (this.f22689f) {
                int i12 = this.f22687d;
                int i13 = (i10 + 2) - i12;
                if (i13 < i11) {
                    if ((bArr[i13] & ByteCompanionObject.MIN_VALUE) != 0) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    this.f22690g = z10;
                    this.f22689f = false;
                    return;
                }
                this.f22687d = i12 + (i11 - i10);
            }
        }

        public void f() {
            this.f22689f = false;
            this.f22690g = false;
            this.f22691h = false;
            this.f22692i = false;
            this.f22693j = false;
        }

        public void g(long j10, int i10, int i11, long j11, boolean z10) {
            boolean z11;
            boolean z12 = false;
            this.f22690g = false;
            this.f22691h = false;
            this.f22688e = j11;
            this.f22687d = 0;
            this.f22685b = j10;
            if (!c(i11)) {
                if (this.f22692i && !this.f22693j) {
                    if (z10) {
                        d(i10);
                    }
                    this.f22692i = false;
                }
                if (b(i11)) {
                    this.f22691h = !this.f22693j;
                    this.f22693j = true;
                }
            }
            if (i11 >= 16 && i11 <= 21) {
                z11 = true;
            } else {
                z11 = false;
            }
            this.f22686c = z11;
            if (z11 || i11 <= 9) {
                z12 = true;
            }
            this.f22689f = z12;
        }
    }

    public q(d0 d0Var) {
        this.f22670a = d0Var;
    }

    private void f() {
        oe.a.i(this.f22672c);
        w0.j(this.f22673d);
    }

    private void g(long j10, int i10, int i11, long j11) {
        this.f22673d.a(j10, i10, this.f22674e);
        if (!this.f22674e) {
            this.f22676g.b(i11);
            this.f22677h.b(i11);
            this.f22678i.b(i11);
            if (this.f22676g.c() && this.f22677h.c() && this.f22678i.c()) {
                this.f22672c.c(i(this.f22671b, this.f22676g, this.f22677h, this.f22678i));
                this.f22674e = true;
            }
        }
        if (this.f22679j.b(i11)) {
            u uVar = this.f22679j;
            this.f22683n.S(this.f22679j.f22739d, oe.d0.q(uVar.f22739d, uVar.f22740e));
            this.f22683n.V(5);
            this.f22670a.a(j11, this.f22683n);
        }
        if (this.f22680k.b(i11)) {
            u uVar2 = this.f22680k;
            this.f22683n.S(this.f22680k.f22739d, oe.d0.q(uVar2.f22739d, uVar2.f22740e));
            this.f22683n.V(5);
            this.f22670a.a(j11, this.f22683n);
        }
    }

    private void h(byte[] bArr, int i10, int i11) {
        this.f22673d.e(bArr, i10, i11);
        if (!this.f22674e) {
            this.f22676g.a(bArr, i10, i11);
            this.f22677h.a(bArr, i10, i11);
            this.f22678i.a(bArr, i10, i11);
        }
        this.f22679j.a(bArr, i10, i11);
        this.f22680k.a(bArr, i10, i11);
    }

    private static Format i(String str, u uVar, u uVar2, u uVar3) {
        int i10 = uVar.f22740e;
        byte[] bArr = new byte[uVar2.f22740e + i10 + uVar3.f22740e];
        System.arraycopy(uVar.f22739d, 0, bArr, 0, i10);
        System.arraycopy(uVar2.f22739d, 0, bArr, uVar.f22740e, uVar2.f22740e);
        System.arraycopy(uVar3.f22739d, 0, bArr, uVar.f22740e + uVar2.f22740e, uVar3.f22740e);
        d0.a h10 = oe.d0.h(uVar2.f22739d, 3, uVar2.f22740e);
        return new Format.b().U(str).g0("video/hevc").K(oe.f.c(h10.f38895a, h10.f38896b, h10.f38897c, h10.f38898d, h10.f38902h, h10.f38903i)).n0(h10.f38905k).S(h10.f38906l).c0(h10.f38907m).V(Collections.singletonList(bArr)).G();
    }

    private void j(long j10, int i10, int i11, long j11) {
        this.f22673d.g(j10, i10, i11, j11, this.f22674e);
        if (!this.f22674e) {
            this.f22676g.e(i11);
            this.f22677h.e(i11);
            this.f22678i.e(i11);
        }
        this.f22679j.e(i11);
        this.f22680k.e(i11);
    }

    @Override // ed.m
    public void a(oe.h0 h0Var) {
        int i10;
        f();
        while (h0Var.a() > 0) {
            int f10 = h0Var.f();
            int g10 = h0Var.g();
            byte[] e10 = h0Var.e();
            this.f22681l += h0Var.a();
            this.f22672c.e(h0Var, h0Var.a());
            while (f10 < g10) {
                int c10 = oe.d0.c(e10, f10, g10, this.f22675f);
                if (c10 == g10) {
                    h(e10, f10, g10);
                    return;
                }
                int e11 = oe.d0.e(e10, c10);
                int i11 = c10 - f10;
                if (i11 > 0) {
                    h(e10, f10, c10);
                }
                int i12 = g10 - c10;
                long j10 = this.f22681l - i12;
                if (i11 < 0) {
                    i10 = -i11;
                } else {
                    i10 = 0;
                }
                g(j10, i12, i10, this.f22682m);
                j(j10, i12, e11, this.f22682m);
                f10 = c10 + 3;
            }
        }
    }

    @Override // ed.m
    public void b() {
        this.f22681l = 0L;
        this.f22682m = -9223372036854775807L;
        oe.d0.a(this.f22675f);
        this.f22676g.d();
        this.f22677h.d();
        this.f22678i.d();
        this.f22679j.d();
        this.f22680k.d();
        a aVar = this.f22673d;
        if (aVar != null) {
            aVar.f();
        }
    }

    @Override // ed.m
    public void c(uc.m mVar, i0.d dVar) {
        dVar.a();
        this.f22671b = dVar.b();
        uc.b0 c10 = mVar.c(dVar.c(), 2);
        this.f22672c = c10;
        this.f22673d = new a(c10);
        this.f22670a.b(mVar, dVar);
    }

    @Override // ed.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f22682m = j10;
        }
    }

    @Override // ed.m
    public void d() {
    }
}
