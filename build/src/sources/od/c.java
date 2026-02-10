package od;

import com.google.android.exoplayer2.metadata.Metadata;
import java.nio.ByteBuffer;
import oe.g0;
import oe.h0;
import oe.s0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c extends hd.e {

    /* renamed from: a  reason: collision with root package name */
    private final h0 f38846a = new h0();

    /* renamed from: b  reason: collision with root package name */
    private final g0 f38847b = new g0();

    /* renamed from: c  reason: collision with root package name */
    private s0 f38848c;

    @Override // hd.e
    protected Metadata b(hd.c cVar, ByteBuffer byteBuffer) {
        Metadata.b eVar;
        s0 s0Var = this.f38848c;
        if (s0Var == null || cVar.f27106t != s0Var.e()) {
            s0 s0Var2 = new s0(cVar.f46231p);
            this.f38848c = s0Var2;
            s0Var2.a(cVar.f46231p - cVar.f27106t);
        }
        byte[] array = byteBuffer.array();
        int limit = byteBuffer.limit();
        this.f38846a.S(array, limit);
        this.f38847b.o(array, limit);
        this.f38847b.r(39);
        long h10 = (this.f38847b.h(1) << 32) | this.f38847b.h(32);
        this.f38847b.r(20);
        int h11 = this.f38847b.h(12);
        int h12 = this.f38847b.h(8);
        this.f38846a.V(14);
        if (h12 != 0) {
            if (h12 != 255) {
                if (h12 != 4) {
                    if (h12 != 5) {
                        if (h12 != 6) {
                            eVar = null;
                        } else {
                            eVar = g.a(this.f38846a, h10, this.f38848c);
                        }
                    } else {
                        eVar = d.a(this.f38846a, h10, this.f38848c);
                    }
                } else {
                    eVar = f.a(this.f38846a);
                }
            } else {
                eVar = a.a(this.f38846a, h11, h10);
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
