package hf;

import android.accounts.Account;
import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.auth.api.signin.GoogleSignInAccount;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n0 extends jf.a {
    public static final Parcelable.Creator<n0> CREATOR = new o0();

    /* renamed from: d  reason: collision with root package name */
    final int f27868d;

    /* renamed from: e  reason: collision with root package name */
    private final Account f27869e;

    /* renamed from: i  reason: collision with root package name */
    private final int f27870i;

    /* renamed from: o  reason: collision with root package name */
    private final GoogleSignInAccount f27871o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n0(int i10, Account account, int i11, GoogleSignInAccount googleSignInAccount) {
        this.f27868d = i10;
        this.f27869e = account;
        this.f27870i = i11;
        this.f27871o = googleSignInAccount;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int i11 = this.f27868d;
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, i11);
        jf.c.q(parcel, 2, this.f27869e, i10, false);
        jf.c.l(parcel, 3, this.f27870i);
        jf.c.q(parcel, 4, this.f27871o, i10, false);
        jf.c.b(parcel, a10);
    }

    public n0(Account account, int i10, GoogleSignInAccount googleSignInAccount) {
        this(2, account, i10, googleSignInAccount);
    }
}
