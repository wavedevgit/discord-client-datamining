package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import kotlin.jvm.functions.Function1;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final TypeEnhancementInfo f33098d;

    /* renamed from: e  reason: collision with root package name */
    private final JavaTypeQualifiers[] f33099e;

    public b(TypeEnhancementInfo typeEnhancementInfo, JavaTypeQualifiers[] javaTypeQualifiersArr) {
        this.f33098d = typeEnhancementInfo;
        this.f33099e = javaTypeQualifiersArr;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        JavaTypeQualifiers d10;
        d10 = AbstractSignatureParts.d(this.f33098d, this.f33099e, ((Number) obj).intValue());
        return d10;
    }
}
