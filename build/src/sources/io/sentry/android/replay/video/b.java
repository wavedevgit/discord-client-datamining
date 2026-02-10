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
    private final long f28090a;

    /* renamed from: b  reason: collision with root package name */
    private final MediaMuxer f28091b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f28092c;

    /* renamed from: d  reason: collision with root package name */
    private int f28093d;

    /* renamed from: e  reason: collision with root package name */
    private int f28094e;

    /* renamed from: f  reason: collision with root package name */
    private long f28095f;

    public b(String path, float f10) {
        Intrinsics.checkNotNullParameter(path, "path");
        this.f28090a = ((float) TimeUnit.SECONDS.toMicros(1L)) / f10;
        this.f28091b = new MediaMuxer(path, 0);
    }

    public long a() {
        if (this.f28094e == 0) {
            return 0L;
        }
        return TimeUnit.MILLISECONDS.convert(this.f28095f + this.f28090a, TimeUnit.MICROSECONDS);
    }

    public boolean b() {
        return this.f28092c;
    }

    public void c(ByteBuffer encodedData, MediaCodec.BufferInfo bufferInfo) {
        Intrinsics.checkNotNullParameter(encodedData, "encodedData");
        Intrinsics.checkNotNullParameter(bufferInfo, "bufferInfo");
        long j10 = this.f28090a;
        int i10 = this.f28094e;
        this.f28094e = i10 + 1;
        long j11 = j10 * i10;
        this.f28095f = j11;
        bufferInfo.presentationTimeUs = j11;
        this.f28091b.writeSampleData(this.f28093d, encodedData, bufferInfo);
    }

    public void d() {
        this.f28091b.stop();
        this.f28091b.release();
    }

    public void e(MediaFormat videoFormat) {
        Intrinsics.checkNotNullParameter(videoFormat, "videoFormat");
        this.f28093d = this.f28091b.addTrack(videoFormat);
        this.f28091b.start();
        this.f28092c = true;
    }
}
