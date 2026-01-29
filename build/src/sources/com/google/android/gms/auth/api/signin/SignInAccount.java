package com.google.android.gms.auth.api.signin;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import com.google.android.gms.common.internal.ReflectedParcelable;
import gf.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class SignInAccount extends hf.a implements ReflectedParcelable {
    @NonNull
    public static final Parcelable.Creator<SignInAccount> CREATOR = new g();

    /* renamed from: d  reason: collision with root package name */
    final String f14746d;

    /* renamed from: e  reason: collision with root package name */
    private final GoogleSignInAccount f14747e;

    /* renamed from: i  reason: collision with root package name */
    final String f14748i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public SignInAccount(String str, GoogleSignInAccount googleSignInAccount, String str2) {
        this.f14747e = googleSignInAccount;
        this.f14746d = q.g(str, "8.3 and 8.4 SDKs require non-null email");
        this.f14748i = q.g(str2, "8.3 and 8.4 SDKs require non-null userId");
    }

    public final GoogleSignInAccount b() {
        return this.f14747e;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f14746d;
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 4, str, false);
        hf.c.q(parcel, 7, this.f14747e, i10, false);
        hf.c.s(parcel, 8, this.f14748i, false);
        hf.c.b(parcel, a10);
    }
}
