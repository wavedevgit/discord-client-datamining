package ji;

import java.util.Collection;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class n extends o implements Map {
    protected abstract Map b();

    /* JADX INFO: Access modifiers changed from: protected */
    public boolean c(Object obj) {
        return a0.b(this, obj);
    }

    @Override // java.util.Map
    public void clear() {
        b().clear();
    }

    public boolean containsKey(Object obj) {
        return b().containsKey(obj);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public boolean d(Object obj) {
        return a0.c(this, obj);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public int e() {
        return q0.d(entrySet());
    }

    public Set entrySet() {
        return b().entrySet();
    }

    public Object get(Object obj) {
        return b().get(obj);
    }

    public boolean isEmpty() {
        return b().isEmpty();
    }

    public Set keySet() {
        return b().keySet();
    }

    @Override // java.util.Map
    public Object put(Object obj, Object obj2) {
        return b().put(obj, obj2);
    }

    @Override // java.util.Map
    public void putAll(Map map) {
        b().putAll(map);
    }

    @Override // java.util.Map
    public Object remove(Object obj) {
        return b().remove(obj);
    }

    public int size() {
        return b().size();
    }

    @Override // java.util.Map
    public Collection values() {
        return b().values();
    }
}
