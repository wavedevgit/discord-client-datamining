package vl;

import android.media.MediaCodec;
import java.nio.ByteBuffer;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h implements a {
    @Override // vl.a
    public void a(ol.c sourceFrame, ol.c targetFrame) {
        ByteBuffer byteBuffer;
        Intrinsics.checkNotNullParameter(sourceFrame, "sourceFrame");
        Intrinsics.checkNotNullParameter(targetFrame, "targetFrame");
        ByteBuffer byteBuffer2 = sourceFrame.f42369b;
        if (byteBuffer2 != null && (byteBuffer = targetFrame.f42369b) != null) {
            byteBuffer.put(byteBuffer2);
            targetFrame.f42369b.flip();
            MediaCodec.BufferInfo bufferInfo = targetFrame.f42370c;
            bufferInfo.offset = 0;
            MediaCodec.BufferInfo bufferInfo2 = sourceFrame.f42370c;
            bufferInfo.size = bufferInfo2.size;
            bufferInfo.presentationTimeUs = bufferInfo2.presentationTimeUs;
            bufferInfo.flags = bufferInfo2.flags;
            return;
        }
        throw new IllegalArgumentException("Source or target frame doesn't have a buffer, cannot process it!");
    }

    @Override // vl.a
    public void release() {
    }
}
