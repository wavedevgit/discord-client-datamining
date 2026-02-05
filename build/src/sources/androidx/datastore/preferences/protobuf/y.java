package androidx.datastore.preferences.protobuf;

import java.nio.ByteBuffer;
import java.nio.charset.Charset;
import java.util.List;
import java.util.RandomAccess;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class y {

    /* renamed from: a  reason: collision with root package name */
    static final Charset f3967a = Charset.forName("UTF-8");

    /* renamed from: b  reason: collision with root package name */
    static final Charset f3968b = Charset.forName("ISO-8859-1");

    /* renamed from: c  reason: collision with root package name */
    public static final byte[] f3969c;

    /* renamed from: d  reason: collision with root package name */
    public static final ByteBuffer f3970d;

    /* renamed from: e  reason: collision with root package name */
    public static final h f3971e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        boolean a(int i10);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface b extends List, RandomAccess {
        boolean E0();

        b I0(int i10);

        void N();
    }

    static {
        byte[] bArr = new byte[0];
        f3969c = bArr;
        f3970d = ByteBuffer.wrap(bArr);
        f3971e = h.h(bArr);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Object a(Object obj) {
        obj.getClass();
        return obj;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Object b(Object obj, String str) {
        if (obj != null) {
            return obj;
        }
        throw new NullPointerException(str);
    }

    public static int c(boolean z10) {
        return z10 ? 1231 : 1237;
    }

    public static int d(byte[] bArr) {
        return e(bArr, 0, bArr.length);
    }

    static int e(byte[] bArr, int i10, int i11) {
        int i12 = i(i11, bArr, i10, i11);
        if (i12 == 0) {
            return 1;
        }
        return i12;
    }

    public static int f(long j10) {
        return (int) (j10 ^ (j10 >>> 32));
    }

    public static boolean g(byte[] bArr) {
        return p1.m(bArr);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Object h(Object obj, Object obj2) {
        return ((o0) obj).toBuilder().L((o0) obj2).D0();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int i(int i10, byte[] bArr, int i11, int i12) {
        for (int i13 = i11; i13 < i11 + i12; i13++) {
            i10 = (i10 * 31) + bArr[i13];
        }
        return i10;
    }

    public static String j(byte[] bArr) {
        return new String(bArr, f3967a);
    }
}
