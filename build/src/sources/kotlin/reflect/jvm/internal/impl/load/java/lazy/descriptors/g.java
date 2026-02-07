package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class g implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final LazyJavaClassDescriptor f33032d;

    public g(LazyJavaClassDescriptor lazyJavaClassDescriptor) {
        this.f33032d = lazyJavaClassDescriptor;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        LazyJavaClassMemberScope h10;
        h10 = LazyJavaClassDescriptor.h(this.f33032d, (KotlinTypeRefiner) obj);
        return h10;
    }
}
