package es;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.util.List;
import java.util.Map;
import kotlin.Lazy;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d implements InvocationHandler {

    /* renamed from: a  reason: collision with root package name */
    private final Class f23169a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f23170b;

    /* renamed from: c  reason: collision with root package name */
    private final Lazy f23171c;

    /* renamed from: d  reason: collision with root package name */
    private final Lazy f23172d;

    /* renamed from: e  reason: collision with root package name */
    private final List f23173e;

    public d(Class cls, Map map, Lazy lazy, Lazy lazy2, List list) {
        this.f23169a = cls;
        this.f23170b = map;
        this.f23171c = lazy;
        this.f23172d = lazy2;
        this.f23173e = list;
    }

    @Override // java.lang.reflect.InvocationHandler
    public Object invoke(Object obj, Method method, Object[] objArr) {
        Object o10;
        o10 = f.o(this.f23169a, this.f23170b, this.f23171c, this.f23172d, this.f23173e, obj, method, objArr);
        return o10;
    }
}
