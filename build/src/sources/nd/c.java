package nd;

import com.google.android.exoplayer2.metadata.Metadata;
import java.nio.ByteBuffer;
import ne.g0;
import ne.h0;
import ne.s0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c extends gd.e {

    /* renamed from: a  reason: collision with root package name */
    private final h0 f40006a = new h0();

    /* renamed from: b  reason: collision with root package name */
    private final g0 f40007b = new g0();

    /* renamed from: c  reason: collision with root package name */
    private s0 f40008c;

    @Override // gd.e
    protected Metadata b(gd.c cVar, ByteBuffer byteBuffer) {
        Metadata.b eVar;
        s0 s0Var = this.f40008c;
        if (s0Var == null || cVar.f25977t != s0Var.e()) {
            s0 s0Var2 = new s0(cVar.f47499p);
            this.f40008c = s0Var2;
            s0Var2.a(cVar.f47499p - cVar.f25977t);
        }
        byte[] array = byteBuffer.array();
        int limit = byteBuffer.limit();
        this.f40006a.S(array, limit);
        this.f40007b.o(array, limit);
        this.f40007b.r(39);
        long h10 = (this.f40007b.h(1) << 32) | this.f40007b.h(32);
        this.f40007b.r(20);
        int h11 = this.f40007b.h(12);
        int h12 = this.f40007b.h(8);
        this.f40006a.V(14);
        if (h12 != 0) {
            if (h12 != 255) {
                if (h12 != 4) {
                    if (h12 != 5) {
                        if (h12 != 6) {
                            eVar = null;
                        } else {
                            eVar = g.a(this.f40006a, h10, this.f40008c);
                        }
                    } else {
                        eVar = d.a(this.f40006a, h10, this.f40008c);
                    }
                } else {
                    eVar = f.a(this.f40006a);
                }
            } else {
                eVar = a.a(this.f40006a, h11, h10);
            }
        } else {
            eVar = new e();
        }
        if (eVar == null) {
            return new Metadata(new Metadata.b[0]);
        }
        return new Metadata(eVar);
    }
}
