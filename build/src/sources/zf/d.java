package zf;

import android.os.IBinder;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d extends a implements f {
    /* JADX INFO: Access modifiers changed from: package-private */
    public d(IBinder iBinder) {
        super(iBinder, "com.google.android.gms.ads.identifier.internal.IAdvertisingIdService");
    }

    @Override // zf.f
    public final String a() {
        Parcel f10 = f(1, e());
        String readString = f10.readString();
        f10.recycle();
        return readString;
    }

    @Override // zf.f
    public final boolean o(boolean z10) {
        Parcel e10 = e();
        c.a(e10, true);
        Parcel f10 = f(2, e10);
        boolean b10 = c.b(f10);
        f10.recycle();
        return b10;
    }
}
