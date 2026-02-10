package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import java.util.Set;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.LazyJavaResolverContext;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class l implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final LazyJavaResolverContext f32752d;

    /* renamed from: e  reason: collision with root package name */
    private final LazyJavaClassMemberScope f32753e;

    public l(LazyJavaResolverContext lazyJavaResolverContext, LazyJavaClassMemberScope lazyJavaClassMemberScope) {
        this.f32752d = lazyJavaResolverContext;
        this.f32753e = lazyJavaClassMemberScope;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        Set M0;
        M0 = LazyJavaClassMemberScope.M0(this.f32752d, this.f32753e);
        return M0;
    }
}
