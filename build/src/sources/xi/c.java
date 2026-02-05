package xi;

import java.lang.annotation.Annotation;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final String f53872a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f53873b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final String f53874a;

        /* renamed from: b  reason: collision with root package name */
        private Map f53875b = null;

        b(String str) {
            this.f53874a = str;
        }

        public c a() {
            Map unmodifiableMap;
            String str = this.f53874a;
            if (this.f53875b == null) {
                unmodifiableMap = Collections.EMPTY_MAP;
            } else {
                unmodifiableMap = Collections.unmodifiableMap(new HashMap(this.f53875b));
            }
            return new c(str, unmodifiableMap);
        }

        public b b(Annotation annotation) {
            if (this.f53875b == null) {
                this.f53875b = new HashMap();
            }
            this.f53875b.put(annotation.annotationType(), annotation);
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
        return this.f53872a;
    }

    public Annotation c(Class cls) {
        return (Annotation) this.f53873b.get(cls);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (this.f53872a.equals(cVar.f53872a) && this.f53873b.equals(cVar.f53873b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f53872a.hashCode() * 31) + this.f53873b.hashCode();
    }

    public String toString() {
        return "FieldDescriptor{name=" + this.f53872a + ", properties=" + this.f53873b.values() + "}";
    }

    private c(String str, Map map) {
        this.f53872a = str;
        this.f53873b = map;
    }
}
