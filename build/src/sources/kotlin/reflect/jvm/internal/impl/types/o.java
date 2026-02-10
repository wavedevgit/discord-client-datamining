package kotlin.reflect.jvm.internal.impl.types;

import java.util.List;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class o implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final TypeConstructor f34728d;

    /* renamed from: e  reason: collision with root package name */
    private final List f34729e;

    /* renamed from: i  reason: collision with root package name */
    private final TypeAttributes f34730i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f34731o;

    /* renamed from: p  reason: collision with root package name */
    private final MemberScope f34732p;

    public o(TypeConstructor typeConstructor, List list, TypeAttributes typeAttributes, boolean z10, MemberScope memberScope) {
        this.f34728d = typeConstructor;
        this.f34729e = list;
        this.f34730i = typeAttributes;
        this.f34731o = z10;
        this.f34732p = memberScope;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        SimpleType f10;
        f10 = KotlinTypeFactory.f(this.f34728d, this.f34729e, this.f34730i, this.f34731o, this.f34732p, (KotlinTypeRefiner) obj);
        return f10;
    }
}
