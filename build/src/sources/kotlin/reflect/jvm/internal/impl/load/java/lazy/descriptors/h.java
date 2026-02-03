package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import java.util.List;
import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class h implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final LazyJavaClassDescriptor f33442d;

    public h(LazyJavaClassDescriptor lazyJavaClassDescriptor) {
        this.f33442d = lazyJavaClassDescriptor;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        List e10;
        e10 = LazyJavaClassDescriptor.e(this.f33442d);
        return e10;
    }
}
