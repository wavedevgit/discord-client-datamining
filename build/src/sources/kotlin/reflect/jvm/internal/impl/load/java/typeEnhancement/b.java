package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import kotlin.jvm.functions.Function1;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final TypeEnhancementInfo f32855d;

    /* renamed from: e  reason: collision with root package name */
    private final JavaTypeQualifiers[] f32856e;

    public b(TypeEnhancementInfo typeEnhancementInfo, JavaTypeQualifiers[] javaTypeQualifiersArr) {
        this.f32855d = typeEnhancementInfo;
        this.f32856e = javaTypeQualifiersArr;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        JavaTypeQualifiers d10;
        d10 = AbstractSignatureParts.d(this.f32855d, this.f32856e, ((Number) obj).intValue());
        return d10;
    }
}
