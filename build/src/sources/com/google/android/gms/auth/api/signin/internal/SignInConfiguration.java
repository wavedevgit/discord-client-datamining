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
    private final String f13834d;

    /* renamed from: e  reason: collision with root package name */
    private final GoogleSignInOptions f13835e;

    public SignInConfiguration(String str, GoogleSignInOptions googleSignInOptions) {
        this.f13834d = q.f(str);
        this.f13835e = googleSignInOptions;
    }

    public final GoogleSignInOptions b() {
        return this.f13835e;
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof SignInConfiguration)) {
            return false;
        }
        SignInConfiguration signInConfiguration = (SignInConfiguration) obj;
        if (this.f13834d.equals(signInConfiguration.f13834d)) {
            GoogleSignInOptions googleSignInOptions = this.f13835e;
            GoogleSignInOptions googleSignInOptions2 = signInConfiguration.f13835e;
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
        return new b().a(this.f13834d).a(this.f13835e).b();
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f13834d;
        int a10 = c.a(parcel);
        c.s(parcel, 2, str, false);
        c.q(parcel, 5, this.f13835e, i10, false);
        c.b(parcel, a10);
    }
}
