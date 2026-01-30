package kotlin.reflect.jvm.internal.impl.resolve.descriptorUtil;

import kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor;
import kotlin.reflect.jvm.internal.impl.utils.DFS;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c implements DFS.Neighbors {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f35461a;

    public c(boolean z10) {
        this.f35461a = z10;
    }

    @Override // kotlin.reflect.jvm.internal.impl.utils.DFS.Neighbors
    public Iterable getNeighbors(Object obj) {
        Iterable g10;
        g10 = DescriptorUtilsKt.g(this.f35461a, (CallableMemberDescriptor) obj);
        return g10;
    }
}
