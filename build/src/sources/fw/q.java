package fw;

import java.lang.reflect.Method;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class q {

    /* renamed from: a  reason: collision with root package name */
    private final Class f24464a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f24465b;

    /* renamed from: c  reason: collision with root package name */
    private final Method f24466c;

    /* renamed from: d  reason: collision with root package name */
    private final List f24467d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public q(Class cls, Object obj, Method method, List list) {
        this.f24464a = cls;
        this.f24465b = obj;
        this.f24466c = method;
        this.f24467d = Collections.unmodifiableList(list);
    }

    public Method a() {
        return this.f24466c;
    }

    public Class b() {
        return this.f24464a;
    }

    public String toString() {
        return String.format("%s.%s() %s", this.f24464a.getName(), this.f24466c.getName(), this.f24467d);
    }
}
