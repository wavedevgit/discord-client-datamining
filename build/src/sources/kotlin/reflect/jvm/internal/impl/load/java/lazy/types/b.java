package kotlin.reflect.jvm.internal.impl.load.java.lazy.types;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final ClassDescriptor f34110d;

    /* renamed from: e  reason: collision with root package name */
    private final RawSubstitution f34111e;

    /* renamed from: i  reason: collision with root package name */
    private final SimpleType f34112i;

    /* renamed from: o  reason: collision with root package name */
    private final JavaTypeAttributes f34113o;

    public b(ClassDescriptor classDescriptor, RawSubstitution rawSubstitution, SimpleType simpleType, JavaTypeAttributes javaTypeAttributes) {
        this.f34110d = classDescriptor;
        this.f34111e = rawSubstitution;
        this.f34112i = simpleType;
        this.f34113o = javaTypeAttributes;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        SimpleType c10;
        c10 = RawSubstitution.c(this.f34110d, this.f34111e, this.f34112i, this.f34113o, (KotlinTypeRefiner) obj);
        return c10;
    }
}
