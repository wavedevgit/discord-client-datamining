package ll;

import android.media.MediaCodec;
import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    public final int f36937a;

    /* renamed from: b  reason: collision with root package name */
    public final ByteBuffer f36938b;

    /* renamed from: c  reason: collision with root package name */
    public final MediaCodec.BufferInfo f36939c;

    public c(int i10, ByteBuffer byteBuffer, MediaCodec.BufferInfo bufferInfo) {
        this.f36937a = i10;
        this.f36938b = byteBuffer;
        if (bufferInfo == null) {
            this.f36939c = new MediaCodec.BufferInfo();
        } else {
            this.f36939c = bufferInfo;
        }
    }
}
