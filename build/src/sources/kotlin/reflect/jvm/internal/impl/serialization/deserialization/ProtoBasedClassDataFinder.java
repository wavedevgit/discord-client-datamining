package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import java.util.Collection;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.descriptors.SourceElement;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.BinaryVersion;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.NameResolver;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nProtoBasedClassDataFinder.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ProtoBasedClassDataFinder.kt\norg/jetbrains/kotlin/serialization/deserialization/ProtoBasedClassDataFinder\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,43:1\n1208#2,2:44\n1236#2,4:46\n*S KotlinDebug\n*F\n+ 1 ProtoBasedClassDataFinder.kt\norg/jetbrains/kotlin/serialization/deserialization/ProtoBasedClassDataFinder\n*L\n32#1:44,2\n32#1:46,4\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class ProtoBasedClassDataFinder implements ClassDataFinder {

    /* renamed from: a  reason: collision with root package name */
    private final NameResolver f35630a;

    /* renamed from: b  reason: collision with root package name */
    private final BinaryVersion f35631b;

    /* renamed from: c  reason: collision with root package name */
    private final Function1 f35632c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f35633d;

    public ProtoBasedClassDataFinder(@NotNull ProtoBuf.PackageFragment proto, @NotNull NameResolver nameResolver, @NotNull BinaryVersion metadataVersion, @NotNull Function1<? super ClassId, ? extends SourceElement> classSource) {
        Intrinsics.checkNotNullParameter(proto, "proto");
        Intrinsics.checkNotNullParameter(nameResolver, "nameResolver");
        Intrinsics.checkNotNullParameter(metadataVersion, "metadataVersion");
        Intrinsics.checkNotNullParameter(classSource, "classSource");
        this.f35630a = nameResolver;
        this.f35631b = metadataVersion;
        this.f35632c = classSource;
        List<ProtoBuf.Class> class_List = proto.getClass_List();
        Intrinsics.checkNotNullExpressionValue(class_List, "getClass_List(...)");
        List<ProtoBuf.Class> list = class_List;
        LinkedHashMap linkedHashMap = new LinkedHashMap(kotlin.ranges.d.d(o0.e(CollectionsKt.w(list, 10)), 16));
        for (Object obj : list) {
            linkedHashMap.put(NameResolverUtilKt.getClassId(this.f35630a, ((ProtoBuf.Class) obj).getFqName()), obj);
        }
        this.f35633d = linkedHashMap;
    }

    @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.ClassDataFinder
    public ClassData findClassData(@NotNull ClassId classId) {
        Intrinsics.checkNotNullParameter(classId, "classId");
        ProtoBuf.Class r02 = (ProtoBuf.Class) this.f35633d.get(classId);
        if (r02 == null) {
            return null;
        }
        return new ClassData(this.f35630a, r02, this.f35631b, (SourceElement) this.f35632c.invoke(classId));
    }

    @NotNull
    public final Collection<ClassId> getAllClassIds() {
        return this.f35633d.keySet();
    }
}
