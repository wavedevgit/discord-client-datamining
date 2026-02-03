package vc;

import ne.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c implements a {

    /* renamed from: a  reason: collision with root package name */
    public final int f51026a;

    /* renamed from: b  reason: collision with root package name */
    public final int f51027b;

    /* renamed from: c  reason: collision with root package name */
    public final int f51028c;

    /* renamed from: d  reason: collision with root package name */
    public final int f51029d;

    private c(int i10, int i11, int i12, int i13) {
        this.f51026a = i10;
        this.f51027b = i11;
        this.f51028c = i12;
        this.f51029d = i13;
    }

    public static c b(h0 h0Var) {
        int u10 = h0Var.u();
        h0Var.V(8);
        int u11 = h0Var.u();
        int u12 = h0Var.u();
        h0Var.V(4);
        int u13 = h0Var.u();
        h0Var.V(12);
        return new c(u10, u11, u12, u13);
    }

    public boolean a() {
        if ((this.f51027b & 16) == 16) {
            return true;
        }
        return false;
    }

    @Override // vc.a
    public int getType() {
        return 1751742049;
    }
}
