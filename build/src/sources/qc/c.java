package qc;

import android.media.MediaCodec;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    public byte[] f46596a;

    /* renamed from: b  reason: collision with root package name */
    public byte[] f46597b;

    /* renamed from: c  reason: collision with root package name */
    public int f46598c;

    /* renamed from: d  reason: collision with root package name */
    public int[] f46599d;

    /* renamed from: e  reason: collision with root package name */
    public int[] f46600e;

    /* renamed from: f  reason: collision with root package name */
    public int f46601f;

    /* renamed from: g  reason: collision with root package name */
    public int f46602g;

    /* renamed from: h  reason: collision with root package name */
    public int f46603h;

    /* renamed from: i  reason: collision with root package name */
    private final MediaCodec.CryptoInfo f46604i;

    /* renamed from: j  reason: collision with root package name */
    private final b f46605j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final MediaCodec.CryptoInfo f46606a;

        /* renamed from: b  reason: collision with root package name */
        private final MediaCodec.CryptoInfo.Pattern f46607b;

        /* JADX INFO: Access modifiers changed from: private */
        public void b(int i10, int i11) {
            this.f46607b.set(i10, i11);
            this.f46606a.setPattern(this.f46607b);
        }

        private b(MediaCodec.CryptoInfo cryptoInfo) {
            this.f46606a = cryptoInfo;
            this.f46607b = new MediaCodec.CryptoInfo.Pattern(0, 0);
        }
    }

    public c() {
        MediaCodec.CryptoInfo cryptoInfo = new MediaCodec.CryptoInfo();
        this.f46604i = cryptoInfo;
        this.f46605j = w0.f39012a >= 24 ? new b(cryptoInfo) : null;
    }

    public MediaCodec.CryptoInfo a() {
        return this.f46604i;
    }

    public void b(int i10) {
        if (i10 == 0) {
            return;
        }
        if (this.f46599d == null) {
            int[] iArr = new int[1];
            this.f46599d = iArr;
            this.f46604i.numBytesOfClearData = iArr;
        }
        int[] iArr2 = this.f46599d;
        iArr2[0] = iArr2[0] + i10;
    }

    public void c(int i10, int[] iArr, int[] iArr2, byte[] bArr, byte[] bArr2, int i11, int i12, int i13) {
        this.f46601f = i10;
        this.f46599d = iArr;
        this.f46600e = iArr2;
        this.f46597b = bArr;
        this.f46596a = bArr2;
        this.f46598c = i11;
        this.f46602g = i12;
        this.f46603h = i13;
        MediaCodec.CryptoInfo cryptoInfo = this.f46604i;
        cryptoInfo.numSubSamples = i10;
        cryptoInfo.numBytesOfClearData = iArr;
        cryptoInfo.numBytesOfEncryptedData = iArr2;
        cryptoInfo.key = bArr;
        cryptoInfo.iv = bArr2;
        cryptoInfo.mode = i11;
        if (w0.f39012a >= 24) {
            ((b) ne.a.e(this.f46605j)).b(i12, i13);
        }
    }
}
