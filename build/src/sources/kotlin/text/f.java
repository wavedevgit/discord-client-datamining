package kotlin.text;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class f {
    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean b(String str) {
        for (int i10 = 0; i10 < str.length(); i10++) {
            char charAt = str.charAt(i10);
            if (Intrinsics.compare((int) charAt, (int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) >= 0 || Character.isLetter(charAt)) {
                return true;
            }
        }
        return false;
    }
}
