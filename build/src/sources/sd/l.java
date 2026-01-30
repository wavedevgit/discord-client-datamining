package sd;

import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.upstream.DataSource;
import java.util.Arrays;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class l extends f {

    /* renamed from: j  reason: collision with root package name */
    private byte[] f48991j;

    /* renamed from: k  reason: collision with root package name */
    private volatile boolean f48992k;

    public l(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, int i10, Format format, int i11, Object obj, byte[] bArr) {
        super(dataSource, aVar, i10, format, i11, obj, -9223372036854775807L, -9223372036854775807L);
        byte[] bArr2;
        if (bArr == null) {
            bArr2 = w0.f40300f;
        } else {
            bArr2 = bArr;
        }
        this.f48991j = bArr2;
    }

    private void i(int i10) {
        byte[] bArr = this.f48991j;
        if (bArr.length < i10 + 16384) {
            this.f48991j = Arrays.copyOf(bArr, bArr.length + 16384);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.i.e
    public final void b() {
        try {
            this.f48962i.b(this.f48955b);
            int i10 = 0;
            int i11 = 0;
            while (i10 != -1 && !this.f48992k) {
                i(i11);
                i10 = this.f48962i.read(this.f48991j, i11, 16384);
                if (i10 != -1) {
                    i11 += i10;
                }
            }
            if (!this.f48992k) {
                g(this.f48991j, i11);
            }
            le.o.a(this.f48962i);
        } catch (Throwable th2) {
            le.o.a(this.f48962i);
            throw th2;
        }
    }

    @Override // com.google.android.exoplayer2.upstream.i.e
    public final void c() {
        this.f48992k = true;
    }

    protected abstract void g(byte[] bArr, int i10);

    public byte[] h() {
        return this.f48991j;
    }
}
