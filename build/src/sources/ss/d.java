package ss;

import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class d {
    public static final int a(char c10) {
        return c10 - '0';
    }

    public static final boolean b(char c10) {
        if ('0' > c10 || c10 >= ':') {
            return false;
        }
        return true;
    }

    private static final String c(String str, int i10) {
        if (str.length() >= i10 + 12) {
            int i11 = 0;
            if (StringsKt.U("+-", str.charAt(0), false, 2, null)) {
                int h02 = StringsKt.h0(str, '-', 1, false, 4, null);
                if (h02 < 12) {
                    return str;
                }
                while (true) {
                    int i12 = i11 + 1;
                    if (str.charAt(i12) != '0') {
                        break;
                    }
                    i11 = i12;
                }
                if (h02 - i11 >= 12) {
                    return str;
                }
                return StringsKt.C0(str, 1, h02 - 10).toString();
            }
        }
        return str;
    }

    public static final String d(String input) {
        Intrinsics.checkNotNullParameter(input, "input");
        return c(input.toString(), 6);
    }
}
