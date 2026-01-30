package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import kotlin.jvm.functions.Function1;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final TypeEnhancementInfo f34388d;

    /* renamed from: e  reason: collision with root package name */
    private final JavaTypeQualifiers[] f34389e;

    public b(TypeEnhancementInfo typeEnhancementInfo, JavaTypeQualifiers[] javaTypeQualifiersArr) {
        this.f34388d = typeEnhancementInfo;
        this.f34389e = javaTypeQualifiersArr;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        JavaTypeQualifiers d10;
        d10 = AbstractSignatureParts.d(this.f34388d, this.f34389e, ((Number) obj).intValue());
        return d10;
    }
}
