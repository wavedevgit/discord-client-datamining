package ce;

import ae.f;
import ae.g;
import java.util.List;
import oe.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends f {

    /* renamed from: o  reason: collision with root package name */
    private final b f7529o;

    public a(List list) {
        super("DvbDecoder");
        h0 h0Var = new h0((byte[]) list.get(0));
        this.f7529o = new b(h0Var.N(), h0Var.N());
    }

    @Override // ae.f
    protected g z(byte[] bArr, int i10, boolean z10) {
        if (z10) {
            this.f7529o.r();
        }
        return new c(this.f7529o.b(bArr, i10));
    }
}
