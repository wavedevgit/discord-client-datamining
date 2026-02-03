package kotlin.reflect.jvm.internal.impl.types;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.jvm.internal.markers.KMappedMarker;
import kotlin.reflect.jvm.internal.impl.util.ArrayMap;
import kotlin.reflect.jvm.internal.impl.util.AttributeArrayOwner;
import kotlin.reflect.jvm.internal.impl.util.TypeRegistry;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nTypeAttributes.kt\nKotlin\n*S Kotlin\n*F\n+ 1 TypeAttributes.kt\norg/jetbrains/kotlin/types/TypeAttributes\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,133:1\n105#1,9:134\n105#1,9:143\n105#1,9:152\n774#2:161\n865#2,2:162\n*S KotlinDebug\n*F\n+ 1 TypeAttributes.kt\norg/jetbrains/kotlin/types/TypeAttributes\n*L\n74#1:134,9\n78#1:143,9\n82#1:152,9\n99#1:161\n99#1:162,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class TypeAttributes extends AttributeArrayOwner<TypeAttribute<?>, TypeAttribute<?>> implements Iterable<TypeAttribute<?>>, KMappedMarker {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: e  reason: collision with root package name */
    private static final TypeAttributes f35059e = new TypeAttributes(CollectionsKt.l());

    @SourceDebugExtension({"SMAP\nTypeAttributes.kt\nKotlin\n*S Kotlin\n*F\n+ 1 TypeAttributes.kt\norg/jetbrains/kotlin/types/TypeAttributes$Companion\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,133:1\n1#2:134\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion extends TypeRegistry<TypeAttribute<?>, TypeAttribute<?>> {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final TypeAttributes create(@NotNull List<? extends TypeAttribute<?>> attributes) {
            Intrinsics.checkNotNullParameter(attributes, "attributes");
            if (attributes.isEmpty()) {
                return getEmpty();
            }
            return new TypeAttributes(attributes, null);
        }

        @Override // kotlin.reflect.jvm.internal.impl.util.TypeRegistry
        public int customComputeIfAbsent(@NotNull ConcurrentHashMap<String, Integer> concurrentHashMap, @NotNull String key, @NotNull Function1<? super String, Integer> compute) {
            int intValue;
            Intrinsics.checkNotNullParameter(concurrentHashMap, "<this>");
            Intrinsics.checkNotNullParameter(key, "key");
            Intrinsics.checkNotNullParameter(compute, "compute");
            Integer num = concurrentHashMap.get(key);
            if (num != null) {
                return num.intValue();
            }
            synchronized (concurrentHashMap) {
                try {
                    Integer num2 = concurrentHashMap.get(key);
                    if (num2 != null) {
                        intValue = num2.intValue();
                    } else {
                        Object invoke = compute.invoke(key);
                        concurrentHashMap.putIfAbsent(key, Integer.valueOf(((Number) invoke).intValue()));
                        intValue = ((Number) invoke).intValue();
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            return intValue;
        }

        @NotNull
        public final TypeAttributes getEmpty() {
            return TypeAttributes.f35059e;
        }

        private Companion() {
        }
    }

    public /* synthetic */ TypeAttributes(List list, DefaultConstructorMarker defaultConstructorMarker) {
        this(list);
    }

    @NotNull
    public final TypeAttributes add(@NotNull TypeAttributes other) {
        TypeAttribute add;
        Intrinsics.checkNotNullParameter(other, "other");
        if (isEmpty() && other.isEmpty()) {
            return this;
        }
        ArrayList arrayList = new ArrayList();
        for (Number number : Companion.c()) {
            int intValue = number.intValue();
            TypeAttribute typeAttribute = (TypeAttribute) b().get(intValue);
            TypeAttribute typeAttribute2 = (TypeAttribute) other.b().get(intValue);
            if (typeAttribute == null) {
                if (typeAttribute2 != null) {
                    add = typeAttribute2.add(typeAttribute);
                } else {
                    add = null;
                }
            } else {
                add = typeAttribute.add(typeAttribute2);
            }
            kotlin.reflect.jvm.internal.impl.utils.CollectionsKt.addIfNotNull(arrayList, add);
        }
        return Companion.create(arrayList);
    }

    @Override // kotlin.reflect.jvm.internal.impl.util.AbstractArrayMapOwner
    protected TypeRegistry c() {
        return Companion;
    }

    public final boolean contains(@NotNull TypeAttribute<?> attribute) {
        Intrinsics.checkNotNullParameter(attribute, "attribute");
        if (b().get(Companion.getId(attribute.getKey())) != null) {
            return true;
        }
        return false;
    }

    @NotNull
    public final TypeAttributes intersect(@NotNull TypeAttributes other) {
        TypeAttribute intersect;
        Intrinsics.checkNotNullParameter(other, "other");
        if (isEmpty() && other.isEmpty()) {
            return this;
        }
        ArrayList arrayList = new ArrayList();
        for (Number number : Companion.c()) {
            int intValue = number.intValue();
            TypeAttribute typeAttribute = (TypeAttribute) b().get(intValue);
            TypeAttribute typeAttribute2 = (TypeAttribute) other.b().get(intValue);
            if (typeAttribute == null) {
                if (typeAttribute2 != null) {
                    intersect = typeAttribute2.intersect(typeAttribute);
                } else {
                    intersect = null;
                }
            } else {
                intersect = typeAttribute.intersect(typeAttribute2);
            }
            kotlin.reflect.jvm.internal.impl.utils.CollectionsKt.addIfNotNull(arrayList, intersect);
        }
        return Companion.create(arrayList);
    }

    @NotNull
    public final TypeAttributes plus(@NotNull TypeAttribute<?> attribute) {
        Intrinsics.checkNotNullParameter(attribute, "attribute");
        if (contains(attribute)) {
            return this;
        }
        if (isEmpty()) {
            return new TypeAttributes(attribute);
        }
        return Companion.create(CollectionsKt.M0(CollectionsKt.h1(this), attribute));
    }

    @NotNull
    public final TypeAttributes remove(@NotNull TypeAttribute<?> attribute) {
        Intrinsics.checkNotNullParameter(attribute, "attribute");
        if (!isEmpty()) {
            ArrayMap b10 = b();
            ArrayList arrayList = new ArrayList();
            for (Object obj : b10) {
                if (!Intrinsics.areEqual((TypeAttribute) obj, attribute)) {
                    arrayList.add(obj);
                }
            }
            if (arrayList.size() != b().getSize()) {
                return Companion.create(arrayList);
            }
        }
        return this;
    }

    private TypeAttributes(List list) {
        Iterator it = list.iterator();
        while (it.hasNext()) {
            TypeAttribute typeAttribute = (TypeAttribute) it.next();
            e(typeAttribute.getKey(), typeAttribute);
        }
    }

    private TypeAttributes(TypeAttribute typeAttribute) {
        this(CollectionsKt.e(typeAttribute));
    }
}
