package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final LazyJavaAnnotationDescriptor f33026d;

    public d(LazyJavaAnnotationDescriptor lazyJavaAnnotationDescriptor) {
        this.f33026d = lazyJavaAnnotationDescriptor;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        SimpleType l10;
        l10 = LazyJavaAnnotationDescriptor.l(this.f33026d);
        return l10;
    }
}
