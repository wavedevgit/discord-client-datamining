package qc;

import android.media.MediaCodec;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    public byte[] f47063a;

    /* renamed from: b  reason: collision with root package name */
    public byte[] f47064b;

    /* renamed from: c  reason: collision with root package name */
    public int f47065c;

    /* renamed from: d  reason: collision with root package name */
    public int[] f47066d;

    /* renamed from: e  reason: collision with root package name */
    public int[] f47067e;

    /* renamed from: f  reason: collision with root package name */
    public int f47068f;

    /* renamed from: g  reason: collision with root package name */
    public int f47069g;

    /* renamed from: h  reason: collision with root package name */
    public int f47070h;

    /* renamed from: i  reason: collision with root package name */
    private final MediaCodec.CryptoInfo f47071i;

    /* renamed from: j  reason: collision with root package name */
    private final b f47072j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final MediaCodec.CryptoInfo f47073a;

        /* renamed from: b  reason: collision with root package name */
        private final MediaCodec.CryptoInfo.Pattern f47074b;

        /* JADX INFO: Access modifiers changed from: private */
        public void b(int i10, int i11) {
            this.f47074b.set(i10, i11);
            this.f47073a.setPattern(this.f47074b);
        }

        private b(MediaCodec.CryptoInfo cryptoInfo) {
            this.f47073a = cryptoInfo;
            this.f47074b = new MediaCodec.CryptoInfo.Pattern(0, 0);
        }
    }

    public c() {
        MediaCodec.CryptoInfo cryptoInfo = new MediaCodec.CryptoInfo();
        this.f47071i = cryptoInfo;
        this.f47072j = w0.f40279a >= 24 ? new b(cryptoInfo) : null;
    }

    public MediaCodec.CryptoInfo a() {
        return this.f47071i;
    }

    public void b(int i10) {
        if (i10 == 0) {
            return;
        }
        if (this.f47066d == null) {
            int[] iArr = new int[1];
            this.f47066d = iArr;
            this.f47071i.numBytesOfClearData = iArr;
        }
        int[] iArr2 = this.f47066d;
        iArr2[0] = iArr2[0] + i10;
    }

    public void c(int i10, int[] iArr, int[] iArr2, byte[] bArr, byte[] bArr2, int i11, int i12, int i13) {
        this.f47068f = i10;
        this.f47066d = iArr;
        this.f47067e = iArr2;
        this.f47064b = bArr;
        this.f47063a = bArr2;
        this.f47065c = i11;
        this.f47069g = i12;
        this.f47070h = i13;
        MediaCodec.CryptoInfo cryptoInfo = this.f47071i;
        cryptoInfo.numSubSamples = i10;
        cryptoInfo.numBytesOfClearData = iArr;
        cryptoInfo.numBytesOfEncryptedData = iArr2;
        cryptoInfo.key = bArr;
        cryptoInfo.iv = bArr2;
        cryptoInfo.mode = i11;
        if (w0.f40279a >= 24) {
            ((b) ne.a.e(this.f47072j)).b(i12, i13);
        }
    }
}
