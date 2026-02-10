package kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class JvmMemberSignature {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Field extends JvmMemberSignature {

        /* renamed from: a  reason: collision with root package name */
        private final String f33784a;

        /* renamed from: b  reason: collision with root package name */
        private final String f33785b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public Field(@NotNull String name, @NotNull String desc) {
            super(null);
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(desc, "desc");
            this.f33784a = name;
            this.f33785b = desc;
        }

        @Override // kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization.JvmMemberSignature
        @NotNull
        public String asString() {
            return getName() + ':' + getDesc();
        }

        @NotNull
        public final String component1() {
            return this.f33784a;
        }

        @NotNull
        public final String component2() {
            return this.f33785b;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof Field) {
                Field field = (Field) obj;
                return Intrinsics.areEqual(this.f33784a, field.f33784a) && Intrinsics.areEqual(this.f33785b, field.f33785b);
            }
            return false;
        }

        @NotNull
        public String getDesc() {
            return this.f33785b;
        }

        @NotNull
        public String getName() {
            return this.f33784a;
        }

        public int hashCode() {
            return (this.f33784a.hashCode() * 31) + this.f33785b.hashCode();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Method extends JvmMemberSignature {

        /* renamed from: a  reason: collision with root package name */
        private final String f33786a;

        /* renamed from: b  reason: collision with root package name */
        private final String f33787b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public Method(@NotNull String name, @NotNull String desc) {
            super(null);
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(desc, "desc");
            this.f33786a = name;
            this.f33787b = desc;
        }

        public static /* synthetic */ Method copy$default(Method method, String str, String str2, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = method.f33786a;
            }
            if ((i10 & 2) != 0) {
                str2 = method.f33787b;
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
                return Intrinsics.areEqual(this.f33786a, method.f33786a) && Intrinsics.areEqual(this.f33787b, method.f33787b);
            }
            return false;
        }

        @NotNull
        public String getDesc() {
            return this.f33787b;
        }

        @NotNull
        public String getName() {
            return this.f33786a;
        }

        public int hashCode() {
            return (this.f33786a.hashCode() * 31) + this.f33787b.hashCode();
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
