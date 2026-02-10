package rc;

import android.media.MediaCodec;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    public byte[] f46216a;

    /* renamed from: b  reason: collision with root package name */
    public byte[] f46217b;

    /* renamed from: c  reason: collision with root package name */
    public int f46218c;

    /* renamed from: d  reason: collision with root package name */
    public int[] f46219d;

    /* renamed from: e  reason: collision with root package name */
    public int[] f46220e;

    /* renamed from: f  reason: collision with root package name */
    public int f46221f;

    /* renamed from: g  reason: collision with root package name */
    public int f46222g;

    /* renamed from: h  reason: collision with root package name */
    public int f46223h;

    /* renamed from: i  reason: collision with root package name */
    private final MediaCodec.CryptoInfo f46224i;

    /* renamed from: j  reason: collision with root package name */
    private final b f46225j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final MediaCodec.CryptoInfo f46226a;

        /* renamed from: b  reason: collision with root package name */
        private final MediaCodec.CryptoInfo.Pattern f46227b;

        /* JADX INFO: Access modifiers changed from: private */
        public void b(int i10, int i11) {
            this.f46227b.set(i10, i11);
            this.f46226a.setPattern(this.f46227b);
        }

        private b(MediaCodec.CryptoInfo cryptoInfo) {
            this.f46226a = cryptoInfo;
            this.f46227b = new MediaCodec.CryptoInfo.Pattern(0, 0);
        }
    }

    public c() {
        MediaCodec.CryptoInfo cryptoInfo = new MediaCodec.CryptoInfo();
        this.f46224i = cryptoInfo;
        this.f46225j = w0.f39037a >= 24 ? new b(cryptoInfo) : null;
    }

    public MediaCodec.CryptoInfo a() {
        return this.f46224i;
    }

    public void b(int i10) {
        if (i10 == 0) {
            return;
        }
        if (this.f46219d == null) {
            int[] iArr = new int[1];
            this.f46219d = iArr;
            this.f46224i.numBytesOfClearData = iArr;
        }
        int[] iArr2 = this.f46219d;
        iArr2[0] = iArr2[0] + i10;
    }

    public void c(int i10, int[] iArr, int[] iArr2, byte[] bArr, byte[] bArr2, int i11, int i12, int i13) {
        this.f46221f = i10;
        this.f46219d = iArr;
        this.f46220e = iArr2;
        this.f46217b = bArr;
        this.f46216a = bArr2;
        this.f46218c = i11;
        this.f46222g = i12;
        this.f46223h = i13;
        MediaCodec.CryptoInfo cryptoInfo = this.f46224i;
        cryptoInfo.numSubSamples = i10;
        cryptoInfo.numBytesOfClearData = iArr;
        cryptoInfo.numBytesOfEncryptedData = iArr2;
        cryptoInfo.key = bArr;
        cryptoInfo.iv = bArr2;
        cryptoInfo.mode = i11;
        if (w0.f39037a >= 24) {
            ((b) oe.a.e(this.f46225j)).b(i12, i13);
        }
    }
}
