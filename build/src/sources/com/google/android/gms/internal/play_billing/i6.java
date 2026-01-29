package com.google.android.gms.internal.play_billing;

import android.os.Bundle;
import android.os.IBinder;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i6 extends l6 implements k6 {
    /* JADX INFO: Access modifiers changed from: package-private */
    public i6(IBinder iBinder) {
        super(iBinder, "com.android.vending.billing.IInAppBillingService");
    }

    @Override // com.google.android.gms.internal.play_billing.k6
    public final Bundle G(int i10, String str, String str2, String str3, String str4, Bundle bundle) {
        Parcel e10 = e();
        e10.writeInt(i10);
        e10.writeString(str);
        e10.writeString(str2);
        e10.writeString(str3);
        e10.writeString(null);
        n6.c(e10, bundle);
        Parcel f10 = f(8, e10);
        Bundle bundle2 = (Bundle) n6.a(f10, Bundle.CREATOR);
        f10.recycle();
        return bundle2;
    }

    @Override // com.google.android.gms.internal.play_billing.k6
    public final int L0(int i10, String str, String str2, Bundle bundle) {
        Parcel e10 = e();
        e10.writeInt(i10);
        e10.writeString(str);
        e10.writeString(str2);
        n6.c(e10, bundle);
        Parcel f10 = f(10, e10);
        int readInt = f10.readInt();
        f10.recycle();
        return readInt;
    }

    @Override // com.google.android.gms.internal.play_billing.k6
    public final Bundle P(int i10, String str, String str2, String str3, Bundle bundle) {
        Parcel e10 = e();
        e10.writeInt(i10);
        e10.writeString(str);
        e10.writeString(str2);
        e10.writeString(str3);
        n6.c(e10, bundle);
        Parcel f10 = f(11, e10);
        Bundle bundle2 = (Bundle) n6.a(f10, Bundle.CREATOR);
        f10.recycle();
        return bundle2;
    }

    @Override // com.google.android.gms.internal.play_billing.k6
    public final Bundle R0(int i10, String str, String str2, Bundle bundle) {
        Parcel e10 = e();
        e10.writeInt(9);
        e10.writeString(str);
        e10.writeString(str2);
        n6.c(e10, bundle);
        Parcel f10 = f(902, e10);
        Bundle bundle2 = (Bundle) n6.a(f10, Bundle.CREATOR);
        f10.recycle();
        return bundle2;
    }

    @Override // com.google.android.gms.internal.play_billing.k6
    public final Bundle X(int i10, String str, String str2, Bundle bundle, Bundle bundle2) {
        Parcel e10 = e();
        e10.writeInt(i10);
        e10.writeString(str);
        e10.writeString(str2);
        n6.c(e10, bundle);
        n6.c(e10, bundle2);
        Parcel f10 = f(901, e10);
        Bundle bundle3 = (Bundle) n6.a(f10, Bundle.CREATOR);
        f10.recycle();
        return bundle3;
    }

    @Override // com.google.android.gms.internal.play_billing.k6
    public final Bundle Y(int i10, String str, String str2, Bundle bundle) {
        Parcel e10 = e();
        e10.writeInt(9);
        e10.writeString(str);
        e10.writeString(str2);
        n6.c(e10, bundle);
        Parcel f10 = f(12, e10);
        Bundle bundle2 = (Bundle) n6.a(f10, Bundle.CREATOR);
        f10.recycle();
        return bundle2;
    }

    @Override // com.google.android.gms.internal.play_billing.k6
    public final int c0(int i10, String str, String str2) {
        Parcel e10 = e();
        e10.writeInt(i10);
        e10.writeString(str);
        e10.writeString(str2);
        Parcel f10 = f(1, e10);
        int readInt = f10.readInt();
        f10.recycle();
        return readInt;
    }

    @Override // com.google.android.gms.internal.play_billing.k6
    public final Bundle f0(int i10, String str, String str2, String str3, Bundle bundle) {
        Parcel e10 = e();
        e10.writeInt(6);
        e10.writeString(str);
        e10.writeString(str2);
        e10.writeString(str3);
        n6.c(e10, bundle);
        Parcel f10 = f(9, e10);
        Bundle bundle2 = (Bundle) n6.a(f10, Bundle.CREATOR);
        f10.recycle();
        return bundle2;
    }

    @Override // com.google.android.gms.internal.play_billing.k6
    public final Bundle j0(int i10, String str, String str2, String str3, String str4) {
        Parcel e10 = e();
        e10.writeInt(3);
        e10.writeString(str);
        e10.writeString(str2);
        e10.writeString(str3);
        e10.writeString(null);
        Parcel f10 = f(3, e10);
        Bundle bundle = (Bundle) n6.a(f10, Bundle.CREATOR);
        f10.recycle();
        return bundle;
    }

    @Override // com.google.android.gms.internal.play_billing.k6
    public final int k(int i10, String str, String str2) {
        Parcel e10 = e();
        e10.writeInt(3);
        e10.writeString(str);
        e10.writeString(str2);
        Parcel f10 = f(5, e10);
        int readInt = f10.readInt();
        f10.recycle();
        return readInt;
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // com.google.android.gms.internal.play_billing.k6
    public final void q0(int i10, String str, Bundle bundle, h6 h6Var) {
        Parcel e10 = e();
        e10.writeInt(18);
        e10.writeString(str);
        n6.c(e10, bundle);
        e10.writeStrongBinder(h6Var);
        h(1301, e10);
    }

    @Override // com.google.android.gms.internal.play_billing.k6
    public final Bundle v(int i10, String str, String str2, String str3) {
        Parcel e10 = e();
        e10.writeInt(3);
        e10.writeString(str);
        e10.writeString(str2);
        e10.writeString(str3);
        Parcel f10 = f(4, e10);
        Bundle bundle = (Bundle) n6.a(f10, Bundle.CREATOR);
        f10.recycle();
        return bundle;
    }
}
