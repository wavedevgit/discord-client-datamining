package ar;

import ar.i;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class p implements i.a {

    /* renamed from: a  reason: collision with root package name */
    private final List f6745a;

    /* renamed from: b  reason: collision with root package name */
    private final List f6746b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f6747c = new HashSet(3);

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(List list) {
        this.f6745a = list;
        this.f6746b = new ArrayList(list.size());
    }

    private void a(i iVar) {
        if (!this.f6746b.contains(iVar)) {
            if (!this.f6747c.contains(iVar)) {
                this.f6747c.add(iVar);
                iVar.j(this);
                this.f6747c.remove(iVar);
                if (!this.f6746b.contains(iVar)) {
                    if (br.a.class.isAssignableFrom(iVar.getClass())) {
                        this.f6746b.add(0, iVar);
                        return;
                    } else {
                        this.f6746b.add(iVar);
                        return;
                    }
                }
                return;
            }
            throw new IllegalStateException("Cyclic dependency chain found: " + this.f6747c);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List b() {
        for (i iVar : this.f6745a) {
            a(iVar);
        }
        return this.f6746b;
    }
}
