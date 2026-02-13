package wl;

import android.media.MediaCodec;
import java.nio.ByteBuffer;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final int f53480a;

    /* renamed from: b  reason: collision with root package name */
    private final ByteBuffer f53481b;

    /* renamed from: c  reason: collision with root package name */
    private final MediaCodec.BufferInfo f53482c;

    public g(int i10, ByteBuffer buffer, MediaCodec.BufferInfo info) {
        Intrinsics.checkNotNullParameter(buffer, "buffer");
        Intrinsics.checkNotNullParameter(info, "info");
        this.f53480a = i10;
        ByteBuffer allocate = ByteBuffer.allocate(buffer.capacity());
        Intrinsics.checkNotNullExpressionValue(allocate, "allocate(buffer.capacity())");
        this.f53481b = allocate;
        MediaCodec.BufferInfo bufferInfo = new MediaCodec.BufferInfo();
        this.f53482c = bufferInfo;
        bufferInfo.set(0, info.size, info.presentationTimeUs, info.flags);
        allocate.put(buffer);
        allocate.flip();
    }

    public final ByteBuffer a() {
        return this.f53481b;
    }

    public final MediaCodec.BufferInfo b() {
        return this.f53482c;
    }

    public final int c() {
        return this.f53480a;
    }
}
