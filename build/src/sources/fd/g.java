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
    private final HandlerThread f23079b;

    /* renamed from: c  reason: collision with root package name */
    private Handler f23080c;

    /* renamed from: h  reason: collision with root package name */
    private MediaFormat f23085h;

    /* renamed from: i  reason: collision with root package name */
    private MediaFormat f23086i;

    /* renamed from: j  reason: collision with root package name */
    private MediaCodec.CodecException f23087j;

    /* renamed from: k  reason: collision with root package name */
    private long f23088k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f23089l;

    /* renamed from: m  reason: collision with root package name */
    private IllegalStateException f23090m;

    /* renamed from: a  reason: collision with root package name */
    private final Object f23078a = new Object();

    /* renamed from: d  reason: collision with root package name */
    private final k f23081d = new k();

    /* renamed from: e  reason: collision with root package name */
    private final k f23082e = new k();

    /* renamed from: f  reason: collision with root package name */
    private final ArrayDeque f23083f = new ArrayDeque();

    /* renamed from: g  reason: collision with root package name */
    private final ArrayDeque f23084g = new ArrayDeque();

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(HandlerThread handlerThread) {
        this.f23079b = handlerThread;
    }

    private void b(MediaFormat mediaFormat) {
        this.f23082e.a(-2);
        this.f23084g.add(mediaFormat);
    }

    private void f() {
        if (!this.f23084g.isEmpty()) {
            this.f23086i = (MediaFormat) this.f23084g.getLast();
        }
        this.f23081d.b();
        this.f23082e.b();
        this.f23083f.clear();
        this.f23084g.clear();
    }

    private boolean i() {
        if (this.f23088k <= 0 && !this.f23089l) {
            return false;
        }
        return true;
    }

    private void j() {
        k();
        l();
    }

    private void k() {
        IllegalStateException illegalStateException = this.f23090m;
        if (illegalStateException == null) {
            return;
        }
        this.f23090m = null;
        throw illegalStateException;
    }

    private void l() {
        MediaCodec.CodecException codecException = this.f23087j;
        if (codecException == null) {
            return;
        }
        this.f23087j = null;
        throw codecException;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void m() {
        synchronized (this.f23078a) {
            try {
                if (this.f23089l) {
                    return;
                }
                long j10 = this.f23088k - 1;
                this.f23088k = j10;
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
        synchronized (this.f23078a) {
            this.f23090m = illegalStateException;
        }
    }

    public int c() {
        synchronized (this.f23078a) {
            try {
                j();
                int i10 = -1;
                if (i()) {
                    return -1;
                }
                if (!this.f23081d.d()) {
                    i10 = this.f23081d.e();
                }
                return i10;
            } finally {
            }
        }
    }

    public int d(MediaCodec.BufferInfo bufferInfo) {
        synchronized (this.f23078a) {
            try {
                j();
                if (i()) {
                    return -1;
                }
                if (this.f23082e.d()) {
                    return -1;
                }
                int e10 = this.f23082e.e();
                if (e10 >= 0) {
                    ne.a.i(this.f23085h);
                    MediaCodec.BufferInfo bufferInfo2 = (MediaCodec.BufferInfo) this.f23083f.remove();
                    bufferInfo.set(bufferInfo2.offset, bufferInfo2.size, bufferInfo2.presentationTimeUs, bufferInfo2.flags);
                } else if (e10 == -2) {
                    this.f23085h = (MediaFormat) this.f23084g.remove();
                }
                return e10;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void e() {
        synchronized (this.f23078a) {
            this.f23088k++;
            ((Handler) w0.j(this.f23080c)).post(new Runnable() { // from class: fd.f
                @Override // java.lang.Runnable
                public final void run() {
                    g.this.m();
                }
            });
        }
    }

    public MediaFormat g() {
        MediaFormat mediaFormat;
        synchronized (this.f23078a) {
            try {
                mediaFormat = this.f23085h;
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
        if (this.f23080c == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        this.f23079b.start();
        Handler handler = new Handler(this.f23079b.getLooper());
        mediaCodec.setCallback(this, handler);
        this.f23080c = handler;
    }

    public void o() {
        synchronized (this.f23078a) {
            this.f23089l = true;
            this.f23079b.quit();
            f();
        }
    }

    @Override // android.media.MediaCodec.Callback
    public void onError(MediaCodec mediaCodec, MediaCodec.CodecException codecException) {
        synchronized (this.f23078a) {
            this.f23087j = codecException;
        }
    }

    @Override // android.media.MediaCodec.Callback
    public void onInputBufferAvailable(MediaCodec mediaCodec, int i10) {
        synchronized (this.f23078a) {
            this.f23081d.a(i10);
        }
    }

    @Override // android.media.MediaCodec.Callback
    public void onOutputBufferAvailable(MediaCodec mediaCodec, int i10, MediaCodec.BufferInfo bufferInfo) {
        synchronized (this.f23078a) {
            try {
                MediaFormat mediaFormat = this.f23086i;
                if (mediaFormat != null) {
                    b(mediaFormat);
                    this.f23086i = null;
                }
                this.f23082e.a(i10);
                this.f23083f.add(bufferInfo);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // android.media.MediaCodec.Callback
    public void onOutputFormatChanged(MediaCodec mediaCodec, MediaFormat mediaFormat) {
        synchronized (this.f23078a) {
            b(mediaFormat);
            this.f23086i = null;
        }
    }
}
