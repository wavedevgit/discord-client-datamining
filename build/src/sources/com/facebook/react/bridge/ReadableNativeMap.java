package com.facebook.react.bridge;

import android.annotation.SuppressLint;
import com.facebook.react.devsupport.StackTraceHelper;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000z\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0010\u000b\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\u0006\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\t\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010(\n\u0002\u0010&\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0006\b\u0017\u0018\u0000 A2\u00020\u00012\u00020\u0002:\u0001AB\t\b\u0004¢\u0006\u0004\b\u0003\u0010\u0004J\u0014\u0010\u0017\u001a\b\u0012\u0004\u0012\u00020\u00070\u0006H\u0082 ¢\u0006\u0002\u0010\tJ\u0014\u0010\u0018\u001a\b\u0012\u0004\u0012\u00020\u000e0\u0006H\u0082 ¢\u0006\u0002\u0010\u0019J\u0014\u0010\u001a\u001a\b\u0012\u0004\u0012\u00020\u000e0\u0006H\u0082 ¢\u0006\u0002\u0010\u0019J\u0010\u0010\u001b\u001a\u00020\u001c2\u0006\u0010\u001d\u001a\u00020\u0007H\u0016J\u0010\u0010\u001e\u001a\u00020\u001c2\u0006\u0010\u001d\u001a\u00020\u0007H\u0016J6\u0010\u001f\u001a\u0002H \"\u0006\b\u0000\u0010 \u0018\u00012\u0006\u0010\u001d\u001a\u00020\u00072\b\u0010!\u001a\u0004\u0018\u00010\u000e2\f\u0010\"\u001a\b\u0012\u0004\u0012\u0002H 0#H\u0083\b¢\u0006\u0002\u0010$J\u0010\u0010%\u001a\u00020\u000e2\u0006\u0010\u001d\u001a\u00020\u0007H\u0002J,\u0010%\u001a\u0002H \"\u0006\b\u0000\u0010 \u0018\u00012\u0006\u0010\u001d\u001a\u00020\u00072\f\u0010\"\u001a\b\u0012\u0004\u0012\u0002H 0#H\u0082\b¢\u0006\u0002\u0010&J\u0012\u0010'\u001a\u0004\u0018\u00010\u000e2\u0006\u0010\u001d\u001a\u00020\u0007H\u0002J.\u0010'\u001a\u0004\u0018\u0001H \"\u0006\b\u0000\u0010 \u0018\u00012\u0006\u0010\u001d\u001a\u00020\u00072\f\u0010\"\u001a\b\u0012\u0004\u0012\u0002H 0#H\u0082\b¢\u0006\u0002\u0010&J\u0010\u0010(\u001a\u00020\u001c2\u0006\u0010\u001d\u001a\u00020\u0007H\u0016J\u0010\u0010)\u001a\u00020*2\u0006\u0010\u001d\u001a\u00020\u0007H\u0016J\u0010\u0010+\u001a\u00020,2\u0006\u0010\u001d\u001a\u00020\u0007H\u0016J\u0010\u0010-\u001a\u00020.2\u0006\u0010\u001d\u001a\u00020\u0007H\u0016J\u0012\u0010/\u001a\u0004\u0018\u00010\u00072\u0006\u0010\u001d\u001a\u00020\u0007H\u0016J\u0012\u00100\u001a\u0004\u0018\u0001012\u0006\u0010\u001d\u001a\u00020\u0007H\u0016J\u0012\u00102\u001a\u0004\u0018\u00010\u00002\u0006\u0010\u001d\u001a\u00020\u0007H\u0016J\u0010\u00103\u001a\u00020\u00142\u0006\u0010\u001d\u001a\u00020\u0007H\u0016J\u0010\u00104\u001a\u0002052\u0006\u0010\u001d\u001a\u00020\u0007H\u0016J\b\u0010;\u001a\u00020<H\u0016J\b\u0010=\u001a\u00020,H\u0016J\u0013\u0010>\u001a\u00020\u001c2\b\u0010?\u001a\u0004\u0018\u00010\u000eH\u0096\u0002J(\u0010@\u001a\"\u0012\u0004\u0012\u00020\u0007\u0012\u0006\u0012\u0004\u0018\u00010\u000e0\rj\u0010\u0012\u0004\u0012\u00020\u0007\u0012\u0006\u0012\u0004\u0018\u00010\u000e`\u000fH\u0016R!\u0010\u0005\u001a\b\u0012\u0004\u0012\u00020\u00070\u00068BX\u0082\u0084\u0002¢\u0006\f\n\u0004\b\n\u0010\u000b\u001a\u0004\b\b\u0010\tR;\u0010\f\u001a\"\u0012\u0004\u0012\u00020\u0007\u0012\u0006\u0012\u0004\u0018\u00010\u000e0\rj\u0010\u0012\u0004\u0012\u00020\u0007\u0012\u0006\u0012\u0004\u0018\u00010\u000e`\u000f8BX\u0082\u0084\u0002¢\u0006\f\n\u0004\b\u0012\u0010\u000b\u001a\u0004\b\u0010\u0010\u0011R7\u0010\u0013\u001a\u001e\u0012\u0004\u0012\u00020\u0007\u0012\u0004\u0012\u00020\u00140\rj\u000e\u0012\u0004\u0012\u00020\u0007\u0012\u0004\u0012\u00020\u0014`\u000f8BX\u0082\u0084\u0002¢\u0006\f\n\u0004\b\u0016\u0010\u000b\u001a\u0004\b\u0015\u0010\u0011R&\u00106\u001a\u0014\u0012\u0010\u0012\u000e\u0012\u0004\u0012\u00020\u0007\u0012\u0004\u0012\u00020\u000e08078VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b9\u0010:¨\u0006B"}, d2 = {"Lcom/facebook/react/bridge/ReadableNativeMap;", "Lcom/facebook/react/bridge/NativeMap;", "Lcom/facebook/react/bridge/ReadableMap;", "<init>", "()V", "keys", "", "", "getKeys", "()[Ljava/lang/String;", "keys$delegate", "Lkotlin/Lazy;", "localMap", "Ljava/util/HashMap;", "", "Lkotlin/collections/HashMap;", "getLocalMap", "()Ljava/util/HashMap;", "localMap$delegate", "localTypeMap", "Lcom/facebook/react/bridge/ReadableType;", "getLocalTypeMap", "localTypeMap$delegate", "importKeys", "importValues", "()[Ljava/lang/Object;", "importTypes", "hasKey", "", StackTraceHelper.NAME_KEY, "isNull", "checkInstance", "T", "instance", "type", "Ljava/lang/Class;", "(Ljava/lang/String;Ljava/lang/Object;Ljava/lang/Class;)Ljava/lang/Object;", "getValue", "(Ljava/lang/String;Ljava/lang/Class;)Ljava/lang/Object;", "getNullableValue", "getBoolean", "getDouble", "", "getInt", "", "getLong", "", "getString", "getArray", "Lcom/facebook/react/bridge/ReadableArray;", "getMap", "getType", "getDynamic", "Lcom/facebook/react/bridge/Dynamic;", "entryIterator", "", "", "getEntryIterator", "()Ljava/util/Iterator;", "keySetIterator", "Lcom/facebook/react/bridge/ReadableMapKeySetIterator;", "hashCode", "equals", "other", "toHashMap", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nReadableNativeMap.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ReadableNativeMap.kt\ncom/facebook/react/bridge/ReadableNativeMap\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,186:1\n64#1,3:187\n64#1,3:190\n76#1:193\n64#1,3:194\n76#1:197\n64#1,3:198\n76#1:201\n64#1,3:202\n76#1:205\n64#1,3:206\n81#1,5:209\n64#1,3:214\n81#1,5:217\n64#1,3:222\n81#1,5:225\n64#1,3:230\n1#2:233\n*S KotlinDebug\n*F\n+ 1 ReadableNativeMap.kt\ncom/facebook/react/bridge/ReadableNativeMap\n*L\n76#1:187,3\n85#1:190,3\n89#1:193\n89#1:194,3\n91#1:197\n91#1:198,3\n94#1:201\n94#1:202,3\n96#1:205\n96#1:206,3\n98#1:209,5\n98#1:214,3\n101#1:217,5\n101#1:222,3\n104#1:225,5\n104#1:230,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class ReadableNativeMap extends NativeMap implements ReadableMap {
    @NotNull
    private static final Companion Companion = new Companion(null);
    private static int jniPassCounter;
    @NotNull
    private final Lazy keys$delegate;
    @NotNull
    private final Lazy localMap$delegate;
    @NotNull
    private final Lazy localTypeMap$delegate;

    @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0004\b\u0082\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R \u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0004\u001a\u00020\u00058G@BX\u0086\u000e¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\b¨\u0006\t"}, d2 = {"Lcom/facebook/react/bridge/ReadableNativeMap$Companion;", "", "<init>", "()V", "value", "", "jniPassCounter", "getJNIPassCounter", "()I", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final int getJNIPassCounter() {
            return ReadableNativeMap.jniPassCounter;
        }

        private Companion() {
        }
    }

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

    /* JADX INFO: Access modifiers changed from: protected */
    public ReadableNativeMap() {
        or.o oVar = or.o.f44231d;
        this.keys$delegate = or.l.b(oVar, new Function0() { // from class: com.facebook.react.bridge.v
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                String[] keys_delegate$lambda$1;
                keys_delegate$lambda$1 = ReadableNativeMap.keys_delegate$lambda$1(ReadableNativeMap.this);
                return keys_delegate$lambda$1;
            }
        });
        this.localMap$delegate = or.l.b(oVar, new Function0() { // from class: com.facebook.react.bridge.w
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                HashMap localMap_delegate$lambda$2;
                localMap_delegate$lambda$2 = ReadableNativeMap.localMap_delegate$lambda$2(ReadableNativeMap.this);
                return localMap_delegate$lambda$2;
            }
        });
        this.localTypeMap$delegate = or.l.b(oVar, new Function0() { // from class: com.facebook.react.bridge.x
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                HashMap localTypeMap_delegate$lambda$3;
                localTypeMap_delegate$lambda$3 = ReadableNativeMap.localTypeMap_delegate$lambda$3(ReadableNativeMap.this);
                return localTypeMap_delegate$lambda$3;
            }
        });
    }

    /* JADX WARN: Multi-variable type inference failed */
    @SuppressLint({"ReflectionMethodUse"})
    private final /* synthetic */ <T> T checkInstance(String str, Object obj, Class<T> cls) {
        String str2;
        Intrinsics.reifiedOperationMarker(2, "T");
        if (obj == 0) {
            if (obj != 0) {
                str2 = obj.getClass().getSimpleName();
            } else {
                str2 = "NULL";
            }
            String simpleName = cls.getSimpleName();
            throw new UnexpectedNativeTypeException("Value for " + str + " cannot be cast from " + str2 + " to " + simpleName);
        }
        return obj;
    }

    public static final int getJNIPassCounter() {
        return Companion.getJNIPassCounter();
    }

    private final String[] getKeys() {
        return (String[]) this.keys$delegate.getValue();
    }

    private final HashMap<String, Object> getLocalMap() {
        return (HashMap) this.localMap$delegate.getValue();
    }

    private final HashMap<String, ReadableType> getLocalTypeMap() {
        return (HashMap) this.localTypeMap$delegate.getValue();
    }

    private final Object getNullableValue(String str) {
        return getLocalMap().get(str);
    }

    private final Object getValue(String str) {
        if (hasKey(str)) {
            Object c10 = db.a.c(getLocalMap().get(str));
            Intrinsics.checkNotNullExpressionValue(c10, "assertNotNull(...)");
            return c10;
        }
        throw new NoSuchKeyException(str);
    }

    private final native String[] importKeys();

    private final native Object[] importTypes();

    private final native Object[] importValues();

    /* JADX INFO: Access modifiers changed from: private */
    public static final String[] keys_delegate$lambda$1(ReadableNativeMap readableNativeMap) {
        String[] importKeys = readableNativeMap.importKeys();
        jniPassCounter++;
        return importKeys;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final HashMap localMap_delegate$lambda$2(ReadableNativeMap readableNativeMap) {
        int length = readableNativeMap.getKeys().length;
        HashMap hashMap = new HashMap(length);
        Object[] importValues = readableNativeMap.importValues();
        jniPassCounter++;
        for (int i10 = 0; i10 < length; i10++) {
            hashMap.put(readableNativeMap.getKeys()[i10], importValues[i10]);
        }
        return hashMap;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final HashMap localTypeMap_delegate$lambda$3(ReadableNativeMap readableNativeMap) {
        int length = readableNativeMap.getKeys().length;
        HashMap hashMap = new HashMap(length);
        Object[] importTypes = readableNativeMap.importTypes();
        jniPassCounter++;
        for (int i10 = 0; i10 < length; i10++) {
            String str = readableNativeMap.getKeys()[i10];
            Object obj = importTypes[i10];
            Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type com.facebook.react.bridge.ReadableType");
            hashMap.put(str, (ReadableType) obj);
        }
        return hashMap;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof ReadableNativeMap)) {
            return false;
        }
        return Intrinsics.areEqual(getLocalMap(), ((ReadableNativeMap) obj).getLocalMap());
    }

    @Override // com.facebook.react.bridge.ReadableMap
    public ReadableArray getArray(@NotNull String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        Object nullableValue = getNullableValue(name);
        ReadableArray readableArray = null;
        if (nullableValue == null) {
            return null;
        }
        if (nullableValue instanceof ReadableArray) {
            readableArray = nullableValue;
        }
        ReadableArray readableArray2 = readableArray;
        if (readableArray2 != null) {
            return readableArray2;
        }
        String simpleName = nullableValue.getClass().getSimpleName();
        String simpleName2 = ReadableArray.class.getSimpleName();
        throw new UnexpectedNativeTypeException("Value for " + name + " cannot be cast from " + simpleName + " to " + simpleName2);
    }

    @Override // com.facebook.react.bridge.ReadableMap
    public boolean getBoolean(@NotNull String name) {
        Object obj;
        String str;
        Intrinsics.checkNotNullParameter(name, "name");
        Object value = getValue(name);
        if (!(value instanceof Boolean)) {
            obj = null;
        } else {
            obj = value;
        }
        Boolean bool = (Boolean) obj;
        if (bool == null) {
            if (value != null) {
                str = value.getClass().getSimpleName();
            } else {
                str = "NULL";
            }
            String simpleName = Boolean.TYPE.getSimpleName();
            throw new UnexpectedNativeTypeException("Value for " + name + " cannot be cast from " + str + " to " + simpleName);
        }
        return bool.booleanValue();
    }

    @Override // com.facebook.react.bridge.ReadableMap
    public double getDouble(@NotNull String name) {
        Object obj;
        String str;
        Intrinsics.checkNotNullParameter(name, "name");
        Object value = getValue(name);
        if (!(value instanceof Double)) {
            obj = null;
        } else {
            obj = value;
        }
        Double d10 = (Double) obj;
        if (d10 == null) {
            if (value != null) {
                str = value.getClass().getSimpleName();
            } else {
                str = "NULL";
            }
            String simpleName = Double.TYPE.getSimpleName();
            throw new UnexpectedNativeTypeException("Value for " + name + " cannot be cast from " + str + " to " + simpleName);
        }
        return d10.doubleValue();
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
        ReadableNativeMap$entryIterator$1$1 readableNativeMap$entryIterator$1$1;
        synchronized (this) {
            String[] keys = getKeys();
            Object[] importValues = importValues();
            jniPassCounter++;
            readableNativeMap$entryIterator$1$1 = new ReadableNativeMap$entryIterator$1$1(keys, importValues);
        }
        return readableNativeMap$entryIterator$1$1;
    }

    @Override // com.facebook.react.bridge.ReadableMap
    public int getInt(@NotNull String name) {
        Object obj;
        String str;
        Intrinsics.checkNotNullParameter(name, "name");
        Object value = getValue(name);
        if (!(value instanceof Double)) {
            obj = null;
        } else {
            obj = value;
        }
        Double d10 = (Double) obj;
        if (d10 == null) {
            if (value != null) {
                str = value.getClass().getSimpleName();
            } else {
                str = "NULL";
            }
            String simpleName = Double.TYPE.getSimpleName();
            throw new UnexpectedNativeTypeException("Value for " + name + " cannot be cast from " + str + " to " + simpleName);
        }
        return (int) d10.doubleValue();
    }

    @Override // com.facebook.react.bridge.ReadableMap
    public long getLong(@NotNull String name) {
        Object obj;
        String str;
        Intrinsics.checkNotNullParameter(name, "name");
        Object value = getValue(name);
        if (!(value instanceof Long)) {
            obj = null;
        } else {
            obj = value;
        }
        Long l10 = (Long) obj;
        if (l10 == null) {
            if (value != null) {
                str = value.getClass().getSimpleName();
            } else {
                str = "NULL";
            }
            String simpleName = Long.TYPE.getSimpleName();
            throw new UnexpectedNativeTypeException("Value for " + name + " cannot be cast from " + str + " to " + simpleName);
        }
        return l10.longValue();
    }

    @Override // com.facebook.react.bridge.ReadableMap
    public String getString(@NotNull String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        Object nullableValue = getNullableValue(name);
        String str = null;
        if (nullableValue == null) {
            return null;
        }
        if (nullableValue instanceof String) {
            str = nullableValue;
        }
        String str2 = str;
        if (str2 != null) {
            return str2;
        }
        String simpleName = nullableValue.getClass().getSimpleName();
        String simpleName2 = String.class.getSimpleName();
        throw new UnexpectedNativeTypeException("Value for " + name + " cannot be cast from " + simpleName + " to " + simpleName2);
    }

    @Override // com.facebook.react.bridge.ReadableMap
    @NotNull
    public ReadableType getType(@NotNull String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        ReadableType readableType = getLocalTypeMap().get(name);
        if (readableType != null) {
            return readableType;
        }
        throw new NoSuchKeyException(name);
    }

    @Override // com.facebook.react.bridge.ReadableMap
    public boolean hasKey(@NotNull String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        return getLocalMap().containsKey(name);
    }

    public int hashCode() {
        return getLocalMap().hashCode();
    }

    @Override // com.facebook.react.bridge.ReadableMap
    public boolean isNull(@NotNull String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        if (getLocalMap().containsKey(name)) {
            if (getLocalMap().get(name) == null) {
                return true;
            }
            return false;
        }
        throw new NoSuchKeyException(name);
    }

    @Override // com.facebook.react.bridge.ReadableMap
    @NotNull
    public ReadableMapKeySetIterator keySetIterator() {
        final String[] keys = getKeys();
        return new ReadableMapKeySetIterator() { // from class: com.facebook.react.bridge.ReadableNativeMap$keySetIterator$1
            private int currentIndex;

            public final int getCurrentIndex() {
                return this.currentIndex;
            }

            @Override // com.facebook.react.bridge.ReadableMapKeySetIterator
            public boolean hasNextKey() {
                if (this.currentIndex < keys.length) {
                    return true;
                }
                return false;
            }

            @Override // com.facebook.react.bridge.ReadableMapKeySetIterator
            public String nextKey() {
                String[] strArr = keys;
                int i10 = this.currentIndex;
                this.currentIndex = i10 + 1;
                return strArr[i10];
            }

            public final void setCurrentIndex(int i10) {
                this.currentIndex = i10;
            }
        };
    }

    @Override // com.facebook.react.bridge.ReadableMap
    @NotNull
    public HashMap<String, Object> toHashMap() {
        HashMap<String, Object> hashMap = new HashMap<>(getLocalMap());
        for (String str : hashMap.keySet()) {
            Intrinsics.checkNotNull(str, "null cannot be cast to non-null type kotlin.String");
            String str2 = str;
            switch (WhenMappings.$EnumSwitchMapping$0[getType(str2).ordinal()]) {
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                case 5:
                    hashMap.put(str2, ((ReadableNativeMap) db.a.c(getMap(str2))).toHashMap());
                    break;
                case 6:
                    hashMap.put(str2, ((ReadableArray) db.a.c(getArray(str2))).toArrayList());
                    break;
                default:
                    throw new or.p();
            }
        }
        return hashMap;
    }

    private final /* synthetic */ <T> T getNullableValue(String str, Class<T> cls) {
        T t10 = (T) getNullableValue(str);
        if (t10 == null) {
            return null;
        }
        Intrinsics.reifiedOperationMarker(2, "T");
        return t10;
    }

    @Override // com.facebook.react.bridge.ReadableMap
    public ReadableNativeMap getMap(@NotNull String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        Object nullableValue = getNullableValue(name);
        if (nullableValue == null) {
            return null;
        }
        ReadableNativeMap readableNativeMap = nullableValue instanceof ReadableNativeMap ? nullableValue : null;
        if (readableNativeMap != null) {
            return readableNativeMap;
        }
        String simpleName = nullableValue.getClass().getSimpleName();
        String simpleName2 = ReadableNativeMap.class.getSimpleName();
        throw new UnexpectedNativeTypeException("Value for " + name + " cannot be cast from " + simpleName + " to " + simpleName2);
    }

    private final /* synthetic */ <T> T getValue(String str, Class<T> cls) {
        T t10 = (T) getValue(str);
        Intrinsics.reifiedOperationMarker(2, "T");
        if (t10 == null) {
            String simpleName = t10 != null ? t10.getClass().getSimpleName() : "NULL";
            String simpleName2 = cls.getSimpleName();
            throw new UnexpectedNativeTypeException("Value for " + str + " cannot be cast from " + simpleName + " to " + simpleName2);
        }
        return t10;
    }
}
