package kotlin.reflect.jvm.internal.impl.types;

import java.util.List;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class o implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final TypeConstructor f34797d;

    /* renamed from: e  reason: collision with root package name */
    private final List f34798e;

    /* renamed from: i  reason: collision with root package name */
    private final TypeAttributes f34799i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f34800o;

    /* renamed from: p  reason: collision with root package name */
    private final MemberScope f34801p;

    public o(TypeConstructor typeConstructor, List list, TypeAttributes typeAttributes, boolean z10, MemberScope memberScope) {
        this.f34797d = typeConstructor;
        this.f34798e = list;
        this.f34799i = typeAttributes;
        this.f34800o = z10;
        this.f34801p = memberScope;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        SimpleType f10;
        f10 = KotlinTypeFactory.f(this.f34797d, this.f34798e, this.f34799i, this.f34800o, this.f34801p, (KotlinTypeRefiner) obj);
        return f10;
    }
}
