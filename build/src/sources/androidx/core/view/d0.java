package androidx.core.view;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.markers.KMappedMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d0 implements Iterator, KMappedMarker {

    /* renamed from: d  reason: collision with root package name */
    private final Function1 f3489d;

    /* renamed from: e  reason: collision with root package name */
    private final List f3490e = new ArrayList();

    /* renamed from: i  reason: collision with root package name */
    private Iterator f3491i;

    public d0(Iterator it, Function1 function1) {
        this.f3489d = function1;
        this.f3491i = it;
    }

    private final void a(Object obj) {
        Iterator it = (Iterator) this.f3489d.invoke(obj);
        if (it != null && it.hasNext()) {
            this.f3490e.add(this.f3491i);
            this.f3491i = it;
            return;
        }
        while (!this.f3491i.hasNext() && !this.f3490e.isEmpty()) {
            this.f3491i = (Iterator) CollectionsKt.z0(this.f3490e);
            CollectionsKt.L(this.f3490e);
        }
    }

    @Override // java.util.Iterator
    public boolean hasNext() {
        return this.f3491i.hasNext();
    }

    @Override // java.util.Iterator
    public Object next() {
        Object next = this.f3491i.next();
        a(next);
        return next;
    }

    @Override // java.util.Iterator
    public void remove() {
        throw new UnsupportedOperationException("Operation is not supported for read-only collection");
    }
}
