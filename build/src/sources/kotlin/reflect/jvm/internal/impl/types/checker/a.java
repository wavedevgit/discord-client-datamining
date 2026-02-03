package kotlin.reflect.jvm.internal.impl.types.checker;

import java.util.List;
import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class a implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final NewCapturedTypeConstructor f35750d;

    public a(NewCapturedTypeConstructor newCapturedTypeConstructor) {
        this.f35750d = newCapturedTypeConstructor;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        List b10;
        b10 = NewCapturedTypeConstructor.b(this.f35750d);
        return b10;
    }
}
