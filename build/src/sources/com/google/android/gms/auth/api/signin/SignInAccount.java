package com.google.android.gms.auth.api.signin;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import com.google.android.gms.common.internal.ReflectedParcelable;
import hf.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class SignInAccount extends jf.a implements ReflectedParcelable {
    @NonNull
    public static final Parcelable.Creator<SignInAccount> CREATOR = new g();

    /* renamed from: d  reason: collision with root package name */
    final String f14406d;

    /* renamed from: e  reason: collision with root package name */
    private final GoogleSignInAccount f14407e;

    /* renamed from: i  reason: collision with root package name */
    final String f14408i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public SignInAccount(String str, GoogleSignInAccount googleSignInAccount, String str2) {
        this.f14407e = googleSignInAccount;
        this.f14406d = q.g(str, "8.3 and 8.4 SDKs require non-null email");
        this.f14408i = q.g(str2, "8.3 and 8.4 SDKs require non-null userId");
    }

    public final GoogleSignInAccount b() {
        return this.f14407e;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f14406d;
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 4, str, false);
        jf.c.q(parcel, 7, this.f14407e, i10, false);
        jf.c.s(parcel, 8, this.f14408i, false);
        jf.c.b(parcel, a10);
    }
}
