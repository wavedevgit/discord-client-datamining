package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import ir.v;
import java.util.ArrayList;
import java.util.List;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.descriptors.InlineClassRepresentation;
import kotlin.reflect.jvm.internal.impl.descriptors.MultiFieldValueClassRepresentation;
import kotlin.reflect.jvm.internal.impl.descriptors.ValueClassRepresentation;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.NameResolver;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.ProtoTypeTableUtilKt;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.TypeTable;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.types.model.RigidTypeMarker;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nValueClassUtil.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ValueClassUtil.kt\norg/jetbrains/kotlin/serialization/deserialization/ValueClassUtilKt\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,55:1\n1563#2:56\n1634#2,3:57\n1563#2:60\n1634#2,3:61\n1563#2:64\n1634#2,3:65\n*S KotlinDebug\n*F\n+ 1 ValueClassUtil.kt\norg/jetbrains/kotlin/serialization/deserialization/ValueClassUtilKt\n*L\n26#1:56\n26#1:57,3\n44#1:60\n44#1:61,3\n48#1:64\n48#1:65,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class ValueClassUtilKt {
    @NotNull
    public static final Pair<List<Name>, List<ProtoBuf.Type>> loadMultiFieldValueClassRepresentation(@NotNull ProtoBuf.Class r52, @NotNull NameResolver nameResolver, @NotNull TypeTable typeTable) {
        List<ProtoBuf.Type> multiFieldValueClassUnderlyingTypeList;
        Intrinsics.checkNotNullParameter(r52, "<this>");
        Intrinsics.checkNotNullParameter(nameResolver, "nameResolver");
        Intrinsics.checkNotNullParameter(typeTable, "typeTable");
        List<Integer> multiFieldValueClassUnderlyingNameList = r52.getMultiFieldValueClassUnderlyingNameList();
        Intrinsics.checkNotNullExpressionValue(multiFieldValueClassUnderlyingNameList, "getMultiFieldValueClassUnderlyingNameList(...)");
        List<Integer> list = multiFieldValueClassUnderlyingNameList;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (Integer num : list) {
            Intrinsics.checkNotNull(num);
            arrayList.add(NameResolverUtilKt.getName(nameResolver, num.intValue()));
        }
        Pair a10 = v.a(Integer.valueOf(r52.getMultiFieldValueClassUnderlyingTypeIdCount()), Integer.valueOf(r52.getMultiFieldValueClassUnderlyingTypeCount()));
        if (Intrinsics.areEqual(a10, v.a(Integer.valueOf(arrayList.size()), 0))) {
            List<Integer> multiFieldValueClassUnderlyingTypeIdList = r52.getMultiFieldValueClassUnderlyingTypeIdList();
            Intrinsics.checkNotNullExpressionValue(multiFieldValueClassUnderlyingTypeIdList, "getMultiFieldValueClassUnderlyingTypeIdList(...)");
            List<Integer> list2 = multiFieldValueClassUnderlyingTypeIdList;
            multiFieldValueClassUnderlyingTypeList = new ArrayList<>(CollectionsKt.w(list2, 10));
            for (Integer num2 : list2) {
                Intrinsics.checkNotNull(num2);
                multiFieldValueClassUnderlyingTypeList.add(typeTable.get(num2.intValue()));
            }
        } else if (Intrinsics.areEqual(a10, v.a(0, Integer.valueOf(arrayList.size())))) {
            multiFieldValueClassUnderlyingTypeList = r52.getMultiFieldValueClassUnderlyingTypeList();
        } else {
            throw new IllegalStateException(("class " + NameResolverUtilKt.getName(nameResolver, r52.getFqName()) + " has illegal multi-field value class representation").toString());
        }
        return v.a(arrayList, multiFieldValueClassUnderlyingTypeList);
    }

    public static final <T extends RigidTypeMarker> ValueClassRepresentation<T> loadValueClassRepresentation(@NotNull ProtoBuf.Class r12, @NotNull NameResolver nameResolver, @NotNull TypeTable typeTable, @NotNull Function1<? super ProtoBuf.Type, ? extends T> typeDeserializer, @NotNull Function1<? super Name, ? extends T> typeOfPublicProperty) {
        RigidTypeMarker rigidTypeMarker;
        Intrinsics.checkNotNullParameter(r12, "<this>");
        Intrinsics.checkNotNullParameter(nameResolver, "nameResolver");
        Intrinsics.checkNotNullParameter(typeTable, "typeTable");
        Intrinsics.checkNotNullParameter(typeDeserializer, "typeDeserializer");
        Intrinsics.checkNotNullParameter(typeOfPublicProperty, "typeOfPublicProperty");
        if (r12.getMultiFieldValueClassUnderlyingNameCount() > 0) {
            Pair<List<Name>, List<ProtoBuf.Type>> loadMultiFieldValueClassRepresentation = loadMultiFieldValueClassRepresentation(r12, nameResolver, typeTable);
            List list = (List) loadMultiFieldValueClassRepresentation.a();
            List<Object> list2 = (List) loadMultiFieldValueClassRepresentation.b();
            ArrayList arrayList = new ArrayList(CollectionsKt.w(list2, 10));
            for (Object obj : list2) {
                arrayList.add(typeDeserializer.invoke(obj));
            }
            return new MultiFieldValueClassRepresentation(CollectionsKt.p1(list, arrayList));
        } else if (r12.hasInlineClassUnderlyingPropertyName()) {
            Name name = NameResolverUtilKt.getName(nameResolver, r12.getInlineClassUnderlyingPropertyName());
            ProtoBuf.Type inlineClassUnderlyingType = ProtoTypeTableUtilKt.inlineClassUnderlyingType(r12, typeTable);
            if ((inlineClassUnderlyingType != null && (rigidTypeMarker = (RigidTypeMarker) typeDeserializer.invoke(inlineClassUnderlyingType)) != null) || (rigidTypeMarker = (RigidTypeMarker) typeOfPublicProperty.invoke(name)) != null) {
                return new InlineClassRepresentation(name, rigidTypeMarker);
            }
            throw new IllegalStateException(("cannot determine underlying type for value class " + NameResolverUtilKt.getName(nameResolver, r12.getFqName()) + " with property " + name).toString());
        } else {
            return null;
        }
    }
}
