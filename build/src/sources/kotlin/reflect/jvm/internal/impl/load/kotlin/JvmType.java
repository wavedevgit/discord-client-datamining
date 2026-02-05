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
    private static final Primitive f33207a = new Primitive(JvmPrimitiveType.BOOLEAN);

    /* renamed from: b  reason: collision with root package name */
    private static final Primitive f33208b = new Primitive(JvmPrimitiveType.CHAR);

    /* renamed from: c  reason: collision with root package name */
    private static final Primitive f33209c = new Primitive(JvmPrimitiveType.BYTE);

    /* renamed from: d  reason: collision with root package name */
    private static final Primitive f33210d = new Primitive(JvmPrimitiveType.SHORT);

    /* renamed from: e  reason: collision with root package name */
    private static final Primitive f33211e = new Primitive(JvmPrimitiveType.INT);

    /* renamed from: f  reason: collision with root package name */
    private static final Primitive f33212f = new Primitive(JvmPrimitiveType.FLOAT);

    /* renamed from: g  reason: collision with root package name */
    private static final Primitive f33213g = new Primitive(JvmPrimitiveType.LONG);

    /* renamed from: h  reason: collision with root package name */
    private static final Primitive f33214h = new Primitive(JvmPrimitiveType.DOUBLE);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Array extends JvmType {

        /* renamed from: i  reason: collision with root package name */
        private final JvmType f33215i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public Array(@NotNull JvmType elementType) {
            super(null);
            Intrinsics.checkNotNullParameter(elementType, "elementType");
            this.f33215i = elementType;
        }

        @NotNull
        public final JvmType getElementType() {
            return this.f33215i;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final Primitive getBOOLEAN$descriptors_jvm() {
            return JvmType.f33207a;
        }

        @NotNull
        public final Primitive getBYTE$descriptors_jvm() {
            return JvmType.f33209c;
        }

        @NotNull
        public final Primitive getCHAR$descriptors_jvm() {
            return JvmType.f33208b;
        }

        @NotNull
        public final Primitive getDOUBLE$descriptors_jvm() {
            return JvmType.f33214h;
        }

        @NotNull
        public final Primitive getFLOAT$descriptors_jvm() {
            return JvmType.f33212f;
        }

        @NotNull
        public final Primitive getINT$descriptors_jvm() {
            return JvmType.f33211e;
        }

        @NotNull
        public final Primitive getLONG$descriptors_jvm() {
            return JvmType.f33213g;
        }

        @NotNull
        public final Primitive getSHORT$descriptors_jvm() {
            return JvmType.f33210d;
        }

        private Companion() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Object extends JvmType {

        /* renamed from: i  reason: collision with root package name */
        private final String f33216i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public Object(@NotNull String internalName) {
            super(null);
            Intrinsics.checkNotNullParameter(internalName, "internalName");
            this.f33216i = internalName;
        }

        @NotNull
        public final String getInternalName() {
            return this.f33216i;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Primitive extends JvmType {

        /* renamed from: i  reason: collision with root package name */
        private final JvmPrimitiveType f33217i;

        public Primitive(JvmPrimitiveType jvmPrimitiveType) {
            super(null);
            this.f33217i = jvmPrimitiveType;
        }

        public final JvmPrimitiveType getJvmPrimitiveType() {
            return this.f33217i;
        }
    }

    public /* synthetic */ JvmType(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    @NotNull
    public String toString() {
        return JvmTypeFactoryImpl.f33218a.toString(this);
    }

    private JvmType() {
    }
}
