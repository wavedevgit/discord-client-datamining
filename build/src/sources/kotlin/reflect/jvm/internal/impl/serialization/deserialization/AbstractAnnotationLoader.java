package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.NameResolver;
import kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite;
import kotlin.reflect.jvm.internal.impl.protobuf.MessageLite;
import kotlin.reflect.jvm.internal.impl.serialization.SerializerExtensionProtocol;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.ProtoContainer;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nAbstractAnnotationLoader.kt\nKotlin\n*S Kotlin\n*F\n+ 1 AbstractAnnotationLoader.kt\norg/jetbrains/kotlin/serialization/deserialization/AbstractAnnotationLoader\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,104:1\n1563#2:105\n1634#2,3:106\n1563#2:109\n1634#2,3:110\n1563#2:114\n1634#2,3:115\n1563#2:118\n1634#2,3:119\n1563#2:122\n1634#2,3:123\n1563#2:126\n1634#2,3:127\n1563#2:130\n1634#2,3:131\n1563#2:134\n1634#2,3:135\n1563#2:138\n1634#2,3:139\n1#3:113\n*S KotlinDebug\n*F\n+ 1 AbstractAnnotationLoader.kt\norg/jetbrains/kotlin/serialization/deserialization/AbstractAnnotationLoader\n*L\n18#1:105\n18#1:106,3\n37#1:109\n37#1:110,3\n44#1:114\n44#1:115,3\n51#1:118\n51#1:119,3\n58#1:122\n58#1:123,3\n71#1:126\n71#1:127,3\n91#1:130\n91#1:131,3\n97#1:134\n97#1:135,3\n101#1:138\n101#1:139,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class AbstractAnnotationLoader<A> implements AnnotationLoader<A> {

    /* renamed from: a  reason: collision with root package name */
    private final SerializerExtensionProtocol f35563a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[AnnotatedCallableKind.values().length];
            try {
                iArr[AnnotatedCallableKind.PROPERTY.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[AnnotatedCallableKind.PROPERTY_GETTER.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[AnnotatedCallableKind.PROPERTY_SETTER.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    public AbstractAnnotationLoader(@NotNull SerializerExtensionProtocol protocol) {
        Intrinsics.checkNotNullParameter(protocol, "protocol");
        this.f35563a = protocol;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final SerializerExtensionProtocol a() {
        return this.f35563a;
    }

    @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.AnnotationLoader
    @NotNull
    public List<A> loadCallableAnnotations(@NotNull ProtoContainer container, @NotNull MessageLite proto, @NotNull AnnotatedCallableKind kind) {
        List list;
        Intrinsics.checkNotNullParameter(container, "container");
        Intrinsics.checkNotNullParameter(proto, "proto");
        Intrinsics.checkNotNullParameter(kind, "kind");
        if (proto instanceof ProtoBuf.Constructor) {
            list = (List) ((ProtoBuf.Constructor) proto).getExtension(this.f35563a.getConstructorAnnotation());
        } else if (proto instanceof ProtoBuf.Function) {
            list = (List) ((ProtoBuf.Function) proto).getExtension(this.f35563a.getFunctionAnnotation());
        } else if (proto instanceof ProtoBuf.Property) {
            int i10 = WhenMappings.$EnumSwitchMapping$0[kind.ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        list = (List) ((ProtoBuf.Property) proto).getExtension(this.f35563a.getPropertySetterAnnotation());
                    } else {
                        throw new IllegalStateException("Unsupported callable kind with property proto");
                    }
                } else {
                    list = (List) ((ProtoBuf.Property) proto).getExtension(this.f35563a.getPropertyGetterAnnotation());
                }
            } else {
                list = (List) ((ProtoBuf.Property) proto).getExtension(this.f35563a.getPropertyAnnotation());
            }
        } else {
            throw new IllegalStateException(("Unknown message: " + proto).toString());
        }
        if (list == null) {
            list = CollectionsKt.l();
        }
        List<ProtoBuf.Annotation> list2 = list;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list2, 10));
        for (ProtoBuf.Annotation annotation : list2) {
            arrayList.add(loadAnnotation(annotation, container.getNameResolver()));
        }
        return arrayList;
    }

    @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.AnnotationLoader
    @NotNull
    public List<A> loadClassAnnotations(@NotNull ProtoContainer.Class container) {
        Intrinsics.checkNotNullParameter(container, "container");
        List list = (List) container.getClassProto().getExtension(this.f35563a.getClassAnnotation());
        if (list == null) {
            list = CollectionsKt.l();
        }
        List<ProtoBuf.Annotation> list2 = list;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list2, 10));
        for (ProtoBuf.Annotation annotation : list2) {
            arrayList.add(loadAnnotation(annotation, container.getNameResolver()));
        }
        return arrayList;
    }

    @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.AnnotationLoader
    @NotNull
    public List<A> loadEnumEntryAnnotations(@NotNull ProtoContainer container, @NotNull ProtoBuf.EnumEntry proto) {
        Intrinsics.checkNotNullParameter(container, "container");
        Intrinsics.checkNotNullParameter(proto, "proto");
        List list = (List) proto.getExtension(this.f35563a.getEnumEntryAnnotation());
        if (list == null) {
            list = CollectionsKt.l();
        }
        List<ProtoBuf.Annotation> list2 = list;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list2, 10));
        for (ProtoBuf.Annotation annotation : list2) {
            arrayList.add(loadAnnotation(annotation, container.getNameResolver()));
        }
        return arrayList;
    }

    @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.AnnotationLoader
    @NotNull
    public List<A> loadExtensionReceiverParameterAnnotations(@NotNull ProtoContainer container, @NotNull MessageLite proto, @NotNull AnnotatedCallableKind kind) {
        Intrinsics.checkNotNullParameter(container, "container");
        Intrinsics.checkNotNullParameter(proto, "proto");
        Intrinsics.checkNotNullParameter(kind, "kind");
        List list = null;
        if (proto instanceof ProtoBuf.Function) {
            GeneratedMessageLite.GeneratedExtension<ProtoBuf.Function, List<ProtoBuf.Annotation>> functionExtensionReceiverAnnotation = this.f35563a.getFunctionExtensionReceiverAnnotation();
            if (functionExtensionReceiverAnnotation != null) {
                list = (List) ((ProtoBuf.Function) proto).getExtension(functionExtensionReceiverAnnotation);
            }
        } else if (proto instanceof ProtoBuf.Property) {
            int i10 = WhenMappings.$EnumSwitchMapping$0[kind.ordinal()];
            if (i10 != 1 && i10 != 2 && i10 != 3) {
                throw new IllegalStateException(("Unsupported callable kind with property proto for receiver annotations: " + kind).toString());
            }
            GeneratedMessageLite.GeneratedExtension<ProtoBuf.Property, List<ProtoBuf.Annotation>> propertyExtensionReceiverAnnotation = this.f35563a.getPropertyExtensionReceiverAnnotation();
            if (propertyExtensionReceiverAnnotation != null) {
                list = (List) ((ProtoBuf.Property) proto).getExtension(propertyExtensionReceiverAnnotation);
            }
        } else {
            throw new IllegalStateException(("Unknown message: " + proto).toString());
        }
        if (list == null) {
            list = CollectionsKt.l();
        }
        List<ProtoBuf.Annotation> list2 = list;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list2, 10));
        for (ProtoBuf.Annotation annotation : list2) {
            arrayList.add(loadAnnotation(annotation, container.getNameResolver()));
        }
        return arrayList;
    }

    @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.AnnotationLoader
    @NotNull
    public List<A> loadPropertyBackingFieldAnnotations(@NotNull ProtoContainer container, @NotNull ProtoBuf.Property proto) {
        List list;
        Intrinsics.checkNotNullParameter(container, "container");
        Intrinsics.checkNotNullParameter(proto, "proto");
        GeneratedMessageLite.GeneratedExtension<ProtoBuf.Property, List<ProtoBuf.Annotation>> propertyBackingFieldAnnotation = this.f35563a.getPropertyBackingFieldAnnotation();
        if (propertyBackingFieldAnnotation != null) {
            list = (List) proto.getExtension(propertyBackingFieldAnnotation);
        } else {
            list = null;
        }
        if (list == null) {
            list = CollectionsKt.l();
        }
        List<ProtoBuf.Annotation> list2 = list;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list2, 10));
        for (ProtoBuf.Annotation annotation : list2) {
            arrayList.add(loadAnnotation(annotation, container.getNameResolver()));
        }
        return arrayList;
    }

    @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.AnnotationLoader
    @NotNull
    public List<A> loadPropertyDelegateFieldAnnotations(@NotNull ProtoContainer container, @NotNull ProtoBuf.Property proto) {
        List list;
        Intrinsics.checkNotNullParameter(container, "container");
        Intrinsics.checkNotNullParameter(proto, "proto");
        GeneratedMessageLite.GeneratedExtension<ProtoBuf.Property, List<ProtoBuf.Annotation>> propertyDelegatedFieldAnnotation = this.f35563a.getPropertyDelegatedFieldAnnotation();
        if (propertyDelegatedFieldAnnotation != null) {
            list = (List) proto.getExtension(propertyDelegatedFieldAnnotation);
        } else {
            list = null;
        }
        if (list == null) {
            list = CollectionsKt.l();
        }
        List<ProtoBuf.Annotation> list2 = list;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list2, 10));
        for (ProtoBuf.Annotation annotation : list2) {
            arrayList.add(loadAnnotation(annotation, container.getNameResolver()));
        }
        return arrayList;
    }

    @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.AnnotationLoader
    @NotNull
    public List<A> loadTypeAnnotations(@NotNull ProtoBuf.Type proto, @NotNull NameResolver nameResolver) {
        Intrinsics.checkNotNullParameter(proto, "proto");
        Intrinsics.checkNotNullParameter(nameResolver, "nameResolver");
        List list = (List) proto.getExtension(this.f35563a.getTypeAnnotation());
        if (list == null) {
            list = CollectionsKt.l();
        }
        List<ProtoBuf.Annotation> list2 = list;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list2, 10));
        for (ProtoBuf.Annotation annotation : list2) {
            arrayList.add(loadAnnotation(annotation, nameResolver));
        }
        return arrayList;
    }

    @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.AnnotationLoader
    @NotNull
    public List<A> loadTypeParameterAnnotations(@NotNull ProtoBuf.TypeParameter proto, @NotNull NameResolver nameResolver) {
        Intrinsics.checkNotNullParameter(proto, "proto");
        Intrinsics.checkNotNullParameter(nameResolver, "nameResolver");
        List list = (List) proto.getExtension(this.f35563a.getTypeParameterAnnotation());
        if (list == null) {
            list = CollectionsKt.l();
        }
        List<ProtoBuf.Annotation> list2 = list;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list2, 10));
        for (ProtoBuf.Annotation annotation : list2) {
            arrayList.add(loadAnnotation(annotation, nameResolver));
        }
        return arrayList;
    }

    @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.AnnotationLoader
    @NotNull
    public List<A> loadValueParameterAnnotations(@NotNull ProtoContainer container, @NotNull MessageLite callableProto, @NotNull AnnotatedCallableKind kind, int i10, @NotNull ProtoBuf.ValueParameter proto) {
        Intrinsics.checkNotNullParameter(container, "container");
        Intrinsics.checkNotNullParameter(callableProto, "callableProto");
        Intrinsics.checkNotNullParameter(kind, "kind");
        Intrinsics.checkNotNullParameter(proto, "proto");
        List list = (List) proto.getExtension(this.f35563a.getParameterAnnotation());
        if (list == null) {
            list = CollectionsKt.l();
        }
        List<ProtoBuf.Annotation> list2 = list;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list2, 10));
        for (ProtoBuf.Annotation annotation : list2) {
            arrayList.add(loadAnnotation(annotation, container.getNameResolver()));
        }
        return arrayList;
    }
}
