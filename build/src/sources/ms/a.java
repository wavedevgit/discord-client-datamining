package ms;

import java.lang.reflect.Member;
import java.lang.reflect.Method;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure.ReflectClassUtilKt;
import ms.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements h {

    /* renamed from: a  reason: collision with root package name */
    private final Class f37451a;

    /* renamed from: b  reason: collision with root package name */
    private final List f37452b;

    /* renamed from: c  reason: collision with root package name */
    private final EnumC0540a f37453c;

    /* renamed from: d  reason: collision with root package name */
    private final List f37454d;

    /* renamed from: e  reason: collision with root package name */
    private final List f37455e;

    /* renamed from: f  reason: collision with root package name */
    private final List f37456f;

    /* renamed from: g  reason: collision with root package name */
    private final List f37457g;

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* renamed from: ms.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class EnumC0540a {

        /* renamed from: d  reason: collision with root package name */
        public static final EnumC0540a f37458d = new EnumC0540a("CALL_BY_NAME", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final EnumC0540a f37459e = new EnumC0540a("POSITIONAL_CALL", 1);

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ EnumC0540a[] f37460i;

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f37461o;

        static {
            EnumC0540a[] a10 = a();
            f37460i = a10;
            f37461o = yr.a.a(a10);
        }

        private EnumC0540a(String str, int i10) {
        }

        private static final /* synthetic */ EnumC0540a[] a() {
            return new EnumC0540a[]{f37458d, f37459e};
        }

        public static EnumC0540a valueOf(String str) {
            return (EnumC0540a) Enum.valueOf(EnumC0540a.class, str);
        }

        public static EnumC0540a[] values() {
            return (EnumC0540a[]) f37460i.clone();
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {

        /* renamed from: d  reason: collision with root package name */
        public static final b f37462d = new b("JAVA", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final b f37463e = new b("KOTLIN", 1);

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ b[] f37464i;

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f37465o;

        static {
            b[] a10 = a();
            f37464i = a10;
            f37465o = yr.a.a(a10);
        }

        private b(String str, int i10) {
        }

        private static final /* synthetic */ b[] a() {
            return new b[]{f37462d, f37463e};
        }

        public static b valueOf(String str) {
            return (b) Enum.valueOf(b.class, str);
        }

        public static b[] values() {
            return (b[]) f37464i.clone();
        }
    }

    public a(Class jClass, List parameterNames, EnumC0540a callMode, b origin, List methods) {
        Intrinsics.checkNotNullParameter(jClass, "jClass");
        Intrinsics.checkNotNullParameter(parameterNames, "parameterNames");
        Intrinsics.checkNotNullParameter(callMode, "callMode");
        Intrinsics.checkNotNullParameter(origin, "origin");
        Intrinsics.checkNotNullParameter(methods, "methods");
        this.f37451a = jClass;
        this.f37452b = parameterNames;
        this.f37453c = callMode;
        this.f37454d = methods;
        List<Method> list = methods;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (Method method : list) {
            arrayList.add(method.getGenericReturnType());
        }
        this.f37455e = arrayList;
        List<Method> list2 = this.f37454d;
        ArrayList arrayList2 = new ArrayList(CollectionsKt.w(list2, 10));
        for (Method method2 : list2) {
            Class<?> returnType = method2.getReturnType();
            Intrinsics.checkNotNull(returnType);
            Class<?> wrapperByPrimitive = ReflectClassUtilKt.getWrapperByPrimitive(returnType);
            if (wrapperByPrimitive != null) {
                returnType = wrapperByPrimitive;
            }
            arrayList2.add(returnType);
        }
        this.f37456f = arrayList2;
        List<Method> list3 = this.f37454d;
        ArrayList arrayList3 = new ArrayList(CollectionsKt.w(list3, 10));
        for (Method method3 : list3) {
            arrayList3.add(method3.getDefaultValue());
        }
        this.f37457g = arrayList3;
        if (this.f37453c == EnumC0540a.f37459e && origin == b.f37462d && !CollectionsKt.I0(this.f37452b, "value").isEmpty()) {
            throw new UnsupportedOperationException("Positional call of a Java annotation constructor is allowed only if there are no parameters or one parameter named \"value\". This restriction exists because Java annotations (in contrast to Kotlin)do not impose any order on their arguments. Use KCallable#callBy instead.");
        }
    }

    @Override // ms.h
    public List a() {
        return this.f37455e;
    }

    @Override // ms.h
    public /* bridge */ /* synthetic */ Member b() {
        return (Member) e();
    }

    @Override // ms.h
    public boolean c() {
        return h.a.b(this);
    }

    @Override // ms.h
    public Object call(Object[] args) {
        Object q10;
        Intrinsics.checkNotNullParameter(args, "args");
        d(args);
        ArrayList arrayList = new ArrayList(args.length);
        int length = args.length;
        int i10 = 0;
        int i11 = 0;
        while (i10 < length) {
            Object obj = args[i10];
            int i12 = i11 + 1;
            if (obj != null || this.f37453c != EnumC0540a.f37458d) {
                q10 = f.q(obj, (Class) this.f37456f.get(i11));
            } else {
                q10 = this.f37457g.get(i11);
            }
            if (q10 == null) {
                f.p(i11, (String) this.f37452b.get(i11), (Class) this.f37456f.get(i11));
                throw new rr.h();
            }
            arrayList.add(q10);
            i10++;
            i11 = i12;
        }
        return f.g(this.f37451a, o0.u(CollectionsKt.p1(this.f37452b, arrayList)), this.f37454d);
    }

    public void d(Object[] objArr) {
        h.a.a(this, objArr);
    }

    public Void e() {
        return null;
    }

    @Override // ms.h
    public Type getReturnType() {
        return this.f37451a;
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public /* synthetic */ a(java.lang.Class r7, java.util.List r8, ms.a.EnumC0540a r9, ms.a.b r10, java.util.List r11, int r12, kotlin.jvm.internal.DefaultConstructorMarker r13) {
        /*
            r6 = this;
            r12 = r12 & 16
            if (r12 == 0) goto L32
            r11 = r8
            java.lang.Iterable r11 = (java.lang.Iterable) r11
            java.util.ArrayList r12 = new java.util.ArrayList
            r13 = 10
            int r13 = kotlin.collections.CollectionsKt.w(r11, r13)
            r12.<init>(r13)
            java.util.Iterator r11 = r11.iterator()
        L16:
            boolean r13 = r11.hasNext()
            if (r13 == 0) goto L2b
            java.lang.Object r13 = r11.next()
            java.lang.String r13 = (java.lang.String) r13
            r0 = 0
            java.lang.reflect.Method r13 = r7.getDeclaredMethod(r13, r0)
            r12.add(r13)
            goto L16
        L2b:
            r5 = r12
        L2c:
            r0 = r6
            r1 = r7
            r2 = r8
            r3 = r9
            r4 = r10
            goto L34
        L32:
            r5 = r11
            goto L2c
        L34:
            r0.<init>(r1, r2, r3, r4, r5)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: ms.a.<init>(java.lang.Class, java.util.List, ms.a$a, ms.a$b, java.util.List, int, kotlin.jvm.internal.DefaultConstructorMarker):void");
    }
}
