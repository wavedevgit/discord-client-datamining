package kotlin.reflect.jvm.internal.impl.load.java.lazy.types;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final ClassDescriptor f33044d;

    /* renamed from: e  reason: collision with root package name */
    private final RawSubstitution f33045e;

    /* renamed from: i  reason: collision with root package name */
    private final SimpleType f33046i;

    /* renamed from: o  reason: collision with root package name */
    private final JavaTypeAttributes f33047o;

    public b(ClassDescriptor classDescriptor, RawSubstitution rawSubstitution, SimpleType simpleType, JavaTypeAttributes javaTypeAttributes) {
        this.f33044d = classDescriptor;
        this.f33045e = rawSubstitution;
        this.f33046i = simpleType;
        this.f33047o = javaTypeAttributes;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        SimpleType c10;
        c10 = RawSubstitution.c(this.f33044d, this.f33045e, this.f33046i, this.f33047o, (KotlinTypeRefiner) obj);
        return c10;
    }
}
