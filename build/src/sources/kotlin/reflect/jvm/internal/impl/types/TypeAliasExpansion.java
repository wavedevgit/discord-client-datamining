package kotlin.reflect.jvm.internal.impl.types;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeAliasDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class TypeAliasExpansion {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: a  reason: collision with root package name */
    private final TypeAliasExpansion f34599a;

    /* renamed from: b  reason: collision with root package name */
    private final TypeAliasDescriptor f34600b;

    /* renamed from: c  reason: collision with root package name */
    private final List f34601c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f34602d;

    @SourceDebugExtension({"SMAP\nTypeAliasExpansion.kt\nKotlin\n*S Kotlin\n*F\n+ 1 TypeAliasExpansion.kt\norg/jetbrains/kotlin/types/TypeAliasExpansion$Companion\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,43:1\n1563#2:44\n1634#2,3:45\n*S KotlinDebug\n*F\n+ 1 TypeAliasExpansion.kt\norg/jetbrains/kotlin/types/TypeAliasExpansion$Companion\n*L\n34#1:44\n34#1:45,3\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final TypeAliasExpansion create(TypeAliasExpansion typeAliasExpansion, @NotNull TypeAliasDescriptor typeAliasDescriptor, @NotNull List<? extends TypeProjection> arguments) {
            Intrinsics.checkNotNullParameter(typeAliasDescriptor, "typeAliasDescriptor");
            Intrinsics.checkNotNullParameter(arguments, "arguments");
            List<TypeParameterDescriptor> parameters = typeAliasDescriptor.getTypeConstructor().getParameters();
            Intrinsics.checkNotNullExpressionValue(parameters, "getParameters(...)");
            List<TypeParameterDescriptor> list = parameters;
            ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
            for (TypeParameterDescriptor typeParameterDescriptor : list) {
                arrayList.add(typeParameterDescriptor.getOriginal());
            }
            return new TypeAliasExpansion(typeAliasExpansion, typeAliasDescriptor, arguments, o0.u(CollectionsKt.p1(arrayList, arguments)), null);
        }

        private Companion() {
        }
    }

    public /* synthetic */ TypeAliasExpansion(TypeAliasExpansion typeAliasExpansion, TypeAliasDescriptor typeAliasDescriptor, List list, Map map, DefaultConstructorMarker defaultConstructorMarker) {
        this(typeAliasExpansion, typeAliasDescriptor, list, map);
    }

    @NotNull
    public final List<TypeProjection> getArguments() {
        return this.f34601c;
    }

    @NotNull
    public final TypeAliasDescriptor getDescriptor() {
        return this.f34600b;
    }

    public final TypeProjection getReplacement(@NotNull TypeConstructor constructor) {
        Intrinsics.checkNotNullParameter(constructor, "constructor");
        ClassifierDescriptor mo1199getDeclarationDescriptor = constructor.mo1199getDeclarationDescriptor();
        if (mo1199getDeclarationDescriptor instanceof TypeParameterDescriptor) {
            return (TypeProjection) this.f34602d.get(mo1199getDeclarationDescriptor);
        }
        return null;
    }

    public final boolean isRecursion(@NotNull TypeAliasDescriptor descriptor) {
        boolean z10;
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        if (!Intrinsics.areEqual(this.f34600b, descriptor)) {
            TypeAliasExpansion typeAliasExpansion = this.f34599a;
            if (typeAliasExpansion != null) {
                z10 = typeAliasExpansion.isRecursion(descriptor);
            } else {
                z10 = false;
            }
            if (!z10) {
                return false;
            }
            return true;
        }
        return true;
    }

    private TypeAliasExpansion(TypeAliasExpansion typeAliasExpansion, TypeAliasDescriptor typeAliasDescriptor, List list, Map map) {
        this.f34599a = typeAliasExpansion;
        this.f34600b = typeAliasDescriptor;
        this.f34601c = list;
        this.f34602d = map;
    }
}
