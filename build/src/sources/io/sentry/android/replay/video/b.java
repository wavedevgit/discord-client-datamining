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
    private final long f29279a;

    /* renamed from: b  reason: collision with root package name */
    private final MediaMuxer f29280b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f29281c;

    /* renamed from: d  reason: collision with root package name */
    private int f29282d;

    /* renamed from: e  reason: collision with root package name */
    private int f29283e;

    /* renamed from: f  reason: collision with root package name */
    private long f29284f;

    public b(String path, float f10) {
        Intrinsics.checkNotNullParameter(path, "path");
        this.f29279a = ((float) TimeUnit.SECONDS.toMicros(1L)) / f10;
        this.f29280b = new MediaMuxer(path, 0);
    }

    public long a() {
        if (this.f29283e == 0) {
            return 0L;
        }
        return TimeUnit.MILLISECONDS.convert(this.f29284f + this.f29279a, TimeUnit.MICROSECONDS);
    }

    public boolean b() {
        return this.f29281c;
    }

    public void c(ByteBuffer encodedData, MediaCodec.BufferInfo bufferInfo) {
        Intrinsics.checkNotNullParameter(encodedData, "encodedData");
        Intrinsics.checkNotNullParameter(bufferInfo, "bufferInfo");
        long j10 = this.f29279a;
        int i10 = this.f29283e;
        this.f29283e = i10 + 1;
        long j11 = j10 * i10;
        this.f29284f = j11;
        bufferInfo.presentationTimeUs = j11;
        this.f29280b.writeSampleData(this.f29282d, encodedData, bufferInfo);
    }

    public void d() {
        this.f29280b.stop();
        this.f29280b.release();
    }

    public void e(MediaFormat videoFormat) {
        Intrinsics.checkNotNullParameter(videoFormat, "videoFormat");
        this.f29282d = this.f29280b.addTrack(videoFormat);
        this.f29280b.start();
        this.f29281c = true;
    }
}
