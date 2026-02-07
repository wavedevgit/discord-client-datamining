package kotlin.reflect.jvm.internal.impl.types.typesApproximation;

import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class ApproximationBounds<T> {

    /* renamed from: a  reason: collision with root package name */
    private final Object f34814a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f34815b;

    public ApproximationBounds(T t10, T t11) {
        this.f34814a = t10;
        this.f34815b = t11;
    }

    public final T component1() {
        return (T) this.f34814a;
    }

    public final T component2() {
        return (T) this.f34815b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ApproximationBounds) {
            ApproximationBounds approximationBounds = (ApproximationBounds) obj;
            return Intrinsics.areEqual(this.f34814a, approximationBounds.f34814a) && Intrinsics.areEqual(this.f34815b, approximationBounds.f34815b);
        }
        return false;
    }

    public final T getLower() {
        return (T) this.f34814a;
    }

    public final T getUpper() {
        return (T) this.f34815b;
    }

    public int hashCode() {
        Object obj = this.f34814a;
        int hashCode = (obj == null ? 0 : obj.hashCode()) * 31;
        Object obj2 = this.f34815b;
        return hashCode + (obj2 != null ? obj2.hashCode() : 0);
    }

    @NotNull
    public String toString() {
        return "ApproximationBounds(lower=" + this.f34814a + ", upper=" + this.f34815b + ')';
    }
}
