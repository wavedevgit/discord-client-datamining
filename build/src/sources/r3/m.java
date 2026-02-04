package r3;

import java.util.Collections;
import java.util.IdentityHashMap;
import java.util.Set;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    private final u f48424a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f48425b;

    public m(u database) {
        Intrinsics.checkNotNullParameter(database, "database");
        this.f48424a = database;
        Set newSetFromMap = Collections.newSetFromMap(new IdentityHashMap());
        Intrinsics.checkNotNullExpressionValue(newSetFromMap, "newSetFromMap(IdentityHashMap())");
        this.f48425b = newSetFromMap;
    }
}
