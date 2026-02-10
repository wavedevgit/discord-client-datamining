package ol;

import android.media.MediaCodec;
import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    public final int f42368a;

    /* renamed from: b  reason: collision with root package name */
    public final ByteBuffer f42369b;

    /* renamed from: c  reason: collision with root package name */
    public final MediaCodec.BufferInfo f42370c;

    public c(int i10, ByteBuffer byteBuffer, MediaCodec.BufferInfo bufferInfo) {
        this.f42368a = i10;
        this.f42369b = byteBuffer;
        if (bufferInfo == null) {
            this.f42370c = new MediaCodec.BufferInfo();
        } else {
            this.f42370c = bufferInfo;
        }
    }
}
