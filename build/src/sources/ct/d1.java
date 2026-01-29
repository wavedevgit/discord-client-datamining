package ct;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.DeserializationStrategy;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.json.Json;
import kotlinx.serialization.json.JsonArray;
import kotlinx.serialization.json.JsonElement;
import kotlinx.serialization.json.JsonNull;
import kotlinx.serialization.json.JsonObject;
import kotlinx.serialization.json.JsonPrimitive;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class d1 {
    public static final Object a(Json json, JsonElement element, DeserializationStrategy deserializer) {
        Decoder k0Var;
        Intrinsics.checkNotNullParameter(json, "json");
        Intrinsics.checkNotNullParameter(element, "element");
        Intrinsics.checkNotNullParameter(deserializer, "deserializer");
        if (element instanceof JsonObject) {
            k0Var = new n0(json, (JsonObject) element, null, null, 12, null);
        } else if (element instanceof JsonArray) {
            k0Var = new o0(json, (JsonArray) element);
        } else if (!(element instanceof bt.r) && !Intrinsics.areEqual(element, JsonNull.INSTANCE)) {
            throw new ir.p();
        } else {
            k0Var = new k0(json, (JsonPrimitive) element, null, 4, null);
        }
        return k0Var.G(deserializer);
    }

    public static final Object b(Json json, String discriminator, JsonObject element, DeserializationStrategy deserializer) {
        Intrinsics.checkNotNullParameter(json, "<this>");
        Intrinsics.checkNotNullParameter(discriminator, "discriminator");
        Intrinsics.checkNotNullParameter(element, "element");
        Intrinsics.checkNotNullParameter(deserializer, "deserializer");
        return new n0(json, element, discriminator, deserializer.getDescriptor()).G(deserializer);
    }
}
