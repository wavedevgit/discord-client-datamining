package kotlin.reflect.jvm.internal.impl.load.kotlin;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.resolve.jvm.JvmPrimitiveType;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class JvmType {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: a  reason: collision with root package name */
    private static final Primitive f33775a = new Primitive(JvmPrimitiveType.BOOLEAN);

    /* renamed from: b  reason: collision with root package name */
    private static final Primitive f33776b = new Primitive(JvmPrimitiveType.CHAR);

    /* renamed from: c  reason: collision with root package name */
    private static final Primitive f33777c = new Primitive(JvmPrimitiveType.BYTE);

    /* renamed from: d  reason: collision with root package name */
    private static final Primitive f33778d = new Primitive(JvmPrimitiveType.SHORT);

    /* renamed from: e  reason: collision with root package name */
    private static final Primitive f33779e = new Primitive(JvmPrimitiveType.INT);

    /* renamed from: f  reason: collision with root package name */
    private static final Primitive f33780f = new Primitive(JvmPrimitiveType.FLOAT);

    /* renamed from: g  reason: collision with root package name */
    private static final Primitive f33781g = new Primitive(JvmPrimitiveType.LONG);

    /* renamed from: h  reason: collision with root package name */
    private static final Primitive f33782h = new Primitive(JvmPrimitiveType.DOUBLE);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Array extends JvmType {

        /* renamed from: i  reason: collision with root package name */
        private final JvmType f33783i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public Array(@NotNull JvmType elementType) {
            super(null);
            Intrinsics.checkNotNullParameter(elementType, "elementType");
            this.f33783i = elementType;
        }

        @NotNull
        public final JvmType getElementType() {
            return this.f33783i;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final Primitive getBOOLEAN$descriptors_jvm() {
            return JvmType.f33775a;
        }

        @NotNull
        public final Primitive getBYTE$descriptors_jvm() {
            return JvmType.f33777c;
        }

        @NotNull
        public final Primitive getCHAR$descriptors_jvm() {
            return JvmType.f33776b;
        }

        @NotNull
        public final Primitive getDOUBLE$descriptors_jvm() {
            return JvmType.f33782h;
        }

        @NotNull
        public final Primitive getFLOAT$descriptors_jvm() {
            return JvmType.f33780f;
        }

        @NotNull
        public final Primitive getINT$descriptors_jvm() {
            return JvmType.f33779e;
        }

        @NotNull
        public final Primitive getLONG$descriptors_jvm() {
            return JvmType.f33781g;
        }

        @NotNull
        public final Primitive getSHORT$descriptors_jvm() {
            return JvmType.f33778d;
        }

        private Companion() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Object extends JvmType {

        /* renamed from: i  reason: collision with root package name */
        private final String f33784i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public Object(@NotNull String internalName) {
            super(null);
            Intrinsics.checkNotNullParameter(internalName, "internalName");
            this.f33784i = internalName;
        }

        @NotNull
        public final String getInternalName() {
            return this.f33784i;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Primitive extends JvmType {

        /* renamed from: i  reason: collision with root package name */
        private final JvmPrimitiveType f33785i;

        public Primitive(JvmPrimitiveType jvmPrimitiveType) {
            super(null);
            this.f33785i = jvmPrimitiveType;
        }

        public final JvmPrimitiveType getJvmPrimitiveType() {
            return this.f33785i;
        }
    }

    public /* synthetic */ JvmType(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    @NotNull
    public String toString() {
        return JvmTypeFactoryImpl.f33786a.toString(this);
    }

    private JvmType() {
    }
}
