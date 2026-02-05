package is;

import is.p;
import is.z2;
import java.lang.reflect.AccessibleObject;
import java.lang.reflect.Field;
import java.lang.reflect.Member;
import java.lang.reflect.Method;
import kotlin.Lazy;
import kotlin.jvm.internal.CallableReference;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.PropertyReference1Impl;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KFunction;
import kotlin.reflect.KProperty;
import kotlin.reflect.e;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertyAccessorDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertyGetterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertySetterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations;
import kotlin.reflect.jvm.internal.impl.descriptors.impl.PropertyGetterDescriptorImpl;
import kotlin.reflect.jvm.internal.impl.descriptors.impl.PropertySetterDescriptorImpl;
import kotlin.reflect.jvm.internal.impl.load.java.DescriptorsJvmAbiUtil;
import kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf;
import kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization.JvmMemberSignature;
import kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization.JvmProtoBufUtil;
import kotlin.reflect.jvm.internal.impl.resolve.DescriptorFactory;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class j2 extends a0 implements KProperty {

    /* renamed from: x  reason: collision with root package name */
    public static final b f30228x = new b(null);

    /* renamed from: y  reason: collision with root package name */
    private static final Object f30229y = new Object();

    /* renamed from: r  reason: collision with root package name */
    private final c1 f30230r;

    /* renamed from: s  reason: collision with root package name */
    private final String f30231s;

    /* renamed from: t  reason: collision with root package name */
    private final String f30232t;

    /* renamed from: u  reason: collision with root package name */
    private final Object f30233u;

    /* renamed from: v  reason: collision with root package name */
    private final Lazy f30234v;

    /* renamed from: w  reason: collision with root package name */
    private final z2.a f30235w;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static abstract class a extends a0 implements KFunction, KProperty.a {
        @Override // is.a0
        public c1 B() {
            return J().B();
        }

        @Override // is.a0
        public js.h C() {
            return null;
        }

        @Override // is.a0
        public boolean G() {
            return J().G();
        }

        public abstract PropertyAccessorDescriptor I();

        public abstract j2 J();

        @Override // kotlin.reflect.KFunction
        public boolean isExternal() {
            return I().isExternal();
        }

        @Override // kotlin.reflect.KFunction
        public boolean isInfix() {
            return I().isInfix();
        }

        @Override // kotlin.reflect.KFunction
        public boolean isInline() {
            return I().isInline();
        }

        @Override // kotlin.reflect.KFunction
        public boolean isOperator() {
            return I().isOperator();
        }

        @Override // kotlin.reflect.KCallable, kotlin.reflect.KFunction
        public boolean isSuspend() {
            return I().isSuspend();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static abstract class c extends a implements KProperty.b {

        /* renamed from: t  reason: collision with root package name */
        static final /* synthetic */ KProperty[] f30236t = {Reflection.property1(new PropertyReference1Impl(c.class, "descriptor", "getDescriptor()Lorg/jetbrains/kotlin/descriptors/PropertyGetterDescriptor;", 0))};

        /* renamed from: r  reason: collision with root package name */
        private final z2.a f30237r = z2.c(new k2(this));

        /* renamed from: s  reason: collision with root package name */
        private final Lazy f30238s = or.l.b(or.o.f44232e, new l2(this));

        /* JADX INFO: Access modifiers changed from: private */
        public static final js.h M(c cVar) {
            return o2.a(cVar, true);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final PropertyGetterDescriptor N(c cVar) {
            PropertyGetterDescriptor getter = cVar.J().D().getGetter();
            if (getter == null) {
                PropertyGetterDescriptorImpl createDefaultGetter = DescriptorFactory.createDefaultGetter(cVar.J().D(), Annotations.Companion.getEMPTY());
                Intrinsics.checkNotNullExpressionValue(createDefaultGetter, "createDefaultGetter(...)");
                return createDefaultGetter;
            }
            return getter;
        }

        @Override // is.a0
        public js.h A() {
            return (js.h) this.f30238s.getValue();
        }

        @Override // is.j2.a
        /* renamed from: O */
        public PropertyGetterDescriptor I() {
            Object b10 = this.f30237r.b(this, f30236t[0]);
            Intrinsics.checkNotNullExpressionValue(b10, "getValue(...)");
            return (PropertyGetterDescriptor) b10;
        }

        public boolean equals(Object obj) {
            if ((obj instanceof c) && Intrinsics.areEqual(J(), ((c) obj).J())) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.KCallable
        public String getName() {
            return "<get-" + J().getName() + '>';
        }

        public int hashCode() {
            return J().hashCode();
        }

        public String toString() {
            return "getter of " + J();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static abstract class d extends a implements e.a {

        /* renamed from: t  reason: collision with root package name */
        static final /* synthetic */ KProperty[] f30239t = {Reflection.property1(new PropertyReference1Impl(d.class, "descriptor", "getDescriptor()Lorg/jetbrains/kotlin/descriptors/PropertySetterDescriptor;", 0))};

        /* renamed from: r  reason: collision with root package name */
        private final z2.a f30240r = z2.c(new m2(this));

        /* renamed from: s  reason: collision with root package name */
        private final Lazy f30241s = or.l.b(or.o.f44232e, new n2(this));

        /* JADX INFO: Access modifiers changed from: private */
        public static final js.h M(d dVar) {
            return o2.a(dVar, false);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final PropertySetterDescriptor N(d dVar) {
            PropertySetterDescriptor setter = dVar.J().D().getSetter();
            if (setter == null) {
                PropertyDescriptor D = dVar.J().D();
                Annotations.Companion companion = Annotations.Companion;
                PropertySetterDescriptorImpl createDefaultSetter = DescriptorFactory.createDefaultSetter(D, companion.getEMPTY(), companion.getEMPTY());
                Intrinsics.checkNotNullExpressionValue(createDefaultSetter, "createDefaultSetter(...)");
                return createDefaultSetter;
            }
            return setter;
        }

        @Override // is.a0
        public js.h A() {
            return (js.h) this.f30241s.getValue();
        }

        @Override // is.j2.a
        /* renamed from: O */
        public PropertySetterDescriptor I() {
            Object b10 = this.f30240r.b(this, f30239t[0]);
            Intrinsics.checkNotNullExpressionValue(b10, "getValue(...)");
            return (PropertySetterDescriptor) b10;
        }

        public boolean equals(Object obj) {
            if ((obj instanceof d) && Intrinsics.areEqual(J(), ((d) obj).J())) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.KCallable
        public String getName() {
            return "<set-" + J().getName() + '>';
        }

        public int hashCode() {
            return J().hashCode();
        }

        public String toString() {
            return "setter of " + J();
        }
    }

    private j2(c1 c1Var, String str, String str2, PropertyDescriptor propertyDescriptor, Object obj) {
        this.f30230r = c1Var;
        this.f30231s = str;
        this.f30232t = str2;
        this.f30233u = obj;
        this.f30234v = or.l.b(or.o.f44232e, new h2(this));
        z2.a b10 = z2.b(propertyDescriptor, new i2(this));
        Intrinsics.checkNotNullExpressionValue(b10, "lazySoft(...)");
        this.f30235w = b10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final PropertyDescriptor I(j2 j2Var) {
        return j2Var.B().n(j2Var.getName(), j2Var.f30232t);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Field J(j2 j2Var) {
        Class<?> enclosingClass;
        p f10 = e3.f30194a.f(j2Var.D());
        if (f10 instanceof p.c) {
            p.c cVar = (p.c) f10;
            PropertyDescriptor b10 = cVar.b();
            JvmMemberSignature.Field jvmFieldSignature$default = JvmProtoBufUtil.getJvmFieldSignature$default(JvmProtoBufUtil.INSTANCE, cVar.e(), cVar.d(), cVar.g(), false, 8, null);
            if (jvmFieldSignature$default == null) {
                return null;
            }
            if (!DescriptorsJvmAbiUtil.isPropertyWithBackingFieldInOuterClass(b10) && !JvmProtoBufUtil.isMovedFromInterfaceCompanion(cVar.e())) {
                DeclarationDescriptor containingDeclaration = b10.getContainingDeclaration();
                if (containingDeclaration instanceof ClassDescriptor) {
                    enclosingClass = j3.q((ClassDescriptor) containingDeclaration);
                } else {
                    enclosingClass = j2Var.B().getJClass();
                }
            } else {
                enclosingClass = j2Var.B().getJClass().getEnclosingClass();
            }
            if (enclosingClass == null) {
                return null;
            }
            try {
                return enclosingClass.getDeclaredField(jvmFieldSignature$default.getName());
            } catch (NoSuchFieldException unused) {
                return null;
            }
        } else if (f10 instanceof p.a) {
            return ((p.a) f10).b();
        } else {
            if ((f10 instanceof p.b) || (f10 instanceof p.d)) {
                return null;
            }
            throw new or.p();
        }
    }

    @Override // is.a0
    public js.h A() {
        return Q().A();
    }

    @Override // is.a0
    public c1 B() {
        return this.f30230r;
    }

    @Override // is.a0
    public js.h C() {
        return Q().C();
    }

    @Override // is.a0
    public boolean G() {
        if (this.f30233u != CallableReference.NO_RECEIVER) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Member M() {
        if (!D().isDelegated()) {
            return null;
        }
        p f10 = e3.f30194a.f(D());
        if (f10 instanceof p.c) {
            p.c cVar = (p.c) f10;
            if (cVar.f().hasDelegateMethod()) {
                JvmProtoBuf.JvmMethodSignature delegateMethod = cVar.f().getDelegateMethod();
                if (!delegateMethod.hasName() || !delegateMethod.hasDesc()) {
                    return null;
                }
                return B().m(cVar.d().getString(delegateMethod.getName()), cVar.d().getString(delegateMethod.getDesc()));
            }
        }
        return R();
    }

    public final Object N() {
        return js.o.h(this.f30233u, D());
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Object O(Member member, Object obj, Object obj2) {
        Object obj3;
        AccessibleObject accessibleObject;
        try {
            Object obj4 = f30229y;
            if ((obj != obj4 && obj2 != obj4) || D().getExtensionReceiverParameter() != null) {
                if (G()) {
                    obj3 = N();
                } else {
                    obj3 = obj;
                }
                if (obj3 == obj4) {
                    obj3 = null;
                }
                if (!G()) {
                    obj = obj2;
                }
                if (obj == obj4) {
                    obj = null;
                }
                if (member instanceof AccessibleObject) {
                    accessibleObject = (AccessibleObject) member;
                } else {
                    accessibleObject = null;
                }
                if (accessibleObject != null) {
                    accessibleObject.setAccessible(hs.a.a(this));
                }
                if (member == null) {
                    return null;
                }
                if (member instanceof Field) {
                    return ((Field) member).get(obj3);
                }
                if (member instanceof Method) {
                    int length = ((Method) member).getParameterTypes().length;
                    if (length != 0) {
                        if (length != 1) {
                            if (length == 2) {
                                Method method = (Method) member;
                                if (obj == null) {
                                    Class<?> cls = ((Method) member).getParameterTypes()[1];
                                    Intrinsics.checkNotNullExpressionValue(cls, "get(...)");
                                    obj = j3.g(cls);
                                }
                                return method.invoke(null, obj3, obj);
                            }
                            throw new AssertionError("delegate method " + member + " should take 0, 1, or 2 parameters");
                        }
                        Method method2 = (Method) member;
                        if (obj3 == null) {
                            Class<?> cls2 = ((Method) member).getParameterTypes()[0];
                            Intrinsics.checkNotNullExpressionValue(cls2, "get(...)");
                            obj3 = j3.g(cls2);
                        }
                        return method2.invoke(null, obj3);
                    }
                    return ((Method) member).invoke(null, null);
                }
                throw new AssertionError("delegate field/method " + member + " neither field nor method");
            }
            throw new RuntimeException('\'' + this + "' is not an extension property and thus getExtensionDelegate() is not going to work, use getDelegate() instead");
        } catch (IllegalAccessException e10) {
            throw new gs.b(e10);
        }
    }

    @Override // is.a0
    /* renamed from: P */
    public PropertyDescriptor D() {
        Object invoke = this.f30235w.invoke();
        Intrinsics.checkNotNullExpressionValue(invoke, "invoke(...)");
        return (PropertyDescriptor) invoke;
    }

    public abstract c Q();

    public final Field R() {
        return (Field) this.f30234v.getValue();
    }

    public final String S() {
        return this.f30232t;
    }

    public boolean equals(Object obj) {
        j2 d10 = j3.d(obj);
        if (d10 == null || !Intrinsics.areEqual(B(), d10.B()) || !Intrinsics.areEqual(getName(), d10.getName()) || !Intrinsics.areEqual(this.f30232t, d10.f30232t) || !Intrinsics.areEqual(this.f30233u, d10.f30233u)) {
            return false;
        }
        return true;
    }

    @Override // kotlin.reflect.KCallable
    public String getName() {
        return this.f30231s;
    }

    public int hashCode() {
        return (((B().hashCode() * 31) + getName().hashCode()) * 31) + this.f30232t.hashCode();
    }

    @Override // kotlin.reflect.KProperty
    public boolean isConst() {
        return D().isConst();
    }

    @Override // kotlin.reflect.KProperty
    public boolean isLateinit() {
        return D().isLateInit();
    }

    @Override // kotlin.reflect.KCallable, kotlin.reflect.KFunction
    public boolean isSuspend() {
        return false;
    }

    public String toString() {
        return d3.f30186a.k(D());
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public j2(c1 container, String name, String signature, Object obj) {
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
    public j2(is.c1 r8, kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor r9) {
        /*
            r7 = this;
            java.lang.String r0 = "container"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r8, r0)
            java.lang.String r0 = "descriptor"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r9, r0)
            kotlin.reflect.jvm.internal.impl.name.Name r0 = r9.getName()
            java.lang.String r3 = r0.asString()
            java.lang.String r0 = "asString(...)"
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r3, r0)
            is.e3 r0 = is.e3.f30194a
            is.p r0 = r0.f(r9)
            java.lang.String r4 = r0.a()
            java.lang.Object r6 = kotlin.jvm.internal.CallableReference.NO_RECEIVER
            r1 = r7
            r2 = r8
            r5 = r9
            r1.<init>(r2, r3, r4, r5, r6)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: is.j2.<init>(is.c1, kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor):void");
    }
}
