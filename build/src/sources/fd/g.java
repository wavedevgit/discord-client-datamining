package fd;

import android.media.MediaCodec;
import android.media.MediaFormat;
import android.os.Handler;
import android.os.HandlerThread;
import java.util.ArrayDeque;
import ne.w0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g extends MediaCodec.Callback {

    /* renamed from: b  reason: collision with root package name */
    private final HandlerThread f24950b;

    /* renamed from: c  reason: collision with root package name */
    private Handler f24951c;

    /* renamed from: h  reason: collision with root package name */
    private MediaFormat f24956h;

    /* renamed from: i  reason: collision with root package name */
    private MediaFormat f24957i;

    /* renamed from: j  reason: collision with root package name */
    private MediaCodec.CodecException f24958j;

    /* renamed from: k  reason: collision with root package name */
    private long f24959k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f24960l;

    /* renamed from: m  reason: collision with root package name */
    private IllegalStateException f24961m;

    /* renamed from: a  reason: collision with root package name */
    private final Object f24949a = new Object();

    /* renamed from: d  reason: collision with root package name */
    private final k f24952d = new k();

    /* renamed from: e  reason: collision with root package name */
    private final k f24953e = new k();

    /* renamed from: f  reason: collision with root package name */
    private final ArrayDeque f24954f = new ArrayDeque();

    /* renamed from: g  reason: collision with root package name */
    private final ArrayDeque f24955g = new ArrayDeque();

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(HandlerThread handlerThread) {
        this.f24950b = handlerThread;
    }

    private void b(MediaFormat mediaFormat) {
        this.f24953e.a(-2);
        this.f24955g.add(mediaFormat);
    }

    private void f() {
        if (!this.f24955g.isEmpty()) {
            this.f24957i = (MediaFormat) this.f24955g.getLast();
        }
        this.f24952d.b();
        this.f24953e.b();
        this.f24954f.clear();
        this.f24955g.clear();
    }

    private boolean i() {
        if (this.f24959k <= 0 && !this.f24960l) {
            return false;
        }
        return true;
    }

    private void j() {
        k();
        l();
    }

    private void k() {
        IllegalStateException illegalStateException = this.f24961m;
        if (illegalStateException == null) {
            return;
        }
        this.f24961m = null;
        throw illegalStateException;
    }

    private void l() {
        MediaCodec.CodecException codecException = this.f24958j;
        if (codecException == null) {
            return;
        }
        this.f24958j = null;
        throw codecException;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void m() {
        synchronized (this.f24949a) {
            try {
                if (this.f24960l) {
                    return;
                }
                long j10 = this.f24959k - 1;
                this.f24959k = j10;
                if (j10 > 0) {
                    return;
                }
                if (j10 < 0) {
                    n(new IllegalStateException());
                } else {
                    f();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private void n(IllegalStateException illegalStateException) {
        synchronized (this.f24949a) {
            this.f24961m = illegalStateException;
        }
    }

    public int c() {
        synchronized (this.f24949a) {
            try {
                j();
                int i10 = -1;
                if (i()) {
                    return -1;
                }
                if (!this.f24952d.d()) {
                    i10 = this.f24952d.e();
                }
                return i10;
            } finally {
            }
        }
    }

    public int d(MediaCodec.BufferInfo bufferInfo) {
        synchronized (this.f24949a) {
            try {
                j();
                if (i()) {
                    return -1;
                }
                if (this.f24953e.d()) {
                    return -1;
                }
                int e10 = this.f24953e.e();
                if (e10 >= 0) {
                    ne.a.i(this.f24956h);
                    MediaCodec.BufferInfo bufferInfo2 = (MediaCodec.BufferInfo) this.f24954f.remove();
                    bufferInfo.set(bufferInfo2.offset, bufferInfo2.size, bufferInfo2.presentationTimeUs, bufferInfo2.flags);
                } else if (e10 == -2) {
                    this.f24956h = (MediaFormat) this.f24955g.remove();
                }
                return e10;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void e() {
        synchronized (this.f24949a) {
            this.f24959k++;
            ((Handler) w0.j(this.f24951c)).post(new Runnable() { // from class: fd.f
                @Override // java.lang.Runnable
                public final void run() {
                    g.this.m();
                }
            });
        }
    }

    public MediaFormat g() {
        MediaFormat mediaFormat;
        synchronized (this.f24949a) {
            try {
                mediaFormat = this.f24956h;
                if (mediaFormat == null) {
                    throw new IllegalStateException();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return mediaFormat;
    }

    public void h(MediaCodec mediaCodec) {
        boolean z10;
        if (this.f24951c == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        this.f24950b.start();
        Handler handler = new Handler(this.f24950b.getLooper());
        mediaCodec.setCallback(this, handler);
        this.f24951c = handler;
    }

    public void o() {
        synchronized (this.f24949a) {
            this.f24960l = true;
            this.f24950b.quit();
            f();
        }
    }

    @Override // android.media.MediaCodec.Callback
    public void onError(MediaCodec mediaCodec, MediaCodec.CodecException codecException) {
        synchronized (this.f24949a) {
            this.f24958j = codecException;
        }
    }

    @Override // android.media.MediaCodec.Callback
    public void onInputBufferAvailable(MediaCodec mediaCodec, int i10) {
        synchronized (this.f24949a) {
            this.f24952d.a(i10);
        }
    }

    @Override // android.media.MediaCodec.Callback
    public void onOutputBufferAvailable(MediaCodec mediaCodec, int i10, MediaCodec.BufferInfo bufferInfo) {
        synchronized (this.f24949a) {
            try {
                MediaFormat mediaFormat = this.f24957i;
                if (mediaFormat != null) {
                    b(mediaFormat);
                    this.f24957i = null;
                }
                this.f24953e.a(i10);
                this.f24954f.add(bufferInfo);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // android.media.MediaCodec.Callback
    public void onOutputFormatChanged(MediaCodec mediaCodec, MediaFormat mediaFormat) {
        synchronized (this.f24949a) {
            b(mediaFormat);
            this.f24957i = null;
        }
    }
}
