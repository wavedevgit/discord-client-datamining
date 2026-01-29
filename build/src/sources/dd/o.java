package dd;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.android.exoplayer2.Format;
import dd.i0;
import java.util.Arrays;
import java.util.Collections;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o implements m {

    /* renamed from: l  reason: collision with root package name */
    private static final float[] f21932l = {1.0f, 1.0f, 1.0909091f, 0.90909094f, 1.4545455f, 1.2121212f, 1.0f};

    /* renamed from: a  reason: collision with root package name */
    private final k0 f21933a;

    /* renamed from: b  reason: collision with root package name */
    private final ne.h0 f21934b;

    /* renamed from: e  reason: collision with root package name */
    private final u f21937e;

    /* renamed from: f  reason: collision with root package name */
    private b f21938f;

    /* renamed from: g  reason: collision with root package name */
    private long f21939g;

    /* renamed from: h  reason: collision with root package name */
    private String f21940h;

    /* renamed from: i  reason: collision with root package name */
    private tc.b0 f21941i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f21942j;

    /* renamed from: c  reason: collision with root package name */
    private final boolean[] f21935c = new boolean[4];

    /* renamed from: d  reason: collision with root package name */
    private final a f21936d = new a(IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: k  reason: collision with root package name */
    private long f21943k = -9223372036854775807L;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: f  reason: collision with root package name */
        private static final byte[] f21944f = {0, 0, 1};

        /* renamed from: a  reason: collision with root package name */
        private boolean f21945a;

        /* renamed from: b  reason: collision with root package name */
        private int f21946b;

        /* renamed from: c  reason: collision with root package name */
        public int f21947c;

        /* renamed from: d  reason: collision with root package name */
        public int f21948d;

        /* renamed from: e  reason: collision with root package name */
        public byte[] f21949e;

        public a(int i10) {
            this.f21949e = new byte[i10];
        }

        public void a(byte[] bArr, int i10, int i11) {
            if (!this.f21945a) {
                return;
            }
            int i12 = i11 - i10;
            byte[] bArr2 = this.f21949e;
            int length = bArr2.length;
            int i13 = this.f21947c;
            if (length < i13 + i12) {
                this.f21949e = Arrays.copyOf(bArr2, (i13 + i12) * 2);
            }
            System.arraycopy(bArr, i10, this.f21949e, this.f21947c, i12);
            this.f21947c += i12;
        }

        public boolean b(int i10, int i11) {
            int i12 = this.f21946b;
            if (i12 != 0) {
                if (i12 != 1) {
                    if (i12 != 2) {
                        if (i12 != 3) {
                            if (i12 == 4) {
                                if (i10 == 179 || i10 == 181) {
                                    this.f21947c -= i11;
                                    this.f21945a = false;
                                    return true;
                                }
                            } else {
                                throw new IllegalStateException();
                            }
                        } else if ((i10 & 240) != 32) {
                            ne.y.i("H263Reader", "Unexpected start code value");
                            c();
                        } else {
                            this.f21948d = this.f21947c;
                            this.f21946b = 4;
                        }
                    } else if (i10 > 31) {
                        ne.y.i("H263Reader", "Unexpected start code value");
                        c();
                    } else {
                        this.f21946b = 3;
                    }
                } else if (i10 != 181) {
                    ne.y.i("H263Reader", "Unexpected start code value");
                    c();
                } else {
                    this.f21946b = 2;
                }
            } else if (i10 == 176) {
                this.f21946b = 1;
                this.f21945a = true;
            }
            byte[] bArr = f21944f;
            a(bArr, 0, bArr.length);
            return false;
        }

        public void c() {
            this.f21945a = false;
            this.f21947c = 0;
            this.f21946b = 0;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final tc.b0 f21950a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f21951b;

        /* renamed from: c  reason: collision with root package name */
        private boolean f21952c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f21953d;

        /* renamed from: e  reason: collision with root package name */
        private int f21954e;

        /* renamed from: f  reason: collision with root package name */
        private int f21955f;

        /* renamed from: g  reason: collision with root package name */
        private long f21956g;

        /* renamed from: h  reason: collision with root package name */
        private long f21957h;

        public b(tc.b0 b0Var) {
            this.f21950a = b0Var;
        }

        public void a(byte[] bArr, int i10, int i11) {
            boolean z10;
            if (this.f21952c) {
                int i12 = this.f21955f;
                int i13 = (i10 + 1) - i12;
                if (i13 < i11) {
                    if (((bArr[i13] & 192) >> 6) == 0) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    this.f21953d = z10;
                    this.f21952c = false;
                    return;
                }
                this.f21955f = i12 + (i11 - i10);
            }
        }

        public void b(long j10, int i10, boolean z10) {
            if (this.f21954e == 182 && z10 && this.f21951b) {
                long j11 = this.f21957h;
                if (j11 != -9223372036854775807L) {
                    this.f21950a.d(j11, this.f21953d ? 1 : 0, (int) (j10 - this.f21956g), i10, null);
                }
            }
            if (this.f21954e != 179) {
                this.f21956g = j10;
            }
        }

        public void c(int i10, long j10) {
            boolean z10;
            this.f21954e = i10;
            this.f21953d = false;
            boolean z11 = true;
            if (i10 != 182 && i10 != 179) {
                z10 = false;
            } else {
                z10 = true;
            }
            this.f21951b = z10;
            if (i10 != 182) {
                z11 = false;
            }
            this.f21952c = z11;
            this.f21955f = 0;
            this.f21957h = j10;
        }

        public void d() {
            this.f21951b = false;
            this.f21952c = false;
            this.f21953d = false;
            this.f21954e = -1;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(k0 k0Var) {
        this.f21933a = k0Var;
        if (k0Var != null) {
            this.f21937e = new u(178, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
            this.f21934b = new ne.h0();
            return;
        }
        this.f21937e = null;
        this.f21934b = null;
    }

    private static Format a(a aVar, int i10, String str) {
        byte[] copyOf = Arrays.copyOf(aVar.f21949e, aVar.f21947c);
        ne.g0 g0Var = new ne.g0(copyOf);
        g0Var.s(i10);
        g0Var.s(4);
        g0Var.q();
        g0Var.r(8);
        if (g0Var.g()) {
            g0Var.r(4);
            g0Var.r(3);
        }
        int h10 = g0Var.h(4);
        float f10 = 1.0f;
        if (h10 == 15) {
            int h11 = g0Var.h(8);
            int h12 = g0Var.h(8);
            if (h12 == 0) {
                ne.y.i("H263Reader", "Invalid aspect ratio");
            } else {
                f10 = h11 / h12;
            }
        } else {
            float[] fArr = f21932l;
            if (h10 < fArr.length) {
                f10 = fArr[h10];
            } else {
                ne.y.i("H263Reader", "Invalid aspect ratio");
            }
        }
        if (g0Var.g()) {
            g0Var.r(2);
            g0Var.r(1);
            if (g0Var.g()) {
                g0Var.r(15);
                g0Var.q();
                g0Var.r(15);
                g0Var.q();
                g0Var.r(15);
                g0Var.q();
                g0Var.r(3);
                g0Var.r(11);
                g0Var.q();
                g0Var.r(15);
                g0Var.q();
            }
        }
        if (g0Var.h(2) != 0) {
            ne.y.i("H263Reader", "Unhandled video object layer shape");
        }
        g0Var.q();
        int h13 = g0Var.h(16);
        g0Var.q();
        if (g0Var.g()) {
            if (h13 == 0) {
                ne.y.i("H263Reader", "Invalid vop_increment_time_resolution");
            } else {
                int i11 = 0;
                for (int i12 = h13 - 1; i12 > 0; i12 >>= 1) {
                    i11++;
                }
                g0Var.r(i11);
            }
        }
        g0Var.q();
        int h14 = g0Var.h(13);
        g0Var.q();
        int h15 = g0Var.h(13);
        g0Var.q();
        g0Var.q();
        return new Format.b().U(str).g0("video/mp4v-es").n0(h14).S(h15).c0(f10).V(Collections.singletonList(copyOf)).G();
    }

    @Override // dd.m
    public void b(ne.h0 h0Var) {
        int i10;
        ne.a.i(this.f21938f);
        ne.a.i(this.f21941i);
        int f10 = h0Var.f();
        int g10 = h0Var.g();
        byte[] e10 = h0Var.e();
        this.f21939g += h0Var.a();
        this.f21941i.f(h0Var, h0Var.a());
        while (true) {
            int c10 = ne.d0.c(e10, f10, g10, this.f21935c);
            if (c10 == g10) {
                break;
            }
            int i11 = c10 + 3;
            int i12 = h0Var.e()[i11] & 255;
            int i13 = c10 - f10;
            int i14 = 0;
            if (!this.f21942j) {
                if (i13 > 0) {
                    this.f21936d.a(e10, f10, c10);
                }
                if (i13 < 0) {
                    i10 = -i13;
                } else {
                    i10 = 0;
                }
                if (this.f21936d.b(i12, i10)) {
                    tc.b0 b0Var = this.f21941i;
                    a aVar = this.f21936d;
                    b0Var.b(a(aVar, aVar.f21948d, (String) ne.a.e(this.f21940h)));
                    this.f21942j = true;
                }
            }
            this.f21938f.a(e10, f10, c10);
            u uVar = this.f21937e;
            if (uVar != null) {
                if (i13 > 0) {
                    uVar.a(e10, f10, c10);
                } else {
                    i14 = -i13;
                }
                if (this.f21937e.b(i14)) {
                    u uVar2 = this.f21937e;
                    ((ne.h0) w0.j(this.f21934b)).S(this.f21937e.f22076d, ne.d0.q(uVar2.f22076d, uVar2.f22077e));
                    ((k0) w0.j(this.f21933a)).a(this.f21943k, this.f21934b);
                }
                if (i12 == 178 && h0Var.e()[c10 + 2] == 1) {
                    this.f21937e.e(i12);
                }
            }
            int i15 = g10 - c10;
            this.f21938f.b(this.f21939g - i15, i15, this.f21942j);
            this.f21938f.c(i12, this.f21943k);
            f10 = i11;
        }
        if (!this.f21942j) {
            this.f21936d.a(e10, f10, g10);
        }
        this.f21938f.a(e10, f10, g10);
        u uVar3 = this.f21937e;
        if (uVar3 != null) {
            uVar3.a(e10, f10, g10);
        }
    }

    @Override // dd.m
    public void c() {
        ne.d0.a(this.f21935c);
        this.f21936d.c();
        b bVar = this.f21938f;
        if (bVar != null) {
            bVar.d();
        }
        u uVar = this.f21937e;
        if (uVar != null) {
            uVar.d();
        }
        this.f21939g = 0L;
        this.f21943k = -9223372036854775807L;
    }

    @Override // dd.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f21943k = j10;
        }
    }

    @Override // dd.m
    public void f(tc.m mVar, i0.d dVar) {
        dVar.a();
        this.f21940h = dVar.b();
        tc.b0 c10 = mVar.c(dVar.c(), 2);
        this.f21941i = c10;
        this.f21938f = new b(c10);
        k0 k0Var = this.f21933a;
        if (k0Var != null) {
            k0Var.b(mVar, dVar);
        }
    }

    @Override // dd.m
    public void d() {
    }
}
