package as;

import cs.t2;
import cs.x0;
import cs.x2;
import ir.p;
import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KType;
import kotlin.reflect.KTypeProjection;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.KotlinTypeFactory;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import kotlin.reflect.jvm.internal.impl.types.StarProjectionImpl;
import kotlin.reflect.jvm.internal.impl.types.TypeAttributes;
import kotlin.reflect.jvm.internal.impl.types.TypeConstructor;
import kotlin.reflect.jvm.internal.impl.types.TypeProjectionBase;
import kotlin.reflect.jvm.internal.impl.types.TypeProjectionImpl;
import kotlin.reflect.jvm.internal.impl.types.Variance;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
import kotlin.reflect.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class d {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f6755a;

        static {
            int[] iArr = new int[m.values().length];
            try {
                iArr[m.f36121d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[m.f36122e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[m.f36123i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f6755a = iArr;
        }
    }

    private static final SimpleType a(TypeAttributes typeAttributes, TypeConstructor typeConstructor, List list, boolean z10) {
        KotlinType kotlinType;
        int i10;
        TypeProjectionBase starProjectionImpl;
        List<TypeParameterDescriptor> parameters = typeConstructor.getParameters();
        Intrinsics.checkNotNullExpressionValue(parameters, "getParameters(...)");
        List list2 = list;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list2, 10));
        int i11 = 0;
        for (Object obj : list2) {
            int i12 = i11 + 1;
            if (i11 < 0) {
                CollectionsKt.v();
            }
            KTypeProjection kTypeProjection = (KTypeProjection) obj;
            t2 t2Var = (t2) kTypeProjection.c();
            if (t2Var != null) {
                kotlinType = t2Var.l();
            } else {
                kotlinType = null;
            }
            m d10 = kTypeProjection.d();
            if (d10 == null) {
                i10 = -1;
            } else {
                i10 = a.f6755a[d10.ordinal()];
            }
            if (i10 != -1) {
                if (i10 != 1) {
                    if (i10 != 2) {
                        if (i10 == 3) {
                            Variance variance = Variance.OUT_VARIANCE;
                            Intrinsics.checkNotNull(kotlinType);
                            starProjectionImpl = new TypeProjectionImpl(variance, kotlinType);
                        } else {
                            throw new p();
                        }
                    } else {
                        Variance variance2 = Variance.IN_VARIANCE;
                        Intrinsics.checkNotNull(kotlinType);
                        starProjectionImpl = new TypeProjectionImpl(variance2, kotlinType);
                    }
                } else {
                    Variance variance3 = Variance.INVARIANT;
                    Intrinsics.checkNotNull(kotlinType);
                    starProjectionImpl = new TypeProjectionImpl(variance3, kotlinType);
                }
            } else {
                TypeParameterDescriptor typeParameterDescriptor = parameters.get(i11);
                Intrinsics.checkNotNullExpressionValue(typeParameterDescriptor, "get(...)");
                starProjectionImpl = new StarProjectionImpl(typeParameterDescriptor);
            }
            arrayList.add(starProjectionImpl);
            i11 = i12;
        }
        return KotlinTypeFactory.simpleType$default(typeAttributes, typeConstructor, arrayList, z10, (KotlinTypeRefiner) null, 16, (Object) null);
    }

    public static final KType b(kotlin.reflect.d dVar, List arguments, boolean z10, List annotations) {
        x0 x0Var;
        ClassifierDescriptor descriptor;
        TypeAttributes empty;
        Intrinsics.checkNotNullParameter(dVar, "<this>");
        Intrinsics.checkNotNullParameter(arguments, "arguments");
        Intrinsics.checkNotNullParameter(annotations, "annotations");
        if (dVar instanceof x0) {
            x0Var = (x0) dVar;
        } else {
            x0Var = null;
        }
        if (x0Var != null && (descriptor = x0Var.getDescriptor()) != null) {
            TypeConstructor typeConstructor = descriptor.getTypeConstructor();
            Intrinsics.checkNotNullExpressionValue(typeConstructor, "getTypeConstructor(...)");
            List<TypeParameterDescriptor> parameters = typeConstructor.getParameters();
            Intrinsics.checkNotNullExpressionValue(parameters, "getParameters(...)");
            if (parameters.size() == arguments.size()) {
                if (annotations.isEmpty()) {
                    empty = TypeAttributes.Companion.getEmpty();
                } else {
                    empty = TypeAttributes.Companion.getEmpty();
                }
                return new t2(a(empty, typeConstructor, arguments, z10), null, 2, null);
            }
            throw new IllegalArgumentException("Class declares " + parameters.size() + " type parameters, but " + arguments.size() + " were provided.");
        }
        throw new x2("Cannot create type for an unsupported classifier: " + dVar + " (" + dVar.getClass() + ')');
    }
}
