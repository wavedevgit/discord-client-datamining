package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import java.util.Set;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.LazyJavaResolverContext;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class w implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final LazyJavaResolverContext f33469d;

    /* renamed from: e  reason: collision with root package name */
    private final LazyJavaPackageScope f33470e;

    public w(LazyJavaResolverContext lazyJavaResolverContext, LazyJavaPackageScope lazyJavaPackageScope) {
        this.f33469d = lazyJavaResolverContext;
        this.f33470e = lazyJavaPackageScope;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        Set c02;
        c02 = LazyJavaPackageScope.c0(this.f33469d, this.f33470e);
        return c02;
    }
}
