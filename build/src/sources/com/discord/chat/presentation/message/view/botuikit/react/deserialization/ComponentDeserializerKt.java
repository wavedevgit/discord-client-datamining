package com.discord.chat.presentation.message.view.botuikit.react.deserialization;

import com.discord.chat.bridge.botuikit.Component;
import com.discord.chat.bridge.botuikit.ComponentSerializer;
import com.discord.chat.presentation.message.view.botuikit.react.deserialization.ComponentDeserializerKt;
import com.facebook.react.bridge.ReadableMap;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlinx.serialization.json.Json;
import kotlinx.serialization.json.JsonBuilder;
import kotlinx.serialization.json.b;
import org.jetbrains.annotations.NotNull;
import org.json.JSONObject;
@Metadata(d1 = {"\u0000\u0018\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\u001a\"\u0010\u0004\u001a\u0002H\u0005\"\n\b\u0000\u0010\u0005\u0018\u0001*\u00020\u00062\u0006\u0010\u0007\u001a\u00020\bH\u0080\b¢\u0006\u0002\u0010\t\"\u0011\u0010\u0000\u001a\u00020\u0001¢\u0006\b\n\u0000\u001a\u0004\b\u0002\u0010\u0003¨\u0006\n"}, d2 = {"json", "Lkotlinx/serialization/json/Json;", "getJson", "()Lkotlinx/serialization/json/Json;", "deserializeComponentModel", "T", "Lcom/discord/chat/bridge/botuikit/Component;", "model", "Lcom/facebook/react/bridge/ReadableMap;", "(Lcom/facebook/react/bridge/ReadableMap;)Lcom/discord/chat/bridge/botuikit/Component;", "chat_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ComponentDeserializerKt {
    @NotNull
    private static final Json json = b.b(null, new Function1() { // from class: z6.a
        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Object obj) {
            Unit json$lambda$0;
            json$lambda$0 = ComponentDeserializerKt.json$lambda$0((JsonBuilder) obj);
            return json$lambda$0;
        }
    }, 1, null);

    public static final /* synthetic */ <T extends Component> T deserializeComponentModel(ReadableMap model) {
        Intrinsics.checkNotNullParameter(model, "model");
        try {
            Json json2 = getJson();
            ComponentSerializer componentSerializer = ComponentSerializer.INSTANCE;
            String jSONObject = new JSONObject(model.toHashMap()).toString();
            Intrinsics.checkNotNullExpressionValue(jSONObject, "toString(...)");
            T t10 = (T) json2.b(componentSerializer, jSONObject);
            Intrinsics.reifiedOperationMarker(3, "T");
            if (t10 != null) {
                return t10;
            }
            Intrinsics.reifiedOperationMarker(4, "T");
            String simpleName = Reflection.getOrCreateKotlinClass(Component.class).getSimpleName();
            String simpleName2 = Reflection.getOrCreateKotlinClass(t10.getClass()).getSimpleName();
            throw new IllegalStateException(("Expected " + simpleName + " but got " + simpleName2).toString());
        } catch (Exception e10) {
            Intrinsics.reifiedOperationMarker(4, "T");
            String simpleName3 = Reflection.getOrCreateKotlinClass(Component.class).getSimpleName();
            String message = e10.getMessage();
            throw new IllegalStateException(("Error while deserializing " + simpleName3 + ": " + message).toString());
        }
    }

    @NotNull
    public static final Json getJson() {
        return json;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit json$lambda$0(JsonBuilder Json) {
        Intrinsics.checkNotNullParameter(Json, "$this$Json");
        Json.c(true);
        return Unit.f32008a;
    }
}
