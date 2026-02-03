package kotlin.reflect;

import java.lang.reflect.GenericDeclaration;
import java.lang.reflect.Type;
import java.lang.reflect.TypeVariable;
import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o implements TypeVariable, Type {

    /* renamed from: d  reason: collision with root package name */
    private final l f35312d;

    public o(l typeParameter) {
        Intrinsics.checkNotNullParameter(typeParameter, "typeParameter");
        this.f35312d = typeParameter;
    }

    public boolean equals(Object obj) {
        if (obj instanceof TypeVariable) {
            TypeVariable typeVariable = (TypeVariable) obj;
            if (Intrinsics.areEqual(getName(), typeVariable.getName()) && Intrinsics.areEqual(getGenericDeclaration(), typeVariable.getGenericDeclaration())) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // java.lang.reflect.TypeVariable
    public Type[] getBounds() {
        Type c10;
        List<KType> upperBounds = this.f35312d.getUpperBounds();
        ArrayList arrayList = new ArrayList(CollectionsKt.w(upperBounds, 10));
        for (KType kType : upperBounds) {
            c10 = p.c(kType, true);
            arrayList.add(c10);
        }
        return (Type[]) arrayList.toArray(new Type[0]);
    }

    @Override // java.lang.reflect.TypeVariable
    public GenericDeclaration getGenericDeclaration() {
        throw new lr.q("An operation is not implemented: " + ("getGenericDeclaration() is not yet supported for type variables created from KType: " + this.f35312d));
    }

    @Override // java.lang.reflect.TypeVariable
    public String getName() {
        return this.f35312d.getName();
    }

    @Override // java.lang.reflect.Type
    public String getTypeName() {
        return getName();
    }

    public int hashCode() {
        return getName().hashCode() ^ getGenericDeclaration().hashCode();
    }

    public String toString() {
        return getTypeName();
    }
}
