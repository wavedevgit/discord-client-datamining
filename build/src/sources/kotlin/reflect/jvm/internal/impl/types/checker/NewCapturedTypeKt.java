package kotlin.reflect.jvm.internal.impl.types.checker;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.KotlinTypeFactory;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import kotlin.reflect.jvm.internal.impl.types.TypeConstructorSubstitution;
import kotlin.reflect.jvm.internal.impl.types.TypeProjection;
import kotlin.reflect.jvm.internal.impl.types.TypeSubstitutor;
import kotlin.reflect.jvm.internal.impl.types.UnwrappedType;
import kotlin.reflect.jvm.internal.impl.types.Variance;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypePreparator;
import kotlin.reflect.jvm.internal.impl.types.model.CaptureStatus;
import kotlin.reflect.jvm.internal.impl.types.model.KotlinTypeMarker;
import kotlin.reflect.jvm.internal.impl.types.typeUtil.TypeUtilsKt;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nNewCapturedType.kt\nKotlin\n*S Kotlin\n*F\n+ 1 NewCapturedType.kt\norg/jetbrains/kotlin/types/checker/NewCapturedTypeKt\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,290:1\n1#2:291\n1#2:310\n1669#3,8:292\n1617#3,9:300\n1869#3:309\n1870#3:311\n1626#3:312\n1740#3,3:313\n1563#3:316\n1634#3,3:317\n1634#3,3:320\n1563#3:323\n1634#3,3:324\n*S KotlinDebug\n*F\n+ 1 NewCapturedType.kt\norg/jetbrains/kotlin/types/checker/NewCapturedTypeKt\n*L\n122#1:310\n117#1:292,8\n122#1:300,9\n122#1:309\n122#1:311\n122#1:312\n154#1:313,3\n156#1:316\n156#1:317,3\n176#1:320,3\n81#1:323\n81#1:324,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class NewCapturedTypeKt {
    private static final List a(UnwrappedType unwrappedType, CaptureStatus captureStatus) {
        UnwrappedType unwrappedType2;
        if (unwrappedType.getArguments().size() != unwrappedType.getConstructor().getParameters().size()) {
            return null;
        }
        List<TypeProjection> arguments = unwrappedType.getArguments();
        List<TypeProjection> list = arguments;
        if (!(list instanceof Collection) || !list.isEmpty()) {
            for (TypeProjection typeProjection : list) {
                if (typeProjection.getProjectionKind() != Variance.INVARIANT) {
                    List<TypeParameterDescriptor> parameters = unwrappedType.getConstructor().getParameters();
                    Intrinsics.checkNotNullExpressionValue(parameters, "getParameters(...)");
                    List<Pair> p12 = CollectionsKt.p1(list, parameters);
                    ArrayList arrayList = new ArrayList(CollectionsKt.w(p12, 10));
                    for (Pair pair : p12) {
                        TypeProjection typeProjection2 = (TypeProjection) pair.a();
                        TypeParameterDescriptor typeParameterDescriptor = (TypeParameterDescriptor) pair.b();
                        if (typeProjection2.getProjectionKind() != Variance.INVARIANT) {
                            if (!typeProjection2.isStarProjection() && typeProjection2.getProjectionKind() == Variance.IN_VARIANCE) {
                                unwrappedType2 = typeProjection2.getType().unwrap();
                            } else {
                                unwrappedType2 = null;
                            }
                            Intrinsics.checkNotNull(typeParameterDescriptor);
                            typeProjection2 = TypeUtilsKt.asTypeProjection(new NewCapturedType(captureStatus, unwrappedType2, typeProjection2, typeParameterDescriptor));
                        }
                        arrayList.add(typeProjection2);
                    }
                    TypeSubstitutor buildSubstitutor = TypeConstructorSubstitution.Companion.create(unwrappedType.getConstructor(), arrayList).buildSubstitutor();
                    int size = arguments.size();
                    for (int i10 = 0; i10 < size; i10++) {
                        TypeProjection typeProjection3 = arguments.get(i10);
                        TypeProjection typeProjection4 = (TypeProjection) arrayList.get(i10);
                        if (typeProjection3.getProjectionKind() != Variance.INVARIANT) {
                            List<KotlinType> upperBounds = unwrappedType.getConstructor().getParameters().get(i10).getUpperBounds();
                            Intrinsics.checkNotNullExpressionValue(upperBounds, "getUpperBounds(...)");
                            ArrayList arrayList2 = new ArrayList();
                            for (KotlinType kotlinType : upperBounds) {
                                arrayList2.add(KotlinTypePreparator.Default.INSTANCE.prepareType((KotlinTypeMarker) buildSubstitutor.safeSubstitute(kotlinType, Variance.INVARIANT).unwrap()));
                            }
                            if (!typeProjection3.isStarProjection() && typeProjection3.getProjectionKind() == Variance.OUT_VARIANCE) {
                                arrayList2.add(KotlinTypePreparator.Default.INSTANCE.prepareType((KotlinTypeMarker) typeProjection3.getType().unwrap()));
                            }
                            KotlinType type = typeProjection4.getType();
                            Intrinsics.checkNotNull(type, "null cannot be cast to non-null type org.jetbrains.kotlin.types.checker.NewCapturedType");
                            ((NewCapturedType) type).getConstructor().initializeSupertypes(arrayList2);
                        }
                    }
                    return arrayList;
                }
            }
        }
        return null;
    }

    private static final SimpleType b(UnwrappedType unwrappedType, List list) {
        return KotlinTypeFactory.simpleType$default(unwrappedType.getAttributes(), unwrappedType.getConstructor(), list, unwrappedType.isMarkedNullable(), (KotlinTypeRefiner) null, 16, (Object) null);
    }

    public static final SimpleType captureFromArguments(@NotNull SimpleType type, @NotNull CaptureStatus status) {
        Intrinsics.checkNotNullParameter(type, "type");
        Intrinsics.checkNotNullParameter(status, "status");
        List a10 = a(type, status);
        if (a10 != null) {
            return b(type, a10);
        }
        return null;
    }
}
