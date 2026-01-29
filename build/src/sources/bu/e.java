package bu;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import okio.ByteString;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    public static final e f7888a = new e();

    /* renamed from: b  reason: collision with root package name */
    public static final ByteString f7889b = ByteString.f44363o.g("PRI * HTTP/2.0\r\n\r\nSM\r\n\r\n");

    /* renamed from: c  reason: collision with root package name */
    private static final String[] f7890c = {"DATA", "HEADERS", "PRIORITY", "RST_STREAM", "SETTINGS", "PUSH_PROMISE", "PING", "GOAWAY", "WINDOW_UPDATE", "CONTINUATION"};

    /* renamed from: d  reason: collision with root package name */
    private static final String[] f7891d = new String[64];

    /* renamed from: e  reason: collision with root package name */
    private static final String[] f7892e;

    static {
        int i10;
        String[] strArr = new String[IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER];
        for (int i11 = 0; i11 < 256; i11++) {
            String binaryString = Integer.toBinaryString(i11);
            Intrinsics.checkNotNullExpressionValue(binaryString, "toBinaryString(it)");
            strArr[i11] = StringsKt.I(ut.e.t("%8s", binaryString), ' ', '0', false, 4, null);
        }
        f7892e = strArr;
        String[] strArr2 = f7891d;
        strArr2[0] = "";
        strArr2[1] = "END_STREAM";
        int[] iArr = {1};
        strArr2[8] = "PADDED";
        strArr2[iArr[0] | 8] = strArr2[i10] + "|PADDED";
        strArr2[4] = "END_HEADERS";
        strArr2[32] = "PRIORITY";
        strArr2[36] = "END_HEADERS|PRIORITY";
        int[] iArr2 = {4, 32, 36};
        for (int i12 = 0; i12 < 3; i12++) {
            int i13 = iArr2[i12];
            int i14 = iArr[0];
            String[] strArr3 = f7891d;
            int i15 = i14 | i13;
            strArr3[i15] = strArr3[i14] + '|' + strArr3[i13];
            strArr3[i15 | 8] = strArr3[i14] + '|' + strArr3[i13] + "|PADDED";
        }
        int length = f7891d.length;
        for (int i16 = 0; i16 < length; i16++) {
            String[] strArr4 = f7891d;
            if (strArr4[i16] == null) {
                strArr4[i16] = f7892e[i16];
            }
        }
    }

    private e() {
    }

    public final String a(int i10, int i11) {
        String str;
        if (i11 == 0) {
            return "";
        }
        if (i10 != 2 && i10 != 3) {
            if (i10 != 4 && i10 != 6) {
                if (i10 != 7 && i10 != 8) {
                    String[] strArr = f7891d;
                    if (i11 < strArr.length) {
                        str = strArr[i11];
                        Intrinsics.checkNotNull(str);
                    } else {
                        str = f7892e[i11];
                    }
                    String str2 = str;
                    if (i10 == 5 && (i11 & 4) != 0) {
                        return StringsKt.J(str2, "HEADERS", "PUSH_PROMISE", false, 4, null);
                    }
                    if (i10 == 0 && (i11 & 32) != 0) {
                        return StringsKt.J(str2, "PRIORITY", "COMPRESSED", false, 4, null);
                    }
                    return str2;
                }
            } else if (i11 == 1) {
                return "ACK";
            } else {
                return f7892e[i11];
            }
        }
        return f7892e[i11];
    }

    public final String b(int i10) {
        String[] strArr = f7890c;
        if (i10 < strArr.length) {
            return strArr[i10];
        }
        return ut.e.t("0x%02x", Integer.valueOf(i10));
    }

    public final String c(boolean z10, int i10, int i11, int i12, int i13) {
        String str;
        String b10 = b(i12);
        String a10 = a(i12, i13);
        if (z10) {
            str = "<<";
        } else {
            str = ">>";
        }
        return ut.e.t("%s 0x%08x %5d %-13s %s", str, Integer.valueOf(i10), Integer.valueOf(i11), b10, a10);
    }
}
