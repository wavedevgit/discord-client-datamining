package io.sentry.android.replay.video;

import android.media.MediaCodec;
import android.media.MediaFormat;
import android.media.MediaMuxer;
import java.nio.ByteBuffer;
import java.util.concurrent.TimeUnit;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final long f29025a;

    /* renamed from: b  reason: collision with root package name */
    private final MediaMuxer f29026b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f29027c;

    /* renamed from: d  reason: collision with root package name */
    private int f29028d;

    /* renamed from: e  reason: collision with root package name */
    private int f29029e;

    /* renamed from: f  reason: collision with root package name */
    private long f29030f;

    public b(String path, float f10) {
        Intrinsics.checkNotNullParameter(path, "path");
        this.f29025a = ((float) TimeUnit.SECONDS.toMicros(1L)) / f10;
        this.f29026b = new MediaMuxer(path, 0);
    }

    public long a() {
        if (this.f29029e == 0) {
            return 0L;
        }
        return TimeUnit.MILLISECONDS.convert(this.f29030f + this.f29025a, TimeUnit.MICROSECONDS);
    }

    public boolean b() {
        return this.f29027c;
    }

    public void c(ByteBuffer encodedData, MediaCodec.BufferInfo bufferInfo) {
        Intrinsics.checkNotNullParameter(encodedData, "encodedData");
        Intrinsics.checkNotNullParameter(bufferInfo, "bufferInfo");
        long j10 = this.f29025a;
        int i10 = this.f29029e;
        this.f29029e = i10 + 1;
        long j11 = j10 * i10;
        this.f29030f = j11;
        bufferInfo.presentationTimeUs = j11;
        this.f29026b.writeSampleData(this.f29028d, encodedData, bufferInfo);
    }

    public void d() {
        this.f29026b.stop();
        this.f29026b.release();
    }

    public void e(MediaFormat videoFormat) {
        Intrinsics.checkNotNullParameter(videoFormat, "videoFormat");
        this.f29028d = this.f29026b.addTrack(videoFormat);
        this.f29026b.start();
        this.f29027c = true;
    }
}
