package gf;

import android.accounts.Account;
import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.auth.api.signin.GoogleSignInAccount;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n0 extends hf.a {
    public static final Parcelable.Creator<n0> CREATOR = new o0();

    /* renamed from: d  reason: collision with root package name */
    final int f24869d;

    /* renamed from: e  reason: collision with root package name */
    private final Account f24870e;

    /* renamed from: i  reason: collision with root package name */
    private final int f24871i;

    /* renamed from: o  reason: collision with root package name */
    private final GoogleSignInAccount f24872o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n0(int i10, Account account, int i11, GoogleSignInAccount googleSignInAccount) {
        this.f24869d = i10;
        this.f24870e = account;
        this.f24871i = i11;
        this.f24872o = googleSignInAccount;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int i11 = this.f24869d;
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, i11);
        hf.c.q(parcel, 2, this.f24870e, i10, false);
        hf.c.l(parcel, 3, this.f24871i);
        hf.c.q(parcel, 4, this.f24872o, i10, false);
        hf.c.b(parcel, a10);
    }

    public n0(Account account, int i10, GoogleSignInAccount googleSignInAccount) {
        this(2, account, i10, googleSignInAccount);
    }
}
