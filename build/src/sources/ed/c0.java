package ed;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import ed.i0;
import oe.s0;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c0 implements i0 {

    /* renamed from: a  reason: collision with root package name */
    private final b0 f22439a;

    /* renamed from: b  reason: collision with root package name */
    private final oe.h0 f22440b = new oe.h0(32);

    /* renamed from: c  reason: collision with root package name */
    private int f22441c;

    /* renamed from: d  reason: collision with root package name */
    private int f22442d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f22443e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f22444f;

    public c0(b0 b0Var) {
        this.f22439a = b0Var;
    }

    @Override // ed.i0
    public void a(oe.h0 h0Var, int i10) {
        boolean z10;
        int i11;
        boolean z11;
        if ((i10 & 1) != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            i11 = h0Var.f() + h0Var.H();
        } else {
            i11 = -1;
        }
        if (this.f22444f) {
            if (z10) {
                this.f22444f = false;
                h0Var.U(i11);
                this.f22442d = 0;
            } else {
                return;
            }
        }
        while (h0Var.a() > 0) {
            int i12 = this.f22442d;
            if (i12 < 3) {
                if (i12 == 0) {
                    int H = h0Var.H();
                    h0Var.U(h0Var.f() - 1);
                    if (H == 255) {
                        this.f22444f = true;
                        return;
                    }
                }
                int min = Math.min(h0Var.a(), 3 - this.f22442d);
                h0Var.l(this.f22440b.e(), this.f22442d, min);
                int i13 = this.f22442d + min;
                this.f22442d = i13;
                if (i13 == 3) {
                    this.f22440b.U(0);
                    this.f22440b.T(3);
                    this.f22440b.V(1);
                    int H2 = this.f22440b.H();
                    int H3 = this.f22440b.H();
                    if ((H2 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                        z11 = true;
                    } else {
                        z11 = false;
                    }
                    this.f22443e = z11;
                    this.f22441c = (((H2 & 15) << 8) | H3) + 3;
                    int b10 = this.f22440b.b();
                    int i14 = this.f22441c;
                    if (b10 < i14) {
                        this.f22440b.c(Math.min(4098, Math.max(i14, this.f22440b.b() * 2)));
                    }
                }
            } else {
                int min2 = Math.min(h0Var.a(), this.f22441c - this.f22442d);
                h0Var.l(this.f22440b.e(), this.f22442d, min2);
                int i15 = this.f22442d + min2;
                this.f22442d = i15;
                int i16 = this.f22441c;
                if (i15 != i16) {
                    continue;
                } else {
                    if (this.f22443e) {
                        if (w0.t(this.f22440b.e(), 0, this.f22441c, -1) != 0) {
                            this.f22444f = true;
                            return;
                        }
                        this.f22440b.T(this.f22441c - 4);
                    } else {
                        this.f22440b.T(i16);
                    }
                    this.f22440b.U(0);
                    this.f22439a.a(this.f22440b);
                    this.f22442d = 0;
                }
            }
        }
    }

    @Override // ed.i0
    public void b() {
        this.f22444f = true;
    }

    @Override // ed.i0
    public void c(s0 s0Var, uc.m mVar, i0.d dVar) {
        this.f22439a.c(s0Var, mVar, dVar);
        this.f22444f = true;
    }
}
