package bg;

import android.content.Context;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Looper;
import com.facebook.react.views.image.ReactImageView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d extends hf.g {
    /* JADX INFO: Access modifiers changed from: protected */
    public d(Context context, Looper looper, hf.d dVar, gf.d dVar2, gf.k kVar) {
        super(context, looper, (int) ReactImageView.REMOTE_IMAGE_FADE_DURATION_MS, dVar, dVar2, kVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // hf.c
    public final String D() {
        return "com.google.android.gms.appset.internal.IAppSetService";
    }

    @Override // hf.c
    protected final String E() {
        return "com.google.android.gms.appset.service.START";
    }

    @Override // hf.c
    protected final boolean H() {
        return true;
    }

    @Override // hf.c
    public final boolean Q() {
        return true;
    }

    @Override // hf.c, ff.a.f
    public final int n() {
        return 212800000;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // hf.c
    public final /* synthetic */ IInterface r(IBinder iBinder) {
        if (iBinder == null) {
            return null;
        }
        IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.appset.internal.IAppSetService");
        if (queryLocalInterface instanceof g) {
            return (g) queryLocalInterface;
        }
        return new g(iBinder);
    }

    @Override // hf.c
    public final com.google.android.gms.common.d[] u() {
        return ue.h.f50734b;
    }
}
