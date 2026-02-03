package ds;

import ds.l;
import ds.n;
import ds.z2;
import es.a;
import es.i;
import es.n;
import java.lang.reflect.Constructor;
import java.lang.reflect.GenericDeclaration;
import java.lang.reflect.Member;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import kotlin.Lazy;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.CallableReference;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionBase;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.PropertyReference1Impl;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KFunction;
import kotlin.reflect.KProperty;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ConstructorDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ReceiverParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ValueParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.resolve.InlineClassesUtilsKt;
import kotlin.reflect.jvm.internal.impl.resolve.descriptorUtil.DescriptorUtilsKt;
import kotlin.reflect.jvm.internal.impl.resolve.jvm.InlineClassManglingRulesKt;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h1 extends a0 implements FunctionBase, KFunction, l {

    /* renamed from: x  reason: collision with root package name */
    static final /* synthetic */ KProperty[] f22207x = {Reflection.property1(new PropertyReference1Impl(h1.class, "descriptor", "getDescriptor()Lorg/jetbrains/kotlin/descriptors/FunctionDescriptor;", 0))};

    /* renamed from: r  reason: collision with root package name */
    private final c1 f22208r;

    /* renamed from: s  reason: collision with root package name */
    private final String f22209s;

    /* renamed from: t  reason: collision with root package name */
    private final Object f22210t;

    /* renamed from: u  reason: collision with root package name */
    private final z2.a f22211u;

    /* renamed from: v  reason: collision with root package name */
    private final Lazy f22212v;

    /* renamed from: w  reason: collision with root package name */
    private final Lazy f22213w;

    /* synthetic */ h1(c1 c1Var, String str, String str2, FunctionDescriptor functionDescriptor, Object obj, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(c1Var, str, str2, functionDescriptor, (i10 & 16) != 0 ? CallableReference.NO_RECEIVER : obj);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final es.h L(h1 h1Var) {
        Object d10;
        es.h P;
        n g10 = e3.f22189a.g(h1Var.D());
        if (g10 instanceof n.d) {
            if (h1Var.F()) {
                Class<?> jClass = h1Var.B().getJClass();
                List<kotlin.reflect.i> parameters = h1Var.getParameters();
                ArrayList arrayList = new ArrayList(CollectionsKt.w(parameters, 10));
                for (kotlin.reflect.i iVar : parameters) {
                    String name = iVar.getName();
                    Intrinsics.checkNotNull(name);
                    arrayList.add(name);
                }
                return new es.a(jClass, arrayList, a.EnumC0309a.f23159e, a.b.f23163e, null, 16, null);
            }
            d10 = h1Var.B().h(((n.d) g10).b());
        } else if (g10 instanceof n.e) {
            FunctionDescriptor D = h1Var.D();
            DeclarationDescriptor containingDeclaration = D.getContainingDeclaration();
            Intrinsics.checkNotNullExpressionValue(containingDeclaration, "getContainingDeclaration(...)");
            if (InlineClassesUtilsKt.isMultiFieldValueClass(containingDeclaration) && (D instanceof ConstructorDescriptor) && ((ConstructorDescriptor) D).isPrimary()) {
                FunctionDescriptor D2 = h1Var.D();
                c1 B = h1Var.B();
                String b10 = ((n.e) g10).b();
                List<ValueParameterDescriptor> valueParameters = h1Var.D().getValueParameters();
                Intrinsics.checkNotNullExpressionValue(valueParameters, "getValueParameters(...)");
                return new n.b(D2, B, b10, valueParameters);
            }
            n.e eVar = (n.e) g10;
            d10 = h1Var.B().m(eVar.c(), eVar.b());
        } else if (g10 instanceof n.c) {
            d10 = ((n.c) g10).b();
            Intrinsics.checkNotNull(d10, "null cannot be cast to non-null type java.lang.reflect.Member");
        } else if (g10 instanceof n.b) {
            d10 = ((n.b) g10).d();
            Intrinsics.checkNotNull(d10, "null cannot be cast to non-null type java.lang.reflect.Member");
        } else if (g10 instanceof n.a) {
            List d11 = ((n.a) g10).d();
            Class<?> jClass2 = h1Var.B().getJClass();
            List<Method> list = d11;
            ArrayList arrayList2 = new ArrayList(CollectionsKt.w(list, 10));
            for (Method method : list) {
                arrayList2.add(method.getName());
            }
            return new es.a(jClass2, arrayList2, a.EnumC0309a.f23159e, a.b.f23162d, d11);
        } else {
            throw new jr.p();
        }
        if (d10 instanceof Constructor) {
            P = h1Var.M((Constructor) d10, h1Var.D(), false);
        } else if (d10 instanceof Method) {
            Method method2 = (Method) d10;
            if (!Modifier.isStatic(method2.getModifiers())) {
                P = h1Var.N(method2);
            } else if (h1Var.D().getAnnotations().mo1196findAnnotation(j3.j()) != null) {
                P = h1Var.O(method2);
            } else {
                P = h1Var.P(method2, false);
            }
        } else {
            throw new x2("Could not compute caller for function: " + h1Var.D() + " (member = " + d10 + ')');
        }
        return es.o.j(P, h1Var.D(), false, 2, null);
    }

    private final es.i M(Constructor constructor, FunctionDescriptor functionDescriptor, boolean z10) {
        if (!z10 && InlineClassManglingRulesKt.shouldHideConstructorDueToValueClassTypeValueParameters(functionDescriptor)) {
            if (G()) {
                return new i.a(constructor, S());
            }
            return new i.b(constructor);
        } else if (G()) {
            return new i.c(constructor, S());
        } else {
            return new i.e(constructor);
        }
    }

    private final i.h N(Method method) {
        if (G()) {
            return new i.h.a(method, S());
        }
        return new i.h.e(method);
    }

    private final i.h O(Method method) {
        if (G()) {
            return new i.h.b(method);
        }
        return new i.h.f(method);
    }

    private final es.h P(Method method, boolean z10) {
        Object S;
        if (G()) {
            if (V(method)) {
                S = this.f22210t;
            } else {
                S = S();
            }
            return new i.h.c(method, z10, S);
        }
        return new i.h.g(method);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final es.h Q(h1 h1Var) {
        GenericDeclaration genericDeclaration;
        es.h hVar;
        Member b10;
        e3 e3Var = e3.f22189a;
        n g10 = e3Var.g(h1Var.D());
        if (g10 instanceof n.e) {
            FunctionDescriptor D = h1Var.D();
            DeclarationDescriptor containingDeclaration = D.getContainingDeclaration();
            Intrinsics.checkNotNullExpressionValue(containingDeclaration, "getContainingDeclaration(...)");
            if (InlineClassesUtilsKt.isMultiFieldValueClass(containingDeclaration) && (D instanceof ConstructorDescriptor) && ((ConstructorDescriptor) D).isPrimary()) {
                throw new x2(h1Var.D().getContainingDeclaration() + " cannot have default arguments");
            }
            FunctionDescriptor U = h1Var.U(h1Var.D());
            if (U != null) {
                n g11 = e3Var.g(U);
                Intrinsics.checkNotNull(g11, "null cannot be cast to non-null type kotlin.reflect.jvm.internal.JvmFunctionSignature.KotlinFunction");
                n.e eVar = (n.e) g11;
                genericDeclaration = h1Var.B().j(eVar.c(), eVar.b(), true);
            } else {
                c1 B = h1Var.B();
                n.e eVar2 = (n.e) g10;
                String c10 = eVar2.c();
                String b11 = eVar2.b();
                Intrinsics.checkNotNull(h1Var.A().b());
                genericDeclaration = B.j(c10, b11, !Modifier.isStatic(b10.getModifiers()));
            }
        } else if (g10 instanceof n.d) {
            if (h1Var.F()) {
                Class<?> jClass = h1Var.B().getJClass();
                List<kotlin.reflect.i> parameters = h1Var.getParameters();
                ArrayList arrayList = new ArrayList(CollectionsKt.w(parameters, 10));
                for (kotlin.reflect.i iVar : parameters) {
                    String name = iVar.getName();
                    Intrinsics.checkNotNull(name);
                    arrayList.add(name);
                }
                return new es.a(jClass, arrayList, a.EnumC0309a.f23158d, a.b.f23163e, null, 16, null);
            }
            genericDeclaration = h1Var.B().i(((n.d) g10).b());
        } else if (g10 instanceof n.a) {
            List d10 = ((n.a) g10).d();
            Class<?> jClass2 = h1Var.B().getJClass();
            List<Method> list = d10;
            ArrayList arrayList2 = new ArrayList(CollectionsKt.w(list, 10));
            for (Method method : list) {
                arrayList2.add(method.getName());
            }
            return new es.a(jClass2, arrayList2, a.EnumC0309a.f23158d, a.b.f23162d, d10);
        } else {
            genericDeclaration = null;
        }
        if (genericDeclaration instanceof Constructor) {
            hVar = h1Var.M((Constructor) genericDeclaration, h1Var.D(), true);
        } else if (genericDeclaration instanceof Method) {
            if (h1Var.D().getAnnotations().mo1196findAnnotation(j3.j()) != null) {
                DeclarationDescriptor containingDeclaration2 = h1Var.D().getContainingDeclaration();
                Intrinsics.checkNotNull(containingDeclaration2, "null cannot be cast to non-null type org.jetbrains.kotlin.descriptors.ClassDescriptor");
                if (!((ClassDescriptor) containingDeclaration2).isCompanionObject()) {
                    hVar = h1Var.O((Method) genericDeclaration);
                }
            }
            hVar = h1Var.P((Method) genericDeclaration, h1Var.A().c());
        } else {
            hVar = null;
        }
        if (hVar == null) {
            return null;
        }
        return es.o.i(hVar, h1Var.D(), true);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final FunctionDescriptor R(h1 h1Var, String str) {
        return h1Var.B().k(str, h1Var.f22209s);
    }

    private final Object S() {
        return es.o.h(this.f22210t, D());
    }

    private final FunctionDescriptor U(FunctionDescriptor functionDescriptor) {
        Object obj;
        List<ValueParameterDescriptor> valueParameters = functionDescriptor.getValueParameters();
        Intrinsics.checkNotNullExpressionValue(valueParameters, "getValueParameters(...)");
        List<ValueParameterDescriptor> list = valueParameters;
        if (!(list instanceof Collection) || !list.isEmpty()) {
            for (ValueParameterDescriptor valueParameterDescriptor : list) {
                if (valueParameterDescriptor.declaresDefaultValue()) {
                    break;
                }
            }
        }
        DeclarationDescriptor containingDeclaration = functionDescriptor.getContainingDeclaration();
        Intrinsics.checkNotNullExpressionValue(containingDeclaration, "getContainingDeclaration(...)");
        if (InlineClassesUtilsKt.isValueClass(containingDeclaration)) {
            Member b10 = A().b();
            Intrinsics.checkNotNull(b10);
            if (Modifier.isStatic(b10.getModifiers())) {
                Iterator it = DescriptorUtilsKt.overriddenTreeAsSequence(functionDescriptor, false).iterator();
                loop0: while (true) {
                    if (it.hasNext()) {
                        obj = it.next();
                        List<ValueParameterDescriptor> valueParameters2 = ((CallableMemberDescriptor) obj).getValueParameters();
                        Intrinsics.checkNotNullExpressionValue(valueParameters2, "getValueParameters(...)");
                        List<ValueParameterDescriptor> list2 = valueParameters2;
                        if (!(list2 instanceof Collection) || !list2.isEmpty()) {
                            for (ValueParameterDescriptor valueParameterDescriptor2 : list2) {
                                if (valueParameterDescriptor2.declaresDefaultValue()) {
                                    break loop0;
                                }
                            }
                            continue;
                        }
                    } else {
                        obj = null;
                        break;
                    }
                }
                if (obj instanceof FunctionDescriptor) {
                    return (FunctionDescriptor) obj;
                }
            }
        }
        return null;
    }

    private final boolean V(Method method) {
        KotlinType type;
        ReceiverParameterDescriptor dispatchReceiverParameter = D().getDispatchReceiverParameter();
        if (dispatchReceiverParameter != null && (type = dispatchReceiverParameter.getType()) != null && InlineClassesUtilsKt.isInlineClassType(type)) {
            Class<?>[] parameterTypes = method.getParameterTypes();
            Intrinsics.checkNotNullExpressionValue(parameterTypes, "getParameterTypes(...)");
            Class cls = (Class) kotlin.collections.i.V(parameterTypes);
            if (cls != null && cls.isInterface()) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // ds.a0
    public es.h A() {
        return (es.h) this.f22212v.getValue();
    }

    @Override // ds.a0
    public c1 B() {
        return this.f22208r;
    }

    @Override // ds.a0
    public es.h C() {
        return (es.h) this.f22213w.getValue();
    }

    @Override // ds.a0
    public boolean G() {
        if (this.f22210t != CallableReference.NO_RECEIVER) {
            return true;
        }
        return false;
    }

    @Override // ds.a0
    /* renamed from: T */
    public FunctionDescriptor D() {
        Object b10 = this.f22211u.b(this, f22207x[0]);
        Intrinsics.checkNotNullExpressionValue(b10, "getValue(...)");
        return (FunctionDescriptor) b10;
    }

    public boolean equals(Object obj) {
        h1 c10 = j3.c(obj);
        if (c10 == null || !Intrinsics.areEqual(B(), c10.B()) || !Intrinsics.areEqual(getName(), c10.getName()) || !Intrinsics.areEqual(this.f22209s, c10.f22209s) || !Intrinsics.areEqual(this.f22210t, c10.f22210t)) {
            return false;
        }
        return true;
    }

    @Override // kotlin.jvm.internal.FunctionBase
    public int getArity() {
        return es.j.a(A());
    }

    @Override // kotlin.reflect.KCallable
    public String getName() {
        String asString = D().getName().asString();
        Intrinsics.checkNotNullExpressionValue(asString, "asString(...)");
        return asString;
    }

    public int hashCode() {
        return (((B().hashCode() * 31) + getName().hashCode()) * 31) + this.f22209s.hashCode();
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        return l.a.a(this);
    }

    @Override // kotlin.reflect.KFunction
    public boolean isExternal() {
        return D().isExternal();
    }

    @Override // kotlin.reflect.KFunction
    public boolean isInfix() {
        return D().isInfix();
    }

    @Override // kotlin.reflect.KFunction
    public boolean isInline() {
        return D().isInline();
    }

    @Override // kotlin.reflect.KFunction
    public boolean isOperator() {
        return D().isOperator();
    }

    @Override // kotlin.reflect.KCallable, kotlin.reflect.KFunction
    public boolean isSuspend() {
        return D().isSuspend();
    }

    public String toString() {
        return d3.f22181a.f(D());
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        return l.a.b(this, obj);
    }

    private h1(c1 c1Var, String str, String str2, FunctionDescriptor functionDescriptor, Object obj) {
        this.f22208r = c1Var;
        this.f22209s = str2;
        this.f22210t = obj;
        this.f22211u = z2.b(functionDescriptor, new e1(this, str));
        jr.o oVar = jr.o.f32182e;
        this.f22212v = jr.l.a(oVar, new f1(this));
        this.f22213w = jr.l.a(oVar, new g1(this));
    }

    @Override // kotlin.jvm.functions.Function2
    public Object invoke(Object obj, Object obj2) {
        return l.a.c(this, obj, obj2);
    }

    @Override // kotlin.jvm.functions.Function3
    public Object invoke(Object obj, Object obj2, Object obj3) {
        return l.a.d(this, obj, obj2, obj3);
    }

    @Override // kotlin.jvm.functions.Function4
    public Object invoke(Object obj, Object obj2, Object obj3, Object obj4) {
        return l.a.e(this, obj, obj2, obj3, obj4);
    }

    @Override // kotlin.jvm.functions.Function5
    public Object invoke(Object obj, Object obj2, Object obj3, Object obj4, Object obj5) {
        return l.a.f(this, obj, obj2, obj3, obj4, obj5);
    }

    @Override // kotlin.jvm.functions.Function6
    public Object invoke(Object obj, Object obj2, Object obj3, Object obj4, Object obj5, Object obj6) {
        return l.a.g(this, obj, obj2, obj3, obj4, obj5, obj6);
    }

    @Override // kotlin.jvm.functions.Function8
    public Object invoke(Object obj, Object obj2, Object obj3, Object obj4, Object obj5, Object obj6, Object obj7, Object obj8) {
        return l.a.h(this, obj, obj2, obj3, obj4, obj5, obj6, obj7, obj8);
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public h1(c1 container, String name, String signature, Object obj) {
        this(container, name, signature, null, obj);
        Intrinsics.checkNotNullParameter(container, "container");
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(signature, "signature");
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public h1(ds.c1 r10, kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor r11) {
        /*
            r9 = this;
            java.lang.String r0 = "container"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r10, r0)
            java.lang.String r0 = "descriptor"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r11, r0)
            kotlin.reflect.jvm.internal.impl.name.Name r0 = r11.getName()
            java.lang.String r3 = r0.asString()
            java.lang.String r0 = "asString(...)"
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r3, r0)
            ds.e3 r0 = ds.e3.f22189a
            ds.n r0 = r0.g(r11)
            java.lang.String r4 = r0.a()
            r7 = 16
            r8 = 0
            r6 = 0
            r1 = r9
            r2 = r10
            r5 = r11
            r1.<init>(r2, r3, r4, r5, r6, r7, r8)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: ds.h1.<init>(ds.c1, kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor):void");
    }
}
