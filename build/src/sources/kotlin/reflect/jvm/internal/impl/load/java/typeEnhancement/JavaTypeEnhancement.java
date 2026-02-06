package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.JavaResolverSettings;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import kotlin.reflect.jvm.internal.impl.types.SpecialTypesKt;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\ntypeEnhancement.kt\nKotlin\n*S Kotlin\n*F\n+ 1 typeEnhancement.kt\norg/jetbrains/kotlin/load/java/typeEnhancement/JavaTypeEnhancement\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,261:1\n1#2:262\n3550#3,7:263\n1740#3,3:270\n3550#3,7:273\n*S KotlinDebug\n*F\n+ 1 typeEnhancement.kt\norg/jetbrains/kotlin/load/java/typeEnhancement/JavaTypeEnhancement\n*L\n117#1:263,7\n143#1:270,3\n155#1:273,7\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JavaTypeEnhancement {

    /* renamed from: a  reason: collision with root package name */
    private final JavaResolverSettings f33054a;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final KotlinType f33055a;

        /* renamed from: b  reason: collision with root package name */
        private final int f33056b;

        public a(KotlinType kotlinType, int i10) {
            this.f33055a = kotlinType;
            this.f33056b = i10;
        }

        public final int a() {
            return this.f33056b;
        }

        public final KotlinType b() {
            return this.f33055a;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final SimpleType f33057a;

        /* renamed from: b  reason: collision with root package name */
        private final int f33058b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f33059c;

        public b(SimpleType simpleType, int i10, boolean z10) {
            this.f33057a = simpleType;
            this.f33058b = i10;
            this.f33059c = z10;
        }

        public final boolean a() {
            return this.f33059c;
        }

        public final int b() {
            return this.f33058b;
        }

        public final SimpleType c() {
            return this.f33057a;
        }
    }

    public JavaTypeEnhancement(@NotNull JavaResolverSettings javaResolverSettings) {
        Intrinsics.checkNotNullParameter(javaResolverSettings, "javaResolverSettings");
        this.f33054a = javaResolverSettings;
    }

    /* JADX WARN: Removed duplicated region for block: B:109:0x01e4 A[SYNTHETIC] */
    /* JADX WARN: Removed duplicated region for block: B:69:0x0183  */
    /* JADX WARN: Removed duplicated region for block: B:72:0x018a  */
    /* JADX WARN: Removed duplicated region for block: B:73:0x018c  */
    /* JADX WARN: Removed duplicated region for block: B:82:0x01e3  */
    /* JADX WARN: Removed duplicated region for block: B:85:0x01ea  */
    /* JADX WARN: Removed duplicated region for block: B:87:0x01f0  */
    /* JADX WARN: Removed duplicated region for block: B:90:0x0204  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.JavaTypeEnhancement.b a(kotlin.reflect.jvm.internal.impl.types.SimpleType r21, kotlin.jvm.functions.Function1 r22, int r23, kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.TypeComponentPosition r24, boolean r25, boolean r26) {
        /*
            Method dump skipped, instructions count: 539
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.JavaTypeEnhancement.a(kotlin.reflect.jvm.internal.impl.types.SimpleType, kotlin.jvm.functions.Function1, int, kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.TypeComponentPosition, boolean, boolean):kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.JavaTypeEnhancement$b");
    }

    static /* synthetic */ b b(JavaTypeEnhancement javaTypeEnhancement, SimpleType simpleType, Function1 function1, int i10, TypeComponentPosition typeComponentPosition, boolean z10, boolean z11, int i11, Object obj) {
        if ((i11 & 8) != 0) {
            z10 = false;
        }
        if ((i11 & 16) != 0) {
            z11 = false;
        }
        return javaTypeEnhancement.a(simpleType, function1, i10, typeComponentPosition, z10, z11);
    }

    /* JADX WARN: Code restructure failed: missing block: B:39:0x009b, code lost:
        if (r1 == null) goto L41;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.JavaTypeEnhancement.a c(kotlin.reflect.jvm.internal.impl.types.UnwrappedType r21, kotlin.jvm.functions.Function1 r22, int r23, boolean r24) {
        /*
            r20 = this;
            r0 = r21
            boolean r1 = kotlin.reflect.jvm.internal.impl.types.KotlinTypeKt.isError(r0)
            r2 = 0
            if (r1 == 0) goto L10
            kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.JavaTypeEnhancement$a r0 = new kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.JavaTypeEnhancement$a
            r1 = 1
            r0.<init>(r2, r1)
            return r0
        L10:
            boolean r1 = r0 instanceof kotlin.reflect.jvm.internal.impl.types.FlexibleType
            if (r1 == 0) goto Lb2
            boolean r8 = r0 instanceof kotlin.reflect.jvm.internal.impl.types.RawType
            r1 = r0
            kotlin.reflect.jvm.internal.impl.types.FlexibleType r1 = (kotlin.reflect.jvm.internal.impl.types.FlexibleType) r1
            kotlin.reflect.jvm.internal.impl.types.SimpleType r4 = r1.getLowerBound()
            kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.TypeComponentPosition r7 = kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.TypeComponentPosition.FLEXIBLE_LOWER
            r3 = r20
            r5 = r22
            r6 = r23
            r9 = r24
            kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.JavaTypeEnhancement$b r10 = r3.a(r4, r5, r6, r7, r8, r9)
            kotlin.reflect.jvm.internal.impl.types.SimpleType r4 = r1.getUpperBound()
            kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.TypeComponentPosition r7 = kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.TypeComponentPosition.FLEXIBLE_UPPER
            kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.JavaTypeEnhancement$b r4 = r3.a(r4, r5, r6, r7, r8, r9)
            r10.b()
            r4.b()
            kotlin.reflect.jvm.internal.impl.types.SimpleType r3 = r10.c()
            if (r3 != 0) goto L48
            kotlin.reflect.jvm.internal.impl.types.SimpleType r3 = r4.c()
            if (r3 != 0) goto L48
            goto La8
        L48:
            boolean r2 = r10.a()
            if (r2 != 0) goto L8a
            boolean r2 = r4.a()
            if (r2 == 0) goto L55
            goto L8a
        L55:
            if (r8 == 0) goto L71
            kotlin.reflect.jvm.internal.impl.load.java.lazy.types.RawTypeImpl r2 = new kotlin.reflect.jvm.internal.impl.load.java.lazy.types.RawTypeImpl
            kotlin.reflect.jvm.internal.impl.types.SimpleType r0 = r10.c()
            if (r0 != 0) goto L63
            kotlin.reflect.jvm.internal.impl.types.SimpleType r0 = r1.getLowerBound()
        L63:
            kotlin.reflect.jvm.internal.impl.types.SimpleType r3 = r4.c()
            if (r3 != 0) goto L6d
            kotlin.reflect.jvm.internal.impl.types.SimpleType r3 = r1.getUpperBound()
        L6d:
            r2.<init>(r0, r3)
            goto La8
        L71:
            kotlin.reflect.jvm.internal.impl.types.SimpleType r0 = r10.c()
            if (r0 != 0) goto L7b
            kotlin.reflect.jvm.internal.impl.types.SimpleType r0 = r1.getLowerBound()
        L7b:
            kotlin.reflect.jvm.internal.impl.types.SimpleType r2 = r4.c()
            if (r2 != 0) goto L85
            kotlin.reflect.jvm.internal.impl.types.SimpleType r2 = r1.getUpperBound()
        L85:
            kotlin.reflect.jvm.internal.impl.types.UnwrappedType r2 = kotlin.reflect.jvm.internal.impl.types.KotlinTypeFactory.flexibleType(r0, r2)
            goto La8
        L8a:
            kotlin.reflect.jvm.internal.impl.types.SimpleType r1 = r4.c()
            if (r1 == 0) goto L9d
            kotlin.reflect.jvm.internal.impl.types.SimpleType r2 = r10.c()
            if (r2 != 0) goto L97
            r2 = r1
        L97:
            kotlin.reflect.jvm.internal.impl.types.UnwrappedType r1 = kotlin.reflect.jvm.internal.impl.types.KotlinTypeFactory.flexibleType(r2, r1)
            if (r1 != 0) goto La4
        L9d:
            kotlin.reflect.jvm.internal.impl.types.SimpleType r1 = r10.c()
            kotlin.jvm.internal.Intrinsics.checkNotNull(r1)
        La4:
            kotlin.reflect.jvm.internal.impl.types.UnwrappedType r2 = kotlin.reflect.jvm.internal.impl.types.TypeWithEnhancementKt.wrapEnhancement(r0, r1)
        La8:
            kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.JavaTypeEnhancement$a r0 = new kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.JavaTypeEnhancement$a
            int r1 = r10.b()
            r0.<init>(r2, r1)
            return r0
        Lb2:
            boolean r1 = r0 instanceof kotlin.reflect.jvm.internal.impl.types.SimpleType
            if (r1 == 0) goto Lea
            r12 = r0
            kotlin.reflect.jvm.internal.impl.types.SimpleType r12 = (kotlin.reflect.jvm.internal.impl.types.SimpleType) r12
            kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.TypeComponentPosition r15 = kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.TypeComponentPosition.INFLEXIBLE
            r18 = 8
            r19 = 0
            r16 = 0
            r11 = r20
            r13 = r22
            r14 = r23
            r17 = r24
            kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.JavaTypeEnhancement$b r1 = b(r11, r12, r13, r14, r15, r16, r17, r18, r19)
            kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.JavaTypeEnhancement$a r2 = new kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.JavaTypeEnhancement$a
            boolean r3 = r1.a()
            if (r3 == 0) goto Lde
            kotlin.reflect.jvm.internal.impl.types.SimpleType r3 = r1.c()
            kotlin.reflect.jvm.internal.impl.types.UnwrappedType r0 = kotlin.reflect.jvm.internal.impl.types.TypeWithEnhancementKt.wrapEnhancement(r0, r3)
            goto Le2
        Lde:
            kotlin.reflect.jvm.internal.impl.types.SimpleType r0 = r1.c()
        Le2:
            int r1 = r1.b()
            r2.<init>(r0, r1)
            return r2
        Lea:
            qr.p r0 = new qr.p
            r0.<init>()
            throw r0
        */
        throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.JavaTypeEnhancement.c(kotlin.reflect.jvm.internal.impl.types.UnwrappedType, kotlin.jvm.functions.Function1, int, boolean):kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.JavaTypeEnhancement$a");
    }

    private final SimpleType d(SimpleType simpleType) {
        if (this.f33054a.getCorrectNullabilityForNotNullTypeParameter()) {
            return SpecialTypesKt.makeSimpleTypeDefinitelyNotNullOrNotNull(simpleType, true);
        }
        return new NotNullTypeParameterImpl(simpleType);
    }

    public final KotlinType enhance(@NotNull KotlinType kotlinType, @NotNull Function1<? super Integer, JavaTypeQualifiers> qualifiers, boolean z10) {
        Intrinsics.checkNotNullParameter(kotlinType, "<this>");
        Intrinsics.checkNotNullParameter(qualifiers, "qualifiers");
        return c(kotlinType.unwrap(), qualifiers, 0, z10).b();
    }
}
