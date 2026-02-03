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
    private final long f29640a;

    /* renamed from: b  reason: collision with root package name */
    private final MediaMuxer f29641b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f29642c;

    /* renamed from: d  reason: collision with root package name */
    private int f29643d;

    /* renamed from: e  reason: collision with root package name */
    private int f29644e;

    /* renamed from: f  reason: collision with root package name */
    private long f29645f;

    public b(String path, float f10) {
        Intrinsics.checkNotNullParameter(path, "path");
        this.f29640a = ((float) TimeUnit.SECONDS.toMicros(1L)) / f10;
        this.f29641b = new MediaMuxer(path, 0);
    }

    public long a() {
        if (this.f29644e == 0) {
            return 0L;
        }
        return TimeUnit.MILLISECONDS.convert(this.f29645f + this.f29640a, TimeUnit.MICROSECONDS);
    }

    public boolean b() {
        return this.f29642c;
    }

    public void c(ByteBuffer encodedData, MediaCodec.BufferInfo bufferInfo) {
        Intrinsics.checkNotNullParameter(encodedData, "encodedData");
        Intrinsics.checkNotNullParameter(bufferInfo, "bufferInfo");
        long j10 = this.f29640a;
        int i10 = this.f29644e;
        this.f29644e = i10 + 1;
        long j11 = j10 * i10;
        this.f29645f = j11;
        bufferInfo.presentationTimeUs = j11;
        this.f29641b.writeSampleData(this.f29643d, encodedData, bufferInfo);
    }

    public void d() {
        this.f29641b.stop();
        this.f29641b.release();
    }

    public void e(MediaFormat videoFormat) {
        Intrinsics.checkNotNullParameter(videoFormat, "videoFormat");
        this.f29643d = this.f29641b.addTrack(videoFormat);
        this.f29641b.start();
        this.f29642c = true;
    }
}
