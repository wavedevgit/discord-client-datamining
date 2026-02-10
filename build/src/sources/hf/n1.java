package hf;

import android.accounts.Account;
import android.os.IBinder;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n1 extends ig.a implements j {
    /* JADX INFO: Access modifiers changed from: package-private */
    public n1(IBinder iBinder) {
        super(iBinder, "com.google.android.gms.common.internal.IAccountAccessor");
    }

    @Override // hf.j
    public final Account zzb() {
        Parcel e10 = e(2, f());
        Account account = (Account) ig.o.a(e10, Account.CREATOR);
        e10.recycle();
        return account;
    }
}
