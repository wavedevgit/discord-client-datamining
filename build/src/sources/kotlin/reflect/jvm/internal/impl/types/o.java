package kotlin.reflect.jvm.internal.impl.types;

import java.util.List;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class o implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final TypeConstructor f35297d;

    /* renamed from: e  reason: collision with root package name */
    private final List f35298e;

    /* renamed from: i  reason: collision with root package name */
    private final TypeAttributes f35299i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f35300o;

    /* renamed from: p  reason: collision with root package name */
    private final MemberScope f35301p;

    public o(TypeConstructor typeConstructor, List list, TypeAttributes typeAttributes, boolean z10, MemberScope memberScope) {
        this.f35297d = typeConstructor;
        this.f35298e = list;
        this.f35299i = typeAttributes;
        this.f35300o = z10;
        this.f35301p = memberScope;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        SimpleType f10;
        f10 = KotlinTypeFactory.f(this.f35297d, this.f35298e, this.f35299i, this.f35300o, this.f35301p, (KotlinTypeRefiner) obj);
        return f10;
    }
}
