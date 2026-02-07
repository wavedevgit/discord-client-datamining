package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import java.util.List;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.LazyJavaResolverContext;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class j implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final LazyJavaClassMemberScope f33038d;

    /* renamed from: e  reason: collision with root package name */
    private final LazyJavaResolverContext f33039e;

    public j(LazyJavaClassMemberScope lazyJavaClassMemberScope, LazyJavaResolverContext lazyJavaResolverContext) {
        this.f33038d = lazyJavaClassMemberScope;
        this.f33039e = lazyJavaResolverContext;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        List r02;
        r02 = LazyJavaClassMemberScope.r0(this.f33038d, this.f33039e);
        return r02;
    }
}
