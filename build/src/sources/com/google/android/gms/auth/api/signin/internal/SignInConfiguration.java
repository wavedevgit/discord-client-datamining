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
    private final String f13348d;

    /* renamed from: e  reason: collision with root package name */
    private final GoogleSignInOptions f13349e;

    public SignInConfiguration(String str, GoogleSignInOptions googleSignInOptions) {
        this.f13348d = q.f(str);
        this.f13349e = googleSignInOptions;
    }

    public final GoogleSignInOptions b() {
        return this.f13349e;
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof SignInConfiguration)) {
            return false;
        }
        SignInConfiguration signInConfiguration = (SignInConfiguration) obj;
        if (this.f13348d.equals(signInConfiguration.f13348d)) {
            GoogleSignInOptions googleSignInOptions = this.f13349e;
            GoogleSignInOptions googleSignInOptions2 = signInConfiguration.f13349e;
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
        return new b().a(this.f13348d).a(this.f13349e).b();
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f13348d;
        int a10 = c.a(parcel);
        c.s(parcel, 2, str, false);
        c.q(parcel, 5, this.f13349e, i10, false);
        c.b(parcel, a10);
    }
}
