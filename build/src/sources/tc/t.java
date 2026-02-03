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
    public final int f49978a;

    /* renamed from: b  reason: collision with root package name */
    public final int f49979b;

    /* renamed from: c  reason: collision with root package name */
    public final int f49980c;

    /* renamed from: d  reason: collision with root package name */
    public final int f49981d;

    /* renamed from: e  reason: collision with root package name */
    public final int f49982e;

    /* renamed from: f  reason: collision with root package name */
    public final int f49983f;

    /* renamed from: g  reason: collision with root package name */
    public final int f49984g;

    /* renamed from: h  reason: collision with root package name */
    public final int f49985h;

    /* renamed from: i  reason: collision with root package name */
    public final int f49986i;

    /* renamed from: j  reason: collision with root package name */
    public final long f49987j;

    /* renamed from: k  reason: collision with root package name */
    public final a f49988k;

    /* renamed from: l  reason: collision with root package name */
    private final Metadata f49989l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        public final long[] f49990a;

        /* renamed from: b  reason: collision with root package name */
        public final long[] f49991b;

        public a(long[] jArr, long[] jArr2) {
            this.f49990a = jArr;
            this.f49991b = jArr2;
        }
    }

    public t(byte[] bArr, int i10) {
        g0 g0Var = new g0(bArr);
        g0Var.p(i10 * 8);
        this.f49978a = g0Var.h(16);
        this.f49979b = g0Var.h(16);
        this.f49980c = g0Var.h(24);
        this.f49981d = g0Var.h(24);
        int h10 = g0Var.h(20);
        this.f49982e = h10;
        this.f49983f = j(h10);
        this.f49984g = g0Var.h(3) + 1;
        int h11 = g0Var.h(5) + 1;
        this.f49985h = h11;
        this.f49986i = e(h11);
        this.f49987j = g0Var.j(36);
        this.f49988k = null;
        this.f49989l = null;
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
        return new t(this.f49978a, this.f49979b, this.f49980c, this.f49981d, this.f49982e, this.f49984g, this.f49985h, this.f49987j, this.f49988k, h(new Metadata(list)));
    }

    public t b(a aVar) {
        return new t(this.f49978a, this.f49979b, this.f49980c, this.f49981d, this.f49982e, this.f49984g, this.f49985h, this.f49987j, aVar, this.f49989l);
    }

    public t c(List list) {
        return new t(this.f49978a, this.f49979b, this.f49980c, this.f49981d, this.f49982e, this.f49984g, this.f49985h, this.f49987j, this.f49988k, h(e0.c(list)));
    }

    public long d() {
        long j10;
        long j11;
        long j12;
        int i10 = this.f49981d;
        if (i10 > 0) {
            j11 = (i10 + this.f49980c) / 2;
            j12 = 1;
        } else {
            int i11 = this.f49978a;
            if (i11 == this.f49979b && i11 > 0) {
                j10 = i11;
            } else {
                j10 = 4096;
            }
            j11 = ((j10 * this.f49984g) * this.f49985h) / 8;
            j12 = 64;
        }
        return j11 + j12;
    }

    public long f() {
        long j10 = this.f49987j;
        if (j10 == 0) {
            return -9223372036854775807L;
        }
        return (j10 * 1000000) / this.f49982e;
    }

    public Format g(byte[] bArr, Metadata metadata) {
        bArr[4] = ByteCompanionObject.MIN_VALUE;
        int i10 = this.f49981d;
        if (i10 <= 0) {
            i10 = -1;
        }
        return new Format.b().g0("audio/flac").Y(i10).J(this.f49984g).h0(this.f49982e).V(Collections.singletonList(bArr)).Z(h(metadata)).G();
    }

    public Metadata h(Metadata metadata) {
        Metadata metadata2 = this.f49989l;
        if (metadata2 == null) {
            return metadata;
        }
        return metadata2.b(metadata);
    }

    public long i(long j10) {
        return w0.r((j10 * this.f49982e) / 1000000, 0L, this.f49987j - 1);
    }

    private t(int i10, int i11, int i12, int i13, int i14, int i15, int i16, long j10, a aVar, Metadata metadata) {
        this.f49978a = i10;
        this.f49979b = i11;
        this.f49980c = i12;
        this.f49981d = i13;
        this.f49982e = i14;
        this.f49983f = j(i14);
        this.f49984g = i15;
        this.f49985h = i16;
        this.f49986i = e(i16);
        this.f49987j = j10;
        this.f49988k = aVar;
        this.f49989l = metadata;
    }
}
