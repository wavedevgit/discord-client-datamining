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
    private final long f27890a;

    /* renamed from: b  reason: collision with root package name */
    private final MediaMuxer f27891b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f27892c;

    /* renamed from: d  reason: collision with root package name */
    private int f27893d;

    /* renamed from: e  reason: collision with root package name */
    private int f27894e;

    /* renamed from: f  reason: collision with root package name */
    private long f27895f;

    public b(String path, float f10) {
        Intrinsics.checkNotNullParameter(path, "path");
        this.f27890a = ((float) TimeUnit.SECONDS.toMicros(1L)) / f10;
        this.f27891b = new MediaMuxer(path, 0);
    }

    public long a() {
        if (this.f27894e == 0) {
            return 0L;
        }
        return TimeUnit.MILLISECONDS.convert(this.f27895f + this.f27890a, TimeUnit.MICROSECONDS);
    }

    public boolean b() {
        return this.f27892c;
    }

    public void c(ByteBuffer encodedData, MediaCodec.BufferInfo bufferInfo) {
        Intrinsics.checkNotNullParameter(encodedData, "encodedData");
        Intrinsics.checkNotNullParameter(bufferInfo, "bufferInfo");
        long j10 = this.f27890a;
        int i10 = this.f27894e;
        this.f27894e = i10 + 1;
        long j11 = j10 * i10;
        this.f27895f = j11;
        bufferInfo.presentationTimeUs = j11;
        this.f27891b.writeSampleData(this.f27893d, encodedData, bufferInfo);
    }

    public void d() {
        this.f27891b.stop();
        this.f27891b.release();
    }

    public void e(MediaFormat videoFormat) {
        Intrinsics.checkNotNullParameter(videoFormat, "videoFormat");
        this.f27893d = this.f27891b.addTrack(videoFormat);
        this.f27891b.start();
        this.f27892c = true;
    }
}
