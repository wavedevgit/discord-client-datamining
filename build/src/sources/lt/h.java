package lt;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h extends i {

    /* renamed from: c  reason: collision with root package name */
    public static final h f36709c = new h();

    private h() {
    }

    public final void c(char[] array) {
        Intrinsics.checkNotNullParameter(array, "array");
        a(array);
    }

    public final char[] d() {
        return super.b(IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
    }
}
