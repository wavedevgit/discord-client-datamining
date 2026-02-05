package qc;

import android.media.MediaCodec;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    public byte[] f47548a;

    /* renamed from: b  reason: collision with root package name */
    public byte[] f47549b;

    /* renamed from: c  reason: collision with root package name */
    public int f47550c;

    /* renamed from: d  reason: collision with root package name */
    public int[] f47551d;

    /* renamed from: e  reason: collision with root package name */
    public int[] f47552e;

    /* renamed from: f  reason: collision with root package name */
    public int f47553f;

    /* renamed from: g  reason: collision with root package name */
    public int f47554g;

    /* renamed from: h  reason: collision with root package name */
    public int f47555h;

    /* renamed from: i  reason: collision with root package name */
    private final MediaCodec.CryptoInfo f47556i;

    /* renamed from: j  reason: collision with root package name */
    private final b f47557j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final MediaCodec.CryptoInfo f47558a;

        /* renamed from: b  reason: collision with root package name */
        private final MediaCodec.CryptoInfo.Pattern f47559b;

        /* JADX INFO: Access modifiers changed from: private */
        public void b(int i10, int i11) {
            this.f47559b.set(i10, i11);
            this.f47558a.setPattern(this.f47559b);
        }

        private b(MediaCodec.CryptoInfo cryptoInfo) {
            this.f47558a = cryptoInfo;
            this.f47559b = new MediaCodec.CryptoInfo.Pattern(0, 0);
        }
    }

    public c() {
        MediaCodec.CryptoInfo cryptoInfo = new MediaCodec.CryptoInfo();
        this.f47556i = cryptoInfo;
        this.f47557j = w0.f39657a >= 24 ? new b(cryptoInfo) : null;
    }

    public MediaCodec.CryptoInfo a() {
        return this.f47556i;
    }

    public void b(int i10) {
        if (i10 == 0) {
            return;
        }
        if (this.f47551d == null) {
            int[] iArr = new int[1];
            this.f47551d = iArr;
            this.f47556i.numBytesOfClearData = iArr;
        }
        int[] iArr2 = this.f47551d;
        iArr2[0] = iArr2[0] + i10;
    }

    public void c(int i10, int[] iArr, int[] iArr2, byte[] bArr, byte[] bArr2, int i11, int i12, int i13) {
        this.f47553f = i10;
        this.f47551d = iArr;
        this.f47552e = iArr2;
        this.f47549b = bArr;
        this.f47548a = bArr2;
        this.f47550c = i11;
        this.f47554g = i12;
        this.f47555h = i13;
        MediaCodec.CryptoInfo cryptoInfo = this.f47556i;
        cryptoInfo.numSubSamples = i10;
        cryptoInfo.numBytesOfClearData = iArr;
        cryptoInfo.numBytesOfEncryptedData = iArr2;
        cryptoInfo.key = bArr;
        cryptoInfo.iv = bArr2;
        cryptoInfo.mode = i11;
        if (w0.f39657a >= 24) {
            ((b) ne.a.e(this.f47557j)).b(i12, i13);
        }
    }
}
