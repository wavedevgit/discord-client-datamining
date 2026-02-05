package com.discord.react.utilities;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableNativeArray;
import com.facebook.react.bridge.ReadableType;
import com.facebook.react.bridge.WritableNativeArray;
import com.facebook.react.uimanager.ViewProps;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.collections.m0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.ranges.IntRange;
import or.p;
import org.jetbrains.annotations.NotNull;
import org.json.JSONArray;
@Metadata(d1 = {"\u0000|\n\u0002\u0010\u0011\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u001e\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0015\n\u0002\b\u0002\n\u0002\u0010$\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\u0010 \n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u001f\n\u0002\b\u000b\n\u0002\u0010\u0006\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\u001a%\u0010\u0004\u001a\u00020\u00032\u0016\u0010\u0002\u001a\f\u0012\b\b\u0001\u0012\u0004\u0018\u00010\u00010\u0000\"\u0004\u0018\u00010\u0001¢\u0006\u0004\b\u0004\u0010\u0005\u001a5\u0010\n\u001a\u00020\u0003\"\u0004\b\u0000\u0010\u0006*\b\u0012\u0004\u0012\u00028\u00000\u00072\u0016\b\u0002\u0010\t\u001a\u0010\u0012\u0004\u0012\u00028\u0000\u0012\u0004\u0012\u00020\u0001\u0018\u00010\b¢\u0006\u0004\b\n\u0010\u000b\u001a\u001d\u0010\n\u001a\u00020\u0003\"\u0004\b\u0000\u0010\u0006*\b\u0012\u0004\u0012\u00028\u00000\u0000¢\u0006\u0004\b\n\u0010\u0005\u001a\u0011\u0010\n\u001a\u00020\u0003*\u00020\f¢\u0006\u0004\b\n\u0010\r\u001a)\u0010\u0011\u001a\u00020\u0003\"\u0004\b\u0000\u0010\u000e*\u0014\u0012\u0010\u0012\u000e\u0012\u0004\u0012\u00020\u0010\u0012\u0004\u0012\u00028\u00000\u000f0\u0007¢\u0006\u0004\b\u0011\u0010\u0012\u001a\u001f\u0010\u0016\u001a\u00020\u0015\"\u0004\b\u0000\u0010\u000e*\u00020\u00132\u0006\u0010\u0014\u001a\u00028\u0000¢\u0006\u0004\b\u0016\u0010\u0017\u001a\u0011\u0010\u001a\u001a\u00020\u0019*\u00020\u0018¢\u0006\u0004\b\u001a\u0010\u001b\u001a7\u0010\u001e\u001a\b\u0012\u0004\u0012\u00028\u00000\u001d\"\u0004\b\u0000\u0010\u0006*\u00020\u00182\u0012\u0010\t\u001a\u000e\u0012\u0004\u0012\u00020\u001c\u0012\u0004\u0012\u00028\u00000\bH\u0086\bø\u0001\u0000¢\u0006\u0004\b\u001e\u0010\u001f\u001a=\u0010\u001e\u001a\b\u0012\u0004\u0012\u00028\u00000\u001d\"\u0004\b\u0000\u0010\u0006*\u00020\u00182\u0018\u0010\t\u001a\u0014\u0012\u0004\u0012\u00020\u001c\u0012\u0004\u0012\u00020\u0018\u0012\u0004\u0012\u00028\u00000 H\u0086\bø\u0001\u0000¢\u0006\u0004\b\u001e\u0010!\u001aK\u0010%\u001a\u00028\u0001\"\u0004\b\u0000\u0010\u0006\"\u0010\b\u0001\u0010#*\n\u0012\u0006\b\u0000\u0012\u00028\u00000\"*\u00020\u00182\u0006\u0010$\u001a\u00028\u00012\u0012\u0010\t\u001a\u000e\u0012\u0004\u0012\u00020\u001c\u0012\u0004\u0012\u00028\u00000\bH\u0086\bø\u0001\u0000¢\u0006\u0004\b%\u0010&\u001aQ\u0010%\u001a\u00028\u0001\"\u0004\b\u0000\u0010\u0006\"\u0010\b\u0001\u0010#*\n\u0012\u0006\b\u0000\u0012\u00028\u00000\"*\u00020\u00182\u0006\u0010$\u001a\u00028\u00012\u0018\u0010\t\u001a\u0014\u0012\u0004\u0012\u00020\u001c\u0012\u0004\u0012\u00020\u0018\u0012\u0004\u0012\u00028\u00000 H\u0086\bø\u0001\u0000¢\u0006\u0004\b%\u0010'\u001a+\u0010)\u001a\u00020\u0015*\u00020\u00182\u0012\u0010(\u001a\u000e\u0012\u0004\u0012\u00020\u001c\u0012\u0004\u0012\u00020\u00150\bH\u0086\bø\u0001\u0000¢\u0006\u0004\b)\u0010*\u001a1\u0010)\u001a\u00020\u0015*\u00020\u00182\u0018\u0010(\u001a\u0014\u0012\u0004\u0012\u00020\u001c\u0012\u0004\u0012\u00020\u0018\u0012\u0004\u0012\u00020\u00150 H\u0086\bø\u0001\u0000¢\u0006\u0004\b)\u0010+\u001a\u0017\u0010,\u001a\b\u0012\u0004\u0012\u00020\u001c0\u001d*\u00020\u0018¢\u0006\u0004\b,\u0010-\u001a\u0017\u0010/\u001a\b\u0012\u0004\u0012\u00020.0\u001d*\u00020\u0018¢\u0006\u0004\b/\u0010-\u001a\u0017\u00101\u001a\b\u0012\u0004\u0012\u0002000\u001d*\u00020\u0018¢\u0006\u0004\b1\u0010-\u001a\u0017\u00102\u001a\b\u0012\u0004\u0012\u00020\u00100\u001d*\u00020\u0018¢\u0006\u0004\b2\u0010-\u001a\u0011\u00104\u001a\u000203*\u00020\u0018¢\u0006\u0004\b4\u00105\u001a\u0011\u00106\u001a\u00020\u0010*\u00020\u0018¢\u0006\u0004\b6\u00107\u0082\u0002\u0007\n\u0005\b\u009920\u0001¨\u00068"}, d2 = {"", "", "elements", "Lcom/facebook/react/bridge/ReadableNativeArray;", "nativeArrayOf", "([Ljava/lang/Object;)Lcom/facebook/react/bridge/ReadableNativeArray;", "T", "", "Lkotlin/Function1;", ViewProps.TRANSFORM, "toNativeArray", "(Ljava/util/Collection;Lkotlin/jvm/functions/Function1;)Lcom/facebook/react/bridge/ReadableNativeArray;", "", "([I)Lcom/facebook/react/bridge/ReadableNativeArray;", "V", "", "", "toNativeArrayOfMaps", "(Ljava/util/Collection;)Lcom/facebook/react/bridge/ReadableNativeArray;", "Lcom/facebook/react/bridge/WritableNativeArray;", "value", "", "push", "(Lcom/facebook/react/bridge/WritableNativeArray;Ljava/lang/Object;)V", "Lcom/facebook/react/bridge/ReadableArray;", "Lkotlin/ranges/IntRange;", "sizeRange", "(Lcom/facebook/react/bridge/ReadableArray;)Lkotlin/ranges/IntRange;", "", "", "map", "(Lcom/facebook/react/bridge/ReadableArray;Lkotlin/jvm/functions/Function1;)Ljava/util/List;", "Lkotlin/Function2;", "(Lcom/facebook/react/bridge/ReadableArray;Lkotlin/jvm/functions/Function2;)Ljava/util/List;", "", "C", "destination", "mapTo", "(Lcom/facebook/react/bridge/ReadableArray;Ljava/util/Collection;Lkotlin/jvm/functions/Function1;)Ljava/util/Collection;", "(Lcom/facebook/react/bridge/ReadableArray;Ljava/util/Collection;Lkotlin/jvm/functions/Function2;)Ljava/util/Collection;", "action", "forEach", "(Lcom/facebook/react/bridge/ReadableArray;Lkotlin/jvm/functions/Function1;)V", "(Lcom/facebook/react/bridge/ReadableArray;Lkotlin/jvm/functions/Function2;)V", "toIntList", "(Lcom/facebook/react/bridge/ReadableArray;)Ljava/util/List;", "", "toDoubleList", "", "toBooleanList", "toStringList", "Lorg/json/JSONArray;", "toJson", "(Lcom/facebook/react/bridge/ReadableArray;)Lorg/json/JSONArray;", "toJsonString", "(Lcom/facebook/react/bridge/ReadableArray;)Ljava/lang/String;", "react_utilities_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nNativeArrayExtensions.kt\nKotlin\n*S Kotlin\n*F\n+ 1 NativeArrayExtensions.kt\ncom/discord/react/utilities/NativeArrayExtensionsKt\n+ 2 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,128:1\n75#1:145\n97#1:158\n75#1:161\n75#1:166\n75#1:171\n75#1:176\n13472#2,2:129\n13472#2,2:133\n13493#2,2:135\n1869#3,2:131\n1563#3:137\n1634#3,3:138\n1563#3:141\n1634#3,3:142\n1563#3:146\n1634#3,3:147\n1634#3,3:150\n1634#3,3:153\n1869#3,2:156\n1869#3,2:159\n1563#3:162\n1634#3,3:163\n1563#3:167\n1634#3,3:168\n1563#3:172\n1634#3,3:173\n1563#3:177\n1634#3,3:178\n*S KotlinDebug\n*F\n+ 1 NativeArrayExtensions.kt\ncom/discord/react/utilities/NativeArrayExtensionsKt\n*L\n78#1:145\n100#1:158\n104#1:161\n106#1:166\n108#1:171\n110#1:176\n19#1:129,2\n34#1:133,2\n39#1:135,2\n27#1:131,2\n46#1:137\n46#1:138,3\n75#1:141\n75#1:142,3\n78#1:146\n78#1:147,3\n86#1:150,3\n92#1:153,3\n97#1:156,2\n100#1:159,2\n104#1:162\n104#1:163,3\n106#1:167\n106#1:168,3\n108#1:172\n108#1:173,3\n110#1:177\n110#1:178,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class NativeArrayExtensionsKt {

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

    public static final void forEach(@NotNull ReadableArray readableArray, @NotNull Function1<? super Integer, Unit> action) {
        Intrinsics.checkNotNullParameter(readableArray, "<this>");
        Intrinsics.checkNotNullParameter(action, "action");
        for (Object obj : sizeRange(readableArray)) {
            action.invoke(obj);
        }
    }

    @NotNull
    public static final <T> List<T> map(@NotNull ReadableArray readableArray, @NotNull Function1<? super Integer, ? extends T> transform) {
        Intrinsics.checkNotNullParameter(readableArray, "<this>");
        Intrinsics.checkNotNullParameter(transform, "transform");
        IntRange<T> sizeRange = sizeRange(readableArray);
        ArrayList arrayList = new ArrayList(CollectionsKt.w(sizeRange, 10));
        for (T t10 : sizeRange) {
            arrayList.add(transform.invoke(t10));
        }
        return arrayList;
    }

    @NotNull
    public static final <T, C extends Collection<? super T>> C mapTo(@NotNull ReadableArray readableArray, @NotNull C destination, @NotNull Function1<? super Integer, ? extends T> transform) {
        Intrinsics.checkNotNullParameter(readableArray, "<this>");
        Intrinsics.checkNotNullParameter(destination, "destination");
        Intrinsics.checkNotNullParameter(transform, "transform");
        for (T t10 : sizeRange(readableArray)) {
            destination.add(transform.invoke(t10));
        }
        return destination;
    }

    @NotNull
    public static final ReadableNativeArray nativeArrayOf(@NotNull Object... elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        WritableNativeArray writableNativeArray = new WritableNativeArray();
        for (Object obj : elements) {
            push(writableNativeArray, obj);
        }
        return writableNativeArray;
    }

    public static final <V> void push(@NotNull WritableNativeArray writableNativeArray, V v10) {
        Intrinsics.checkNotNullParameter(writableNativeArray, "<this>");
        if (v10 instanceof String) {
            writableNativeArray.pushString((String) v10);
        } else if (v10 instanceof Integer) {
            writableNativeArray.pushInt(((Number) v10).intValue());
        } else if (v10 instanceof Double) {
            writableNativeArray.pushDouble(((Number) v10).doubleValue());
        } else if (v10 instanceof Boolean) {
            writableNativeArray.pushBoolean(((Boolean) v10).booleanValue());
        } else if (v10 instanceof ReadableArray) {
            writableNativeArray.pushArray((ReadableArray) v10);
        } else if (v10 instanceof ReadableMap) {
            writableNativeArray.pushMap((ReadableMap) v10);
        } else if (v10 instanceof Long) {
            writableNativeArray.pushDouble(((Number) v10).longValue());
        } else if (v10 == null) {
            writableNativeArray.pushNull();
        } else {
            throw new IllegalArgumentException("Failed requirement.");
        }
    }

    @NotNull
    public static final IntRange sizeRange(@NotNull ReadableArray readableArray) {
        Intrinsics.checkNotNullParameter(readableArray, "<this>");
        return kotlin.ranges.d.u(0, readableArray.size());
    }

    @NotNull
    public static final List<Boolean> toBooleanList(@NotNull ReadableArray readableArray) {
        Intrinsics.checkNotNullParameter(readableArray, "<this>");
        IntRange sizeRange = sizeRange(readableArray);
        ArrayList arrayList = new ArrayList(CollectionsKt.w(sizeRange, 10));
        Iterator it = sizeRange.iterator();
        while (it.hasNext()) {
            arrayList.add(Boolean.valueOf(readableArray.getBoolean(((m0) it).nextInt())));
        }
        return arrayList;
    }

    @NotNull
    public static final List<Double> toDoubleList(@NotNull ReadableArray readableArray) {
        Intrinsics.checkNotNullParameter(readableArray, "<this>");
        IntRange sizeRange = sizeRange(readableArray);
        ArrayList arrayList = new ArrayList(CollectionsKt.w(sizeRange, 10));
        Iterator it = sizeRange.iterator();
        while (it.hasNext()) {
            arrayList.add(Double.valueOf(readableArray.getDouble(((m0) it).nextInt())));
        }
        return arrayList;
    }

    @NotNull
    public static final List<Integer> toIntList(@NotNull ReadableArray readableArray) {
        Intrinsics.checkNotNullParameter(readableArray, "<this>");
        IntRange sizeRange = sizeRange(readableArray);
        ArrayList arrayList = new ArrayList(CollectionsKt.w(sizeRange, 10));
        Iterator it = sizeRange.iterator();
        while (it.hasNext()) {
            arrayList.add(Integer.valueOf(readableArray.getInt(((m0) it).nextInt())));
        }
        return arrayList;
    }

    @NotNull
    public static final JSONArray toJson(@NotNull ReadableArray readableArray) {
        Intrinsics.checkNotNullParameter(readableArray, "<this>");
        JSONArray jSONArray = new JSONArray();
        int size = readableArray.size();
        for (int i10 = 0; i10 < size; i10++) {
            switch (WhenMappings.$EnumSwitchMapping$0[readableArray.getType(i10).ordinal()]) {
                case 1:
                    Unit unit = Unit.f31988a;
                    break;
                case 2:
                    jSONArray.put(readableArray.getBoolean(i10));
                    break;
                case 3:
                    jSONArray.put(readableArray.getDouble(i10));
                    break;
                case 4:
                    jSONArray.put(readableArray.getString(i10));
                    break;
                case 5:
                    ReadableMap map = readableArray.getMap(i10);
                    Intrinsics.checkNotNull(map);
                    jSONArray.put(NativeMapExtensionsKt.toJson(map));
                    break;
                case 6:
                    ReadableArray array = readableArray.getArray(i10);
                    Intrinsics.checkNotNull(array);
                    jSONArray.put(toJson(array));
                    break;
                default:
                    throw new p();
            }
        }
        return jSONArray;
    }

    @NotNull
    public static final String toJsonString(@NotNull ReadableArray readableArray) {
        Intrinsics.checkNotNullParameter(readableArray, "<this>");
        String jSONArray = toJson(readableArray).toString();
        Intrinsics.checkNotNullExpressionValue(jSONArray, "toString(...)");
        return jSONArray;
    }

    @NotNull
    public static final <T> ReadableNativeArray toNativeArray(@NotNull Collection<? extends T> collection, Function1<? super T, ? extends Object> function1) {
        Object invoke;
        Intrinsics.checkNotNullParameter(collection, "<this>");
        WritableNativeArray writableNativeArray = new WritableNativeArray();
        for (Object obj : collection) {
            if (function1 != null && (invoke = function1.invoke(obj)) != null) {
                obj = invoke;
            }
            push(writableNativeArray, obj);
        }
        return writableNativeArray;
    }

    public static /* synthetic */ ReadableNativeArray toNativeArray$default(Collection collection, Function1 function1, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            function1 = null;
        }
        return toNativeArray(collection, function1);
    }

    @NotNull
    public static final <V> ReadableNativeArray toNativeArrayOfMaps(@NotNull Collection<? extends Map<String, ? extends V>> collection) {
        Intrinsics.checkNotNullParameter(collection, "<this>");
        Collection<? extends Map<String, ? extends V>> collection2 = collection;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(collection2, 10));
        Iterator<T> it = collection2.iterator();
        while (it.hasNext()) {
            arrayList.add(NativeMapExtensionsKt.toNativeMap((Map) it.next()));
        }
        return toNativeArray$default(arrayList, null, 1, null);
    }

    @NotNull
    public static final List<String> toStringList(@NotNull ReadableArray readableArray) {
        Intrinsics.checkNotNullParameter(readableArray, "<this>");
        IntRange sizeRange = sizeRange(readableArray);
        ArrayList arrayList = new ArrayList(CollectionsKt.w(sizeRange, 10));
        Iterator it = sizeRange.iterator();
        while (it.hasNext()) {
            String string = readableArray.getString(((m0) it).nextInt());
            Intrinsics.checkNotNull(string);
            arrayList.add(string);
        }
        return arrayList;
    }

    public static final void forEach(@NotNull ReadableArray readableArray, @NotNull Function2<? super Integer, ? super ReadableArray, Unit> action) {
        Intrinsics.checkNotNullParameter(readableArray, "<this>");
        Intrinsics.checkNotNullParameter(action, "action");
        Iterator it = sizeRange(readableArray).iterator();
        while (it.hasNext()) {
            action.invoke(Integer.valueOf(((m0) it).nextInt()), readableArray);
        }
    }

    @NotNull
    public static final <T, C extends Collection<? super T>> C mapTo(@NotNull ReadableArray readableArray, @NotNull C destination, @NotNull Function2<? super Integer, ? super ReadableArray, ? extends T> transform) {
        Intrinsics.checkNotNullParameter(readableArray, "<this>");
        Intrinsics.checkNotNullParameter(destination, "destination");
        Intrinsics.checkNotNullParameter(transform, "transform");
        Iterator<T> it = sizeRange(readableArray).iterator();
        while (it.hasNext()) {
            destination.add(transform.invoke(Integer.valueOf(((m0) it).nextInt()), readableArray));
        }
        return destination;
    }

    @NotNull
    public static final <T> List<T> map(@NotNull ReadableArray readableArray, @NotNull Function2<? super Integer, ? super ReadableArray, ? extends T> transform) {
        Intrinsics.checkNotNullParameter(readableArray, "<this>");
        Intrinsics.checkNotNullParameter(transform, "transform");
        IntRange sizeRange = sizeRange(readableArray);
        ArrayList arrayList = new ArrayList(CollectionsKt.w(sizeRange, 10));
        Iterator<T> it = sizeRange.iterator();
        while (it.hasNext()) {
            arrayList.add(transform.invoke(Integer.valueOf(((m0) it).nextInt()), readableArray));
        }
        return arrayList;
    }

    @NotNull
    public static final <T> ReadableNativeArray toNativeArray(@NotNull T[] tArr) {
        Intrinsics.checkNotNullParameter(tArr, "<this>");
        WritableNativeArray writableNativeArray = new WritableNativeArray();
        for (T t10 : tArr) {
            push(writableNativeArray, t10);
        }
        return writableNativeArray;
    }

    @NotNull
    public static final ReadableNativeArray toNativeArray(@NotNull int[] iArr) {
        Intrinsics.checkNotNullParameter(iArr, "<this>");
        WritableNativeArray writableNativeArray = new WritableNativeArray();
        for (int i10 : iArr) {
            push(writableNativeArray, Integer.valueOf(i10));
        }
        return writableNativeArray;
    }
}
