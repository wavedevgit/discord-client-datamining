package kotlin.reflect.jvm.internal.impl.builtins.jvm;

import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.utils.DFS;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class n implements DFS.Neighbors {

    /* renamed from: a  reason: collision with root package name */
    private final JvmBuiltInsCustomizer f32345a;

    public n(JvmBuiltInsCustomizer jvmBuiltInsCustomizer) {
        this.f32345a = jvmBuiltInsCustomizer;
    }

    @Override // kotlin.reflect.jvm.internal.impl.utils.DFS.Neighbors
    public Iterable getNeighbors(Object obj) {
        Iterable v10;
        v10 = JvmBuiltInsCustomizer.v(this.f32345a, (ClassDescriptor) obj);
        return v10;
    }
}
