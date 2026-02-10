package mk;

import java.nio.charset.Charset;
import java.nio.charset.UnsupportedCharsetException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class n {

    /* renamed from: a  reason: collision with root package name */
    private static final Charset f37238a = Charset.defaultCharset();

    /* renamed from: b  reason: collision with root package name */
    public static final Charset f37239b;

    /* renamed from: c  reason: collision with root package name */
    public static final Charset f37240c;

    /* renamed from: d  reason: collision with root package name */
    private static final Charset f37241d;

    /* renamed from: e  reason: collision with root package name */
    private static final boolean f37242e;

    static {
        Charset charset;
        Charset charset2;
        boolean z10;
        Charset charset3 = null;
        try {
            charset = Charset.forName("SJIS");
        } catch (UnsupportedCharsetException unused) {
            charset = null;
        }
        f37239b = charset;
        try {
            charset2 = Charset.forName("GB2312");
        } catch (UnsupportedCharsetException unused2) {
            charset2 = null;
        }
        f37240c = charset2;
        try {
            charset3 = Charset.forName("EUC_JP");
        } catch (UnsupportedCharsetException unused3) {
        }
        f37241d = charset3;
        Charset charset4 = f37239b;
        if ((charset4 != null && charset4.equals(f37238a)) || (charset3 != null && charset3.equals(f37238a))) {
            z10 = true;
        } else {
            z10 = false;
        }
        f37242e = z10;
    }

    /* JADX WARN: Removed duplicated region for block: B:112:0x011d  */
    /* JADX WARN: Removed duplicated region for block: B:66:0x00b3  */
    /* JADX WARN: Removed duplicated region for block: B:80:0x00cf  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static java.nio.charset.Charset a(byte[] r21, java.util.Map r22) {
        /*
            Method dump skipped, instructions count: 368
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: mk.n.a(byte[], java.util.Map):java.nio.charset.Charset");
    }
}
