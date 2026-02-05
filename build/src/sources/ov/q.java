package ov;

import java.lang.reflect.Method;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class q {

    /* renamed from: a  reason: collision with root package name */
    private final Class f44619a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f44620b;

    /* renamed from: c  reason: collision with root package name */
    private final Method f44621c;

    /* renamed from: d  reason: collision with root package name */
    private final List f44622d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public q(Class cls, Object obj, Method method, List list) {
        this.f44619a = cls;
        this.f44620b = obj;
        this.f44621c = method;
        this.f44622d = Collections.unmodifiableList(list);
    }

    public Method a() {
        return this.f44621c;
    }

    public Class b() {
        return this.f44619a;
    }

    public String toString() {
        return String.format("%s.%s() %s", this.f44619a.getName(), this.f44621c.getName(), this.f44622d);
    }
}
