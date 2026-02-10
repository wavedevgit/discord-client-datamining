package ol;

import android.media.MediaCodec;
import android.media.MediaFormat;
import android.view.Surface;
import org.webrtc.MediaStreamTrack;
import pl.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e implements b {

    /* renamed from: a  reason: collision with root package name */
    private MediaCodec f42375a;

    /* renamed from: c  reason: collision with root package name */
    private boolean f42377c;

    /* renamed from: b  reason: collision with root package name */
    private boolean f42376b = true;

    /* renamed from: d  reason: collision with root package name */
    private final MediaCodec.BufferInfo f42378d = new MediaCodec.BufferInfo();

    private void i() {
        if (!this.f42377c) {
            this.f42375a.start();
            this.f42377c = true;
        }
    }

    @Override // ol.b
    public c a(int i10) {
        if (i10 < 0) {
            return null;
        }
        return new c(i10, this.f42375a.getInputBuffer(i10), null);
    }

    @Override // ol.b
    public int b(long j10) {
        return this.f42375a.dequeueOutputBuffer(this.f42378d, j10);
    }

    @Override // ol.b
    public int c(long j10) {
        return this.f42375a.dequeueInputBuffer(j10);
    }

    @Override // ol.b
    public Surface createInputSurface() {
        return this.f42375a.createInputSurface();
    }

    @Override // ol.b
    public c d(int i10) {
        if (i10 >= 0) {
            return new c(i10, this.f42375a.getOutputBuffer(i10), this.f42378d);
        }
        return null;
    }

    @Override // ol.b
    public void e(c cVar) {
        MediaCodec mediaCodec = this.f42375a;
        int i10 = cVar.f42368a;
        MediaCodec.BufferInfo bufferInfo = cVar.f42370c;
        mediaCodec.queueInputBuffer(i10, bufferInfo.offset, bufferInfo.size, bufferInfo.presentationTimeUs, bufferInfo.flags);
    }

    @Override // ol.b
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
        MediaCodec e10 = xl.c.e(mediaFormat, null, true, e.a.ENCODER_NOT_FOUND, e.a.ENCODER_FORMAT_NOT_FOUND, e.a.ENCODER_CONFIGURATION_ERROR);
        this.f42375a = e10;
        if (e10 == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f42376b = z10;
    }

    @Override // ol.b
    public void g() {
        this.f42375a.signalEndOfInputStream();
    }

    @Override // ol.b
    public String getName() {
        try {
            return this.f42375a.getName();
        } catch (IllegalStateException e10) {
            throw new pl.e(e.a.CODEC_IN_RELEASED_STATE, e10);
        }
    }

    @Override // ol.b
    public MediaFormat getOutputFormat() {
        return this.f42375a.getOutputFormat();
    }

    @Override // ol.b
    public void h(int i10) {
        this.f42375a.releaseOutputBuffer(i10, false);
    }

    @Override // ol.b
    public boolean isRunning() {
        return this.f42377c;
    }

    @Override // ol.b
    public void release() {
        if (!this.f42376b) {
            this.f42375a.release();
            this.f42376b = true;
        }
    }

    @Override // ol.b
    public void start() {
        try {
            i();
        } catch (Exception e10) {
            throw new pl.e(e.a.INTERNAL_CODEC_ERROR, e10);
        }
    }

    @Override // ol.b
    public void stop() {
        if (this.f42377c) {
            this.f42375a.stop();
            this.f42377c = false;
        }
    }
}
