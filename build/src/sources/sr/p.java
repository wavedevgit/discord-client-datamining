package sr;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import sr.i;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class p implements i.a {

    /* renamed from: a  reason: collision with root package name */
    private final List f48906a;

    /* renamed from: b  reason: collision with root package name */
    private final List f48907b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f48908c = new HashSet(3);

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(List list) {
        this.f48906a = list;
        this.f48907b = new ArrayList(list.size());
    }

    private void a(i iVar) {
        if (!this.f48907b.contains(iVar)) {
            if (!this.f48908c.contains(iVar)) {
                this.f48908c.add(iVar);
                iVar.i(this);
                this.f48908c.remove(iVar);
                if (!this.f48907b.contains(iVar)) {
                    if (tr.a.class.isAssignableFrom(iVar.getClass())) {
                        this.f48907b.add(0, iVar);
                        return;
                    } else {
                        this.f48907b.add(iVar);
                        return;
                    }
                }
                return;
            }
            throw new IllegalStateException("Cyclic dependency chain found: " + this.f48908c);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List b() {
        for (i iVar : this.f48906a) {
            a(iVar);
        }
        return this.f48907b;
    }
}
