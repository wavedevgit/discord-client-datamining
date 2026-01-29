package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.name.FqName;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final LazyJavaAnnotationDescriptor f34250d;

    public c(LazyJavaAnnotationDescriptor lazyJavaAnnotationDescriptor) {
        this.f34250d = lazyJavaAnnotationDescriptor;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        FqName f10;
        f10 = LazyJavaAnnotationDescriptor.f(this.f34250d);
        return f10;
    }
}
