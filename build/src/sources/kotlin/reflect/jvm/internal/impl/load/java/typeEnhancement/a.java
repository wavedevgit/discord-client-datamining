package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.AbstractSignatureParts;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class a implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final AbstractSignatureParts f33550d;

    /* renamed from: e  reason: collision with root package name */
    private final AbstractSignatureParts.a f33551e;

    public a(AbstractSignatureParts abstractSignatureParts, AbstractSignatureParts.a aVar) {
        this.f33550d = abstractSignatureParts;
        this.f33551e = aVar;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        boolean h10;
        h10 = AbstractSignatureParts.h(this.f33550d, this.f33551e, obj);
        return Boolean.valueOf(h10);
    }
}
