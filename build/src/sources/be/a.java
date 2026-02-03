package be;

import java.util.List;
import ne.h0;
import zd.f;
import zd.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends f {

    /* renamed from: o  reason: collision with root package name */
    private final b f6548o;

    public a(List list) {
        super("DvbDecoder");
        h0 h0Var = new h0((byte[]) list.get(0));
        this.f6548o = new b(h0Var.N(), h0Var.N());
    }

    @Override // zd.f
    protected g z(byte[] bArr, int i10, boolean z10) {
        if (z10) {
            this.f6548o.r();
        }
        return new c(this.f6548o.b(bArr, i10));
    }
}
