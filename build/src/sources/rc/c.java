package rc;

import android.media.MediaCodec;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    public byte[] f46217a;

    /* renamed from: b  reason: collision with root package name */
    public byte[] f46218b;

    /* renamed from: c  reason: collision with root package name */
    public int f46219c;

    /* renamed from: d  reason: collision with root package name */
    public int[] f46220d;

    /* renamed from: e  reason: collision with root package name */
    public int[] f46221e;

    /* renamed from: f  reason: collision with root package name */
    public int f46222f;

    /* renamed from: g  reason: collision with root package name */
    public int f46223g;

    /* renamed from: h  reason: collision with root package name */
    public int f46224h;

    /* renamed from: i  reason: collision with root package name */
    private final MediaCodec.CryptoInfo f46225i;

    /* renamed from: j  reason: collision with root package name */
    private final b f46226j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final MediaCodec.CryptoInfo f46227a;

        /* renamed from: b  reason: collision with root package name */
        private final MediaCodec.CryptoInfo.Pattern f46228b;

        /* JADX INFO: Access modifiers changed from: private */
        public void b(int i10, int i11) {
            this.f46228b.set(i10, i11);
            this.f46227a.setPattern(this.f46228b);
        }

        private b(MediaCodec.CryptoInfo cryptoInfo) {
            this.f46227a = cryptoInfo;
            this.f46228b = new MediaCodec.CryptoInfo.Pattern(0, 0);
        }
    }

    public c() {
        MediaCodec.CryptoInfo cryptoInfo = new MediaCodec.CryptoInfo();
        this.f46225i = cryptoInfo;
        this.f46226j = w0.f39038a >= 24 ? new b(cryptoInfo) : null;
    }

    public MediaCodec.CryptoInfo a() {
        return this.f46225i;
    }

    public void b(int i10) {
        if (i10 == 0) {
            return;
        }
        if (this.f46220d == null) {
            int[] iArr = new int[1];
            this.f46220d = iArr;
            this.f46225i.numBytesOfClearData = iArr;
        }
        int[] iArr2 = this.f46220d;
        iArr2[0] = iArr2[0] + i10;
    }

    public void c(int i10, int[] iArr, int[] iArr2, byte[] bArr, byte[] bArr2, int i11, int i12, int i13) {
        this.f46222f = i10;
        this.f46220d = iArr;
        this.f46221e = iArr2;
        this.f46218b = bArr;
        this.f46217a = bArr2;
        this.f46219c = i11;
        this.f46223g = i12;
        this.f46224h = i13;
        MediaCodec.CryptoInfo cryptoInfo = this.f46225i;
        cryptoInfo.numSubSamples = i10;
        cryptoInfo.numBytesOfClearData = iArr;
        cryptoInfo.numBytesOfEncryptedData = iArr2;
        cryptoInfo.key = bArr;
        cryptoInfo.iv = bArr2;
        cryptoInfo.mode = i11;
        if (w0.f39038a >= 24) {
            ((b) oe.a.e(this.f46226j)).b(i12, i13);
        }
    }
}
