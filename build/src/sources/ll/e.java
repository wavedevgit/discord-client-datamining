package ll;

import android.media.MediaCodec;
import android.media.MediaFormat;
import android.view.Surface;
import ml.e;
import org.webrtc.MediaStreamTrack;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e implements b {

    /* renamed from: a  reason: collision with root package name */
    private MediaCodec f36944a;

    /* renamed from: c  reason: collision with root package name */
    private boolean f36946c;

    /* renamed from: b  reason: collision with root package name */
    private boolean f36945b = true;

    /* renamed from: d  reason: collision with root package name */
    private final MediaCodec.BufferInfo f36947d = new MediaCodec.BufferInfo();

    private void i() {
        if (!this.f36946c) {
            this.f36944a.start();
            this.f36946c = true;
        }
    }

    @Override // ll.b
    public c a(int i10) {
        if (i10 < 0) {
            return null;
        }
        return new c(i10, this.f36944a.getInputBuffer(i10), null);
    }

    @Override // ll.b
    public int b(long j10) {
        return this.f36944a.dequeueOutputBuffer(this.f36947d, j10);
    }

    @Override // ll.b
    public int c(long j10) {
        return this.f36944a.dequeueInputBuffer(j10);
    }

    @Override // ll.b
    public Surface createInputSurface() {
        return this.f36944a.createInputSurface();
    }

    @Override // ll.b
    public c d(int i10) {
        if (i10 >= 0) {
            return new c(i10, this.f36944a.getOutputBuffer(i10), this.f36947d);
        }
        return null;
    }

    @Override // ll.b
    public void e(c cVar) {
        MediaCodec mediaCodec = this.f36944a;
        int i10 = cVar.f36937a;
        MediaCodec.BufferInfo bufferInfo = cVar.f36939c;
        mediaCodec.queueInputBuffer(i10, bufferInfo.offset, bufferInfo.size, bufferInfo.presentationTimeUs, bufferInfo.flags);
    }

    @Override // ll.b
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
        MediaCodec e10 = ul.c.e(mediaFormat, null, true, e.a.ENCODER_NOT_FOUND, e.a.ENCODER_FORMAT_NOT_FOUND, e.a.ENCODER_CONFIGURATION_ERROR);
        this.f36944a = e10;
        if (e10 == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f36945b = z10;
    }

    @Override // ll.b
    public void g() {
        this.f36944a.signalEndOfInputStream();
    }

    @Override // ll.b
    public String getName() {
        try {
            return this.f36944a.getName();
        } catch (IllegalStateException e10) {
            throw new ml.e(e.a.CODEC_IN_RELEASED_STATE, e10);
        }
    }

    @Override // ll.b
    public MediaFormat getOutputFormat() {
        return this.f36944a.getOutputFormat();
    }

    @Override // ll.b
    public void h(int i10) {
        this.f36944a.releaseOutputBuffer(i10, false);
    }

    @Override // ll.b
    public boolean isRunning() {
        return this.f36946c;
    }

    @Override // ll.b
    public void release() {
        if (!this.f36945b) {
            this.f36944a.release();
            this.f36945b = true;
        }
    }

    @Override // ll.b
    public void start() {
        try {
            i();
        } catch (Exception e10) {
            throw new ml.e(e.a.INTERNAL_CODEC_ERROR, e10);
        }
    }

    @Override // ll.b
    public void stop() {
        if (this.f36946c) {
            this.f36944a.stop();
            this.f36946c = false;
        }
    }
}
