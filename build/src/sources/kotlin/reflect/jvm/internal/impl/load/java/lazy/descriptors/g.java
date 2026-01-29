package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class g implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final LazyJavaClassDescriptor f34258d;

    public g(LazyJavaClassDescriptor lazyJavaClassDescriptor) {
        this.f34258d = lazyJavaClassDescriptor;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        LazyJavaClassMemberScope h10;
        h10 = LazyJavaClassDescriptor.h(this.f34258d, (KotlinTypeRefiner) obj);
        return h10;
    }
}
