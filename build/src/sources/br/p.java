package br;

import br.i;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class p implements i.a {

    /* renamed from: a  reason: collision with root package name */
    private final List f7559a;

    /* renamed from: b  reason: collision with root package name */
    private final List f7560b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f7561c = new HashSet(3);

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(List list) {
        this.f7559a = list;
        this.f7560b = new ArrayList(list.size());
    }

    private void a(i iVar) {
        if (!this.f7560b.contains(iVar)) {
            if (!this.f7561c.contains(iVar)) {
                this.f7561c.add(iVar);
                iVar.c(this);
                this.f7561c.remove(iVar);
                if (!this.f7560b.contains(iVar)) {
                    if (cr.a.class.isAssignableFrom(iVar.getClass())) {
                        this.f7560b.add(0, iVar);
                        return;
                    } else {
                        this.f7560b.add(iVar);
                        return;
                    }
                }
                return;
            }
            throw new IllegalStateException("Cyclic dependency chain found: " + this.f7561c);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List b() {
        for (i iVar : this.f7559a) {
            a(iVar);
        }
        return this.f7560b;
    }
}
