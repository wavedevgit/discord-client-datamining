package qc;

import android.media.MediaCodec;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    public byte[] f47484a;

    /* renamed from: b  reason: collision with root package name */
    public byte[] f47485b;

    /* renamed from: c  reason: collision with root package name */
    public int f47486c;

    /* renamed from: d  reason: collision with root package name */
    public int[] f47487d;

    /* renamed from: e  reason: collision with root package name */
    public int[] f47488e;

    /* renamed from: f  reason: collision with root package name */
    public int f47489f;

    /* renamed from: g  reason: collision with root package name */
    public int f47490g;

    /* renamed from: h  reason: collision with root package name */
    public int f47491h;

    /* renamed from: i  reason: collision with root package name */
    private final MediaCodec.CryptoInfo f47492i;

    /* renamed from: j  reason: collision with root package name */
    private final b f47493j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final MediaCodec.CryptoInfo f47494a;

        /* renamed from: b  reason: collision with root package name */
        private final MediaCodec.CryptoInfo.Pattern f47495b;

        /* JADX INFO: Access modifiers changed from: private */
        public void b(int i10, int i11) {
            this.f47495b.set(i10, i11);
            this.f47494a.setPattern(this.f47495b);
        }

        private b(MediaCodec.CryptoInfo cryptoInfo) {
            this.f47494a = cryptoInfo;
            this.f47495b = new MediaCodec.CryptoInfo.Pattern(0, 0);
        }
    }

    public c() {
        MediaCodec.CryptoInfo cryptoInfo = new MediaCodec.CryptoInfo();
        this.f47492i = cryptoInfo;
        this.f47493j = w0.f40197a >= 24 ? new b(cryptoInfo) : null;
    }

    public MediaCodec.CryptoInfo a() {
        return this.f47492i;
    }

    public void b(int i10) {
        if (i10 == 0) {
            return;
        }
        if (this.f47487d == null) {
            int[] iArr = new int[1];
            this.f47487d = iArr;
            this.f47492i.numBytesOfClearData = iArr;
        }
        int[] iArr2 = this.f47487d;
        iArr2[0] = iArr2[0] + i10;
    }

    public void c(int i10, int[] iArr, int[] iArr2, byte[] bArr, byte[] bArr2, int i11, int i12, int i13) {
        this.f47489f = i10;
        this.f47487d = iArr;
        this.f47488e = iArr2;
        this.f47485b = bArr;
        this.f47484a = bArr2;
        this.f47486c = i11;
        this.f47490g = i12;
        this.f47491h = i13;
        MediaCodec.CryptoInfo cryptoInfo = this.f47492i;
        cryptoInfo.numSubSamples = i10;
        cryptoInfo.numBytesOfClearData = iArr;
        cryptoInfo.numBytesOfEncryptedData = iArr2;
        cryptoInfo.key = bArr;
        cryptoInfo.iv = bArr2;
        cryptoInfo.mode = i11;
        if (w0.f40197a >= 24) {
            ((b) ne.a.e(this.f47493j)).b(i12, i13);
        }
    }
}
