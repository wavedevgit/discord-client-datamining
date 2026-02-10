package jd;

import com.google.android.exoplayer2.metadata.Metadata;
import hd.e;
import java.nio.ByteBuffer;
import java.util.Arrays;
import oe.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b extends e {
    @Override // hd.e
    protected Metadata b(hd.c cVar, ByteBuffer byteBuffer) {
        return new Metadata(c(new h0(byteBuffer.array(), byteBuffer.limit())));
    }

    public a c(h0 h0Var) {
        return new a((String) oe.a.e(h0Var.B()), (String) oe.a.e(h0Var.B()), h0Var.A(), h0Var.A(), Arrays.copyOfRange(h0Var.e(), h0Var.f(), h0Var.g()));
    }
}
