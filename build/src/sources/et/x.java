package et;

import java.util.LinkedHashMap;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.json.JsonElement;
import kotlinx.serialization.json.JsonObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class x {

    /* renamed from: a  reason: collision with root package name */
    private final Map f22678a = new LinkedHashMap();

    public final JsonObject a() {
        return new JsonObject(this.f22678a);
    }

    public final JsonElement b(String key, JsonElement element) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(element, "element");
        return (JsonElement) this.f22678a.put(key, element);
    }
}
