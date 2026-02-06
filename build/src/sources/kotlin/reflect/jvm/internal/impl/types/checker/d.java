package kotlin.reflect.jvm.internal.impl.types.checker;

import java.util.List;
import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final NewCapturedTypeConstructor f34687d;

    /* renamed from: e  reason: collision with root package name */
    private final KotlinTypeRefiner f34688e;

    public d(NewCapturedTypeConstructor newCapturedTypeConstructor, KotlinTypeRefiner kotlinTypeRefiner) {
        this.f34687d = newCapturedTypeConstructor;
        this.f34688e = kotlinTypeRefiner;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        List i10;
        i10 = NewCapturedTypeConstructor.i(this.f34687d, this.f34688e);
        return i10;
    }
}
