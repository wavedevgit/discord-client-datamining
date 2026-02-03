package kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class JvmMemberSignature {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Field extends JvmMemberSignature {

        /* renamed from: a  reason: collision with root package name */
        private final String f34871a;

        /* renamed from: b  reason: collision with root package name */
        private final String f34872b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public Field(@NotNull String name, @NotNull String desc) {
            super(null);
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(desc, "desc");
            this.f34871a = name;
            this.f34872b = desc;
        }

        @Override // kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization.JvmMemberSignature
        @NotNull
        public String asString() {
            return getName() + ':' + getDesc();
        }

        @NotNull
        public final String component1() {
            return this.f34871a;
        }

        @NotNull
        public final String component2() {
            return this.f34872b;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof Field) {
                Field field = (Field) obj;
                return Intrinsics.areEqual(this.f34871a, field.f34871a) && Intrinsics.areEqual(this.f34872b, field.f34872b);
            }
            return false;
        }

        @NotNull
        public String getDesc() {
            return this.f34872b;
        }

        @NotNull
        public String getName() {
            return this.f34871a;
        }

        public int hashCode() {
            return (this.f34871a.hashCode() * 31) + this.f34872b.hashCode();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Method extends JvmMemberSignature {

        /* renamed from: a  reason: collision with root package name */
        private final String f34873a;

        /* renamed from: b  reason: collision with root package name */
        private final String f34874b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public Method(@NotNull String name, @NotNull String desc) {
            super(null);
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(desc, "desc");
            this.f34873a = name;
            this.f34874b = desc;
        }

        public static /* synthetic */ Method copy$default(Method method, String str, String str2, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = method.f34873a;
            }
            if ((i10 & 2) != 0) {
                str2 = method.f34874b;
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
                return Intrinsics.areEqual(this.f34873a, method.f34873a) && Intrinsics.areEqual(this.f34874b, method.f34874b);
            }
            return false;
        }

        @NotNull
        public String getDesc() {
            return this.f34874b;
        }

        @NotNull
        public String getName() {
            return this.f34873a;
        }

        public int hashCode() {
            return (this.f34873a.hashCode() * 31) + this.f34874b.hashCode();
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
