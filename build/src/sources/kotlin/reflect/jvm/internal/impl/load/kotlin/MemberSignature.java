package kotlin.reflect.jvm.internal.impl.load.kotlin;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.NameResolver;
import kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf;
import kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization.JvmMemberSignature;
import lr.p;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class MemberSignature {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: a  reason: collision with root package name */
    private final String f33703a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final MemberSignature fromFieldNameAndDesc(@NotNull String name, @NotNull String desc) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(desc, "desc");
            return new MemberSignature(name + '#' + desc, null);
        }

        @NotNull
        public final MemberSignature fromJvmMemberSignature(@NotNull JvmMemberSignature signature) {
            Intrinsics.checkNotNullParameter(signature, "signature");
            if (signature instanceof JvmMemberSignature.Method) {
                JvmMemberSignature.Method method = (JvmMemberSignature.Method) signature;
                return fromMethodNameAndDesc(method.getName(), method.getDesc());
            } else if (signature instanceof JvmMemberSignature.Field) {
                JvmMemberSignature.Field field = (JvmMemberSignature.Field) signature;
                return fromFieldNameAndDesc(field.getName(), field.getDesc());
            } else {
                throw new p();
            }
        }

        @NotNull
        public final MemberSignature fromMethod(@NotNull NameResolver nameResolver, @NotNull JvmProtoBuf.JvmMethodSignature signature) {
            Intrinsics.checkNotNullParameter(nameResolver, "nameResolver");
            Intrinsics.checkNotNullParameter(signature, "signature");
            return fromMethodNameAndDesc(nameResolver.getString(signature.getName()), nameResolver.getString(signature.getDesc()));
        }

        @NotNull
        public final MemberSignature fromMethodNameAndDesc(@NotNull String name, @NotNull String desc) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(desc, "desc");
            return new MemberSignature(name + desc, null);
        }

        @NotNull
        public final MemberSignature fromMethodSignatureAndParameterIndex(@NotNull MemberSignature signature, int i10) {
            Intrinsics.checkNotNullParameter(signature, "signature");
            return new MemberSignature(signature.getSignature() + '@' + i10, null);
        }

        private Companion() {
        }
    }

    public /* synthetic */ MemberSignature(String str, DefaultConstructorMarker defaultConstructorMarker) {
        this(str);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        return (obj instanceof MemberSignature) && Intrinsics.areEqual(this.f33703a, ((MemberSignature) obj).f33703a);
    }

    @NotNull
    public final String getSignature() {
        return this.f33703a;
    }

    public int hashCode() {
        return this.f33703a.hashCode();
    }

    @NotNull
    public String toString() {
        return "MemberSignature(signature=" + this.f33703a + ')';
    }

    private MemberSignature(String str) {
        this.f33703a = str;
    }
}
