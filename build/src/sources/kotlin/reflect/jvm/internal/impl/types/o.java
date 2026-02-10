package kotlin.reflect.jvm.internal.impl.types;

import java.util.List;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class o implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final TypeConstructor f34506d;

    /* renamed from: e  reason: collision with root package name */
    private final List f34507e;

    /* renamed from: i  reason: collision with root package name */
    private final TypeAttributes f34508i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f34509o;

    /* renamed from: p  reason: collision with root package name */
    private final MemberScope f34510p;

    public o(TypeConstructor typeConstructor, List list, TypeAttributes typeAttributes, boolean z10, MemberScope memberScope) {
        this.f34506d = typeConstructor;
        this.f34507e = list;
        this.f34508i = typeAttributes;
        this.f34509o = z10;
        this.f34510p = memberScope;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        SimpleType f10;
        f10 = KotlinTypeFactory.f(this.f34506d, this.f34507e, this.f34508i, this.f34509o, this.f34510p, (KotlinTypeRefiner) obj);
        return f10;
    }
}
