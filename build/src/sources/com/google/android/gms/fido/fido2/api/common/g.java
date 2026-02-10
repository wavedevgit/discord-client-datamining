package com.google.android.gms.fido.fido2.api.common;

import android.os.Parcel;
import android.os.Parcelable;
import xf.a0;
import xf.g0;
import xf.i0;
import xf.l0;
import xf.n;
import xf.n0;
import xf.o;
import xf.p;
import xf.q0;
import xf.r1;
import xf.t1;
import xf.x1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = jf.b.A(parcel);
        n nVar = null;
        r1 r1Var = null;
        a0 a0Var = null;
        x1 x1Var = null;
        g0 g0Var = null;
        i0 i0Var = null;
        t1 t1Var = null;
        l0 l0Var = null;
        o oVar = null;
        q0 q0Var = null;
        c cVar = null;
        n0 n0Var = null;
        p pVar = null;
        while (parcel.dataPosition() < A) {
            int r10 = jf.b.r(parcel);
            switch (jf.b.l(r10)) {
                case 2:
                    nVar = (n) jf.b.e(parcel, r10, n.CREATOR);
                    break;
                case 3:
                    r1Var = (r1) jf.b.e(parcel, r10, r1.CREATOR);
                    break;
                case 4:
                    a0Var = (a0) jf.b.e(parcel, r10, a0.CREATOR);
                    break;
                case 5:
                    x1Var = (x1) jf.b.e(parcel, r10, x1.CREATOR);
                    break;
                case 6:
                    g0Var = (g0) jf.b.e(parcel, r10, g0.CREATOR);
                    break;
                case 7:
                    i0Var = (i0) jf.b.e(parcel, r10, i0.CREATOR);
                    break;
                case 8:
                    t1Var = (t1) jf.b.e(parcel, r10, t1.CREATOR);
                    break;
                case 9:
                    l0Var = (l0) jf.b.e(parcel, r10, l0.CREATOR);
                    break;
                case 10:
                    oVar = (o) jf.b.e(parcel, r10, o.CREATOR);
                    break;
                case 11:
                    q0Var = (q0) jf.b.e(parcel, r10, q0.CREATOR);
                    break;
                case 12:
                    cVar = (c) jf.b.e(parcel, r10, c.CREATOR);
                    break;
                case 13:
                    n0Var = (n0) jf.b.e(parcel, r10, n0.CREATOR);
                    break;
                case 14:
                    pVar = (p) jf.b.e(parcel, r10, p.CREATOR);
                    break;
                default:
                    jf.b.z(parcel, r10);
                    break;
            }
        }
        jf.b.k(parcel, A);
        return new AuthenticationExtensions(nVar, r1Var, a0Var, x1Var, g0Var, i0Var, t1Var, l0Var, oVar, q0Var, cVar, n0Var, pVar);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new AuthenticationExtensions[i10];
    }
}
