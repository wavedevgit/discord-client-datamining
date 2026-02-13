package rc;

import android.media.MediaCodec;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    public byte[] f46785a;

    /* renamed from: b  reason: collision with root package name */
    public byte[] f46786b;

    /* renamed from: c  reason: collision with root package name */
    public int f46787c;

    /* renamed from: d  reason: collision with root package name */
    public int[] f46788d;

    /* renamed from: e  reason: collision with root package name */
    public int[] f46789e;

    /* renamed from: f  reason: collision with root package name */
    public int f46790f;

    /* renamed from: g  reason: collision with root package name */
    public int f46791g;

    /* renamed from: h  reason: collision with root package name */
    public int f46792h;

    /* renamed from: i  reason: collision with root package name */
    private final MediaCodec.CryptoInfo f46793i;

    /* renamed from: j  reason: collision with root package name */
    private final b f46794j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final MediaCodec.CryptoInfo f46795a;

        /* renamed from: b  reason: collision with root package name */
        private final MediaCodec.CryptoInfo.Pattern f46796b;

        /* JADX INFO: Access modifiers changed from: private */
        public void b(int i10, int i11) {
            this.f46796b.set(i10, i11);
            this.f46795a.setPattern(this.f46796b);
        }

        private b(MediaCodec.CryptoInfo cryptoInfo) {
            this.f46795a = cryptoInfo;
            this.f46796b = new MediaCodec.CryptoInfo.Pattern(0, 0);
        }
    }

    public c() {
        MediaCodec.CryptoInfo cryptoInfo = new MediaCodec.CryptoInfo();
        this.f46793i = cryptoInfo;
        this.f46794j = w0.f39606a >= 24 ? new b(cryptoInfo) : null;
    }

    public MediaCodec.CryptoInfo a() {
        return this.f46793i;
    }

    public void b(int i10) {
        if (i10 == 0) {
            return;
        }
        if (this.f46788d == null) {
            int[] iArr = new int[1];
            this.f46788d = iArr;
            this.f46793i.numBytesOfClearData = iArr;
        }
        int[] iArr2 = this.f46788d;
        iArr2[0] = iArr2[0] + i10;
    }

    public void c(int i10, int[] iArr, int[] iArr2, byte[] bArr, byte[] bArr2, int i11, int i12, int i13) {
        this.f46790f = i10;
        this.f46788d = iArr;
        this.f46789e = iArr2;
        this.f46786b = bArr;
        this.f46785a = bArr2;
        this.f46787c = i11;
        this.f46791g = i12;
        this.f46792h = i13;
        MediaCodec.CryptoInfo cryptoInfo = this.f46793i;
        cryptoInfo.numSubSamples = i10;
        cryptoInfo.numBytesOfClearData = iArr;
        cryptoInfo.numBytesOfEncryptedData = iArr2;
        cryptoInfo.key = bArr;
        cryptoInfo.iv = bArr2;
        cryptoInfo.mode = i11;
        if (w0.f39606a >= 24) {
            ((b) oe.a.e(this.f46794j)).b(i12, i13);
        }
    }
}
