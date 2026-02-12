package ed;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.android.exoplayer2.Format;
import ed.i0;
import java.util.Arrays;
import java.util.Collections;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o implements m {

    /* renamed from: l  reason: collision with root package name */
    private static final float[] f22595l = {1.0f, 1.0f, 1.0909091f, 0.90909094f, 1.4545455f, 1.2121212f, 1.0f};

    /* renamed from: a  reason: collision with root package name */
    private final k0 f22596a;

    /* renamed from: b  reason: collision with root package name */
    private final oe.h0 f22597b;

    /* renamed from: e  reason: collision with root package name */
    private final u f22600e;

    /* renamed from: f  reason: collision with root package name */
    private b f22601f;

    /* renamed from: g  reason: collision with root package name */
    private long f22602g;

    /* renamed from: h  reason: collision with root package name */
    private String f22603h;

    /* renamed from: i  reason: collision with root package name */
    private uc.b0 f22604i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f22605j;

    /* renamed from: c  reason: collision with root package name */
    private final boolean[] f22598c = new boolean[4];

    /* renamed from: d  reason: collision with root package name */
    private final a f22599d = new a(IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* renamed from: k  reason: collision with root package name */
    private long f22606k = -9223372036854775807L;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: f  reason: collision with root package name */
        private static final byte[] f22607f = {0, 0, 1};

        /* renamed from: a  reason: collision with root package name */
        private boolean f22608a;

        /* renamed from: b  reason: collision with root package name */
        private int f22609b;

        /* renamed from: c  reason: collision with root package name */
        public int f22610c;

        /* renamed from: d  reason: collision with root package name */
        public int f22611d;

        /* renamed from: e  reason: collision with root package name */
        public byte[] f22612e;

        public a(int i10) {
            this.f22612e = new byte[i10];
        }

        public void a(byte[] bArr, int i10, int i11) {
            if (!this.f22608a) {
                return;
            }
            int i12 = i11 - i10;
            byte[] bArr2 = this.f22612e;
            int length = bArr2.length;
            int i13 = this.f22610c;
            if (length < i13 + i12) {
                this.f22612e = Arrays.copyOf(bArr2, (i13 + i12) * 2);
            }
            System.arraycopy(bArr, i10, this.f22612e, this.f22610c, i12);
            this.f22610c += i12;
        }

        public boolean b(int i10, int i11) {
            int i12 = this.f22609b;
            if (i12 != 0) {
                if (i12 != 1) {
                    if (i12 != 2) {
                        if (i12 != 3) {
                            if (i12 == 4) {
                                if (i10 == 179 || i10 == 181) {
                                    this.f22610c -= i11;
                                    this.f22608a = false;
                                    return true;
                                }
                            } else {
                                throw new IllegalStateException();
                            }
                        } else if ((i10 & 240) != 32) {
                            oe.y.i("H263Reader", "Unexpected start code value");
                            c();
                        } else {
                            this.f22611d = this.f22610c;
                            this.f22609b = 4;
                        }
                    } else if (i10 > 31) {
                        oe.y.i("H263Reader", "Unexpected start code value");
                        c();
                    } else {
                        this.f22609b = 3;
                    }
                } else if (i10 != 181) {
                    oe.y.i("H263Reader", "Unexpected start code value");
                    c();
                } else {
                    this.f22609b = 2;
                }
            } else if (i10 == 176) {
                this.f22609b = 1;
                this.f22608a = true;
            }
            byte[] bArr = f22607f;
            a(bArr, 0, bArr.length);
            return false;
        }

        public void c() {
            this.f22608a = false;
            this.f22610c = 0;
            this.f22609b = 0;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final uc.b0 f22613a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f22614b;

        /* renamed from: c  reason: collision with root package name */
        private boolean f22615c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f22616d;

        /* renamed from: e  reason: collision with root package name */
        private int f22617e;

        /* renamed from: f  reason: collision with root package name */
        private int f22618f;

        /* renamed from: g  reason: collision with root package name */
        private long f22619g;

        /* renamed from: h  reason: collision with root package name */
        private long f22620h;

        public b(uc.b0 b0Var) {
            this.f22613a = b0Var;
        }

        public void a(byte[] bArr, int i10, int i11) {
            boolean z10;
            if (this.f22615c) {
                int i12 = this.f22618f;
                int i13 = (i10 + 1) - i12;
                if (i13 < i11) {
                    if (((bArr[i13] & 192) >> 6) == 0) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    this.f22616d = z10;
                    this.f22615c = false;
                    return;
                }
                this.f22618f = i12 + (i11 - i10);
            }
        }

        public void b(long j10, int i10, boolean z10) {
            if (this.f22617e == 182 && z10 && this.f22614b) {
                long j11 = this.f22620h;
                if (j11 != -9223372036854775807L) {
                    this.f22613a.a(j11, this.f22616d ? 1 : 0, (int) (j10 - this.f22619g), i10, null);
                }
            }
            if (this.f22617e != 179) {
                this.f22619g = j10;
            }
        }

        public void c(int i10, long j10) {
            boolean z10;
            this.f22617e = i10;
            this.f22616d = false;
            boolean z11 = true;
            if (i10 != 182 && i10 != 179) {
                z10 = false;
            } else {
                z10 = true;
            }
            this.f22614b = z10;
            if (i10 != 182) {
                z11 = false;
            }
            this.f22615c = z11;
            this.f22618f = 0;
            this.f22620h = j10;
        }

        public void d() {
            this.f22614b = false;
            this.f22615c = false;
            this.f22616d = false;
            this.f22617e = -1;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(k0 k0Var) {
        this.f22596a = k0Var;
        if (k0Var != null) {
            this.f22600e = new u(178, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
            this.f22597b = new oe.h0();
            return;
        }
        this.f22600e = null;
        this.f22597b = null;
    }

    private static Format f(a aVar, int i10, String str) {
        byte[] copyOf = Arrays.copyOf(aVar.f22612e, aVar.f22610c);
        oe.g0 g0Var = new oe.g0(copyOf);
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
                oe.y.i("H263Reader", "Invalid aspect ratio");
            } else {
                f10 = h11 / h12;
            }
        } else {
            float[] fArr = f22595l;
            if (h10 < fArr.length) {
                f10 = fArr[h10];
            } else {
                oe.y.i("H263Reader", "Invalid aspect ratio");
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
            oe.y.i("H263Reader", "Unhandled video object layer shape");
        }
        g0Var.q();
        int h13 = g0Var.h(16);
        g0Var.q();
        if (g0Var.g()) {
            if (h13 == 0) {
                oe.y.i("H263Reader", "Invalid vop_increment_time_resolution");
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

    @Override // ed.m
    public void a(oe.h0 h0Var) {
        int i10;
        oe.a.i(this.f22601f);
        oe.a.i(this.f22604i);
        int f10 = h0Var.f();
        int g10 = h0Var.g();
        byte[] e10 = h0Var.e();
        this.f22602g += h0Var.a();
        this.f22604i.e(h0Var, h0Var.a());
        while (true) {
            int c10 = oe.d0.c(e10, f10, g10, this.f22598c);
            if (c10 == g10) {
                break;
            }
            int i11 = c10 + 3;
            int i12 = h0Var.e()[i11] & 255;
            int i13 = c10 - f10;
            int i14 = 0;
            if (!this.f22605j) {
                if (i13 > 0) {
                    this.f22599d.a(e10, f10, c10);
                }
                if (i13 < 0) {
                    i10 = -i13;
                } else {
                    i10 = 0;
                }
                if (this.f22599d.b(i12, i10)) {
                    uc.b0 b0Var = this.f22604i;
                    a aVar = this.f22599d;
                    b0Var.c(f(aVar, aVar.f22611d, (String) oe.a.e(this.f22603h)));
                    this.f22605j = true;
                }
            }
            this.f22601f.a(e10, f10, c10);
            u uVar = this.f22600e;
            if (uVar != null) {
                if (i13 > 0) {
                    uVar.a(e10, f10, c10);
                } else {
                    i14 = -i13;
                }
                if (this.f22600e.b(i14)) {
                    u uVar2 = this.f22600e;
                    ((oe.h0) w0.j(this.f22597b)).S(this.f22600e.f22739d, oe.d0.q(uVar2.f22739d, uVar2.f22740e));
                    ((k0) w0.j(this.f22596a)).a(this.f22606k, this.f22597b);
                }
                if (i12 == 178 && h0Var.e()[c10 + 2] == 1) {
                    this.f22600e.e(i12);
                }
            }
            int i15 = g10 - c10;
            this.f22601f.b(this.f22602g - i15, i15, this.f22605j);
            this.f22601f.c(i12, this.f22606k);
            f10 = i11;
        }
        if (!this.f22605j) {
            this.f22599d.a(e10, f10, g10);
        }
        this.f22601f.a(e10, f10, g10);
        u uVar3 = this.f22600e;
        if (uVar3 != null) {
            uVar3.a(e10, f10, g10);
        }
    }

    @Override // ed.m
    public void b() {
        oe.d0.a(this.f22598c);
        this.f22599d.c();
        b bVar = this.f22601f;
        if (bVar != null) {
            bVar.d();
        }
        u uVar = this.f22600e;
        if (uVar != null) {
            uVar.d();
        }
        this.f22602g = 0L;
        this.f22606k = -9223372036854775807L;
    }

    @Override // ed.m
    public void c(uc.m mVar, i0.d dVar) {
        dVar.a();
        this.f22603h = dVar.b();
        uc.b0 c10 = mVar.c(dVar.c(), 2);
        this.f22604i = c10;
        this.f22601f = new b(c10);
        k0 k0Var = this.f22596a;
        if (k0Var != null) {
            k0Var.b(mVar, dVar);
        }
    }

    @Override // ed.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f22606k = j10;
        }
    }

    @Override // ed.m
    public void d() {
    }
}
