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
    private final Class f51829a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f51830b;

    /* renamed from: c  reason: collision with root package name */
    private final Lazy f51831c;

    /* renamed from: d  reason: collision with root package name */
    private final Lazy f51832d;

    /* renamed from: e  reason: collision with root package name */
    private final List f51833e;

    public d(Class cls, Map map, Lazy lazy, Lazy lazy2, List list) {
        this.f51829a = cls;
        this.f51830b = map;
        this.f51831c = lazy;
        this.f51832d = lazy2;
        this.f51833e = list;
    }

    @Override // java.lang.reflect.InvocationHandler
    public Object invoke(Object obj, Method method, Object[] objArr) {
        Object o10;
        o10 = f.o(this.f51829a, this.f51830b, this.f51831c, this.f51832d, this.f51833e, obj, method, objArr);
        return o10;
    }
}
