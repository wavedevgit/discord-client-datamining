package iv;

import java.lang.reflect.Method;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class q {

    /* renamed from: a  reason: collision with root package name */
    private final Class f31360a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f31361b;

    /* renamed from: c  reason: collision with root package name */
    private final Method f31362c;

    /* renamed from: d  reason: collision with root package name */
    private final List f31363d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public q(Class cls, Object obj, Method method, List list) {
        this.f31360a = cls;
        this.f31361b = obj;
        this.f31362c = method;
        this.f31363d = Collections.unmodifiableList(list);
    }

    public Method a() {
        return this.f31362c;
    }

    public Class b() {
        return this.f31360a;
    }

    public String toString() {
        return String.format("%s.%s() %s", this.f31360a.getName(), this.f31362c.getName(), this.f31363d);
    }
}
