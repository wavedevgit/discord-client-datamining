package kotlin.reflect.jvm.internal.impl.load.kotlin;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.types.Variance;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class TypeMappingMode {
    @NotNull
    public static final TypeMappingMode CLASS_DECLARATION;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    public static final TypeMappingMode DEFAULT;
    @NotNull
    public static final TypeMappingMode DEFAULT_UAST;
    @NotNull
    public static final TypeMappingMode GENERIC_ARGUMENT;
    @NotNull
    public static final TypeMappingMode GENERIC_ARGUMENT_UAST;
    @NotNull
    public static final TypeMappingMode RETURN_TYPE_BOXED;
    @NotNull
    public static final TypeMappingMode SUPER_TYPE;
    @NotNull
    public static final TypeMappingMode SUPER_TYPE_KOTLIN_COLLECTIONS_AS_IS;
    @NotNull
    public static final TypeMappingMode VALUE_FOR_ANNOTATION;

    /* renamed from: a  reason: collision with root package name */
    private final boolean f33228a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f33229b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f33230c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f33231d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f33232e;

    /* renamed from: f  reason: collision with root package name */
    private final TypeMappingMode f33233f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f33234g;

    /* renamed from: h  reason: collision with root package name */
    private final TypeMappingMode f33235h;

    /* renamed from: i  reason: collision with root package name */
    private final TypeMappingMode f33236i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f33237j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[Variance.values().length];
            try {
                iArr[Variance.IN_VARIANCE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[Variance.INVARIANT.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    static {
        TypeMappingMode typeMappingMode = new TypeMappingMode(false, false, false, false, false, null, false, null, null, false, 1023, null);
        GENERIC_ARGUMENT = typeMappingMode;
        TypeMappingMode typeMappingMode2 = new TypeMappingMode(false, false, false, false, false, null, false, null, null, true, 511, null);
        GENERIC_ARGUMENT_UAST = typeMappingMode2;
        RETURN_TYPE_BOXED = new TypeMappingMode(false, true, false, false, false, null, false, null, null, false, 1021, null);
        DEFAULT = new TypeMappingMode(false, false, false, false, false, typeMappingMode, false, null, null, false, 988, null);
        DEFAULT_UAST = new TypeMappingMode(false, false, false, false, false, typeMappingMode2, false, null, null, true, 476, null);
        CLASS_DECLARATION = new TypeMappingMode(false, true, false, false, false, typeMappingMode, false, null, null, false, 988, null);
        SUPER_TYPE = new TypeMappingMode(false, false, false, true, false, typeMappingMode, false, null, null, false, 983, null);
        SUPER_TYPE_KOTLIN_COLLECTIONS_AS_IS = new TypeMappingMode(false, false, false, true, false, typeMappingMode, false, null, null, false, 919, null);
        VALUE_FOR_ANNOTATION = new TypeMappingMode(false, false, true, false, false, typeMappingMode, false, null, null, false, 984, null);
    }

    public TypeMappingMode() {
        this(false, false, false, false, false, null, false, null, null, false, 1023, null);
    }

    public final boolean getKotlinCollectionsToJavaCollections() {
        return this.f33234g;
    }

    public final boolean getMapTypeAliases() {
        return this.f33237j;
    }

    public final boolean getNeedInlineClassWrapping() {
        return this.f33229b;
    }

    public final boolean getNeedPrimitiveBoxing() {
        return this.f33228a;
    }

    public final boolean isForAnnotationParameter() {
        return this.f33230c;
    }

    @NotNull
    public final TypeMappingMode toGenericArgumentMode(@NotNull Variance effectiveVariance, boolean z10) {
        Intrinsics.checkNotNullParameter(effectiveVariance, "effectiveVariance");
        if (!z10 || !this.f33230c) {
            int i10 = WhenMappings.$EnumSwitchMapping$0[effectiveVariance.ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    TypeMappingMode typeMappingMode = this.f33233f;
                    if (typeMappingMode != null) {
                        return typeMappingMode;
                    }
                } else {
                    TypeMappingMode typeMappingMode2 = this.f33236i;
                    if (typeMappingMode2 != null) {
                        return typeMappingMode2;
                    }
                }
            } else {
                TypeMappingMode typeMappingMode3 = this.f33235h;
                if (typeMappingMode3 != null) {
                    return typeMappingMode3;
                }
            }
        }
        return this;
    }

    @NotNull
    public final TypeMappingMode wrapInlineClassesMode() {
        return new TypeMappingMode(this.f33228a, true, this.f33230c, this.f33231d, this.f33232e, this.f33233f, this.f33234g, this.f33235h, this.f33236i, false, IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING, null);
    }

    public TypeMappingMode(boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, TypeMappingMode typeMappingMode, boolean z15, TypeMappingMode typeMappingMode2, TypeMappingMode typeMappingMode3, boolean z16) {
        this.f33228a = z10;
        this.f33229b = z11;
        this.f33230c = z12;
        this.f33231d = z13;
        this.f33232e = z14;
        this.f33233f = typeMappingMode;
        this.f33234g = z15;
        this.f33235h = typeMappingMode2;
        this.f33236i = typeMappingMode3;
        this.f33237j = z16;
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public /* synthetic */ TypeMappingMode(boolean r3, boolean r4, boolean r5, boolean r6, boolean r7, kotlin.reflect.jvm.internal.impl.load.kotlin.TypeMappingMode r8, boolean r9, kotlin.reflect.jvm.internal.impl.load.kotlin.TypeMappingMode r10, kotlin.reflect.jvm.internal.impl.load.kotlin.TypeMappingMode r11, boolean r12, int r13, kotlin.jvm.internal.DefaultConstructorMarker r14) {
        /*
            r2 = this;
            r14 = r13 & 1
            r0 = 1
            if (r14 == 0) goto L6
            r3 = r0
        L6:
            r14 = r13 & 2
            if (r14 == 0) goto Lb
            r4 = r0
        Lb:
            r14 = r13 & 4
            r1 = 0
            if (r14 == 0) goto L11
            r5 = r1
        L11:
            r14 = r13 & 8
            if (r14 == 0) goto L16
            r6 = r1
        L16:
            r14 = r13 & 16
            if (r14 == 0) goto L1b
            r7 = r1
        L1b:
            r14 = r13 & 32
            if (r14 == 0) goto L20
            r8 = 0
        L20:
            r14 = r13 & 64
            if (r14 == 0) goto L25
            r9 = r0
        L25:
            r14 = r13 & 128(0x80, float:1.794E-43)
            if (r14 == 0) goto L2a
            r10 = r8
        L2a:
            r14 = r13 & 256(0x100, float:3.59E-43)
            if (r14 == 0) goto L2f
            r11 = r8
        L2f:
            r13 = r13 & 512(0x200, float:7.175E-43)
            if (r13 == 0) goto L3f
            r13 = r1
        L34:
            r12 = r11
            r11 = r10
            r10 = r9
            r9 = r8
            r8 = r7
            r7 = r6
            r6 = r5
            r5 = r4
            r4 = r3
            r3 = r2
            goto L41
        L3f:
            r13 = r12
            goto L34
        L41:
            r3.<init>(r4, r5, r6, r7, r8, r9, r10, r11, r12, r13)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.load.kotlin.TypeMappingMode.<init>(boolean, boolean, boolean, boolean, boolean, kotlin.reflect.jvm.internal.impl.load.kotlin.TypeMappingMode, boolean, kotlin.reflect.jvm.internal.impl.load.kotlin.TypeMappingMode, kotlin.reflect.jvm.internal.impl.load.kotlin.TypeMappingMode, boolean, int, kotlin.jvm.internal.DefaultConstructorMarker):void");
    }
}
