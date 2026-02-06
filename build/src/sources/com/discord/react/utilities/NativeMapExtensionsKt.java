package com.discord.react.utilities;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableMapKeySetIterator;
import com.facebook.react.bridge.ReadableType;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.devsupport.StackTraceHelper;
import ft.w;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.MagicApiIntrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.serialization.json.Json;
import kotlinx.serialization.json.JsonBuilder;
import org.jetbrains.annotations.NotNull;
import org.json.JSONObject;
import qr.p;
@Metadata(d1 = {"\u0000\\\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010$\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u0006\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0005\u001a3\u0010\u0004\u001a\u00020\u00052&\u0010\u0006\u001a\u0014\u0012\u0010\b\u0001\u0012\f\u0012\u0004\u0012\u00020\t\u0012\u0002\b\u00030\b0\u0007\"\f\u0012\u0004\u0012\u00020\t\u0012\u0002\b\u00030\b¢\u0006\u0002\u0010\n\u001a\u001c\u0010\u000b\u001a\u00020\u0005\"\u0004\b\u0000\u0010\f*\u000e\u0012\u0004\u0012\u00020\t\u0012\u0004\u0012\u0002H\f0\r\u001a%\u0010\u000e\u001a\u00020\u000f\"\u0004\b\u0000\u0010\f*\u00020\u00052\u0006\u0010\u0010\u001a\u00020\t2\u0006\u0010\u0011\u001a\u0002H\f¢\u0006\u0002\u0010\u0012\u001a\u001a\u0010\u0013\u001a\u00020\t*\u00020\u00142\u0006\u0010\u0010\u001a\u00020\t2\u0006\u0010\u0015\u001a\u00020\t\u001a\u0012\u0010\u0013\u001a\u00020\t*\u00020\u00142\u0006\u0010\u0010\u001a\u00020\t\u001a\u0012\u0010\u0016\u001a\u00020\t*\u00020\u00142\u0006\u0010\u0017\u001a\u00020\t\u001a\u0012\u0010\u0018\u001a\u00020\u0019*\u00020\u00142\u0006\u0010\u0010\u001a\u00020\t\u001a\u0012\u0010\u001a\u001a\u00020\u0014*\u00020\u00142\u0006\u0010\u0010\u001a\u00020\t\u001a\u001e\u0010\u001b\u001a\u00020\u001c*\u0004\u0018\u00010\u00142\u0006\u0010\u0010\u001a\u00020\t2\b\b\u0002\u0010\u0015\u001a\u00020\u001c\u001a\u001c\u0010\u001d\u001a\u00020\u001e*\u0004\u0018\u00010\u00142\u0006\u0010\u0010\u001a\u00020\t2\u0006\u0010\u0015\u001a\u00020\u001e\u001a'\u0010\u001f\u001a\u0004\u0018\u00010\u001e*\u0004\u0018\u00010\u00142\u0006\u0010\u0010\u001a\u00020\t2\n\b\u0002\u0010\u0015\u001a\u0004\u0018\u00010\u001e¢\u0006\u0002\u0010 \u001a\u001c\u0010!\u001a\u00020\"*\u0004\u0018\u00010\u00142\u0006\u0010\u0010\u001a\u00020\t2\u0006\u0010\u0015\u001a\u00020\"\u001a'\u0010#\u001a\u0004\u0018\u00010\"*\u0004\u0018\u00010\u00142\u0006\u0010\u0010\u001a\u00020\t2\n\b\u0002\u0010\u0015\u001a\u0004\u0018\u00010\"¢\u0006\u0002\u0010$\u001a\u0016\u0010%\u001a\u000e\u0012\u0004\u0012\u00020\t\u0012\u0004\u0012\u00020\t0\r*\u00020\u0014\u001a\n\u0010&\u001a\u00020'*\u00020\u0014\u001a\n\u0010(\u001a\u00020\t*\u00020\u0014\u001a\u001a\u0010)\u001a\u0002H*\"\u0006\b\u0000\u0010*\u0018\u0001*\u00020\u0014H\u0086\b¢\u0006\u0002\u0010+\"\u0011\u0010\u0000\u001a\u00020\u0001¢\u0006\b\n\u0000\u001a\u0004\b\u0002\u0010\u0003¨\u0006,"}, d2 = {"json", "Lkotlinx/serialization/json/Json;", "getJson", "()Lkotlinx/serialization/json/Json;", "nativeMapOf", "Lcom/facebook/react/bridge/WritableNativeMap;", "pairs", "", "Lkotlin/Pair;", "", "([Lkotlin/Pair;)Lcom/facebook/react/bridge/WritableNativeMap;", "toNativeMap", "V", "", "put", "", "key", "value", "(Lcom/facebook/react/bridge/WritableNativeMap;Ljava/lang/String;Ljava/lang/Object;)V", "getNonNullString", "Lcom/facebook/react/bridge/ReadableMap;", "default", "getStringOrEmpty", StackTraceHelper.NAME_KEY, "getNonNullArray", "Lcom/facebook/react/bridge/ReadableArray;", "getNonNullMap", "getBoolean", "", "getInt", "", "getNullableInt", "(Lcom/facebook/react/bridge/ReadableMap;Ljava/lang/String;Ljava/lang/Integer;)Ljava/lang/Integer;", "getDouble", "", "getNullableDouble", "(Lcom/facebook/react/bridge/ReadableMap;Ljava/lang/String;Ljava/lang/Double;)Ljava/lang/Double;", "toStringMap", "toJson", "Lorg/json/JSONObject;", "toJsonString", "toKotlinObject", "T", "(Lcom/facebook/react/bridge/ReadableMap;)Ljava/lang/Object;", "react_utilities_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nNativeMapExtensions.kt\nKotlin\n*S Kotlin\n*F\n+ 1 NativeMapExtensions.kt\ncom/discord/react/utilities/NativeMapExtensionsKt\n+ 2 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 4 Json.kt\nkotlinx/serialization/json/Json\n*L\n1#1,138:1\n13472#2,2:139\n1869#3,2:141\n147#4:143\n*S KotlinDebug\n*F\n+ 1 NativeMapExtensions.kt\ncom/discord/react/utilities/NativeMapExtensionsKt\n*L\n23#1:139,2\n33#1:141,2\n137#1:143\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class NativeMapExtensionsKt {
    @NotNull
    private static final Json json = kotlinx.serialization.json.b.b(null, new Function1() { // from class: com.discord.react.utilities.a
        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Object obj) {
            Unit json$lambda$0;
            json$lambda$0 = NativeMapExtensionsKt.json$lambda$0((JsonBuilder) obj);
            return json$lambda$0;
        }
    }, 1, null);

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[ReadableType.values().length];
            try {
                iArr[ReadableType.Null.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[ReadableType.Boolean.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[ReadableType.Number.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[ReadableType.String.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[ReadableType.Map.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr[ReadableType.Array.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    public static final boolean getBoolean(ReadableMap readableMap, @NotNull String key, boolean z10) {
        Intrinsics.checkNotNullParameter(key, "key");
        if (readableMap != null && readableMap.hasKey(key)) {
            return readableMap.getBoolean(key);
        }
        return z10;
    }

    public static /* synthetic */ boolean getBoolean$default(ReadableMap readableMap, String str, boolean z10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            z10 = false;
        }
        return getBoolean(readableMap, str, z10);
    }

    public static final double getDouble(ReadableMap readableMap, @NotNull String key, double d10) {
        Intrinsics.checkNotNullParameter(key, "key");
        Double nullableDouble = getNullableDouble(readableMap, key, Double.valueOf(d10));
        Intrinsics.checkNotNull(nullableDouble);
        return nullableDouble.doubleValue();
    }

    public static final int getInt(ReadableMap readableMap, @NotNull String key, int i10) {
        Intrinsics.checkNotNullParameter(key, "key");
        Integer nullableInt = getNullableInt(readableMap, key, Integer.valueOf(i10));
        Intrinsics.checkNotNull(nullableInt);
        return nullableInt.intValue();
    }

    @NotNull
    public static final Json getJson() {
        return json;
    }

    @NotNull
    public static final ReadableArray getNonNullArray(@NotNull ReadableMap readableMap, @NotNull String key) {
        Intrinsics.checkNotNullParameter(readableMap, "<this>");
        Intrinsics.checkNotNullParameter(key, "key");
        ReadableArray array = readableMap.getArray(key);
        Intrinsics.checkNotNull(array);
        return array;
    }

    @NotNull
    public static final ReadableMap getNonNullMap(@NotNull ReadableMap readableMap, @NotNull String key) {
        Intrinsics.checkNotNullParameter(readableMap, "<this>");
        Intrinsics.checkNotNullParameter(key, "key");
        ReadableMap map = readableMap.getMap(key);
        Intrinsics.checkNotNull(map);
        return map;
    }

    @NotNull
    public static final String getNonNullString(@NotNull ReadableMap readableMap, @NotNull String key, @NotNull String str) {
        Intrinsics.checkNotNullParameter(readableMap, "<this>");
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(str, "default");
        return readableMap.hasKey(key) ? getNonNullString(readableMap, key) : str;
    }

    public static final Double getNullableDouble(ReadableMap readableMap, @NotNull String key, Double d10) {
        Intrinsics.checkNotNullParameter(key, "key");
        if (readableMap != null && readableMap.hasKey(key)) {
            return Double.valueOf(readableMap.getDouble(key));
        }
        return d10;
    }

    public static /* synthetic */ Double getNullableDouble$default(ReadableMap readableMap, String str, Double d10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            d10 = null;
        }
        return getNullableDouble(readableMap, str, d10);
    }

    public static final Integer getNullableInt(ReadableMap readableMap, @NotNull String key, Integer num) {
        Intrinsics.checkNotNullParameter(key, "key");
        if (readableMap != null && readableMap.hasKey(key)) {
            return Integer.valueOf(readableMap.getInt(key));
        }
        return num;
    }

    public static /* synthetic */ Integer getNullableInt$default(ReadableMap readableMap, String str, Integer num, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            num = null;
        }
        return getNullableInt(readableMap, str, num);
    }

    @NotNull
    public static final String getStringOrEmpty(@NotNull ReadableMap readableMap, @NotNull String name) {
        Intrinsics.checkNotNullParameter(readableMap, "<this>");
        Intrinsics.checkNotNullParameter(name, "name");
        return getNonNullString(readableMap, name, "");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit json$lambda$0(JsonBuilder Json) {
        Intrinsics.checkNotNullParameter(Json, "$this$Json");
        Json.c(true);
        return Unit.f32008a;
    }

    @NotNull
    public static final WritableNativeMap nativeMapOf(@NotNull Pair<String, ?>... pairs) {
        Intrinsics.checkNotNullParameter(pairs, "pairs");
        WritableNativeMap writableNativeMap = new WritableNativeMap();
        for (Pair<String, ?> pair : pairs) {
            put(writableNativeMap, (String) pair.a(), pair.b());
        }
        return writableNativeMap;
    }

    public static final <V> void put(@NotNull WritableNativeMap writableNativeMap, @NotNull String key, V v10) {
        Intrinsics.checkNotNullParameter(writableNativeMap, "<this>");
        Intrinsics.checkNotNullParameter(key, "key");
        if (v10 instanceof String) {
            writableNativeMap.putString(key, (String) v10);
        } else if (v10 instanceof Integer) {
            writableNativeMap.putInt(key, ((Number) v10).intValue());
        } else if (v10 instanceof Double) {
            writableNativeMap.putDouble(key, ((Number) v10).doubleValue());
        } else if (v10 instanceof Float) {
            writableNativeMap.putDouble(key, ((Number) v10).floatValue());
        } else if (v10 instanceof Boolean) {
            writableNativeMap.putBoolean(key, ((Boolean) v10).booleanValue());
        } else if (v10 instanceof ReadableArray) {
            writableNativeMap.putArray(key, (ReadableArray) v10);
        } else if (v10 instanceof ReadableMap) {
            writableNativeMap.putMap(key, (ReadableMap) v10);
        } else if (v10 instanceof int[]) {
            writableNativeMap.putArray(key, NativeArrayExtensionsKt.toNativeArray((int[]) v10));
        } else if (v10 instanceof Long) {
            writableNativeMap.putDouble(key, ((Number) v10).longValue());
        } else if (v10 == null) {
            writableNativeMap.putNull(key);
        } else {
            throw new IllegalArgumentException("Failed requirement.");
        }
    }

    @NotNull
    public static final JSONObject toJson(@NotNull ReadableMap readableMap) {
        Intrinsics.checkNotNullParameter(readableMap, "<this>");
        JSONObject jSONObject = new JSONObject();
        ReadableMapKeySetIterator keySetIterator = readableMap.keySetIterator();
        while (keySetIterator.hasNextKey()) {
            String nextKey = keySetIterator.nextKey();
            switch (WhenMappings.$EnumSwitchMapping$0[readableMap.getType(nextKey).ordinal()]) {
                case 1:
                    jSONObject.put(nextKey, JSONObject.NULL);
                    break;
                case 2:
                    jSONObject.put(nextKey, readableMap.getBoolean(nextKey));
                    break;
                case 3:
                    jSONObject.put(nextKey, readableMap.getDouble(nextKey));
                    break;
                case 4:
                    jSONObject.put(nextKey, readableMap.getString(nextKey));
                    break;
                case 5:
                    ReadableMap map = readableMap.getMap(nextKey);
                    Intrinsics.checkNotNull(map);
                    jSONObject.put(nextKey, toJson(map));
                    break;
                case 6:
                    ReadableArray array = readableMap.getArray(nextKey);
                    Intrinsics.checkNotNull(array);
                    jSONObject.put(nextKey, NativeArrayExtensionsKt.toJson(array));
                    break;
                default:
                    throw new p();
            }
        }
        return jSONObject;
    }

    @NotNull
    public static final String toJsonString(@NotNull ReadableMap readableMap) {
        Intrinsics.checkNotNullParameter(readableMap, "<this>");
        String jSONObject = toJson(readableMap).toString();
        Intrinsics.checkNotNullExpressionValue(jSONObject, "toString(...)");
        return jSONObject;
    }

    public static final /* synthetic */ <T> T toKotlinObject(ReadableMap readableMap) {
        Intrinsics.checkNotNullParameter(readableMap, "<this>");
        Json json2 = getJson();
        String jsonString = toJsonString(readableMap);
        mt.b a10 = json2.a();
        Intrinsics.reifiedOperationMarker(6, "T");
        MagicApiIntrinsics.voidMagicApiCall("kotlinx.serialization.serializer.withModule");
        return (T) json2.b(w.d(a10, null), jsonString);
    }

    @NotNull
    public static final <V> WritableNativeMap toNativeMap(@NotNull Map<String, ? extends V> map) {
        Intrinsics.checkNotNullParameter(map, "<this>");
        WritableNativeMap writableNativeMap = new WritableNativeMap();
        Iterator<T> it = map.entrySet().iterator();
        while (it.hasNext()) {
            Map.Entry entry = (Map.Entry) it.next();
            put(writableNativeMap, (String) entry.getKey(), entry.getValue());
        }
        return writableNativeMap;
    }

    @NotNull
    public static final Map<String, String> toStringMap(@NotNull ReadableMap readableMap) {
        Intrinsics.checkNotNullParameter(readableMap, "<this>");
        HashMap<String, Object> hashMap = readableMap.toHashMap();
        Intrinsics.checkNotNull(hashMap, "null cannot be cast to non-null type kotlin.collections.Map<kotlin.String, kotlin.String>");
        return hashMap;
    }

    @NotNull
    public static final String getNonNullString(@NotNull ReadableMap readableMap, @NotNull String key) {
        Intrinsics.checkNotNullParameter(readableMap, "<this>");
        Intrinsics.checkNotNullParameter(key, "key");
        String string = readableMap.getString(key);
        Intrinsics.checkNotNull(string);
        return string;
    }
}
