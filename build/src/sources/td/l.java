package td;

import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.upstream.DataSource;
import java.util.Arrays;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class l extends f {

    /* renamed from: j  reason: collision with root package name */
    private byte[] f49312j;

    /* renamed from: k  reason: collision with root package name */
    private volatile boolean f49313k;

    public l(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, int i10, Format format, int i11, Object obj, byte[] bArr) {
        super(dataSource, aVar, i10, format, i11, obj, -9223372036854775807L, -9223372036854775807L);
        byte[] bArr2;
        if (bArr == null) {
            bArr2 = w0.f39611f;
        } else {
            bArr2 = bArr;
        }
        this.f49312j = bArr2;
    }

    private void i(int i10) {
        byte[] bArr = this.f49312j;
        if (bArr.length < i10 + 16384) {
            this.f49312j = Arrays.copyOf(bArr, bArr.length + 16384);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.j.e
    public final void a() {
        try {
            this.f49283i.b(this.f49276b);
            int i10 = 0;
            int i11 = 0;
            while (i10 != -1 && !this.f49313k) {
                i(i11);
                i10 = this.f49283i.read(this.f49312j, i11, 16384);
                if (i10 != -1) {
                    i11 += i10;
                }
            }
            if (!this.f49313k) {
                g(this.f49312j, i11);
            }
            me.o.a(this.f49283i);
        } catch (Throwable th2) {
            me.o.a(this.f49283i);
            throw th2;
        }
    }

    @Override // com.google.android.exoplayer2.upstream.j.e
    public final void c() {
        this.f49313k = true;
    }

    protected abstract void g(byte[] bArr, int i10);

    public byte[] h() {
        return this.f49312j;
    }
}
