package gf;

import android.accounts.Account;
import android.os.IBinder;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r1 extends hg.a implements j {
    /* JADX INFO: Access modifiers changed from: package-private */
    public r1(IBinder iBinder) {
        super(iBinder, "com.google.android.gms.common.internal.IAccountAccessor");
    }

    @Override // gf.j
    public final Account zzb() {
        Parcel e10 = e(2, f());
        Account account = (Account) hg.f.a(e10, Account.CREATOR);
        e10.recycle();
        return account;
    }
}
