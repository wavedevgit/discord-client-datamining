package qc;

import android.media.MediaCodec;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    public byte[] f47079a;

    /* renamed from: b  reason: collision with root package name */
    public byte[] f47080b;

    /* renamed from: c  reason: collision with root package name */
    public int f47081c;

    /* renamed from: d  reason: collision with root package name */
    public int[] f47082d;

    /* renamed from: e  reason: collision with root package name */
    public int[] f47083e;

    /* renamed from: f  reason: collision with root package name */
    public int f47084f;

    /* renamed from: g  reason: collision with root package name */
    public int f47085g;

    /* renamed from: h  reason: collision with root package name */
    public int f47086h;

    /* renamed from: i  reason: collision with root package name */
    private final MediaCodec.CryptoInfo f47087i;

    /* renamed from: j  reason: collision with root package name */
    private final b f47088j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final MediaCodec.CryptoInfo f47089a;

        /* renamed from: b  reason: collision with root package name */
        private final MediaCodec.CryptoInfo.Pattern f47090b;

        /* JADX INFO: Access modifiers changed from: private */
        public void b(int i10, int i11) {
            this.f47090b.set(i10, i11);
            this.f47089a.setPattern(this.f47090b);
        }

        private b(MediaCodec.CryptoInfo cryptoInfo) {
            this.f47089a = cryptoInfo;
            this.f47090b = new MediaCodec.CryptoInfo.Pattern(0, 0);
        }
    }

    public c() {
        MediaCodec.CryptoInfo cryptoInfo = new MediaCodec.CryptoInfo();
        this.f47087i = cryptoInfo;
        this.f47088j = w0.f40295a >= 24 ? new b(cryptoInfo) : null;
    }

    public MediaCodec.CryptoInfo a() {
        return this.f47087i;
    }

    public void b(int i10) {
        if (i10 == 0) {
            return;
        }
        if (this.f47082d == null) {
            int[] iArr = new int[1];
            this.f47082d = iArr;
            this.f47087i.numBytesOfClearData = iArr;
        }
        int[] iArr2 = this.f47082d;
        iArr2[0] = iArr2[0] + i10;
    }

    public void c(int i10, int[] iArr, int[] iArr2, byte[] bArr, byte[] bArr2, int i11, int i12, int i13) {
        this.f47084f = i10;
        this.f47082d = iArr;
        this.f47083e = iArr2;
        this.f47080b = bArr;
        this.f47079a = bArr2;
        this.f47081c = i11;
        this.f47085g = i12;
        this.f47086h = i13;
        MediaCodec.CryptoInfo cryptoInfo = this.f47087i;
        cryptoInfo.numSubSamples = i10;
        cryptoInfo.numBytesOfClearData = iArr;
        cryptoInfo.numBytesOfEncryptedData = iArr2;
        cryptoInfo.key = bArr;
        cryptoInfo.iv = bArr2;
        cryptoInfo.mode = i11;
        if (w0.f40295a >= 24) {
            ((b) ne.a.e(this.f47088j)).b(i12, i13);
        }
    }
}
