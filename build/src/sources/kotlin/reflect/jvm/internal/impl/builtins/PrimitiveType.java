package kotlin.reflect.jvm.internal.impl.builtins;

import java.util.Set;
import jr.l;
import jr.o;
import kotlin.Lazy;
import kotlin.collections.x0;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.name.Name;
import org.jetbrains.annotations.NotNull;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class PrimitiveType {
    public static final PrimitiveType BOOLEAN = new PrimitiveType("BOOLEAN", 0, "Boolean");
    public static final PrimitiveType BYTE;
    public static final PrimitiveType CHAR;
    @NotNull
    public static final Companion Companion;
    public static final PrimitiveType DOUBLE;
    public static final PrimitiveType FLOAT;
    public static final PrimitiveType INT;
    public static final PrimitiveType LONG;
    @NotNull
    public static final Set<PrimitiveType> NUMBER_TYPES;
    public static final PrimitiveType SHORT;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ PrimitiveType[] f33216p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f33217q;

    /* renamed from: d  reason: collision with root package name */
    private final Name f33218d;

    /* renamed from: e  reason: collision with root package name */
    private final Name f33219e;

    /* renamed from: i  reason: collision with root package name */
    private final Lazy f33220i;

    /* renamed from: o  reason: collision with root package name */
    private final Lazy f33221o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    static {
        PrimitiveType primitiveType = new PrimitiveType("CHAR", 1, "Char");
        CHAR = primitiveType;
        PrimitiveType primitiveType2 = new PrimitiveType("BYTE", 2, "Byte");
        BYTE = primitiveType2;
        PrimitiveType primitiveType3 = new PrimitiveType("SHORT", 3, "Short");
        SHORT = primitiveType3;
        PrimitiveType primitiveType4 = new PrimitiveType("INT", 4, "Int");
        INT = primitiveType4;
        PrimitiveType primitiveType5 = new PrimitiveType("FLOAT", 5, "Float");
        FLOAT = primitiveType5;
        PrimitiveType primitiveType6 = new PrimitiveType("LONG", 6, "Long");
        LONG = primitiveType6;
        PrimitiveType primitiveType7 = new PrimitiveType("DOUBLE", 7, "Double");
        DOUBLE = primitiveType7;
        PrimitiveType[] a10 = a();
        f33216p = a10;
        f33217q = qr.a.a(a10);
        Companion = new Companion(null);
        NUMBER_TYPES = x0.i(primitiveType, primitiveType2, primitiveType3, primitiveType4, primitiveType5, primitiveType6, primitiveType7);
    }

    private PrimitiveType(String str, int i10, String str2) {
        Name identifier = Name.identifier(str2);
        Intrinsics.checkNotNullExpressionValue(identifier, "identifier(...)");
        this.f33218d = identifier;
        Name identifier2 = Name.identifier(str2 + "Array");
        Intrinsics.checkNotNullExpressionValue(identifier2, "identifier(...)");
        this.f33219e = identifier2;
        o oVar = o.f32182e;
        this.f33220i = l.a(oVar, new c(this));
        this.f33221o = l.a(oVar, new d(this));
    }

    private static final /* synthetic */ PrimitiveType[] a() {
        return new PrimitiveType[]{BOOLEAN, CHAR, BYTE, SHORT, INT, FLOAT, LONG, DOUBLE};
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final FqName f(PrimitiveType primitiveType) {
        return StandardNames.BUILT_INS_PACKAGE_FQ_NAME.child(primitiveType.f33219e);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final FqName g(PrimitiveType primitiveType) {
        return StandardNames.BUILT_INS_PACKAGE_FQ_NAME.child(primitiveType.f33218d);
    }

    public static PrimitiveType valueOf(String str) {
        return (PrimitiveType) Enum.valueOf(PrimitiveType.class, str);
    }

    public static PrimitiveType[] values() {
        return (PrimitiveType[]) f33216p.clone();
    }

    @NotNull
    public final FqName getArrayTypeFqName() {
        return (FqName) this.f33221o.getValue();
    }

    @NotNull
    public final Name getArrayTypeName() {
        return this.f33219e;
    }

    @NotNull
    public final FqName getTypeFqName() {
        return (FqName) this.f33220i.getValue();
    }

    @NotNull
    public final Name getTypeName() {
        return this.f33218d;
    }
}
