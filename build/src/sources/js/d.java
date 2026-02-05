package js;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.util.List;
import java.util.Map;
import kotlin.Lazy;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d implements InvocationHandler {

    /* renamed from: a  reason: collision with root package name */
    private final Class f31255a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f31256b;

    /* renamed from: c  reason: collision with root package name */
    private final Lazy f31257c;

    /* renamed from: d  reason: collision with root package name */
    private final Lazy f31258d;

    /* renamed from: e  reason: collision with root package name */
    private final List f31259e;

    public d(Class cls, Map map, Lazy lazy, Lazy lazy2, List list) {
        this.f31255a = cls;
        this.f31256b = map;
        this.f31257c = lazy;
        this.f31258d = lazy2;
        this.f31259e = list;
    }

    @Override // java.lang.reflect.InvocationHandler
    public Object invoke(Object obj, Method method, Object[] objArr) {
        Object o10;
        o10 = f.o(this.f31255a, this.f31256b, this.f31257c, this.f31258d, this.f31259e, obj, method, objArr);
        return o10;
    }
}
