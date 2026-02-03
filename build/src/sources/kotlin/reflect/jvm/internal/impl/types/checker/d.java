package kotlin.reflect.jvm.internal.impl.types.checker;

import java.util.List;
import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final NewCapturedTypeConstructor f35143d;

    /* renamed from: e  reason: collision with root package name */
    private final KotlinTypeRefiner f35144e;

    public d(NewCapturedTypeConstructor newCapturedTypeConstructor, KotlinTypeRefiner kotlinTypeRefiner) {
        this.f35143d = newCapturedTypeConstructor;
        this.f35144e = kotlinTypeRefiner;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        List i10;
        i10 = NewCapturedTypeConstructor.i(this.f35143d, this.f35144e);
        return i10;
    }
}
