package wq;

import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.Map;
import wq.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f extends wq.a {

    /* renamed from: b  reason: collision with root package name */
    private static final h f52651b = e.a(Collections.EMPTY_MAP);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends a.AbstractC0709a {
        public f b() {
            return new f(this.f52645a);
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
        LinkedHashMap c10 = wq.b.c(a().size());
        for (Map.Entry entry : a().entrySet()) {
            c10.put(entry.getKey(), ((h) entry.getValue()).get());
        }
        return Collections.unmodifiableMap(c10);
    }

    private f(Map map) {
        super(map);
    }
}
