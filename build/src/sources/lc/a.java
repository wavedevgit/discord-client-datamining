package lc;

import android.util.SparseArray;
import java.util.HashMap;
import yb.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private static SparseArray f35700a = new SparseArray();

    /* renamed from: b  reason: collision with root package name */
    private static HashMap f35701b;

    static {
        HashMap hashMap = new HashMap();
        f35701b = hashMap;
        hashMap.put(e.DEFAULT, 0);
        f35701b.put(e.VERY_LOW, 1);
        f35701b.put(e.HIGHEST, 2);
        for (e eVar : f35701b.keySet()) {
            f35700a.append(((Integer) f35701b.get(eVar)).intValue(), eVar);
        }
    }

    public static int a(e eVar) {
        Integer num = (Integer) f35701b.get(eVar);
        if (num != null) {
            return num.intValue();
        }
        throw new IllegalStateException("PriorityMapping is missing known Priority value " + eVar);
    }

    public static e b(int i10) {
        e eVar = (e) f35700a.get(i10);
        if (eVar != null) {
            return eVar;
        }
        throw new IllegalArgumentException("Unknown Priority for value " + i10);
    }
}
