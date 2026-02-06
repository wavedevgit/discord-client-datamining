package lg;

import android.content.Context;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Looper;
import androidx.collection.SimpleArrayMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o extends gf.g {
    private final SimpleArrayMap T;
    private final SimpleArrayMap U;
    private final SimpleArrayMap V;
    private final SimpleArrayMap W;

    public o(Context context, Looper looper, gf.d dVar, ff.d dVar2, ff.k kVar) {
        super(context, looper, 23, dVar, dVar2, kVar);
        this.T = new SimpleArrayMap();
        this.U = new SimpleArrayMap();
        this.V = new SimpleArrayMap();
        this.W = new SimpleArrayMap();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gf.c
    public final String D() {
        return "com.google.android.gms.location.internal.IGoogleLocationManagerService";
    }

    @Override // gf.c
    protected final String E() {
        return "com.google.android.location.internal.GoogleLocationManagerService.START";
    }

    @Override // gf.c
    public final void L(int i10) {
        super.L(i10);
        synchronized (this.T) {
            this.T.clear();
        }
        synchronized (this.U) {
            this.U.clear();
        }
        synchronized (this.V) {
            this.V.clear();
        }
    }

    @Override // gf.c
    public final boolean Q() {
        return true;
    }

    @Override // gf.c, ef.a.f
    public final int n() {
        return 11717000;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gf.c
    public final /* synthetic */ IInterface r(IBinder iBinder) {
        if (iBinder == null) {
            return null;
        }
        IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.location.internal.IGoogleLocationManagerService");
        if (queryLocalInterface instanceof f0) {
            return (f0) queryLocalInterface;
        }
        return new e0(iBinder);
    }

    @Override // gf.c
    public final com.google.android.gms.common.d[] u() {
        return ug.o.f51467p;
    }
}
