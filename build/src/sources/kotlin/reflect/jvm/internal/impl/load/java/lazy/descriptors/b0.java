package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b0 implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final LazyJavaScope f34249d;

    public b0(LazyJavaScope lazyJavaScope) {
        this.f34249d = lazyJavaScope;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        DeclaredMemberIndex y10;
        y10 = LazyJavaScope.y(this.f34249d);
        return y10;
    }
}
