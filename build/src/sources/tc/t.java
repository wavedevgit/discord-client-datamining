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
    public final int f50556a;

    /* renamed from: b  reason: collision with root package name */
    public final int f50557b;

    /* renamed from: c  reason: collision with root package name */
    public final int f50558c;

    /* renamed from: d  reason: collision with root package name */
    public final int f50559d;

    /* renamed from: e  reason: collision with root package name */
    public final int f50560e;

    /* renamed from: f  reason: collision with root package name */
    public final int f50561f;

    /* renamed from: g  reason: collision with root package name */
    public final int f50562g;

    /* renamed from: h  reason: collision with root package name */
    public final int f50563h;

    /* renamed from: i  reason: collision with root package name */
    public final int f50564i;

    /* renamed from: j  reason: collision with root package name */
    public final long f50565j;

    /* renamed from: k  reason: collision with root package name */
    public final a f50566k;

    /* renamed from: l  reason: collision with root package name */
    private final Metadata f50567l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        public final long[] f50568a;

        /* renamed from: b  reason: collision with root package name */
        public final long[] f50569b;

        public a(long[] jArr, long[] jArr2) {
            this.f50568a = jArr;
            this.f50569b = jArr2;
        }
    }

    public t(byte[] bArr, int i10) {
        g0 g0Var = new g0(bArr);
        g0Var.p(i10 * 8);
        this.f50556a = g0Var.h(16);
        this.f50557b = g0Var.h(16);
        this.f50558c = g0Var.h(24);
        this.f50559d = g0Var.h(24);
        int h10 = g0Var.h(20);
        this.f50560e = h10;
        this.f50561f = j(h10);
        this.f50562g = g0Var.h(3) + 1;
        int h11 = g0Var.h(5) + 1;
        this.f50563h = h11;
        this.f50564i = e(h11);
        this.f50565j = g0Var.j(36);
        this.f50566k = null;
        this.f50567l = null;
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
        return new t(this.f50556a, this.f50557b, this.f50558c, this.f50559d, this.f50560e, this.f50562g, this.f50563h, this.f50565j, this.f50566k, h(new Metadata(list)));
    }

    public t b(a aVar) {
        return new t(this.f50556a, this.f50557b, this.f50558c, this.f50559d, this.f50560e, this.f50562g, this.f50563h, this.f50565j, aVar, this.f50567l);
    }

    public t c(List list) {
        return new t(this.f50556a, this.f50557b, this.f50558c, this.f50559d, this.f50560e, this.f50562g, this.f50563h, this.f50565j, this.f50566k, h(e0.c(list)));
    }

    public long d() {
        long j10;
        long j11;
        long j12;
        int i10 = this.f50559d;
        if (i10 > 0) {
            j11 = (i10 + this.f50558c) / 2;
            j12 = 1;
        } else {
            int i11 = this.f50556a;
            if (i11 == this.f50557b && i11 > 0) {
                j10 = i11;
            } else {
                j10 = 4096;
            }
            j11 = ((j10 * this.f50562g) * this.f50563h) / 8;
            j12 = 64;
        }
        return j11 + j12;
    }

    public long f() {
        long j10 = this.f50565j;
        if (j10 == 0) {
            return -9223372036854775807L;
        }
        return (j10 * 1000000) / this.f50560e;
    }

    public Format g(byte[] bArr, Metadata metadata) {
        bArr[4] = ByteCompanionObject.MIN_VALUE;
        int i10 = this.f50559d;
        if (i10 <= 0) {
            i10 = -1;
        }
        return new Format.b().g0("audio/flac").Y(i10).J(this.f50562g).h0(this.f50560e).V(Collections.singletonList(bArr)).Z(h(metadata)).G();
    }

    public Metadata h(Metadata metadata) {
        Metadata metadata2 = this.f50567l;
        if (metadata2 == null) {
            return metadata;
        }
        return metadata2.b(metadata);
    }

    public long i(long j10) {
        return w0.r((j10 * this.f50560e) / 1000000, 0L, this.f50565j - 1);
    }

    private t(int i10, int i11, int i12, int i13, int i14, int i15, int i16, long j10, a aVar, Metadata metadata) {
        this.f50556a = i10;
        this.f50557b = i11;
        this.f50558c = i12;
        this.f50559d = i13;
        this.f50560e = i14;
        this.f50561f = j(i14);
        this.f50562g = i15;
        this.f50563h = i16;
        this.f50564i = e(i16);
        this.f50565j = j10;
        this.f50566k = aVar;
        this.f50567l = metadata;
    }
}
