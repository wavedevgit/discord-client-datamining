package ir;

import ir.i;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class p implements i.a {

    /* renamed from: a  reason: collision with root package name */
    private final List f29326a;

    /* renamed from: b  reason: collision with root package name */
    private final List f29327b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f29328c = new HashSet(3);

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(List list) {
        this.f29326a = list;
        this.f29327b = new ArrayList(list.size());
    }

    private void a(i iVar) {
        if (!this.f29327b.contains(iVar)) {
            if (!this.f29328c.contains(iVar)) {
                this.f29328c.add(iVar);
                iVar.g(this);
                this.f29328c.remove(iVar);
                if (!this.f29327b.contains(iVar)) {
                    if (jr.a.class.isAssignableFrom(iVar.getClass())) {
                        this.f29327b.add(0, iVar);
                        return;
                    } else {
                        this.f29327b.add(iVar);
                        return;
                    }
                }
                return;
            }
            throw new IllegalStateException("Cyclic dependency chain found: " + this.f29328c);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List b() {
        for (i iVar : this.f29326a) {
            a(iVar);
        }
        return this.f29327b;
    }
}
