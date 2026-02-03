package x8;

import com.facebook.webpsupport.WebpBitmapFactoryImpl;
import java.io.UnsupportedEncodingException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class c {

    /* renamed from: a  reason: collision with root package name */
    public static final boolean f53197a = true;

    /* renamed from: b  reason: collision with root package name */
    public static final boolean f53198b = e();

    /* renamed from: c  reason: collision with root package name */
    public static b f53199c = null;

    /* renamed from: d  reason: collision with root package name */
    private static boolean f53200d = false;

    /* renamed from: e  reason: collision with root package name */
    private static final byte[] f53201e = a("RIFF");

    /* renamed from: f  reason: collision with root package name */
    private static final byte[] f53202f = a("WEBP");

    /* renamed from: g  reason: collision with root package name */
    private static final byte[] f53203g = a("VP8 ");

    /* renamed from: h  reason: collision with root package name */
    private static final byte[] f53204h = a("VP8L");

    /* renamed from: i  reason: collision with root package name */
    private static final byte[] f53205i = a("VP8X");

    private static byte[] a(String str) {
        try {
            return str.getBytes("ASCII");
        } catch (UnsupportedEncodingException e10) {
            throw new RuntimeException("ASCII not found!", e10);
        }
    }

    public static boolean b(byte[] bArr, int i10) {
        boolean z10;
        boolean j10 = j(bArr, i10 + 12, f53205i);
        if ((bArr[i10 + 20] & 2) == 2) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!j10 || !z10) {
            return false;
        }
        return true;
    }

    public static boolean c(byte[] bArr, int i10, int i11) {
        if (i11 >= 21 && j(bArr, i10 + 12, f53205i)) {
            return true;
        }
        return false;
    }

    public static boolean d(byte[] bArr, int i10) {
        boolean z10;
        boolean j10 = j(bArr, i10 + 12, f53205i);
        if ((bArr[i10 + 20] & 16) == 16) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!j10 || !z10) {
            return false;
        }
        return true;
    }

    private static boolean e() {
        return true;
    }

    public static boolean f(byte[] bArr, int i10) {
        return j(bArr, i10 + 12, f53204h);
    }

    public static boolean g(byte[] bArr, int i10) {
        return j(bArr, i10 + 12, f53203g);
    }

    public static boolean h(byte[] bArr, int i10, int i11) {
        if (i11 >= 20 && j(bArr, i10, f53201e) && j(bArr, i10 + 8, f53202f)) {
            return true;
        }
        return false;
    }

    public static b i() {
        b bVar;
        if (f53200d) {
            return f53199c;
        }
        try {
            bVar = (b) WebpBitmapFactoryImpl.class.newInstance();
        } catch (Throwable unused) {
            bVar = null;
        }
        f53200d = true;
        return bVar;
    }

    private static boolean j(byte[] bArr, int i10, byte[] bArr2) {
        if (bArr2 == null || bArr == null || bArr2.length + i10 > bArr.length) {
            return false;
        }
        for (int i11 = 0; i11 < bArr2.length; i11++) {
            if (bArr[i11 + i10] != bArr2[i11]) {
                return false;
            }
        }
        return true;
    }
}
