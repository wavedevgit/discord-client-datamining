package ul;

import android.media.MediaCodec;
import java.nio.ByteBuffer;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h implements a {
    @Override // ul.a
    public void a(nl.c sourceFrame, nl.c targetFrame) {
        ByteBuffer byteBuffer;
        Intrinsics.checkNotNullParameter(sourceFrame, "sourceFrame");
        Intrinsics.checkNotNullParameter(targetFrame, "targetFrame");
        ByteBuffer byteBuffer2 = sourceFrame.f40894b;
        if (byteBuffer2 != null && (byteBuffer = targetFrame.f40894b) != null) {
            byteBuffer.put(byteBuffer2);
            targetFrame.f40894b.flip();
            MediaCodec.BufferInfo bufferInfo = targetFrame.f40895c;
            bufferInfo.offset = 0;
            MediaCodec.BufferInfo bufferInfo2 = sourceFrame.f40895c;
            bufferInfo.size = bufferInfo2.size;
            bufferInfo.presentationTimeUs = bufferInfo2.presentationTimeUs;
            bufferInfo.flags = bufferInfo2.flags;
            return;
        }
        throw new IllegalArgumentException("Source or target frame doesn't have a buffer, cannot process it!");
    }

    @Override // ul.a
    public void release() {
    }
}
