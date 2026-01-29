package com.google.firebase.messaging;

import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
import com.google.firebase.messaging.e;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class RemoteMessage extends hf.a {
    public static final Parcelable.Creator<RemoteMessage> CREATOR = new o0();

    /* renamed from: d  reason: collision with root package name */
    Bundle f17414d;

    /* renamed from: e  reason: collision with root package name */
    private Map f17415e;

    public RemoteMessage(Bundle bundle) {
        this.f17414d = bundle;
    }

    public Map b() {
        if (this.f17415e == null) {
            this.f17415e = e.a.a(this.f17414d);
        }
        return this.f17415e;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        o0.c(this, parcel, i10);
    }
}
