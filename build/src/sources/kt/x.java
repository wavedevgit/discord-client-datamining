package kt;

import java.util.LinkedHashMap;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.json.JsonElement;
import kotlinx.serialization.json.JsonObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class x {

    /* renamed from: a  reason: collision with root package name */
    private final Map f35576a = new LinkedHashMap();

    public final JsonObject a() {
        return new JsonObject(this.f35576a);
    }

    public final JsonElement b(String key, JsonElement element) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(element, "element");
        return (JsonElement) this.f35576a.put(key, element);
    }
}
