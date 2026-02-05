package io.sentry.clientreport;

import io.sentry.util.r;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b implements i {

    /* renamed from: a  reason: collision with root package name */
    private final r f28857a = new r(new r.a() { // from class: io.sentry.clientreport.a
        @Override // io.sentry.util.r.a
        public final Object a() {
            return b.c();
        }
    });

    public static /* synthetic */ Map c() {
        f[] values;
        ConcurrentHashMap concurrentHashMap = new ConcurrentHashMap();
        for (f fVar : f.values()) {
            for (io.sentry.j jVar : io.sentry.j.values()) {
                concurrentHashMap.put(new d(fVar.getReason(), jVar.getCategory()), new AtomicLong(0L));
            }
        }
        return Collections.unmodifiableMap(concurrentHashMap);
    }

    @Override // io.sentry.clientreport.i
    public void a(d dVar, Long l10) {
        AtomicLong atomicLong = (AtomicLong) ((Map) this.f28857a.a()).get(dVar);
        if (atomicLong != null) {
            atomicLong.addAndGet(l10.longValue());
        }
    }

    @Override // io.sentry.clientreport.i
    public List b() {
        ArrayList arrayList = new ArrayList();
        for (Map.Entry entry : ((Map) this.f28857a.a()).entrySet()) {
            long andSet = ((AtomicLong) entry.getValue()).getAndSet(0L);
            Long valueOf = Long.valueOf(andSet);
            if (andSet > 0) {
                arrayList.add(new g(((d) entry.getKey()).b(), ((d) entry.getKey()).a(), valueOf));
            }
        }
        return arrayList;
    }
}
