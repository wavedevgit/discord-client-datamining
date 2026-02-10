package kotlin.reflect.jvm.internal.impl.descriptors.runtime.components;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure.ReflectClassUtilKt;
import kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass;
import kotlin.reflect.jvm.internal.impl.load.kotlin.header.KotlinClassHeader;
import kotlin.reflect.jvm.internal.impl.load.kotlin.header.ReadKotlinClassHeaderAnnotationVisitor;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class ReflectKotlinClass implements KotlinJvmBinaryClass {
    @NotNull
    public static final Factory Factory = new Factory(null);

    /* renamed from: a  reason: collision with root package name */
    private final Class f32584a;

    /* renamed from: b  reason: collision with root package name */
    private final KotlinClassHeader f32585b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Factory {
        public /* synthetic */ Factory(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final ReflectKotlinClass create(@NotNull Class<?> klass) {
            Intrinsics.checkNotNullParameter(klass, "klass");
            ReadKotlinClassHeaderAnnotationVisitor readKotlinClassHeaderAnnotationVisitor = new ReadKotlinClassHeaderAnnotationVisitor();
            a.f32592a.b(klass, readKotlinClassHeaderAnnotationVisitor);
            KotlinClassHeader createHeaderWithDefaultMetadataVersion = readKotlinClassHeaderAnnotationVisitor.createHeaderWithDefaultMetadataVersion();
            if (createHeaderWithDefaultMetadataVersion == null) {
                return null;
            }
            return new ReflectKotlinClass(klass, createHeaderWithDefaultMetadataVersion, null);
        }

        private Factory() {
        }
    }

    public /* synthetic */ ReflectKotlinClass(Class cls, KotlinClassHeader kotlinClassHeader, DefaultConstructorMarker defaultConstructorMarker) {
        this(cls, kotlinClassHeader);
    }

    public boolean equals(Object obj) {
        if ((obj instanceof ReflectKotlinClass) && Intrinsics.areEqual(this.f32584a, ((ReflectKotlinClass) obj).f32584a)) {
            return true;
        }
        return false;
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass
    @NotNull
    public KotlinClassHeader getClassHeader() {
        return this.f32585b;
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass
    @NotNull
    public ClassId getClassId() {
        return ReflectClassUtilKt.getClassId(this.f32584a);
    }

    @NotNull
    public final Class<?> getKlass() {
        return this.f32584a;
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass
    @NotNull
    public String getLocation() {
        StringBuilder sb2 = new StringBuilder();
        String name = this.f32584a.getName();
        Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
        sb2.append(StringsKt.I(name, '.', '/', false, 4, null));
        sb2.append(".class");
        return sb2.toString();
    }

    public int hashCode() {
        return this.f32584a.hashCode();
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass
    public void loadClassAnnotations(@NotNull KotlinJvmBinaryClass.AnnotationVisitor visitor, byte[] bArr) {
        Intrinsics.checkNotNullParameter(visitor, "visitor");
        a.f32592a.b(this.f32584a, visitor);
    }

    @NotNull
    public String toString() {
        return ReflectKotlinClass.class.getName() + ": " + this.f32584a;
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass
    public void visitMembers(@NotNull KotlinJvmBinaryClass.MemberVisitor visitor, byte[] bArr) {
        Intrinsics.checkNotNullParameter(visitor, "visitor");
        a.f32592a.i(this.f32584a, visitor);
    }

    private ReflectKotlinClass(Class cls, KotlinClassHeader kotlinClassHeader) {
        this.f32584a = cls;
        this.f32585b = kotlinClassHeader;
    }
}
