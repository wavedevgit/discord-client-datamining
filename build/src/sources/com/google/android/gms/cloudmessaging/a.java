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
    final Intent f13854d;

    public a(Intent intent) {
        this.f13854d = intent;
    }

    public Intent b() {
        return this.f13854d;
    }

    public String c() {
        String stringExtra = this.f13854d.getStringExtra("google.message_id");
        if (stringExtra == null) {
            return this.f13854d.getStringExtra("message_id");
        }
        return stringExtra;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final Integer d() {
        if (this.f13854d.hasExtra("google.product_id")) {
            return Integer.valueOf(this.f13854d.getIntExtra("google.product_id", 0));
        }
        return null;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.q(parcel, 1, this.f13854d, i10, false);
        jf.c.b(parcel, a10);
    }
}
