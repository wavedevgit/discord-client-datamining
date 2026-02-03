package jv;

import java.lang.reflect.Method;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class q {

    /* renamed from: a  reason: collision with root package name */
    private final Class f32473a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f32474b;

    /* renamed from: c  reason: collision with root package name */
    private final Method f32475c;

    /* renamed from: d  reason: collision with root package name */
    private final List f32476d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public q(Class cls, Object obj, Method method, List list) {
        this.f32473a = cls;
        this.f32474b = obj;
        this.f32475c = method;
        this.f32476d = Collections.unmodifiableList(list);
    }

    public Method a() {
        return this.f32475c;
    }

    public Class b() {
        return this.f32473a;
    }

    public String toString() {
        return String.format("%s.%s() %s", this.f32473a.getName(), this.f32475c.getName(), this.f32476d);
    }
}
