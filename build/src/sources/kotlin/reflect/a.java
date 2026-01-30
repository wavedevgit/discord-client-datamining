package kotlin.reflect;

import java.lang.reflect.GenericArrayType;
import java.lang.reflect.Type;
import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements GenericArrayType, Type {

    /* renamed from: d  reason: collision with root package name */
    private final Type f33413d;

    public a(Type elementType) {
        Intrinsics.checkNotNullParameter(elementType, "elementType");
        this.f33413d = elementType;
    }

    public boolean equals(Object obj) {
        if ((obj instanceof GenericArrayType) && Intrinsics.areEqual(getGenericComponentType(), ((GenericArrayType) obj).getGenericComponentType())) {
            return true;
        }
        return false;
    }

    @Override // java.lang.reflect.GenericArrayType
    public Type getGenericComponentType() {
        return this.f33413d;
    }

    @Override // java.lang.reflect.Type
    public String getTypeName() {
        String h10;
        StringBuilder sb2 = new StringBuilder();
        h10 = p.h(this.f33413d);
        sb2.append(h10);
        sb2.append("[]");
        return sb2.toString();
    }

    public int hashCode() {
        return getGenericComponentType().hashCode();
    }

    public String toString() {
        return getTypeName();
    }
}
