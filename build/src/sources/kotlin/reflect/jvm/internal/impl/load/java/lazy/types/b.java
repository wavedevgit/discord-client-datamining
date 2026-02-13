package kotlin.reflect.jvm.internal.impl.load.java.lazy.types;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final ClassDescriptor f33592d;

    /* renamed from: e  reason: collision with root package name */
    private final RawSubstitution f33593e;

    /* renamed from: i  reason: collision with root package name */
    private final SimpleType f33594i;

    /* renamed from: o  reason: collision with root package name */
    private final JavaTypeAttributes f33595o;

    public b(ClassDescriptor classDescriptor, RawSubstitution rawSubstitution, SimpleType simpleType, JavaTypeAttributes javaTypeAttributes) {
        this.f33592d = classDescriptor;
        this.f33593e = rawSubstitution;
        this.f33594i = simpleType;
        this.f33595o = javaTypeAttributes;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        SimpleType c10;
        c10 = RawSubstitution.c(this.f33592d, this.f33593e, this.f33594i, this.f33595o, (KotlinTypeRefiner) obj);
        return c10;
    }
}
