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
    private final HandlerThread f24161b;

    /* renamed from: c  reason: collision with root package name */
    private Handler f24162c;

    /* renamed from: h  reason: collision with root package name */
    private MediaFormat f24167h;

    /* renamed from: i  reason: collision with root package name */
    private MediaFormat f24168i;

    /* renamed from: j  reason: collision with root package name */
    private MediaCodec.CodecException f24169j;

    /* renamed from: k  reason: collision with root package name */
    private long f24170k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f24171l;

    /* renamed from: m  reason: collision with root package name */
    private IllegalStateException f24172m;

    /* renamed from: a  reason: collision with root package name */
    private final Object f24160a = new Object();

    /* renamed from: d  reason: collision with root package name */
    private final k f24163d = new k();

    /* renamed from: e  reason: collision with root package name */
    private final k f24164e = new k();

    /* renamed from: f  reason: collision with root package name */
    private final ArrayDeque f24165f = new ArrayDeque();

    /* renamed from: g  reason: collision with root package name */
    private final ArrayDeque f24166g = new ArrayDeque();

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(HandlerThread handlerThread) {
        this.f24161b = handlerThread;
    }

    private void b(MediaFormat mediaFormat) {
        this.f24164e.a(-2);
        this.f24166g.add(mediaFormat);
    }

    private void f() {
        if (!this.f24166g.isEmpty()) {
            this.f24168i = (MediaFormat) this.f24166g.getLast();
        }
        this.f24163d.b();
        this.f24164e.b();
        this.f24165f.clear();
        this.f24166g.clear();
    }

    private boolean i() {
        if (this.f24170k <= 0 && !this.f24171l) {
            return false;
        }
        return true;
    }

    private void j() {
        k();
        l();
    }

    private void k() {
        IllegalStateException illegalStateException = this.f24172m;
        if (illegalStateException == null) {
            return;
        }
        this.f24172m = null;
        throw illegalStateException;
    }

    private void l() {
        MediaCodec.CodecException codecException = this.f24169j;
        if (codecException == null) {
            return;
        }
        this.f24169j = null;
        throw codecException;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void m() {
        synchronized (this.f24160a) {
            try {
                if (this.f24171l) {
                    return;
                }
                long j10 = this.f24170k - 1;
                this.f24170k = j10;
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
        synchronized (this.f24160a) {
            this.f24172m = illegalStateException;
        }
    }

    public int c() {
        synchronized (this.f24160a) {
            try {
                j();
                int i10 = -1;
                if (i()) {
                    return -1;
                }
                if (!this.f24163d.d()) {
                    i10 = this.f24163d.e();
                }
                return i10;
            } finally {
            }
        }
    }

    public int d(MediaCodec.BufferInfo bufferInfo) {
        synchronized (this.f24160a) {
            try {
                j();
                if (i()) {
                    return -1;
                }
                if (this.f24164e.d()) {
                    return -1;
                }
                int e10 = this.f24164e.e();
                if (e10 >= 0) {
                    ne.a.i(this.f24167h);
                    MediaCodec.BufferInfo bufferInfo2 = (MediaCodec.BufferInfo) this.f24165f.remove();
                    bufferInfo.set(bufferInfo2.offset, bufferInfo2.size, bufferInfo2.presentationTimeUs, bufferInfo2.flags);
                } else if (e10 == -2) {
                    this.f24167h = (MediaFormat) this.f24166g.remove();
                }
                return e10;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void e() {
        synchronized (this.f24160a) {
            this.f24170k++;
            ((Handler) w0.j(this.f24162c)).post(new Runnable() { // from class: fd.f
                @Override // java.lang.Runnable
                public final void run() {
                    g.this.m();
                }
            });
        }
    }

    public MediaFormat g() {
        MediaFormat mediaFormat;
        synchronized (this.f24160a) {
            try {
                mediaFormat = this.f24167h;
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
        if (this.f24162c == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        this.f24161b.start();
        Handler handler = new Handler(this.f24161b.getLooper());
        mediaCodec.setCallback(this, handler);
        this.f24162c = handler;
    }

    public void o() {
        synchronized (this.f24160a) {
            this.f24171l = true;
            this.f24161b.quit();
            f();
        }
    }

    @Override // android.media.MediaCodec.Callback
    public void onError(MediaCodec mediaCodec, MediaCodec.CodecException codecException) {
        synchronized (this.f24160a) {
            this.f24169j = codecException;
        }
    }

    @Override // android.media.MediaCodec.Callback
    public void onInputBufferAvailable(MediaCodec mediaCodec, int i10) {
        synchronized (this.f24160a) {
            this.f24163d.a(i10);
        }
    }

    @Override // android.media.MediaCodec.Callback
    public void onOutputBufferAvailable(MediaCodec mediaCodec, int i10, MediaCodec.BufferInfo bufferInfo) {
        synchronized (this.f24160a) {
            try {
                MediaFormat mediaFormat = this.f24168i;
                if (mediaFormat != null) {
                    b(mediaFormat);
                    this.f24168i = null;
                }
                this.f24164e.a(i10);
                this.f24165f.add(bufferInfo);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // android.media.MediaCodec.Callback
    public void onOutputFormatChanged(MediaCodec mediaCodec, MediaFormat mediaFormat) {
        synchronized (this.f24160a) {
            b(mediaFormat);
            this.f24168i = null;
        }
    }
}
