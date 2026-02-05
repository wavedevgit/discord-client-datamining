package bn;

import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b0 {

    /* renamed from: a  reason: collision with root package name */
    private final KClass f6530a;

    public b0(KClass type) {
        Intrinsics.checkNotNullParameter(type, "type");
        this.f6530a = type;
    }

    public abstract Object a();

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && !Intrinsics.areEqual(Reflection.getOrCreateKotlinClass(getClass()), Reflection.getOrCreateKotlinClass(obj.getClass()))) {
            return false;
        }
        KClass kClass = this.f6530a;
        if (obj != null) {
            return Intrinsics.areEqual(kClass, ((b0) obj).f6530a);
        }
        throw new NullPointerException("null cannot be cast to non-null type com.squareup.workflow1.ui.ViewEnvironmentKey<*>");
    }

    public final int hashCode() {
        return this.f6530a.hashCode();
    }

    public String toString() {
        return "ViewEnvironmentKey(" + this.f6530a + ")-" + super.toString();
    }
}
