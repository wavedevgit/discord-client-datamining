package ds;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.util.List;
import java.util.Map;
import kotlin.Lazy;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d implements InvocationHandler {

    /* renamed from: a  reason: collision with root package name */
    private final Class f22366a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f22367b;

    /* renamed from: c  reason: collision with root package name */
    private final Lazy f22368c;

    /* renamed from: d  reason: collision with root package name */
    private final Lazy f22369d;

    /* renamed from: e  reason: collision with root package name */
    private final List f22370e;

    public d(Class cls, Map map, Lazy lazy, Lazy lazy2, List list) {
        this.f22366a = cls;
        this.f22367b = map;
        this.f22368c = lazy;
        this.f22369d = lazy2;
        this.f22370e = list;
    }

    @Override // java.lang.reflect.InvocationHandler
    public Object invoke(Object obj, Method method, Object[] objArr) {
        Object o10;
        o10 = f.o(this.f22366a, this.f22367b, this.f22368c, this.f22369d, this.f22370e, obj, method, objArr);
        return o10;
    }
}
