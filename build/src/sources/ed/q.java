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
    private final d0 f21502a;

    /* renamed from: b  reason: collision with root package name */
    private String f21503b;

    /* renamed from: c  reason: collision with root package name */
    private uc.b0 f21504c;

    /* renamed from: d  reason: collision with root package name */
    private a f21505d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f21506e;

    /* renamed from: l  reason: collision with root package name */
    private long f21513l;

    /* renamed from: f  reason: collision with root package name */
    private final boolean[] f21507f = new boolean[3];

    /* renamed from: g  reason: collision with root package name */
    private final u f21508g = new u(32, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: h  reason: collision with root package name */
    private final u f21509h = new u(33, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: i  reason: collision with root package name */
    private final u f21510i = new u(34, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: j  reason: collision with root package name */
    private final u f21511j = new u(39, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: k  reason: collision with root package name */
    private final u f21512k = new u(40, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: m  reason: collision with root package name */
    private long f21514m = -9223372036854775807L;

    /* renamed from: n  reason: collision with root package name */
    private final oe.h0 f21515n = new oe.h0();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final uc.b0 f21516a;

        /* renamed from: b  reason: collision with root package name */
        private long f21517b;

        /* renamed from: c  reason: collision with root package name */
        private boolean f21518c;

        /* renamed from: d  reason: collision with root package name */
        private int f21519d;

        /* renamed from: e  reason: collision with root package name */
        private long f21520e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f21521f;

        /* renamed from: g  reason: collision with root package name */
        private boolean f21522g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f21523h;

        /* renamed from: i  reason: collision with root package name */
        private boolean f21524i;

        /* renamed from: j  reason: collision with root package name */
        private boolean f21525j;

        /* renamed from: k  reason: collision with root package name */
        private long f21526k;

        /* renamed from: l  reason: collision with root package name */
        private long f21527l;

        /* renamed from: m  reason: collision with root package name */
        private boolean f21528m;

        public a(uc.b0 b0Var) {
            this.f21516a = b0Var;
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
            long j10 = this.f21527l;
            if (j10 == -9223372036854775807L) {
                return;
            }
            boolean z10 = this.f21528m;
            this.f21516a.a(j10, z10 ? 1 : 0, (int) (this.f21517b - this.f21526k), i10, null);
        }

        public void a(long j10, int i10, boolean z10) {
            if (this.f21525j && this.f21522g) {
                this.f21528m = this.f21518c;
                this.f21525j = false;
            } else if (!this.f21523h && !this.f21522g) {
            } else {
                if (z10 && this.f21524i) {
                    d(i10 + ((int) (j10 - this.f21517b)));
                }
                this.f21526k = this.f21517b;
                this.f21527l = this.f21520e;
                this.f21528m = this.f21518c;
                this.f21524i = true;
            }
        }

        public void e(byte[] bArr, int i10, int i11) {
            boolean z10;
            if (this.f21521f) {
                int i12 = this.f21519d;
                int i13 = (i10 + 2) - i12;
                if (i13 < i11) {
                    if ((bArr[i13] & ByteCompanionObject.MIN_VALUE) != 0) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    this.f21522g = z10;
                    this.f21521f = false;
                    return;
                }
                this.f21519d = i12 + (i11 - i10);
            }
        }

        public void f() {
            this.f21521f = false;
            this.f21522g = false;
            this.f21523h = false;
            this.f21524i = false;
            this.f21525j = false;
        }

        public void g(long j10, int i10, int i11, long j11, boolean z10) {
            boolean z11;
            boolean z12 = false;
            this.f21522g = false;
            this.f21523h = false;
            this.f21520e = j11;
            this.f21519d = 0;
            this.f21517b = j10;
            if (!c(i11)) {
                if (this.f21524i && !this.f21525j) {
                    if (z10) {
                        d(i10);
                    }
                    this.f21524i = false;
                }
                if (b(i11)) {
                    this.f21523h = !this.f21525j;
                    this.f21525j = true;
                }
            }
            if (i11 >= 16 && i11 <= 21) {
                z11 = true;
            } else {
                z11 = false;
            }
            this.f21518c = z11;
            if (z11 || i11 <= 9) {
                z12 = true;
            }
            this.f21521f = z12;
        }
    }

    public q(d0 d0Var) {
        this.f21502a = d0Var;
    }

    private void f() {
        oe.a.i(this.f21504c);
        w0.j(this.f21505d);
    }

    private void g(long j10, int i10, int i11, long j11) {
        this.f21505d.a(j10, i10, this.f21506e);
        if (!this.f21506e) {
            this.f21508g.b(i11);
            this.f21509h.b(i11);
            this.f21510i.b(i11);
            if (this.f21508g.c() && this.f21509h.c() && this.f21510i.c()) {
                this.f21504c.c(i(this.f21503b, this.f21508g, this.f21509h, this.f21510i));
                this.f21506e = true;
            }
        }
        if (this.f21511j.b(i11)) {
            u uVar = this.f21511j;
            this.f21515n.S(this.f21511j.f21571d, oe.d0.q(uVar.f21571d, uVar.f21572e));
            this.f21515n.V(5);
            this.f21502a.a(j11, this.f21515n);
        }
        if (this.f21512k.b(i11)) {
            u uVar2 = this.f21512k;
            this.f21515n.S(this.f21512k.f21571d, oe.d0.q(uVar2.f21571d, uVar2.f21572e));
            this.f21515n.V(5);
            this.f21502a.a(j11, this.f21515n);
        }
    }

    private void h(byte[] bArr, int i10, int i11) {
        this.f21505d.e(bArr, i10, i11);
        if (!this.f21506e) {
            this.f21508g.a(bArr, i10, i11);
            this.f21509h.a(bArr, i10, i11);
            this.f21510i.a(bArr, i10, i11);
        }
        this.f21511j.a(bArr, i10, i11);
        this.f21512k.a(bArr, i10, i11);
    }

    private static Format i(String str, u uVar, u uVar2, u uVar3) {
        int i10 = uVar.f21572e;
        byte[] bArr = new byte[uVar2.f21572e + i10 + uVar3.f21572e];
        System.arraycopy(uVar.f21571d, 0, bArr, 0, i10);
        System.arraycopy(uVar2.f21571d, 0, bArr, uVar.f21572e, uVar2.f21572e);
        System.arraycopy(uVar3.f21571d, 0, bArr, uVar.f21572e + uVar2.f21572e, uVar3.f21572e);
        d0.a h10 = oe.d0.h(uVar2.f21571d, 3, uVar2.f21572e);
        return new Format.b().U(str).g0("video/hevc").K(oe.f.c(h10.f40568a, h10.f40569b, h10.f40570c, h10.f40571d, h10.f40575h, h10.f40576i)).n0(h10.f40578k).S(h10.f40579l).c0(h10.f40580m).V(Collections.singletonList(bArr)).G();
    }

    private void j(long j10, int i10, int i11, long j11) {
        this.f21505d.g(j10, i10, i11, j11, this.f21506e);
        if (!this.f21506e) {
            this.f21508g.e(i11);
            this.f21509h.e(i11);
            this.f21510i.e(i11);
        }
        this.f21511j.e(i11);
        this.f21512k.e(i11);
    }

    @Override // ed.m
    public void a(oe.h0 h0Var) {
        int i10;
        f();
        while (h0Var.a() > 0) {
            int f10 = h0Var.f();
            int g10 = h0Var.g();
            byte[] e10 = h0Var.e();
            this.f21513l += h0Var.a();
            this.f21504c.e(h0Var, h0Var.a());
            while (f10 < g10) {
                int c10 = oe.d0.c(e10, f10, g10, this.f21507f);
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
                long j10 = this.f21513l - i12;
                if (i11 < 0) {
                    i10 = -i11;
                } else {
                    i10 = 0;
                }
                g(j10, i12, i10, this.f21514m);
                j(j10, i12, e11, this.f21514m);
                f10 = c10 + 3;
            }
        }
    }

    @Override // ed.m
    public void b() {
        this.f21513l = 0L;
        this.f21514m = -9223372036854775807L;
        oe.d0.a(this.f21507f);
        this.f21508g.d();
        this.f21509h.d();
        this.f21510i.d();
        this.f21511j.d();
        this.f21512k.d();
        a aVar = this.f21505d;
        if (aVar != null) {
            aVar.f();
        }
    }

    @Override // ed.m
    public void c(uc.m mVar, i0.d dVar) {
        dVar.a();
        this.f21503b = dVar.b();
        uc.b0 c10 = mVar.c(dVar.c(), 2);
        this.f21504c = c10;
        this.f21505d = new a(c10);
        this.f21502a.b(mVar, dVar);
    }

    @Override // ed.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f21514m = j10;
        }
    }

    @Override // ed.m
    public void d() {
    }
}
