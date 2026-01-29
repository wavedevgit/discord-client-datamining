package a0;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d2 {

    /* renamed from: a  reason: collision with root package name */
    private final List f28a;

    public d2(List list) {
        this.f28a = new ArrayList(list);
    }

    public static String d(d2 d2Var) {
        ArrayList arrayList = new ArrayList();
        for (y1 y1Var : d2Var.f28a) {
            arrayList.add(y1Var.getClass().getSimpleName());
        }
        return c2.a(" | ", arrayList);
    }

    public boolean a(Class cls) {
        for (y1 y1Var : this.f28a) {
            if (cls.isAssignableFrom(y1Var.getClass())) {
                return true;
            }
        }
        return false;
    }

    public y1 b(Class cls) {
        for (y1 y1Var : this.f28a) {
            if (y1Var.getClass() == cls) {
                return y1Var;
            }
        }
        return null;
    }

    public List c(Class cls) {
        ArrayList arrayList = new ArrayList();
        for (y1 y1Var : this.f28a) {
            if (cls.isAssignableFrom(y1Var.getClass())) {
                arrayList.add(y1Var);
            }
        }
        return arrayList;
    }
}
