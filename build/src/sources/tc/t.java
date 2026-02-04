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
    public final int f49975a;

    /* renamed from: b  reason: collision with root package name */
    public final int f49976b;

    /* renamed from: c  reason: collision with root package name */
    public final int f49977c;

    /* renamed from: d  reason: collision with root package name */
    public final int f49978d;

    /* renamed from: e  reason: collision with root package name */
    public final int f49979e;

    /* renamed from: f  reason: collision with root package name */
    public final int f49980f;

    /* renamed from: g  reason: collision with root package name */
    public final int f49981g;

    /* renamed from: h  reason: collision with root package name */
    public final int f49982h;

    /* renamed from: i  reason: collision with root package name */
    public final int f49983i;

    /* renamed from: j  reason: collision with root package name */
    public final long f49984j;

    /* renamed from: k  reason: collision with root package name */
    public final a f49985k;

    /* renamed from: l  reason: collision with root package name */
    private final Metadata f49986l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        public final long[] f49987a;

        /* renamed from: b  reason: collision with root package name */
        public final long[] f49988b;

        public a(long[] jArr, long[] jArr2) {
            this.f49987a = jArr;
            this.f49988b = jArr2;
        }
    }

    public t(byte[] bArr, int i10) {
        g0 g0Var = new g0(bArr);
        g0Var.p(i10 * 8);
        this.f49975a = g0Var.h(16);
        this.f49976b = g0Var.h(16);
        this.f49977c = g0Var.h(24);
        this.f49978d = g0Var.h(24);
        int h10 = g0Var.h(20);
        this.f49979e = h10;
        this.f49980f = j(h10);
        this.f49981g = g0Var.h(3) + 1;
        int h11 = g0Var.h(5) + 1;
        this.f49982h = h11;
        this.f49983i = e(h11);
        this.f49984j = g0Var.j(36);
        this.f49985k = null;
        this.f49986l = null;
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
        return new t(this.f49975a, this.f49976b, this.f49977c, this.f49978d, this.f49979e, this.f49981g, this.f49982h, this.f49984j, this.f49985k, h(new Metadata(list)));
    }

    public t b(a aVar) {
        return new t(this.f49975a, this.f49976b, this.f49977c, this.f49978d, this.f49979e, this.f49981g, this.f49982h, this.f49984j, aVar, this.f49986l);
    }

    public t c(List list) {
        return new t(this.f49975a, this.f49976b, this.f49977c, this.f49978d, this.f49979e, this.f49981g, this.f49982h, this.f49984j, this.f49985k, h(e0.c(list)));
    }

    public long d() {
        long j10;
        long j11;
        long j12;
        int i10 = this.f49978d;
        if (i10 > 0) {
            j11 = (i10 + this.f49977c) / 2;
            j12 = 1;
        } else {
            int i11 = this.f49975a;
            if (i11 == this.f49976b && i11 > 0) {
                j10 = i11;
            } else {
                j10 = 4096;
            }
            j11 = ((j10 * this.f49981g) * this.f49982h) / 8;
            j12 = 64;
        }
        return j11 + j12;
    }

    public long f() {
        long j10 = this.f49984j;
        if (j10 == 0) {
            return -9223372036854775807L;
        }
        return (j10 * 1000000) / this.f49979e;
    }

    public Format g(byte[] bArr, Metadata metadata) {
        bArr[4] = ByteCompanionObject.MIN_VALUE;
        int i10 = this.f49978d;
        if (i10 <= 0) {
            i10 = -1;
        }
        return new Format.b().g0("audio/flac").Y(i10).J(this.f49981g).h0(this.f49979e).V(Collections.singletonList(bArr)).Z(h(metadata)).G();
    }

    public Metadata h(Metadata metadata) {
        Metadata metadata2 = this.f49986l;
        if (metadata2 == null) {
            return metadata;
        }
        return metadata2.b(metadata);
    }

    public long i(long j10) {
        return w0.r((j10 * this.f49979e) / 1000000, 0L, this.f49984j - 1);
    }

    private t(int i10, int i11, int i12, int i13, int i14, int i15, int i16, long j10, a aVar, Metadata metadata) {
        this.f49975a = i10;
        this.f49976b = i11;
        this.f49977c = i12;
        this.f49978d = i13;
        this.f49979e = i14;
        this.f49980f = j(i14);
        this.f49981g = i15;
        this.f49982h = i16;
        this.f49983i = e(i16);
        this.f49984j = j10;
        this.f49985k = aVar;
        this.f49986l = metadata;
    }
}
