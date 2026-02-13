package ql;

import android.media.MediaCodec;
import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    public final int f46023a;

    /* renamed from: b  reason: collision with root package name */
    public final ByteBuffer f46024b;

    /* renamed from: c  reason: collision with root package name */
    public final MediaCodec.BufferInfo f46025c;

    public c(int i10, ByteBuffer byteBuffer, MediaCodec.BufferInfo bufferInfo) {
        this.f46023a = i10;
        this.f46024b = byteBuffer;
        if (bufferInfo == null) {
            this.f46025c = new MediaCodec.BufferInfo();
        } else {
            this.f46025c = bufferInfo;
        }
    }
}
