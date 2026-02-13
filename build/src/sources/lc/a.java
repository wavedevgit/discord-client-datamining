package lc;

import android.util.SparseArray;
import java.util.HashMap;
import yb.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private static SparseArray f36268a = new SparseArray();

    /* renamed from: b  reason: collision with root package name */
    private static HashMap f36269b;

    static {
        HashMap hashMap = new HashMap();
        f36269b = hashMap;
        hashMap.put(e.DEFAULT, 0);
        f36269b.put(e.VERY_LOW, 1);
        f36269b.put(e.HIGHEST, 2);
        for (e eVar : f36269b.keySet()) {
            f36268a.append(((Integer) f36269b.get(eVar)).intValue(), eVar);
        }
    }

    public static int a(e eVar) {
        Integer num = (Integer) f36269b.get(eVar);
        if (num != null) {
            return num.intValue();
        }
        throw new IllegalStateException("PriorityMapping is missing known Priority value " + eVar);
    }

    public static e b(int i10) {
        e eVar = (e) f36268a.get(i10);
        if (eVar != null) {
            return eVar;
        }
        throw new IllegalArgumentException("Unknown Priority for value " + i10);
    }
}
