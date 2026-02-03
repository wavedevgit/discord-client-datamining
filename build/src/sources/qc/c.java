package qc;

import android.media.MediaCodec;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    public byte[] f47334a;

    /* renamed from: b  reason: collision with root package name */
    public byte[] f47335b;

    /* renamed from: c  reason: collision with root package name */
    public int f47336c;

    /* renamed from: d  reason: collision with root package name */
    public int[] f47337d;

    /* renamed from: e  reason: collision with root package name */
    public int[] f47338e;

    /* renamed from: f  reason: collision with root package name */
    public int f47339f;

    /* renamed from: g  reason: collision with root package name */
    public int f47340g;

    /* renamed from: h  reason: collision with root package name */
    public int f47341h;

    /* renamed from: i  reason: collision with root package name */
    private final MediaCodec.CryptoInfo f47342i;

    /* renamed from: j  reason: collision with root package name */
    private final b f47343j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final MediaCodec.CryptoInfo f47344a;

        /* renamed from: b  reason: collision with root package name */
        private final MediaCodec.CryptoInfo.Pattern f47345b;

        /* JADX INFO: Access modifiers changed from: private */
        public void b(int i10, int i11) {
            this.f47345b.set(i10, i11);
            this.f47344a.setPattern(this.f47345b);
        }

        private b(MediaCodec.CryptoInfo cryptoInfo) {
            this.f47344a = cryptoInfo;
            this.f47345b = new MediaCodec.CryptoInfo.Pattern(0, 0);
        }
    }

    public c() {
        MediaCodec.CryptoInfo cryptoInfo = new MediaCodec.CryptoInfo();
        this.f47342i = cryptoInfo;
        this.f47343j = w0.f40158a >= 24 ? new b(cryptoInfo) : null;
    }

    public MediaCodec.CryptoInfo a() {
        return this.f47342i;
    }

    public void b(int i10) {
        if (i10 == 0) {
            return;
        }
        if (this.f47337d == null) {
            int[] iArr = new int[1];
            this.f47337d = iArr;
            this.f47342i.numBytesOfClearData = iArr;
        }
        int[] iArr2 = this.f47337d;
        iArr2[0] = iArr2[0] + i10;
    }

    public void c(int i10, int[] iArr, int[] iArr2, byte[] bArr, byte[] bArr2, int i11, int i12, int i13) {
        this.f47339f = i10;
        this.f47337d = iArr;
        this.f47338e = iArr2;
        this.f47335b = bArr;
        this.f47334a = bArr2;
        this.f47336c = i11;
        this.f47340g = i12;
        this.f47341h = i13;
        MediaCodec.CryptoInfo cryptoInfo = this.f47342i;
        cryptoInfo.numSubSamples = i10;
        cryptoInfo.numBytesOfClearData = iArr;
        cryptoInfo.numBytesOfEncryptedData = iArr2;
        cryptoInfo.key = bArr;
        cryptoInfo.iv = bArr2;
        cryptoInfo.mode = i11;
        if (w0.f40158a >= 24) {
            ((b) ne.a.e(this.f47343j)).b(i12, i13);
        }
    }
}
