package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import java.util.List;
import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class f implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final LazyJavaClassDescriptor f33030d;

    public f(LazyJavaClassDescriptor lazyJavaClassDescriptor) {
        this.f33030d = lazyJavaClassDescriptor;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        List g10;
        g10 = LazyJavaClassDescriptor.g(this.f33030d);
        return g10;
    }
}
