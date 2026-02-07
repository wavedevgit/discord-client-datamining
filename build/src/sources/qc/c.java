package qc;

import android.media.MediaCodec;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    public byte[] f46644a;

    /* renamed from: b  reason: collision with root package name */
    public byte[] f46645b;

    /* renamed from: c  reason: collision with root package name */
    public int f46646c;

    /* renamed from: d  reason: collision with root package name */
    public int[] f46647d;

    /* renamed from: e  reason: collision with root package name */
    public int[] f46648e;

    /* renamed from: f  reason: collision with root package name */
    public int f46649f;

    /* renamed from: g  reason: collision with root package name */
    public int f46650g;

    /* renamed from: h  reason: collision with root package name */
    public int f46651h;

    /* renamed from: i  reason: collision with root package name */
    private final MediaCodec.CryptoInfo f46652i;

    /* renamed from: j  reason: collision with root package name */
    private final b f46653j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final MediaCodec.CryptoInfo f46654a;

        /* renamed from: b  reason: collision with root package name */
        private final MediaCodec.CryptoInfo.Pattern f46655b;

        /* JADX INFO: Access modifiers changed from: private */
        public void b(int i10, int i11) {
            this.f46655b.set(i10, i11);
            this.f46654a.setPattern(this.f46655b);
        }

        private b(MediaCodec.CryptoInfo cryptoInfo) {
            this.f46654a = cryptoInfo;
            this.f46655b = new MediaCodec.CryptoInfo.Pattern(0, 0);
        }
    }

    public c() {
        MediaCodec.CryptoInfo cryptoInfo = new MediaCodec.CryptoInfo();
        this.f46652i = cryptoInfo;
        this.f46653j = w0.f39060a >= 24 ? new b(cryptoInfo) : null;
    }

    public MediaCodec.CryptoInfo a() {
        return this.f46652i;
    }

    public void b(int i10) {
        if (i10 == 0) {
            return;
        }
        if (this.f46647d == null) {
            int[] iArr = new int[1];
            this.f46647d = iArr;
            this.f46652i.numBytesOfClearData = iArr;
        }
        int[] iArr2 = this.f46647d;
        iArr2[0] = iArr2[0] + i10;
    }

    public void c(int i10, int[] iArr, int[] iArr2, byte[] bArr, byte[] bArr2, int i11, int i12, int i13) {
        this.f46649f = i10;
        this.f46647d = iArr;
        this.f46648e = iArr2;
        this.f46645b = bArr;
        this.f46644a = bArr2;
        this.f46646c = i11;
        this.f46650g = i12;
        this.f46651h = i13;
        MediaCodec.CryptoInfo cryptoInfo = this.f46652i;
        cryptoInfo.numSubSamples = i10;
        cryptoInfo.numBytesOfClearData = iArr;
        cryptoInfo.numBytesOfEncryptedData = iArr2;
        cryptoInfo.key = bArr;
        cryptoInfo.iv = bArr2;
        cryptoInfo.mode = i11;
        if (w0.f39060a >= 24) {
            ((b) ne.a.e(this.f46653j)).b(i12, i13);
        }
    }
}
