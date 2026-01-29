package kotlin.reflect.jvm.internal.impl.types;

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.types.TypeCheckerState;
import kotlin.reflect.jvm.internal.impl.types.model.CaptureStatus;
import kotlin.reflect.jvm.internal.impl.types.model.CapturedTypeMarker;
import kotlin.reflect.jvm.internal.impl.types.model.FlexibleTypeMarker;
import kotlin.reflect.jvm.internal.impl.types.model.IntersectionTypeConstructorMarker;
import kotlin.reflect.jvm.internal.impl.types.model.KotlinTypeMarker;
import kotlin.reflect.jvm.internal.impl.types.model.RigidTypeMarker;
import kotlin.reflect.jvm.internal.impl.types.model.SimpleTypeMarker;
import kotlin.reflect.jvm.internal.impl.types.model.TypeArgumentListMarker;
import kotlin.reflect.jvm.internal.impl.types.model.TypeArgumentMarker;
import kotlin.reflect.jvm.internal.impl.types.model.TypeConstructorMarker;
import kotlin.reflect.jvm.internal.impl.types.model.TypeParameterMarker;
import kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext;
import kotlin.reflect.jvm.internal.impl.types.model.TypeVariableTypeConstructorMarker;
import kotlin.reflect.jvm.internal.impl.types.model.TypeVariance;
import kotlin.reflect.jvm.internal.impl.utils.SmartList;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nAbstractTypeChecker.kt\nKotlin\n*S Kotlin\n*F\n+ 1 AbstractTypeChecker.kt\norg/jetbrains/kotlin/types/AbstractTypeChecker\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 AbstractTypeChecker.kt\norg/jetbrains/kotlin/types/TypeCheckerState\n+ 4 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 5 TypeSystemContext.kt\norg/jetbrains/kotlin/types/model/TypeSystemContextKt\n*L\n1#1,884:1\n1#2:885\n1#2:899\n1#2:951\n1#2:986\n140#3,13:886\n153#3,13:900\n54#3,8:924\n140#3,13:938\n153#3,13:952\n140#3,13:973\n153#3,13:987\n1634#4,3:913\n1563#4:916\n1634#4,3:917\n1563#4:920\n1634#4,3:921\n1740#4,3:932\n1740#4,3:935\n774#4:965\n865#4:966\n866#4:972\n1374#4:1000\n1460#4,5:1001\n1761#4,3:1006\n1761#4,3:1009\n614#5,5:967\n*S KotlinDebug\n*F\n+ 1 AbstractTypeChecker.kt\norg/jetbrains/kotlin/types/AbstractTypeChecker\n*L\n383#1:899\n671#1:951\n741#1:986\n383#1:886,13\n383#1:900,13\n527#1:924,8\n671#1:938,13\n671#1:952,13\n741#1:973,13\n741#1:987,13\n426#1:913,3\n429#1:916\n429#1:917,3\n442#1:920\n442#1:921,3\n609#1:932,3\n620#1:935,3\n716#1:965\n716#1:966\n716#1:972\n750#1:1000\n750#1:1001,5\n336#1:1006,3\n344#1:1009,3\n717#1:967,5\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class AbstractTypeChecker {
    @NotNull
    public static final AbstractTypeChecker INSTANCE = new AbstractTypeChecker();
    public static boolean RUN_SLOW_ASSERTIONS;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;
        public static final /* synthetic */ int[] $EnumSwitchMapping$1;

        static {
            int[] iArr = new int[TypeVariance.values().length];
            try {
                iArr[TypeVariance.INV.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[TypeVariance.OUT.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[TypeVariance.IN.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            $EnumSwitchMapping$0 = iArr;
            int[] iArr2 = new int[TypeCheckerState.LowerCapturedTypePolicy.values().length];
            try {
                iArr2[TypeCheckerState.LowerCapturedTypePolicy.CHECK_ONLY_LOWER.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[TypeCheckerState.LowerCapturedTypePolicy.CHECK_SUBTYPE_AND_LOWER.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[TypeCheckerState.LowerCapturedTypePolicy.SKIP_LOWER.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            $EnumSwitchMapping$1 = iArr2;
        }
    }

    private AbstractTypeChecker() {
    }

    private final Boolean c(TypeCheckerState typeCheckerState, RigidTypeMarker rigidTypeMarker, RigidTypeMarker rigidTypeMarker2) {
        TypeSystemContext typeSystemContext = typeCheckerState.getTypeSystemContext();
        if (!typeSystemContext.isIntegerLiteralType(rigidTypeMarker) && !typeSystemContext.isIntegerLiteralType(rigidTypeMarker2)) {
            return null;
        }
        if (f(typeSystemContext, rigidTypeMarker) && f(typeSystemContext, rigidTypeMarker2)) {
            return Boolean.TRUE;
        }
        if (typeSystemContext.isIntegerLiteralType(rigidTypeMarker)) {
            if (g(typeSystemContext, typeCheckerState, rigidTypeMarker, rigidTypeMarker2, false)) {
                return Boolean.TRUE;
            }
        } else if (typeSystemContext.isIntegerLiteralType(rigidTypeMarker2) && (e(typeSystemContext, rigidTypeMarker) || g(typeSystemContext, typeCheckerState, rigidTypeMarker2, rigidTypeMarker, true))) {
            return Boolean.TRUE;
        }
        return null;
    }

    private static final boolean d(TypeSystemContext typeSystemContext, RigidTypeMarker rigidTypeMarker) {
        KotlinTypeMarker type;
        RigidTypeMarker upperBoundIfFlexible;
        if (!(rigidTypeMarker instanceof CapturedTypeMarker) || (type = typeSystemContext.getType(typeSystemContext.projection(typeSystemContext.typeConstructor((CapturedTypeMarker) rigidTypeMarker)))) == null || (upperBoundIfFlexible = typeSystemContext.upperBoundIfFlexible(type)) == null || !typeSystemContext.isIntegerLiteralType(upperBoundIfFlexible)) {
            return false;
        }
        return true;
    }

    private static final boolean e(TypeSystemContext typeSystemContext, RigidTypeMarker rigidTypeMarker) {
        TypeConstructorMarker typeConstructor = typeSystemContext.typeConstructor(rigidTypeMarker);
        if (typeConstructor instanceof IntersectionTypeConstructorMarker) {
            Collection<KotlinTypeMarker> supertypes = typeSystemContext.supertypes(typeConstructor);
            if (!(supertypes instanceof Collection) || !supertypes.isEmpty()) {
                for (KotlinTypeMarker kotlinTypeMarker : supertypes) {
                    RigidTypeMarker asRigidType = typeSystemContext.asRigidType(kotlinTypeMarker);
                    if (asRigidType != null && typeSystemContext.isIntegerLiteralType(asRigidType)) {
                        return true;
                    }
                }
                return false;
            }
            return false;
        }
        return false;
    }

    private static final boolean f(TypeSystemContext typeSystemContext, RigidTypeMarker rigidTypeMarker) {
        if (!typeSystemContext.isIntegerLiteralType(rigidTypeMarker) && !d(typeSystemContext, rigidTypeMarker)) {
            return false;
        }
        return true;
    }

    private static final boolean g(TypeSystemContext typeSystemContext, TypeCheckerState typeCheckerState, RigidTypeMarker rigidTypeMarker, RigidTypeMarker rigidTypeMarker2, boolean z10) {
        TypeCheckerState typeCheckerState2;
        RigidTypeMarker rigidTypeMarker3;
        Collection<KotlinTypeMarker> possibleIntegerTypes = typeSystemContext.possibleIntegerTypes(rigidTypeMarker);
        if ((possibleIntegerTypes instanceof Collection) && possibleIntegerTypes.isEmpty()) {
            return false;
        }
        for (KotlinTypeMarker kotlinTypeMarker : possibleIntegerTypes) {
            if (!Intrinsics.areEqual(typeSystemContext.typeConstructor(kotlinTypeMarker), typeSystemContext.typeConstructor(rigidTypeMarker2))) {
                if (z10) {
                    typeCheckerState2 = typeCheckerState;
                    rigidTypeMarker3 = rigidTypeMarker2;
                    if (isSubtypeOf$default(INSTANCE, typeCheckerState2, rigidTypeMarker3, kotlinTypeMarker, false, 8, null)) {
                        return true;
                    }
                } else {
                    typeCheckerState2 = typeCheckerState;
                    rigidTypeMarker3 = rigidTypeMarker2;
                }
                typeCheckerState = typeCheckerState2;
                rigidTypeMarker2 = rigidTypeMarker3;
            } else {
                return true;
            }
        }
        return false;
    }

    private final Boolean h(TypeCheckerState typeCheckerState, RigidTypeMarker rigidTypeMarker, RigidTypeMarker rigidTypeMarker2) {
        KotlinTypeMarker kotlinTypeMarker;
        TypeSystemContext typeSystemContext = typeCheckerState.getTypeSystemContext();
        boolean z10 = false;
        if (!typeSystemContext.isError(rigidTypeMarker) && !typeSystemContext.isError(rigidTypeMarker2)) {
            if (typeSystemContext.isStubTypeForBuilderInference(rigidTypeMarker) && typeSystemContext.isStubTypeForBuilderInference(rigidTypeMarker2)) {
                return Boolean.valueOf((INSTANCE.o(typeSystemContext, rigidTypeMarker, rigidTypeMarker2) || typeCheckerState.isStubTypeEqualsToAnything()) ? true : true);
            } else if (!typeSystemContext.isStubType(rigidTypeMarker) && !typeSystemContext.isStubType(rigidTypeMarker2)) {
                CapturedTypeMarker asCapturedTypeUnwrappingDnn = typeSystemContext.asCapturedTypeUnwrappingDnn(rigidTypeMarker2);
                if (asCapturedTypeUnwrappingDnn != null) {
                    kotlinTypeMarker = typeSystemContext.lowerType(asCapturedTypeUnwrappingDnn);
                } else {
                    kotlinTypeMarker = null;
                }
                if (asCapturedTypeUnwrappingDnn != null && kotlinTypeMarker != null) {
                    if (typeSystemContext.isMarkedNullable(rigidTypeMarker2)) {
                        kotlinTypeMarker = typeSystemContext.withNullability(kotlinTypeMarker, true);
                    } else if (typeSystemContext.isDefinitelyNotNullType(rigidTypeMarker2)) {
                        kotlinTypeMarker = typeSystemContext.makeDefinitelyNotNullOrNotNull(kotlinTypeMarker);
                    }
                    KotlinTypeMarker kotlinTypeMarker2 = kotlinTypeMarker;
                    int i10 = WhenMappings.$EnumSwitchMapping$1[typeCheckerState.getLowerCapturedTypePolicy(rigidTypeMarker, asCapturedTypeUnwrappingDnn).ordinal()];
                    if (i10 != 1) {
                        if (i10 != 2) {
                            if (i10 != 3) {
                                throw new ir.p();
                            }
                        } else if (isSubtypeOf$default(INSTANCE, typeCheckerState, rigidTypeMarker, kotlinTypeMarker2, false, 8, null)) {
                            return Boolean.TRUE;
                        }
                    } else {
                        return Boolean.valueOf(isSubtypeOf$default(INSTANCE, typeCheckerState, rigidTypeMarker, kotlinTypeMarker2, false, 8, null));
                    }
                }
                TypeConstructorMarker typeConstructor = typeSystemContext.typeConstructor(rigidTypeMarker2);
                if (typeSystemContext.isIntersection(typeConstructor)) {
                    typeSystemContext.isMarkedNullable(rigidTypeMarker2);
                    Collection<KotlinTypeMarker> supertypes = typeSystemContext.supertypes(typeConstructor);
                    if (!(supertypes instanceof Collection) || !supertypes.isEmpty()) {
                        for (KotlinTypeMarker kotlinTypeMarker3 : supertypes) {
                            if (!isSubtypeOf$default(INSTANCE, typeCheckerState, rigidTypeMarker, kotlinTypeMarker3, false, 8, null)) {
                                break;
                            }
                        }
                    }
                    z10 = true;
                    return Boolean.valueOf(z10);
                }
                TypeConstructorMarker typeConstructor2 = typeSystemContext.typeConstructor(rigidTypeMarker);
                if (!(rigidTypeMarker instanceof CapturedTypeMarker)) {
                    if (typeSystemContext.isIntersection(typeConstructor2)) {
                        Collection<KotlinTypeMarker> supertypes2 = typeSystemContext.supertypes(typeConstructor2);
                        if (!(supertypes2 instanceof Collection) || !supertypes2.isEmpty()) {
                            for (KotlinTypeMarker kotlinTypeMarker4 : supertypes2) {
                                if (!(kotlinTypeMarker4 instanceof CapturedTypeMarker)) {
                                    break;
                                }
                            }
                        }
                    }
                    return null;
                }
                TypeParameterMarker l10 = INSTANCE.l(typeCheckerState.getTypeSystemContext(), rigidTypeMarker2, rigidTypeMarker);
                if (l10 != null && typeSystemContext.hasRecursiveBounds(l10, typeSystemContext.typeConstructor(rigidTypeMarker2))) {
                    return Boolean.TRUE;
                }
                return null;
            } else {
                return Boolean.valueOf(typeCheckerState.isStubTypeEqualsToAnything());
            }
        } else if (typeCheckerState.isErrorTypeEqualsToAnything()) {
            return Boolean.TRUE;
        } else {
            if (typeSystemContext.isMarkedNullable(rigidTypeMarker) && !typeSystemContext.isMarkedNullable(rigidTypeMarker2)) {
                return Boolean.FALSE;
            }
            return Boolean.valueOf(AbstractStrictEqualityTypeChecker.INSTANCE.strictEqualTypes(typeSystemContext, typeSystemContext.withNullability(rigidTypeMarker, false), typeSystemContext.withNullability(rigidTypeMarker2, false)));
        }
    }

    private final List i(TypeCheckerState typeCheckerState, RigidTypeMarker rigidTypeMarker, TypeConstructorMarker typeConstructorMarker) {
        TypeCheckerState.SupertypesPolicy substitutionSupertypePolicy;
        TypeSystemContext typeSystemContext = typeCheckerState.getTypeSystemContext();
        List<SimpleTypeMarker> fastCorrespondingSupertypes = typeSystemContext.fastCorrespondingSupertypes(rigidTypeMarker, typeConstructorMarker);
        if (fastCorrespondingSupertypes != null) {
            return fastCorrespondingSupertypes;
        }
        if (!typeSystemContext.isClassTypeConstructor(typeConstructorMarker) && typeSystemContext.isClassType(rigidTypeMarker)) {
            return CollectionsKt.l();
        }
        if (typeSystemContext.isCommonFinalClassConstructor(typeConstructorMarker)) {
            if (typeSystemContext.areEqualTypeConstructors(typeSystemContext.typeConstructor(rigidTypeMarker), typeConstructorMarker)) {
                RigidTypeMarker captureFromArguments = typeSystemContext.captureFromArguments(rigidTypeMarker, CaptureStatus.FOR_SUBTYPING);
                if (captureFromArguments != null) {
                    rigidTypeMarker = captureFromArguments;
                }
                return CollectionsKt.e(rigidTypeMarker);
            }
            return CollectionsKt.l();
        }
        SmartList smartList = new SmartList();
        typeCheckerState.initialize();
        ArrayDeque<RigidTypeMarker> supertypesDeque = typeCheckerState.getSupertypesDeque();
        Intrinsics.checkNotNull(supertypesDeque);
        Set<RigidTypeMarker> supertypesSet = typeCheckerState.getSupertypesSet();
        Intrinsics.checkNotNull(supertypesSet);
        supertypesDeque.push(rigidTypeMarker);
        while (!supertypesDeque.isEmpty()) {
            RigidTypeMarker pop = supertypesDeque.pop();
            Intrinsics.checkNotNull(pop);
            if (supertypesSet.add(pop)) {
                RigidTypeMarker captureFromArguments2 = typeSystemContext.captureFromArguments(pop, CaptureStatus.FOR_SUBTYPING);
                if (captureFromArguments2 == null) {
                    captureFromArguments2 = pop;
                }
                if (typeSystemContext.areEqualTypeConstructors(typeSystemContext.typeConstructor(captureFromArguments2), typeConstructorMarker)) {
                    smartList.add(captureFromArguments2);
                    substitutionSupertypePolicy = TypeCheckerState.SupertypesPolicy.None.INSTANCE;
                } else if (typeSystemContext.argumentsCount(captureFromArguments2) == 0) {
                    substitutionSupertypePolicy = TypeCheckerState.SupertypesPolicy.LowerIfFlexible.INSTANCE;
                } else {
                    substitutionSupertypePolicy = typeCheckerState.getTypeSystemContext().substitutionSupertypePolicy(captureFromArguments2);
                }
                if (Intrinsics.areEqual(substitutionSupertypePolicy, TypeCheckerState.SupertypesPolicy.None.INSTANCE)) {
                    substitutionSupertypePolicy = null;
                }
                if (substitutionSupertypePolicy != null) {
                    TypeSystemContext typeSystemContext2 = typeCheckerState.getTypeSystemContext();
                    for (KotlinTypeMarker kotlinTypeMarker : typeSystemContext2.supertypes(typeSystemContext2.typeConstructor(pop))) {
                        supertypesDeque.add(substitutionSupertypePolicy.mo1200transformType(typeCheckerState, kotlinTypeMarker));
                    }
                }
            }
        }
        typeCheckerState.clear();
        return smartList;
    }

    public static /* synthetic */ boolean isSubtypeOf$default(AbstractTypeChecker abstractTypeChecker, TypeCheckerState typeCheckerState, KotlinTypeMarker kotlinTypeMarker, KotlinTypeMarker kotlinTypeMarker2, boolean z10, int i10, Object obj) {
        if ((i10 & 8) != 0) {
            z10 = false;
        }
        return abstractTypeChecker.isSubtypeOf(typeCheckerState, kotlinTypeMarker, kotlinTypeMarker2, z10);
    }

    private final List j(TypeCheckerState typeCheckerState, RigidTypeMarker rigidTypeMarker, TypeConstructorMarker typeConstructorMarker) {
        return t(typeCheckerState, i(typeCheckerState, rigidTypeMarker, typeConstructorMarker));
    }

    private final boolean k(TypeCheckerState typeCheckerState, KotlinTypeMarker kotlinTypeMarker, KotlinTypeMarker kotlinTypeMarker2, boolean z10) {
        TypeSystemContext typeSystemContext = typeCheckerState.getTypeSystemContext();
        KotlinTypeMarker prepareType = typeCheckerState.prepareType(typeCheckerState.refineType(kotlinTypeMarker));
        KotlinTypeMarker prepareType2 = typeCheckerState.prepareType(typeCheckerState.refineType(kotlinTypeMarker2));
        if (typeCheckerState.isDnnTypesEqualToFlexible() && typeSystemContext.isFlexible(prepareType) && typeSystemContext.isDefinitelyNotNullType(prepareType2)) {
            AbstractTypeChecker abstractTypeChecker = INSTANCE;
            FlexibleTypeMarker asFlexibleType = typeSystemContext.asFlexibleType(prepareType);
            Intrinsics.checkNotNull(asFlexibleType);
            RigidTypeMarker lowerBound = typeSystemContext.lowerBound(asFlexibleType);
            RigidTypeMarker asRigidType = typeSystemContext.asRigidType(prepareType2);
            Intrinsics.checkNotNull(asRigidType);
            return abstractTypeChecker.k(typeCheckerState, lowerBound, typeSystemContext.originalIfDefinitelyNotNullable(asRigidType), z10);
        }
        AbstractTypeChecker abstractTypeChecker2 = INSTANCE;
        Boolean h10 = abstractTypeChecker2.h(typeCheckerState, typeSystemContext.lowerBoundIfFlexible(prepareType), typeSystemContext.upperBoundIfFlexible(prepareType2));
        if (h10 != null) {
            boolean booleanValue = h10.booleanValue();
            typeCheckerState.addSubtypeConstraint(prepareType, prepareType2, z10);
            return booleanValue;
        }
        Boolean addSubtypeConstraint = typeCheckerState.addSubtypeConstraint(prepareType, prepareType2, z10);
        if (addSubtypeConstraint != null) {
            return addSubtypeConstraint.booleanValue();
        }
        return abstractTypeChecker2.p(typeCheckerState, typeSystemContext.lowerBoundIfFlexible(prepareType), typeSystemContext.upperBoundIfFlexible(prepareType2));
    }

    private final TypeParameterMarker l(TypeSystemContext typeSystemContext, KotlinTypeMarker kotlinTypeMarker, KotlinTypeMarker kotlinTypeMarker2) {
        KotlinTypeMarker type;
        boolean z10;
        int argumentsCount = typeSystemContext.argumentsCount(kotlinTypeMarker);
        int i10 = 0;
        while (true) {
            TypeArgumentMarker typeArgumentMarker = null;
            if (i10 >= argumentsCount) {
                return null;
            }
            TypeArgumentMarker argument = typeSystemContext.getArgument(kotlinTypeMarker, i10);
            if (!typeSystemContext.isStarProjection(argument)) {
                typeArgumentMarker = argument;
            }
            if (typeArgumentMarker != null && (type = typeSystemContext.getType(typeArgumentMarker)) != null) {
                if (typeSystemContext.isCapturedType(typeSystemContext.lowerBoundIfFlexible(type)) && typeSystemContext.isCapturedType(typeSystemContext.lowerBoundIfFlexible(kotlinTypeMarker2))) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                if (Intrinsics.areEqual(type, kotlinTypeMarker2) || (z10 && Intrinsics.areEqual(typeSystemContext.typeConstructor(type), typeSystemContext.typeConstructor(kotlinTypeMarker2)))) {
                    break;
                }
                TypeParameterMarker l10 = l(typeSystemContext, type, kotlinTypeMarker2);
                if (l10 != null) {
                    return l10;
                }
            }
            i10++;
        }
        return typeSystemContext.getParameter(typeSystemContext.typeConstructor(kotlinTypeMarker), i10);
    }

    private final boolean m(TypeCheckerState typeCheckerState, RigidTypeMarker rigidTypeMarker) {
        TypeCheckerState.SupertypesPolicy supertypesPolicy;
        TypeSystemContext typeSystemContext = typeCheckerState.getTypeSystemContext();
        TypeConstructorMarker typeConstructor = typeSystemContext.typeConstructor(rigidTypeMarker);
        if (typeSystemContext.isClassTypeConstructor(typeConstructor)) {
            return typeSystemContext.isNothingConstructor(typeConstructor);
        }
        if (typeSystemContext.isNothingConstructor(typeSystemContext.typeConstructor(rigidTypeMarker))) {
            return true;
        }
        typeCheckerState.initialize();
        ArrayDeque<RigidTypeMarker> supertypesDeque = typeCheckerState.getSupertypesDeque();
        Intrinsics.checkNotNull(supertypesDeque);
        Set<RigidTypeMarker> supertypesSet = typeCheckerState.getSupertypesSet();
        Intrinsics.checkNotNull(supertypesSet);
        supertypesDeque.push(rigidTypeMarker);
        while (!supertypesDeque.isEmpty()) {
            RigidTypeMarker pop = supertypesDeque.pop();
            Intrinsics.checkNotNull(pop);
            if (supertypesSet.add(pop)) {
                if (typeSystemContext.isClassType(pop)) {
                    supertypesPolicy = TypeCheckerState.SupertypesPolicy.None.INSTANCE;
                } else {
                    supertypesPolicy = TypeCheckerState.SupertypesPolicy.LowerIfFlexible.INSTANCE;
                }
                if (Intrinsics.areEqual(supertypesPolicy, TypeCheckerState.SupertypesPolicy.None.INSTANCE)) {
                    supertypesPolicy = null;
                }
                if (supertypesPolicy == null) {
                    continue;
                } else {
                    TypeSystemContext typeSystemContext2 = typeCheckerState.getTypeSystemContext();
                    for (KotlinTypeMarker kotlinTypeMarker : typeSystemContext2.supertypes(typeSystemContext2.typeConstructor(pop))) {
                        RigidTypeMarker mo1200transformType = supertypesPolicy.mo1200transformType(typeCheckerState, kotlinTypeMarker);
                        if (typeSystemContext.isNothingConstructor(typeSystemContext.typeConstructor(mo1200transformType))) {
                            typeCheckerState.clear();
                            return true;
                        }
                        supertypesDeque.add(mo1200transformType);
                    }
                    continue;
                }
            }
        }
        typeCheckerState.clear();
        return false;
    }

    private final boolean n(TypeSystemContext typeSystemContext, KotlinTypeMarker kotlinTypeMarker) {
        if (typeSystemContext.isDenotable(typeSystemContext.typeConstructor(kotlinTypeMarker)) && !typeSystemContext.isDynamic(kotlinTypeMarker) && !typeSystemContext.isDefinitelyNotNullType(kotlinTypeMarker) && !typeSystemContext.isNotNullTypeParameter(kotlinTypeMarker) && !typeSystemContext.isFlexibleWithDifferentTypeConstructors(kotlinTypeMarker)) {
            return true;
        }
        return false;
    }

    private final boolean o(TypeSystemContext typeSystemContext, RigidTypeMarker rigidTypeMarker, RigidTypeMarker rigidTypeMarker2) {
        if (typeSystemContext.typeConstructor(rigidTypeMarker) != typeSystemContext.typeConstructor(rigidTypeMarker2)) {
            return false;
        }
        if (!typeSystemContext.isDefinitelyNotNullType(rigidTypeMarker) && typeSystemContext.isDefinitelyNotNullType(rigidTypeMarker2)) {
            return false;
        }
        if (typeSystemContext.isMarkedNullable(rigidTypeMarker) && !typeSystemContext.isMarkedNullable(rigidTypeMarker2)) {
            return false;
        }
        return true;
    }

    /* JADX WARN: Removed duplicated region for block: B:160:0x00e2  */
    /* JADX WARN: Removed duplicated region for block: B:197:0x01b3  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final boolean p(kotlin.reflect.jvm.internal.impl.types.TypeCheckerState r18, kotlin.reflect.jvm.internal.impl.types.model.RigidTypeMarker r19, kotlin.reflect.jvm.internal.impl.types.model.RigidTypeMarker r20) {
        /*
            Method dump skipped, instructions count: 442
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.types.AbstractTypeChecker.p(kotlin.reflect.jvm.internal.impl.types.TypeCheckerState, kotlin.reflect.jvm.internal.impl.types.model.RigidTypeMarker, kotlin.reflect.jvm.internal.impl.types.model.RigidTypeMarker):boolean");
    }

    public static final Unit q(Collection collection, TypeCheckerState typeCheckerState, TypeSystemContext typeSystemContext, RigidTypeMarker rigidTypeMarker, TypeCheckerState.ForkPointContext runForkingPoint) {
        Intrinsics.checkNotNullParameter(runForkingPoint, "$this$runForkingPoint");
        Iterator it = collection.iterator();
        while (it.hasNext()) {
            runForkingPoint.fork(new b(typeCheckerState, typeSystemContext, (RigidTypeMarker) it.next(), rigidTypeMarker));
        }
        return Unit.f33282a;
    }

    public static final boolean r(TypeCheckerState typeCheckerState, TypeSystemContext typeSystemContext, RigidTypeMarker rigidTypeMarker, RigidTypeMarker rigidTypeMarker2) {
        return INSTANCE.isSubtypeForSameConstructor(typeCheckerState, typeSystemContext.asArgumentList(rigidTypeMarker), rigidTypeMarker2);
    }

    private final boolean s(TypeSystemContext typeSystemContext, KotlinTypeMarker kotlinTypeMarker, KotlinTypeMarker kotlinTypeMarker2, TypeConstructorMarker typeConstructorMarker) {
        TypeVariableTypeConstructorMarker typeVariableTypeConstructorMarker;
        TypeParameterMarker typeParameter;
        RigidTypeMarker asRigidType = typeSystemContext.asRigidType(kotlinTypeMarker);
        if (asRigidType instanceof CapturedTypeMarker) {
            CapturedTypeMarker capturedTypeMarker = (CapturedTypeMarker) asRigidType;
            if (typeSystemContext.isOldCapturedType(capturedTypeMarker) || !typeSystemContext.isStarProjection(typeSystemContext.projection(typeSystemContext.typeConstructor(capturedTypeMarker))) || typeSystemContext.captureStatus(capturedTypeMarker) != CaptureStatus.FOR_SUBTYPING) {
                return false;
            }
            TypeConstructorMarker typeConstructor = typeSystemContext.typeConstructor(kotlinTypeMarker2);
            if (typeConstructor instanceof TypeVariableTypeConstructorMarker) {
                typeVariableTypeConstructorMarker = (TypeVariableTypeConstructorMarker) typeConstructor;
            } else {
                typeVariableTypeConstructorMarker = null;
            }
            if (typeVariableTypeConstructorMarker != null && (typeParameter = typeSystemContext.getTypeParameter(typeVariableTypeConstructorMarker)) != null && typeSystemContext.hasRecursiveBounds(typeParameter, typeConstructorMarker)) {
                return true;
            }
        }
        return false;
    }

    private final List t(TypeCheckerState typeCheckerState, List list) {
        FlexibleTypeMarker flexibleTypeMarker;
        TypeSystemContext typeSystemContext = typeCheckerState.getTypeSystemContext();
        if (list.size() >= 2) {
            ArrayList arrayList = new ArrayList();
            for (Object obj : list) {
                TypeArgumentListMarker asArgumentList = typeSystemContext.asArgumentList((RigidTypeMarker) obj);
                int size = typeSystemContext.size(asArgumentList);
                int i10 = 0;
                while (true) {
                    if (i10 < size) {
                        KotlinTypeMarker type = typeSystemContext.getType(typeSystemContext.get(asArgumentList, i10));
                        if (type != null) {
                            flexibleTypeMarker = typeSystemContext.asFlexibleType(type);
                        } else {
                            flexibleTypeMarker = null;
                        }
                        if (flexibleTypeMarker == null) {
                            i10++;
                        }
                    } else {
                        arrayList.add(obj);
                        break;
                    }
                }
            }
            if (!arrayList.isEmpty()) {
                return arrayList;
            }
        }
        return list;
    }

    public final TypeVariance effectiveVariance(@NotNull TypeVariance declared, @NotNull TypeVariance useSite) {
        Intrinsics.checkNotNullParameter(declared, "declared");
        Intrinsics.checkNotNullParameter(useSite, "useSite");
        TypeVariance typeVariance = TypeVariance.INV;
        if (declared == typeVariance) {
            return useSite;
        }
        if (useSite == typeVariance || declared == useSite) {
            return declared;
        }
        return null;
    }

    public final boolean equalTypes(@NotNull TypeCheckerState state, @NotNull KotlinTypeMarker a10, @NotNull KotlinTypeMarker b10) {
        Intrinsics.checkNotNullParameter(state, "state");
        Intrinsics.checkNotNullParameter(a10, "a");
        Intrinsics.checkNotNullParameter(b10, "b");
        TypeSystemContext typeSystemContext = state.getTypeSystemContext();
        if (a10 == b10) {
            return true;
        }
        AbstractTypeChecker abstractTypeChecker = INSTANCE;
        if (abstractTypeChecker.n(typeSystemContext, a10) && abstractTypeChecker.n(typeSystemContext, b10)) {
            KotlinTypeMarker prepareType = state.prepareType(state.refineType(a10));
            KotlinTypeMarker prepareType2 = state.prepareType(state.refineType(b10));
            RigidTypeMarker lowerBoundIfFlexible = typeSystemContext.lowerBoundIfFlexible(prepareType);
            if (!typeSystemContext.areEqualTypeConstructors(typeSystemContext.typeConstructor(prepareType), typeSystemContext.typeConstructor(prepareType2))) {
                return false;
            }
            if (typeSystemContext.argumentsCount(lowerBoundIfFlexible) == 0) {
                if (typeSystemContext.hasFlexibleNullability(prepareType) || typeSystemContext.hasFlexibleNullability(prepareType2) || typeSystemContext.isMarkedNullable(lowerBoundIfFlexible) == typeSystemContext.isMarkedNullable(typeSystemContext.lowerBoundIfFlexible(prepareType2))) {
                    return true;
                }
                return false;
            }
        }
        if (isSubtypeOf$default(abstractTypeChecker, state, a10, b10, false, 8, null) && isSubtypeOf$default(abstractTypeChecker, state, b10, a10, false, 8, null)) {
            return true;
        }
        return false;
    }

    @NotNull
    public final List<RigidTypeMarker> findCorrespondingSupertypes(@NotNull TypeCheckerState state, @NotNull RigidTypeMarker subType, @NotNull TypeConstructorMarker superConstructor) {
        TypeCheckerState.SupertypesPolicy supertypesPolicy;
        Intrinsics.checkNotNullParameter(state, "state");
        Intrinsics.checkNotNullParameter(subType, "subType");
        Intrinsics.checkNotNullParameter(superConstructor, "superConstructor");
        TypeSystemContext typeSystemContext = state.getTypeSystemContext();
        if (typeSystemContext.isClassType(subType)) {
            return INSTANCE.j(state, subType, superConstructor);
        }
        if (!typeSystemContext.isClassTypeConstructor(superConstructor) && !typeSystemContext.isIntegerLiteralTypeConstructor(superConstructor)) {
            return INSTANCE.i(state, subType, superConstructor);
        }
        SmartList<RigidTypeMarker> smartList = new SmartList();
        state.initialize();
        ArrayDeque<RigidTypeMarker> supertypesDeque = state.getSupertypesDeque();
        Intrinsics.checkNotNull(supertypesDeque);
        Set<RigidTypeMarker> supertypesSet = state.getSupertypesSet();
        Intrinsics.checkNotNull(supertypesSet);
        supertypesDeque.push(subType);
        while (!supertypesDeque.isEmpty()) {
            RigidTypeMarker pop = supertypesDeque.pop();
            Intrinsics.checkNotNull(pop);
            if (supertypesSet.add(pop)) {
                if (typeSystemContext.isClassType(pop)) {
                    smartList.add(pop);
                    supertypesPolicy = TypeCheckerState.SupertypesPolicy.None.INSTANCE;
                } else {
                    supertypesPolicy = TypeCheckerState.SupertypesPolicy.LowerIfFlexible.INSTANCE;
                }
                if (Intrinsics.areEqual(supertypesPolicy, TypeCheckerState.SupertypesPolicy.None.INSTANCE)) {
                    supertypesPolicy = null;
                }
                if (supertypesPolicy != null) {
                    TypeSystemContext typeSystemContext2 = state.getTypeSystemContext();
                    for (KotlinTypeMarker kotlinTypeMarker : typeSystemContext2.supertypes(typeSystemContext2.typeConstructor(pop))) {
                        supertypesDeque.add(supertypesPolicy.mo1200transformType(state, kotlinTypeMarker));
                    }
                }
            }
        }
        state.clear();
        ArrayList arrayList = new ArrayList();
        for (RigidTypeMarker rigidTypeMarker : smartList) {
            AbstractTypeChecker abstractTypeChecker = INSTANCE;
            Intrinsics.checkNotNull(rigidTypeMarker);
            CollectionsKt.B(arrayList, abstractTypeChecker.j(state, rigidTypeMarker, superConstructor));
        }
        return arrayList;
    }

    public final boolean isSubtypeForSameConstructor(@NotNull TypeCheckerState typeCheckerState, @NotNull TypeArgumentListMarker capturedSubArguments, @NotNull RigidTypeMarker superType) {
        int i10;
        int i11;
        boolean equalTypes;
        int i12;
        TypeCheckerState typeCheckerState2 = typeCheckerState;
        Intrinsics.checkNotNullParameter(typeCheckerState2, "<this>");
        Intrinsics.checkNotNullParameter(capturedSubArguments, "capturedSubArguments");
        Intrinsics.checkNotNullParameter(superType, "superType");
        TypeSystemContext typeSystemContext = typeCheckerState2.getTypeSystemContext();
        TypeConstructorMarker typeConstructor = typeSystemContext.typeConstructor(superType);
        int size = typeSystemContext.size(capturedSubArguments);
        int parametersCount = typeSystemContext.parametersCount(typeConstructor);
        if (size != parametersCount || size != typeSystemContext.argumentsCount(superType)) {
            return false;
        }
        for (int i13 = 0; i13 < parametersCount; i13++) {
            TypeArgumentMarker argument = typeSystemContext.getArgument(superType, i13);
            KotlinTypeMarker type = typeSystemContext.getType(argument);
            if (type != null) {
                TypeArgumentMarker typeArgumentMarker = typeSystemContext.get(capturedSubArguments, i13);
                typeSystemContext.getVariance(typeArgumentMarker);
                TypeVariance typeVariance = TypeVariance.INV;
                KotlinTypeMarker type2 = typeSystemContext.getType(typeArgumentMarker);
                Intrinsics.checkNotNull(type2);
                AbstractTypeChecker abstractTypeChecker = INSTANCE;
                TypeVariance effectiveVariance = abstractTypeChecker.effectiveVariance(typeSystemContext.getVariance(typeSystemContext.getParameter(typeConstructor, i13)), typeSystemContext.getVariance(argument));
                if (effectiveVariance == null) {
                    return typeCheckerState2.isErrorTypeEqualsToAnything();
                }
                if (effectiveVariance != typeVariance || (!abstractTypeChecker.s(typeSystemContext, type2, type, typeConstructor) && !abstractTypeChecker.s(typeSystemContext, type, type2, typeConstructor))) {
                    i10 = typeCheckerState2.f35885h;
                    if (i10 <= 100) {
                        i11 = typeCheckerState2.f35885h;
                        typeCheckerState2.f35885h = i11 + 1;
                        int i14 = WhenMappings.$EnumSwitchMapping$0[effectiveVariance.ordinal()];
                        if (i14 != 1) {
                            if (i14 != 2) {
                                if (i14 == 3) {
                                    equalTypes = isSubtypeOf$default(abstractTypeChecker, typeCheckerState2, type, type2, false, 8, null);
                                    typeCheckerState2 = typeCheckerState;
                                } else {
                                    throw new ir.p();
                                }
                            } else {
                                typeCheckerState2 = typeCheckerState;
                                equalTypes = isSubtypeOf$default(abstractTypeChecker, typeCheckerState2, type2, type, false, 8, null);
                            }
                        } else {
                            equalTypes = abstractTypeChecker.equalTypes(typeCheckerState2, type2, type);
                        }
                        i12 = typeCheckerState2.f35885h;
                        typeCheckerState2.f35885h = i12 - 1;
                        if (!equalTypes) {
                            return false;
                        }
                    } else {
                        throw new IllegalStateException(("Arguments depth is too high. Some related argument: " + type2).toString());
                    }
                }
            }
        }
        return true;
    }

    public final boolean isSubtypeOf(@NotNull TypeCheckerState state, @NotNull KotlinTypeMarker subType, @NotNull KotlinTypeMarker superType) {
        Intrinsics.checkNotNullParameter(state, "state");
        Intrinsics.checkNotNullParameter(subType, "subType");
        Intrinsics.checkNotNullParameter(superType, "superType");
        return isSubtypeOf$default(this, state, subType, superType, false, 8, null);
    }

    public final boolean isSubtypeOf(@NotNull TypeCheckerState state, @NotNull KotlinTypeMarker subType, @NotNull KotlinTypeMarker superType, boolean z10) {
        Intrinsics.checkNotNullParameter(state, "state");
        Intrinsics.checkNotNullParameter(subType, "subType");
        Intrinsics.checkNotNullParameter(superType, "superType");
        if (subType == superType) {
            return true;
        }
        if (state.customIsSubtypeOf(subType, superType)) {
            return k(state, subType, superType, z10);
        }
        return false;
    }
}
