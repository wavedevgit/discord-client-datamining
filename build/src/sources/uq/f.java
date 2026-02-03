package uq;

import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.Map;
import uq.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f extends uq.a {

    /* renamed from: b  reason: collision with root package name */
    private static final h f50592b = e.a(Collections.EMPTY_MAP);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends a.AbstractC0672a {
        public f b() {
            return new f(this.f50586a);
        }

        public b c(Object obj, h hVar) {
            super.a(obj, hVar);
            return this;
        }

        private b(int i10) {
            super(i10);
        }
    }

    public static b b(int i10) {
        return new b(i10);
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public Map get() {
        LinkedHashMap c10 = uq.b.c(a().size());
        for (Map.Entry entry : a().entrySet()) {
            c10.put(entry.getKey(), ((h) entry.getValue()).get());
        }
        return Collections.unmodifiableMap(c10);
    }

    private f(Map map) {
        super(map);
    }
}
