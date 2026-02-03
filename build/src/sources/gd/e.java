package gd;

import com.google.android.exoplayer2.metadata.Metadata;
import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class e implements a {
    @Override // gd.a
    public final Metadata a(c cVar) {
        boolean z10;
        ByteBuffer byteBuffer = (ByteBuffer) ne.a.e(cVar.f47497i);
        if (byteBuffer.position() == 0 && byteBuffer.hasArray() && byteBuffer.arrayOffset() == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.a(z10);
        if (cVar.l()) {
            return null;
        }
        return b(cVar, byteBuffer);
    }

    protected abstract Metadata b(c cVar, ByteBuffer byteBuffer);
}
