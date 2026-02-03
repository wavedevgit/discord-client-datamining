package kotlin.reflect;

import java.lang.reflect.Type;
import java.lang.reflect.WildcardType;
import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q implements WildcardType, Type {
    @NotNull

    /* renamed from: i  reason: collision with root package name */
    public static final a f35315i = new a(null);

    /* renamed from: o  reason: collision with root package name */
    private static final q f35316o = new q(null, null);

    /* renamed from: d  reason: collision with root package name */
    private final Type f35317d;

    /* renamed from: e  reason: collision with root package name */
    private final Type f35318e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final q a() {
            return q.f35316o;
        }

        private a() {
        }
    }

    public q(Type type, Type type2) {
        this.f35317d = type;
        this.f35318e = type2;
    }

    public boolean equals(Object obj) {
        if (obj instanceof WildcardType) {
            WildcardType wildcardType = (WildcardType) obj;
            if (Arrays.equals(getUpperBounds(), wildcardType.getUpperBounds()) && Arrays.equals(getLowerBounds(), wildcardType.getLowerBounds())) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // java.lang.reflect.WildcardType
    public Type[] getLowerBounds() {
        Type type = this.f35318e;
        return type == null ? new Type[0] : new Type[]{type};
    }

    @Override // java.lang.reflect.Type
    public String getTypeName() {
        String h10;
        String h11;
        if (this.f35318e != null) {
            StringBuilder sb2 = new StringBuilder();
            sb2.append("? super ");
            h11 = p.h(this.f35318e);
            sb2.append(h11);
            return sb2.toString();
        }
        Type type = this.f35317d;
        if (type != null && !Intrinsics.areEqual(type, Object.class)) {
            StringBuilder sb3 = new StringBuilder();
            sb3.append("? extends ");
            h10 = p.h(this.f35317d);
            sb3.append(h10);
            return sb3.toString();
        }
        return "?";
    }

    @Override // java.lang.reflect.WildcardType
    public Type[] getUpperBounds() {
        Type type = this.f35317d;
        if (type == null) {
            type = Object.class;
        }
        return new Type[]{type};
    }

    public int hashCode() {
        return Arrays.hashCode(getUpperBounds()) ^ Arrays.hashCode(getLowerBounds());
    }

    public String toString() {
        return getTypeName();
    }
}
