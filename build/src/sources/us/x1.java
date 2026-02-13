package us;

import java.lang.reflect.Type;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.PropertyReference1Impl;
import kotlin.jvm.internal.Reflection;
import kotlin.ranges.IntRange;
import kotlin.reflect.KProperty;
import kotlin.reflect.KType;
import kotlin.reflect.i;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ReceiverParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ValueParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.resolve.descriptorUtil.DescriptorUtilsKt;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import us.z2;
import vs.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class x1 implements kotlin.reflect.i {

    /* renamed from: q  reason: collision with root package name */
    static final /* synthetic */ KProperty[] f51773q = {Reflection.property1(new PropertyReference1Impl(x1.class, "descriptor", "getDescriptor()Lorg/jetbrains/kotlin/descriptors/ParameterDescriptor;", 0)), Reflection.property1(new PropertyReference1Impl(x1.class, "annotations", "getAnnotations()Ljava/util/List;", 0))};

    /* renamed from: d  reason: collision with root package name */
    private final a0 f51774d;

    /* renamed from: e  reason: collision with root package name */
    private final int f51775e;

    /* renamed from: i  reason: collision with root package name */
    private final i.a f51776i;

    /* renamed from: o  reason: collision with root package name */
    private final z2.a f51777o;

    /* renamed from: p  reason: collision with root package name */
    private final z2.a f51778p;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Type {

        /* renamed from: d  reason: collision with root package name */
        private final Type[] f51779d;

        /* renamed from: e  reason: collision with root package name */
        private final int f51780e;

        public a(Type[] types) {
            Intrinsics.checkNotNullParameter(types, "types");
            this.f51779d = types;
            this.f51780e = Arrays.hashCode(types);
        }

        public boolean equals(Object obj) {
            if ((obj instanceof a) && Arrays.equals(this.f51779d, ((a) obj).f51779d)) {
                return true;
            }
            return false;
        }

        @Override // java.lang.reflect.Type
        public String getTypeName() {
            return kotlin.collections.i.v0(this.f51779d, ", ", "[", "]", 0, null, null, 56, null);
        }

        public int hashCode() {
            return this.f51780e;
        }

        public String toString() {
            return getTypeName();
        }
    }

    public x1(a0 callable, int i10, i.a kind, Function0 computeDescriptor) {
        Intrinsics.checkNotNullParameter(callable, "callable");
        Intrinsics.checkNotNullParameter(kind, "kind");
        Intrinsics.checkNotNullParameter(computeDescriptor, "computeDescriptor");
        this.f51774d = callable;
        this.f51775e = i10;
        this.f51776i = kind;
        this.f51777o = z2.c(computeDescriptor);
        this.f51778p = z2.c(new v1(this));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Type a(x1 x1Var) {
        List T0;
        ParameterDescriptor h10 = x1Var.h();
        if ((h10 instanceof ReceiverParameterDescriptor) && Intrinsics.areEqual(j3.i(x1Var.f51774d.D()), h10) && x1Var.f51774d.D().getKind() == CallableMemberDescriptor.Kind.FAKE_OVERRIDE) {
            DeclarationDescriptor containingDeclaration = x1Var.f51774d.D().getContainingDeclaration();
            Intrinsics.checkNotNull(containingDeclaration, "null cannot be cast to non-null type org.jetbrains.kotlin.descriptors.ClassDescriptor");
            Class q10 = j3.q((ClassDescriptor) containingDeclaration);
            if (q10 != null) {
                return q10;
            }
            throw new x2("Cannot determine receiver Java type of inherited declaration: " + h10);
        }
        vs.h A = x1Var.f51774d.A();
        if (A instanceof vs.n) {
            if (x1Var.f51774d.G()) {
                vs.n nVar = (vs.n) A;
                IntRange f10 = nVar.f(x1Var.getIndex() + 1);
                int e10 = nVar.f(0).e() + 1;
                T0 = CollectionsKt.T0(nVar.a(), new IntRange(f10.d() - e10, f10.e() - e10));
            } else {
                vs.n nVar2 = (vs.n) A;
                T0 = CollectionsKt.T0(nVar2.a(), nVar2.f(x1Var.getIndex()));
            }
            Type[] typeArr = (Type[]) T0.toArray(new Type[0]);
            return x1Var.f((Type[]) Arrays.copyOf(typeArr, typeArr.length));
        } else if (A instanceof n.b) {
            Class[] clsArr = (Class[]) ((Collection) ((n.b) A).e().get(x1Var.getIndex())).toArray(new Class[0]);
            return x1Var.f((Type[]) Arrays.copyOf(clsArr, clsArr.length));
        } else {
            return (Type) A.a().get(x1Var.getIndex());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final List e(x1 x1Var) {
        return j3.e(x1Var.h());
    }

    private final Type f(Type... typeArr) {
        int length = typeArr.length;
        if (length != 0) {
            if (length != 1) {
                return new a(typeArr);
            }
            return (Type) kotlin.collections.i.C0(typeArr);
        }
        throw new ns.b("Expected at least 1 type for compound type");
    }

    private final ParameterDescriptor h() {
        Object b10 = this.f51777o.b(this, f51773q[0]);
        Intrinsics.checkNotNullExpressionValue(b10, "getValue(...)");
        return (ParameterDescriptor) b10;
    }

    @Override // kotlin.reflect.i
    public boolean b() {
        ValueParameterDescriptor valueParameterDescriptor;
        ParameterDescriptor h10 = h();
        if (h10 instanceof ValueParameterDescriptor) {
            valueParameterDescriptor = (ValueParameterDescriptor) h10;
        } else {
            valueParameterDescriptor = null;
        }
        if (valueParameterDescriptor != null) {
            return DescriptorUtilsKt.declaresOrInheritsDefaultValue(valueParameterDescriptor);
        }
        return false;
    }

    public boolean equals(Object obj) {
        if (obj instanceof x1) {
            x1 x1Var = (x1) obj;
            if (Intrinsics.areEqual(this.f51774d, x1Var.f51774d) && getIndex() == x1Var.getIndex()) {
                return true;
            }
            return false;
        }
        return false;
    }

    public final a0 g() {
        return this.f51774d;
    }

    @Override // kotlin.reflect.b
    public List getAnnotations() {
        Object b10 = this.f51778p.b(this, f51773q[1]);
        Intrinsics.checkNotNullExpressionValue(b10, "getValue(...)");
        return (List) b10;
    }

    @Override // kotlin.reflect.i
    public int getIndex() {
        return this.f51775e;
    }

    @Override // kotlin.reflect.i
    public i.a getKind() {
        return this.f51776i;
    }

    @Override // kotlin.reflect.i
    public String getName() {
        ValueParameterDescriptor valueParameterDescriptor;
        ParameterDescriptor h10 = h();
        if (h10 instanceof ValueParameterDescriptor) {
            valueParameterDescriptor = (ValueParameterDescriptor) h10;
        } else {
            valueParameterDescriptor = null;
        }
        if (valueParameterDescriptor == null || valueParameterDescriptor.getContainingDeclaration().hasSynthesizedParameterNames()) {
            return null;
        }
        Name name = valueParameterDescriptor.getName();
        Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
        if (name.isSpecial()) {
            return null;
        }
        return name.asString();
    }

    @Override // kotlin.reflect.i
    public KType getType() {
        KotlinType type = h().getType();
        Intrinsics.checkNotNullExpressionValue(type, "getType(...)");
        return new t2(type, new w1(this));
    }

    public int hashCode() {
        return (this.f51774d.hashCode() * 31) + Integer.hashCode(getIndex());
    }

    @Override // kotlin.reflect.i
    public boolean isVararg() {
        ParameterDescriptor h10 = h();
        if ((h10 instanceof ValueParameterDescriptor) && ((ValueParameterDescriptor) h10).getVarargElementType() != null) {
            return true;
        }
        return false;
    }

    public String toString() {
        return d3.f51593a.j(this);
    }
}
