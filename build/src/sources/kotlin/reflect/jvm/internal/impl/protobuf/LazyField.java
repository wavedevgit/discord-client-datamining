package kotlin.reflect.jvm.internal.impl.protobuf;

import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class LazyField extends LazyFieldLite {

    /* renamed from: e  reason: collision with root package name */
    private final MessageLite f35231e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b implements Map.Entry {

        /* renamed from: d  reason: collision with root package name */
        private Map.Entry f35232d;

        @Override // java.util.Map.Entry
        public Object getKey() {
            return this.f35232d.getKey();
        }

        @Override // java.util.Map.Entry
        public Object getValue() {
            LazyField lazyField = (LazyField) this.f35232d.getValue();
            if (lazyField == null) {
                return null;
            }
            return lazyField.getValue();
        }

        @Override // java.util.Map.Entry
        public Object setValue(Object obj) {
            if (obj instanceof MessageLite) {
                return ((LazyField) this.f35232d.getValue()).setValue((MessageLite) obj);
            }
            throw new IllegalArgumentException("LazyField now only used for MessageSet, and the value of MessageSet must be an instance of MessageLite");
        }

        private b(Map.Entry entry) {
            this.f35232d = entry;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static class c implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        private Iterator f35233d;

        public c(Iterator it) {
            this.f35233d = it;
        }

        @Override // java.util.Iterator
        /* renamed from: a */
        public Map.Entry next() {
            Map.Entry entry = (Map.Entry) this.f35233d.next();
            if (entry.getValue() instanceof LazyField) {
                return new b(entry);
            }
            return entry;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            return this.f35233d.hasNext();
        }

        @Override // java.util.Iterator
        public void remove() {
            this.f35233d.remove();
        }
    }

    public boolean equals(Object obj) {
        return getValue().equals(obj);
    }

    public MessageLite getValue() {
        return getValue(this.f35231e);
    }

    public int hashCode() {
        return getValue().hashCode();
    }

    public String toString() {
        return getValue().toString();
    }
}
