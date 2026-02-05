package gr;

import gr.i;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class p implements i.a {

    /* renamed from: a  reason: collision with root package name */
    private final List f25199a;

    /* renamed from: b  reason: collision with root package name */
    private final List f25200b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f25201c = new HashSet(3);

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(List list) {
        this.f25199a = list;
        this.f25200b = new ArrayList(list.size());
    }

    private void a(i iVar) {
        if (!this.f25200b.contains(iVar)) {
            if (!this.f25201c.contains(iVar)) {
                this.f25201c.add(iVar);
                iVar.k(this);
                this.f25201c.remove(iVar);
                if (!this.f25200b.contains(iVar)) {
                    if (hr.a.class.isAssignableFrom(iVar.getClass())) {
                        this.f25200b.add(0, iVar);
                        return;
                    } else {
                        this.f25200b.add(iVar);
                        return;
                    }
                }
                return;
            }
            throw new IllegalStateException("Cyclic dependency chain found: " + this.f25201c);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List b() {
        for (i iVar : this.f25199a) {
            a(iVar);
        }
        return this.f25200b;
    }
}
