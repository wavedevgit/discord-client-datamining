package ls;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.util.List;
import java.util.Map;
import kotlin.Lazy;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d implements InvocationHandler {

    /* renamed from: a  reason: collision with root package name */
    private final Class f36591a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f36592b;

    /* renamed from: c  reason: collision with root package name */
    private final Lazy f36593c;

    /* renamed from: d  reason: collision with root package name */
    private final Lazy f36594d;

    /* renamed from: e  reason: collision with root package name */
    private final List f36595e;

    public d(Class cls, Map map, Lazy lazy, Lazy lazy2, List list) {
        this.f36591a = cls;
        this.f36592b = map;
        this.f36593c = lazy;
        this.f36594d = lazy2;
        this.f36595e = list;
    }

    @Override // java.lang.reflect.InvocationHandler
    public Object invoke(Object obj, Method method, Object[] objArr) {
        Object o10;
        o10 = f.o(this.f36591a, this.f36592b, this.f36593c, this.f36594d, this.f36595e, obj, method, objArr);
        return o10;
    }
}
