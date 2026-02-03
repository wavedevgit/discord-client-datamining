package il;

import android.media.MediaCodec;
import android.media.MediaFormat;
import android.view.Surface;
import jl.e;
import org.webrtc.MediaStreamTrack;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e implements b {

    /* renamed from: a  reason: collision with root package name */
    private MediaCodec f28246a;

    /* renamed from: c  reason: collision with root package name */
    private boolean f28248c;

    /* renamed from: b  reason: collision with root package name */
    private boolean f28247b = true;

    /* renamed from: d  reason: collision with root package name */
    private final MediaCodec.BufferInfo f28249d = new MediaCodec.BufferInfo();

    private void i() {
        if (!this.f28248c) {
            this.f28246a.start();
            this.f28248c = true;
        }
    }

    @Override // il.b
    public c a(int i10) {
        if (i10 < 0) {
            return null;
        }
        return new c(i10, this.f28246a.getInputBuffer(i10), null);
    }

    @Override // il.b
    public int b(long j10) {
        return this.f28246a.dequeueOutputBuffer(this.f28249d, j10);
    }

    @Override // il.b
    public void c(c cVar) {
        MediaCodec mediaCodec = this.f28246a;
        int i10 = cVar.f28239a;
        MediaCodec.BufferInfo bufferInfo = cVar.f28241c;
        mediaCodec.queueInputBuffer(i10, bufferInfo.offset, bufferInfo.size, bufferInfo.presentationTimeUs, bufferInfo.flags);
    }

    @Override // il.b
    public Surface createInputSurface() {
        return this.f28246a.createInputSurface();
    }

    @Override // il.b
    public int d(long j10) {
        return this.f28246a.dequeueInputBuffer(j10);
    }

    @Override // il.b
    public c e(int i10) {
        if (i10 >= 0) {
            return new c(i10, this.f28246a.getOutputBuffer(i10), this.f28249d);
        }
        return null;
    }

    @Override // il.b
    public void f(MediaFormat mediaFormat) {
        boolean z10;
        if (mediaFormat.containsKey("mime") && mediaFormat.getString("mime").startsWith(MediaStreamTrack.VIDEO_TRACK_KIND)) {
            if (!mediaFormat.containsKey("color-format")) {
                mediaFormat.setInteger("color-format", 2130708361);
            }
            if (!mediaFormat.containsKey("frame-rate")) {
                mediaFormat.setInteger("frame-rate", 30);
            }
        }
        MediaCodec e10 = rl.c.e(mediaFormat, null, true, e.a.ENCODER_NOT_FOUND, e.a.ENCODER_FORMAT_NOT_FOUND, e.a.ENCODER_CONFIGURATION_ERROR);
        this.f28246a = e10;
        if (e10 == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f28247b = z10;
    }

    @Override // il.b
    public void g() {
        this.f28246a.signalEndOfInputStream();
    }

    @Override // il.b
    public String getName() {
        try {
            return this.f28246a.getName();
        } catch (IllegalStateException e10) {
            throw new jl.e(e.a.CODEC_IN_RELEASED_STATE, e10);
        }
    }

    @Override // il.b
    public MediaFormat getOutputFormat() {
        return this.f28246a.getOutputFormat();
    }

    @Override // il.b
    public void h(int i10) {
        this.f28246a.releaseOutputBuffer(i10, false);
    }

    @Override // il.b
    public boolean isRunning() {
        return this.f28248c;
    }

    @Override // il.b
    public void release() {
        if (!this.f28247b) {
            this.f28246a.release();
            this.f28247b = true;
        }
    }

    @Override // il.b
    public void start() {
        try {
            i();
        } catch (Exception e10) {
            throw new jl.e(e.a.INTERNAL_CODEC_ERROR, e10);
        }
    }

    @Override // il.b
    public void stop() {
        if (this.f28248c) {
            this.f28246a.stop();
            this.f28248c = false;
        }
    }
}
