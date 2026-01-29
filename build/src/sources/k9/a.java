package k9;

import android.graphics.drawable.Animatable;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends i9.a {

    /* renamed from: d  reason: collision with root package name */
    private final b f33051d;

    /* renamed from: e  reason: collision with root package name */
    private long f33052e = -1;

    /* renamed from: i  reason: collision with root package name */
    private long f33053i = -1;

    public a(b bVar) {
        this.f33051d = bVar;
    }

    @Override // i9.a, com.facebook.drawee.controller.ControllerListener
    public void onFinalImageSet(String id2, Object obj, Animatable animatable) {
        Intrinsics.checkNotNullParameter(id2, "id");
        long currentTimeMillis = System.currentTimeMillis();
        this.f33053i = currentTimeMillis;
        b bVar = this.f33051d;
        if (bVar != null) {
            bVar.a(currentTimeMillis - this.f33052e);
        }
    }

    @Override // i9.a, com.facebook.drawee.controller.ControllerListener
    public void onSubmit(String id2, Object obj) {
        Intrinsics.checkNotNullParameter(id2, "id");
        this.f33052e = System.currentTimeMillis();
    }
}
