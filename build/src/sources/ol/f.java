package ol;

import android.media.MediaCodec;
import android.media.MediaFormat;
import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface f {
    String a();

    void b(int i10, ByteBuffer byteBuffer, MediaCodec.BufferInfo bufferInfo);

    int c(MediaFormat mediaFormat, int i10);

    void release();
}
