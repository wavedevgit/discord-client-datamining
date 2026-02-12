package com.google.android.gms.cloudmessaging;

import android.content.Intent;
import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends jf.a {
    @NonNull
    public static final Parcelable.Creator<a> CREATOR = new ef.b();

    /* renamed from: d  reason: collision with root package name */
    final Intent f14432d;

    public a(Intent intent) {
        this.f14432d = intent;
    }

    public Intent b() {
        return this.f14432d;
    }

    public String c() {
        String stringExtra = this.f14432d.getStringExtra("google.message_id");
        if (stringExtra == null) {
            return this.f14432d.getStringExtra("message_id");
        }
        return stringExtra;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final Integer d() {
        if (this.f14432d.hasExtra("google.product_id")) {
            return Integer.valueOf(this.f14432d.getIntExtra("google.product_id", 0));
        }
        return null;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.q(parcel, 1, this.f14432d, i10, false);
        jf.c.b(parcel, a10);
    }
}
