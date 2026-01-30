package cs;

import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import cs.z2;
import java.lang.reflect.Constructor;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.enums.EnumEntries;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.ArrayIteratorKt;
import kotlin.jvm.internal.ClassBasedDeclarationContainer;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.PropertyReference1Impl;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KProperty;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ConstructorDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DescriptorVisibilities;
import kotlin.reflect.jvm.internal.impl.descriptors.DescriptorVisibility;
import kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.runtime.components.ReflectJavaClassFinderKt;
import kotlin.reflect.jvm.internal.impl.descriptors.runtime.components.RuntimeModuleData;
import kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure.ReflectClassUtilKt;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.renderer.DescriptorRenderer;
import kotlin.text.MatchResult;
import kotlin.text.Regex;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class c1 implements ClassBasedDeclarationContainer {

    /* renamed from: d  reason: collision with root package name */
    public static final a f21103d = new a(null);

    /* renamed from: e  reason: collision with root package name */
    private static final Class f21104e = DefaultConstructorMarker.class;

    /* renamed from: i  reason: collision with root package name */
    private static final Regex f21105i = new Regex("<v#(\\d+)>");

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final Regex a() {
            return c1.f21105i;
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public abstract class b {

        /* renamed from: c  reason: collision with root package name */
        static final /* synthetic */ KProperty[] f21106c = {Reflection.property1(new PropertyReference1Impl(b.class, "moduleData", "getModuleData()Lorg/jetbrains/kotlin/descriptors/runtime/components/RuntimeModuleData;", 0))};

        /* renamed from: a  reason: collision with root package name */
        private final z2.a f21107a;

        public b() {
            this.f21107a = z2.c(new d1(c1.this));
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final RuntimeModuleData c(c1 c1Var) {
            return y2.a(c1Var.getJClass());
        }

        public final RuntimeModuleData b() {
            Object b10 = this.f21107a.b(this, f21106c[0]);
            Intrinsics.checkNotNullExpressionValue(b10, "getValue(...)");
            return (RuntimeModuleData) b10;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        private final List f21109a;

        /* renamed from: b  reason: collision with root package name */
        private final Class f21110b;

        public c(List parameters, Class cls) {
            Intrinsics.checkNotNullParameter(parameters, "parameters");
            this.f21109a = parameters;
            this.f21110b = cls;
        }

        public final List a() {
            return this.f21109a;
        }

        public final Class b() {
            return this.f21110b;
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    protected static final class d {

        /* renamed from: d  reason: collision with root package name */
        public static final d f21111d = new d("DECLARED", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final d f21112e = new d("INHERITED", 1);

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ d[] f21113i;

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f21114o;

        static {
            d[] a10 = a();
            f21113i = a10;
            f21114o = pr.a.a(a10);
        }

        private d(String str, int i10) {
        }

        private static final /* synthetic */ d[] a() {
            return new d[]{f21111d, f21112e};
        }

        public static d valueOf(String str) {
            return (d) Enum.valueOf(d.class, str);
        }

        public static d[] values() {
            return (d[]) f21113i.clone();
        }

        public final boolean d(CallableMemberDescriptor member) {
            boolean z10;
            Intrinsics.checkNotNullParameter(member, "member");
            boolean isReal = member.getKind().isReal();
            if (this == f21111d) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (isReal != z10) {
                return false;
            }
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class e extends j {
        e(c1 c1Var) {
            super(c1Var);
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.impl.DeclarationDescriptorVisitorEmptyBodies, kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptorVisitor
        /* renamed from: c */
        public a0 visitConstructorDescriptor(ConstructorDescriptor descriptor, Unit data) {
            Intrinsics.checkNotNullParameter(descriptor, "descriptor");
            Intrinsics.checkNotNullParameter(data, "data");
            throw new IllegalStateException("No constructors should appear here: " + descriptor);
        }
    }

    private final Constructor A(Class cls, List list) {
        try {
            Class[] clsArr = (Class[]) list.toArray(new Class[0]);
            return cls.getDeclaredConstructor((Class[]) Arrays.copyOf(clsArr, clsArr.length));
        } catch (NoSuchMethodException unused) {
            return null;
        }
    }

    private final Method B(Class cls, String str, Class[] clsArr, Class cls2) {
        Method declaredMethod;
        try {
            declaredMethod = cls.getDeclaredMethod(str, (Class[]) Arrays.copyOf(clsArr, clsArr.length));
        } catch (NoSuchMethodException unused) {
        }
        if (Intrinsics.areEqual(declaredMethod.getReturnType(), cls2)) {
            return declaredMethod;
        }
        Method[] declaredMethods = cls.getDeclaredMethods();
        Intrinsics.checkNotNullExpressionValue(declaredMethods, "getDeclaredMethods(...)");
        for (Method method : declaredMethods) {
            if (Intrinsics.areEqual(method.getName(), str) && Intrinsics.areEqual(method.getReturnType(), cls2) && Arrays.equals(method.getParameterTypes(), clsArr)) {
                return method;
            }
        }
        return null;
    }

    private final void g(List list, List list2, boolean z10) {
        Class<Object> cls;
        if (Intrinsics.areEqual(CollectionsKt.B0(list2), f21104e)) {
            list2 = list2.subList(0, list2.size() - 1);
        }
        list.addAll(list2);
        int size = (list2.size() + 31) / 32;
        for (int i10 = 0; i10 < size; i10++) {
            Class TYPE = Integer.TYPE;
            Intrinsics.checkNotNullExpressionValue(TYPE, "TYPE");
            list.add(TYPE);
        }
        if (z10) {
            cls = f21104e;
        } else {
            cls = Object.class;
        }
        Intrinsics.checkNotNull(cls);
        list.add(cls);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final CharSequence l(FunctionDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        return DescriptorRenderer.DEBUG_TEXT.render(descriptor) + " | " + e3.f21130a.g(descriptor).a();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int o(DescriptorVisibility descriptorVisibility, DescriptorVisibility descriptorVisibility2) {
        Integer compare = DescriptorVisibilities.compare(descriptorVisibility, descriptorVisibility2);
        if (compare != null) {
            return compare.intValue();
        }
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int p(Function2 function2, Object obj, Object obj2) {
        return ((Number) function2.invoke(obj, obj2)).intValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final CharSequence q(PropertyDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        return DescriptorRenderer.DEBUG_TEXT.render(descriptor) + " | " + e3.f21130a.f(descriptor).a();
    }

    private final Method x(Class cls, String str, Class[] clsArr, Class cls2, boolean z10) {
        String str2;
        Class[] clsArr2;
        Class cls3;
        boolean z11;
        if (z10) {
            clsArr[0] = cls;
        }
        Method B = B(cls, str, clsArr, cls2);
        if (B != null) {
            return B;
        }
        Class superclass = cls.getSuperclass();
        if (superclass != null) {
            Method x10 = x(superclass, str, clsArr, cls2, z10);
            str2 = str;
            clsArr2 = clsArr;
            cls3 = cls2;
            z11 = z10;
            if (x10 != null) {
                return x10;
            }
        } else {
            str2 = str;
            clsArr2 = clsArr;
            cls3 = cls2;
            z11 = z10;
        }
        Iterator it = ArrayIteratorKt.iterator(cls.getInterfaces());
        while (it.hasNext()) {
            Class cls4 = (Class) it.next();
            Intrinsics.checkNotNull(cls4);
            Method x11 = x(cls4, str2, clsArr2, cls3, z11);
            if (x11 != null) {
                return x11;
            }
            if (z11) {
                ClassLoader safeClassLoader = ReflectClassUtilKt.getSafeClassLoader(cls4);
                Class<?> tryLoadClass = ReflectJavaClassFinderKt.tryLoadClass(safeClassLoader, cls4.getName() + "$DefaultImpls");
                if (tryLoadClass != null) {
                    clsArr2[0] = cls4;
                    Method B2 = B(tryLoadClass, str2, clsArr2, cls3);
                    if (B2 != null) {
                        return B2;
                    }
                } else {
                    continue;
                }
            }
        }
        return null;
    }

    private final c y(String str, boolean z10) {
        String str2;
        int h02;
        ArrayList arrayList = new ArrayList();
        int i10 = 1;
        while (true) {
            Class cls = null;
            if (str.charAt(i10) != ')') {
                int i11 = i10;
                while (str.charAt(i11) == '[') {
                    i11++;
                }
                char charAt = str.charAt(i11);
                if (StringsKt.U("VZCBSIFJD", charAt, false, 2, null)) {
                    int i12 = i11 + 1;
                    str2 = str;
                    h02 = i12;
                } else if (charAt == 'L') {
                    str2 = str;
                    h02 = StringsKt.h0(str2, ';', i10, false, 4, null) + 1;
                } else {
                    throw new x2("Unknown type prefix in the method signature: " + str);
                }
                arrayList.add(z(str2, i10, h02));
                i10 = h02;
                str = str2;
            } else {
                String str3 = str;
                if (z10) {
                    cls = z(str3, i10 + 1, str3.length());
                }
                return new c(arrayList, cls);
            }
        }
    }

    private final Class z(String str, int i10, int i11) {
        char charAt = str.charAt(i10);
        if (charAt != 'F') {
            if (charAt != 'L') {
                if (charAt != 'S') {
                    if (charAt != 'V') {
                        if (charAt != 'I') {
                            if (charAt != 'J') {
                                if (charAt != 'Z') {
                                    if (charAt != '[') {
                                        switch (charAt) {
                                            case 'B':
                                                return Byte.TYPE;
                                            case 'C':
                                                return Character.TYPE;
                                            case 'D':
                                                return Double.TYPE;
                                            default:
                                                throw new x2("Unknown type prefix in the method signature: " + str);
                                        }
                                    }
                                    return j3.f(z(str, i10 + 1, i11));
                                }
                                return Boolean.TYPE;
                            }
                            return Long.TYPE;
                        }
                        return Integer.TYPE;
                    }
                    Class TYPE = Void.TYPE;
                    Intrinsics.checkNotNullExpressionValue(TYPE, "TYPE");
                    return TYPE;
                }
                return Short.TYPE;
            }
            ClassLoader safeClassLoader = ReflectClassUtilKt.getSafeClassLoader(getJClass());
            String substring = str.substring(i10 + 1, i11 - 1);
            Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
            Class<?> loadClass = safeClassLoader.loadClass(StringsKt.I(substring, '/', '.', false, 4, null));
            Intrinsics.checkNotNullExpressionValue(loadClass, "loadClass(...)");
            return loadClass;
        }
        return Float.TYPE;
    }

    public final Constructor h(String desc) {
        Intrinsics.checkNotNullParameter(desc, "desc");
        return A(getJClass(), y(desc, false).a());
    }

    public final Constructor i(String desc) {
        Intrinsics.checkNotNullParameter(desc, "desc");
        Class<?> jClass = getJClass();
        ArrayList arrayList = new ArrayList();
        g(arrayList, y(desc, false).a(), true);
        Unit unit = Unit.f33298a;
        return A(jClass, arrayList);
    }

    public final Method j(String name, String desc, boolean z10) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(desc, "desc");
        if (Intrinsics.areEqual(name, "<init>")) {
            return null;
        }
        ArrayList arrayList = new ArrayList();
        if (z10) {
            arrayList.add(getJClass());
        }
        c y10 = y(desc, true);
        g(arrayList, y10.a(), false);
        Class v10 = v();
        Class b10 = y10.b();
        Intrinsics.checkNotNull(b10);
        return x(v10, name + "$default", (Class[]) arrayList.toArray(new Class[0]), b10, z10);
    }

    /* JADX WARN: Removed duplicated region for block: B:40:0x00bd A[SYNTHETIC] */
    /* JADX WARN: Removed duplicated region for block: B:43:0x002a A[SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor k(java.lang.String r14, java.lang.String r15) {
        /*
            Method dump skipped, instructions count: 357
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: cs.c1.k(java.lang.String, java.lang.String):kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor");
    }

    public final Method m(String name, String desc) {
        Method x10;
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(desc, "desc");
        if (Intrinsics.areEqual(name, "<init>")) {
            return null;
        }
        c y10 = y(desc, true);
        Class[] clsArr = (Class[]) y10.a().toArray(new Class[0]);
        Class b10 = y10.b();
        Intrinsics.checkNotNull(b10);
        Method x11 = x(v(), name, clsArr, b10, false);
        if (x11 != null) {
            return x11;
        }
        if (!v().isInterface() || (x10 = x(Object.class, name, clsArr, b10, false)) == null) {
            return null;
        }
        return x10;
    }

    public final PropertyDescriptor n(String name, String signature) {
        String str;
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(signature, "signature");
        MatchResult h10 = f21105i.h(signature);
        if (h10 != null) {
            String str2 = (String) h10.a().a().b().get(1);
            PropertyDescriptor t10 = t(Integer.parseInt(str2));
            if (t10 != null) {
                return t10;
            }
            throw new x2("Local property #" + str2 + " not found in " + getJClass());
        }
        Name identifier = Name.identifier(name);
        Intrinsics.checkNotNullExpressionValue(identifier, "identifier(...)");
        ArrayList arrayList = new ArrayList();
        for (Object obj : w(identifier)) {
            if (Intrinsics.areEqual(e3.f21130a.f((PropertyDescriptor) obj).a(), signature)) {
                arrayList.add(obj);
            }
        }
        if (!arrayList.isEmpty()) {
            if (arrayList.size() != 1) {
                LinkedHashMap linkedHashMap = new LinkedHashMap();
                for (Object obj2 : arrayList) {
                    DescriptorVisibility visibility = ((PropertyDescriptor) obj2).getVisibility();
                    Object obj3 = linkedHashMap.get(visibility);
                    if (obj3 == null) {
                        obj3 = new ArrayList();
                        linkedHashMap.put(visibility, obj3);
                    }
                    ((List) obj3).add(obj2);
                }
                Collection values = kotlin.collections.o0.h(linkedHashMap, new z0(y0.f21312d)).values();
                Intrinsics.checkNotNullExpressionValue(values, "<get-values>(...)");
                List list = (List) CollectionsKt.y0(values);
                if (list.size() == 1) {
                    Intrinsics.checkNotNull(list);
                    return (PropertyDescriptor) CollectionsKt.o0(list);
                }
                Name identifier2 = Name.identifier(name);
                Intrinsics.checkNotNullExpressionValue(identifier2, "identifier(...)");
                String x02 = CollectionsKt.x0(w(identifier2), ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE, null, null, 0, null, a1.f21094d, 30, null);
                StringBuilder sb2 = new StringBuilder();
                sb2.append("Property '");
                sb2.append(name);
                sb2.append("' (JVM signature: ");
                sb2.append(signature);
                sb2.append(") not resolved in ");
                sb2.append(this);
                sb2.append(':');
                if (x02.length() == 0) {
                    str = " no members found";
                } else {
                    str = '\n' + x02;
                }
                sb2.append(str);
                throw new x2(sb2.toString());
            }
            return (PropertyDescriptor) CollectionsKt.Q0(arrayList);
        }
        throw new x2("Property '" + name + "' (JVM signature: " + signature + ") not resolved in " + this);
    }

    public abstract Collection r();

    public abstract Collection s(Name name);

    public abstract PropertyDescriptor t(int i10);

    /* JADX INFO: Access modifiers changed from: protected */
    /* JADX WARN: Removed duplicated region for block: B:18:0x0051 A[SYNTHETIC] */
    /* JADX WARN: Removed duplicated region for block: B:20:0x0020 A[SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.util.Collection u(kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope r8, cs.c1.d r9) {
        /*
            r7 = this;
            java.lang.String r0 = "scope"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r8, r0)
            java.lang.String r0 = "belonginess"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r9, r0)
            cs.c1$e r0 = new cs.c1$e
            r0.<init>(r7)
            r1 = 3
            r2 = 0
            java.util.Collection r8 = kotlin.reflect.jvm.internal.impl.resolve.scopes.ResolutionScope.DefaultImpls.getContributedDescriptors$default(r8, r2, r2, r1, r2)
            java.lang.Iterable r8 = (java.lang.Iterable) r8
            java.util.ArrayList r1 = new java.util.ArrayList
            r1.<init>()
            java.util.Iterator r8 = r8.iterator()
        L20:
            boolean r3 = r8.hasNext()
            if (r3 == 0) goto L55
            java.lang.Object r3 = r8.next()
            kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor r3 = (kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor) r3
            boolean r4 = r3 instanceof kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor
            if (r4 == 0) goto L4e
            r4 = r3
            kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor r4 = (kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor) r4
            kotlin.reflect.jvm.internal.impl.descriptors.DescriptorVisibility r5 = r4.getVisibility()
            kotlin.reflect.jvm.internal.impl.descriptors.DescriptorVisibility r6 = kotlin.reflect.jvm.internal.impl.descriptors.DescriptorVisibilities.INVISIBLE_FAKE
            boolean r5 = kotlin.jvm.internal.Intrinsics.areEqual(r5, r6)
            if (r5 != 0) goto L4e
            boolean r4 = r9.d(r4)
            if (r4 == 0) goto L4e
            kotlin.Unit r4 = kotlin.Unit.f33298a
            java.lang.Object r3 = r3.accept(r0, r4)
            cs.a0 r3 = (cs.a0) r3
            goto L4f
        L4e:
            r3 = r2
        L4f:
            if (r3 == 0) goto L20
            r1.add(r3)
            goto L20
        L55:
            java.util.List r8 = kotlin.collections.CollectionsKt.h1(r1)
            java.util.Collection r8 = (java.util.Collection) r8
            return r8
        */
        throw new UnsupportedOperationException("Method not decompiled: cs.c1.u(kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope, cs.c1$d):java.util.Collection");
    }

    protected Class v() {
        Class<?> wrapperByPrimitive = ReflectClassUtilKt.getWrapperByPrimitive(getJClass());
        if (wrapperByPrimitive == null) {
            return getJClass();
        }
        return wrapperByPrimitive;
    }

    public abstract Collection w(Name name);
}
