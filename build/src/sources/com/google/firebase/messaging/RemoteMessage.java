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
    Bundle f17043d;

    /* renamed from: e  reason: collision with root package name */
    private Map f17044e;

    public RemoteMessage(Bundle bundle) {
        this.f17043d = bundle;
    }

    public Map b() {
        if (this.f17044e == null) {
            this.f17044e = e.a.a(this.f17043d);
        }
        return this.f17044e;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        o0.c(this, parcel, i10);
    }
}
