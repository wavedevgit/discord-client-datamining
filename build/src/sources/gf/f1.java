package gf;

import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f1 extends hf.a {
    public static final Parcelable.Creator<f1> CREATOR = new g1();

    /* renamed from: d  reason: collision with root package name */
    Bundle f26907d;

    /* renamed from: e  reason: collision with root package name */
    com.google.android.gms.common.d[] f26908e;

    /* renamed from: i  reason: collision with root package name */
    int f26909i;

    /* renamed from: o  reason: collision with root package name */
    e f26910o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f1(Bundle bundle, com.google.android.gms.common.d[] dVarArr, int i10, e eVar) {
        this.f26907d = bundle;
        this.f26908e = dVarArr;
        this.f26909i = i10;
        this.f26910o = eVar;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.e(parcel, 1, this.f26907d, false);
        hf.c.v(parcel, 2, this.f26908e, i10, false);
        hf.c.l(parcel, 3, this.f26909i);
        hf.c.q(parcel, 4, this.f26910o, i10, false);
        hf.c.b(parcel, a10);
    }
}
