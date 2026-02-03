package dt;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i0 extends c1 {
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public i0(SerialDescriptor keyDesc, SerialDescriptor valueDesc) {
        super("kotlin.collections.HashMap", keyDesc, valueDesc, null);
        Intrinsics.checkNotNullParameter(keyDesc, "keyDesc");
        Intrinsics.checkNotNullParameter(valueDesc, "valueDesc");
    }
}
