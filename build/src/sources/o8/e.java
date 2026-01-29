package o8;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e extends ArrayList {
    private e(int i10) {
        super(i10);
    }

    public static e b(List list) {
        return new e(list);
    }

    public static e c(Object... objArr) {
        e eVar = new e(objArr.length);
        Collections.addAll(eVar, objArr);
        return eVar;
    }

    private e(List list) {
        super(list);
    }
}
