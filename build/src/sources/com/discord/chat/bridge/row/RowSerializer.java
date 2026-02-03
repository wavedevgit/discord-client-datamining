package com.discord.chat.bridge.row;

import ct.e;
import ct.h;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import kotlinx.serialization.DeserializationStrategy;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.SealedClassSerializer;
import kotlinx.serialization.json.JsonElement;
import kotlinx.serialization.json.JsonObject;
import kotlinx.serialization.json.JsonPrimitive;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\bÆ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\b\u001a\b\u0012\u0004\u0012\u00020\u00020\u00072\u0006\u0010\u0006\u001a\u00020\u0005H\u0014¢\u0006\u0004\b\b\u0010\tR\u0014\u0010\u000b\u001a\u00020\n8\u0002X\u0082T¢\u0006\u0006\n\u0004\b\u000b\u0010\fR \u0010\u000e\u001a\b\u0012\u0004\u0012\u00020\u00020\r8\u0002X\u0082\u0004¢\u0006\f\n\u0004\b\u000e\u0010\u000f\u0012\u0004\b\u0010\u0010\u0004¨\u0006\u0011"}, d2 = {"Lcom/discord/chat/bridge/row/RowSerializer;", "Lct/e;", "Lcom/discord/chat/bridge/row/Row;", "<init>", "()V", "Lkotlinx/serialization/json/JsonElement;", "element", "Lkotlinx/serialization/DeserializationStrategy;", "selectDeserializer", "(Lkotlinx/serialization/json/JsonElement;)Lkotlinx/serialization/DeserializationStrategy;", "", "CHANGE_TYPE_DELETE", "Ljava/lang/String;", "Lkotlinx/serialization/SealedClassSerializer;", "rowSealedClassSerializer", "Lkotlinx/serialization/SealedClassSerializer;", "getRowSealedClassSerializer$annotations", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class RowSerializer extends e {
    @NotNull
    private static final String CHANGE_TYPE_DELETE = "3";
    @NotNull
    public static final RowSerializer INSTANCE = new RowSerializer();
    @NotNull
    private static final SealedClassSerializer rowSealedClassSerializer = new SealedClassSerializer("Row", Reflection.getOrCreateKotlinClass(Row.class), new KClass[]{Reflection.getOrCreateKotlinClass(LoadingRow.class), Reflection.getOrCreateKotlinClass(MessageRow.class), Reflection.getOrCreateKotlinClass(SeparatorRow.class), Reflection.getOrCreateKotlinClass(BlockedGroupRow.class)}, new KSerializer[]{LoadingRow.Companion.serializer(), MessageRow.Companion.serializer(), SeparatorRow.Companion.serializer(), BlockedGroupRow.Companion.serializer()});

    private RowSerializer() {
        super(Reflection.getOrCreateKotlinClass(Row.class));
    }

    private static /* synthetic */ void getRowSealedClassSerializer$annotations() {
    }

    @Override // ct.e
    @NotNull
    protected DeserializationStrategy selectDeserializer(@NotNull JsonElement element) {
        String str;
        JsonPrimitive o10;
        Intrinsics.checkNotNullParameter(element, "element");
        JsonObject n10 = h.n(element);
        if (n10.containsKey("type")) {
            return rowSealedClassSerializer;
        }
        JsonElement jsonElement = (JsonElement) n10.get("changeType");
        if (jsonElement != null && (o10 = h.o(jsonElement)) != null) {
            str = o10.b();
        } else {
            str = null;
        }
        if (Intrinsics.areEqual(str, CHANGE_TYPE_DELETE)) {
            return DeleteRow.Companion.serializer();
        }
        throw new IllegalArgumentException("unsupported row json: " + element);
    }
}
