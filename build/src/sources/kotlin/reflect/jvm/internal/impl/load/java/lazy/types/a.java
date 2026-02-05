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
    private final JavaTypeResolver f33019d;

    /* renamed from: e  reason: collision with root package name */
    private final TypeParameterDescriptor f33020e;

    /* renamed from: i  reason: collision with root package name */
    private final JavaTypeAttributes f33021i;

    /* renamed from: o  reason: collision with root package name */
    private final TypeConstructor f33022o;

    /* renamed from: p  reason: collision with root package name */
    private final JavaClassifierType f33023p;

    public a(JavaTypeResolver javaTypeResolver, TypeParameterDescriptor typeParameterDescriptor, JavaTypeAttributes javaTypeAttributes, TypeConstructor typeConstructor, JavaClassifierType javaClassifierType) {
        this.f33019d = javaTypeResolver;
        this.f33020e = typeParameterDescriptor;
        this.f33021i = javaTypeAttributes;
        this.f33022o = typeConstructor;
        this.f33023p = javaClassifierType;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        KotlinType e10;
        e10 = JavaTypeResolver.e(this.f33019d, this.f33020e, this.f33021i, this.f33022o, this.f33023p);
        return e10;
    }
}
