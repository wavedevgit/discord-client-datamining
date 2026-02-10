package kotlin.reflect.jvm.internal.impl.types;

import java.util.List;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class n implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final TypeConstructor f34502d;

    /* renamed from: e  reason: collision with root package name */
    private final List f34503e;

    /* renamed from: i  reason: collision with root package name */
    private final TypeAttributes f34504i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f34505o;

    public n(TypeConstructor typeConstructor, List list, TypeAttributes typeAttributes, boolean z10) {
        this.f34502d = typeConstructor;
        this.f34503e = list;
        this.f34504i = typeAttributes;
        this.f34505o = z10;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        SimpleType e10;
        e10 = KotlinTypeFactory.e(this.f34502d, this.f34503e, this.f34504i, this.f34505o, (KotlinTypeRefiner) obj);
        return e10;
    }
}
