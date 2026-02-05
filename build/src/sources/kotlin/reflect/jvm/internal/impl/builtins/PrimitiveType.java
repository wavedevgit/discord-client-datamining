package kotlin.reflect.jvm.internal.impl.builtins;

import java.util.Set;
import kotlin.Lazy;
import kotlin.collections.x0;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.name.Name;
import or.l;
import or.o;
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
    private static final /* synthetic */ PrimitiveType[] f32130p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f32131q;

    /* renamed from: d  reason: collision with root package name */
    private final Name f32132d;

    /* renamed from: e  reason: collision with root package name */
    private final Name f32133e;

    /* renamed from: i  reason: collision with root package name */
    private final Lazy f32134i;

    /* renamed from: o  reason: collision with root package name */
    private final Lazy f32135o;

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
        f32130p = a10;
        f32131q = vr.a.a(a10);
        Companion = new Companion(null);
        NUMBER_TYPES = x0.i(primitiveType, primitiveType2, primitiveType3, primitiveType4, primitiveType5, primitiveType6, primitiveType7);
    }

    private PrimitiveType(String str, int i10, String str2) {
        Name identifier = Name.identifier(str2);
        Intrinsics.checkNotNullExpressionValue(identifier, "identifier(...)");
        this.f32132d = identifier;
        Name identifier2 = Name.identifier(str2 + "Array");
        Intrinsics.checkNotNullExpressionValue(identifier2, "identifier(...)");
        this.f32133e = identifier2;
        o oVar = o.f44232e;
        this.f32134i = l.b(oVar, new c(this));
        this.f32135o = l.b(oVar, new d(this));
    }

    private static final /* synthetic */ PrimitiveType[] a() {
        return new PrimitiveType[]{BOOLEAN, CHAR, BYTE, SHORT, INT, FLOAT, LONG, DOUBLE};
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final FqName f(PrimitiveType primitiveType) {
        return StandardNames.BUILT_INS_PACKAGE_FQ_NAME.child(primitiveType.f32133e);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final FqName g(PrimitiveType primitiveType) {
        return StandardNames.BUILT_INS_PACKAGE_FQ_NAME.child(primitiveType.f32132d);
    }

    public static PrimitiveType valueOf(String str) {
        return (PrimitiveType) Enum.valueOf(PrimitiveType.class, str);
    }

    public static PrimitiveType[] values() {
        return (PrimitiveType[]) f32130p.clone();
    }

    @NotNull
    public final FqName getArrayTypeFqName() {
        return (FqName) this.f32135o.getValue();
    }

    @NotNull
    public final Name getArrayTypeName() {
        return this.f32133e;
    }

    @NotNull
    public final FqName getTypeFqName() {
        return (FqName) this.f32134i.getValue();
    }

    @NotNull
    public final Name getTypeName() {
        return this.f32132d;
    }
}
