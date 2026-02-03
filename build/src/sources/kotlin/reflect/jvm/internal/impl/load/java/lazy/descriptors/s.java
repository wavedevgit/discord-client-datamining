package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import java.util.Set;
import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class s implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final LazyJavaClassMemberScope f33465d;

    public s(LazyJavaClassMemberScope lazyJavaClassMemberScope) {
        this.f33465d = lazyJavaClassMemberScope;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        Set W0;
        W0 = LazyJavaClassMemberScope.W0(this.f33465d);
        return W0;
    }
}
