package bj;

import java.lang.annotation.Annotation;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final String f7203a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f7204b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final String f7205a;

        /* renamed from: b  reason: collision with root package name */
        private Map f7206b = null;

        b(String str) {
            this.f7205a = str;
        }

        public c a() {
            Map unmodifiableMap;
            String str = this.f7205a;
            if (this.f7206b == null) {
                unmodifiableMap = Collections.EMPTY_MAP;
            } else {
                unmodifiableMap = Collections.unmodifiableMap(new HashMap(this.f7206b));
            }
            return new c(str, unmodifiableMap);
        }

        public b b(Annotation annotation) {
            if (this.f7206b == null) {
                this.f7206b = new HashMap();
            }
            this.f7206b.put(annotation.annotationType(), annotation);
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
        return this.f7203a;
    }

    public Annotation c(Class cls) {
        return (Annotation) this.f7204b.get(cls);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (this.f7203a.equals(cVar.f7203a) && this.f7204b.equals(cVar.f7204b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f7203a.hashCode() * 31) + this.f7204b.hashCode();
    }

    public String toString() {
        return "FieldDescriptor{name=" + this.f7203a + ", properties=" + this.f7204b.values() + "}";
    }

    private c(String str, Map map) {
        this.f7203a = str;
        this.f7204b = map;
    }
}
