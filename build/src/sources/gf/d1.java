package gf;

import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d1 extends hf.a {
    public static final Parcelable.Creator<d1> CREATOR = new e1();

    /* renamed from: d  reason: collision with root package name */
    Bundle f25045d;

    /* renamed from: e  reason: collision with root package name */
    com.google.android.gms.common.d[] f25046e;

    /* renamed from: i  reason: collision with root package name */
    int f25047i;

    /* renamed from: o  reason: collision with root package name */
    e f25048o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d1(Bundle bundle, com.google.android.gms.common.d[] dVarArr, int i10, e eVar) {
        this.f25045d = bundle;
        this.f25046e = dVarArr;
        this.f25047i = i10;
        this.f25048o = eVar;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.e(parcel, 1, this.f25045d, false);
        hf.c.v(parcel, 2, this.f25046e, i10, false);
        hf.c.l(parcel, 3, this.f25047i);
        hf.c.q(parcel, 4, this.f25048o, i10, false);
        hf.c.b(parcel, a10);
    }
}
