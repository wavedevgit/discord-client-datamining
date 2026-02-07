package vv;

import java.lang.reflect.Method;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class q {

    /* renamed from: a  reason: collision with root package name */
    private final Class f53112a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f53113b;

    /* renamed from: c  reason: collision with root package name */
    private final Method f53114c;

    /* renamed from: d  reason: collision with root package name */
    private final List f53115d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public q(Class cls, Object obj, Method method, List list) {
        this.f53112a = cls;
        this.f53113b = obj;
        this.f53114c = method;
        this.f53115d = Collections.unmodifiableList(list);
    }

    public Method a() {
        return this.f53114c;
    }

    public Class b() {
        return this.f53112a;
    }

    public String toString() {
        return String.format("%s.%s() %s", this.f53112a.getName(), this.f53114c.getName(), this.f53115d);
    }
}
