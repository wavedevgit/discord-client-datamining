package vc;

import com.google.android.exoplayer2.Format;
import ji.s;
import ne.h0;
import ne.w0;
import ne.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g implements a {

    /* renamed from: a  reason: collision with root package name */
    public final Format f51375a;

    public g(Format format) {
        this.f51375a = format;
    }

    private static String a(int i10) {
        switch (i10) {
            case 808802372:
            case 877677894:
            case 1145656883:
            case 1145656920:
            case 1482049860:
            case 1684633208:
            case 2021026148:
                return "video/mp4v-es";
            case 826496577:
            case 828601953:
            case 875967048:
                return "video/avc";
            case 842289229:
                return "video/mp42";
            case 859066445:
                return "video/mp43";
            case 1196444237:
            case 1735420525:
                return "video/mjpeg";
            default:
                return null;
        }
    }

    private static String b(int i10) {
        if (i10 != 1) {
            if (i10 != 85) {
                if (i10 != 255) {
                    if (i10 != 8192) {
                        if (i10 != 8193) {
                            return null;
                        }
                        return "audio/vnd.dts";
                    }
                    return "audio/ac3";
                }
                return "audio/mp4a-latm";
            }
            return "audio/mpeg";
        }
        return "audio/raw";
    }

    private static a c(h0 h0Var) {
        h0Var.V(4);
        int u10 = h0Var.u();
        int u11 = h0Var.u();
        h0Var.V(4);
        int u12 = h0Var.u();
        String a10 = a(u12);
        if (a10 == null) {
            y.i("StreamFormatChunk", "Ignoring track with unsupported compression " + u12);
            return null;
        }
        Format.b bVar = new Format.b();
        bVar.n0(u10).S(u11).g0(a10);
        return new g(bVar.G());
    }

    public static a d(int i10, h0 h0Var) {
        if (i10 == 2) {
            return c(h0Var);
        }
        if (i10 == 1) {
            return e(h0Var);
        }
        y.i("StreamFormatChunk", "Ignoring strf box for unsupported track type: " + w0.q0(i10));
        return null;
    }

    private static a e(h0 h0Var) {
        int z10 = h0Var.z();
        String b10 = b(z10);
        if (b10 == null) {
            y.i("StreamFormatChunk", "Ignoring track with unsupported format tag " + z10);
            return null;
        }
        int z11 = h0Var.z();
        int u10 = h0Var.u();
        h0Var.V(6);
        int g02 = w0.g0(h0Var.N());
        int z12 = h0Var.z();
        byte[] bArr = new byte[z12];
        h0Var.l(bArr, 0, z12);
        Format.b bVar = new Format.b();
        bVar.g0(b10).J(z11).h0(u10);
        if ("audio/raw".equals(b10) && g02 != 0) {
            bVar.a0(g02);
        }
        if ("audio/mp4a-latm".equals(b10) && z12 > 0) {
            bVar.V(s.s(bArr));
        }
        return new g(bVar.G());
    }

    @Override // vc.a
    public int getType() {
        return 1718776947;
    }
}
