package kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class JvmMemberSignature {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Field extends JvmMemberSignature {

        /* renamed from: a  reason: collision with root package name */
        private final String f35079a;

        /* renamed from: b  reason: collision with root package name */
        private final String f35080b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public Field(@NotNull String name, @NotNull String desc) {
            super(null);
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(desc, "desc");
            this.f35079a = name;
            this.f35080b = desc;
        }

        @Override // kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization.JvmMemberSignature
        @NotNull
        public String asString() {
            return getName() + ':' + getDesc();
        }

        @NotNull
        public final String component1() {
            return this.f35079a;
        }

        @NotNull
        public final String component2() {
            return this.f35080b;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof Field) {
                Field field = (Field) obj;
                return Intrinsics.areEqual(this.f35079a, field.f35079a) && Intrinsics.areEqual(this.f35080b, field.f35080b);
            }
            return false;
        }

        @NotNull
        public String getDesc() {
            return this.f35080b;
        }

        @NotNull
        public String getName() {
            return this.f35079a;
        }

        public int hashCode() {
            return (this.f35079a.hashCode() * 31) + this.f35080b.hashCode();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Method extends JvmMemberSignature {

        /* renamed from: a  reason: collision with root package name */
        private final String f35081a;

        /* renamed from: b  reason: collision with root package name */
        private final String f35082b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public Method(@NotNull String name, @NotNull String desc) {
            super(null);
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(desc, "desc");
            this.f35081a = name;
            this.f35082b = desc;
        }

        public static /* synthetic */ Method copy$default(Method method, String str, String str2, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = method.f35081a;
            }
            if ((i10 & 2) != 0) {
                str2 = method.f35082b;
            }
            return method.copy(str, str2);
        }

        @Override // kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization.JvmMemberSignature
        @NotNull
        public String asString() {
            return getName() + getDesc();
        }

        @NotNull
        public final Method copy(@NotNull String name, @NotNull String desc) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(desc, "desc");
            return new Method(name, desc);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof Method) {
                Method method = (Method) obj;
                return Intrinsics.areEqual(this.f35081a, method.f35081a) && Intrinsics.areEqual(this.f35082b, method.f35082b);
            }
            return false;
        }

        @NotNull
        public String getDesc() {
            return this.f35082b;
        }

        @NotNull
        public String getName() {
            return this.f35081a;
        }

        public int hashCode() {
            return (this.f35081a.hashCode() * 31) + this.f35082b.hashCode();
        }
    }

    public /* synthetic */ JvmMemberSignature(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    @NotNull
    public abstract String asString();

    @NotNull
    public final String toString() {
        return asString();
    }

    private JvmMemberSignature() {
    }
}
