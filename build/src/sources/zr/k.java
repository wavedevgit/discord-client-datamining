package zr;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class k {
    private static final int a(String str) {
        int h02;
        char c10 = File.separatorChar;
        int h03 = StringsKt.h0(str, c10, 0, false, 4, null);
        if (h03 == 0) {
            if (str.length() <= 1 || str.charAt(1) != c10 || (h02 = StringsKt.h0(str, c10, 2, false, 4, null)) < 0) {
                return 1;
            }
            int h04 = StringsKt.h0(str, c10, h02 + 1, false, 4, null);
            if (h04 >= 0) {
                return h04 + 1;
            }
            return str.length();
        } else if (h03 > 0 && str.charAt(h03 - 1) == ':') {
            return h03 + 1;
        } else {
            if (h03 != -1 || !StringsKt.Y(str, ':', false, 2, null)) {
                return 0;
            }
            return str.length();
        }
    }

    public static final boolean b(File file) {
        Intrinsics.checkNotNullParameter(file, "<this>");
        String path = file.getPath();
        Intrinsics.checkNotNullExpressionValue(path, "getPath(...)");
        if (a(path) > 0) {
            return true;
        }
        return false;
    }

    public static final g c(File file) {
        List list;
        Intrinsics.checkNotNullParameter(file, "<this>");
        String path = file.getPath();
        Intrinsics.checkNotNull(path);
        int a10 = a(path);
        String substring = path.substring(0, a10);
        Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
        String substring2 = path.substring(a10);
        Intrinsics.checkNotNullExpressionValue(substring2, "substring(...)");
        if (substring2.length() == 0) {
            list = CollectionsKt.l();
        } else {
            List<String> L0 = StringsKt.L0(substring2, new char[]{File.separatorChar}, false, 0, 6, null);
            ArrayList arrayList = new ArrayList(CollectionsKt.w(L0, 10));
            for (String str : L0) {
                arrayList.add(new File(str));
            }
            list = arrayList;
        }
        return new g(new File(substring), list);
    }
}
