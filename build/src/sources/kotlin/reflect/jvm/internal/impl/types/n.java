package kotlin.reflect.jvm.internal.impl.types;

import java.util.List;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class n implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final TypeConstructor f36035d;

    /* renamed from: e  reason: collision with root package name */
    private final List f36036e;

    /* renamed from: i  reason: collision with root package name */
    private final TypeAttributes f36037i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f36038o;

    public n(TypeConstructor typeConstructor, List list, TypeAttributes typeAttributes, boolean z10) {
        this.f36035d = typeConstructor;
        this.f36036e = list;
        this.f36037i = typeAttributes;
        this.f36038o = z10;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        SimpleType e10;
        e10 = KotlinTypeFactory.e(this.f36035d, this.f36036e, this.f36037i, this.f36038o, (KotlinTypeRefiner) obj);
        return e10;
    }
}
