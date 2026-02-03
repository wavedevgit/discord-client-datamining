package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import java.util.List;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.name.Name;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class i0 implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final LazyJavaScope f33445d;

    public i0(LazyJavaScope lazyJavaScope) {
        this.f33445d = lazyJavaScope;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        List M;
        M = LazyJavaScope.M(this.f33445d, (Name) obj);
        return M;
    }
}
