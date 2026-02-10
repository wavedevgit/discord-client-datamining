package kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class JvmMemberSignature {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Field extends JvmMemberSignature {

        /* renamed from: a  reason: collision with root package name */
        private final String f33562a;

        /* renamed from: b  reason: collision with root package name */
        private final String f33563b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public Field(@NotNull String name, @NotNull String desc) {
            super(null);
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(desc, "desc");
            this.f33562a = name;
            this.f33563b = desc;
        }

        @Override // kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization.JvmMemberSignature
        @NotNull
        public String asString() {
            return getName() + ':' + getDesc();
        }

        @NotNull
        public final String component1() {
            return this.f33562a;
        }

        @NotNull
        public final String component2() {
            return this.f33563b;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof Field) {
                Field field = (Field) obj;
                return Intrinsics.areEqual(this.f33562a, field.f33562a) && Intrinsics.areEqual(this.f33563b, field.f33563b);
            }
            return false;
        }

        @NotNull
        public String getDesc() {
            return this.f33563b;
        }

        @NotNull
        public String getName() {
            return this.f33562a;
        }

        public int hashCode() {
            return (this.f33562a.hashCode() * 31) + this.f33563b.hashCode();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Method extends JvmMemberSignature {

        /* renamed from: a  reason: collision with root package name */
        private final String f33564a;

        /* renamed from: b  reason: collision with root package name */
        private final String f33565b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public Method(@NotNull String name, @NotNull String desc) {
            super(null);
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(desc, "desc");
            this.f33564a = name;
            this.f33565b = desc;
        }

        public static /* synthetic */ Method copy$default(Method method, String str, String str2, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = method.f33564a;
            }
            if ((i10 & 2) != 0) {
                str2 = method.f33565b;
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
                return Intrinsics.areEqual(this.f33564a, method.f33564a) && Intrinsics.areEqual(this.f33565b, method.f33565b);
            }
            return false;
        }

        @NotNull
        public String getDesc() {
            return this.f33565b;
        }

        @NotNull
        public String getName() {
            return this.f33564a;
        }

        public int hashCode() {
            return (this.f33564a.hashCode() * 31) + this.f33565b.hashCode();
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
