package lv;

import java.lang.reflect.Method;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class q {

    /* renamed from: a  reason: collision with root package name */
    private final Class f37411a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f37412b;

    /* renamed from: c  reason: collision with root package name */
    private final Method f37413c;

    /* renamed from: d  reason: collision with root package name */
    private final List f37414d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public q(Class cls, Object obj, Method method, List list) {
        this.f37411a = cls;
        this.f37412b = obj;
        this.f37413c = method;
        this.f37414d = Collections.unmodifiableList(list);
    }

    public Method a() {
        return this.f37413c;
    }

    public Class b() {
        return this.f37411a;
    }

    public String toString() {
        return String.format("%s.%s() %s", this.f37411a.getName(), this.f37413c.getName(), this.f37414d);
    }
}
