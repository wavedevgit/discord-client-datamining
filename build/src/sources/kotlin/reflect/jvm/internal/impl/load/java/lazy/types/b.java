package kotlin.reflect.jvm.internal.impl.load.java.lazy.types;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final ClassDescriptor f33024d;

    /* renamed from: e  reason: collision with root package name */
    private final RawSubstitution f33025e;

    /* renamed from: i  reason: collision with root package name */
    private final SimpleType f33026i;

    /* renamed from: o  reason: collision with root package name */
    private final JavaTypeAttributes f33027o;

    public b(ClassDescriptor classDescriptor, RawSubstitution rawSubstitution, SimpleType simpleType, JavaTypeAttributes javaTypeAttributes) {
        this.f33024d = classDescriptor;
        this.f33025e = rawSubstitution;
        this.f33026i = simpleType;
        this.f33027o = javaTypeAttributes;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        SimpleType c10;
        c10 = RawSubstitution.c(this.f33024d, this.f33025e, this.f33026i, this.f33027o, (KotlinTypeRefiner) obj);
        return c10;
    }
}
