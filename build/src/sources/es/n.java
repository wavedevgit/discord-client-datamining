package es;

import ds.c1;
import ds.j3;
import es.h;
import es.i;
import java.lang.reflect.Member;
import java.lang.reflect.Method;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.ranges.IntRange;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure.ReflectClassUtilKt;
import kotlin.reflect.jvm.internal.impl.resolve.InlineClassesUtilsKt;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.TypeSubstitutionKt;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class n implements h {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f23196a;

    /* renamed from: b  reason: collision with root package name */
    private final h f23197b;

    /* renamed from: c  reason: collision with root package name */
    private final Member f23198c;

    /* renamed from: d  reason: collision with root package name */
    private final a f23199d;

    /* renamed from: e  reason: collision with root package name */
    private final IntRange[] f23200e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f23201f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final IntRange f23202a;

        /* renamed from: b  reason: collision with root package name */
        private final List[] f23203b;

        /* renamed from: c  reason: collision with root package name */
        private final Method f23204c;

        public a(IntRange argumentRange, List[] unboxParameters, Method method) {
            Intrinsics.checkNotNullParameter(argumentRange, "argumentRange");
            Intrinsics.checkNotNullParameter(unboxParameters, "unboxParameters");
            this.f23202a = argumentRange;
            this.f23203b = unboxParameters;
            this.f23204c = method;
        }

        public final IntRange a() {
            return this.f23202a;
        }

        public final Method b() {
            return this.f23204c;
        }

        public final List[] c() {
            return this.f23203b;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b implements h {

        /* renamed from: a  reason: collision with root package name */
        private final Method f23205a;

        /* renamed from: b  reason: collision with root package name */
        private final Method f23206b;

        /* renamed from: c  reason: collision with root package name */
        private final List f23207c;

        /* renamed from: d  reason: collision with root package name */
        private final List f23208d;

        /* renamed from: e  reason: collision with root package name */
        private final List f23209e;

        public b(FunctionDescriptor descriptor, c1 container, String constructorDesc, List originalParameters) {
            Collection e10;
            Intrinsics.checkNotNullParameter(descriptor, "descriptor");
            Intrinsics.checkNotNullParameter(container, "container");
            Intrinsics.checkNotNullParameter(constructorDesc, "constructorDesc");
            Intrinsics.checkNotNullParameter(originalParameters, "originalParameters");
            Method m10 = container.m("constructor-impl", constructorDesc);
            Intrinsics.checkNotNull(m10);
            this.f23205a = m10;
            Method m11 = container.m("box-impl", StringsKt.D0(constructorDesc, "V") + ReflectClassUtilKt.getDesc(container.getJClass()));
            Intrinsics.checkNotNull(m11);
            this.f23206b = m11;
            List<ParameterDescriptor> list = originalParameters;
            ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
            for (ParameterDescriptor parameterDescriptor : list) {
                KotlinType type = parameterDescriptor.getType();
                Intrinsics.checkNotNullExpressionValue(type, "getType(...)");
                arrayList.add(o.d(TypeSubstitutionKt.asSimpleType(type), descriptor));
            }
            this.f23207c = arrayList;
            ArrayList arrayList2 = new ArrayList(CollectionsKt.w(list, 10));
            int i10 = 0;
            for (Object obj : list) {
                int i11 = i10 + 1;
                if (i10 < 0) {
                    CollectionsKt.v();
                }
                ClassifierDescriptor mo1200getDeclarationDescriptor = ((ParameterDescriptor) obj).getType().getConstructor().mo1200getDeclarationDescriptor();
                Intrinsics.checkNotNull(mo1200getDeclarationDescriptor, "null cannot be cast to non-null type org.jetbrains.kotlin.descriptors.ClassDescriptor");
                ClassDescriptor classDescriptor = (ClassDescriptor) mo1200getDeclarationDescriptor;
                List list2 = (List) this.f23207c.get(i10);
                if (list2 != null) {
                    List<Method> list3 = list2;
                    e10 = new ArrayList(CollectionsKt.w(list3, 10));
                    for (Method method : list3) {
                        e10.add(method.getReturnType());
                    }
                } else {
                    Class q10 = j3.q(classDescriptor);
                    Intrinsics.checkNotNull(q10);
                    e10 = CollectionsKt.e(q10);
                }
                arrayList2.add(e10);
                i10 = i11;
            }
            this.f23208d = arrayList2;
            this.f23209e = CollectionsKt.y(arrayList2);
        }

        @Override // es.h
        public List a() {
            return this.f23209e;
        }

        @Override // es.h
        public /* bridge */ /* synthetic */ Member b() {
            return (Member) d();
        }

        @Override // es.h
        public boolean c() {
            return h.a.b(this);
        }

        @Override // es.h
        public Object call(Object[] args) {
            Collection e10;
            Intrinsics.checkNotNullParameter(args, "args");
            ArrayList arrayList = new ArrayList();
            for (Pair pair : kotlin.collections.i.i1(args, this.f23207c)) {
                Object a10 = pair.a();
                List list = (List) pair.b();
                if (list != null) {
                    List<Method> list2 = list;
                    e10 = new ArrayList(CollectionsKt.w(list2, 10));
                    for (Method method : list2) {
                        e10.add(method.invoke(a10, null));
                    }
                } else {
                    e10 = CollectionsKt.e(a10);
                }
                CollectionsKt.B(arrayList, e10);
            }
            Object[] array = arrayList.toArray(new Object[0]);
            this.f23205a.invoke(null, Arrays.copyOf(array, array.length));
            return this.f23206b.invoke(null, Arrays.copyOf(array, array.length));
        }

        public Void d() {
            return null;
        }

        public final List e() {
            return this.f23208d;
        }

        @Override // es.h
        public Type getReturnType() {
            Class<?> returnType = this.f23206b.getReturnType();
            Intrinsics.checkNotNullExpressionValue(returnType, "getReturnType(...)");
            return returnType;
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:55:0x010f, code lost:
        if ((r12 instanceof es.g) != false) goto L86;
     */
    /* JADX WARN: Removed duplicated region for block: B:27:0x0082 A[LOOP:1: B:25:0x007c->B:27:0x0082, LOOP_END] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public n(kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor r11, es.h r12, boolean r13) {
        /*
            Method dump skipped, instructions count: 596
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: es.n.<init>(kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor, es.h, boolean):void");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean e(ClassDescriptor makeKotlinParameterTypes) {
        Intrinsics.checkNotNullParameter(makeKotlinParameterTypes, "$this$makeKotlinParameterTypes");
        return InlineClassesUtilsKt.isValueClass(makeKotlinParameterTypes);
    }

    @Override // es.h
    public List a() {
        return this.f23197b.a();
    }

    @Override // es.h
    public Member b() {
        return this.f23198c;
    }

    @Override // es.h
    public boolean c() {
        return this.f23197b instanceof i.h.a;
    }

    @Override // es.h
    public Object call(Object[] args) {
        Object invoke;
        Object obj;
        Method method;
        Object g10;
        Intrinsics.checkNotNullParameter(args, "args");
        IntRange a10 = this.f23199d.a();
        List[] c10 = this.f23199d.c();
        Method b10 = this.f23199d.b();
        if (!a10.isEmpty()) {
            if (this.f23201f) {
                List d10 = CollectionsKt.d(args.length);
                int d11 = a10.d();
                for (int i10 = 0; i10 < d11; i10++) {
                    d10.add(args[i10]);
                }
                int d12 = a10.d();
                int e10 = a10.e();
                if (d12 <= e10) {
                    while (true) {
                        List<Method> list = c10[d12];
                        Object obj2 = args[d12];
                        if (list != null) {
                            for (Method method2 : list) {
                                List list2 = d10;
                                if (obj2 != null) {
                                    g10 = method2.invoke(obj2, null);
                                } else {
                                    Class<?> returnType = method2.getReturnType();
                                    Intrinsics.checkNotNullExpressionValue(returnType, "getReturnType(...)");
                                    g10 = j3.g(returnType);
                                }
                                list2.add(g10);
                            }
                        } else {
                            d10.add(obj2);
                        }
                        if (d12 == e10) {
                            break;
                        }
                        d12++;
                    }
                }
                int e11 = a10.e() + 1;
                int a02 = kotlin.collections.i.a0(args);
                if (e11 <= a02) {
                    while (true) {
                        d10.add(args[e11]);
                        if (e11 == a02) {
                            break;
                        }
                        e11++;
                    }
                }
                args = CollectionsKt.a(d10).toArray(new Object[0]);
            } else {
                int length = args.length;
                Object[] objArr = new Object[length];
                for (int i11 = 0; i11 < length; i11++) {
                    int d13 = a10.d();
                    if (i11 <= a10.e() && d13 <= i11) {
                        List list3 = c10[i11];
                        if (list3 != null) {
                            method = (Method) CollectionsKt.Q0(list3);
                        } else {
                            method = null;
                        }
                        obj = args[i11];
                        if (method != null) {
                            if (obj != null) {
                                obj = method.invoke(obj, null);
                            } else {
                                Class<?> returnType2 = method.getReturnType();
                                Intrinsics.checkNotNullExpressionValue(returnType2, "getReturnType(...)");
                                obj = j3.g(returnType2);
                            }
                        }
                    } else {
                        obj = args[i11];
                    }
                    objArr[i11] = obj;
                }
                args = objArr;
            }
        }
        Object call = this.f23197b.call(args);
        if (call != pr.b.f() && b10 != null && (invoke = b10.invoke(null, call)) != null) {
            return invoke;
        }
        return call;
    }

    public final IntRange f(int i10) {
        if (i10 >= 0) {
            IntRange[] intRangeArr = this.f23200e;
            if (i10 < intRangeArr.length) {
                return intRangeArr[i10];
            }
        }
        IntRange[] intRangeArr2 = this.f23200e;
        if (intRangeArr2.length == 0) {
            return new IntRange(i10, i10);
        }
        int length = (i10 - intRangeArr2.length) + ((IntRange) kotlin.collections.i.w0(intRangeArr2)).e() + 1;
        return new IntRange(length, length);
    }

    @Override // es.h
    public Type getReturnType() {
        return this.f23197b.getReturnType();
    }
}
