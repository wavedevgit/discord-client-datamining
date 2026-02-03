package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import java.util.Collection;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.name.Name;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class e0 implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final LazyJavaScope f34047d;

    public e0(LazyJavaScope lazyJavaScope) {
        this.f34047d = lazyJavaScope;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Collection A;
        A = LazyJavaScope.A(this.f34047d, (Name) obj);
        return A;
    }
}
