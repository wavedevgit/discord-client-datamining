package ag;

import android.content.Context;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Looper;
import com.facebook.react.views.image.ReactImageView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d extends gf.g {
    /* JADX INFO: Access modifiers changed from: protected */
    public d(Context context, Looper looper, gf.d dVar, ff.d dVar2, ff.k kVar) {
        super(context, looper, (int) ReactImageView.REMOTE_IMAGE_FADE_DURATION_MS, dVar, dVar2, kVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gf.c
    public final String D() {
        return "com.google.android.gms.appset.internal.IAppSetService";
    }

    @Override // gf.c
    protected final String E() {
        return "com.google.android.gms.appset.service.START";
    }

    @Override // gf.c
    protected final boolean H() {
        return true;
    }

    @Override // gf.c
    public final boolean Q() {
        return true;
    }

    @Override // gf.c, ef.a.f
    public final int n() {
        return 212800000;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gf.c
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

    @Override // gf.c
    public final com.google.android.gms.common.d[] u() {
        return te.h.f49538b;
    }
}
