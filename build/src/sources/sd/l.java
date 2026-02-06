package sd;

import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.upstream.DataSource;
import java.util.Arrays;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class l extends f {

    /* renamed from: j  reason: collision with root package name */
    private byte[] f49922j;

    /* renamed from: k  reason: collision with root package name */
    private volatile boolean f49923k;

    public l(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, int i10, Format format, int i11, Object obj, byte[] bArr) {
        super(dataSource, aVar, i10, format, i11, obj, -9223372036854775807L, -9223372036854775807L);
        byte[] bArr2;
        if (bArr == null) {
            bArr2 = w0.f39017f;
        } else {
            bArr2 = bArr;
        }
        this.f49922j = bArr2;
    }

    private void i(int i10) {
        byte[] bArr = this.f49922j;
        if (bArr.length < i10 + 16384) {
            this.f49922j = Arrays.copyOf(bArr, bArr.length + 16384);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.j.e
    public final void b() {
        try {
            this.f49893i.b(this.f49886b);
            int i10 = 0;
            int i11 = 0;
            while (i10 != -1 && !this.f49923k) {
                i(i11);
                i10 = this.f49893i.read(this.f49922j, i11, 16384);
                if (i10 != -1) {
                    i11 += i10;
                }
            }
            if (!this.f49923k) {
                g(this.f49922j, i11);
            }
            le.o.a(this.f49893i);
        } catch (Throwable th2) {
            le.o.a(this.f49893i);
            throw th2;
        }
    }

    @Override // com.google.android.exoplayer2.upstream.j.e
    public final void c() {
        this.f49923k = true;
    }

    protected abstract void g(byte[] bArr, int i10);

    public byte[] h() {
        return this.f49922j;
    }
}
