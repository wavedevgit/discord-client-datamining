package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import java.util.Collection;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.SimpleFunctionDescriptor;
import kotlin.reflect.jvm.internal.impl.name.Name;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class p implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final SimpleFunctionDescriptor f33461d;

    /* renamed from: e  reason: collision with root package name */
    private final LazyJavaClassMemberScope f33462e;

    public p(SimpleFunctionDescriptor simpleFunctionDescriptor, LazyJavaClassMemberScope lazyJavaClassMemberScope) {
        this.f33461d = simpleFunctionDescriptor;
        this.f33462e = lazyJavaClassMemberScope;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Collection T0;
        T0 = LazyJavaClassMemberScope.T0(this.f33461d, this.f33462e, (Name) obj);
        return T0;
    }
}
