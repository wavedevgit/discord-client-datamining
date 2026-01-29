package kotlin.reflect.jvm.internal.impl.load.java.lazy.types;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaClassifierType;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.TypeConstructor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class a implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final JavaTypeResolver f34313d;

    /* renamed from: e  reason: collision with root package name */
    private final TypeParameterDescriptor f34314e;

    /* renamed from: i  reason: collision with root package name */
    private final JavaTypeAttributes f34315i;

    /* renamed from: o  reason: collision with root package name */
    private final TypeConstructor f34316o;

    /* renamed from: p  reason: collision with root package name */
    private final JavaClassifierType f34317p;

    public a(JavaTypeResolver javaTypeResolver, TypeParameterDescriptor typeParameterDescriptor, JavaTypeAttributes javaTypeAttributes, TypeConstructor typeConstructor, JavaClassifierType javaClassifierType) {
        this.f34313d = javaTypeResolver;
        this.f34314e = typeParameterDescriptor;
        this.f34315i = javaTypeAttributes;
        this.f34316o = typeConstructor;
        this.f34317p = javaClassifierType;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        KotlinType e10;
        e10 = JavaTypeResolver.e(this.f34313d, this.f34314e, this.f34315i, this.f34316o, this.f34317p);
        return e10;
    }
}
