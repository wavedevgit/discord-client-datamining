package kotlin.reflect.jvm.internal.impl.types;

import java.util.List;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class n implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final TypeConstructor f35293d;

    /* renamed from: e  reason: collision with root package name */
    private final List f35294e;

    /* renamed from: i  reason: collision with root package name */
    private final TypeAttributes f35295i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f35296o;

    public n(TypeConstructor typeConstructor, List list, TypeAttributes typeAttributes, boolean z10) {
        this.f35293d = typeConstructor;
        this.f35294e = list;
        this.f35295i = typeAttributes;
        this.f35296o = z10;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        SimpleType e10;
        e10 = KotlinTypeFactory.e(this.f35293d, this.f35294e, this.f35295i, this.f35296o, (KotlinTypeRefiner) obj);
        return e10;
    }
}
