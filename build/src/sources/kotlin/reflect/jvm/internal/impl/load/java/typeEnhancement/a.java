package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.AbstractSignatureParts;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class a implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final AbstractSignatureParts f34368d;

    /* renamed from: e  reason: collision with root package name */
    private final AbstractSignatureParts.a f34369e;

    public a(AbstractSignatureParts abstractSignatureParts, AbstractSignatureParts.a aVar) {
        this.f34368d = abstractSignatureParts;
        this.f34369e = aVar;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        boolean h10;
        h10 = AbstractSignatureParts.h(this.f34368d, this.f34369e, obj);
        return Boolean.valueOf(h10);
    }
}
