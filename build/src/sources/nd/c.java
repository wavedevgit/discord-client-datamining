package nd;

import com.google.android.exoplayer2.metadata.Metadata;
import java.nio.ByteBuffer;
import ne.g0;
import ne.h0;
import ne.s0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c extends gd.e {

    /* renamed from: a  reason: collision with root package name */
    private final h0 f39466a = new h0();

    /* renamed from: b  reason: collision with root package name */
    private final g0 f39467b = new g0();

    /* renamed from: c  reason: collision with root package name */
    private s0 f39468c;

    @Override // gd.e
    protected Metadata b(gd.c cVar, ByteBuffer byteBuffer) {
        Metadata.b eVar;
        s0 s0Var = this.f39468c;
        if (s0Var == null || cVar.f24676t != s0Var.e()) {
            s0 s0Var2 = new s0(cVar.f47563p);
            this.f39468c = s0Var2;
            s0Var2.a(cVar.f47563p - cVar.f24676t);
        }
        byte[] array = byteBuffer.array();
        int limit = byteBuffer.limit();
        this.f39466a.S(array, limit);
        this.f39467b.o(array, limit);
        this.f39467b.r(39);
        long h10 = (this.f39467b.h(1) << 32) | this.f39467b.h(32);
        this.f39467b.r(20);
        int h11 = this.f39467b.h(12);
        int h12 = this.f39467b.h(8);
        this.f39466a.V(14);
        if (h12 != 0) {
            if (h12 != 255) {
                if (h12 != 4) {
                    if (h12 != 5) {
                        if (h12 != 6) {
                            eVar = null;
                        } else {
                            eVar = g.a(this.f39466a, h10, this.f39468c);
                        }
                    } else {
                        eVar = d.a(this.f39466a, h10, this.f39468c);
                    }
                } else {
                    eVar = f.a(this.f39466a);
                }
            } else {
                eVar = a.a(this.f39466a, h11, h10);
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
