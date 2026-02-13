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
    private final long f29594a;

    /* renamed from: b  reason: collision with root package name */
    private final MediaMuxer f29595b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f29596c;

    /* renamed from: d  reason: collision with root package name */
    private int f29597d;

    /* renamed from: e  reason: collision with root package name */
    private int f29598e;

    /* renamed from: f  reason: collision with root package name */
    private long f29599f;

    public b(String path, float f10) {
        Intrinsics.checkNotNullParameter(path, "path");
        this.f29594a = ((float) TimeUnit.SECONDS.toMicros(1L)) / f10;
        this.f29595b = new MediaMuxer(path, 0);
    }

    public long a() {
        if (this.f29598e == 0) {
            return 0L;
        }
        return TimeUnit.MILLISECONDS.convert(this.f29599f + this.f29594a, TimeUnit.MICROSECONDS);
    }

    public boolean b() {
        return this.f29596c;
    }

    public void c(ByteBuffer encodedData, MediaCodec.BufferInfo bufferInfo) {
        Intrinsics.checkNotNullParameter(encodedData, "encodedData");
        Intrinsics.checkNotNullParameter(bufferInfo, "bufferInfo");
        long j10 = this.f29594a;
        int i10 = this.f29598e;
        this.f29598e = i10 + 1;
        long j11 = j10 * i10;
        this.f29599f = j11;
        bufferInfo.presentationTimeUs = j11;
        this.f29595b.writeSampleData(this.f29597d, encodedData, bufferInfo);
    }

    public void d() {
        this.f29595b.stop();
        this.f29595b.release();
    }

    public void e(MediaFormat videoFormat) {
        Intrinsics.checkNotNullParameter(videoFormat, "videoFormat");
        this.f29597d = this.f29595b.addTrack(videoFormat);
        this.f29595b.start();
        this.f29596c = true;
    }
}
