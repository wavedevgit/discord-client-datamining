package nl;

import android.media.MediaCodec;
import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    public final int f40893a;

    /* renamed from: b  reason: collision with root package name */
    public final ByteBuffer f40894b;

    /* renamed from: c  reason: collision with root package name */
    public final MediaCodec.BufferInfo f40895c;

    public c(int i10, ByteBuffer byteBuffer, MediaCodec.BufferInfo bufferInfo) {
        this.f40893a = i10;
        this.f40894b = byteBuffer;
        if (bufferInfo == null) {
            this.f40895c = new MediaCodec.BufferInfo();
        } else {
            this.f40895c = bufferInfo;
        }
    }
}
