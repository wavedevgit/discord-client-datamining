package com.facebook.react.bridge;

import com.facebook.react.devsupport.StackTraceHelper;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000v\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010%\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\u0006\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\t\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010(\n\u0002\u0010&\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u000e\n\u0002\u0018\u0002\n\u0002\b\u0006\u0018\u0000 ;2\u00020\u00012\u00020\u0002:\u0001;B\u0007¢\u0006\u0004\b\u0003\u0010\u0004B!\b\u0012\u0012\u0016\u0010\u0005\u001a\f\u0012\b\b\u0001\u0012\u0004\u0018\u00010\u00070\u0006\"\u0004\u0018\u00010\u0007¢\u0006\u0004\b\u0003\u0010\bJ\u0010\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u000bH\u0016J\u0010\u0010\u000f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u000bH\u0016J\u0010\u0010\u0010\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u000bH\u0016J\u0010\u0010\u0011\u001a\u00020\u00122\u0006\u0010\u000e\u001a\u00020\u000bH\u0016J\u0010\u0010\u0013\u001a\u00020\u00142\u0006\u0010\u000e\u001a\u00020\u000bH\u0016J\u0010\u0010\u0015\u001a\u00020\u00162\u0006\u0010\u000e\u001a\u00020\u000bH\u0016J\u0012\u0010\u0017\u001a\u0004\u0018\u00010\u000b2\u0006\u0010\u000e\u001a\u00020\u000bH\u0016J\u0012\u0010\u0018\u001a\u0004\u0018\u00010\u00012\u0006\u0010\u000e\u001a\u00020\u000bH\u0016J\u0012\u0010\u0019\u001a\u0004\u0018\u00010\u001a2\u0006\u0010\u000e\u001a\u00020\u000bH\u0016J\u0010\u0010\u001b\u001a\u00020\u001c2\u0006\u0010\u000e\u001a\u00020\u000bH\u0016J\u0010\u0010\u001d\u001a\u00020\u001e2\u0006\u0010\u000e\u001a\u00020\u000bH\u0016J\b\u0010$\u001a\u00020%H\u0016J\u0018\u0010&\u001a\u00020'2\u0006\u0010(\u001a\u00020\u000b2\u0006\u0010)\u001a\u00020\rH\u0016J\u0018\u0010*\u001a\u00020'2\u0006\u0010(\u001a\u00020\u000b2\u0006\u0010)\u001a\u00020\u0012H\u0016J\u0018\u0010+\u001a\u00020'2\u0006\u0010(\u001a\u00020\u000b2\u0006\u0010)\u001a\u00020\u0014H\u0016J\u0018\u0010,\u001a\u00020'2\u0006\u0010(\u001a\u00020\u000b2\u0006\u0010)\u001a\u00020\u0016H\u0016J\u001a\u0010-\u001a\u00020'2\u0006\u0010(\u001a\u00020\u000b2\b\u0010)\u001a\u0004\u0018\u00010\u000bH\u0016J\u0010\u0010.\u001a\u00020'2\u0006\u0010(\u001a\u00020\u000bH\u0016J\u001a\u0010/\u001a\u00020'2\u0006\u0010(\u001a\u00020\u000b2\b\u0010)\u001a\u0004\u0018\u00010\u0001H\u0016J\u0010\u00100\u001a\u00020'2\u0006\u00101\u001a\u00020\u0001H\u0016J\b\u00102\u001a\u00020\u0002H\u0016J\u001a\u00103\u001a\u00020'2\u0006\u0010(\u001a\u00020\u000b2\b\u0010)\u001a\u0004\u0018\u00010\u001aH\u0016J\u000e\u00104\u001a\u00020'2\u0006\u0010(\u001a\u00020\u000bJ\u0016\u00105\u001a\u0010\u0012\u0004\u0012\u00020\u000b\u0012\u0006\u0012\u0004\u0018\u00010\u000706H\u0016J\b\u00107\u001a\u00020\u000bH\u0016J\u0013\u00108\u001a\u00020\r2\b\u00109\u001a\u0004\u0018\u00010\u0007H\u0096\u0002J\b\u0010:\u001a\u00020\u0014H\u0016R\u001c\u0010\t\u001a\u0010\u0012\u0004\u0012\u00020\u000b\u0012\u0006\u0012\u0004\u0018\u00010\u00070\nX\u0082\u0004¢\u0006\u0002\n\u0000R(\u0010\u001f\u001a\u0016\u0012\u0012\u0012\u0010\u0012\u0004\u0012\u00020\u000b\u0012\u0006\u0012\u0004\u0018\u00010\u00070!0 8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\"\u0010#¨\u0006<"}, d2 = {"Lcom/facebook/react/bridge/JavaOnlyMap;", "Lcom/facebook/react/bridge/ReadableMap;", "Lcom/facebook/react/bridge/WritableMap;", "<init>", "()V", "keysAndValues", "", "", "([Ljava/lang/Object;)V", "backingMap", "", "", "hasKey", "", StackTraceHelper.NAME_KEY, "isNull", "getBoolean", "getDouble", "", "getInt", "", "getLong", "", "getString", "getMap", "getArray", "Lcom/facebook/react/bridge/ReadableArray;", "getDynamic", "Lcom/facebook/react/bridge/Dynamic;", "getType", "Lcom/facebook/react/bridge/ReadableType;", "entryIterator", "", "", "getEntryIterator", "()Ljava/util/Iterator;", "keySetIterator", "Lcom/facebook/react/bridge/ReadableMapKeySetIterator;", "putBoolean", "", "key", "value", "putDouble", "putInt", "putLong", "putString", "putNull", "putMap", "merge", "source", "copy", "putArray", "remove", "toHashMap", "Ljava/util/HashMap;", "toString", "equals", "other", "hashCode", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nJavaOnlyMap.kt\nKotlin\n*S Kotlin\n*F\n+ 1 JavaOnlyMap.kt\ncom/facebook/react/bridge/JavaOnlyMap\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,181:1\n1#2:182\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class JavaOnlyMap implements ReadableMap, WritableMap {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final Map<String, Object> backingMap;

    @Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0011\n\u0002\b\u0003\n\u0002\u0010$\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J%\u0010\u0004\u001a\u00020\u00052\u0016\u0010\u0006\u001a\f\u0012\b\b\u0001\u0012\u0004\u0018\u00010\u00010\u0007\"\u0004\u0018\u00010\u0001H\u0007¢\u0006\u0002\u0010\bJ\u001e\u0010\t\u001a\u00020\u00052\u0014\u0010\n\u001a\u0010\u0012\u0004\u0012\u00020\f\u0012\u0006\u0012\u0004\u0018\u00010\u00010\u000bH\u0007J\u0012\u0010\r\u001a\u00020\u00052\b\u0010\n\u001a\u0004\u0018\u00010\u000eH\u0007¨\u0006\u000f"}, d2 = {"Lcom/facebook/react/bridge/JavaOnlyMap$Companion;", "", "<init>", "()V", "of", "Lcom/facebook/react/bridge/JavaOnlyMap;", "keysAndValues", "", "([Ljava/lang/Object;)Lcom/facebook/react/bridge/JavaOnlyMap;", "from", "map", "", "", "deepClone", "Lcom/facebook/react/bridge/ReadableMap;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {

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

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final JavaOnlyMap deepClone(ReadableMap readableMap) {
            JavaOnlyMap javaOnlyMap = new JavaOnlyMap();
            if (readableMap != null) {
                ReadableMapKeySetIterator keySetIterator = readableMap.keySetIterator();
                while (keySetIterator.hasNextKey()) {
                    String nextKey = keySetIterator.nextKey();
                    switch (WhenMappings.$EnumSwitchMapping$0[readableMap.getType(nextKey).ordinal()]) {
                        case 1:
                            javaOnlyMap.putNull(nextKey);
                            break;
                        case 2:
                            javaOnlyMap.putBoolean(nextKey, readableMap.getBoolean(nextKey));
                            break;
                        case 3:
                            javaOnlyMap.putDouble(nextKey, readableMap.getDouble(nextKey));
                            break;
                        case 4:
                            javaOnlyMap.putString(nextKey, readableMap.getString(nextKey));
                            break;
                        case 5:
                            javaOnlyMap.putMap(nextKey, deepClone(readableMap.getMap(nextKey)));
                            break;
                        case 6:
                            javaOnlyMap.putArray(nextKey, JavaOnlyArray.Companion.deepClone(readableMap.getArray(nextKey)));
                            break;
                        default:
                            throw new lr.p();
                    }
                }
            }
            return javaOnlyMap;
        }

        @NotNull
        public final JavaOnlyMap from(@NotNull Map<String, ? extends Object> map) {
            Intrinsics.checkNotNullParameter(map, "map");
            return new JavaOnlyMap(new Object[]{map}, null);
        }

        @NotNull
        public final JavaOnlyMap of(@NotNull Object... keysAndValues) {
            Intrinsics.checkNotNullParameter(keysAndValues, "keysAndValues");
            return new JavaOnlyMap(Arrays.copyOf(keysAndValues, keysAndValues.length), null);
        }

        private Companion() {
        }
    }

    public /* synthetic */ JavaOnlyMap(Object[] objArr, DefaultConstructorMarker defaultConstructorMarker) {
        this(objArr);
    }

    @NotNull
    public static final JavaOnlyMap deepClone(ReadableMap readableMap) {
        return Companion.deepClone(readableMap);
    }

    @NotNull
    public static final JavaOnlyMap from(@NotNull Map<String, ? extends Object> map) {
        return Companion.from(map);
    }

    @NotNull
    public static final JavaOnlyMap of(@NotNull Object... objArr) {
        return Companion.of(objArr);
    }

    @Override // com.facebook.react.bridge.WritableMap
    @NotNull
    public WritableMap copy() {
        JavaOnlyMap javaOnlyMap = new JavaOnlyMap();
        javaOnlyMap.merge(this);
        return javaOnlyMap;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && Intrinsics.areEqual(JavaOnlyMap.class, obj.getClass())) {
            return Intrinsics.areEqual(this.backingMap, ((JavaOnlyMap) obj).backingMap);
        }
        return false;
    }

    @Override // com.facebook.react.bridge.ReadableMap
    public ReadableArray getArray(@NotNull String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        return (ReadableArray) this.backingMap.get(name);
    }

    @Override // com.facebook.react.bridge.ReadableMap
    public boolean getBoolean(@NotNull String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        Object obj = this.backingMap.get(name);
        Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlin.Boolean");
        return ((Boolean) obj).booleanValue();
    }

    @Override // com.facebook.react.bridge.ReadableMap
    public double getDouble(@NotNull String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        Object obj = this.backingMap.get(name);
        Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlin.Number");
        return ((Number) obj).doubleValue();
    }

    @Override // com.facebook.react.bridge.ReadableMap
    @NotNull
    public Dynamic getDynamic(@NotNull String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        return DynamicFromMap.Companion.create(this, name);
    }

    @Override // com.facebook.react.bridge.ReadableMap
    @NotNull
    public Iterator<Map.Entry<String, Object>> getEntryIterator() {
        return this.backingMap.entrySet().iterator();
    }

    @Override // com.facebook.react.bridge.ReadableMap
    public int getInt(@NotNull String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        Object obj = this.backingMap.get(name);
        Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlin.Number");
        return ((Number) obj).intValue();
    }

    @Override // com.facebook.react.bridge.ReadableMap
    public long getLong(@NotNull String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        Object obj = this.backingMap.get(name);
        Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlin.Number");
        return ((Number) obj).longValue();
    }

    @Override // com.facebook.react.bridge.ReadableMap
    public ReadableMap getMap(@NotNull String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        return (ReadableMap) this.backingMap.get(name);
    }

    @Override // com.facebook.react.bridge.ReadableMap
    public String getString(@NotNull String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        return (String) this.backingMap.get(name);
    }

    @Override // com.facebook.react.bridge.ReadableMap
    @NotNull
    public ReadableType getType(@NotNull String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        Object obj = this.backingMap.get(name);
        if (obj == null) {
            return ReadableType.Null;
        }
        if (obj instanceof Number) {
            return ReadableType.Number;
        }
        if (obj instanceof String) {
            return ReadableType.String;
        }
        if (obj instanceof Boolean) {
            return ReadableType.Boolean;
        }
        if (obj instanceof ReadableMap) {
            return ReadableType.Map;
        }
        if (obj instanceof ReadableArray) {
            return ReadableType.Array;
        }
        if (obj instanceof Dynamic) {
            return ((Dynamic) obj).getType();
        }
        throw new IllegalArgumentException("Invalid value " + obj + " for key " + name + " contained in JavaOnlyMap");
    }

    @Override // com.facebook.react.bridge.ReadableMap
    public boolean hasKey(@NotNull String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        return this.backingMap.containsKey(name);
    }

    public int hashCode() {
        return this.backingMap.hashCode();
    }

    @Override // com.facebook.react.bridge.ReadableMap
    public boolean isNull(@NotNull String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        if (this.backingMap.get(name) == null) {
            return true;
        }
        return false;
    }

    @Override // com.facebook.react.bridge.ReadableMap
    @NotNull
    public ReadableMapKeySetIterator keySetIterator() {
        return new ReadableMapKeySetIterator(this) { // from class: com.facebook.react.bridge.JavaOnlyMap$keySetIterator$1
            private final Iterator<Map.Entry<String, Object>> iterator;

            /* JADX INFO: Access modifiers changed from: package-private */
            {
                Map map;
                map = this.backingMap;
                this.iterator = map.entrySet().iterator();
            }

            @Override // com.facebook.react.bridge.ReadableMapKeySetIterator
            public boolean hasNextKey() {
                return this.iterator.hasNext();
            }

            @Override // com.facebook.react.bridge.ReadableMapKeySetIterator
            public String nextKey() {
                return this.iterator.next().getKey();
            }
        };
    }

    @Override // com.facebook.react.bridge.WritableMap
    public void merge(@NotNull ReadableMap source) {
        Intrinsics.checkNotNullParameter(source, "source");
        this.backingMap.putAll(((JavaOnlyMap) source).backingMap);
    }

    @Override // com.facebook.react.bridge.WritableMap
    public void putArray(@NotNull String key, ReadableArray readableArray) {
        Intrinsics.checkNotNullParameter(key, "key");
        this.backingMap.put(key, readableArray);
    }

    @Override // com.facebook.react.bridge.WritableMap
    public void putBoolean(@NotNull String key, boolean z10) {
        Intrinsics.checkNotNullParameter(key, "key");
        this.backingMap.put(key, Boolean.valueOf(z10));
    }

    @Override // com.facebook.react.bridge.WritableMap
    public void putDouble(@NotNull String key, double d10) {
        Intrinsics.checkNotNullParameter(key, "key");
        this.backingMap.put(key, Double.valueOf(d10));
    }

    @Override // com.facebook.react.bridge.WritableMap
    public void putInt(@NotNull String key, int i10) {
        Intrinsics.checkNotNullParameter(key, "key");
        this.backingMap.put(key, Double.valueOf(i10));
    }

    @Override // com.facebook.react.bridge.WritableMap
    public void putLong(@NotNull String key, long j10) {
        Intrinsics.checkNotNullParameter(key, "key");
        this.backingMap.put(key, Double.valueOf(j10));
    }

    @Override // com.facebook.react.bridge.WritableMap
    public void putMap(@NotNull String key, ReadableMap readableMap) {
        Intrinsics.checkNotNullParameter(key, "key");
        this.backingMap.put(key, readableMap);
    }

    @Override // com.facebook.react.bridge.WritableMap
    public void putNull(@NotNull String key) {
        Intrinsics.checkNotNullParameter(key, "key");
        this.backingMap.put(key, null);
    }

    @Override // com.facebook.react.bridge.WritableMap
    public void putString(@NotNull String key, String str) {
        Intrinsics.checkNotNullParameter(key, "key");
        this.backingMap.put(key, str);
    }

    public final void remove(@NotNull String key) {
        Intrinsics.checkNotNullParameter(key, "key");
        this.backingMap.remove(key);
    }

    @Override // com.facebook.react.bridge.ReadableMap
    @NotNull
    public HashMap<String, Object> toHashMap() {
        return new HashMap<>(this.backingMap);
    }

    @NotNull
    public String toString() {
        return this.backingMap.toString();
    }

    public JavaOnlyMap() {
        this.backingMap = new HashMap();
    }

    private JavaOnlyMap(Object... objArr) {
        this();
        if (objArr.length % 2 == 0) {
            int i10 = 0;
            int c10 = tr.c.c(0, objArr.length - 1, 2);
            if (c10 < 0) {
                return;
            }
            while (true) {
                Object obj = objArr[i10 + 1];
                obj = obj instanceof Number ? Double.valueOf(((Number) obj).doubleValue()) : obj;
                Map<String, Object> map = this.backingMap;
                Object obj2 = objArr[i10];
                Intrinsics.checkNotNull(obj2, "null cannot be cast to non-null type kotlin.String");
                map.put((String) obj2, obj);
                if (i10 == c10) {
                    return;
                }
                i10 += 2;
            }
        } else {
            throw new IllegalArgumentException("You must provide the same number of keys and values");
        }
    }
}
