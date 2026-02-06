package kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class JvmMemberSignature {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Field extends JvmMemberSignature {

        /* renamed from: a  reason: collision with root package name */
        private final String f33805a;

        /* renamed from: b  reason: collision with root package name */
        private final String f33806b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public Field(@NotNull String name, @NotNull String desc) {
            super(null);
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(desc, "desc");
            this.f33805a = name;
            this.f33806b = desc;
        }

        @Override // kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization.JvmMemberSignature
        @NotNull
        public String asString() {
            return getName() + ':' + getDesc();
        }

        @NotNull
        public final String component1() {
            return this.f33805a;
        }

        @NotNull
        public final String component2() {
            return this.f33806b;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof Field) {
                Field field = (Field) obj;
                return Intrinsics.areEqual(this.f33805a, field.f33805a) && Intrinsics.areEqual(this.f33806b, field.f33806b);
            }
            return false;
        }

        @NotNull
        public String getDesc() {
            return this.f33806b;
        }

        @NotNull
        public String getName() {
            return this.f33805a;
        }

        public int hashCode() {
            return (this.f33805a.hashCode() * 31) + this.f33806b.hashCode();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Method extends JvmMemberSignature {

        /* renamed from: a  reason: collision with root package name */
        private final String f33807a;

        /* renamed from: b  reason: collision with root package name */
        private final String f33808b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public Method(@NotNull String name, @NotNull String desc) {
            super(null);
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(desc, "desc");
            this.f33807a = name;
            this.f33808b = desc;
        }

        public static /* synthetic */ Method copy$default(Method method, String str, String str2, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = method.f33807a;
            }
            if ((i10 & 2) != 0) {
                str2 = method.f33808b;
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
                return Intrinsics.areEqual(this.f33807a, method.f33807a) && Intrinsics.areEqual(this.f33808b, method.f33808b);
            }
            return false;
        }

        @NotNull
        public String getDesc() {
            return this.f33808b;
        }

        @NotNull
        public String getName() {
            return this.f33807a;
        }

        public int hashCode() {
            return (this.f33807a.hashCode() * 31) + this.f33808b.hashCode();
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
