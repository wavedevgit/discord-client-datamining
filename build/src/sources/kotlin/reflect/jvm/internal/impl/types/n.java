package kotlin.reflect.jvm.internal.impl.types;

import java.util.List;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class n implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final TypeConstructor f35811d;

    /* renamed from: e  reason: collision with root package name */
    private final List f35812e;

    /* renamed from: i  reason: collision with root package name */
    private final TypeAttributes f35813i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f35814o;

    public n(TypeConstructor typeConstructor, List list, TypeAttributes typeAttributes, boolean z10) {
        this.f35811d = typeConstructor;
        this.f35812e = list;
        this.f35813i = typeAttributes;
        this.f35814o = z10;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        SimpleType e10;
        e10 = KotlinTypeFactory.e(this.f35811d, this.f35812e, this.f35813i, this.f35814o, (KotlinTypeRefiner) obj);
        return e10;
    }
}
