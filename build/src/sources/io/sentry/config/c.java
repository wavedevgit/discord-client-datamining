package io.sentry.config;

import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class c implements f {

    /* renamed from: a  reason: collision with root package name */
    private final List f28066a;

    public c(List list) {
        this.f28066a = list;
    }

    @Override // io.sentry.config.f
    public Map getMap(String str) {
        ConcurrentHashMap concurrentHashMap = new ConcurrentHashMap();
        for (f fVar : this.f28066a) {
            concurrentHashMap.putAll(fVar.getMap(str));
        }
        return concurrentHashMap;
    }

    @Override // io.sentry.config.f
    public String getProperty(String str) {
        for (f fVar : this.f28066a) {
            String property = fVar.getProperty(str);
            if (property != null) {
                return property;
            }
        }
        return null;
    }
}
