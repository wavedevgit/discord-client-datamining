package kc;

import android.util.SparseArray;
import java.util.HashMap;
import xb.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private static SparseArray f31582a = new SparseArray();

    /* renamed from: b  reason: collision with root package name */
    private static HashMap f31583b;

    static {
        HashMap hashMap = new HashMap();
        f31583b = hashMap;
        hashMap.put(e.DEFAULT, 0);
        f31583b.put(e.VERY_LOW, 1);
        f31583b.put(e.HIGHEST, 2);
        for (e eVar : f31583b.keySet()) {
            f31582a.append(((Integer) f31583b.get(eVar)).intValue(), eVar);
        }
    }

    public static int a(e eVar) {
        Integer num = (Integer) f31583b.get(eVar);
        if (num != null) {
            return num.intValue();
        }
        throw new IllegalStateException("PriorityMapping is missing known Priority value " + eVar);
    }

    public static e b(int i10) {
        e eVar = (e) f31582a.get(i10);
        if (eVar != null) {
            return eVar;
        }
        throw new IllegalArgumentException("Unknown Priority for value " + i10);
    }
}
