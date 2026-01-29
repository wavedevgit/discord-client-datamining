package a0;

import android.util.ArrayMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class t1 extends q2 {
    private t1(Map map) {
        super(map);
    }

    public static t1 g() {
        return new t1(new ArrayMap());
    }

    public static t1 h(q2 q2Var) {
        ArrayMap arrayMap = new ArrayMap();
        for (String str : q2Var.e()) {
            arrayMap.put(str, q2Var.d(str));
        }
        return new t1(arrayMap);
    }

    public void f(q2 q2Var) {
        Map map;
        Map map2 = this.f245a;
        if (map2 != null && (map = q2Var.f245a) != null) {
            map2.putAll(map);
        }
    }

    public void i(String str, Object obj) {
        this.f245a.put(str, obj);
    }
}
