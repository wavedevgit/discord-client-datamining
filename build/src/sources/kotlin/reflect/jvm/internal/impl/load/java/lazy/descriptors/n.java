package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.LazyJavaResolverContext;
import kotlin.reflect.jvm.internal.impl.name.Name;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class n implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final LazyJavaClassMemberScope f34290d;

    /* renamed from: e  reason: collision with root package name */
    private final LazyJavaResolverContext f34291e;

    public n(LazyJavaClassMemberScope lazyJavaClassMemberScope, LazyJavaResolverContext lazyJavaResolverContext) {
        this.f34290d = lazyJavaClassMemberScope;
        this.f34291e = lazyJavaResolverContext;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        ClassDescriptor V0;
        V0 = LazyJavaClassMemberScope.V0(this.f34290d, this.f34291e, (Name) obj);
        return V0;
    }
}
