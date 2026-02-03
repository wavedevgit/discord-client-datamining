package sr;

import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {
    public static final EnumEntries a(Enum[] entries) {
        Intrinsics.checkNotNullParameter(entries, "entries");
        return new b(entries);
    }
}
