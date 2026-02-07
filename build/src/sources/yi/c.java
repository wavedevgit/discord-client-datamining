package yi;

import java.lang.annotation.Annotation;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final String f55424a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f55425b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final String f55426a;

        /* renamed from: b  reason: collision with root package name */
        private Map f55427b = null;

        b(String str) {
            this.f55426a = str;
        }

        public c a() {
            Map unmodifiableMap;
            String str = this.f55426a;
            if (this.f55427b == null) {
                unmodifiableMap = Collections.EMPTY_MAP;
            } else {
                unmodifiableMap = Collections.unmodifiableMap(new HashMap(this.f55427b));
            }
            return new c(str, unmodifiableMap);
        }

        public b b(Annotation annotation) {
            if (this.f55427b == null) {
                this.f55427b = new HashMap();
            }
            this.f55427b.put(annotation.annotationType(), annotation);
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
        return this.f55424a;
    }

    public Annotation c(Class cls) {
        return (Annotation) this.f55425b.get(cls);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (this.f55424a.equals(cVar.f55424a) && this.f55425b.equals(cVar.f55425b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f55424a.hashCode() * 31) + this.f55425b.hashCode();
    }

    public String toString() {
        return "FieldDescriptor{name=" + this.f55424a + ", properties=" + this.f55425b.values() + "}";
    }

    private c(String str, Map map) {
        this.f55424a = str;
        this.f55425b = map;
    }
}
