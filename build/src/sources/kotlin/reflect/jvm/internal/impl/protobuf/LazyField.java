package kotlin.reflect.jvm.internal.impl.protobuf;

import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class LazyField extends LazyFieldLite {

    /* renamed from: e  reason: collision with root package name */
    private final MessageLite f33957e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b implements Map.Entry {

        /* renamed from: d  reason: collision with root package name */
        private Map.Entry f33958d;

        @Override // java.util.Map.Entry
        public Object getKey() {
            return this.f33958d.getKey();
        }

        @Override // java.util.Map.Entry
        public Object getValue() {
            LazyField lazyField = (LazyField) this.f33958d.getValue();
            if (lazyField == null) {
                return null;
            }
            return lazyField.getValue();
        }

        @Override // java.util.Map.Entry
        public Object setValue(Object obj) {
            if (obj instanceof MessageLite) {
                return ((LazyField) this.f33958d.getValue()).setValue((MessageLite) obj);
            }
            throw new IllegalArgumentException("LazyField now only used for MessageSet, and the value of MessageSet must be an instance of MessageLite");
        }

        private b(Map.Entry entry) {
            this.f33958d = entry;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static class c implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        private Iterator f33959d;

        public c(Iterator it) {
            this.f33959d = it;
        }

        @Override // java.util.Iterator
        /* renamed from: a */
        public Map.Entry next() {
            Map.Entry entry = (Map.Entry) this.f33959d.next();
            if (entry.getValue() instanceof LazyField) {
                return new b(entry);
            }
            return entry;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            return this.f33959d.hasNext();
        }

        @Override // java.util.Iterator
        public void remove() {
            this.f33959d.remove();
        }
    }

    public boolean equals(Object obj) {
        return getValue().equals(obj);
    }

    public MessageLite getValue() {
        return getValue(this.f33957e);
    }

    public int hashCode() {
        return getValue().hashCode();
    }

    public String toString() {
        return getValue().toString();
    }
}
