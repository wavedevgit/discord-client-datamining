package kotlin.reflect.jvm.internal.impl.load.java.lazy;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations;
import kotlin.reflect.jvm.internal.impl.load.java.JavaTypeQualifiersByElementType;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final LazyJavaResolverContext f34174d;

    /* renamed from: e  reason: collision with root package name */
    private final Annotations f34175e;

    public b(LazyJavaResolverContext lazyJavaResolverContext, Annotations annotations) {
        this.f34174d = lazyJavaResolverContext;
        this.f34175e = annotations;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        JavaTypeQualifiersByElementType e10;
        e10 = ContextKt.e(this.f34174d, this.f34175e);
        return e10;
    }
}
