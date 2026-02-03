package kotlin.reflect.jvm.internal.impl.types;

import java.util.List;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class n implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final TypeConstructor f35201d;

    /* renamed from: e  reason: collision with root package name */
    private final List f35202e;

    /* renamed from: i  reason: collision with root package name */
    private final TypeAttributes f35203i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f35204o;

    public n(TypeConstructor typeConstructor, List list, TypeAttributes typeAttributes, boolean z10) {
        this.f35201d = typeConstructor;
        this.f35202e = list;
        this.f35203i = typeAttributes;
        this.f35204o = z10;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        SimpleType e10;
        e10 = KotlinTypeFactory.e(this.f35201d, this.f35202e, this.f35203i, this.f35204o, (KotlinTypeRefiner) obj);
        return e10;
    }
}
