package tc;

import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.metadata.Metadata;
import java.util.Collections;
import java.util.List;
import kotlin.jvm.internal.ByteCompanionObject;
import ne.g0;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class t {

    /* renamed from: a  reason: collision with root package name */
    public final int f49767a;

    /* renamed from: b  reason: collision with root package name */
    public final int f49768b;

    /* renamed from: c  reason: collision with root package name */
    public final int f49769c;

    /* renamed from: d  reason: collision with root package name */
    public final int f49770d;

    /* renamed from: e  reason: collision with root package name */
    public final int f49771e;

    /* renamed from: f  reason: collision with root package name */
    public final int f49772f;

    /* renamed from: g  reason: collision with root package name */
    public final int f49773g;

    /* renamed from: h  reason: collision with root package name */
    public final int f49774h;

    /* renamed from: i  reason: collision with root package name */
    public final int f49775i;

    /* renamed from: j  reason: collision with root package name */
    public final long f49776j;

    /* renamed from: k  reason: collision with root package name */
    public final a f49777k;

    /* renamed from: l  reason: collision with root package name */
    private final Metadata f49778l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        public final long[] f49779a;

        /* renamed from: b  reason: collision with root package name */
        public final long[] f49780b;

        public a(long[] jArr, long[] jArr2) {
            this.f49779a = jArr;
            this.f49780b = jArr2;
        }
    }

    public t(byte[] bArr, int i10) {
        g0 g0Var = new g0(bArr);
        g0Var.p(i10 * 8);
        this.f49767a = g0Var.h(16);
        this.f49768b = g0Var.h(16);
        this.f49769c = g0Var.h(24);
        this.f49770d = g0Var.h(24);
        int h10 = g0Var.h(20);
        this.f49771e = h10;
        this.f49772f = j(h10);
        this.f49773g = g0Var.h(3) + 1;
        int h11 = g0Var.h(5) + 1;
        this.f49774h = h11;
        this.f49775i = e(h11);
        this.f49776j = g0Var.j(36);
        this.f49777k = null;
        this.f49778l = null;
    }

    private static int e(int i10) {
        if (i10 != 8) {
            if (i10 != 12) {
                if (i10 != 16) {
                    if (i10 != 20) {
                        if (i10 != 24) {
                            return -1;
                        }
                        return 6;
                    }
                    return 5;
                }
                return 4;
            }
            return 2;
        }
        return 1;
    }

    private static int j(int i10) {
        switch (i10) {
            case 8000:
                return 4;
            case 16000:
                return 5;
            case 22050:
                return 6;
            case 24000:
                return 7;
            case 32000:
                return 8;
            case 44100:
                return 9;
            case 48000:
                return 10;
            case 88200:
                return 1;
            case 96000:
                return 11;
            case 176400:
                return 2;
            case 192000:
                return 3;
            default:
                return -1;
        }
    }

    public t a(List list) {
        return new t(this.f49767a, this.f49768b, this.f49769c, this.f49770d, this.f49771e, this.f49773g, this.f49774h, this.f49776j, this.f49777k, h(new Metadata(list)));
    }

    public t b(a aVar) {
        return new t(this.f49767a, this.f49768b, this.f49769c, this.f49770d, this.f49771e, this.f49773g, this.f49774h, this.f49776j, aVar, this.f49778l);
    }

    public t c(List list) {
        return new t(this.f49767a, this.f49768b, this.f49769c, this.f49770d, this.f49771e, this.f49773g, this.f49774h, this.f49776j, this.f49777k, h(e0.c(list)));
    }

    public long d() {
        long j10;
        long j11;
        long j12;
        int i10 = this.f49770d;
        if (i10 > 0) {
            j11 = (i10 + this.f49769c) / 2;
            j12 = 1;
        } else {
            int i11 = this.f49767a;
            if (i11 == this.f49768b && i11 > 0) {
                j10 = i11;
            } else {
                j10 = 4096;
            }
            j11 = ((j10 * this.f49773g) * this.f49774h) / 8;
            j12 = 64;
        }
        return j11 + j12;
    }

    public long f() {
        long j10 = this.f49776j;
        if (j10 == 0) {
            return -9223372036854775807L;
        }
        return (j10 * 1000000) / this.f49771e;
    }

    public Format g(byte[] bArr, Metadata metadata) {
        bArr[4] = ByteCompanionObject.MIN_VALUE;
        int i10 = this.f49770d;
        if (i10 <= 0) {
            i10 = -1;
        }
        return new Format.b().g0("audio/flac").Y(i10).J(this.f49773g).h0(this.f49771e).V(Collections.singletonList(bArr)).Z(h(metadata)).G();
    }

    public Metadata h(Metadata metadata) {
        Metadata metadata2 = this.f49778l;
        if (metadata2 == null) {
            return metadata;
        }
        return metadata2.b(metadata);
    }

    public long i(long j10) {
        return w0.r((j10 * this.f49771e) / 1000000, 0L, this.f49776j - 1);
    }

    private t(int i10, int i11, int i12, int i13, int i14, int i15, int i16, long j10, a aVar, Metadata metadata) {
        this.f49767a = i10;
        this.f49768b = i11;
        this.f49769c = i12;
        this.f49770d = i13;
        this.f49771e = i14;
        this.f49772f = j(i14);
        this.f49773g = i15;
        this.f49774h = i16;
        this.f49775i = e(i16);
        this.f49776j = j10;
        this.f49777k = aVar;
        this.f49778l = metadata;
    }
}
