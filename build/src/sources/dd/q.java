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
    private final d0 f21583a;

    /* renamed from: b  reason: collision with root package name */
    private String f21584b;

    /* renamed from: c  reason: collision with root package name */
    private tc.b0 f21585c;

    /* renamed from: d  reason: collision with root package name */
    private a f21586d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f21587e;

    /* renamed from: l  reason: collision with root package name */
    private long f21594l;

    /* renamed from: f  reason: collision with root package name */
    private final boolean[] f21588f = new boolean[3];

    /* renamed from: g  reason: collision with root package name */
    private final u f21589g = new u(32, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: h  reason: collision with root package name */
    private final u f21590h = new u(33, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: i  reason: collision with root package name */
    private final u f21591i = new u(34, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: j  reason: collision with root package name */
    private final u f21592j = new u(39, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: k  reason: collision with root package name */
    private final u f21593k = new u(40, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: m  reason: collision with root package name */
    private long f21595m = -9223372036854775807L;

    /* renamed from: n  reason: collision with root package name */
    private final ne.h0 f21596n = new ne.h0();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final tc.b0 f21597a;

        /* renamed from: b  reason: collision with root package name */
        private long f21598b;

        /* renamed from: c  reason: collision with root package name */
        private boolean f21599c;

        /* renamed from: d  reason: collision with root package name */
        private int f21600d;

        /* renamed from: e  reason: collision with root package name */
        private long f21601e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f21602f;

        /* renamed from: g  reason: collision with root package name */
        private boolean f21603g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f21604h;

        /* renamed from: i  reason: collision with root package name */
        private boolean f21605i;

        /* renamed from: j  reason: collision with root package name */
        private boolean f21606j;

        /* renamed from: k  reason: collision with root package name */
        private long f21607k;

        /* renamed from: l  reason: collision with root package name */
        private long f21608l;

        /* renamed from: m  reason: collision with root package name */
        private boolean f21609m;

        public a(tc.b0 b0Var) {
            this.f21597a = b0Var;
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
            long j10 = this.f21608l;
            if (j10 == -9223372036854775807L) {
                return;
            }
            boolean z10 = this.f21609m;
            this.f21597a.d(j10, z10 ? 1 : 0, (int) (this.f21598b - this.f21607k), i10, null);
        }

        public void a(long j10, int i10, boolean z10) {
            if (this.f21606j && this.f21603g) {
                this.f21609m = this.f21599c;
                this.f21606j = false;
            } else if (!this.f21604h && !this.f21603g) {
            } else {
                if (z10 && this.f21605i) {
                    d(i10 + ((int) (j10 - this.f21598b)));
                }
                this.f21607k = this.f21598b;
                this.f21608l = this.f21601e;
                this.f21609m = this.f21599c;
                this.f21605i = true;
            }
        }

        public void e(byte[] bArr, int i10, int i11) {
            boolean z10;
            if (this.f21602f) {
                int i12 = this.f21600d;
                int i13 = (i10 + 2) - i12;
                if (i13 < i11) {
                    if ((bArr[i13] & ByteCompanionObject.MIN_VALUE) != 0) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    this.f21603g = z10;
                    this.f21602f = false;
                    return;
                }
                this.f21600d = i12 + (i11 - i10);
            }
        }

        public void f() {
            this.f21602f = false;
            this.f21603g = false;
            this.f21604h = false;
            this.f21605i = false;
            this.f21606j = false;
        }

        public void g(long j10, int i10, int i11, long j11, boolean z10) {
            boolean z11;
            boolean z12 = false;
            this.f21603g = false;
            this.f21604h = false;
            this.f21601e = j11;
            this.f21600d = 0;
            this.f21598b = j10;
            if (!c(i11)) {
                if (this.f21605i && !this.f21606j) {
                    if (z10) {
                        d(i10);
                    }
                    this.f21605i = false;
                }
                if (b(i11)) {
                    this.f21604h = !this.f21606j;
                    this.f21606j = true;
                }
            }
            if (i11 >= 16 && i11 <= 21) {
                z11 = true;
            } else {
                z11 = false;
            }
            this.f21599c = z11;
            if (z11 || i11 <= 9) {
                z12 = true;
            }
            this.f21602f = z12;
        }
    }

    public q(d0 d0Var) {
        this.f21583a = d0Var;
    }

    private void a() {
        ne.a.i(this.f21585c);
        w0.j(this.f21586d);
    }

    private void g(long j10, int i10, int i11, long j11) {
        this.f21586d.a(j10, i10, this.f21587e);
        if (!this.f21587e) {
            this.f21589g.b(i11);
            this.f21590h.b(i11);
            this.f21591i.b(i11);
            if (this.f21589g.c() && this.f21590h.c() && this.f21591i.c()) {
                this.f21585c.b(i(this.f21584b, this.f21589g, this.f21590h, this.f21591i));
                this.f21587e = true;
            }
        }
        if (this.f21592j.b(i11)) {
            u uVar = this.f21592j;
            this.f21596n.S(this.f21592j.f21652d, ne.d0.q(uVar.f21652d, uVar.f21653e));
            this.f21596n.V(5);
            this.f21583a.a(j11, this.f21596n);
        }
        if (this.f21593k.b(i11)) {
            u uVar2 = this.f21593k;
            this.f21596n.S(this.f21593k.f21652d, ne.d0.q(uVar2.f21652d, uVar2.f21653e));
            this.f21596n.V(5);
            this.f21583a.a(j11, this.f21596n);
        }
    }

    private void h(byte[] bArr, int i10, int i11) {
        this.f21586d.e(bArr, i10, i11);
        if (!this.f21587e) {
            this.f21589g.a(bArr, i10, i11);
            this.f21590h.a(bArr, i10, i11);
            this.f21591i.a(bArr, i10, i11);
        }
        this.f21592j.a(bArr, i10, i11);
        this.f21593k.a(bArr, i10, i11);
    }

    private static Format i(String str, u uVar, u uVar2, u uVar3) {
        int i10 = uVar.f21653e;
        byte[] bArr = new byte[uVar2.f21653e + i10 + uVar3.f21653e];
        System.arraycopy(uVar.f21652d, 0, bArr, 0, i10);
        System.arraycopy(uVar2.f21652d, 0, bArr, uVar.f21653e, uVar2.f21653e);
        System.arraycopy(uVar3.f21652d, 0, bArr, uVar.f21653e + uVar2.f21653e, uVar3.f21653e);
        d0.a h10 = ne.d0.h(uVar2.f21652d, 3, uVar2.f21653e);
        return new Format.b().U(str).g0("video/hevc").K(ne.f.c(h10.f40015a, h10.f40016b, h10.f40017c, h10.f40018d, h10.f40022h, h10.f40023i)).n0(h10.f40025k).S(h10.f40026l).c0(h10.f40027m).V(Collections.singletonList(bArr)).G();
    }

    private void j(long j10, int i10, int i11, long j11) {
        this.f21586d.g(j10, i10, i11, j11, this.f21587e);
        if (!this.f21587e) {
            this.f21589g.e(i11);
            this.f21590h.e(i11);
            this.f21591i.e(i11);
        }
        this.f21592j.e(i11);
        this.f21593k.e(i11);
    }

    @Override // dd.m
    public void b(ne.h0 h0Var) {
        int i10;
        a();
        while (h0Var.a() > 0) {
            int f10 = h0Var.f();
            int g10 = h0Var.g();
            byte[] e10 = h0Var.e();
            this.f21594l += h0Var.a();
            this.f21585c.f(h0Var, h0Var.a());
            while (f10 < g10) {
                int c10 = ne.d0.c(e10, f10, g10, this.f21588f);
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
                long j10 = this.f21594l - i12;
                if (i11 < 0) {
                    i10 = -i11;
                } else {
                    i10 = 0;
                }
                g(j10, i12, i10, this.f21595m);
                j(j10, i12, e11, this.f21595m);
                f10 = c10 + 3;
            }
        }
    }

    @Override // dd.m
    public void c() {
        this.f21594l = 0L;
        this.f21595m = -9223372036854775807L;
        ne.d0.a(this.f21588f);
        this.f21589g.d();
        this.f21590h.d();
        this.f21591i.d();
        this.f21592j.d();
        this.f21593k.d();
        a aVar = this.f21586d;
        if (aVar != null) {
            aVar.f();
        }
    }

    @Override // dd.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f21595m = j10;
        }
    }

    @Override // dd.m
    public void f(tc.m mVar, i0.d dVar) {
        dVar.a();
        this.f21584b = dVar.b();
        tc.b0 c10 = mVar.c(dVar.c(), 2);
        this.f21585c = c10;
        this.f21586d = new a(c10);
        this.f21583a.b(mVar, dVar);
    }

    @Override // dd.m
    public void d() {
    }
}
