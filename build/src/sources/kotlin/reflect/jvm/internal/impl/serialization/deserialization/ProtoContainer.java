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
    private final NameResolver f34324a;

    /* renamed from: b  reason: collision with root package name */
    private final TypeTable f34325b;

    /* renamed from: c  reason: collision with root package name */
    private final SourceElement f34326c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Class extends ProtoContainer {

        /* renamed from: d  reason: collision with root package name */
        private final ProtoBuf.Class f34327d;

        /* renamed from: e  reason: collision with root package name */
        private final Class f34328e;

        /* renamed from: f  reason: collision with root package name */
        private final ClassId f34329f;

        /* renamed from: g  reason: collision with root package name */
        private final ProtoBuf.Class.Kind f34330g;

        /* renamed from: h  reason: collision with root package name */
        private final boolean f34331h;

        /* renamed from: i  reason: collision with root package name */
        private final boolean f34332i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public Class(@NotNull ProtoBuf.Class classProto, @NotNull NameResolver nameResolver, @NotNull TypeTable typeTable, SourceElement sourceElement, Class r62) {
            super(nameResolver, typeTable, sourceElement, null);
            Intrinsics.checkNotNullParameter(classProto, "classProto");
            Intrinsics.checkNotNullParameter(nameResolver, "nameResolver");
            Intrinsics.checkNotNullParameter(typeTable, "typeTable");
            this.f34327d = classProto;
            this.f34328e = r62;
            this.f34329f = NameResolverUtilKt.getClassId(nameResolver, classProto.getFqName());
            ProtoBuf.Class.Kind kind = Flags.CLASS_KIND.get(classProto.getFlags());
            this.f34330g = kind == null ? ProtoBuf.Class.Kind.CLASS : kind;
            Boolean bool = Flags.IS_INNER.get(classProto.getFlags());
            Intrinsics.checkNotNullExpressionValue(bool, "get(...)");
            this.f34331h = bool.booleanValue();
            Boolean bool2 = Flags.IS_DATA.get(classProto.getFlags());
            Intrinsics.checkNotNullExpressionValue(bool2, "get(...)");
            this.f34332i = bool2.booleanValue();
        }

        @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.ProtoContainer
        @NotNull
        public FqName debugFqName() {
            return this.f34329f.asSingleFqName();
        }

        @NotNull
        public final ClassId getClassId() {
            return this.f34329f;
        }

        @NotNull
        public final ProtoBuf.Class getClassProto() {
            return this.f34327d;
        }

        @NotNull
        public final ProtoBuf.Class.Kind getKind() {
            return this.f34330g;
        }

        public final Class getOuterClass() {
            return this.f34328e;
        }

        public final boolean isInner() {
            return this.f34331h;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Package extends ProtoContainer {

        /* renamed from: d  reason: collision with root package name */
        private final FqName f34333d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public Package(@NotNull FqName fqName, @NotNull NameResolver nameResolver, @NotNull TypeTable typeTable, SourceElement sourceElement) {
            super(nameResolver, typeTable, sourceElement, null);
            Intrinsics.checkNotNullParameter(fqName, "fqName");
            Intrinsics.checkNotNullParameter(nameResolver, "nameResolver");
            Intrinsics.checkNotNullParameter(typeTable, "typeTable");
            this.f34333d = fqName;
        }

        @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.ProtoContainer
        @NotNull
        public FqName debugFqName() {
            return this.f34333d;
        }
    }

    public /* synthetic */ ProtoContainer(NameResolver nameResolver, TypeTable typeTable, SourceElement sourceElement, DefaultConstructorMarker defaultConstructorMarker) {
        this(nameResolver, typeTable, sourceElement);
    }

    @NotNull
    public abstract FqName debugFqName();

    @NotNull
    public final NameResolver getNameResolver() {
        return this.f34324a;
    }

    public final SourceElement getSource() {
        return this.f34326c;
    }

    @NotNull
    public final TypeTable getTypeTable() {
        return this.f34325b;
    }

    @NotNull
    public String toString() {
        return getClass().getSimpleName() + ": " + debugFqName();
    }

    private ProtoContainer(NameResolver nameResolver, TypeTable typeTable, SourceElement sourceElement) {
        this.f34324a = nameResolver;
        this.f34325b = typeTable;
        this.f34326c = sourceElement;
    }
}
