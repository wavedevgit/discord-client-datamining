package kotlin.reflect;

import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.Arrays;
import java.util.List;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n implements ParameterizedType, Type {

    /* renamed from: d  reason: collision with root package name */
    private final Class f35918d;

    /* renamed from: e  reason: collision with root package name */
    private final Type f35919e;

    /* renamed from: i  reason: collision with root package name */
    private final Type[] f35920i;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a extends FunctionReferenceImpl implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f35921d = new a();

        a() {
            super(1, p.class, "typeToString", "typeToString(Ljava/lang/reflect/Type;)Ljava/lang/String;", 1);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final String invoke(Type p02) {
            String h10;
            Intrinsics.checkNotNullParameter(p02, "p0");
            h10 = p.h(p02);
            return h10;
        }
    }

    public n(Class rawType, Type type, List typeArguments) {
        Intrinsics.checkNotNullParameter(rawType, "rawType");
        Intrinsics.checkNotNullParameter(typeArguments, "typeArguments");
        this.f35918d = rawType;
        this.f35919e = type;
        this.f35920i = (Type[]) typeArguments.toArray(new Type[0]);
    }

    public boolean equals(Object obj) {
        if (obj instanceof ParameterizedType) {
            ParameterizedType parameterizedType = (ParameterizedType) obj;
            if (Intrinsics.areEqual(this.f35918d, parameterizedType.getRawType()) && Intrinsics.areEqual(this.f35919e, parameterizedType.getOwnerType()) && Arrays.equals(getActualTypeArguments(), parameterizedType.getActualTypeArguments())) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // java.lang.reflect.ParameterizedType
    public Type[] getActualTypeArguments() {
        return this.f35920i;
    }

    @Override // java.lang.reflect.ParameterizedType
    public Type getOwnerType() {
        return this.f35919e;
    }

    @Override // java.lang.reflect.ParameterizedType
    public Type getRawType() {
        return this.f35918d;
    }

    @Override // java.lang.reflect.Type
    public String getTypeName() {
        String h10;
        boolean z10;
        String h11;
        StringBuilder sb2 = new StringBuilder();
        Type type = this.f35919e;
        if (type != null) {
            h11 = p.h(type);
            sb2.append(h11);
            sb2.append("$");
            sb2.append(this.f35918d.getSimpleName());
        } else {
            h10 = p.h(this.f35918d);
            sb2.append(h10);
        }
        Type[] typeArr = this.f35920i;
        if (typeArr.length == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!z10) {
            kotlin.collections.i.n0(typeArr, sb2, null, "<", ">", 0, null, a.f35921d, 50, null);
        }
        return sb2.toString();
    }

    public int hashCode() {
        int i10;
        int hashCode = this.f35918d.hashCode();
        Type type = this.f35919e;
        if (type != null) {
            i10 = type.hashCode();
        } else {
            i10 = 0;
        }
        return (hashCode ^ i10) ^ Arrays.hashCode(getActualTypeArguments());
    }

    public String toString() {
        return getTypeName();
    }
}
