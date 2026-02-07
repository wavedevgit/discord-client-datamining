package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import java.util.Set;
import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class k implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final LazyJavaClassMemberScope f33041d;

    public k(LazyJavaClassMemberScope lazyJavaClassMemberScope) {
        this.f33041d = lazyJavaClassMemberScope;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        Set U0;
        U0 = LazyJavaClassMemberScope.U0(this.f33041d);
        return U0;
    }
}
