package fw;

import java.lang.reflect.Method;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class q {

    /* renamed from: a  reason: collision with root package name */
    private final Class f24465a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f24466b;

    /* renamed from: c  reason: collision with root package name */
    private final Method f24467c;

    /* renamed from: d  reason: collision with root package name */
    private final List f24468d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public q(Class cls, Object obj, Method method, List list) {
        this.f24465a = cls;
        this.f24466b = obj;
        this.f24467c = method;
        this.f24468d = Collections.unmodifiableList(list);
    }

    public Method a() {
        return this.f24467c;
    }

    public Class b() {
        return this.f24465a;
    }

    public String toString() {
        return String.format("%s.%s() %s", this.f24465a.getName(), this.f24467c.getName(), this.f24468d);
    }
}
