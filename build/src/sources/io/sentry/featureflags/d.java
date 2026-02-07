package io.sentry.featureflags;

import io.sentry.a1;
import io.sentry.protocol.f;
import io.sentry.protocol.g;
import java.util.ArrayList;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements b {

    /* renamed from: a  reason: collision with root package name */
    private Map f28187a = null;

    /* renamed from: b  reason: collision with root package name */
    private final io.sentry.util.a f28188b = new io.sentry.util.a();

    private d() {
    }

    public static b a() {
        return new d();
    }

    @Override // io.sentry.featureflags.b
    public g o() {
        a1 a10 = this.f28188b.a();
        try {
            Map map = this.f28187a;
            if (map != null && !map.isEmpty()) {
                ArrayList arrayList = new ArrayList(this.f28187a.size());
                for (Map.Entry entry : this.f28187a.entrySet()) {
                    arrayList.add(new f((String) entry.getKey(), ((Boolean) entry.getValue()).booleanValue()));
                }
                g gVar = new g(arrayList);
                if (a10 != null) {
                    a10.close();
                }
                return gVar;
            }
            if (a10 != null) {
                a10.close();
            }
            return null;
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    @Override // io.sentry.featureflags.b
    /* renamed from: clone */
    public b m1184clone() {
        return a();
    }
}
