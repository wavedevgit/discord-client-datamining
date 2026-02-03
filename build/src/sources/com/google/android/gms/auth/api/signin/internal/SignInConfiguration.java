package com.google.android.gms.auth.api.signin.internal;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import com.google.android.gms.auth.api.signin.GoogleSignInOptions;
import com.google.android.gms.common.internal.ReflectedParcelable;
import gf.q;
import hf.c;
import ze.b;
import ze.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class SignInConfiguration extends hf.a implements ReflectedParcelable {
    @NonNull
    public static final Parcelable.Creator<SignInConfiguration> CREATOR = new w();

    /* renamed from: d  reason: collision with root package name */
    private final String f14380d;

    /* renamed from: e  reason: collision with root package name */
    private final GoogleSignInOptions f14381e;

    public SignInConfiguration(String str, GoogleSignInOptions googleSignInOptions) {
        this.f14380d = q.f(str);
        this.f14381e = googleSignInOptions;
    }

    public final GoogleSignInOptions b() {
        return this.f14381e;
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof SignInConfiguration)) {
            return false;
        }
        SignInConfiguration signInConfiguration = (SignInConfiguration) obj;
        if (this.f14380d.equals(signInConfiguration.f14380d)) {
            GoogleSignInOptions googleSignInOptions = this.f14381e;
            GoogleSignInOptions googleSignInOptions2 = signInConfiguration.f14381e;
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
        return new b().a(this.f14380d).a(this.f14381e).b();
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f14380d;
        int a10 = c.a(parcel);
        c.s(parcel, 2, str, false);
        c.q(parcel, 5, this.f14381e, i10, false);
        c.b(parcel, a10);
    }
}
