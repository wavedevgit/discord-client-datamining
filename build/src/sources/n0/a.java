package n0;

import a0.x2;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import x.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {
    private static z a(List list) {
        if (list.isEmpty()) {
            return null;
        }
        z zVar = (z) list.get(0);
        Integer valueOf = Integer.valueOf(zVar.b());
        Integer valueOf2 = Integer.valueOf(zVar.a());
        for (int i10 = 1; i10 < list.size(); i10++) {
            z zVar2 = (z) list.get(i10);
            valueOf = c(valueOf, Integer.valueOf(zVar2.b()));
            valueOf2 = b(valueOf2, Integer.valueOf(zVar2.a()));
            if (valueOf == null || valueOf2 == null) {
                return null;
            }
        }
        return new z(valueOf.intValue(), valueOf2.intValue());
    }

    private static Integer b(Integer num, Integer num2) {
        if (num.equals(0)) {
            return num2;
        }
        if (num2.equals(0) || num.equals(num2)) {
            return num;
        }
        return null;
    }

    private static Integer c(Integer num, Integer num2) {
        if (num.equals(0)) {
            return num2;
        }
        if (!num2.equals(0)) {
            if (num.equals(2) && !num2.equals(1)) {
                return num2;
            }
            if ((!num2.equals(2) || num.equals(1)) && !num.equals(num2)) {
                return null;
            }
        }
        return num;
    }

    public static z d(Set set) {
        ArrayList arrayList = new ArrayList();
        Iterator it = set.iterator();
        while (it.hasNext()) {
            arrayList.add(((x2) it.next()).B());
        }
        return a(arrayList);
    }
}
