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
        ByteBuffer byteBuffer2 = sourceFrame.f40942b;
        if (byteBuffer2 != null && (byteBuffer = targetFrame.f40942b) != null) {
            byteBuffer.put(byteBuffer2);
            targetFrame.f40942b.flip();
            MediaCodec.BufferInfo bufferInfo = targetFrame.f40943c;
            bufferInfo.offset = 0;
            MediaCodec.BufferInfo bufferInfo2 = sourceFrame.f40943c;
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
