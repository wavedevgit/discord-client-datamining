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
    private final d0 f22669a;

    /* renamed from: b  reason: collision with root package name */
    private String f22670b;

    /* renamed from: c  reason: collision with root package name */
    private uc.b0 f22671c;

    /* renamed from: d  reason: collision with root package name */
    private a f22672d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f22673e;

    /* renamed from: l  reason: collision with root package name */
    private long f22680l;

    /* renamed from: f  reason: collision with root package name */
    private final boolean[] f22674f = new boolean[3];

    /* renamed from: g  reason: collision with root package name */
    private final u f22675g = new u(32, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: h  reason: collision with root package name */
    private final u f22676h = new u(33, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: i  reason: collision with root package name */
    private final u f22677i = new u(34, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: j  reason: collision with root package name */
    private final u f22678j = new u(39, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: k  reason: collision with root package name */
    private final u f22679k = new u(40, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: m  reason: collision with root package name */
    private long f22681m = -9223372036854775807L;

    /* renamed from: n  reason: collision with root package name */
    private final oe.h0 f22682n = new oe.h0();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final uc.b0 f22683a;

        /* renamed from: b  reason: collision with root package name */
        private long f22684b;

        /* renamed from: c  reason: collision with root package name */
        private boolean f22685c;

        /* renamed from: d  reason: collision with root package name */
        private int f22686d;

        /* renamed from: e  reason: collision with root package name */
        private long f22687e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f22688f;

        /* renamed from: g  reason: collision with root package name */
        private boolean f22689g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f22690h;

        /* renamed from: i  reason: collision with root package name */
        private boolean f22691i;

        /* renamed from: j  reason: collision with root package name */
        private boolean f22692j;

        /* renamed from: k  reason: collision with root package name */
        private long f22693k;

        /* renamed from: l  reason: collision with root package name */
        private long f22694l;

        /* renamed from: m  reason: collision with root package name */
        private boolean f22695m;

        public a(uc.b0 b0Var) {
            this.f22683a = b0Var;
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
            long j10 = this.f22694l;
            if (j10 == -9223372036854775807L) {
                return;
            }
            boolean z10 = this.f22695m;
            this.f22683a.a(j10, z10 ? 1 : 0, (int) (this.f22684b - this.f22693k), i10, null);
        }

        public void a(long j10, int i10, boolean z10) {
            if (this.f22692j && this.f22689g) {
                this.f22695m = this.f22685c;
                this.f22692j = false;
            } else if (!this.f22690h && !this.f22689g) {
            } else {
                if (z10 && this.f22691i) {
                    d(i10 + ((int) (j10 - this.f22684b)));
                }
                this.f22693k = this.f22684b;
                this.f22694l = this.f22687e;
                this.f22695m = this.f22685c;
                this.f22691i = true;
            }
        }

        public void e(byte[] bArr, int i10, int i11) {
            boolean z10;
            if (this.f22688f) {
                int i12 = this.f22686d;
                int i13 = (i10 + 2) - i12;
                if (i13 < i11) {
                    if ((bArr[i13] & ByteCompanionObject.MIN_VALUE) != 0) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    this.f22689g = z10;
                    this.f22688f = false;
                    return;
                }
                this.f22686d = i12 + (i11 - i10);
            }
        }

        public void f() {
            this.f22688f = false;
            this.f22689g = false;
            this.f22690h = false;
            this.f22691i = false;
            this.f22692j = false;
        }

        public void g(long j10, int i10, int i11, long j11, boolean z10) {
            boolean z11;
            boolean z12 = false;
            this.f22689g = false;
            this.f22690h = false;
            this.f22687e = j11;
            this.f22686d = 0;
            this.f22684b = j10;
            if (!c(i11)) {
                if (this.f22691i && !this.f22692j) {
                    if (z10) {
                        d(i10);
                    }
                    this.f22691i = false;
                }
                if (b(i11)) {
                    this.f22690h = !this.f22692j;
                    this.f22692j = true;
                }
            }
            if (i11 >= 16 && i11 <= 21) {
                z11 = true;
            } else {
                z11 = false;
            }
            this.f22685c = z11;
            if (z11 || i11 <= 9) {
                z12 = true;
            }
            this.f22688f = z12;
        }
    }

    public q(d0 d0Var) {
        this.f22669a = d0Var;
    }

    private void f() {
        oe.a.i(this.f22671c);
        w0.j(this.f22672d);
    }

    private void g(long j10, int i10, int i11, long j11) {
        this.f22672d.a(j10, i10, this.f22673e);
        if (!this.f22673e) {
            this.f22675g.b(i11);
            this.f22676h.b(i11);
            this.f22677i.b(i11);
            if (this.f22675g.c() && this.f22676h.c() && this.f22677i.c()) {
                this.f22671c.c(i(this.f22670b, this.f22675g, this.f22676h, this.f22677i));
                this.f22673e = true;
            }
        }
        if (this.f22678j.b(i11)) {
            u uVar = this.f22678j;
            this.f22682n.S(this.f22678j.f22738d, oe.d0.q(uVar.f22738d, uVar.f22739e));
            this.f22682n.V(5);
            this.f22669a.a(j11, this.f22682n);
        }
        if (this.f22679k.b(i11)) {
            u uVar2 = this.f22679k;
            this.f22682n.S(this.f22679k.f22738d, oe.d0.q(uVar2.f22738d, uVar2.f22739e));
            this.f22682n.V(5);
            this.f22669a.a(j11, this.f22682n);
        }
    }

    private void h(byte[] bArr, int i10, int i11) {
        this.f22672d.e(bArr, i10, i11);
        if (!this.f22673e) {
            this.f22675g.a(bArr, i10, i11);
            this.f22676h.a(bArr, i10, i11);
            this.f22677i.a(bArr, i10, i11);
        }
        this.f22678j.a(bArr, i10, i11);
        this.f22679k.a(bArr, i10, i11);
    }

    private static Format i(String str, u uVar, u uVar2, u uVar3) {
        int i10 = uVar.f22739e;
        byte[] bArr = new byte[uVar2.f22739e + i10 + uVar3.f22739e];
        System.arraycopy(uVar.f22738d, 0, bArr, 0, i10);
        System.arraycopy(uVar2.f22738d, 0, bArr, uVar.f22739e, uVar2.f22739e);
        System.arraycopy(uVar3.f22738d, 0, bArr, uVar.f22739e + uVar2.f22739e, uVar3.f22739e);
        d0.a h10 = oe.d0.h(uVar2.f22738d, 3, uVar2.f22739e);
        return new Format.b().U(str).g0("video/hevc").K(oe.f.c(h10.f38894a, h10.f38895b, h10.f38896c, h10.f38897d, h10.f38901h, h10.f38902i)).n0(h10.f38904k).S(h10.f38905l).c0(h10.f38906m).V(Collections.singletonList(bArr)).G();
    }

    private void j(long j10, int i10, int i11, long j11) {
        this.f22672d.g(j10, i10, i11, j11, this.f22673e);
        if (!this.f22673e) {
            this.f22675g.e(i11);
            this.f22676h.e(i11);
            this.f22677i.e(i11);
        }
        this.f22678j.e(i11);
        this.f22679k.e(i11);
    }

    @Override // ed.m
    public void a(oe.h0 h0Var) {
        int i10;
        f();
        while (h0Var.a() > 0) {
            int f10 = h0Var.f();
            int g10 = h0Var.g();
            byte[] e10 = h0Var.e();
            this.f22680l += h0Var.a();
            this.f22671c.e(h0Var, h0Var.a());
            while (f10 < g10) {
                int c10 = oe.d0.c(e10, f10, g10, this.f22674f);
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
                long j10 = this.f22680l - i12;
                if (i11 < 0) {
                    i10 = -i11;
                } else {
                    i10 = 0;
                }
                g(j10, i12, i10, this.f22681m);
                j(j10, i12, e11, this.f22681m);
                f10 = c10 + 3;
            }
        }
    }

    @Override // ed.m
    public void b() {
        this.f22680l = 0L;
        this.f22681m = -9223372036854775807L;
        oe.d0.a(this.f22674f);
        this.f22675g.d();
        this.f22676h.d();
        this.f22677i.d();
        this.f22678j.d();
        this.f22679k.d();
        a aVar = this.f22672d;
        if (aVar != null) {
            aVar.f();
        }
    }

    @Override // ed.m
    public void c(uc.m mVar, i0.d dVar) {
        dVar.a();
        this.f22670b = dVar.b();
        uc.b0 c10 = mVar.c(dVar.c(), 2);
        this.f22671c = c10;
        this.f22672d = new a(c10);
        this.f22669a.b(mVar, dVar);
    }

    @Override // ed.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f22681m = j10;
        }
    }

    @Override // ed.m
    public void d() {
    }
}
