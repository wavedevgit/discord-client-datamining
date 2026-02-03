package kotlin.reflect.jvm.internal.impl.util;

import java.util.Iterator;
import java.util.NoSuchElementException;
import kotlin.jvm.internal.markers.KMappedMarker;
/* JADX INFO: Add missing generic type declarations: [T] */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class OneElementArrayMap$iterator$1<T> implements Iterator<T>, KMappedMarker {

    /* renamed from: d  reason: collision with root package name */
    private boolean f35250d = true;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ OneElementArrayMap f35251e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public OneElementArrayMap$iterator$1(OneElementArrayMap oneElementArrayMap) {
        this.f35251e = oneElementArrayMap;
    }

    @Override // java.util.Iterator
    public boolean hasNext() {
        return this.f35250d;
    }

    @Override // java.util.Iterator
    public T next() {
        if (this.f35250d) {
            this.f35250d = false;
            return (T) this.f35251e.getValue();
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.Iterator
    public void remove() {
        throw new UnsupportedOperationException("Operation is not supported for read-only collection");
    }
}
