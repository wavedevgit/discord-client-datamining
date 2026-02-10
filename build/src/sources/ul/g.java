package ul;

import android.media.MediaCodec;
import java.nio.ByteBuffer;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final int f51699a;

    /* renamed from: b  reason: collision with root package name */
    private final ByteBuffer f51700b;

    /* renamed from: c  reason: collision with root package name */
    private final MediaCodec.BufferInfo f51701c;

    public g(int i10, ByteBuffer buffer, MediaCodec.BufferInfo info) {
        Intrinsics.checkNotNullParameter(buffer, "buffer");
        Intrinsics.checkNotNullParameter(info, "info");
        this.f51699a = i10;
        ByteBuffer allocate = ByteBuffer.allocate(buffer.capacity());
        Intrinsics.checkNotNullExpressionValue(allocate, "allocate(buffer.capacity())");
        this.f51700b = allocate;
        MediaCodec.BufferInfo bufferInfo = new MediaCodec.BufferInfo();
        this.f51701c = bufferInfo;
        bufferInfo.set(0, info.size, info.presentationTimeUs, info.flags);
        allocate.put(buffer);
        allocate.flip();
    }

    public final ByteBuffer a() {
        return this.f51700b;
    }

    public final MediaCodec.BufferInfo b() {
        return this.f51701c;
    }

    public final int c() {
        return this.f51699a;
    }
}
