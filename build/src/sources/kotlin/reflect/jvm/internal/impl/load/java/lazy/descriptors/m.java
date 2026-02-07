package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import java.util.Map;
import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class m implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final LazyJavaClassMemberScope f33046d;

    public m(LazyJavaClassMemberScope lazyJavaClassMemberScope) {
        this.f33046d = lazyJavaClassMemberScope;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        Map I0;
        I0 = LazyJavaClassMemberScope.I0(this.f33046d);
        return I0;
    }
}
