package cs;

import cs.z2;
import java.lang.reflect.Array;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.lang.reflect.WildcardType;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import kotlin.Lazy;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KCallable;
import kotlin.reflect.KType;
import kotlin.reflect.KVisibility;
import kotlin.reflect.i;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DescriptorVisibility;
import kotlin.reflect.jvm.internal.impl.descriptors.Modality;
import kotlin.reflect.jvm.internal.impl.descriptors.ParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ReceiverParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ValueParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.load.java.descriptors.JavaCallableMemberDescriptor;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.TypeSubstitutionKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a0 implements KCallable, w2 {

    /* renamed from: d  reason: collision with root package name */
    private final z2.a f21088d;

    /* renamed from: e  reason: collision with root package name */
    private final z2.a f21089e;

    /* renamed from: i  reason: collision with root package name */
    private final z2.a f21090i;

    /* renamed from: o  reason: collision with root package name */
    private final z2.a f21091o;

    /* renamed from: p  reason: collision with root package name */
    private final z2.a f21092p;

    /* renamed from: q  reason: collision with root package name */
    private final Lazy f21093q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Comparator {
        @Override // java.util.Comparator
        public final int compare(Object obj, Object obj2) {
            return lr.a.d(((kotlin.reflect.i) obj).getName(), ((kotlin.reflect.i) obj2).getName());
        }
    }

    public a0() {
        z2.a c10 = z2.c(new q(this));
        Intrinsics.checkNotNullExpressionValue(c10, "lazySoft(...)");
        this.f21088d = c10;
        z2.a c11 = z2.c(new r(this));
        Intrinsics.checkNotNullExpressionValue(c11, "lazySoft(...)");
        this.f21089e = c11;
        z2.a c12 = z2.c(new s(this));
        Intrinsics.checkNotNullExpressionValue(c12, "lazySoft(...)");
        this.f21090i = c12;
        z2.a c13 = z2.c(new t(this));
        Intrinsics.checkNotNullExpressionValue(c13, "lazySoft(...)");
        this.f21091o = c13;
        z2.a c14 = z2.c(new u(this));
        Intrinsics.checkNotNullExpressionValue(c14, "lazySoft(...)");
        this.f21092p = c14;
        this.f21093q = ir.l.a(ir.o.f31103e, new v(this));
    }

    private final int E(kotlin.reflect.i iVar) {
        if (((Boolean) this.f21093q.getValue()).booleanValue()) {
            if (j3.k(iVar.getType())) {
                KType type = iVar.getType();
                Intrinsics.checkNotNull(type, "null cannot be cast to non-null type kotlin.reflect.jvm.internal.KTypeImpl");
                List n10 = ds.o.n(TypeSubstitutionKt.asSimpleType(((t2) type).l()));
                Intrinsics.checkNotNull(n10);
                return n10.size();
            }
            return 1;
        }
        throw new IllegalArgumentException("Check if parametersNeedMFVCFlattening is true before");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean H(a0 a0Var) {
        List<kotlin.reflect.i> parameters = a0Var.getParameters();
        if ((parameters instanceof Collection) && parameters.isEmpty()) {
            return false;
        }
        for (kotlin.reflect.i iVar : parameters) {
            if (j3.k(iVar.getType())) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Object[] c(a0 a0Var) {
        int i10;
        int i11;
        List<kotlin.reflect.i> parameters = a0Var.getParameters();
        int size = parameters.size() + (a0Var.isSuspend() ? 1 : 0);
        if (((Boolean) a0Var.f21093q.getValue()).booleanValue()) {
            i10 = 0;
            for (kotlin.reflect.i iVar : parameters) {
                if (iVar.getKind() == i.a.f33400i) {
                    i11 = a0Var.E(iVar);
                } else {
                    i11 = 0;
                }
                i10 += i11;
            }
        } else {
            List<kotlin.reflect.i> list = parameters;
            if ((list instanceof Collection) && list.isEmpty()) {
                i10 = 0;
            } else {
                i10 = 0;
                for (kotlin.reflect.i iVar2 : list) {
                    if (iVar2.getKind() == i.a.f33400i && (i10 = i10 + 1) < 0) {
                        CollectionsKt.u();
                    }
                }
            }
        }
        int i12 = (i10 + 31) / 32;
        Object[] objArr = new Object[size + i12 + 1];
        for (kotlin.reflect.i iVar3 : parameters) {
            if (iVar3.b() && !j3.l(iVar3.getType())) {
                objArr[iVar3.getIndex()] = j3.g(bs.c.f(iVar3.getType()));
            } else if (iVar3.isVararg()) {
                objArr[iVar3.getIndex()] = a0Var.x(iVar3.getType());
            }
        }
        for (int i13 = 0; i13 < i12; i13++) {
            objArr[size + i13] = 0;
        }
        return objArr;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final List d(a0 a0Var) {
        return j3.e(a0Var.D());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ArrayList e(a0 a0Var) {
        int i10;
        CallableMemberDescriptor D = a0Var.D();
        ArrayList arrayList = new ArrayList();
        int i11 = 0;
        if (!a0Var.G()) {
            ReceiverParameterDescriptor i12 = j3.i(D);
            if (i12 != null) {
                arrayList.add(new x1(a0Var, 0, i.a.f33398d, new w(i12)));
                i10 = 1;
            } else {
                i10 = 0;
            }
            ReceiverParameterDescriptor extensionReceiverParameter = D.getExtensionReceiverParameter();
            if (extensionReceiverParameter != null) {
                arrayList.add(new x1(a0Var, i10, i.a.f33399e, new x(extensionReceiverParameter)));
                i10++;
            }
        } else {
            i10 = 0;
        }
        int size = D.getValueParameters().size();
        while (i11 < size) {
            arrayList.add(new x1(a0Var, i10, i.a.f33400i, new y(D, i11)));
            i11++;
            i10++;
        }
        if (a0Var.F() && (D instanceof JavaCallableMemberDescriptor) && arrayList.size() > 1) {
            CollectionsKt.A(arrayList, new a());
        }
        arrayList.trimToSize();
        return arrayList;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ParameterDescriptor h(CallableMemberDescriptor callableMemberDescriptor, int i10) {
        ValueParameterDescriptor valueParameterDescriptor = callableMemberDescriptor.getValueParameters().get(i10);
        Intrinsics.checkNotNullExpressionValue(valueParameterDescriptor, "get(...)");
        return valueParameterDescriptor;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final t2 i(a0 a0Var) {
        KotlinType returnType = a0Var.D().getReturnType();
        Intrinsics.checkNotNull(returnType);
        return new t2(returnType, new z(a0Var));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Type j(a0 a0Var) {
        Type y10 = a0Var.y();
        if (y10 == null) {
            return a0Var.A().getReturnType();
        }
        return y10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final List k(a0 a0Var) {
        List<TypeParameterDescriptor> typeParameters = a0Var.D().getTypeParameters();
        Intrinsics.checkNotNullExpressionValue(typeParameters, "getTypeParameters(...)");
        List<TypeParameterDescriptor> list = typeParameters;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (TypeParameterDescriptor typeParameterDescriptor : list) {
            Intrinsics.checkNotNull(typeParameterDescriptor);
            arrayList.add(new v2(a0Var, typeParameterDescriptor));
        }
        return arrayList;
    }

    private final Object v(Map map) {
        Object x10;
        List<kotlin.reflect.i> parameters = getParameters();
        ArrayList arrayList = new ArrayList(CollectionsKt.w(parameters, 10));
        for (kotlin.reflect.i iVar : parameters) {
            if (map.containsKey(iVar)) {
                x10 = map.get(iVar);
                if (x10 == null) {
                    throw new IllegalArgumentException("Annotation argument value cannot be null (" + iVar + ')');
                }
            } else if (iVar.b()) {
                x10 = null;
            } else if (iVar.isVararg()) {
                x10 = x(iVar.getType());
            } else {
                throw new IllegalArgumentException("No argument provided for a required parameter: " + iVar);
            }
            arrayList.add(x10);
        }
        ds.h C = C();
        if (C != null) {
            try {
                return C.call(arrayList.toArray(new Object[0]));
            } catch (IllegalAccessException e10) {
                throw new as.a(e10);
            }
        }
        throw new x2("This callable does not support a default call: " + D());
    }

    private final Object x(KType kType) {
        Class b10 = vr.a.b(bs.b.b(kType));
        if (b10.isArray()) {
            Object newInstance = Array.newInstance(b10.getComponentType(), 0);
            Intrinsics.checkNotNullExpressionValue(newInstance, "run(...)");
            return newInstance;
        }
        throw new x2("Cannot instantiate the default empty array of type " + b10.getSimpleName() + ", because it is not an array type");
    }

    private final Type y() {
        ParameterizedType parameterizedType;
        Type type;
        WildcardType wildcardType;
        Type[] lowerBounds;
        if (isSuspend()) {
            Object B0 = CollectionsKt.B0(A().a());
            if (B0 instanceof ParameterizedType) {
                parameterizedType = (ParameterizedType) B0;
            } else {
                parameterizedType = null;
            }
            if (parameterizedType != null) {
                type = parameterizedType.getRawType();
            } else {
                type = null;
            }
            if (Intrinsics.areEqual(type, Continuation.class)) {
                Type[] actualTypeArguments = parameterizedType.getActualTypeArguments();
                Intrinsics.checkNotNullExpressionValue(actualTypeArguments, "getActualTypeArguments(...)");
                Object C0 = kotlin.collections.i.C0(actualTypeArguments);
                if (C0 instanceof WildcardType) {
                    wildcardType = (WildcardType) C0;
                } else {
                    wildcardType = null;
                }
                if (wildcardType != null && (lowerBounds = wildcardType.getLowerBounds()) != null) {
                    return (Type) kotlin.collections.i.U(lowerBounds);
                }
            }
        }
        return null;
    }

    private final Object[] z() {
        return (Object[]) ((Object[]) this.f21092p.invoke()).clone();
    }

    public abstract ds.h A();

    public abstract c1 B();

    public abstract ds.h C();

    public abstract CallableMemberDescriptor D();

    /* JADX INFO: Access modifiers changed from: protected */
    public final boolean F() {
        if (Intrinsics.areEqual(getName(), "<init>") && B().getJClass().isAnnotation()) {
            return true;
        }
        return false;
    }

    public abstract boolean G();

    @Override // kotlin.reflect.KCallable
    public Object call(Object... args) {
        Intrinsics.checkNotNullParameter(args, "args");
        try {
            return A().call(args);
        } catch (IllegalAccessException e10) {
            throw new as.a(e10);
        }
    }

    @Override // kotlin.reflect.KCallable
    public Object callBy(Map args) {
        Intrinsics.checkNotNullParameter(args, "args");
        if (F()) {
            return v(args);
        }
        return w(args, null);
    }

    @Override // kotlin.reflect.b
    public List getAnnotations() {
        Object invoke = this.f21088d.invoke();
        Intrinsics.checkNotNullExpressionValue(invoke, "invoke(...)");
        return (List) invoke;
    }

    @Override // kotlin.reflect.KCallable
    public List getParameters() {
        Object invoke = this.f21089e.invoke();
        Intrinsics.checkNotNullExpressionValue(invoke, "invoke(...)");
        return (List) invoke;
    }

    @Override // kotlin.reflect.KCallable
    public KType getReturnType() {
        Object invoke = this.f21090i.invoke();
        Intrinsics.checkNotNullExpressionValue(invoke, "invoke(...)");
        return (KType) invoke;
    }

    @Override // kotlin.reflect.KCallable
    public List getTypeParameters() {
        Object invoke = this.f21091o.invoke();
        Intrinsics.checkNotNullExpressionValue(invoke, "invoke(...)");
        return (List) invoke;
    }

    @Override // kotlin.reflect.KCallable
    public KVisibility getVisibility() {
        DescriptorVisibility visibility = D().getVisibility();
        Intrinsics.checkNotNullExpressionValue(visibility, "getVisibility(...)");
        return j3.r(visibility);
    }

    @Override // kotlin.reflect.KCallable
    public boolean isAbstract() {
        if (D().getModality() == Modality.ABSTRACT) {
            return true;
        }
        return false;
    }

    @Override // kotlin.reflect.KCallable
    public boolean isFinal() {
        if (D().getModality() == Modality.FINAL) {
            return true;
        }
        return false;
    }

    @Override // kotlin.reflect.KCallable
    public boolean isOpen() {
        if (D().getModality() == Modality.OPEN) {
            return true;
        }
        return false;
    }

    public final Object w(Map args, Continuation continuation) {
        int i10;
        Intrinsics.checkNotNullParameter(args, "args");
        List<kotlin.reflect.i> parameters = getParameters();
        boolean z10 = false;
        if (parameters.isEmpty()) {
            try {
                return A().call(isSuspend() ? new Continuation[]{continuation} : new Continuation[0]);
            } catch (IllegalAccessException e10) {
                throw new as.a(e10);
            }
        }
        int size = parameters.size() + (isSuspend() ? 1 : 0);
        Object[] z11 = z();
        if (isSuspend()) {
            z11[parameters.size()] = continuation;
        }
        boolean booleanValue = ((Boolean) this.f21093q.getValue()).booleanValue();
        int i11 = 0;
        for (kotlin.reflect.i iVar : parameters) {
            if (booleanValue) {
                i10 = E(iVar);
            } else {
                i10 = 1;
            }
            if (args.containsKey(iVar)) {
                z11[iVar.getIndex()] = args.get(iVar);
            } else if (iVar.b()) {
                if (booleanValue) {
                    int i12 = i11 + i10;
                    for (int i13 = i11; i13 < i12; i13++) {
                        int i14 = (i13 / 32) + size;
                        Object obj = z11[i14];
                        Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlin.Int");
                        z11[i14] = Integer.valueOf(((Integer) obj).intValue() | (1 << (i13 % 32)));
                    }
                } else {
                    int i15 = (i11 / 32) + size;
                    Object obj2 = z11[i15];
                    Intrinsics.checkNotNull(obj2, "null cannot be cast to non-null type kotlin.Int");
                    z11[i15] = Integer.valueOf(((Integer) obj2).intValue() | (1 << (i11 % 32)));
                }
                z10 = true;
            } else if (!iVar.isVararg()) {
                throw new IllegalArgumentException("No argument provided for a required parameter: " + iVar);
            }
            if (iVar.getKind() == i.a.f33400i) {
                i11 += i10;
            }
        }
        if (!z10) {
            try {
                ds.h A = A();
                Object[] copyOf = Arrays.copyOf(z11, size);
                Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
                return A.call(copyOf);
            } catch (IllegalAccessException e11) {
                throw new as.a(e11);
            }
        }
        ds.h C = C();
        if (C != null) {
            try {
                return C.call(z11);
            } catch (IllegalAccessException e12) {
                throw new as.a(e12);
            }
        }
        throw new x2("This callable does not support a default call: " + D());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ParameterDescriptor f(ReceiverParameterDescriptor receiverParameterDescriptor) {
        return receiverParameterDescriptor;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ParameterDescriptor g(ReceiverParameterDescriptor receiverParameterDescriptor) {
        return receiverParameterDescriptor;
    }
}
