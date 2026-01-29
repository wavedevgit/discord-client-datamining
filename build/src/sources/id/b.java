package id;

import com.google.android.exoplayer2.metadata.Metadata;
import gd.e;
import java.nio.ByteBuffer;
import java.util.Arrays;
import ne.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b extends e {
    @Override // gd.e
    protected Metadata b(gd.c cVar, ByteBuffer byteBuffer) {
        return new Metadata(c(new h0(byteBuffer.array(), byteBuffer.limit())));
    }

    public a c(h0 h0Var) {
        return new a((String) ne.a.e(h0Var.B()), (String) ne.a.e(h0Var.B()), h0Var.A(), h0Var.A(), Arrays.copyOfRange(h0Var.e(), h0Var.f(), h0Var.g()));
    }
}
