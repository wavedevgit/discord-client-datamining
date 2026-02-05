package qa;

import kotlin.jvm.internal.Intrinsics;
import sa.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends RuntimeException {

    /* renamed from: d  reason: collision with root package name */
    private final k f47516d;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public a(String str, k encodedImage) {
        super(str);
        Intrinsics.checkNotNullParameter(encodedImage, "encodedImage");
        this.f47516d = encodedImage;
    }

    public final k a() {
        return this.f47516d;
    }
}
