package androidx.datastore.preferences.protobuf;

import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class b0 implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    private Iterator f4027d;

    public b0(Iterator it) {
        this.f4027d = it;
    }

    @Override // java.util.Iterator
    /* renamed from: a */
    public Map.Entry next() {
        Map.Entry entry = (Map.Entry) this.f4027d.next();
        entry.getValue();
        return entry;
    }

    @Override // java.util.Iterator
    public boolean hasNext() {
        return this.f4027d.hasNext();
    }

    @Override // java.util.Iterator
    public void remove() {
        this.f4027d.remove();
    }
}
