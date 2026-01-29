package ne;

import android.util.Pair;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class f {

    /* renamed from: a  reason: collision with root package name */
    private static final byte[] f40175a = {0, 0, 0, 1};

    /* renamed from: b  reason: collision with root package name */
    private static final String[] f40176b = {"", "A", "B", "C"};

    public static String a(int i10, int i11, int i12) {
        return String.format("avc1.%02X%02X%02X", Integer.valueOf(i10), Integer.valueOf(i11), Integer.valueOf(i12));
    }

    public static List b(boolean z10) {
        return Collections.singletonList(z10 ? new byte[]{1} : new byte[]{0});
    }

    public static String c(int i10, boolean z10, int i11, int i12, int[] iArr, int i13) {
        char c10;
        String str = f40176b[i10];
        Integer valueOf = Integer.valueOf(i11);
        Integer valueOf2 = Integer.valueOf(i12);
        if (z10) {
            c10 = 'H';
        } else {
            c10 = 'L';
        }
        StringBuilder sb2 = new StringBuilder(w0.D("hvc1.%s%d.%X.%c%d", str, valueOf, valueOf2, Character.valueOf(c10), Integer.valueOf(i13)));
        int length = iArr.length;
        while (length > 0 && iArr[length - 1] == 0) {
            length--;
        }
        for (int i14 = 0; i14 < length; i14++) {
            sb2.append(String.format(".%02X", Integer.valueOf(iArr[i14])));
        }
        return sb2.toString();
    }

    public static byte[] d(byte[] bArr, int i10, int i11) {
        byte[] bArr2 = f40175a;
        byte[] bArr3 = new byte[bArr2.length + i11];
        System.arraycopy(bArr2, 0, bArr3, 0, bArr2.length);
        System.arraycopy(bArr, i10, bArr3, bArr2.length, i11);
        return bArr3;
    }

    private static int e(byte[] bArr, int i10) {
        int length = bArr.length - f40175a.length;
        while (i10 <= length) {
            if (f(bArr, i10)) {
                return i10;
            }
            i10++;
        }
        return -1;
    }

    private static boolean f(byte[] bArr, int i10) {
        if (bArr.length - i10 <= f40175a.length) {
            return false;
        }
        int i11 = 0;
        while (true) {
            byte[] bArr2 = f40175a;
            if (i11 < bArr2.length) {
                if (bArr[i10 + i11] != bArr2[i11]) {
                    return false;
                }
                i11++;
            } else {
                return true;
            }
        }
    }

    public static Pair g(byte[] bArr) {
        h0 h0Var = new h0(bArr);
        h0Var.U(9);
        int H = h0Var.H();
        h0Var.U(20);
        return Pair.create(Integer.valueOf(h0Var.L()), Integer.valueOf(H));
    }

    public static boolean h(List list) {
        if (list.size() != 1 || ((byte[]) list.get(0)).length != 1 || ((byte[]) list.get(0))[0] != 1) {
            return false;
        }
        return true;
    }

    public static byte[][] i(byte[] bArr) {
        int length;
        if (!f(bArr, 0)) {
            return null;
        }
        ArrayList arrayList = new ArrayList();
        int i10 = 0;
        do {
            arrayList.add(Integer.valueOf(i10));
            i10 = e(bArr, i10 + f40175a.length);
        } while (i10 != -1);
        byte[][] bArr2 = new byte[arrayList.size()];
        for (int i11 = 0; i11 < arrayList.size(); i11++) {
            int intValue = ((Integer) arrayList.get(i11)).intValue();
            if (i11 < arrayList.size() - 1) {
                length = ((Integer) arrayList.get(i11 + 1)).intValue();
            } else {
                length = bArr.length;
            }
            int i12 = length - intValue;
            byte[] bArr3 = new byte[i12];
            System.arraycopy(bArr, intValue, bArr3, 0, i12);
            bArr2[i11] = bArr3;
        }
        return bArr2;
    }
}
