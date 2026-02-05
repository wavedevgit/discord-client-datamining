package kotlin.reflect.jvm.internal.impl.types.checker;

import java.util.ArrayList;
import java.util.Collection;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.resolve.calls.inference.CapturedTypeConstructorImpl;
import kotlin.reflect.jvm.internal.impl.resolve.constants.IntegerValueTypeConstructor;
import kotlin.reflect.jvm.internal.impl.types.AbstractTypePreparator;
import kotlin.reflect.jvm.internal.impl.types.FlexibleType;
import kotlin.reflect.jvm.internal.impl.types.IntersectionTypeConstructor;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.KotlinTypeFactory;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import kotlin.reflect.jvm.internal.impl.types.TypeConstructor;
import kotlin.reflect.jvm.internal.impl.types.TypeProjection;
import kotlin.reflect.jvm.internal.impl.types.TypeUtils;
import kotlin.reflect.jvm.internal.impl.types.TypeWithEnhancementKt;
import kotlin.reflect.jvm.internal.impl.types.UnwrappedType;
import kotlin.reflect.jvm.internal.impl.types.Variance;
import kotlin.reflect.jvm.internal.impl.types.model.CaptureStatus;
import kotlin.reflect.jvm.internal.impl.types.model.KotlinTypeMarker;
import kotlin.reflect.jvm.internal.impl.types.typeUtil.TypeUtilsKt;
import or.p;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nKotlinTypePreparator.kt\nKotlin\n*S Kotlin\n*F\n+ 1 KotlinTypePreparator.kt\norg/jetbrains/kotlin/types/checker/KotlinTypePreparator\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 4 IntersectionTypeConstructor.kt\norg/jetbrains/kotlin/types/IntersectionTypeConstructorKt\n+ 5 IntersectionTypeConstructor.kt\norg/jetbrains/kotlin/types/IntersectionTypeConstructorKt$transformComponents$1\n*L\n1#1,76:1\n1#2:77\n1563#3:78\n1634#3,3:79\n1563#3:82\n1634#3,3:83\n1563#3:92\n1634#3,2:93\n1636#3:102\n98#4,6:86\n104#4:95\n105#4,5:97\n112#4,7:103\n99#5:96\n*S KotlinDebug\n*F\n+ 1 KotlinTypePreparator.kt\norg/jetbrains/kotlin/types/checker/KotlinTypePreparator\n*L\n27#1:78\n27#1:79,3\n37#1:82\n37#1:83,3\n48#1:92\n48#1:93,2\n48#1:102\n48#1:86,6\n48#1:95\n48#1:97,5\n48#1:103,7\n48#1:96\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class KotlinTypePreparator extends AbstractTypePreparator {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Default extends KotlinTypePreparator {
        @NotNull
        public static final Default INSTANCE = new Default();

        private Default() {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class a extends FunctionReferenceImpl implements Function1 {
        a(Object obj) {
            super(1, obj, KotlinTypePreparator.class, "prepareType", "prepareType(Lorg/jetbrains/kotlin/types/model/KotlinTypeMarker;)Lorg/jetbrains/kotlin/types/UnwrappedType;", 0);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final UnwrappedType invoke(KotlinTypeMarker p02) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return ((KotlinTypePreparator) this.receiver).prepareType(p02);
        }
    }

    private final SimpleType a(SimpleType simpleType) {
        KotlinType type;
        TypeConstructor constructor = simpleType.getConstructor();
        IntersectionTypeConstructor intersectionTypeConstructor = null;
        r3 = null;
        UnwrappedType unwrappedType = null;
        KotlinType kotlinType = null;
        if (constructor instanceof CapturedTypeConstructorImpl) {
            CapturedTypeConstructorImpl capturedTypeConstructorImpl = (CapturedTypeConstructorImpl) constructor;
            TypeProjection projection = capturedTypeConstructorImpl.getProjection();
            if (projection.getProjectionKind() != Variance.IN_VARIANCE) {
                projection = null;
            }
            if (projection != null && (type = projection.getType()) != null) {
                unwrappedType = type.unwrap();
            }
            UnwrappedType unwrappedType2 = unwrappedType;
            if (capturedTypeConstructorImpl.getNewTypeConstructor() == null) {
                TypeProjection projection2 = capturedTypeConstructorImpl.getProjection();
                Collection<KotlinType> supertypes = capturedTypeConstructorImpl.getSupertypes();
                ArrayList arrayList = new ArrayList(CollectionsKt.w(supertypes, 10));
                for (KotlinType kotlinType2 : supertypes) {
                    arrayList.add(kotlinType2.unwrap());
                }
                capturedTypeConstructorImpl.setNewTypeConstructor(new NewCapturedTypeConstructor(projection2, arrayList, null, 4, null));
            }
            CaptureStatus captureStatus = CaptureStatus.FOR_SUBTYPING;
            NewCapturedTypeConstructor newTypeConstructor = capturedTypeConstructorImpl.getNewTypeConstructor();
            Intrinsics.checkNotNull(newTypeConstructor);
            return new NewCapturedType(captureStatus, newTypeConstructor, unwrappedType2, simpleType.getAttributes(), simpleType.isMarkedNullable(), false, 32, null);
        }
        boolean z10 = false;
        if (constructor instanceof IntegerValueTypeConstructor) {
            Collection<KotlinType> supertypes2 = ((IntegerValueTypeConstructor) constructor).getSupertypes();
            ArrayList arrayList2 = new ArrayList(CollectionsKt.w(supertypes2, 10));
            for (KotlinType kotlinType3 : supertypes2) {
                KotlinType makeNullableAsSpecified = TypeUtils.makeNullableAsSpecified(kotlinType3, simpleType.isMarkedNullable());
                Intrinsics.checkNotNullExpressionValue(makeNullableAsSpecified, "makeNullableAsSpecified(...)");
                arrayList2.add(makeNullableAsSpecified);
            }
            return KotlinTypeFactory.simpleTypeWithNonTrivialMemberScope(simpleType.getAttributes(), new IntersectionTypeConstructor(arrayList2), CollectionsKt.l(), false, simpleType.getMemberScope());
        } else if ((constructor instanceof IntersectionTypeConstructor) && simpleType.isMarkedNullable()) {
            IntersectionTypeConstructor intersectionTypeConstructor2 = (IntersectionTypeConstructor) constructor;
            Collection<KotlinType> supertypes3 = intersectionTypeConstructor2.getSupertypes();
            ArrayList arrayList3 = new ArrayList(CollectionsKt.w(supertypes3, 10));
            for (KotlinType kotlinType4 : supertypes3) {
                arrayList3.add(TypeUtilsKt.makeNullable(kotlinType4));
                z10 = true;
            }
            if (z10) {
                KotlinType alternativeType = intersectionTypeConstructor2.getAlternativeType();
                if (alternativeType != null) {
                    kotlinType = TypeUtilsKt.makeNullable(alternativeType);
                }
                intersectionTypeConstructor = new IntersectionTypeConstructor(arrayList3).setAlternative(kotlinType);
            }
            if (intersectionTypeConstructor != null) {
                intersectionTypeConstructor2 = intersectionTypeConstructor;
            }
            return intersectionTypeConstructor2.createType();
        } else {
            return simpleType;
        }
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.AbstractTypePreparator
    @NotNull
    public UnwrappedType prepareType(@NotNull KotlinTypeMarker type) {
        UnwrappedType flexibleType;
        Intrinsics.checkNotNullParameter(type, "type");
        if (type instanceof KotlinType) {
            UnwrappedType unwrap = ((KotlinType) type).unwrap();
            if (unwrap instanceof SimpleType) {
                flexibleType = a((SimpleType) unwrap);
            } else if (unwrap instanceof FlexibleType) {
                FlexibleType flexibleType2 = (FlexibleType) unwrap;
                SimpleType a10 = a(flexibleType2.getLowerBound());
                SimpleType a11 = a(flexibleType2.getUpperBound());
                flexibleType = (a10 == flexibleType2.getLowerBound() && a11 == flexibleType2.getUpperBound()) ? unwrap : KotlinTypeFactory.flexibleType(a10, a11);
            } else {
                throw new p();
            }
            return TypeWithEnhancementKt.inheritEnhancement(flexibleType, unwrap, new a(this));
        }
        throw new IllegalArgumentException("Failed requirement.");
    }
}
