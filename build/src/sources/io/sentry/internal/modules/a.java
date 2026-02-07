package io.sentry.internal.modules;

import io.sentry.ILogger;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends d {

    /* renamed from: e  reason: collision with root package name */
    private final List f28255e;

    public a(List list, ILogger iLogger) {
        super(iLogger);
        this.f28255e = list;
    }

    @Override // io.sentry.internal.modules.d
    protected Map b() {
        TreeMap treeMap = new TreeMap();
        for (b bVar : this.f28255e) {
            Map a10 = bVar.a();
            if (a10 != null) {
                treeMap.putAll(a10);
            }
        }
        return treeMap;
    }
}
