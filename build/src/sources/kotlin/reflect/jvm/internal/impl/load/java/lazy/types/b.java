package kotlin.reflect.jvm.internal.impl.load.java.lazy.types;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final ClassDescriptor f33092d;

    /* renamed from: e  reason: collision with root package name */
    private final RawSubstitution f33093e;

    /* renamed from: i  reason: collision with root package name */
    private final SimpleType f33094i;

    /* renamed from: o  reason: collision with root package name */
    private final JavaTypeAttributes f33095o;

    public b(ClassDescriptor classDescriptor, RawSubstitution rawSubstitution, SimpleType simpleType, JavaTypeAttributes javaTypeAttributes) {
        this.f33092d = classDescriptor;
        this.f33093e = rawSubstitution;
        this.f33094i = simpleType;
        this.f33095o = javaTypeAttributes;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        SimpleType c10;
        c10 = RawSubstitution.c(this.f33092d, this.f33093e, this.f33094i, this.f33095o, (KotlinTypeRefiner) obj);
        return c10;
    }
}
