package ok;

import com.google.zxing.Result;
import java.util.EnumMap;
import java.util.Map;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    private final int[] f43985a = new int[4];

    /* renamed from: b  reason: collision with root package name */
    private final StringBuilder f43986b = new StringBuilder();

    private int a(gk.a aVar, int[] iArr, StringBuilder sb2) {
        int[] iArr2 = this.f43985a;
        iArr2[0] = 0;
        iArr2[1] = 0;
        iArr2[2] = 0;
        iArr2[3] = 0;
        int l10 = aVar.l();
        int i10 = iArr[1];
        int i11 = 0;
        for (int i12 = 0; i12 < 2 && i10 < l10; i12++) {
            int i13 = p.i(aVar, iArr2, i10, p.f43997h);
            sb2.append((char) ((i13 % 10) + 48));
            for (int i14 : iArr2) {
                i10 += i14;
            }
            if (i13 >= 10) {
                i11 |= 1 << (1 - i12);
            }
            if (i12 != 1) {
                i10 = aVar.k(aVar.j(i10));
            }
        }
        if (sb2.length() == 2) {
            if (Integer.parseInt(sb2.toString()) % 4 == i11) {
                return i10;
            }
            throw ck.k.a();
        }
        throw ck.k.a();
    }

    private static Map c(String str) {
        if (str.length() != 2) {
            return null;
        }
        EnumMap enumMap = new EnumMap(ck.o.class);
        enumMap.put((EnumMap) ck.o.ISSUE_NUMBER, (ck.o) Integer.valueOf(str));
        return enumMap;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Result b(int i10, gk.a aVar, int[] iArr) {
        StringBuilder sb2 = this.f43986b;
        sb2.setLength(0);
        int a10 = a(aVar, iArr, sb2);
        String sb3 = sb2.toString();
        Map c10 = c(sb3);
        float f10 = i10;
        Result result = new Result(sb3, null, new ck.p[]{new ck.p((iArr[0] + iArr[1]) / 2.0f, f10), new ck.p(a10, f10)}, ck.a.UPC_EAN_EXTENSION);
        if (c10 != null) {
            result.g(c10);
        }
        return result;
    }
}
