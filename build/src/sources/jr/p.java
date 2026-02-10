package jr;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import jr.i;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class p implements i.a {

    /* renamed from: a  reason: collision with root package name */
    private final List f30453a;

    /* renamed from: b  reason: collision with root package name */
    private final List f30454b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f30455c = new HashSet(3);

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(List list) {
        this.f30453a = list;
        this.f30454b = new ArrayList(list.size());
    }

    private void a(i iVar) {
        if (!this.f30454b.contains(iVar)) {
            if (!this.f30455c.contains(iVar)) {
                this.f30455c.add(iVar);
                iVar.d(this);
                this.f30455c.remove(iVar);
                if (!this.f30454b.contains(iVar)) {
                    if (kr.a.class.isAssignableFrom(iVar.getClass())) {
                        this.f30454b.add(0, iVar);
                        return;
                    } else {
                        this.f30454b.add(iVar);
                        return;
                    }
                }
                return;
            }
            throw new IllegalStateException("Cyclic dependency chain found: " + this.f30455c);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List b() {
        for (i iVar : this.f30453a) {
            a(iVar);
        }
        return this.f30454b;
    }
}
