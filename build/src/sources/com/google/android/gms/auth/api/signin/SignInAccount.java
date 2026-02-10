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
    final String f13829d;

    /* renamed from: e  reason: collision with root package name */
    private final GoogleSignInAccount f13830e;

    /* renamed from: i  reason: collision with root package name */
    final String f13831i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public SignInAccount(String str, GoogleSignInAccount googleSignInAccount, String str2) {
        this.f13830e = googleSignInAccount;
        this.f13829d = q.g(str, "8.3 and 8.4 SDKs require non-null email");
        this.f13831i = q.g(str2, "8.3 and 8.4 SDKs require non-null userId");
    }

    public final GoogleSignInAccount b() {
        return this.f13830e;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f13829d;
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 4, str, false);
        jf.c.q(parcel, 7, this.f13830e, i10, false);
        jf.c.s(parcel, 8, this.f13831i, false);
        jf.c.b(parcel, a10);
    }
}
