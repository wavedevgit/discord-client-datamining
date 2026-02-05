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
    private final long f28698a;

    /* renamed from: b  reason: collision with root package name */
    private final MediaMuxer f28699b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f28700c;

    /* renamed from: d  reason: collision with root package name */
    private int f28701d;

    /* renamed from: e  reason: collision with root package name */
    private int f28702e;

    /* renamed from: f  reason: collision with root package name */
    private long f28703f;

    public b(String path, float f10) {
        Intrinsics.checkNotNullParameter(path, "path");
        this.f28698a = ((float) TimeUnit.SECONDS.toMicros(1L)) / f10;
        this.f28699b = new MediaMuxer(path, 0);
    }

    public long a() {
        if (this.f28702e == 0) {
            return 0L;
        }
        return TimeUnit.MILLISECONDS.convert(this.f28703f + this.f28698a, TimeUnit.MICROSECONDS);
    }

    public boolean b() {
        return this.f28700c;
    }

    public void c(ByteBuffer encodedData, MediaCodec.BufferInfo bufferInfo) {
        Intrinsics.checkNotNullParameter(encodedData, "encodedData");
        Intrinsics.checkNotNullParameter(bufferInfo, "bufferInfo");
        long j10 = this.f28698a;
        int i10 = this.f28702e;
        this.f28702e = i10 + 1;
        long j11 = j10 * i10;
        this.f28703f = j11;
        bufferInfo.presentationTimeUs = j11;
        this.f28699b.writeSampleData(this.f28701d, encodedData, bufferInfo);
    }

    public void d() {
        this.f28699b.stop();
        this.f28699b.release();
    }

    public void e(MediaFormat videoFormat) {
        Intrinsics.checkNotNullParameter(videoFormat, "videoFormat");
        this.f28701d = this.f28699b.addTrack(videoFormat);
        this.f28699b.start();
        this.f28700c = true;
    }
}
