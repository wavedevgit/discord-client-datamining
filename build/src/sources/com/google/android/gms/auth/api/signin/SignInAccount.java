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
    final String f13689d;

    /* renamed from: e  reason: collision with root package name */
    private final GoogleSignInAccount f13690e;

    /* renamed from: i  reason: collision with root package name */
    final String f13691i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public SignInAccount(String str, GoogleSignInAccount googleSignInAccount, String str2) {
        this.f13690e = googleSignInAccount;
        this.f13689d = q.g(str, "8.3 and 8.4 SDKs require non-null email");
        this.f13691i = q.g(str2, "8.3 and 8.4 SDKs require non-null userId");
    }

    public final GoogleSignInAccount b() {
        return this.f13690e;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f13689d;
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 4, str, false);
        hf.c.q(parcel, 7, this.f13690e, i10, false);
        hf.c.s(parcel, 8, this.f13691i, false);
        hf.c.b(parcel, a10);
    }
}
