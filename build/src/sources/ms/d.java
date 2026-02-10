package ms;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.util.List;
import java.util.Map;
import kotlin.Lazy;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d implements InvocationHandler {

    /* renamed from: a  reason: collision with root package name */
    private final Class f37469a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f37470b;

    /* renamed from: c  reason: collision with root package name */
    private final Lazy f37471c;

    /* renamed from: d  reason: collision with root package name */
    private final Lazy f37472d;

    /* renamed from: e  reason: collision with root package name */
    private final List f37473e;

    public d(Class cls, Map map, Lazy lazy, Lazy lazy2, List list) {
        this.f37469a = cls;
        this.f37470b = map;
        this.f37471c = lazy;
        this.f37472d = lazy2;
        this.f37473e = list;
    }

    @Override // java.lang.reflect.InvocationHandler
    public Object invoke(Object obj, Method method, Object[] objArr) {
        Object o10;
        o10 = f.o(this.f37469a, this.f37470b, this.f37471c, this.f37472d, this.f37473e, obj, method, objArr);
        return o10;
    }
}
