package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor;
import kotlin.reflect.jvm.internal.impl.name.Name;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d0 implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final LazyJavaScope f34253d;

    public d0(LazyJavaScope lazyJavaScope) {
        this.f34253d = lazyJavaScope;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        PropertyDescriptor w10;
        w10 = LazyJavaScope.w(this.f34253d, (Name) obj);
        return w10;
    }
}
