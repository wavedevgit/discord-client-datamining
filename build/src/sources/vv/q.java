package vv;

import java.lang.reflect.Method;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class q {

    /* renamed from: a  reason: collision with root package name */
    private final Class f53064a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f53065b;

    /* renamed from: c  reason: collision with root package name */
    private final Method f53066c;

    /* renamed from: d  reason: collision with root package name */
    private final List f53067d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public q(Class cls, Object obj, Method method, List list) {
        this.f53064a = cls;
        this.f53065b = obj;
        this.f53066c = method;
        this.f53067d = Collections.unmodifiableList(list);
    }

    public Method a() {
        return this.f53066c;
    }

    public Class b() {
        return this.f53064a;
    }

    public String toString() {
        return String.format("%s.%s() %s", this.f53064a.getName(), this.f53066c.getName(), this.f53067d);
    }
}
