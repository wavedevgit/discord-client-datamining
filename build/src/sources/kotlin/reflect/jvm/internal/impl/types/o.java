package kotlin.reflect.jvm.internal.impl.types;

import java.util.List;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class o implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final TypeConstructor f35205d;

    /* renamed from: e  reason: collision with root package name */
    private final List f35206e;

    /* renamed from: i  reason: collision with root package name */
    private final TypeAttributes f35207i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f35208o;

    /* renamed from: p  reason: collision with root package name */
    private final MemberScope f35209p;

    public o(TypeConstructor typeConstructor, List list, TypeAttributes typeAttributes, boolean z10, MemberScope memberScope) {
        this.f35205d = typeConstructor;
        this.f35206e = list;
        this.f35207i = typeAttributes;
        this.f35208o = z10;
        this.f35209p = memberScope;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        SimpleType f10;
        f10 = KotlinTypeFactory.f(this.f35205d, this.f35206e, this.f35207i, this.f35208o, this.f35209p, (KotlinTypeRefiner) obj);
        return f10;
    }
}
