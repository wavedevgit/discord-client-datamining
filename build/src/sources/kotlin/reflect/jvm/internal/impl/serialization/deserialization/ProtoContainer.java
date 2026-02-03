package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.SourceElement;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.Flags;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.NameResolver;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.TypeTable;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class ProtoContainer {

    /* renamed from: a  reason: collision with root package name */
    private final NameResolver f35410a;

    /* renamed from: b  reason: collision with root package name */
    private final TypeTable f35411b;

    /* renamed from: c  reason: collision with root package name */
    private final SourceElement f35412c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Class extends ProtoContainer {

        /* renamed from: d  reason: collision with root package name */
        private final ProtoBuf.Class f35413d;

        /* renamed from: e  reason: collision with root package name */
        private final Class f35414e;

        /* renamed from: f  reason: collision with root package name */
        private final ClassId f35415f;

        /* renamed from: g  reason: collision with root package name */
        private final ProtoBuf.Class.Kind f35416g;

        /* renamed from: h  reason: collision with root package name */
        private final boolean f35417h;

        /* renamed from: i  reason: collision with root package name */
        private final boolean f35418i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public Class(@NotNull ProtoBuf.Class classProto, @NotNull NameResolver nameResolver, @NotNull TypeTable typeTable, SourceElement sourceElement, Class r62) {
            super(nameResolver, typeTable, sourceElement, null);
            Intrinsics.checkNotNullParameter(classProto, "classProto");
            Intrinsics.checkNotNullParameter(nameResolver, "nameResolver");
            Intrinsics.checkNotNullParameter(typeTable, "typeTable");
            this.f35413d = classProto;
            this.f35414e = r62;
            this.f35415f = NameResolverUtilKt.getClassId(nameResolver, classProto.getFqName());
            ProtoBuf.Class.Kind kind = Flags.CLASS_KIND.get(classProto.getFlags());
            this.f35416g = kind == null ? ProtoBuf.Class.Kind.CLASS : kind;
            Boolean bool = Flags.IS_INNER.get(classProto.getFlags());
            Intrinsics.checkNotNullExpressionValue(bool, "get(...)");
            this.f35417h = bool.booleanValue();
            Boolean bool2 = Flags.IS_DATA.get(classProto.getFlags());
            Intrinsics.checkNotNullExpressionValue(bool2, "get(...)");
            this.f35418i = bool2.booleanValue();
        }

        @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.ProtoContainer
        @NotNull
        public FqName debugFqName() {
            return this.f35415f.asSingleFqName();
        }

        @NotNull
        public final ClassId getClassId() {
            return this.f35415f;
        }

        @NotNull
        public final ProtoBuf.Class getClassProto() {
            return this.f35413d;
        }

        @NotNull
        public final ProtoBuf.Class.Kind getKind() {
            return this.f35416g;
        }

        public final Class getOuterClass() {
            return this.f35414e;
        }

        public final boolean isInner() {
            return this.f35417h;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Package extends ProtoContainer {

        /* renamed from: d  reason: collision with root package name */
        private final FqName f35419d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public Package(@NotNull FqName fqName, @NotNull NameResolver nameResolver, @NotNull TypeTable typeTable, SourceElement sourceElement) {
            super(nameResolver, typeTable, sourceElement, null);
            Intrinsics.checkNotNullParameter(fqName, "fqName");
            Intrinsics.checkNotNullParameter(nameResolver, "nameResolver");
            Intrinsics.checkNotNullParameter(typeTable, "typeTable");
            this.f35419d = fqName;
        }

        @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.ProtoContainer
        @NotNull
        public FqName debugFqName() {
            return this.f35419d;
        }
    }

    public /* synthetic */ ProtoContainer(NameResolver nameResolver, TypeTable typeTable, SourceElement sourceElement, DefaultConstructorMarker defaultConstructorMarker) {
        this(nameResolver, typeTable, sourceElement);
    }

    @NotNull
    public abstract FqName debugFqName();

    @NotNull
    public final NameResolver getNameResolver() {
        return this.f35410a;
    }

    public final SourceElement getSource() {
        return this.f35412c;
    }

    @NotNull
    public final TypeTable getTypeTable() {
        return this.f35411b;
    }

    @NotNull
    public String toString() {
        return getClass().getSimpleName() + ": " + debugFqName();
    }

    private ProtoContainer(NameResolver nameResolver, TypeTable typeTable, SourceElement sourceElement) {
        this.f35410a = nameResolver;
        this.f35411b = typeTable;
        this.f35412c = sourceElement;
    }
}
