package androidx.datastore.preferences.protobuf;

import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class b0 implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    private Iterator f3573d;

    public b0(Iterator it) {
        this.f3573d = it;
    }

    @Override // java.util.Iterator
    /* renamed from: a */
    public Map.Entry next() {
        Map.Entry entry = (Map.Entry) this.f3573d.next();
        entry.getValue();
        return entry;
    }

    @Override // java.util.Iterator
    public boolean hasNext() {
        return this.f3573d.hasNext();
    }

    @Override // java.util.Iterator
    public void remove() {
        this.f3573d.remove();
    }
}
