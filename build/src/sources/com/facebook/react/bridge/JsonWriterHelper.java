package com.facebook.react.bridge;

import android.util.JsonWriter;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000<\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010$\n\u0002\b\u0002\n\u0002\u0010 \n\u0002\b\u0002\bÆ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u001a\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\b\u0010\u0004\u001a\u0004\u0018\u00010\u0001H\u0007J\u0018\u0010\b\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\u0004\u001a\u00020\tH\u0002J\u0018\u0010\n\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\u0004\u001a\u00020\u000bH\u0002J\u0018\u0010\f\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\u0004\u001a\u00020\rH\u0007J \u0010\u000e\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u000e\u0010\u000f\u001a\n\u0012\u0002\b\u0003\u0012\u0002\b\u00030\u0010H\u0002J\u001c\u0010\u0011\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\n\u0010\u0012\u001a\u0006\u0012\u0002\b\u00030\u0013H\u0002J\u001a\u0010\u0014\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\b\u0010\u0004\u001a\u0004\u0018\u00010\u0001H\u0002¨\u0006\u0015"}, d2 = {"Lcom/facebook/react/bridge/JsonWriterHelper;", "", "<init>", "()V", "value", "", "writer", "Landroid/util/JsonWriter;", "dynamicValue", "Lcom/facebook/react/bridge/Dynamic;", "readableMapValue", "Lcom/facebook/react/bridge/ReadableMap;", "readableArrayValue", "Lcom/facebook/react/bridge/ReadableArray;", "mapValue", "map", "", "listValue", "list", "", "objectValue", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class JsonWriterHelper {
    @NotNull
    public static final JsonWriterHelper INSTANCE = new JsonWriterHelper();

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

    private JsonWriterHelper() {
    }

    private final void dynamicValue(JsonWriter jsonWriter, Dynamic dynamic) {
        switch (WhenMappings.$EnumSwitchMapping$0[dynamic.getType().ordinal()]) {
            case 1:
                jsonWriter.nullValue();
                return;
            case 2:
                jsonWriter.value(dynamic.asBoolean());
                return;
            case 3:
                jsonWriter.value(dynamic.asDouble());
                return;
            case 4:
                jsonWriter.value(dynamic.asString());
                return;
            case 5:
                ReadableMap asMap = dynamic.asMap();
                if (asMap != null) {
                    readableMapValue(jsonWriter, asMap);
                    Unit unit = Unit.f33282a;
                    return;
                }
                throw new IllegalStateException("Required value was null.");
            case 6:
                ReadableArray asArray = dynamic.asArray();
                if (asArray != null) {
                    readableArrayValue(jsonWriter, asArray);
                    Unit unit2 = Unit.f33282a;
                    return;
                }
                throw new IllegalStateException("Required value was null.");
            default:
                throw new ir.p();
        }
    }

    private final void listValue(JsonWriter jsonWriter, List<?> list) {
        jsonWriter.beginArray();
        Iterator<?> it = list.iterator();
        while (it.hasNext()) {
            objectValue(jsonWriter, it.next());
        }
        jsonWriter.endArray();
    }

    private final void mapValue(JsonWriter jsonWriter, Map<?, ?> map) {
        jsonWriter.beginObject();
        for (Map.Entry<?, ?> entry : map.entrySet()) {
            Object key = entry.getKey();
            Object value = entry.getValue();
            jsonWriter.name(String.valueOf(key));
            value(jsonWriter, value);
        }
        jsonWriter.endObject();
    }

    private final void objectValue(JsonWriter jsonWriter, Object obj) {
        if (obj == null) {
            jsonWriter.nullValue();
        } else if (obj instanceof String) {
            jsonWriter.value((String) obj);
        } else if (obj instanceof Number) {
            jsonWriter.value((Number) obj);
        } else if (obj instanceof Boolean) {
            jsonWriter.value(((Boolean) obj).booleanValue());
        } else {
            throw new IllegalArgumentException("Unknown value: " + obj);
        }
    }

    public static final void readableArrayValue(@NotNull JsonWriter writer, @NotNull ReadableArray value) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        Intrinsics.checkNotNullParameter(value, "value");
        writer.beginArray();
        try {
            int size = value.size();
            for (int i10 = 0; i10 < size; i10++) {
                switch (WhenMappings.$EnumSwitchMapping$0[value.getType(i10).ordinal()]) {
                    case 1:
                        writer.nullValue();
                        break;
                    case 2:
                        writer.value(value.getBoolean(i10));
                        break;
                    case 3:
                        writer.value(value.getDouble(i10));
                        break;
                    case 4:
                        writer.value(value.getString(i10));
                        break;
                    case 5:
                        ReadableMap map = value.getMap(i10);
                        JsonWriterHelper jsonWriterHelper = INSTANCE;
                        if (map != null) {
                            jsonWriterHelper.readableMapValue(writer, map);
                            Unit unit = Unit.f33282a;
                            break;
                        } else {
                            throw new IllegalStateException("Required value was null.");
                        }
                    case 6:
                        ReadableArray array = value.getArray(i10);
                        if (array != null) {
                            readableArrayValue(writer, array);
                            Unit unit2 = Unit.f33282a;
                            break;
                        } else {
                            throw new IllegalStateException("Required value was null.");
                        }
                    default:
                        throw new ir.p();
                }
            }
            writer.endArray();
        } catch (Throwable th2) {
            writer.endArray();
            throw th2;
        }
    }

    private final void readableMapValue(JsonWriter jsonWriter, ReadableMap readableMap) {
        jsonWriter.beginObject();
        try {
            ReadableMapKeySetIterator keySetIterator = readableMap.keySetIterator();
            while (keySetIterator.hasNextKey()) {
                String nextKey = keySetIterator.nextKey();
                jsonWriter.name(nextKey);
                switch (WhenMappings.$EnumSwitchMapping$0[readableMap.getType(nextKey).ordinal()]) {
                    case 1:
                        jsonWriter.nullValue();
                        break;
                    case 2:
                        jsonWriter.value(readableMap.getBoolean(nextKey));
                        break;
                    case 3:
                        jsonWriter.value(readableMap.getDouble(nextKey));
                        break;
                    case 4:
                        jsonWriter.value(readableMap.getString(nextKey));
                        break;
                    case 5:
                        ReadableMap map = readableMap.getMap(nextKey);
                        if (map != null) {
                            readableMapValue(jsonWriter, map);
                            Unit unit = Unit.f33282a;
                            break;
                        } else {
                            throw new IllegalStateException("Required value was null.");
                        }
                    case 6:
                        ReadableArray array = readableMap.getArray(nextKey);
                        if (array != null) {
                            readableArrayValue(jsonWriter, array);
                            Unit unit2 = Unit.f33282a;
                            break;
                        } else {
                            throw new IllegalStateException("Required value was null.");
                        }
                    default:
                        throw new ir.p();
                }
            }
            jsonWriter.endObject();
        } catch (Throwable th2) {
            jsonWriter.endObject();
            throw th2;
        }
    }

    public static final void value(@NotNull JsonWriter writer, Object obj) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (obj instanceof Map) {
            INSTANCE.mapValue(writer, (Map) obj);
        } else if (obj instanceof List) {
            INSTANCE.listValue(writer, (List) obj);
        } else if (obj instanceof ReadableMap) {
            INSTANCE.readableMapValue(writer, (ReadableMap) obj);
        } else if (obj instanceof ReadableArray) {
            readableArrayValue(writer, (ReadableArray) obj);
        } else if (obj instanceof Dynamic) {
            INSTANCE.dynamicValue(writer, (Dynamic) obj);
        } else {
            INSTANCE.objectValue(writer, obj);
        }
    }
}
