package ff;

import android.os.RemoteException;
import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b1 {

    /* renamed from: a  reason: collision with root package name */
    public final int f23860a;

    public b1(int i10) {
        this.f23860a = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ Status e(RemoteException remoteException) {
        return new Status(19, remoteException.getClass().getSimpleName() + ": " + remoteException.getLocalizedMessage());
    }

    public abstract void a(Status status);

    public abstract void b(Exception exc);

    public abstract void c(e0 e0Var);

    public abstract void d(v vVar, boolean z10);
}
