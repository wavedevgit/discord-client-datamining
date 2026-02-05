package rl;

import android.media.MediaCodec;
import java.nio.ByteBuffer;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final int f48883a;

    /* renamed from: b  reason: collision with root package name */
    private final ByteBuffer f48884b;

    /* renamed from: c  reason: collision with root package name */
    private final MediaCodec.BufferInfo f48885c;

    public g(int i10, ByteBuffer buffer, MediaCodec.BufferInfo info) {
        Intrinsics.checkNotNullParameter(buffer, "buffer");
        Intrinsics.checkNotNullParameter(info, "info");
        this.f48883a = i10;
        ByteBuffer allocate = ByteBuffer.allocate(buffer.capacity());
        Intrinsics.checkNotNullExpressionValue(allocate, "allocate(buffer.capacity())");
        this.f48884b = allocate;
        MediaCodec.BufferInfo bufferInfo = new MediaCodec.BufferInfo();
        this.f48885c = bufferInfo;
        bufferInfo.set(0, info.size, info.presentationTimeUs, info.flags);
        allocate.put(buffer);
        allocate.flip();
    }

    public final ByteBuffer a() {
        return this.f48884b;
    }

    public final MediaCodec.BufferInfo b() {
        return this.f48885c;
    }

    public final int c() {
        return this.f48883a;
    }
}
