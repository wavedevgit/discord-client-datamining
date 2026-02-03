package dt;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class h1 extends r2 {
    protected String c0(String parentName, String childName) {
        Intrinsics.checkNotNullParameter(parentName, "parentName");
        Intrinsics.checkNotNullParameter(childName, "childName");
        if (parentName.length() == 0) {
            return childName;
        }
        return parentName + '.' + childName;
    }

    protected String d0(SerialDescriptor descriptor, int i10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        return descriptor.e(i10);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // dt.r2
    /* renamed from: e0 */
    public final String Z(SerialDescriptor serialDescriptor, int i10) {
        Intrinsics.checkNotNullParameter(serialDescriptor, "<this>");
        return f0(d0(serialDescriptor, i10));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final String f0(String nestedName) {
        Intrinsics.checkNotNullParameter(nestedName, "nestedName");
        String str = (String) Y();
        if (str == null) {
            str = "";
        }
        return c0(str, nestedName);
    }
}
