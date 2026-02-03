package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import java.util.Iterator;
import java.util.Set;
import kotlin.collections.x0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.builtins.StandardNames;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PackageFragmentDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PackageFragmentProviderKt;
import kotlin.reflect.jvm.internal.impl.descriptors.SourceElement;
import kotlin.reflect.jvm.internal.impl.descriptors.deserialization.ClassDescriptorFactory;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.BinaryVersion;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.NameResolver;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.TypeTable;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.VersionRequirementTable;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedClassDescriptor;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nClassDeserializer.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ClassDeserializer.kt\norg/jetbrains/kotlin/serialization/deserialization/ClassDeserializer\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,91:1\n1#2:92\n295#3,2:93\n*S KotlinDebug\n*F\n+ 1 ClassDeserializer.kt\norg/jetbrains/kotlin/serialization/deserialization/ClassDeserializer\n*L\n57#1:93,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class ClassDeserializer {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: c  reason: collision with root package name */
    private static final Set f35353c = x0.c(ClassId.Companion.topLevel(StandardNames.FqNames.cloneable.toSafe()));

    /* renamed from: a  reason: collision with root package name */
    private final DeserializationComponents f35354a;

    /* renamed from: b  reason: collision with root package name */
    private final Function1 f35355b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final Set<ClassId> getBLACK_LIST() {
            return ClassDeserializer.f35353c;
        }

        private Companion() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final ClassId f35356a;

        /* renamed from: b  reason: collision with root package name */
        private final ClassData f35357b;

        public a(ClassId classId, ClassData classData) {
            Intrinsics.checkNotNullParameter(classId, "classId");
            this.f35356a = classId;
            this.f35357b = classData;
        }

        public final ClassData a() {
            return this.f35357b;
        }

        public final ClassId b() {
            return this.f35356a;
        }

        public boolean equals(Object obj) {
            if ((obj instanceof a) && Intrinsics.areEqual(this.f35356a, ((a) obj).f35356a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f35356a.hashCode();
        }
    }

    public ClassDeserializer(@NotNull DeserializationComponents components) {
        Intrinsics.checkNotNullParameter(components, "components");
        this.f35354a = components;
        this.f35355b = components.getStorageManager().createMemoizedFunctionWithNullableValues(new b(this));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ClassDescriptor b(ClassDeserializer classDeserializer, a key) {
        Intrinsics.checkNotNullParameter(key, "key");
        return classDeserializer.c(key);
    }

    private final ClassDescriptor c(a aVar) {
        Object obj;
        DeserializationContext createContext;
        DeserializedClassDescriptor deserializedClassDescriptor;
        ClassId b10 = aVar.b();
        for (ClassDescriptorFactory classDescriptorFactory : this.f35354a.getFictitiousClassDescriptorFactories()) {
            ClassDescriptor createClass = classDescriptorFactory.createClass(b10);
            if (createClass != null) {
                return createClass;
            }
        }
        if (f35353c.contains(b10)) {
            return null;
        }
        ClassData a10 = aVar.a();
        if (a10 == null && (a10 = this.f35354a.getClassDataFinder().findClassData(b10)) == null) {
            return null;
        }
        NameResolver component1 = a10.component1();
        ProtoBuf.Class component2 = a10.component2();
        BinaryVersion component3 = a10.component3();
        SourceElement component4 = a10.component4();
        ClassId outerClassId = b10.getOuterClassId();
        if (outerClassId != null) {
            ClassDescriptor deserializeClass$default = deserializeClass$default(this, outerClassId, null, 2, null);
            if (deserializeClass$default instanceof DeserializedClassDescriptor) {
                deserializedClassDescriptor = (DeserializedClassDescriptor) deserializeClass$default;
            } else {
                deserializedClassDescriptor = null;
            }
            if (deserializedClassDescriptor == null || !deserializedClassDescriptor.hasNestedClass$deserialization(b10.getShortClassName())) {
                return null;
            }
            createContext = deserializedClassDescriptor.getC();
        } else {
            Iterator<T> it = PackageFragmentProviderKt.packageFragments(this.f35354a.getPackageFragmentProvider(), b10.getPackageFqName()).iterator();
            while (true) {
                if (it.hasNext()) {
                    obj = it.next();
                    PackageFragmentDescriptor packageFragmentDescriptor = (PackageFragmentDescriptor) obj;
                    if (packageFragmentDescriptor instanceof DeserializedPackageFragment) {
                        if (((DeserializedPackageFragment) packageFragmentDescriptor).hasTopLevelClass(b10.getShortClassName())) {
                            break;
                        }
                    } else {
                        break;
                    }
                } else {
                    obj = null;
                    break;
                }
            }
            PackageFragmentDescriptor packageFragmentDescriptor2 = (PackageFragmentDescriptor) obj;
            if (packageFragmentDescriptor2 == null) {
                return null;
            }
            DeserializationComponents deserializationComponents = this.f35354a;
            ProtoBuf.TypeTable typeTable = component2.getTypeTable();
            Intrinsics.checkNotNullExpressionValue(typeTable, "getTypeTable(...)");
            TypeTable typeTable2 = new TypeTable(typeTable);
            VersionRequirementTable.Companion companion = VersionRequirementTable.Companion;
            ProtoBuf.VersionRequirementTable versionRequirementTable = component2.getVersionRequirementTable();
            Intrinsics.checkNotNullExpressionValue(versionRequirementTable, "getVersionRequirementTable(...)");
            createContext = deserializationComponents.createContext(packageFragmentDescriptor2, component1, typeTable2, companion.create(versionRequirementTable), component3, null);
            component3 = component3;
        }
        return new DeserializedClassDescriptor(createContext, component2, component1, component3, component4);
    }

    public static /* synthetic */ ClassDescriptor deserializeClass$default(ClassDeserializer classDeserializer, ClassId classId, ClassData classData, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            classData = null;
        }
        return classDeserializer.deserializeClass(classId, classData);
    }

    public final ClassDescriptor deserializeClass(@NotNull ClassId classId, ClassData classData) {
        Intrinsics.checkNotNullParameter(classId, "classId");
        return (ClassDescriptor) this.f35355b.invoke(new a(classId, classData));
    }
}
