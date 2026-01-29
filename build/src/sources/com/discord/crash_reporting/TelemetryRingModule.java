package com.discord.crash_reporting;

import com.discord.codegen.NativeTelemetryRingModuleSpec;
import com.discord.crash_reporting.TelemetryRingTypes;
import com.discord.logging.Log;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.BaseJavaModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import kotlin.Metadata;
import kotlin.collections.m0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.ranges.IntRange;
import org.jetbrains.annotations.NotNull;
import org.json.JSONObject;
@Metadata(d1 = {"\u0000\\\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0006\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010$\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u0000 #2\u00020\u0001:\u0001#B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J4\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000b2\b\u0010\f\u001a\u0004\u0018\u00010\t2\b\u0010\r\u001a\u0004\u0018\u00010\u000e2\u0006\u0010\u000f\u001a\u00020\u0010H\u0016J9\u0010\u0011\u001a\u00020\u00072\u0006\u0010\u000f\u001a\u00020\u00102\u0006\u0010\u0012\u001a\u00020\u000b2\b\u0010\u0013\u001a\u0004\u0018\u00010\u000e2\b\u0010\u0014\u001a\u0004\u0018\u00010\u000b2\u0006\u0010\u0015\u001a\u00020\u0016H\u0016¢\u0006\u0002\u0010\u0017J\b\u0010\u0018\u001a\u00020\u0007H\u0016J\u0018\u0010\u0019\u001a\u00020\u001a2\u000e\u0010\u001b\u001a\n\u0012\u0002\b\u0003\u0012\u0002\b\u00030\u001cH\u0002J\u0014\u0010\u001d\u001a\u00020\u001e2\n\u0010\u001f\u001a\u0006\u0012\u0002\b\u00030 H\u0002J\u0014\u0010!\u001a\u0004\u0018\u00010\"2\b\u0010\u001b\u001a\u0004\u0018\u00010\u000eH\u0002¨\u0006$"}, d2 = {"Lcom/discord/crash_reporting/TelemetryRingModule;", "Lcom/discord/codegen/NativeTelemetryRingModuleSpec;", "reactContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "append", "", "key", "", "timestampMs", "", "message", "data", "Lcom/facebook/react/bridge/ReadableMap;", "channels", "Lcom/facebook/react/bridge/ReadableArray;", "snapshot", "beforeOffset", "budget", "ackedEndOffset", BaseJavaModule.METHOD_TYPE_PROMISE, "Lcom/facebook/react/bridge/Promise;", "(Lcom/facebook/react/bridge/ReadableArray;DLcom/facebook/react/bridge/ReadableMap;Ljava/lang/Double;Lcom/facebook/react/bridge/Promise;)V", "clear", "mapToWritableMap", "Lcom/facebook/react/bridge/WritableMap;", "map", "", "listToWritableArray", "Lcom/facebook/react/bridge/WritableArray;", "list", "", "toBudget", "Lcom/discord/crash_reporting/TelemetryRingTypes$Budget;", "Companion", "crash_reporting_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nTelemetryRingModule.kt\nKotlin\n*S Kotlin\n*F\n+ 1 TelemetryRingModule.kt\ncom/discord/crash_reporting/TelemetryRingModule\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 4 _Maps.kt\nkotlin/collections/MapsKt___MapsKt\n*L\n1#1,158:1\n1617#2,9:159\n1869#2:168\n1870#2:170\n1626#2:171\n1617#2,9:172\n1869#2:181\n1870#2:183\n1626#2:184\n1869#2:185\n1870#2:187\n1869#2,2:190\n1#3:169\n1#3:182\n1#3:186\n216#4,2:188\n*S KotlinDebug\n*F\n+ 1 TelemetryRingModule.kt\ncom/discord/crash_reporting/TelemetryRingModule\n*L\n42#1:159,9\n42#1:168\n42#1:170\n42#1:171\n63#1:172,9\n63#1:181\n63#1:183\n63#1:184\n79#1:185\n79#1:187\n125#1:190,2\n42#1:169\n63#1:182\n104#1:188,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class TelemetryRingModule extends NativeTelemetryRingModuleSpec {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final String TAG = "TelemetryRingModule";

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/discord/crash_reporting/TelemetryRingModule$Companion;", "", "<init>", "()V", "TAG", "", "crash_reporting_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public TelemetryRingModule(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        TelemetryRing.INSTANCE.init(reactContext, new TelemetryRingTypes.Budget(TelemetryRingTypes.BudgetType.ROWS, 10000L));
    }

    private final WritableArray listToWritableArray(List<?> list) {
        WritableArray createArray = Arguments.createArray();
        Intrinsics.checkNotNullExpressionValue(createArray, "createArray(...)");
        for (Object obj : list) {
            if (obj instanceof Map) {
                createArray.pushMap(mapToWritableMap((Map) obj));
            } else if (obj instanceof List) {
                createArray.pushArray(listToWritableArray((List) obj));
            } else if (obj instanceof Integer) {
                createArray.pushInt(((Number) obj).intValue());
            } else if (obj instanceof Long) {
                createArray.pushDouble(((Number) obj).longValue());
            } else if (obj instanceof Double) {
                createArray.pushDouble(((Number) obj).doubleValue());
            } else if (obj instanceof Float) {
                createArray.pushDouble(((Number) obj).floatValue());
            } else if (obj instanceof String) {
                createArray.pushString((String) obj);
            } else if (obj instanceof Boolean) {
                createArray.pushBoolean(((Boolean) obj).booleanValue());
            } else if (obj != null && !Intrinsics.areEqual(obj, JSONObject.NULL)) {
                createArray.pushString(obj.toString());
            } else {
                createArray.pushNull();
            }
        }
        return createArray;
    }

    private final WritableMap mapToWritableMap(Map<?, ?> map) {
        WritableMap createMap = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
        for (Map.Entry<?, ?> entry : map.entrySet()) {
            Object key = entry.getKey();
            Object value = entry.getValue();
            String valueOf = String.valueOf(key);
            if (value instanceof Integer) {
                createMap.putInt(valueOf, ((Number) value).intValue());
            } else if (value instanceof Long) {
                createMap.putDouble(valueOf, ((Number) value).longValue());
            } else if (value instanceof Double) {
                createMap.putDouble(valueOf, ((Number) value).doubleValue());
            } else if (value instanceof Float) {
                createMap.putDouble(valueOf, ((Number) value).floatValue());
            } else if (value instanceof String) {
                createMap.putString(valueOf, (String) value);
            } else if (value instanceof Boolean) {
                createMap.putBoolean(valueOf, ((Boolean) value).booleanValue());
            } else if (value instanceof Map) {
                createMap.putMap(valueOf, mapToWritableMap((Map) value));
            } else if (value instanceof List) {
                createMap.putArray(valueOf, listToWritableArray((List) value));
            } else if (value == null) {
                createMap.putNull(valueOf);
            } else if (Intrinsics.areEqual(value, JSONObject.NULL)) {
                createMap.putNull(valueOf);
            } else {
                createMap.putString(valueOf, value.toString());
            }
        }
        return createMap;
    }

    private final TelemetryRingTypes.Budget toBudget(ReadableMap readableMap) {
        String string;
        TelemetryRingTypes.BudgetType budgetType;
        if (readableMap == null || (string = readableMap.getString("type")) == null) {
            return null;
        }
        String upperCase = string.toUpperCase(Locale.ROOT);
        Intrinsics.checkNotNullExpressionValue(upperCase, "toUpperCase(...)");
        if (upperCase == null) {
            return null;
        }
        long j10 = (long) readableMap.getDouble("limit");
        if (Intrinsics.areEqual(upperCase, "BYTES")) {
            budgetType = TelemetryRingTypes.BudgetType.BYTES;
        } else if (!Intrinsics.areEqual(upperCase, "ROWS")) {
            return null;
        } else {
            budgetType = TelemetryRingTypes.BudgetType.ROWS;
        }
        return new TelemetryRingTypes.Budget(budgetType, j10);
    }

    @Override // com.discord.codegen.NativeTelemetryRingModuleSpec
    public void append(@NotNull String key, double d10, String str, ReadableMap readableMap, @NotNull ReadableArray channels) {
        HashMap<String, Object> hashMap;
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(channels, "channels");
        try {
            IntRange u10 = kotlin.ranges.d.u(0, channels.size());
            ArrayList arrayList = new ArrayList();
            Iterator it = u10.iterator();
            while (it.hasNext()) {
                String string = channels.getString(((m0) it).nextInt());
                if (string != null) {
                    arrayList.add(string);
                }
            }
            TelemetryRing telemetryRing = TelemetryRing.INSTANCE;
            long j10 = (long) d10;
            if (readableMap != null) {
                hashMap = readableMap.toHashMap();
            } else {
                hashMap = null;
            }
            telemetryRing.append(key, j10, str, hashMap, arrayList);
        } catch (Throwable th2) {
            Log.INSTANCE.e(TAG, "Failed to append entry", th2);
        }
    }

    @Override // com.discord.codegen.NativeTelemetryRingModuleSpec
    public void clear() {
        TelemetryRing.INSTANCE.clear();
    }

    @Override // com.discord.codegen.NativeTelemetryRingModuleSpec
    public void snapshot(@NotNull ReadableArray channels, double d10, ReadableMap readableMap, Double d11, @NotNull Promise promise) {
        Long valueOf;
        String str;
        Map<?, ?> map;
        Intrinsics.checkNotNullParameter(channels, "channels");
        Intrinsics.checkNotNullParameter(promise, "promise");
        try {
            IntRange u10 = kotlin.ranges.d.u(0, channels.size());
            ArrayList arrayList = new ArrayList();
            Iterator it = u10.iterator();
            while (it.hasNext()) {
                String string = channels.getString(((m0) it).nextInt());
                if (string != null) {
                    arrayList.add(string);
                }
            }
            TelemetryRing telemetryRing = TelemetryRing.INSTANCE;
            long j10 = (long) d10;
            TelemetryRingTypes.Budget budget = toBudget(readableMap);
            if (d11 != null) {
                try {
                    valueOf = Long.valueOf((long) d11.doubleValue());
                } catch (Throwable th2) {
                    th = th2;
                    Log.INSTANCE.e(TAG, "Failed to get snapshot", th);
                    promise.reject("SNAPSHOT_ERROR", th.getMessage(), th);
                    return;
                }
            } else {
                valueOf = null;
            }
            Map<String, Object> snapshot = telemetryRing.snapshot(arrayList, j10, budget, valueOf);
            WritableMap createMap = Arguments.createMap();
            Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
            Object obj = snapshot.get("nextBeforeOffset");
            Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlin.Long");
            createMap.putDouble("nextBeforeOffset", ((Long) obj).longValue());
            Object obj2 = snapshot.get("maxReturnedEndOffset");
            Intrinsics.checkNotNull(obj2, "null cannot be cast to non-null type kotlin.Long");
            createMap.putDouble("maxReturnedEndOffset", ((Long) obj2).longValue());
            Object obj3 = snapshot.get("hasMore");
            Intrinsics.checkNotNull(obj3, "null cannot be cast to non-null type kotlin.Boolean");
            createMap.putBoolean("hasMore", ((Boolean) obj3).booleanValue());
            Object obj4 = snapshot.get("entries");
            Intrinsics.checkNotNull(obj4, "null cannot be cast to non-null type kotlin.collections.List<kotlin.collections.Map<kotlin.String, kotlin.Any?>>");
            WritableArray createArray = Arguments.createArray();
            Intrinsics.checkNotNullExpressionValue(createArray, "createArray(...)");
            for (Map map2 : (List) obj4) {
                WritableMap createMap2 = Arguments.createMap();
                Intrinsics.checkNotNullExpressionValue(createMap2, "createMap(...)");
                Object obj5 = map2.get("key");
                Intrinsics.checkNotNull(obj5, "null cannot be cast to non-null type kotlin.String");
                createMap2.putString("key", (String) obj5);
                Object obj6 = map2.get("timestamp");
                Intrinsics.checkNotNull(obj6, "null cannot be cast to non-null type kotlin.Long");
                createMap2.putDouble("timestamp", ((Long) obj6).longValue());
                Object obj7 = map2.get("message");
                if (obj7 instanceof String) {
                    str = (String) obj7;
                } else {
                    str = null;
                }
                if (str != null) {
                    createMap2.putString("message", str);
                }
                Object obj8 = map2.get("data");
                if (obj8 instanceof Map) {
                    map = (Map) obj8;
                } else {
                    map = null;
                }
                if (map != null) {
                    try {
                        createMap2.putMap("data", mapToWritableMap(map));
                    } catch (Throwable th3) {
                        th = th3;
                        Log.INSTANCE.e(TAG, "Failed to get snapshot", th);
                        promise.reject("SNAPSHOT_ERROR", th.getMessage(), th);
                        return;
                    }
                }
                createArray.pushMap(createMap2);
            }
            createMap.putArray("entries", createArray);
            promise.resolve(createMap);
        } catch (Throwable th4) {
            th = th4;
        }
    }
}
