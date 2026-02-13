package vs;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.util.List;
import java.util.Map;
import kotlin.Lazy;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d implements InvocationHandler {

    /* renamed from: a  reason: collision with root package name */
    private final Class f52398a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f52399b;

    /* renamed from: c  reason: collision with root package name */
    private final Lazy f52400c;

    /* renamed from: d  reason: collision with root package name */
    private final Lazy f52401d;

    /* renamed from: e  reason: collision with root package name */
    private final List f52402e;

    public d(Class cls, Map map, Lazy lazy, Lazy lazy2, List list) {
        this.f52398a = cls;
        this.f52399b = map;
        this.f52400c = lazy;
        this.f52401d = lazy2;
        this.f52402e = list;
    }

    @Override // java.lang.reflect.InvocationHandler
    public Object invoke(Object obj, Method method, Object[] objArr) {
        Object o10;
        o10 = f.o(this.f52398a, this.f52399b, this.f52400c, this.f52401d, this.f52402e, obj, method, objArr);
        return o10;
    }
}
