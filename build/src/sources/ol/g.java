package ol;

import android.media.MediaCodec;
import java.nio.ByteBuffer;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final int f44415a;

    /* renamed from: b  reason: collision with root package name */
    private final ByteBuffer f44416b;

    /* renamed from: c  reason: collision with root package name */
    private final MediaCodec.BufferInfo f44417c;

    public g(int i10, ByteBuffer buffer, MediaCodec.BufferInfo info) {
        Intrinsics.checkNotNullParameter(buffer, "buffer");
        Intrinsics.checkNotNullParameter(info, "info");
        this.f44415a = i10;
        ByteBuffer allocate = ByteBuffer.allocate(buffer.capacity());
        Intrinsics.checkNotNullExpressionValue(allocate, "allocate(buffer.capacity())");
        this.f44416b = allocate;
        MediaCodec.BufferInfo bufferInfo = new MediaCodec.BufferInfo();
        this.f44417c = bufferInfo;
        bufferInfo.set(0, info.size, info.presentationTimeUs, info.flags);
        allocate.put(buffer);
        allocate.flip();
    }

    public final ByteBuffer a() {
        return this.f44416b;
    }

    public final MediaCodec.BufferInfo b() {
        return this.f44417c;
    }

    public final int c() {
        return this.f44415a;
    }
}
