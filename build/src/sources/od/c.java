package od;

import com.google.android.exoplayer2.metadata.Metadata;
import java.nio.ByteBuffer;
import oe.g0;
import oe.h0;
import oe.s0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c extends hd.e {

    /* renamed from: a  reason: collision with root package name */
    private final h0 f38847a = new h0();

    /* renamed from: b  reason: collision with root package name */
    private final g0 f38848b = new g0();

    /* renamed from: c  reason: collision with root package name */
    private s0 f38849c;

    @Override // hd.e
    protected Metadata b(hd.c cVar, ByteBuffer byteBuffer) {
        Metadata.b eVar;
        s0 s0Var = this.f38849c;
        if (s0Var == null || cVar.f27107t != s0Var.e()) {
            s0 s0Var2 = new s0(cVar.f46232p);
            this.f38849c = s0Var2;
            s0Var2.a(cVar.f46232p - cVar.f27107t);
        }
        byte[] array = byteBuffer.array();
        int limit = byteBuffer.limit();
        this.f38847a.S(array, limit);
        this.f38848b.o(array, limit);
        this.f38848b.r(39);
        long h10 = (this.f38848b.h(1) << 32) | this.f38848b.h(32);
        this.f38848b.r(20);
        int h11 = this.f38848b.h(12);
        int h12 = this.f38848b.h(8);
        this.f38847a.V(14);
        if (h12 != 0) {
            if (h12 != 255) {
                if (h12 != 4) {
                    if (h12 != 5) {
                        if (h12 != 6) {
                            eVar = null;
                        } else {
                            eVar = g.a(this.f38847a, h10, this.f38849c);
                        }
                    } else {
                        eVar = d.a(this.f38847a, h10, this.f38849c);
                    }
                } else {
                    eVar = f.a(this.f38847a);
                }
            } else {
                eVar = a.a(this.f38847a, h11, h10);
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
