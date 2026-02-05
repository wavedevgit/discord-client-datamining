package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import java.util.Set;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.LazyJavaResolverContext;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class w implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final LazyJavaResolverContext f32993d;

    /* renamed from: e  reason: collision with root package name */
    private final LazyJavaPackageScope f32994e;

    public w(LazyJavaResolverContext lazyJavaResolverContext, LazyJavaPackageScope lazyJavaPackageScope) {
        this.f32993d = lazyJavaResolverContext;
        this.f32994e = lazyJavaPackageScope;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        Set c02;
        c02 = LazyJavaPackageScope.c0(this.f32993d, this.f32994e);
        return c02;
    }
}
