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
    private static final float[] f21508l = {1.0f, 1.0f, 1.0909091f, 0.90909094f, 1.4545455f, 1.2121212f, 1.0f};

    /* renamed from: a  reason: collision with root package name */
    private final k0 f21509a;

    /* renamed from: b  reason: collision with root package name */
    private final ne.h0 f21510b;

    /* renamed from: e  reason: collision with root package name */
    private final u f21513e;

    /* renamed from: f  reason: collision with root package name */
    private b f21514f;

    /* renamed from: g  reason: collision with root package name */
    private long f21515g;

    /* renamed from: h  reason: collision with root package name */
    private String f21516h;

    /* renamed from: i  reason: collision with root package name */
    private tc.b0 f21517i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f21518j;

    /* renamed from: c  reason: collision with root package name */
    private final boolean[] f21511c = new boolean[4];

    /* renamed from: d  reason: collision with root package name */
    private final a f21512d = new a(IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: k  reason: collision with root package name */
    private long f21519k = -9223372036854775807L;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: f  reason: collision with root package name */
        private static final byte[] f21520f = {0, 0, 1};

        /* renamed from: a  reason: collision with root package name */
        private boolean f21521a;

        /* renamed from: b  reason: collision with root package name */
        private int f21522b;

        /* renamed from: c  reason: collision with root package name */
        public int f21523c;

        /* renamed from: d  reason: collision with root package name */
        public int f21524d;

        /* renamed from: e  reason: collision with root package name */
        public byte[] f21525e;

        public a(int i10) {
            this.f21525e = new byte[i10];
        }

        public void a(byte[] bArr, int i10, int i11) {
            if (!this.f21521a) {
                return;
            }
            int i12 = i11 - i10;
            byte[] bArr2 = this.f21525e;
            int length = bArr2.length;
            int i13 = this.f21523c;
            if (length < i13 + i12) {
                this.f21525e = Arrays.copyOf(bArr2, (i13 + i12) * 2);
            }
            System.arraycopy(bArr, i10, this.f21525e, this.f21523c, i12);
            this.f21523c += i12;
        }

        public boolean b(int i10, int i11) {
            int i12 = this.f21522b;
            if (i12 != 0) {
                if (i12 != 1) {
                    if (i12 != 2) {
                        if (i12 != 3) {
                            if (i12 == 4) {
                                if (i10 == 179 || i10 == 181) {
                                    this.f21523c -= i11;
                                    this.f21521a = false;
                                    return true;
                                }
                            } else {
                                throw new IllegalStateException();
                            }
                        } else if ((i10 & 240) != 32) {
                            ne.y.i("H263Reader", "Unexpected start code value");
                            c();
                        } else {
                            this.f21524d = this.f21523c;
                            this.f21522b = 4;
                        }
                    } else if (i10 > 31) {
                        ne.y.i("H263Reader", "Unexpected start code value");
                        c();
                    } else {
                        this.f21522b = 3;
                    }
                } else if (i10 != 181) {
                    ne.y.i("H263Reader", "Unexpected start code value");
                    c();
                } else {
                    this.f21522b = 2;
                }
            } else if (i10 == 176) {
                this.f21522b = 1;
                this.f21521a = true;
            }
            byte[] bArr = f21520f;
            a(bArr, 0, bArr.length);
            return false;
        }

        public void c() {
            this.f21521a = false;
            this.f21523c = 0;
            this.f21522b = 0;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final tc.b0 f21526a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f21527b;

        /* renamed from: c  reason: collision with root package name */
        private boolean f21528c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f21529d;

        /* renamed from: e  reason: collision with root package name */
        private int f21530e;

        /* renamed from: f  reason: collision with root package name */
        private int f21531f;

        /* renamed from: g  reason: collision with root package name */
        private long f21532g;

        /* renamed from: h  reason: collision with root package name */
        private long f21533h;

        public b(tc.b0 b0Var) {
            this.f21526a = b0Var;
        }

        public void a(byte[] bArr, int i10, int i11) {
            boolean z10;
            if (this.f21528c) {
                int i12 = this.f21531f;
                int i13 = (i10 + 1) - i12;
                if (i13 < i11) {
                    if (((bArr[i13] & 192) >> 6) == 0) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    this.f21529d = z10;
                    this.f21528c = false;
                    return;
                }
                this.f21531f = i12 + (i11 - i10);
            }
        }

        public void b(long j10, int i10, boolean z10) {
            if (this.f21530e == 182 && z10 && this.f21527b) {
                long j11 = this.f21533h;
                if (j11 != -9223372036854775807L) {
                    this.f21526a.d(j11, this.f21529d ? 1 : 0, (int) (j10 - this.f21532g), i10, null);
                }
            }
            if (this.f21530e != 179) {
                this.f21532g = j10;
            }
        }

        public void c(int i10, long j10) {
            boolean z10;
            this.f21530e = i10;
            this.f21529d = false;
            boolean z11 = true;
            if (i10 != 182 && i10 != 179) {
                z10 = false;
            } else {
                z10 = true;
            }
            this.f21527b = z10;
            if (i10 != 182) {
                z11 = false;
            }
            this.f21528c = z11;
            this.f21531f = 0;
            this.f21533h = j10;
        }

        public void d() {
            this.f21527b = false;
            this.f21528c = false;
            this.f21529d = false;
            this.f21530e = -1;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(k0 k0Var) {
        this.f21509a = k0Var;
        if (k0Var != null) {
            this.f21513e = new u(178, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
            this.f21510b = new ne.h0();
            return;
        }
        this.f21513e = null;
        this.f21510b = null;
    }

    private static Format a(a aVar, int i10, String str) {
        byte[] copyOf = Arrays.copyOf(aVar.f21525e, aVar.f21523c);
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
            float[] fArr = f21508l;
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
        ne.a.i(this.f21514f);
        ne.a.i(this.f21517i);
        int f10 = h0Var.f();
        int g10 = h0Var.g();
        byte[] e10 = h0Var.e();
        this.f21515g += h0Var.a();
        this.f21517i.f(h0Var, h0Var.a());
        while (true) {
            int c10 = ne.d0.c(e10, f10, g10, this.f21511c);
            if (c10 == g10) {
                break;
            }
            int i11 = c10 + 3;
            int i12 = h0Var.e()[i11] & 255;
            int i13 = c10 - f10;
            int i14 = 0;
            if (!this.f21518j) {
                if (i13 > 0) {
                    this.f21512d.a(e10, f10, c10);
                }
                if (i13 < 0) {
                    i10 = -i13;
                } else {
                    i10 = 0;
                }
                if (this.f21512d.b(i12, i10)) {
                    tc.b0 b0Var = this.f21517i;
                    a aVar = this.f21512d;
                    b0Var.b(a(aVar, aVar.f21524d, (String) ne.a.e(this.f21516h)));
                    this.f21518j = true;
                }
            }
            this.f21514f.a(e10, f10, c10);
            u uVar = this.f21513e;
            if (uVar != null) {
                if (i13 > 0) {
                    uVar.a(e10, f10, c10);
                } else {
                    i14 = -i13;
                }
                if (this.f21513e.b(i14)) {
                    u uVar2 = this.f21513e;
                    ((ne.h0) w0.j(this.f21510b)).S(this.f21513e.f21652d, ne.d0.q(uVar2.f21652d, uVar2.f21653e));
                    ((k0) w0.j(this.f21509a)).a(this.f21519k, this.f21510b);
                }
                if (i12 == 178 && h0Var.e()[c10 + 2] == 1) {
                    this.f21513e.e(i12);
                }
            }
            int i15 = g10 - c10;
            this.f21514f.b(this.f21515g - i15, i15, this.f21518j);
            this.f21514f.c(i12, this.f21519k);
            f10 = i11;
        }
        if (!this.f21518j) {
            this.f21512d.a(e10, f10, g10);
        }
        this.f21514f.a(e10, f10, g10);
        u uVar3 = this.f21513e;
        if (uVar3 != null) {
            uVar3.a(e10, f10, g10);
        }
    }

    @Override // dd.m
    public void c() {
        ne.d0.a(this.f21511c);
        this.f21512d.c();
        b bVar = this.f21514f;
        if (bVar != null) {
            bVar.d();
        }
        u uVar = this.f21513e;
        if (uVar != null) {
            uVar.d();
        }
        this.f21515g = 0L;
        this.f21519k = -9223372036854775807L;
    }

    @Override // dd.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f21519k = j10;
        }
    }

    @Override // dd.m
    public void f(tc.m mVar, i0.d dVar) {
        dVar.a();
        this.f21516h = dVar.b();
        tc.b0 c10 = mVar.c(dVar.c(), 2);
        this.f21517i = c10;
        this.f21514f = new b(c10);
        k0 k0Var = this.f21509a;
        if (k0Var != null) {
            k0Var.b(mVar, dVar);
        }
    }

    @Override // dd.m
    public void d() {
    }
}
