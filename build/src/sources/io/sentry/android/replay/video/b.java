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
    private final long f29697a;

    /* renamed from: b  reason: collision with root package name */
    private final MediaMuxer f29698b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f29699c;

    /* renamed from: d  reason: collision with root package name */
    private int f29700d;

    /* renamed from: e  reason: collision with root package name */
    private int f29701e;

    /* renamed from: f  reason: collision with root package name */
    private long f29702f;

    public b(String path, float f10) {
        Intrinsics.checkNotNullParameter(path, "path");
        this.f29697a = ((float) TimeUnit.SECONDS.toMicros(1L)) / f10;
        this.f29698b = new MediaMuxer(path, 0);
    }

    public long a() {
        if (this.f29701e == 0) {
            return 0L;
        }
        return TimeUnit.MILLISECONDS.convert(this.f29702f + this.f29697a, TimeUnit.MICROSECONDS);
    }

    public boolean b() {
        return this.f29699c;
    }

    public void c(ByteBuffer encodedData, MediaCodec.BufferInfo bufferInfo) {
        Intrinsics.checkNotNullParameter(encodedData, "encodedData");
        Intrinsics.checkNotNullParameter(bufferInfo, "bufferInfo");
        long j10 = this.f29697a;
        int i10 = this.f29701e;
        this.f29701e = i10 + 1;
        long j11 = j10 * i10;
        this.f29702f = j11;
        bufferInfo.presentationTimeUs = j11;
        this.f29698b.writeSampleData(this.f29700d, encodedData, bufferInfo);
    }

    public void d() {
        this.f29698b.stop();
        this.f29698b.release();
    }

    public void e(MediaFormat videoFormat) {
        Intrinsics.checkNotNullParameter(videoFormat, "videoFormat");
        this.f29700d = this.f29698b.addTrack(videoFormat);
        this.f29698b.start();
        this.f29699c = true;
    }
}
