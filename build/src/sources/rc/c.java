package rc;

import android.media.MediaCodec;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    public byte[] f47762a;

    /* renamed from: b  reason: collision with root package name */
    public byte[] f47763b;

    /* renamed from: c  reason: collision with root package name */
    public int f47764c;

    /* renamed from: d  reason: collision with root package name */
    public int[] f47765d;

    /* renamed from: e  reason: collision with root package name */
    public int[] f47766e;

    /* renamed from: f  reason: collision with root package name */
    public int f47767f;

    /* renamed from: g  reason: collision with root package name */
    public int f47768g;

    /* renamed from: h  reason: collision with root package name */
    public int f47769h;

    /* renamed from: i  reason: collision with root package name */
    private final MediaCodec.CryptoInfo f47770i;

    /* renamed from: j  reason: collision with root package name */
    private final b f47771j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final MediaCodec.CryptoInfo f47772a;

        /* renamed from: b  reason: collision with root package name */
        private final MediaCodec.CryptoInfo.Pattern f47773b;

        /* JADX INFO: Access modifiers changed from: private */
        public void b(int i10, int i11) {
            this.f47773b.set(i10, i11);
            this.f47772a.setPattern(this.f47773b);
        }

        private b(MediaCodec.CryptoInfo cryptoInfo) {
            this.f47772a = cryptoInfo;
            this.f47773b = new MediaCodec.CryptoInfo.Pattern(0, 0);
        }
    }

    public c() {
        MediaCodec.CryptoInfo cryptoInfo = new MediaCodec.CryptoInfo();
        this.f47770i = cryptoInfo;
        this.f47771j = w0.f40711a >= 24 ? new b(cryptoInfo) : null;
    }

    public MediaCodec.CryptoInfo a() {
        return this.f47770i;
    }

    public void b(int i10) {
        if (i10 == 0) {
            return;
        }
        if (this.f47765d == null) {
            int[] iArr = new int[1];
            this.f47765d = iArr;
            this.f47770i.numBytesOfClearData = iArr;
        }
        int[] iArr2 = this.f47765d;
        iArr2[0] = iArr2[0] + i10;
    }

    public void c(int i10, int[] iArr, int[] iArr2, byte[] bArr, byte[] bArr2, int i11, int i12, int i13) {
        this.f47767f = i10;
        this.f47765d = iArr;
        this.f47766e = iArr2;
        this.f47763b = bArr;
        this.f47762a = bArr2;
        this.f47764c = i11;
        this.f47768g = i12;
        this.f47769h = i13;
        MediaCodec.CryptoInfo cryptoInfo = this.f47770i;
        cryptoInfo.numSubSamples = i10;
        cryptoInfo.numBytesOfClearData = iArr;
        cryptoInfo.numBytesOfEncryptedData = iArr2;
        cryptoInfo.key = bArr;
        cryptoInfo.iv = bArr2;
        cryptoInfo.mode = i11;
        if (w0.f40711a >= 24) {
            ((b) oe.a.e(this.f47771j)).b(i12, i13);
        }
    }
}
