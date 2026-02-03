package k9;

import android.graphics.drawable.Animatable;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends i9.a {

    /* renamed from: d  reason: collision with root package name */
    private final b f32813d;

    /* renamed from: e  reason: collision with root package name */
    private long f32814e = -1;

    /* renamed from: i  reason: collision with root package name */
    private long f32815i = -1;

    public a(b bVar) {
        this.f32813d = bVar;
    }

    @Override // i9.a, com.facebook.drawee.controller.ControllerListener
    public void onFinalImageSet(String id2, Object obj, Animatable animatable) {
        Intrinsics.checkNotNullParameter(id2, "id");
        long currentTimeMillis = System.currentTimeMillis();
        this.f32815i = currentTimeMillis;
        b bVar = this.f32813d;
        if (bVar != null) {
            bVar.a(currentTimeMillis - this.f32814e);
        }
    }

    @Override // i9.a, com.facebook.drawee.controller.ControllerListener
    public void onSubmit(String id2, Object obj) {
        Intrinsics.checkNotNullParameter(id2, "id");
        this.f32814e = System.currentTimeMillis();
    }
}
