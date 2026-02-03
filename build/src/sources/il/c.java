package il;

import android.media.MediaCodec;
import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    public final int f28462a;

    /* renamed from: b  reason: collision with root package name */
    public final ByteBuffer f28463b;

    /* renamed from: c  reason: collision with root package name */
    public final MediaCodec.BufferInfo f28464c;

    public c(int i10, ByteBuffer byteBuffer, MediaCodec.BufferInfo bufferInfo) {
        this.f28462a = i10;
        this.f28463b = byteBuffer;
        if (bufferInfo == null) {
            this.f28464c = new MediaCodec.BufferInfo();
        } else {
            this.f28464c = bufferInfo;
        }
    }
}
