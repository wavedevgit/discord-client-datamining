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
    private final d0 f20613a;

    /* renamed from: b  reason: collision with root package name */
    private String f20614b;

    /* renamed from: c  reason: collision with root package name */
    private tc.b0 f20615c;

    /* renamed from: d  reason: collision with root package name */
    private a f20616d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f20617e;

    /* renamed from: l  reason: collision with root package name */
    private long f20624l;

    /* renamed from: f  reason: collision with root package name */
    private final boolean[] f20618f = new boolean[3];

    /* renamed from: g  reason: collision with root package name */
    private final u f20619g = new u(32, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: h  reason: collision with root package name */
    private final u f20620h = new u(33, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: i  reason: collision with root package name */
    private final u f20621i = new u(34, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: j  reason: collision with root package name */
    private final u f20622j = new u(39, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: k  reason: collision with root package name */
    private final u f20623k = new u(40, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: m  reason: collision with root package name */
    private long f20625m = -9223372036854775807L;

    /* renamed from: n  reason: collision with root package name */
    private final ne.h0 f20626n = new ne.h0();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final tc.b0 f20627a;

        /* renamed from: b  reason: collision with root package name */
        private long f20628b;

        /* renamed from: c  reason: collision with root package name */
        private boolean f20629c;

        /* renamed from: d  reason: collision with root package name */
        private int f20630d;

        /* renamed from: e  reason: collision with root package name */
        private long f20631e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f20632f;

        /* renamed from: g  reason: collision with root package name */
        private boolean f20633g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f20634h;

        /* renamed from: i  reason: collision with root package name */
        private boolean f20635i;

        /* renamed from: j  reason: collision with root package name */
        private boolean f20636j;

        /* renamed from: k  reason: collision with root package name */
        private long f20637k;

        /* renamed from: l  reason: collision with root package name */
        private long f20638l;

        /* renamed from: m  reason: collision with root package name */
        private boolean f20639m;

        public a(tc.b0 b0Var) {
            this.f20627a = b0Var;
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
            long j10 = this.f20638l;
            if (j10 == -9223372036854775807L) {
                return;
            }
            boolean z10 = this.f20639m;
            this.f20627a.d(j10, z10 ? 1 : 0, (int) (this.f20628b - this.f20637k), i10, null);
        }

        public void a(long j10, int i10, boolean z10) {
            if (this.f20636j && this.f20633g) {
                this.f20639m = this.f20629c;
                this.f20636j = false;
            } else if (!this.f20634h && !this.f20633g) {
            } else {
                if (z10 && this.f20635i) {
                    d(i10 + ((int) (j10 - this.f20628b)));
                }
                this.f20637k = this.f20628b;
                this.f20638l = this.f20631e;
                this.f20639m = this.f20629c;
                this.f20635i = true;
            }
        }

        public void e(byte[] bArr, int i10, int i11) {
            boolean z10;
            if (this.f20632f) {
                int i12 = this.f20630d;
                int i13 = (i10 + 2) - i12;
                if (i13 < i11) {
                    if ((bArr[i13] & ByteCompanionObject.MIN_VALUE) != 0) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    this.f20633g = z10;
                    this.f20632f = false;
                    return;
                }
                this.f20630d = i12 + (i11 - i10);
            }
        }

        public void f() {
            this.f20632f = false;
            this.f20633g = false;
            this.f20634h = false;
            this.f20635i = false;
            this.f20636j = false;
        }

        public void g(long j10, int i10, int i11, long j11, boolean z10) {
            boolean z11;
            boolean z12 = false;
            this.f20633g = false;
            this.f20634h = false;
            this.f20631e = j11;
            this.f20630d = 0;
            this.f20628b = j10;
            if (!c(i11)) {
                if (this.f20635i && !this.f20636j) {
                    if (z10) {
                        d(i10);
                    }
                    this.f20635i = false;
                }
                if (b(i11)) {
                    this.f20634h = !this.f20636j;
                    this.f20636j = true;
                }
            }
            if (i11 >= 16 && i11 <= 21) {
                z11 = true;
            } else {
                z11 = false;
            }
            this.f20629c = z11;
            if (z11 || i11 <= 9) {
                z12 = true;
            }
            this.f20632f = z12;
        }
    }

    public q(d0 d0Var) {
        this.f20613a = d0Var;
    }

    private void a() {
        ne.a.i(this.f20615c);
        w0.j(this.f20616d);
    }

    private void g(long j10, int i10, int i11, long j11) {
        this.f20616d.a(j10, i10, this.f20617e);
        if (!this.f20617e) {
            this.f20619g.b(i11);
            this.f20620h.b(i11);
            this.f20621i.b(i11);
            if (this.f20619g.c() && this.f20620h.c() && this.f20621i.c()) {
                this.f20615c.b(i(this.f20614b, this.f20619g, this.f20620h, this.f20621i));
                this.f20617e = true;
            }
        }
        if (this.f20622j.b(i11)) {
            u uVar = this.f20622j;
            this.f20626n.S(this.f20622j.f20682d, ne.d0.q(uVar.f20682d, uVar.f20683e));
            this.f20626n.V(5);
            this.f20613a.a(j11, this.f20626n);
        }
        if (this.f20623k.b(i11)) {
            u uVar2 = this.f20623k;
            this.f20626n.S(this.f20623k.f20682d, ne.d0.q(uVar2.f20682d, uVar2.f20683e));
            this.f20626n.V(5);
            this.f20613a.a(j11, this.f20626n);
        }
    }

    private void h(byte[] bArr, int i10, int i11) {
        this.f20616d.e(bArr, i10, i11);
        if (!this.f20617e) {
            this.f20619g.a(bArr, i10, i11);
            this.f20620h.a(bArr, i10, i11);
            this.f20621i.a(bArr, i10, i11);
        }
        this.f20622j.a(bArr, i10, i11);
        this.f20623k.a(bArr, i10, i11);
    }

    private static Format i(String str, u uVar, u uVar2, u uVar3) {
        int i10 = uVar.f20683e;
        byte[] bArr = new byte[uVar2.f20683e + i10 + uVar3.f20683e];
        System.arraycopy(uVar.f20682d, 0, bArr, 0, i10);
        System.arraycopy(uVar2.f20682d, 0, bArr, uVar.f20683e, uVar2.f20683e);
        System.arraycopy(uVar3.f20682d, 0, bArr, uVar.f20683e + uVar2.f20683e, uVar3.f20683e);
        d0.a h10 = ne.d0.h(uVar2.f20682d, 3, uVar2.f20683e);
        return new Format.b().U(str).g0("video/hevc").K(ne.f.c(h10.f38917a, h10.f38918b, h10.f38919c, h10.f38920d, h10.f38924h, h10.f38925i)).n0(h10.f38927k).S(h10.f38928l).c0(h10.f38929m).V(Collections.singletonList(bArr)).G();
    }

    private void j(long j10, int i10, int i11, long j11) {
        this.f20616d.g(j10, i10, i11, j11, this.f20617e);
        if (!this.f20617e) {
            this.f20619g.e(i11);
            this.f20620h.e(i11);
            this.f20621i.e(i11);
        }
        this.f20622j.e(i11);
        this.f20623k.e(i11);
    }

    @Override // dd.m
    public void b(ne.h0 h0Var) {
        int i10;
        a();
        while (h0Var.a() > 0) {
            int f10 = h0Var.f();
            int g10 = h0Var.g();
            byte[] e10 = h0Var.e();
            this.f20624l += h0Var.a();
            this.f20615c.f(h0Var, h0Var.a());
            while (f10 < g10) {
                int c10 = ne.d0.c(e10, f10, g10, this.f20618f);
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
                long j10 = this.f20624l - i12;
                if (i11 < 0) {
                    i10 = -i11;
                } else {
                    i10 = 0;
                }
                g(j10, i12, i10, this.f20625m);
                j(j10, i12, e11, this.f20625m);
                f10 = c10 + 3;
            }
        }
    }

    @Override // dd.m
    public void c() {
        this.f20624l = 0L;
        this.f20625m = -9223372036854775807L;
        ne.d0.a(this.f20618f);
        this.f20619g.d();
        this.f20620h.d();
        this.f20621i.d();
        this.f20622j.d();
        this.f20623k.d();
        a aVar = this.f20616d;
        if (aVar != null) {
            aVar.f();
        }
    }

    @Override // dd.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f20625m = j10;
        }
    }

    @Override // dd.m
    public void f(tc.m mVar, i0.d dVar) {
        dVar.a();
        this.f20614b = dVar.b();
        tc.b0 c10 = mVar.c(dVar.c(), 2);
        this.f20615c = c10;
        this.f20616d = new a(c10);
        this.f20613a.b(mVar, dVar);
    }

    @Override // dd.m
    public void d() {
    }
}
