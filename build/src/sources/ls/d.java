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
    private final Class f36639a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f36640b;

    /* renamed from: c  reason: collision with root package name */
    private final Lazy f36641c;

    /* renamed from: d  reason: collision with root package name */
    private final Lazy f36642d;

    /* renamed from: e  reason: collision with root package name */
    private final List f36643e;

    public d(Class cls, Map map, Lazy lazy, Lazy lazy2, List list) {
        this.f36639a = cls;
        this.f36640b = map;
        this.f36641c = lazy;
        this.f36642d = lazy2;
        this.f36643e = list;
    }

    @Override // java.lang.reflect.InvocationHandler
    public Object invoke(Object obj, Method method, Object[] objArr) {
        Object o10;
        o10 = f.o(this.f36639a, this.f36640b, this.f36641c, this.f36642d, this.f36643e, obj, method, objArr);
        return o10;
    }
}
