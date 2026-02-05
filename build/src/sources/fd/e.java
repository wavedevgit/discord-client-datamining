package fd;

import android.media.MediaCodec;
import android.os.Handler;
import android.os.HandlerThread;
import android.os.Looper;
import android.os.Message;
import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.concurrent.atomic.AtomicReference;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class e {

    /* renamed from: g  reason: collision with root package name */
    private static final ArrayDeque f22761g = new ArrayDeque();

    /* renamed from: h  reason: collision with root package name */
    private static final Object f22762h = new Object();

    /* renamed from: a  reason: collision with root package name */
    private final MediaCodec f22763a;

    /* renamed from: b  reason: collision with root package name */
    private final HandlerThread f22764b;

    /* renamed from: c  reason: collision with root package name */
    private Handler f22765c;

    /* renamed from: d  reason: collision with root package name */
    private final AtomicReference f22766d;

    /* renamed from: e  reason: collision with root package name */
    private final ne.h f22767e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f22768f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a extends Handler {
        a(Looper looper) {
            super(looper);
        }

        @Override // android.os.Handler
        public void handleMessage(Message message) {
            e.this.f(message);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        public int f22770a;

        /* renamed from: b  reason: collision with root package name */
        public int f22771b;

        /* renamed from: c  reason: collision with root package name */
        public int f22772c;

        /* renamed from: d  reason: collision with root package name */
        public final MediaCodec.CryptoInfo f22773d = new MediaCodec.CryptoInfo();

        /* renamed from: e  reason: collision with root package name */
        public long f22774e;

        /* renamed from: f  reason: collision with root package name */
        public int f22775f;

        b() {
        }

        public void a(int i10, int i11, int i12, long j10, int i13) {
            this.f22770a = i10;
            this.f22771b = i11;
            this.f22772c = i12;
            this.f22774e = j10;
            this.f22775f = i13;
        }
    }

    public e(MediaCodec mediaCodec, HandlerThread handlerThread) {
        this(mediaCodec, handlerThread, new ne.h());
    }

    private void b() {
        this.f22767e.c();
        ((Handler) ne.a.e(this.f22765c)).obtainMessage(2).sendToTarget();
        this.f22767e.a();
    }

    private static void c(qc.c cVar, MediaCodec.CryptoInfo cryptoInfo) {
        cryptoInfo.numSubSamples = cVar.f47553f;
        cryptoInfo.numBytesOfClearData = e(cVar.f47551d, cryptoInfo.numBytesOfClearData);
        cryptoInfo.numBytesOfEncryptedData = e(cVar.f47552e, cryptoInfo.numBytesOfEncryptedData);
        cryptoInfo.key = (byte[]) ne.a.e(d(cVar.f47549b, cryptoInfo.key));
        cryptoInfo.iv = (byte[]) ne.a.e(d(cVar.f47548a, cryptoInfo.iv));
        cryptoInfo.mode = cVar.f47550c;
        if (w0.f39657a >= 24) {
            cryptoInfo.setPattern(new MediaCodec.CryptoInfo.Pattern(cVar.f47554g, cVar.f47555h));
        }
    }

    private static byte[] d(byte[] bArr, byte[] bArr2) {
        if (bArr == null) {
            return bArr2;
        }
        if (bArr2 != null && bArr2.length >= bArr.length) {
            System.arraycopy(bArr, 0, bArr2, 0, bArr.length);
            return bArr2;
        }
        return Arrays.copyOf(bArr, bArr.length);
    }

    private static int[] e(int[] iArr, int[] iArr2) {
        if (iArr == null) {
            return iArr2;
        }
        if (iArr2 != null && iArr2.length >= iArr.length) {
            System.arraycopy(iArr, 0, iArr2, 0, iArr.length);
            return iArr2;
        }
        return Arrays.copyOf(iArr, iArr.length);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Removed duplicated region for block: B:14:0x004d  */
    /* JADX WARN: Removed duplicated region for block: B:16:? A[RETURN, SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void f(android.os.Message r9) {
        /*
            r8 = this;
            int r2 = r9.what
            if (r2 == 0) goto L37
            r3 = 1
            if (r2 == r3) goto L22
            r3 = 2
            r4 = 0
            if (r2 == r3) goto L1c
            java.util.concurrent.atomic.AtomicReference r2 = r8.f22766d
            java.lang.IllegalStateException r3 = new java.lang.IllegalStateException
            int r1 = r9.what
            java.lang.String r1 = java.lang.String.valueOf(r1)
            r3.<init>(r1)
            p0.d.a(r2, r4, r3)
            goto L4b
        L1c:
            ne.h r1 = r8.f22767e
            r1.e()
            goto L4b
        L22:
            java.lang.Object r1 = r9.obj
            r7 = r1
            fd.e$b r7 = (fd.e.b) r7
            int r1 = r7.f22770a
            int r2 = r7.f22771b
            android.media.MediaCodec$CryptoInfo r3 = r7.f22773d
            long r4 = r7.f22774e
            int r6 = r7.f22775f
            r0 = r8
            r0.h(r1, r2, r3, r4, r6)
        L35:
            r4 = r7
            goto L4b
        L37:
            java.lang.Object r0 = r9.obj
            r7 = r0
            fd.e$b r7 = (fd.e.b) r7
            int r1 = r7.f22770a
            int r2 = r7.f22771b
            int r3 = r7.f22772c
            long r4 = r7.f22774e
            int r6 = r7.f22775f
            r0 = r8
            r0.g(r1, r2, r3, r4, r6)
            goto L35
        L4b:
            if (r4 == 0) goto L50
            o(r4)
        L50:
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: fd.e.f(android.os.Message):void");
    }

    private void g(int i10, int i11, int i12, long j10, int i13) {
        try {
            this.f22763a.queueInputBuffer(i10, i11, i12, j10, i13);
        } catch (RuntimeException e10) {
            p0.d.a(this.f22766d, null, e10);
        }
    }

    private void h(int i10, int i11, MediaCodec.CryptoInfo cryptoInfo, long j10, int i12) {
        try {
            synchronized (f22762h) {
                this.f22763a.queueSecureInputBuffer(i10, i11, cryptoInfo, j10, i12);
            }
        } catch (RuntimeException e10) {
            p0.d.a(this.f22766d, null, e10);
        }
    }

    private void j() {
        ((Handler) ne.a.e(this.f22765c)).removeCallbacksAndMessages(null);
        b();
    }

    private static b k() {
        ArrayDeque arrayDeque = f22761g;
        synchronized (arrayDeque) {
            try {
                if (arrayDeque.isEmpty()) {
                    return new b();
                }
                return (b) arrayDeque.removeFirst();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private static void o(b bVar) {
        ArrayDeque arrayDeque = f22761g;
        synchronized (arrayDeque) {
            arrayDeque.add(bVar);
        }
    }

    public void i() {
        if (this.f22768f) {
            try {
                j();
            } catch (InterruptedException e10) {
                Thread.currentThread().interrupt();
                throw new IllegalStateException(e10);
            }
        }
    }

    public void l() {
        RuntimeException runtimeException = (RuntimeException) this.f22766d.getAndSet(null);
        if (runtimeException == null) {
            return;
        }
        throw runtimeException;
    }

    public void m(int i10, int i11, int i12, long j10, int i13) {
        l();
        b k10 = k();
        k10.a(i10, i11, i12, j10, i13);
        ((Handler) w0.j(this.f22765c)).obtainMessage(0, k10).sendToTarget();
    }

    public void n(int i10, int i11, qc.c cVar, long j10, int i12) {
        l();
        b k10 = k();
        k10.a(i10, i11, 0, j10, i12);
        c(cVar, k10.f22773d);
        ((Handler) w0.j(this.f22765c)).obtainMessage(1, k10).sendToTarget();
    }

    public void p() {
        if (this.f22768f) {
            i();
            this.f22764b.quit();
        }
        this.f22768f = false;
    }

    public void q() {
        if (!this.f22768f) {
            this.f22764b.start();
            this.f22765c = new a(this.f22764b.getLooper());
            this.f22768f = true;
        }
    }

    public void r() {
        b();
    }

    e(MediaCodec mediaCodec, HandlerThread handlerThread, ne.h hVar) {
        this.f22763a = mediaCodec;
        this.f22764b = handlerThread;
        this.f22767e = hVar;
        this.f22766d = new AtomicReference();
    }
}
