package at;

import java.util.Arrays;
import java.util.Iterator;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class b2 {
    public static final int a(SerialDescriptor serialDescriptor, SerialDescriptor[] typeParams) {
        int i10;
        Intrinsics.checkNotNullParameter(serialDescriptor, "<this>");
        Intrinsics.checkNotNullParameter(typeParams, "typeParams");
        int hashCode = (serialDescriptor.h().hashCode() * 31) + Arrays.hashCode(typeParams);
        Iterable<SerialDescriptor> a10 = zs.h.a(serialDescriptor);
        Iterator it = a10.iterator();
        int i11 = 1;
        int i12 = 1;
        while (true) {
            int i13 = 0;
            if (!it.hasNext()) {
                break;
            }
            int i14 = i12 * 31;
            String h10 = ((SerialDescriptor) it.next()).h();
            if (h10 != null) {
                i13 = h10.hashCode();
            }
            i12 = i14 + i13;
        }
        for (SerialDescriptor serialDescriptor2 : a10) {
            int i15 = i11 * 31;
            zs.k kind = serialDescriptor2.getKind();
            if (kind != null) {
                i10 = kind.hashCode();
            } else {
                i10 = 0;
            }
            i11 = i15 + i10;
        }
        return (((hashCode * 31) + i12) * 31) + i11;
    }
}
