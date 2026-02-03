package dr;

import dr.i;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class p implements i.a {

    /* renamed from: a  reason: collision with root package name */
    private final List f20875a;

    /* renamed from: b  reason: collision with root package name */
    private final List f20876b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f20877c = new HashSet(3);

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(List list) {
        this.f20875a = list;
        this.f20876b = new ArrayList(list.size());
    }

    private void a(i iVar) {
        if (!this.f20876b.contains(iVar)) {
            if (!this.f20877c.contains(iVar)) {
                this.f20877c.add(iVar);
                iVar.b(this);
                this.f20877c.remove(iVar);
                if (!this.f20876b.contains(iVar)) {
                    if (er.a.class.isAssignableFrom(iVar.getClass())) {
                        this.f20876b.add(0, iVar);
                        return;
                    } else {
                        this.f20876b.add(iVar);
                        return;
                    }
                }
                return;
            }
            throw new IllegalStateException("Cyclic dependency chain found: " + this.f20877c);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List b() {
        for (i iVar : this.f20875a) {
            a(iVar);
        }
        return this.f20876b;
    }
}
