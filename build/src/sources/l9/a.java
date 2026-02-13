package l9;

import android.graphics.drawable.Animatable;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends j9.a {

    /* renamed from: d  reason: collision with root package name */
    private final b f36252d;

    /* renamed from: e  reason: collision with root package name */
    private long f36253e = -1;

    /* renamed from: i  reason: collision with root package name */
    private long f36254i = -1;

    public a(b bVar) {
        this.f36252d = bVar;
    }

    @Override // j9.a, com.facebook.drawee.controller.ControllerListener
    public void onFinalImageSet(String id2, Object obj, Animatable animatable) {
        Intrinsics.checkNotNullParameter(id2, "id");
        long currentTimeMillis = System.currentTimeMillis();
        this.f36254i = currentTimeMillis;
        b bVar = this.f36252d;
        if (bVar != null) {
            bVar.a(currentTimeMillis - this.f36253e);
        }
    }

    @Override // j9.a, com.facebook.drawee.controller.ControllerListener
    public void onSubmit(String id2, Object obj) {
        Intrinsics.checkNotNullParameter(id2, "id");
        this.f36253e = System.currentTimeMillis();
    }
}
