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
    private final JavaTypeResolver f33039d;

    /* renamed from: e  reason: collision with root package name */
    private final TypeParameterDescriptor f33040e;

    /* renamed from: i  reason: collision with root package name */
    private final JavaTypeAttributes f33041i;

    /* renamed from: o  reason: collision with root package name */
    private final TypeConstructor f33042o;

    /* renamed from: p  reason: collision with root package name */
    private final JavaClassifierType f33043p;

    public a(JavaTypeResolver javaTypeResolver, TypeParameterDescriptor typeParameterDescriptor, JavaTypeAttributes javaTypeAttributes, TypeConstructor typeConstructor, JavaClassifierType javaClassifierType) {
        this.f33039d = javaTypeResolver;
        this.f33040e = typeParameterDescriptor;
        this.f33041i = javaTypeAttributes;
        this.f33042o = typeConstructor;
        this.f33043p = javaClassifierType;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        KotlinType e10;
        e10 = JavaTypeResolver.e(this.f33039d, this.f33040e, this.f33041i, this.f33042o, this.f33043p);
        return e10;
    }
}
