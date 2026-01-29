package u3;

import java.util.ArrayList;
import java.util.Collection;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract /* synthetic */ class i {
    public static final ArrayList a(Collection collection) {
        Intrinsics.checkNotNullParameter(collection, "<this>");
        if (collection instanceof ArrayList) {
            return (ArrayList) collection;
        }
        return new ArrayList(collection);
    }
}
