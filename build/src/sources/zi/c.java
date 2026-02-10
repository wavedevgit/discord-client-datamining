package zi;

import java.lang.annotation.Annotation;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final String f56449a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f56450b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final String f56451a;

        /* renamed from: b  reason: collision with root package name */
        private Map f56452b = null;

        b(String str) {
            this.f56451a = str;
        }

        public c a() {
            Map unmodifiableMap;
            String str = this.f56451a;
            if (this.f56452b == null) {
                unmodifiableMap = Collections.EMPTY_MAP;
            } else {
                unmodifiableMap = Collections.unmodifiableMap(new HashMap(this.f56452b));
            }
            return new c(str, unmodifiableMap);
        }

        public b b(Annotation annotation) {
            if (this.f56452b == null) {
                this.f56452b = new HashMap();
            }
            this.f56452b.put(annotation.annotationType(), annotation);
            return this;
        }
    }

    public static b a(String str) {
        return new b(str);
    }

    public static c d(String str) {
        return new c(str, Collections.EMPTY_MAP);
    }

    public String b() {
        return this.f56449a;
    }

    public Annotation c(Class cls) {
        return (Annotation) this.f56450b.get(cls);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (this.f56449a.equals(cVar.f56449a) && this.f56450b.equals(cVar.f56450b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f56449a.hashCode() * 31) + this.f56450b.hashCode();
    }

    public String toString() {
        return "FieldDescriptor{name=" + this.f56449a + ", properties=" + this.f56450b.values() + "}";
    }

    private c(String str, Map map) {
        this.f56449a = str;
        this.f56450b = map;
    }
}
