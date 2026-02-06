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
    private final Function1 f3792d;

    /* renamed from: e  reason: collision with root package name */
    private final List f3793e = new ArrayList();

    /* renamed from: i  reason: collision with root package name */
    private Iterator f3794i;

    public d0(Iterator it, Function1 function1) {
        this.f3792d = function1;
        this.f3794i = it;
    }

    private final void a(Object obj) {
        Iterator it = (Iterator) this.f3792d.invoke(obj);
        if (it != null && it.hasNext()) {
            this.f3793e.add(this.f3794i);
            this.f3794i = it;
            return;
        }
        while (!this.f3794i.hasNext() && !this.f3793e.isEmpty()) {
            this.f3794i = (Iterator) CollectionsKt.z0(this.f3793e);
            CollectionsKt.L(this.f3793e);
        }
    }

    @Override // java.util.Iterator
    public boolean hasNext() {
        return this.f3794i.hasNext();
    }

    @Override // java.util.Iterator
    public Object next() {
        Object next = this.f3794i.next();
        a(next);
        return next;
    }

    @Override // java.util.Iterator
    public void remove() {
        throw new UnsupportedOperationException("Operation is not supported for read-only collection");
    }
}
