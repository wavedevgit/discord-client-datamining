package u;

import a0.d2;
import androidx.camera.camera2.internal.compat.quirk.CaptureSessionOnClosedNotCalledQuirk;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import q.g4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private final CaptureSessionOnClosedNotCalledQuirk f51120a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void a(g4 g4Var);
    }

    public h(d2 d2Var) {
        this.f51120a = (CaptureSessionOnClosedNotCalledQuirk) d2Var.b(CaptureSessionOnClosedNotCalledQuirk.class);
    }

    private void a(Set set) {
        Iterator it = set.iterator();
        while (it.hasNext()) {
            g4 g4Var = (g4) it.next();
            g4Var.c().q(g4Var);
        }
    }

    private void b(Set set) {
        Iterator it = set.iterator();
        while (it.hasNext()) {
            g4 g4Var = (g4) it.next();
            g4Var.c().r(g4Var);
        }
    }

    public void c(g4 g4Var, List list, List list2, a aVar) {
        g4 g4Var2;
        g4 g4Var3;
        if (d()) {
            LinkedHashSet linkedHashSet = new LinkedHashSet();
            Iterator it = list.iterator();
            while (it.hasNext() && (g4Var3 = (g4) it.next()) != g4Var) {
                linkedHashSet.add(g4Var3);
            }
            b(linkedHashSet);
        }
        aVar.a(g4Var);
        if (d()) {
            LinkedHashSet linkedHashSet2 = new LinkedHashSet();
            Iterator it2 = list2.iterator();
            while (it2.hasNext() && (g4Var2 = (g4) it2.next()) != g4Var) {
                linkedHashSet2.add(g4Var2);
            }
            a(linkedHashSet2);
        }
    }

    public boolean d() {
        if (this.f51120a != null) {
            return true;
        }
        return false;
    }
}
