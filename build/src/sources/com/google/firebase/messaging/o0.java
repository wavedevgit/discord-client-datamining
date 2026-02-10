package com.google.firebase.messaging;

import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class o0 implements Parcelable.Creator {
    /* JADX INFO: Access modifiers changed from: package-private */
    public static void c(RemoteMessage remoteMessage, Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.e(parcel, 2, remoteMessage.f16525d, false);
        jf.c.b(parcel, a10);
    }

    @Override // android.os.Parcelable.Creator
    /* renamed from: a */
    public RemoteMessage createFromParcel(Parcel parcel) {
        int A = jf.b.A(parcel);
        Bundle bundle = null;
        while (parcel.dataPosition() < A) {
            int r10 = jf.b.r(parcel);
            if (jf.b.l(r10) != 2) {
                jf.b.z(parcel, r10);
            } else {
                bundle = jf.b.a(parcel, r10);
            }
        }
        jf.b.k(parcel, A);
        return new RemoteMessage(bundle);
    }

    @Override // android.os.Parcelable.Creator
    /* renamed from: b */
    public RemoteMessage[] newArray(int i10) {
        return new RemoteMessage[i10];
    }
}
