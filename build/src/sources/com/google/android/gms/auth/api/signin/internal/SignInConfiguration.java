package com.google.android.gms.auth.api.signin.internal;

import af.b;
import af.w;
import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import com.google.android.gms.auth.api.signin.GoogleSignInOptions;
import com.google.android.gms.common.internal.ReflectedParcelable;
import hf.q;
import jf.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class SignInConfiguration extends jf.a implements ReflectedParcelable {
    @NonNull
    public static final Parcelable.Creator<SignInConfiguration> CREATOR = new w();

    /* renamed from: d  reason: collision with root package name */
    private final String f14412d;

    /* renamed from: e  reason: collision with root package name */
    private final GoogleSignInOptions f14413e;

    public SignInConfiguration(String str, GoogleSignInOptions googleSignInOptions) {
        this.f14412d = q.f(str);
        this.f14413e = googleSignInOptions;
    }

    public final GoogleSignInOptions b() {
        return this.f14413e;
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof SignInConfiguration)) {
            return false;
        }
        SignInConfiguration signInConfiguration = (SignInConfiguration) obj;
        if (this.f14412d.equals(signInConfiguration.f14412d)) {
            GoogleSignInOptions googleSignInOptions = this.f14413e;
            GoogleSignInOptions googleSignInOptions2 = signInConfiguration.f14413e;
            if (googleSignInOptions == null) {
                if (googleSignInOptions2 == null) {
                    return true;
                }
            } else if (googleSignInOptions.equals(googleSignInOptions2)) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        return new b().a(this.f14412d).a(this.f14413e).b();
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f14412d;
        int a10 = c.a(parcel);
        c.s(parcel, 2, str, false);
        c.q(parcel, 5, this.f14413e, i10, false);
        c.b(parcel, a10);
    }
}
