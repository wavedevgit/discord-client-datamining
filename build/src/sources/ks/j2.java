package ks;

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
import ks.p;
import ks.z2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class j2 extends a0 implements KProperty {

    /* renamed from: x  reason: collision with root package name */
    public static final b f35382x = new b(null);

    /* renamed from: y  reason: collision with root package name */
    private static final Object f35383y = new Object();

    /* renamed from: r  reason: collision with root package name */
    private final c1 f35384r;

    /* renamed from: s  reason: collision with root package name */
    private final String f35385s;

    /* renamed from: t  reason: collision with root package name */
    private final String f35386t;

    /* renamed from: u  reason: collision with root package name */
    private final Object f35387u;

    /* renamed from: v  reason: collision with root package name */
    private final Lazy f35388v;

    /* renamed from: w  reason: collision with root package name */
    private final z2.a f35389w;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static abstract class a extends a0 implements KFunction, KProperty.a {
        @Override // ks.a0
        public c1 B() {
            return J().B();
        }

        @Override // ks.a0
        public ls.h C() {
            return null;
        }

        @Override // ks.a0
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

        @Override // kotlin.reflect.KCallable
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
        static final /* synthetic */ KProperty[] f35390t = {Reflection.property1(new PropertyReference1Impl(c.class, "descriptor", "getDescriptor()Lorg/jetbrains/kotlin/descriptors/PropertyGetterDescriptor;", 0))};

        /* renamed from: r  reason: collision with root package name */
        private final z2.a f35391r = z2.c(new k2(this));

        /* renamed from: s  reason: collision with root package name */
        private final Lazy f35392s = qr.l.b(qr.o.f48092e, new l2(this));

        /* JADX INFO: Access modifiers changed from: private */
        public static final ls.h M(c cVar) {
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

        @Override // ks.a0
        public ls.h A() {
            return (ls.h) this.f35392s.getValue();
        }

        @Override // ks.j2.a
        /* renamed from: O */
        public PropertyGetterDescriptor I() {
            Object b10 = this.f35391r.b(this, f35390t[0]);
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
        static final /* synthetic */ KProperty[] f35393t = {Reflection.property1(new PropertyReference1Impl(d.class, "descriptor", "getDescriptor()Lorg/jetbrains/kotlin/descriptors/PropertySetterDescriptor;", 0))};

        /* renamed from: r  reason: collision with root package name */
        private final z2.a f35394r = z2.c(new m2(this));

        /* renamed from: s  reason: collision with root package name */
        private final Lazy f35395s = qr.l.b(qr.o.f48092e, new n2(this));

        /* JADX INFO: Access modifiers changed from: private */
        public static final ls.h M(d dVar) {
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

        @Override // ks.a0
        public ls.h A() {
            return (ls.h) this.f35395s.getValue();
        }

        @Override // ks.j2.a
        /* renamed from: O */
        public PropertySetterDescriptor I() {
            Object b10 = this.f35394r.b(this, f35393t[0]);
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
        this.f35384r = c1Var;
        this.f35385s = str;
        this.f35386t = str2;
        this.f35387u = obj;
        this.f35388v = qr.l.b(qr.o.f48092e, new h2(this));
        z2.a b10 = z2.b(propertyDescriptor, new i2(this));
        Intrinsics.checkNotNullExpressionValue(b10, "lazySoft(...)");
        this.f35389w = b10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final PropertyDescriptor I(j2 j2Var) {
        return j2Var.B().n(j2Var.getName(), j2Var.f35386t);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Field J(j2 j2Var) {
        Class<?> enclosingClass;
        p f10 = e3.f35348a.f(j2Var.D());
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
            throw new qr.p();
        }
    }

    @Override // ks.a0
    public ls.h A() {
        return Q().A();
    }

    @Override // ks.a0
    public c1 B() {
        return this.f35384r;
    }

    @Override // ks.a0
    public ls.h C() {
        return Q().C();
    }

    @Override // ks.a0
    public boolean G() {
        if (this.f35387u != CallableReference.NO_RECEIVER) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Member M() {
        if (!D().isDelegated()) {
            return null;
        }
        p f10 = e3.f35348a.f(D());
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
        return ls.o.h(this.f35387u, D());
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Object O(Member member, Object obj, Object obj2) {
        Object obj3;
        AccessibleObject accessibleObject;
        try {
            Object obj4 = f35383y;
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
                    accessibleObject.setAccessible(js.a.a(this));
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
            throw new is.b(e10);
        }
    }

    @Override // ks.a0
    /* renamed from: P */
    public PropertyDescriptor D() {
        Object invoke = this.f35389w.invoke();
        Intrinsics.checkNotNullExpressionValue(invoke, "invoke(...)");
        return (PropertyDescriptor) invoke;
    }

    public abstract c Q();

    public final Field R() {
        return (Field) this.f35388v.getValue();
    }

    public final String S() {
        return this.f35386t;
    }

    public boolean equals(Object obj) {
        j2 d10 = j3.d(obj);
        if (d10 == null || !Intrinsics.areEqual(B(), d10.B()) || !Intrinsics.areEqual(getName(), d10.getName()) || !Intrinsics.areEqual(this.f35386t, d10.f35386t) || !Intrinsics.areEqual(this.f35387u, d10.f35387u)) {
            return false;
        }
        return true;
    }

    @Override // kotlin.reflect.KCallable
    public String getName() {
        return this.f35385s;
    }

    public int hashCode() {
        return (((B().hashCode() * 31) + getName().hashCode()) * 31) + this.f35386t.hashCode();
    }

    @Override // kotlin.reflect.KProperty
    public boolean isConst() {
        return D().isConst();
    }

    @Override // kotlin.reflect.KProperty
    public boolean isLateinit() {
        return D().isLateInit();
    }

    @Override // kotlin.reflect.KCallable
    public boolean isSuspend() {
        return false;
    }

    public String toString() {
        return d3.f35340a.k(D());
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
    public j2(ks.c1 r8, kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor r9) {
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
            ks.e3 r0 = ks.e3.f35348a
            ks.p r0 = r0.f(r9)
            java.lang.String r4 = r0.a()
            java.lang.Object r6 = kotlin.jvm.internal.CallableReference.NO_RECEIVER
            r1 = r7
            r2 = r8
            r5 = r9
            r1.<init>(r2, r3, r4, r5, r6)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: ks.j2.<init>(ks.c1, kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor):void");
    }
}
