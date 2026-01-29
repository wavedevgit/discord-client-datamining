package kotlin.reflect.jvm.internal.impl.load.java;

import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class g implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final Jsr305Settings f34111d;

    public g(Jsr305Settings jsr305Settings) {
        this.f34111d = jsr305Settings;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        String[] b10;
        b10 = Jsr305Settings.b(this.f34111d);
        return b10;
    }
}
