package il;

import android.media.MediaCodec;
import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    public final int f28239a;

    /* renamed from: b  reason: collision with root package name */
    public final ByteBuffer f28240b;

    /* renamed from: c  reason: collision with root package name */
    public final MediaCodec.BufferInfo f28241c;

    public c(int i10, ByteBuffer byteBuffer, MediaCodec.BufferInfo bufferInfo) {
        this.f28239a = i10;
        this.f28240b = byteBuffer;
        if (bufferInfo == null) {
            this.f28241c = new MediaCodec.BufferInfo();
        } else {
            this.f28241c = bufferInfo;
        }
    }
}
