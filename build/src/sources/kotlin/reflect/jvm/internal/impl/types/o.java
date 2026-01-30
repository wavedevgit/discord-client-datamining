package kotlin.reflect.jvm.internal.impl.types;

import java.util.List;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class o implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final TypeConstructor f36039d;

    /* renamed from: e  reason: collision with root package name */
    private final List f36040e;

    /* renamed from: i  reason: collision with root package name */
    private final TypeAttributes f36041i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f36042o;

    /* renamed from: p  reason: collision with root package name */
    private final MemberScope f36043p;

    public o(TypeConstructor typeConstructor, List list, TypeAttributes typeAttributes, boolean z10, MemberScope memberScope) {
        this.f36039d = typeConstructor;
        this.f36040e = list;
        this.f36041i = typeAttributes;
        this.f36042o = z10;
        this.f36043p = memberScope;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        SimpleType f10;
        f10 = KotlinTypeFactory.f(this.f36039d, this.f36040e, this.f36041i, this.f36042o, this.f36043p, (KotlinTypeRefiner) obj);
        return f10;
    }
}
