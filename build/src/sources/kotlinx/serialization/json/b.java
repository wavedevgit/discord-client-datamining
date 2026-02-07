package kotlinx.serialization.json;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class b {
    public static final Json a(Json from, Function1 builderAction) {
        Intrinsics.checkNotNullParameter(from, "from");
        Intrinsics.checkNotNullParameter(builderAction, "builderAction");
        JsonBuilder jsonBuilder = new JsonBuilder(from);
        builderAction.invoke(jsonBuilder);
        return new a(jsonBuilder.a(), jsonBuilder.b());
    }

    public static /* synthetic */ Json b(Json json, Function1 function1, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            json = Json.f35168d;
        }
        return a(json, function1);
    }
}
