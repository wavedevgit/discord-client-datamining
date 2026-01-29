package il;

import android.media.MediaCodec;
import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    public final int f28576a;

    /* renamed from: b  reason: collision with root package name */
    public final ByteBuffer f28577b;

    /* renamed from: c  reason: collision with root package name */
    public final MediaCodec.BufferInfo f28578c;

    public c(int i10, ByteBuffer byteBuffer, MediaCodec.BufferInfo bufferInfo) {
        this.f28576a = i10;
        this.f28577b = byteBuffer;
        if (bufferInfo == null) {
            this.f28578c = new MediaCodec.BufferInfo();
        } else {
            this.f28578c = bufferInfo;
        }
    }
}
