package gf;

import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d1 extends hf.a {
    public static final Parcelable.Creator<d1> CREATOR = new e1();

    /* renamed from: d  reason: collision with root package name */
    Bundle f25093d;

    /* renamed from: e  reason: collision with root package name */
    com.google.android.gms.common.d[] f25094e;

    /* renamed from: i  reason: collision with root package name */
    int f25095i;

    /* renamed from: o  reason: collision with root package name */
    e f25096o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d1(Bundle bundle, com.google.android.gms.common.d[] dVarArr, int i10, e eVar) {
        this.f25093d = bundle;
        this.f25094e = dVarArr;
        this.f25095i = i10;
        this.f25096o = eVar;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.e(parcel, 1, this.f25093d, false);
        hf.c.v(parcel, 2, this.f25094e, i10, false);
        hf.c.l(parcel, 3, this.f25095i);
        hf.c.q(parcel, 4, this.f25096o, i10, false);
        hf.c.b(parcel, a10);
    }
}
