package kotlin.reflect.jvm.internal.impl.types.typesApproximation;

import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class ApproximationBounds<T> {

    /* renamed from: a  reason: collision with root package name */
    private final Object f36040a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f36041b;

    public ApproximationBounds(T t10, T t11) {
        this.f36040a = t10;
        this.f36041b = t11;
    }

    public final T component1() {
        return (T) this.f36040a;
    }

    public final T component2() {
        return (T) this.f36041b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ApproximationBounds) {
            ApproximationBounds approximationBounds = (ApproximationBounds) obj;
            return Intrinsics.areEqual(this.f36040a, approximationBounds.f36040a) && Intrinsics.areEqual(this.f36041b, approximationBounds.f36041b);
        }
        return false;
    }

    public final T getLower() {
        return (T) this.f36040a;
    }

    public final T getUpper() {
        return (T) this.f36041b;
    }

    public int hashCode() {
        Object obj = this.f36040a;
        int hashCode = (obj == null ? 0 : obj.hashCode()) * 31;
        Object obj2 = this.f36041b;
        return hashCode + (obj2 != null ? obj2.hashCode() : 0);
    }

    @NotNull
    public String toString() {
        return "ApproximationBounds(lower=" + this.f36040a + ", upper=" + this.f36041b + ')';
    }
}
