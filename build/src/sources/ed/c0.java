package ed;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import ed.i0;
import oe.s0;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c0 implements i0 {

    /* renamed from: a  reason: collision with root package name */
    private final b0 f21272a;

    /* renamed from: b  reason: collision with root package name */
    private final oe.h0 f21273b = new oe.h0(32);

    /* renamed from: c  reason: collision with root package name */
    private int f21274c;

    /* renamed from: d  reason: collision with root package name */
    private int f21275d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f21276e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f21277f;

    public c0(b0 b0Var) {
        this.f21272a = b0Var;
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
        if (this.f21277f) {
            if (z10) {
                this.f21277f = false;
                h0Var.U(i11);
                this.f21275d = 0;
            } else {
                return;
            }
        }
        while (h0Var.a() > 0) {
            int i12 = this.f21275d;
            if (i12 < 3) {
                if (i12 == 0) {
                    int H = h0Var.H();
                    h0Var.U(h0Var.f() - 1);
                    if (H == 255) {
                        this.f21277f = true;
                        return;
                    }
                }
                int min = Math.min(h0Var.a(), 3 - this.f21275d);
                h0Var.l(this.f21273b.e(), this.f21275d, min);
                int i13 = this.f21275d + min;
                this.f21275d = i13;
                if (i13 == 3) {
                    this.f21273b.U(0);
                    this.f21273b.T(3);
                    this.f21273b.V(1);
                    int H2 = this.f21273b.H();
                    int H3 = this.f21273b.H();
                    if ((H2 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                        z11 = true;
                    } else {
                        z11 = false;
                    }
                    this.f21276e = z11;
                    this.f21274c = (((H2 & 15) << 8) | H3) + 3;
                    int b10 = this.f21273b.b();
                    int i14 = this.f21274c;
                    if (b10 < i14) {
                        this.f21273b.c(Math.min(4098, Math.max(i14, this.f21273b.b() * 2)));
                    }
                }
            } else {
                int min2 = Math.min(h0Var.a(), this.f21274c - this.f21275d);
                h0Var.l(this.f21273b.e(), this.f21275d, min2);
                int i15 = this.f21275d + min2;
                this.f21275d = i15;
                int i16 = this.f21274c;
                if (i15 != i16) {
                    continue;
                } else {
                    if (this.f21276e) {
                        if (w0.t(this.f21273b.e(), 0, this.f21274c, -1) != 0) {
                            this.f21277f = true;
                            return;
                        }
                        this.f21273b.T(this.f21274c - 4);
                    } else {
                        this.f21273b.T(i16);
                    }
                    this.f21273b.U(0);
                    this.f21272a.a(this.f21273b);
                    this.f21275d = 0;
                }
            }
        }
    }

    @Override // ed.i0
    public void b() {
        this.f21277f = true;
    }

    @Override // ed.i0
    public void c(s0 s0Var, uc.m mVar, i0.d dVar) {
        this.f21272a.c(s0Var, mVar, dVar);
        this.f21277f = true;
    }
}
