package dd;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import dd.i0;
import ne.s0;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c0 implements i0 {

    /* renamed from: a  reason: collision with root package name */
    private final b0 f20383a;

    /* renamed from: b  reason: collision with root package name */
    private final ne.h0 f20384b = new ne.h0(32);

    /* renamed from: c  reason: collision with root package name */
    private int f20385c;

    /* renamed from: d  reason: collision with root package name */
    private int f20386d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f20387e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f20388f;

    public c0(b0 b0Var) {
        this.f20383a = b0Var;
    }

    @Override // dd.i0
    public void a(s0 s0Var, tc.m mVar, i0.d dVar) {
        this.f20383a.a(s0Var, mVar, dVar);
        this.f20388f = true;
    }

    @Override // dd.i0
    public void b(ne.h0 h0Var, int i10) {
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
        if (this.f20388f) {
            if (z10) {
                this.f20388f = false;
                h0Var.U(i11);
                this.f20386d = 0;
            } else {
                return;
            }
        }
        while (h0Var.a() > 0) {
            int i12 = this.f20386d;
            if (i12 < 3) {
                if (i12 == 0) {
                    int H = h0Var.H();
                    h0Var.U(h0Var.f() - 1);
                    if (H == 255) {
                        this.f20388f = true;
                        return;
                    }
                }
                int min = Math.min(h0Var.a(), 3 - this.f20386d);
                h0Var.l(this.f20384b.e(), this.f20386d, min);
                int i13 = this.f20386d + min;
                this.f20386d = i13;
                if (i13 == 3) {
                    this.f20384b.U(0);
                    this.f20384b.T(3);
                    this.f20384b.V(1);
                    int H2 = this.f20384b.H();
                    int H3 = this.f20384b.H();
                    if ((H2 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                        z11 = true;
                    } else {
                        z11 = false;
                    }
                    this.f20387e = z11;
                    this.f20385c = (((H2 & 15) << 8) | H3) + 3;
                    int b10 = this.f20384b.b();
                    int i14 = this.f20385c;
                    if (b10 < i14) {
                        this.f20384b.c(Math.min(4098, Math.max(i14, this.f20384b.b() * 2)));
                    }
                }
            } else {
                int min2 = Math.min(h0Var.a(), this.f20385c - this.f20386d);
                h0Var.l(this.f20384b.e(), this.f20386d, min2);
                int i15 = this.f20386d + min2;
                this.f20386d = i15;
                int i16 = this.f20385c;
                if (i15 != i16) {
                    continue;
                } else {
                    if (this.f20387e) {
                        if (w0.t(this.f20384b.e(), 0, this.f20385c, -1) != 0) {
                            this.f20388f = true;
                            return;
                        }
                        this.f20384b.T(this.f20385c - 4);
                    } else {
                        this.f20384b.T(i16);
                    }
                    this.f20384b.U(0);
                    this.f20383a.b(this.f20384b);
                    this.f20386d = 0;
                }
            }
        }
    }

    @Override // dd.i0
    public void c() {
        this.f20388f = true;
    }
}
