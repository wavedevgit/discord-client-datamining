package ui;

import java.lang.annotation.Annotation;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final String f50633a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f50634b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final String f50635a;

        /* renamed from: b  reason: collision with root package name */
        private Map f50636b = null;

        b(String str) {
            this.f50635a = str;
        }

        public c a() {
            Map unmodifiableMap;
            String str = this.f50635a;
            if (this.f50636b == null) {
                unmodifiableMap = Collections.EMPTY_MAP;
            } else {
                unmodifiableMap = Collections.unmodifiableMap(new HashMap(this.f50636b));
            }
            return new c(str, unmodifiableMap);
        }

        public b b(Annotation annotation) {
            if (this.f50636b == null) {
                this.f50636b = new HashMap();
            }
            this.f50636b.put(annotation.annotationType(), annotation);
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
        return this.f50633a;
    }

    public Annotation c(Class cls) {
        return (Annotation) this.f50634b.get(cls);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (this.f50633a.equals(cVar.f50633a) && this.f50634b.equals(cVar.f50634b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f50633a.hashCode() * 31) + this.f50634b.hashCode();
    }

    public String toString() {
        return "FieldDescriptor{name=" + this.f50633a + ", properties=" + this.f50634b.values() + "}";
    }

    private c(String str, Map map) {
        this.f50633a = str;
        this.f50634b = map;
    }
}
