package kotlin.reflect.jvm.internal.impl.types;

import java.util.List;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class n implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final TypeConstructor f34724d;

    /* renamed from: e  reason: collision with root package name */
    private final List f34725e;

    /* renamed from: i  reason: collision with root package name */
    private final TypeAttributes f34726i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f34727o;

    public n(TypeConstructor typeConstructor, List list, TypeAttributes typeAttributes, boolean z10) {
        this.f34724d = typeConstructor;
        this.f34725e = list;
        this.f34726i = typeAttributes;
        this.f34727o = z10;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        SimpleType e10;
        e10 = KotlinTypeFactory.e(this.f34724d, this.f34725e, this.f34726i, this.f34727o, (KotlinTypeRefiner) obj);
        return e10;
    }
}
