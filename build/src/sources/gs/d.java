package gs;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.util.List;
import java.util.Map;
import kotlin.Lazy;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d implements InvocationHandler {

    /* renamed from: a  reason: collision with root package name */
    private final Class f26572a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f26573b;

    /* renamed from: c  reason: collision with root package name */
    private final Lazy f26574c;

    /* renamed from: d  reason: collision with root package name */
    private final Lazy f26575d;

    /* renamed from: e  reason: collision with root package name */
    private final List f26576e;

    public d(Class cls, Map map, Lazy lazy, Lazy lazy2, List list) {
        this.f26572a = cls;
        this.f26573b = map;
        this.f26574c = lazy;
        this.f26575d = lazy2;
        this.f26576e = list;
    }

    @Override // java.lang.reflect.InvocationHandler
    public Object invoke(Object obj, Method method, Object[] objArr) {
        Object o10;
        o10 = f.o(this.f26572a, this.f26573b, this.f26574c, this.f26575d, this.f26576e, obj, method, objArr);
        return o10;
    }
}
