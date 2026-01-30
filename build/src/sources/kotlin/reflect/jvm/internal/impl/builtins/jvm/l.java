package kotlin.reflect.jvm.internal.impl.builtins.jvm;

import kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor;
import kotlin.reflect.jvm.internal.impl.utils.DFS;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class l implements DFS.Neighbors {

    /* renamed from: a  reason: collision with root package name */
    public static final l f33585a = new l();

    @Override // kotlin.reflect.jvm.internal.impl.utils.DFS.Neighbors
    public Iterable getNeighbors(Object obj) {
        Iterable z10;
        z10 = JvmBuiltInsCustomizer.z((CallableMemberDescriptor) obj);
        return z10;
    }
}
