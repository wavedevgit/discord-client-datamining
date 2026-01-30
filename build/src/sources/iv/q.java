package iv;

import java.lang.reflect.Method;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class q {

    /* renamed from: a  reason: collision with root package name */
    private final Class f31376a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f31377b;

    /* renamed from: c  reason: collision with root package name */
    private final Method f31378c;

    /* renamed from: d  reason: collision with root package name */
    private final List f31379d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public q(Class cls, Object obj, Method method, List list) {
        this.f31376a = cls;
        this.f31377b = obj;
        this.f31378c = method;
        this.f31379d = Collections.unmodifiableList(list);
    }

    public Method a() {
        return this.f31378c;
    }

    public Class b() {
        return this.f31376a;
    }

    public String toString() {
        return String.format("%s.%s() %s", this.f31376a.getName(), this.f31378c.getName(), this.f31379d);
    }
}
