package com.google.android.exoplayer2.decoder;

import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DecoderCounters {

    /* renamed from: a  reason: collision with root package name */
    public int f13083a;

    /* renamed from: b  reason: collision with root package name */
    public int f13084b;

    /* renamed from: c  reason: collision with root package name */
    public int f13085c;

    /* renamed from: d  reason: collision with root package name */
    public int f13086d;

    /* renamed from: e  reason: collision with root package name */
    public int f13087e;

    /* renamed from: f  reason: collision with root package name */
    public int f13088f;

    /* renamed from: g  reason: collision with root package name */
    public int f13089g;

    /* renamed from: h  reason: collision with root package name */
    public int f13090h;

    /* renamed from: i  reason: collision with root package name */
    public int f13091i;

    /* renamed from: j  reason: collision with root package name */
    public int f13092j;

    /* renamed from: k  reason: collision with root package name */
    public long f13093k;

    /* renamed from: l  reason: collision with root package name */
    public int f13094l;

    private void b(long j10, int i10) {
        this.f13093k += j10;
        this.f13094l += i10;
    }

    public void a(long j10) {
        b(j10, 1);
    }

    public synchronized void c() {
    }

    public String toString() {
        return w0.D("DecoderCounters {\n decoderInits=%s,\n decoderReleases=%s\n queuedInputBuffers=%s\n skippedInputBuffers=%s\n renderedOutputBuffers=%s\n skippedOutputBuffers=%s\n droppedBuffers=%s\n droppedInputBuffers=%s\n maxConsecutiveDroppedBuffers=%s\n droppedToKeyframeEvents=%s\n totalVideoFrameProcessingOffsetUs=%s\n videoFrameProcessingOffsetCount=%s\n}", Integer.valueOf(this.f13083a), Integer.valueOf(this.f13084b), Integer.valueOf(this.f13085c), Integer.valueOf(this.f13086d), Integer.valueOf(this.f13087e), Integer.valueOf(this.f13088f), Integer.valueOf(this.f13089g), Integer.valueOf(this.f13090h), Integer.valueOf(this.f13091i), Integer.valueOf(this.f13092j), Long.valueOf(this.f13093k), Integer.valueOf(this.f13094l));
    }
}
