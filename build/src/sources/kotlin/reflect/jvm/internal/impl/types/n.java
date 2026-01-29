package kotlin.reflect.jvm.internal.impl.types;

import java.util.List;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class n implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final TypeConstructor f36019d;

    /* renamed from: e  reason: collision with root package name */
    private final List f36020e;

    /* renamed from: i  reason: collision with root package name */
    private final TypeAttributes f36021i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f36022o;

    public n(TypeConstructor typeConstructor, List list, TypeAttributes typeAttributes, boolean z10) {
        this.f36019d = typeConstructor;
        this.f36020e = list;
        this.f36021i = typeAttributes;
        this.f36022o = z10;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        SimpleType e10;
        e10 = KotlinTypeFactory.e(this.f36019d, this.f36020e, this.f36021i, this.f36022o, (KotlinTypeRefiner) obj);
        return e10;
    }
}
