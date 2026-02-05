package sl;

import android.media.MediaCodec;
import java.nio.ByteBuffer;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h implements a {
    @Override // sl.a
    public void a(ll.c sourceFrame, ll.c targetFrame) {
        ByteBuffer byteBuffer;
        Intrinsics.checkNotNullParameter(sourceFrame, "sourceFrame");
        Intrinsics.checkNotNullParameter(targetFrame, "targetFrame");
        ByteBuffer byteBuffer2 = sourceFrame.f36938b;
        if (byteBuffer2 != null && (byteBuffer = targetFrame.f36938b) != null) {
            byteBuffer.put(byteBuffer2);
            targetFrame.f36938b.flip();
            MediaCodec.BufferInfo bufferInfo = targetFrame.f36939c;
            bufferInfo.offset = 0;
            MediaCodec.BufferInfo bufferInfo2 = sourceFrame.f36939c;
            bufferInfo.size = bufferInfo2.size;
            bufferInfo.presentationTimeUs = bufferInfo2.presentationTimeUs;
            bufferInfo.flags = bufferInfo2.flags;
            return;
        }
        throw new IllegalArgumentException("Source or target frame doesn't have a buffer, cannot process it!");
    }

    @Override // sl.a
    public void release() {
    }
}
