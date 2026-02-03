package dt;

import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class g1 extends q2 {
    protected String h0(String parentName, String childName) {
        Intrinsics.checkNotNullParameter(parentName, "parentName");
        Intrinsics.checkNotNullParameter(childName, "childName");
        if (parentName.length() == 0) {
            return childName;
        }
        return parentName + '.' + childName;
    }

    protected String i0(SerialDescriptor descriptor, int i10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        return descriptor.e(i10);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // dt.q2
    /* renamed from: j0 */
    public final String c0(SerialDescriptor serialDescriptor, int i10) {
        Intrinsics.checkNotNullParameter(serialDescriptor, "<this>");
        return k0(i0(serialDescriptor, i10));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final String k0(String nestedName) {
        Intrinsics.checkNotNullParameter(nestedName, "nestedName");
        String str = (String) b0();
        if (str == null) {
            str = "";
        }
        return h0(str, nestedName);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final String l0() {
        if (d0().isEmpty()) {
            return "$";
        }
        return CollectionsKt.x0(d0(), ".", "$.", null, 0, null, null, 60, null);
    }
}
