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
    private final HandlerThread f22778b;

    /* renamed from: c  reason: collision with root package name */
    private Handler f22779c;

    /* renamed from: h  reason: collision with root package name */
    private MediaFormat f22784h;

    /* renamed from: i  reason: collision with root package name */
    private MediaFormat f22785i;

    /* renamed from: j  reason: collision with root package name */
    private MediaCodec.CodecException f22786j;

    /* renamed from: k  reason: collision with root package name */
    private long f22787k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f22788l;

    /* renamed from: m  reason: collision with root package name */
    private IllegalStateException f22789m;

    /* renamed from: a  reason: collision with root package name */
    private final Object f22777a = new Object();

    /* renamed from: d  reason: collision with root package name */
    private final k f22780d = new k();

    /* renamed from: e  reason: collision with root package name */
    private final k f22781e = new k();

    /* renamed from: f  reason: collision with root package name */
    private final ArrayDeque f22782f = new ArrayDeque();

    /* renamed from: g  reason: collision with root package name */
    private final ArrayDeque f22783g = new ArrayDeque();

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(HandlerThread handlerThread) {
        this.f22778b = handlerThread;
    }

    private void b(MediaFormat mediaFormat) {
        this.f22781e.a(-2);
        this.f22783g.add(mediaFormat);
    }

    private void f() {
        if (!this.f22783g.isEmpty()) {
            this.f22785i = (MediaFormat) this.f22783g.getLast();
        }
        this.f22780d.b();
        this.f22781e.b();
        this.f22782f.clear();
        this.f22783g.clear();
    }

    private boolean i() {
        if (this.f22787k <= 0 && !this.f22788l) {
            return false;
        }
        return true;
    }

    private void j() {
        k();
        l();
    }

    private void k() {
        IllegalStateException illegalStateException = this.f22789m;
        if (illegalStateException == null) {
            return;
        }
        this.f22789m = null;
        throw illegalStateException;
    }

    private void l() {
        MediaCodec.CodecException codecException = this.f22786j;
        if (codecException == null) {
            return;
        }
        this.f22786j = null;
        throw codecException;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void m() {
        synchronized (this.f22777a) {
            try {
                if (this.f22788l) {
                    return;
                }
                long j10 = this.f22787k - 1;
                this.f22787k = j10;
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
        synchronized (this.f22777a) {
            this.f22789m = illegalStateException;
        }
    }

    public int c() {
        synchronized (this.f22777a) {
            try {
                j();
                int i10 = -1;
                if (i()) {
                    return -1;
                }
                if (!this.f22780d.d()) {
                    i10 = this.f22780d.e();
                }
                return i10;
            } finally {
            }
        }
    }

    public int d(MediaCodec.BufferInfo bufferInfo) {
        synchronized (this.f22777a) {
            try {
                j();
                if (i()) {
                    return -1;
                }
                if (this.f22781e.d()) {
                    return -1;
                }
                int e10 = this.f22781e.e();
                if (e10 >= 0) {
                    ne.a.i(this.f22784h);
                    MediaCodec.BufferInfo bufferInfo2 = (MediaCodec.BufferInfo) this.f22782f.remove();
                    bufferInfo.set(bufferInfo2.offset, bufferInfo2.size, bufferInfo2.presentationTimeUs, bufferInfo2.flags);
                } else if (e10 == -2) {
                    this.f22784h = (MediaFormat) this.f22783g.remove();
                }
                return e10;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void e() {
        synchronized (this.f22777a) {
            this.f22787k++;
            ((Handler) w0.j(this.f22779c)).post(new Runnable() { // from class: fd.f
                @Override // java.lang.Runnable
                public final void run() {
                    g.this.m();
                }
            });
        }
    }

    public MediaFormat g() {
        MediaFormat mediaFormat;
        synchronized (this.f22777a) {
            try {
                mediaFormat = this.f22784h;
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
        if (this.f22779c == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        this.f22778b.start();
        Handler handler = new Handler(this.f22778b.getLooper());
        mediaCodec.setCallback(this, handler);
        this.f22779c = handler;
    }

    public void o() {
        synchronized (this.f22777a) {
            this.f22788l = true;
            this.f22778b.quit();
            f();
        }
    }

    @Override // android.media.MediaCodec.Callback
    public void onError(MediaCodec mediaCodec, MediaCodec.CodecException codecException) {
        synchronized (this.f22777a) {
            this.f22786j = codecException;
        }
    }

    @Override // android.media.MediaCodec.Callback
    public void onInputBufferAvailable(MediaCodec mediaCodec, int i10) {
        synchronized (this.f22777a) {
            this.f22780d.a(i10);
        }
    }

    @Override // android.media.MediaCodec.Callback
    public void onOutputBufferAvailable(MediaCodec mediaCodec, int i10, MediaCodec.BufferInfo bufferInfo) {
        synchronized (this.f22777a) {
            try {
                MediaFormat mediaFormat = this.f22785i;
                if (mediaFormat != null) {
                    b(mediaFormat);
                    this.f22785i = null;
                }
                this.f22781e.a(i10);
                this.f22782f.add(bufferInfo);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // android.media.MediaCodec.Callback
    public void onOutputFormatChanged(MediaCodec mediaCodec, MediaFormat mediaFormat) {
        synchronized (this.f22777a) {
            b(mediaFormat);
            this.f22785i = null;
        }
    }
}
