package ui;

import java.lang.annotation.Annotation;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final String f50277a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f50278b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final String f50279a;

        /* renamed from: b  reason: collision with root package name */
        private Map f50280b = null;

        b(String str) {
            this.f50279a = str;
        }

        public c a() {
            Map unmodifiableMap;
            String str = this.f50279a;
            if (this.f50280b == null) {
                unmodifiableMap = Collections.EMPTY_MAP;
            } else {
                unmodifiableMap = Collections.unmodifiableMap(new HashMap(this.f50280b));
            }
            return new c(str, unmodifiableMap);
        }

        public b b(Annotation annotation) {
            if (this.f50280b == null) {
                this.f50280b = new HashMap();
            }
            this.f50280b.put(annotation.annotationType(), annotation);
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
        return this.f50277a;
    }

    public Annotation c(Class cls) {
        return (Annotation) this.f50278b.get(cls);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (this.f50277a.equals(cVar.f50277a) && this.f50278b.equals(cVar.f50278b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f50277a.hashCode() * 31) + this.f50278b.hashCode();
    }

    public String toString() {
        return "FieldDescriptor{name=" + this.f50277a + ", properties=" + this.f50278b.values() + "}";
    }

    private c(String str, Map map) {
        this.f50277a = str;
        this.f50278b = map;
    }
}
