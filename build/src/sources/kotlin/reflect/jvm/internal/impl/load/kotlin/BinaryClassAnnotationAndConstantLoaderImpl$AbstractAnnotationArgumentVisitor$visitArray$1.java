package kotlin.reflect.jvm.internal.impl.load.kotlin;

import java.util.ArrayList;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.SourceElement;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.AnnotationDescriptor;
import kotlin.reflect.jvm.internal.impl.load.kotlin.BinaryClassAnnotationAndConstantLoaderImpl;
import kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.resolve.constants.AnnotationValue;
import kotlin.reflect.jvm.internal.impl.resolve.constants.ClassLiteralValue;
import kotlin.reflect.jvm.internal.impl.resolve.constants.EnumValue;
import kotlin.reflect.jvm.internal.impl.resolve.constants.KClassValue;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class BinaryClassAnnotationAndConstantLoaderImpl$AbstractAnnotationArgumentVisitor$visitArray$1 implements KotlinJvmBinaryClass.AnnotationArrayArgumentVisitor {

    /* renamed from: a  reason: collision with root package name */
    private final ArrayList f33649a = new ArrayList();

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ BinaryClassAnnotationAndConstantLoaderImpl f33650b;

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ Name f33651c;

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ BinaryClassAnnotationAndConstantLoaderImpl.AbstractAnnotationArgumentVisitor f33652d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public BinaryClassAnnotationAndConstantLoaderImpl$AbstractAnnotationArgumentVisitor$visitArray$1(BinaryClassAnnotationAndConstantLoaderImpl binaryClassAnnotationAndConstantLoaderImpl, Name name, BinaryClassAnnotationAndConstantLoaderImpl.AbstractAnnotationArgumentVisitor abstractAnnotationArgumentVisitor) {
        this.f33650b = binaryClassAnnotationAndConstantLoaderImpl;
        this.f33651c = name;
        this.f33652d = abstractAnnotationArgumentVisitor;
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass.AnnotationArrayArgumentVisitor
    public void visit(Object obj) {
        this.f33649a.add(this.f33650b.w(this.f33651c, obj));
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass.AnnotationArrayArgumentVisitor
    public KotlinJvmBinaryClass.AnnotationArgumentVisitor visitAnnotation(ClassId classId) {
        Intrinsics.checkNotNullParameter(classId, "classId");
        final ArrayList arrayList = new ArrayList();
        BinaryClassAnnotationAndConstantLoaderImpl binaryClassAnnotationAndConstantLoaderImpl = this.f33650b;
        SourceElement NO_SOURCE = SourceElement.NO_SOURCE;
        Intrinsics.checkNotNullExpressionValue(NO_SOURCE, "NO_SOURCE");
        final KotlinJvmBinaryClass.AnnotationArgumentVisitor i10 = binaryClassAnnotationAndConstantLoaderImpl.i(classId, NO_SOURCE, arrayList);
        Intrinsics.checkNotNull(i10);
        return new KotlinJvmBinaryClass.AnnotationArgumentVisitor(this, arrayList) { // from class: kotlin.reflect.jvm.internal.impl.load.kotlin.BinaryClassAnnotationAndConstantLoaderImpl$AbstractAnnotationArgumentVisitor$visitArray$1$visitAnnotation$1

            /* renamed from: a  reason: collision with root package name */
            private final /* synthetic */ KotlinJvmBinaryClass.AnnotationArgumentVisitor f33653a;

            /* renamed from: c  reason: collision with root package name */
            final /* synthetic */ BinaryClassAnnotationAndConstantLoaderImpl$AbstractAnnotationArgumentVisitor$visitArray$1 f33655c;

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ ArrayList f33656d;

            /* JADX INFO: Access modifiers changed from: package-private */
            {
                this.f33655c = this;
                this.f33656d = arrayList;
                this.f33653a = KotlinJvmBinaryClass.AnnotationArgumentVisitor.this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass.AnnotationArgumentVisitor
            public void visit(Name name, Object obj) {
                this.f33653a.visit(name, obj);
            }

            @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass.AnnotationArgumentVisitor
            public KotlinJvmBinaryClass.AnnotationArgumentVisitor visitAnnotation(Name name, ClassId classId2) {
                Intrinsics.checkNotNullParameter(classId2, "classId");
                return this.f33653a.visitAnnotation(name, classId2);
            }

            @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass.AnnotationArgumentVisitor
            public KotlinJvmBinaryClass.AnnotationArrayArgumentVisitor visitArray(Name name) {
                return this.f33653a.visitArray(name);
            }

            @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass.AnnotationArgumentVisitor
            public void visitClassLiteral(Name name, ClassLiteralValue value) {
                Intrinsics.checkNotNullParameter(value, "value");
                this.f33653a.visitClassLiteral(name, value);
            }

            @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass.AnnotationArgumentVisitor
            public void visitEnd() {
                ArrayList arrayList2;
                KotlinJvmBinaryClass.AnnotationArgumentVisitor.this.visitEnd();
                arrayList2 = this.f33655c.f33649a;
                arrayList2.add(new AnnotationValue((AnnotationDescriptor) CollectionsKt.Q0(this.f33656d)));
            }

            @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass.AnnotationArgumentVisitor
            public void visitEnum(Name name, ClassId enumClassId, Name enumEntryName) {
                Intrinsics.checkNotNullParameter(enumClassId, "enumClassId");
                Intrinsics.checkNotNullParameter(enumEntryName, "enumEntryName");
                this.f33653a.visitEnum(name, enumClassId, enumEntryName);
            }
        };
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass.AnnotationArrayArgumentVisitor
    public void visitClassLiteral(ClassLiteralValue value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f33649a.add(new KClassValue(value));
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass.AnnotationArrayArgumentVisitor
    public void visitEnd() {
        this.f33652d.visitArrayValue(this.f33651c, this.f33649a);
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass.AnnotationArrayArgumentVisitor
    public void visitEnum(ClassId enumClassId, Name enumEntryName) {
        Intrinsics.checkNotNullParameter(enumClassId, "enumClassId");
        Intrinsics.checkNotNullParameter(enumEntryName, "enumEntryName");
        this.f33649a.add(new EnumValue(enumClassId, enumEntryName));
    }
}
