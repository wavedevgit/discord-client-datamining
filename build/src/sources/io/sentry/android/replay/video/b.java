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
    private final long f27842a;

    /* renamed from: b  reason: collision with root package name */
    private final MediaMuxer f27843b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f27844c;

    /* renamed from: d  reason: collision with root package name */
    private int f27845d;

    /* renamed from: e  reason: collision with root package name */
    private int f27846e;

    /* renamed from: f  reason: collision with root package name */
    private long f27847f;

    public b(String path, float f10) {
        Intrinsics.checkNotNullParameter(path, "path");
        this.f27842a = ((float) TimeUnit.SECONDS.toMicros(1L)) / f10;
        this.f27843b = new MediaMuxer(path, 0);
    }

    public long a() {
        if (this.f27846e == 0) {
            return 0L;
        }
        return TimeUnit.MILLISECONDS.convert(this.f27847f + this.f27842a, TimeUnit.MICROSECONDS);
    }

    public boolean b() {
        return this.f27844c;
    }

    public void c(ByteBuffer encodedData, MediaCodec.BufferInfo bufferInfo) {
        Intrinsics.checkNotNullParameter(encodedData, "encodedData");
        Intrinsics.checkNotNullParameter(bufferInfo, "bufferInfo");
        long j10 = this.f27842a;
        int i10 = this.f27846e;
        this.f27846e = i10 + 1;
        long j11 = j10 * i10;
        this.f27847f = j11;
        bufferInfo.presentationTimeUs = j11;
        this.f27843b.writeSampleData(this.f27845d, encodedData, bufferInfo);
    }

    public void d() {
        this.f27843b.stop();
        this.f27843b.release();
    }

    public void e(MediaFormat videoFormat) {
        Intrinsics.checkNotNullParameter(videoFormat, "videoFormat");
        this.f27845d = this.f27843b.addTrack(videoFormat);
        this.f27843b.start();
        this.f27844c = true;
    }
}
