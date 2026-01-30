package il;

import android.media.MediaCodec;
import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    public final int f28592a;

    /* renamed from: b  reason: collision with root package name */
    public final ByteBuffer f28593b;

    /* renamed from: c  reason: collision with root package name */
    public final MediaCodec.BufferInfo f28594c;

    public c(int i10, ByteBuffer byteBuffer, MediaCodec.BufferInfo bufferInfo) {
        this.f28592a = i10;
        this.f28593b = byteBuffer;
        if (bufferInfo == null) {
            this.f28594c = new MediaCodec.BufferInfo();
        } else {
            this.f28594c = bufferInfo;
        }
    }
}
