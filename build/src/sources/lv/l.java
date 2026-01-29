package lv;

import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class l {
    /* JADX INFO: Access modifiers changed from: private */
    public static final String b(String str, String str2, String str3, int i10) {
        if (i10 > 0) {
            return b(StringsKt.L(str, str2, str3, false, 4, null), str2, str3, i10 - 1);
        }
        return str;
    }
}
