package wv;

import java.lang.reflect.Method;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class q {

    /* renamed from: a  reason: collision with root package name */
    private final Class f54139a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f54140b;

    /* renamed from: c  reason: collision with root package name */
    private final Method f54141c;

    /* renamed from: d  reason: collision with root package name */
    private final List f54142d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public q(Class cls, Object obj, Method method, List list) {
        this.f54139a = cls;
        this.f54140b = obj;
        this.f54141c = method;
        this.f54142d = Collections.unmodifiableList(list);
    }

    public Method a() {
        return this.f54141c;
    }

    public Class b() {
        return this.f54139a;
    }

    public String toString() {
        return String.format("%s.%s() %s", this.f54139a.getName(), this.f54141c.getName(), this.f54142d);
    }
}
