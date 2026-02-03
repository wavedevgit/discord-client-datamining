package vc;

import ne.h0;
import ne.w0;
import ne.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d implements a {

    /* renamed from: a  reason: collision with root package name */
    public final int f51030a;

    /* renamed from: b  reason: collision with root package name */
    public final int f51031b;

    /* renamed from: c  reason: collision with root package name */
    public final int f51032c;

    /* renamed from: d  reason: collision with root package name */
    public final int f51033d;

    /* renamed from: e  reason: collision with root package name */
    public final int f51034e;

    /* renamed from: f  reason: collision with root package name */
    public final int f51035f;

    private d(int i10, int i11, int i12, int i13, int i14, int i15) {
        this.f51030a = i10;
        this.f51031b = i11;
        this.f51032c = i12;
        this.f51033d = i13;
        this.f51034e = i14;
        this.f51035f = i15;
    }

    public static d c(h0 h0Var) {
        int u10 = h0Var.u();
        h0Var.V(12);
        int u11 = h0Var.u();
        int u12 = h0Var.u();
        int u13 = h0Var.u();
        h0Var.V(4);
        int u14 = h0Var.u();
        int u15 = h0Var.u();
        h0Var.V(8);
        return new d(u10, u11, u12, u13, u14, u15);
    }

    public long a() {
        return w0.X0(this.f51034e, this.f51032c * 1000000, this.f51033d);
    }

    public int b() {
        int i10 = this.f51030a;
        if (i10 != 1935960438) {
            if (i10 != 1935963489) {
                if (i10 != 1937012852) {
                    y.i("AviStreamHeaderChunk", "Found unsupported streamType fourCC: " + Integer.toHexString(this.f51030a));
                    return -1;
                }
                return 3;
            }
            return 1;
        }
        return 2;
    }

    @Override // vc.a
    public int getType() {
        return 1752331379;
    }
}
