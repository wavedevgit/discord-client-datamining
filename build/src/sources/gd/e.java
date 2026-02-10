package gd;

import android.media.MediaCodec;
import android.os.Handler;
import android.os.HandlerThread;
import android.os.Looper;
import android.os.Message;
import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.concurrent.atomic.AtomicReference;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class e {

    /* renamed from: g  reason: collision with root package name */
    private static final ArrayDeque f25447g = new ArrayDeque();

    /* renamed from: h  reason: collision with root package name */
    private static final Object f25448h = new Object();

    /* renamed from: a  reason: collision with root package name */
    private final MediaCodec f25449a;

    /* renamed from: b  reason: collision with root package name */
    private final HandlerThread f25450b;

    /* renamed from: c  reason: collision with root package name */
    private Handler f25451c;

    /* renamed from: d  reason: collision with root package name */
    private final AtomicReference f25452d;

    /* renamed from: e  reason: collision with root package name */
    private final oe.h f25453e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f25454f;

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
        public int f25456a;

        /* renamed from: b  reason: collision with root package name */
        public int f25457b;

        /* renamed from: c  reason: collision with root package name */
        public int f25458c;

        /* renamed from: d  reason: collision with root package name */
        public final MediaCodec.CryptoInfo f25459d = new MediaCodec.CryptoInfo();

        /* renamed from: e  reason: collision with root package name */
        public long f25460e;

        /* renamed from: f  reason: collision with root package name */
        public int f25461f;

        b() {
        }

        public void a(int i10, int i11, int i12, long j10, int i13) {
            this.f25456a = i10;
            this.f25457b = i11;
            this.f25458c = i12;
            this.f25460e = j10;
            this.f25461f = i13;
        }
    }

    public e(MediaCodec mediaCodec, HandlerThread handlerThread) {
        this(mediaCodec, handlerThread, new oe.h());
    }

    private void b() {
        this.f25453e.d();
        ((Handler) oe.a.e(this.f25451c)).obtainMessage(2).sendToTarget();
        this.f25453e.a();
    }

    private static void c(rc.c cVar, MediaCodec.CryptoInfo cryptoInfo) {
        cryptoInfo.numSubSamples = cVar.f46221f;
        cryptoInfo.numBytesOfClearData = e(cVar.f46219d, cryptoInfo.numBytesOfClearData);
        cryptoInfo.numBytesOfEncryptedData = e(cVar.f46220e, cryptoInfo.numBytesOfEncryptedData);
        cryptoInfo.key = (byte[]) oe.a.e(d(cVar.f46217b, cryptoInfo.key));
        cryptoInfo.iv = (byte[]) oe.a.e(d(cVar.f46216a, cryptoInfo.iv));
        cryptoInfo.mode = cVar.f46218c;
        if (w0.f39037a >= 24) {
            cryptoInfo.setPattern(new MediaCodec.CryptoInfo.Pattern(cVar.f46222g, cVar.f46223h));
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
            java.util.concurrent.atomic.AtomicReference r2 = r8.f25452d
            java.lang.IllegalStateException r3 = new java.lang.IllegalStateException
            int r1 = r9.what
            java.lang.String r1 = java.lang.String.valueOf(r1)
            r3.<init>(r1)
            p0.d.a(r2, r4, r3)
            goto L4b
        L1c:
            oe.h r1 = r8.f25453e
            r1.f()
            goto L4b
        L22:
            java.lang.Object r1 = r9.obj
            r7 = r1
            gd.e$b r7 = (gd.e.b) r7
            int r1 = r7.f25456a
            int r2 = r7.f25457b
            android.media.MediaCodec$CryptoInfo r3 = r7.f25459d
            long r4 = r7.f25460e
            int r6 = r7.f25461f
            r0 = r8
            r0.h(r1, r2, r3, r4, r6)
        L35:
            r4 = r7
            goto L4b
        L37:
            java.lang.Object r0 = r9.obj
            r7 = r0
            gd.e$b r7 = (gd.e.b) r7
            int r1 = r7.f25456a
            int r2 = r7.f25457b
            int r3 = r7.f25458c
            long r4 = r7.f25460e
            int r6 = r7.f25461f
            r0 = r8
            r0.g(r1, r2, r3, r4, r6)
            goto L35
        L4b:
            if (r4 == 0) goto L50
            o(r4)
        L50:
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: gd.e.f(android.os.Message):void");
    }

    private void g(int i10, int i11, int i12, long j10, int i13) {
        try {
            this.f25449a.queueInputBuffer(i10, i11, i12, j10, i13);
        } catch (RuntimeException e10) {
            p0.d.a(this.f25452d, null, e10);
        }
    }

    private void h(int i10, int i11, MediaCodec.CryptoInfo cryptoInfo, long j10, int i12) {
        try {
            synchronized (f25448h) {
                this.f25449a.queueSecureInputBuffer(i10, i11, cryptoInfo, j10, i12);
            }
        } catch (RuntimeException e10) {
            p0.d.a(this.f25452d, null, e10);
        }
    }

    private void j() {
        ((Handler) oe.a.e(this.f25451c)).removeCallbacksAndMessages(null);
        b();
    }

    private static b k() {
        ArrayDeque arrayDeque = f25447g;
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
        ArrayDeque arrayDeque = f25447g;
        synchronized (arrayDeque) {
            arrayDeque.add(bVar);
        }
    }

    public void i() {
        if (this.f25454f) {
            try {
                j();
            } catch (InterruptedException e10) {
                Thread.currentThread().interrupt();
                throw new IllegalStateException(e10);
            }
        }
    }

    public void l() {
        RuntimeException runtimeException = (RuntimeException) this.f25452d.getAndSet(null);
        if (runtimeException == null) {
            return;
        }
        throw runtimeException;
    }

    public void m(int i10, int i11, int i12, long j10, int i13) {
        l();
        b k10 = k();
        k10.a(i10, i11, i12, j10, i13);
        ((Handler) w0.j(this.f25451c)).obtainMessage(0, k10).sendToTarget();
    }

    public void n(int i10, int i11, rc.c cVar, long j10, int i12) {
        l();
        b k10 = k();
        k10.a(i10, i11, 0, j10, i12);
        c(cVar, k10.f25459d);
        ((Handler) w0.j(this.f25451c)).obtainMessage(1, k10).sendToTarget();
    }

    public void p() {
        if (this.f25454f) {
            i();
            this.f25450b.quit();
        }
        this.f25454f = false;
    }

    public void q() {
        if (!this.f25454f) {
            this.f25450b.start();
            this.f25451c = new a(this.f25450b.getLooper());
            this.f25454f = true;
        }
    }

    public void r() {
        b();
    }

    e(MediaCodec mediaCodec, HandlerThread handlerThread, oe.h hVar) {
        this.f25449a = mediaCodec;
        this.f25450b = handlerThread;
        this.f25453e = hVar;
        this.f25452d = new AtomicReference();
    }
}
