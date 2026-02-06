package com.discord.serialization;

import com.discord.serialization.SerializerUtils;
import is.c;
import java.util.LinkedHashMap;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KClass;
import kotlin.reflect.KProperty1;
import kotlinx.serialization.json.JsonBuilder;
import kotlinx.serialization.json.JsonElement;
import kotlinx.serialization.json.JsonObject;
import kotlinx.serialization.json.b;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\bÆ\u0002\u0018\u00002\u00020\u0001:\u0001\nB\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u001a\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\n\u0010\b\u001a\u0006\u0012\u0002\b\u00030\t¨\u0006\u000b"}, d2 = {"Lcom/discord/serialization/SerializerUtils;", "", "<init>", "()V", "findErroringFields", "Lcom/discord/serialization/SerializerUtils$SerializerError;", "jsonString", "", "deserializerClass", "Lkotlin/reflect/KClass;", "SerializerError", "serialization_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class SerializerUtils {
    @NotNull
    public static final SerializerUtils INSTANCE = new SerializerUtils();

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b6\u0018\u00002\u00020\u0001:\u0002\u0004\u0005B\t\b\u0004¢\u0006\u0004\b\u0002\u0010\u0003\u0082\u0001\u0002\u0006\u0007¨\u0006\b"}, d2 = {"Lcom/discord/serialization/SerializerUtils$SerializerError;", "", "<init>", "()V", "Data", "EMPTY", "Lcom/discord/serialization/SerializerUtils$SerializerError$Data;", "Lcom/discord/serialization/SerializerUtils$SerializerError$EMPTY;", "serialization_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class SerializerError {

        @Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010$\n\u0002\u0010\u000e\n\u0002\b\u0007\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\b\u0086\b\u0018\u00002\u00020\u0001B\u001b\u0012\u0012\u0010\u0002\u001a\u000e\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\u00040\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u0015\u0010\t\u001a\u000e\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\u00040\u0003HÆ\u0003J\u001f\u0010\n\u001a\u00020\u00002\u0014\b\u0002\u0010\u0002\u001a\u000e\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\u00040\u0003HÆ\u0001J\u0013\u0010\u000b\u001a\u00020\f2\b\u0010\r\u001a\u0004\u0018\u00010\u000eHÖ\u0003J\t\u0010\u000f\u001a\u00020\u0010HÖ\u0001J\t\u0010\u0011\u001a\u00020\u0004HÖ\u0001R\u001d\u0010\u0002\u001a\u000e\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\u00040\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\b¨\u0006\u0012"}, d2 = {"Lcom/discord/serialization/SerializerUtils$SerializerError$Data;", "Lcom/discord/serialization/SerializerUtils$SerializerError;", "data", "", "", "<init>", "(Ljava/util/Map;)V", "getData", "()Ljava/util/Map;", "component1", "copy", "equals", "", "other", "", "hashCode", "", "toString", "serialization_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class Data extends SerializerError {
            @NotNull
            private final Map<String, String> data;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public Data(@NotNull Map<String, String> data) {
                super(null);
                Intrinsics.checkNotNullParameter(data, "data");
                this.data = data;
            }

            /* JADX WARN: Multi-variable type inference failed */
            public static /* synthetic */ Data copy$default(Data data, Map map, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    map = data.data;
                }
                return data.copy(map);
            }

            @NotNull
            public final Map<String, String> component1() {
                return this.data;
            }

            @NotNull
            public final Data copy(@NotNull Map<String, String> data) {
                Intrinsics.checkNotNullParameter(data, "data");
                return new Data(data);
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                return (obj instanceof Data) && Intrinsics.areEqual(this.data, ((Data) obj).data);
            }

            @NotNull
            public final Map<String, String> getData() {
                return this.data;
            }

            public int hashCode() {
                return this.data.hashCode();
            }

            @NotNull
            public String toString() {
                Map<String, String> map = this.data;
                return "Data(data=" + map + ")";
            }
        }

        @Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\bÆ\n\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0013\u0010\u0004\u001a\u00020\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007HÖ\u0003J\t\u0010\b\u001a\u00020\tHÖ\u0001J\t\u0010\n\u001a\u00020\u000bHÖ\u0001¨\u0006\f"}, d2 = {"Lcom/discord/serialization/SerializerUtils$SerializerError$EMPTY;", "Lcom/discord/serialization/SerializerUtils$SerializerError;", "<init>", "()V", "equals", "", "other", "", "hashCode", "", "toString", "", "serialization_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class EMPTY extends SerializerError {
            @NotNull
            public static final EMPTY INSTANCE = new EMPTY();

            private EMPTY() {
                super(null);
            }

            public boolean equals(Object obj) {
                return this == obj || (obj instanceof EMPTY);
            }

            public int hashCode() {
                return 939262969;
            }

            @NotNull
            public String toString() {
                return "EMPTY";
            }
        }

        public /* synthetic */ SerializerError(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private SerializerError() {
        }
    }

    private SerializerUtils() {
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit findErroringFields$lambda$0(JsonBuilder Json) {
        Intrinsics.checkNotNullParameter(Json, "$this$Json");
        Json.c(true);
        return Unit.f32008a;
    }

    @NotNull
    public final SerializerError findErroringFields(@NotNull String jsonString, @NotNull KClass deserializerClass) {
        boolean parseProperty;
        Intrinsics.checkNotNullParameter(jsonString, "jsonString");
        Intrinsics.checkNotNullParameter(deserializerClass, "deserializerClass");
        JsonElement g10 = b.b(null, new Function1() { // from class: c8.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit findErroringFields$lambda$0;
                findErroringFields$lambda$0 = SerializerUtils.findErroringFields$lambda$0((JsonBuilder) obj);
                return findErroringFields$lambda$0;
            }
        }, 1, null).g(jsonString);
        if (!(g10 instanceof JsonObject)) {
            return SerializerError.EMPTY.INSTANCE;
        }
        LinkedHashMap linkedHashMap = new LinkedHashMap();
        for (KProperty1 kProperty1 : c.a(deserializerClass)) {
            JsonElement jsonElement = (JsonElement) ((JsonObject) g10).get(kProperty1.getName());
            if (jsonElement != null) {
                parseProperty = SerializerUtilsKt.parseProperty(kProperty1, jsonElement);
                if (!parseProperty) {
                    linkedHashMap.put(kProperty1.getName(), jsonElement.toString());
                }
            } else if (!kProperty1.getReturnType().isMarkedNullable()) {
                linkedHashMap.put(kProperty1.getName(), "null");
            }
        }
        return new SerializerError.Data(linkedHashMap);
    }
}
