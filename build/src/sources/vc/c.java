package vc;

import ne.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c implements a {

    /* renamed from: a  reason: collision with root package name */
    public final int f52040a;

    /* renamed from: b  reason: collision with root package name */
    public final int f52041b;

    /* renamed from: c  reason: collision with root package name */
    public final int f52042c;

    /* renamed from: d  reason: collision with root package name */
    public final int f52043d;

    private c(int i10, int i11, int i12, int i13) {
        this.f52040a = i10;
        this.f52041b = i11;
        this.f52042c = i12;
        this.f52043d = i13;
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
        if ((this.f52041b & 16) == 16) {
            return true;
        }
        return false;
    }

    @Override // vc.a
    public int getType() {
        return 1751742049;
    }
}
