package kotlin.reflect.jvm.internal.impl.util;

import kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor;
import kotlin.reflect.jvm.internal.impl.util.Check;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class b implements Check {

    /* renamed from: a  reason: collision with root package name */
    public static final b f34788a = new b();

    /* renamed from: b  reason: collision with root package name */
    private static final String f34789b = "should not have varargs or parameters with default values";

    private b() {
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0029  */
    @Override // kotlin.reflect.jvm.internal.impl.util.Check
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public boolean check(kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor r4) {
        /*
            r3 = this;
            java.lang.String r0 = "functionDescriptor"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r4, r0)
            java.util.List r4 = r4.getValueParameters()
            java.lang.String r0 = "getValueParameters(...)"
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r4, r0)
            java.lang.Iterable r4 = (java.lang.Iterable) r4
            boolean r0 = r4 instanceof java.util.Collection
            r1 = 1
            if (r0 == 0) goto L1f
            r0 = r4
            java.util.Collection r0 = (java.util.Collection) r0
            boolean r0 = r0.isEmpty()
            if (r0 == 0) goto L1f
            return r1
        L1f:
            java.util.Iterator r4 = r4.iterator()
        L23:
            boolean r0 = r4.hasNext()
            if (r0 == 0) goto L41
            java.lang.Object r0 = r4.next()
            kotlin.reflect.jvm.internal.impl.descriptors.ValueParameterDescriptor r0 = (kotlin.reflect.jvm.internal.impl.descriptors.ValueParameterDescriptor) r0
            kotlin.jvm.internal.Intrinsics.checkNotNull(r0)
            boolean r2 = kotlin.reflect.jvm.internal.impl.resolve.descriptorUtil.DescriptorUtilsKt.declaresOrInheritsDefaultValue(r0)
            if (r2 != 0) goto L3f
            kotlin.reflect.jvm.internal.impl.types.KotlinType r0 = r0.getVarargElementType()
            if (r0 != 0) goto L3f
            goto L23
        L3f:
            r4 = 0
            return r4
        L41:
            return r1
        */
        throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.util.b.check(kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor):boolean");
    }

    @Override // kotlin.reflect.jvm.internal.impl.util.Check
    public String getDescription() {
        return f34789b;
    }

    @Override // kotlin.reflect.jvm.internal.impl.util.Check
    public String invoke(FunctionDescriptor functionDescriptor) {
        return Check.DefaultImpls.invoke(this, functionDescriptor);
    }
}
