package kotlin.reflect.jvm.internal.impl.types;

import java.util.List;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class o implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final TypeConstructor f35815d;

    /* renamed from: e  reason: collision with root package name */
    private final List f35816e;

    /* renamed from: i  reason: collision with root package name */
    private final TypeAttributes f35817i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f35818o;

    /* renamed from: p  reason: collision with root package name */
    private final MemberScope f35819p;

    public o(TypeConstructor typeConstructor, List list, TypeAttributes typeAttributes, boolean z10, MemberScope memberScope) {
        this.f35815d = typeConstructor;
        this.f35816e = list;
        this.f35817i = typeAttributes;
        this.f35818o = z10;
        this.f35819p = memberScope;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        SimpleType f10;
        f10 = KotlinTypeFactory.f(this.f35815d, this.f35816e, this.f35817i, this.f35818o, this.f35819p, (KotlinTypeRefiner) obj);
        return f10;
    }
}
