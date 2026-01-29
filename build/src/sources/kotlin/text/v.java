package kotlin.text;

import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class v extends u {
    /* JADX WARN: Removed duplicated region for block: B:113:0x0132  */
    /* JADX WARN: Removed duplicated region for block: B:114:0x0135  */
    /* JADX WARN: Removed duplicated region for block: B:117:0x013d  */
    /* JADX WARN: Removed duplicated region for block: B:123:0x0147  */
    /* JADX WARN: Removed duplicated region for block: B:71:0x00cc  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static final boolean o(java.lang.String r19) {
        /*
            Method dump skipped, instructions count: 379
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: kotlin.text.v.o(java.lang.String):boolean");
    }

    public static Double p(String str) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        try {
            if (o(str)) {
                return Double.valueOf(Double.parseDouble(str));
            }
        } catch (NumberFormatException unused) {
        }
        return null;
    }

    public static Float q(String str) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        try {
            if (o(str)) {
                return Float.valueOf(Float.parseFloat(str));
            }
        } catch (NumberFormatException unused) {
        }
        return null;
    }
}
