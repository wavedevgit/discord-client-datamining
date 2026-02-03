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
    private static final ArrayDeque f24144g = new ArrayDeque();

    /* renamed from: h  reason: collision with root package name */
    private static final Object f24145h = new Object();

    /* renamed from: a  reason: collision with root package name */
    private final MediaCodec f24146a;

    /* renamed from: b  reason: collision with root package name */
    private final HandlerThread f24147b;

    /* renamed from: c  reason: collision with root package name */
    private Handler f24148c;

    /* renamed from: d  reason: collision with root package name */
    private final AtomicReference f24149d;

    /* renamed from: e  reason: collision with root package name */
    private final ne.h f24150e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f24151f;

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
        public int f24153a;

        /* renamed from: b  reason: collision with root package name */
        public int f24154b;

        /* renamed from: c  reason: collision with root package name */
        public int f24155c;

        /* renamed from: d  reason: collision with root package name */
        public final MediaCodec.CryptoInfo f24156d = new MediaCodec.CryptoInfo();

        /* renamed from: e  reason: collision with root package name */
        public long f24157e;

        /* renamed from: f  reason: collision with root package name */
        public int f24158f;

        b() {
        }

        public void a(int i10, int i11, int i12, long j10, int i13) {
            this.f24153a = i10;
            this.f24154b = i11;
            this.f24155c = i12;
            this.f24157e = j10;
            this.f24158f = i13;
        }
    }

    public e(MediaCodec mediaCodec, HandlerThread handlerThread) {
        this(mediaCodec, handlerThread, new ne.h());
    }

    private void b() {
        this.f24150e.c();
        ((Handler) ne.a.e(this.f24148c)).obtainMessage(2).sendToTarget();
        this.f24150e.a();
    }

    private static void c(qc.c cVar, MediaCodec.CryptoInfo cryptoInfo) {
        cryptoInfo.numSubSamples = cVar.f47339f;
        cryptoInfo.numBytesOfClearData = e(cVar.f47337d, cryptoInfo.numBytesOfClearData);
        cryptoInfo.numBytesOfEncryptedData = e(cVar.f47338e, cryptoInfo.numBytesOfEncryptedData);
        cryptoInfo.key = (byte[]) ne.a.e(d(cVar.f47335b, cryptoInfo.key));
        cryptoInfo.iv = (byte[]) ne.a.e(d(cVar.f47334a, cryptoInfo.iv));
        cryptoInfo.mode = cVar.f47336c;
        if (w0.f40158a >= 24) {
            cryptoInfo.setPattern(new MediaCodec.CryptoInfo.Pattern(cVar.f47340g, cVar.f47341h));
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
            java.util.concurrent.atomic.AtomicReference r2 = r8.f24149d
            java.lang.IllegalStateException r3 = new java.lang.IllegalStateException
            int r1 = r9.what
            java.lang.String r1 = java.lang.String.valueOf(r1)
            r3.<init>(r1)
            p0.d.a(r2, r4, r3)
            goto L4b
        L1c:
            ne.h r1 = r8.f24150e
            r1.e()
            goto L4b
        L22:
            java.lang.Object r1 = r9.obj
            r7 = r1
            fd.e$b r7 = (fd.e.b) r7
            int r1 = r7.f24153a
            int r2 = r7.f24154b
            android.media.MediaCodec$CryptoInfo r3 = r7.f24156d
            long r4 = r7.f24157e
            int r6 = r7.f24158f
            r0 = r8
            r0.h(r1, r2, r3, r4, r6)
        L35:
            r4 = r7
            goto L4b
        L37:
            java.lang.Object r0 = r9.obj
            r7 = r0
            fd.e$b r7 = (fd.e.b) r7
            int r1 = r7.f24153a
            int r2 = r7.f24154b
            int r3 = r7.f24155c
            long r4 = r7.f24157e
            int r6 = r7.f24158f
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
            this.f24146a.queueInputBuffer(i10, i11, i12, j10, i13);
        } catch (RuntimeException e10) {
            p0.d.a(this.f24149d, null, e10);
        }
    }

    private void h(int i10, int i11, MediaCodec.CryptoInfo cryptoInfo, long j10, int i12) {
        try {
            synchronized (f24145h) {
                this.f24146a.queueSecureInputBuffer(i10, i11, cryptoInfo, j10, i12);
            }
        } catch (RuntimeException e10) {
            p0.d.a(this.f24149d, null, e10);
        }
    }

    private void j() {
        ((Handler) ne.a.e(this.f24148c)).removeCallbacksAndMessages(null);
        b();
    }

    private static b k() {
        ArrayDeque arrayDeque = f24144g;
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
        ArrayDeque arrayDeque = f24144g;
        synchronized (arrayDeque) {
            arrayDeque.add(bVar);
        }
    }

    public void i() {
        if (this.f24151f) {
            try {
                j();
            } catch (InterruptedException e10) {
                Thread.currentThread().interrupt();
                throw new IllegalStateException(e10);
            }
        }
    }

    public void l() {
        RuntimeException runtimeException = (RuntimeException) this.f24149d.getAndSet(null);
        if (runtimeException == null) {
            return;
        }
        throw runtimeException;
    }

    public void m(int i10, int i11, int i12, long j10, int i13) {
        l();
        b k10 = k();
        k10.a(i10, i11, i12, j10, i13);
        ((Handler) w0.j(this.f24148c)).obtainMessage(0, k10).sendToTarget();
    }

    public void n(int i10, int i11, qc.c cVar, long j10, int i12) {
        l();
        b k10 = k();
        k10.a(i10, i11, 0, j10, i12);
        c(cVar, k10.f24156d);
        ((Handler) w0.j(this.f24148c)).obtainMessage(1, k10).sendToTarget();
    }

    public void p() {
        if (this.f24151f) {
            i();
            this.f24147b.quit();
        }
        this.f24151f = false;
    }

    public void q() {
        if (!this.f24151f) {
            this.f24147b.start();
            this.f24148c = new a(this.f24147b.getLooper());
            this.f24151f = true;
        }
    }

    public void r() {
        b();
    }

    e(MediaCodec mediaCodec, HandlerThread handlerThread, ne.h hVar) {
        this.f24146a = mediaCodec;
        this.f24147b = handlerThread;
        this.f24150e = hVar;
        this.f24149d = new AtomicReference();
    }
}
