package kotlin.reflect.jvm.internal.impl.load.kotlin.header;

import java.security.AccessControlException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import kotlin.reflect.jvm.internal.impl.descriptors.SourceElement;
import kotlin.reflect.jvm.internal.impl.load.java.JvmAnnotationNames;
import kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass;
import kotlin.reflect.jvm.internal.impl.load.kotlin.header.KotlinClassHeader;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.MetadataVersion;
import kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization.BitEncoding;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.resolve.constants.ClassLiteralValue;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class ReadKotlinClassHeaderAnnotationVisitor implements KotlinJvmBinaryClass.AnnotationVisitor {

    /* renamed from: j  reason: collision with root package name */
    private static boolean f33276j;

    /* renamed from: k  reason: collision with root package name */
    private static final Map f33277k;

    /* renamed from: a  reason: collision with root package name */
    private int[] f33278a = null;

    /* renamed from: b  reason: collision with root package name */
    private String f33279b = null;

    /* renamed from: c  reason: collision with root package name */
    private int f33280c = 0;

    /* renamed from: d  reason: collision with root package name */
    private String f33281d = null;

    /* renamed from: e  reason: collision with root package name */
    private String[] f33282e = null;

    /* renamed from: f  reason: collision with root package name */
    private String[] f33283f = null;

    /* renamed from: g  reason: collision with root package name */
    private String[] f33284g = null;

    /* renamed from: h  reason: collision with root package name */
    private KotlinClassHeader.Kind f33285h = null;

    /* renamed from: i  reason: collision with root package name */
    private String[] f33286i = null;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static abstract class b implements KotlinJvmBinaryClass.AnnotationArrayArgumentVisitor {

        /* renamed from: a  reason: collision with root package name */
        private final List f33287a = new ArrayList();

        private static /* synthetic */ void a(int i10) {
            Object[] objArr = new Object[3];
            if (i10 == 1) {
                objArr[0] = "enumEntryName";
            } else if (i10 == 2) {
                objArr[0] = "classLiteralValue";
            } else if (i10 != 3) {
                objArr[0] = "enumClassId";
            } else {
                objArr[0] = "classId";
            }
            objArr[1] = "kotlin/reflect/jvm/internal/impl/load/kotlin/header/ReadKotlinClassHeaderAnnotationVisitor$CollectStringArrayAnnotationVisitor";
            if (i10 == 2) {
                objArr[2] = "visitClassLiteral";
            } else if (i10 != 3) {
                objArr[2] = "visitEnum";
            } else {
                objArr[2] = "visitAnnotation";
            }
            throw new IllegalArgumentException(String.format("Argument for @NotNull parameter '%s' of %s.%s must not be null", objArr));
        }

        protected abstract void b(String[] strArr);

        @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass.AnnotationArrayArgumentVisitor
        public void visit(Object obj) {
            if (obj instanceof String) {
                this.f33287a.add((String) obj);
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass.AnnotationArrayArgumentVisitor
        public KotlinJvmBinaryClass.AnnotationArgumentVisitor visitAnnotation(ClassId classId) {
            if (classId == null) {
                a(3);
                return null;
            }
            return null;
        }

        @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass.AnnotationArrayArgumentVisitor
        public void visitClassLiteral(ClassLiteralValue classLiteralValue) {
            if (classLiteralValue == null) {
                a(2);
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass.AnnotationArrayArgumentVisitor
        public void visitEnd() {
            b((String[]) this.f33287a.toArray(new String[0]));
        }

        @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass.AnnotationArrayArgumentVisitor
        public void visitEnum(ClassId classId, Name name) {
            if (classId == null) {
                a(0);
            }
            if (name == null) {
                a(1);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private class c implements KotlinJvmBinaryClass.AnnotationArgumentVisitor {

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class a extends b {
            a() {
            }

            private static /* synthetic */ void a(int i10) {
                throw new IllegalArgumentException(String.format("Argument for @NotNull parameter '%s' of %s.%s must not be null", "result", "kotlin/reflect/jvm/internal/impl/load/kotlin/header/ReadKotlinClassHeaderAnnotationVisitor$KotlinMetadataArgumentVisitor$1", "visitEnd"));
            }

            @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.header.ReadKotlinClassHeaderAnnotationVisitor.b
            protected void b(String[] strArr) {
                if (strArr == null) {
                    a(0);
                }
                ReadKotlinClassHeaderAnnotationVisitor.this.f33282e = strArr;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class b extends b {
            b() {
            }

            private static /* synthetic */ void a(int i10) {
                throw new IllegalArgumentException(String.format("Argument for @NotNull parameter '%s' of %s.%s must not be null", "result", "kotlin/reflect/jvm/internal/impl/load/kotlin/header/ReadKotlinClassHeaderAnnotationVisitor$KotlinMetadataArgumentVisitor$2", "visitEnd"));
            }

            @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.header.ReadKotlinClassHeaderAnnotationVisitor.b
            protected void b(String[] strArr) {
                if (strArr == null) {
                    a(0);
                }
                ReadKotlinClassHeaderAnnotationVisitor.this.f33283f = strArr;
            }
        }

        private c() {
        }

        private static /* synthetic */ void a(int i10) {
            Object[] objArr = new Object[3];
            if (i10 == 1) {
                objArr[0] = "enumClassId";
            } else if (i10 == 2) {
                objArr[0] = "enumEntryName";
            } else if (i10 != 3) {
                objArr[0] = "classLiteralValue";
            } else {
                objArr[0] = "classId";
            }
            objArr[1] = "kotlin/reflect/jvm/internal/impl/load/kotlin/header/ReadKotlinClassHeaderAnnotationVisitor$KotlinMetadataArgumentVisitor";
            if (i10 == 1 || i10 == 2) {
                objArr[2] = "visitEnum";
            } else if (i10 != 3) {
                objArr[2] = "visitClassLiteral";
            } else {
                objArr[2] = "visitAnnotation";
            }
            throw new IllegalArgumentException(String.format("Argument for @NotNull parameter '%s' of %s.%s must not be null", objArr));
        }

        private KotlinJvmBinaryClass.AnnotationArrayArgumentVisitor b() {
            return new a();
        }

        private KotlinJvmBinaryClass.AnnotationArrayArgumentVisitor c() {
            return new b();
        }

        @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass.AnnotationArgumentVisitor
        public void visit(Name name, Object obj) {
            if (name != null) {
                String asString = name.asString();
                if ("k".equals(asString)) {
                    if (obj instanceof Integer) {
                        ReadKotlinClassHeaderAnnotationVisitor.this.f33285h = KotlinClassHeader.Kind.getById(((Integer) obj).intValue());
                    }
                } else if ("mv".equals(asString)) {
                    if (obj instanceof int[]) {
                        ReadKotlinClassHeaderAnnotationVisitor.this.f33278a = (int[]) obj;
                    }
                } else if ("xs".equals(asString)) {
                    if (obj instanceof String) {
                        String str = (String) obj;
                        if (!str.isEmpty()) {
                            ReadKotlinClassHeaderAnnotationVisitor.this.f33279b = str;
                        }
                    }
                } else if ("xi".equals(asString)) {
                    if (obj instanceof Integer) {
                        ReadKotlinClassHeaderAnnotationVisitor.this.f33280c = ((Integer) obj).intValue();
                    }
                } else if ("pn".equals(asString) && (obj instanceof String)) {
                    String str2 = (String) obj;
                    if (!str2.isEmpty()) {
                        ReadKotlinClassHeaderAnnotationVisitor.this.f33281d = str2;
                    }
                }
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass.AnnotationArgumentVisitor
        public KotlinJvmBinaryClass.AnnotationArgumentVisitor visitAnnotation(Name name, ClassId classId) {
            if (classId == null) {
                a(3);
                return null;
            }
            return null;
        }

        @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass.AnnotationArgumentVisitor
        public KotlinJvmBinaryClass.AnnotationArrayArgumentVisitor visitArray(Name name) {
            String str;
            if (name != null) {
                str = name.asString();
            } else {
                str = null;
            }
            if ("d1".equals(str)) {
                return b();
            }
            if (!"d2".equals(str)) {
                return null;
            }
            return c();
        }

        @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass.AnnotationArgumentVisitor
        public void visitClassLiteral(Name name, ClassLiteralValue classLiteralValue) {
            if (classLiteralValue == null) {
                a(0);
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass.AnnotationArgumentVisitor
        public void visitEnd() {
        }

        @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass.AnnotationArgumentVisitor
        public void visitEnum(Name name, ClassId classId, Name name2) {
            if (classId == null) {
                a(1);
            }
            if (name2 == null) {
                a(2);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private class d implements KotlinJvmBinaryClass.AnnotationArgumentVisitor {

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class a extends b {
            a() {
            }

            private static /* synthetic */ void a(int i10) {
                throw new IllegalArgumentException(String.format("Argument for @NotNull parameter '%s' of %s.%s must not be null", "result", "kotlin/reflect/jvm/internal/impl/load/kotlin/header/ReadKotlinClassHeaderAnnotationVisitor$KotlinSerializedIrArgumentVisitor$1", "visitEnd"));
            }

            @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.header.ReadKotlinClassHeaderAnnotationVisitor.b
            protected void b(String[] strArr) {
                if (strArr == null) {
                    a(0);
                }
                ReadKotlinClassHeaderAnnotationVisitor.this.f33286i = strArr;
            }
        }

        private d() {
        }

        private static /* synthetic */ void a(int i10) {
            Object[] objArr = new Object[3];
            if (i10 == 1) {
                objArr[0] = "enumClassId";
            } else if (i10 == 2) {
                objArr[0] = "enumEntryName";
            } else if (i10 != 3) {
                objArr[0] = "classLiteralValue";
            } else {
                objArr[0] = "classId";
            }
            objArr[1] = "kotlin/reflect/jvm/internal/impl/load/kotlin/header/ReadKotlinClassHeaderAnnotationVisitor$KotlinSerializedIrArgumentVisitor";
            if (i10 == 1 || i10 == 2) {
                objArr[2] = "visitEnum";
            } else if (i10 != 3) {
                objArr[2] = "visitClassLiteral";
            } else {
                objArr[2] = "visitAnnotation";
            }
            throw new IllegalArgumentException(String.format("Argument for @NotNull parameter '%s' of %s.%s must not be null", objArr));
        }

        private KotlinJvmBinaryClass.AnnotationArrayArgumentVisitor b() {
            return new a();
        }

        @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass.AnnotationArgumentVisitor
        public void visit(Name name, Object obj) {
        }

        @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass.AnnotationArgumentVisitor
        public KotlinJvmBinaryClass.AnnotationArgumentVisitor visitAnnotation(Name name, ClassId classId) {
            if (classId == null) {
                a(3);
                return null;
            }
            return null;
        }

        @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass.AnnotationArgumentVisitor
        public KotlinJvmBinaryClass.AnnotationArrayArgumentVisitor visitArray(Name name) {
            String str;
            if (name != null) {
                str = name.asString();
            } else {
                str = null;
            }
            if (!"b".equals(str)) {
                return null;
            }
            return b();
        }

        @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass.AnnotationArgumentVisitor
        public void visitClassLiteral(Name name, ClassLiteralValue classLiteralValue) {
            if (classLiteralValue == null) {
                a(0);
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass.AnnotationArgumentVisitor
        public void visitEnd() {
        }

        @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass.AnnotationArgumentVisitor
        public void visitEnum(Name name, ClassId classId, Name name2) {
            if (classId == null) {
                a(1);
            }
            if (name2 == null) {
                a(2);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private class e implements KotlinJvmBinaryClass.AnnotationArgumentVisitor {

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class a extends b {
            a() {
            }

            private static /* synthetic */ void a(int i10) {
                throw new IllegalArgumentException(String.format("Argument for @NotNull parameter '%s' of %s.%s must not be null", "data", "kotlin/reflect/jvm/internal/impl/load/kotlin/header/ReadKotlinClassHeaderAnnotationVisitor$OldDeprecatedAnnotationArgumentVisitor$1", "visitEnd"));
            }

            @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.header.ReadKotlinClassHeaderAnnotationVisitor.b
            protected void b(String[] strArr) {
                if (strArr == null) {
                    a(0);
                }
                ReadKotlinClassHeaderAnnotationVisitor.this.f33282e = strArr;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class b extends b {
            b() {
            }

            private static /* synthetic */ void a(int i10) {
                throw new IllegalArgumentException(String.format("Argument for @NotNull parameter '%s' of %s.%s must not be null", "data", "kotlin/reflect/jvm/internal/impl/load/kotlin/header/ReadKotlinClassHeaderAnnotationVisitor$OldDeprecatedAnnotationArgumentVisitor$2", "visitEnd"));
            }

            @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.header.ReadKotlinClassHeaderAnnotationVisitor.b
            protected void b(String[] strArr) {
                if (strArr == null) {
                    a(0);
                }
                ReadKotlinClassHeaderAnnotationVisitor.this.f33283f = strArr;
            }
        }

        private e() {
        }

        private static /* synthetic */ void a(int i10) {
            Object[] objArr = new Object[3];
            if (i10 == 1) {
                objArr[0] = "enumClassId";
            } else if (i10 == 2) {
                objArr[0] = "enumEntryName";
            } else if (i10 != 3) {
                objArr[0] = "classLiteralValue";
            } else {
                objArr[0] = "classId";
            }
            objArr[1] = "kotlin/reflect/jvm/internal/impl/load/kotlin/header/ReadKotlinClassHeaderAnnotationVisitor$OldDeprecatedAnnotationArgumentVisitor";
            if (i10 == 1 || i10 == 2) {
                objArr[2] = "visitEnum";
            } else if (i10 != 3) {
                objArr[2] = "visitClassLiteral";
            } else {
                objArr[2] = "visitAnnotation";
            }
            throw new IllegalArgumentException(String.format("Argument for @NotNull parameter '%s' of %s.%s must not be null", objArr));
        }

        private KotlinJvmBinaryClass.AnnotationArrayArgumentVisitor b() {
            return new a();
        }

        private KotlinJvmBinaryClass.AnnotationArrayArgumentVisitor c() {
            return new b();
        }

        @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass.AnnotationArgumentVisitor
        public void visit(Name name, Object obj) {
            String str;
            if (name != null) {
                String asString = name.asString();
                if ("version".equals(asString)) {
                    if (obj instanceof int[]) {
                        ReadKotlinClassHeaderAnnotationVisitor.this.f33278a = (int[]) obj;
                    }
                } else if ("multifileClassName".equals(asString)) {
                    ReadKotlinClassHeaderAnnotationVisitor readKotlinClassHeaderAnnotationVisitor = ReadKotlinClassHeaderAnnotationVisitor.this;
                    if (obj instanceof String) {
                        str = (String) obj;
                    } else {
                        str = null;
                    }
                    readKotlinClassHeaderAnnotationVisitor.f33279b = str;
                }
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass.AnnotationArgumentVisitor
        public KotlinJvmBinaryClass.AnnotationArgumentVisitor visitAnnotation(Name name, ClassId classId) {
            if (classId == null) {
                a(3);
                return null;
            }
            return null;
        }

        @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass.AnnotationArgumentVisitor
        public KotlinJvmBinaryClass.AnnotationArrayArgumentVisitor visitArray(Name name) {
            String str;
            if (name != null) {
                str = name.asString();
            } else {
                str = null;
            }
            if (!"data".equals(str) && !"filePartClassNames".equals(str)) {
                if (!"strings".equals(str)) {
                    return null;
                }
                return c();
            }
            return b();
        }

        @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass.AnnotationArgumentVisitor
        public void visitClassLiteral(Name name, ClassLiteralValue classLiteralValue) {
            if (classLiteralValue == null) {
                a(0);
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass.AnnotationArgumentVisitor
        public void visitEnd() {
        }

        @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass.AnnotationArgumentVisitor
        public void visitEnum(Name name, ClassId classId, Name name2) {
            if (classId == null) {
                a(1);
            }
            if (name2 == null) {
                a(2);
            }
        }
    }

    static {
        try {
            f33276j = "true".equals(System.getProperty("kotlin.ignore.old.metadata"));
        } catch (AccessControlException unused) {
            f33276j = false;
        }
        HashMap hashMap = new HashMap();
        f33277k = hashMap;
        hashMap.put(ClassId.topLevel(new FqName("kotlin.jvm.internal.KotlinClass")), KotlinClassHeader.Kind.CLASS);
        hashMap.put(ClassId.topLevel(new FqName("kotlin.jvm.internal.KotlinFileFacade")), KotlinClassHeader.Kind.FILE_FACADE);
        hashMap.put(ClassId.topLevel(new FqName("kotlin.jvm.internal.KotlinMultifileClass")), KotlinClassHeader.Kind.MULTIFILE_CLASS);
        hashMap.put(ClassId.topLevel(new FqName("kotlin.jvm.internal.KotlinMultifileClassPart")), KotlinClassHeader.Kind.MULTIFILE_CLASS_PART);
        hashMap.put(ClassId.topLevel(new FqName("kotlin.jvm.internal.KotlinSyntheticClass")), KotlinClassHeader.Kind.SYNTHETIC_CLASS);
    }

    private static /* synthetic */ void a(int i10) {
        Object[] objArr = new Object[3];
        if (i10 != 1) {
            objArr[0] = "classId";
        } else {
            objArr[0] = "source";
        }
        objArr[1] = "kotlin/reflect/jvm/internal/impl/load/kotlin/header/ReadKotlinClassHeaderAnnotationVisitor";
        objArr[2] = "visitAnnotation";
        throw new IllegalArgumentException(String.format("Argument for @NotNull parameter '%s' of %s.%s must not be null", objArr));
    }

    private boolean j() {
        KotlinClassHeader.Kind kind = this.f33285h;
        if (kind != KotlinClassHeader.Kind.CLASS && kind != KotlinClassHeader.Kind.FILE_FACADE && kind != KotlinClassHeader.Kind.MULTIFILE_CLASS_PART) {
            return false;
        }
        return true;
    }

    public KotlinClassHeader createHeader(MetadataVersion metadataVersion) {
        boolean z10;
        byte[] bArr = null;
        if (this.f33285h == null || this.f33278a == null) {
            return null;
        }
        int[] iArr = this.f33278a;
        if ((this.f33280c & 8) != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        MetadataVersion metadataVersion2 = new MetadataVersion(iArr, z10);
        if (!metadataVersion2.isCompatible(metadataVersion)) {
            this.f33284g = this.f33282e;
            this.f33282e = null;
        } else if (j() && this.f33282e == null) {
            return null;
        }
        String[] strArr = this.f33286i;
        if (strArr != null) {
            bArr = BitEncoding.decodeBytes(strArr);
        }
        return new KotlinClassHeader(this.f33285h, metadataVersion2, this.f33282e, this.f33284g, this.f33283f, this.f33279b, this.f33280c, this.f33281d, bArr);
    }

    public KotlinClassHeader createHeaderWithDefaultMetadataVersion() {
        return createHeader(MetadataVersion.INSTANCE);
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass.AnnotationVisitor
    public KotlinJvmBinaryClass.AnnotationArgumentVisitor visitAnnotation(@NotNull ClassId classId, @NotNull SourceElement sourceElement) {
        KotlinClassHeader.Kind kind;
        if (classId == null) {
            a(0);
        }
        if (sourceElement == null) {
            a(1);
        }
        FqName asSingleFqName = classId.asSingleFqName();
        if (asSingleFqName.equals(JvmAnnotationNames.METADATA_FQ_NAME)) {
            return new c();
        }
        if (asSingleFqName.equals(JvmAnnotationNames.SERIALIZED_IR_FQ_NAME)) {
            return new d();
        }
        if (f33276j || this.f33285h != null || (kind = (KotlinClassHeader.Kind) f33277k.get(classId)) == null) {
            return null;
        }
        this.f33285h = kind;
        return new e();
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass.AnnotationVisitor
    public void visitEnd() {
    }
}
