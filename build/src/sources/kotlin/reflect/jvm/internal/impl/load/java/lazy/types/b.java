package kotlin.reflect.jvm.internal.impl.load.java.lazy.types;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final ClassDescriptor f33500d;

    /* renamed from: e  reason: collision with root package name */
    private final RawSubstitution f33501e;

    /* renamed from: i  reason: collision with root package name */
    private final SimpleType f33502i;

    /* renamed from: o  reason: collision with root package name */
    private final JavaTypeAttributes f33503o;

    public b(ClassDescriptor classDescriptor, RawSubstitution rawSubstitution, SimpleType simpleType, JavaTypeAttributes javaTypeAttributes) {
        this.f33500d = classDescriptor;
        this.f33501e = rawSubstitution;
        this.f33502i = simpleType;
        this.f33503o = javaTypeAttributes;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        SimpleType c10;
        c10 = RawSubstitution.c(this.f33500d, this.f33501e, this.f33502i, this.f33503o, (KotlinTypeRefiner) obj);
        return c10;
    }
}
