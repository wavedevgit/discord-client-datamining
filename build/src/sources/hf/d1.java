package hf;

import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d1 extends jf.a {
    public static final Parcelable.Creator<d1> CREATOR = new e1();

    /* renamed from: d  reason: collision with root package name */
    Bundle f27222d;

    /* renamed from: e  reason: collision with root package name */
    com.google.android.gms.common.d[] f27223e;

    /* renamed from: i  reason: collision with root package name */
    int f27224i;

    /* renamed from: o  reason: collision with root package name */
    e f27225o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d1(Bundle bundle, com.google.android.gms.common.d[] dVarArr, int i10, e eVar) {
        this.f27222d = bundle;
        this.f27223e = dVarArr;
        this.f27224i = i10;
        this.f27225o = eVar;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.e(parcel, 1, this.f27222d, false);
        jf.c.v(parcel, 2, this.f27223e, i10, false);
        jf.c.l(parcel, 3, this.f27224i);
        jf.c.q(parcel, 4, this.f27225o, i10, false);
        jf.c.b(parcel, a10);
    }
}
