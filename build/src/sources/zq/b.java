package zq;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {
    private static int a(int i10) {
        if (i10 < 3) {
            return i10 + 1;
        }
        if (i10 < 1073741824) {
            return (int) ((i10 / 0.75f) + 1.0f);
        }
        return Integer.MAX_VALUE;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static HashSet b(int i10) {
        return new HashSet(a(i10));
    }

    public static LinkedHashMap c(int i10) {
        return new LinkedHashMap(a(i10));
    }

    public static List d(int i10) {
        if (i10 == 0) {
            return Collections.EMPTY_LIST;
        }
        return new ArrayList(i10);
    }
}
