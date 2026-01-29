package com.google.android.gms.fido.fido2.api.common;

import android.os.Parcel;
import android.os.Parcelable;
import wf.a0;
import wf.g0;
import wf.i0;
import wf.l0;
import wf.n;
import wf.n0;
import wf.o;
import wf.p;
import wf.q0;
import wf.r1;
import wf.t1;
import wf.x1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = hf.b.A(parcel);
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
            int r10 = hf.b.r(parcel);
            switch (hf.b.l(r10)) {
                case 2:
                    nVar = (n) hf.b.e(parcel, r10, n.CREATOR);
                    break;
                case 3:
                    r1Var = (r1) hf.b.e(parcel, r10, r1.CREATOR);
                    break;
                case 4:
                    a0Var = (a0) hf.b.e(parcel, r10, a0.CREATOR);
                    break;
                case 5:
                    x1Var = (x1) hf.b.e(parcel, r10, x1.CREATOR);
                    break;
                case 6:
                    g0Var = (g0) hf.b.e(parcel, r10, g0.CREATOR);
                    break;
                case 7:
                    i0Var = (i0) hf.b.e(parcel, r10, i0.CREATOR);
                    break;
                case 8:
                    t1Var = (t1) hf.b.e(parcel, r10, t1.CREATOR);
                    break;
                case 9:
                    l0Var = (l0) hf.b.e(parcel, r10, l0.CREATOR);
                    break;
                case 10:
                    oVar = (o) hf.b.e(parcel, r10, o.CREATOR);
                    break;
                case 11:
                    q0Var = (q0) hf.b.e(parcel, r10, q0.CREATOR);
                    break;
                case 12:
                    cVar = (c) hf.b.e(parcel, r10, c.CREATOR);
                    break;
                case 13:
                    n0Var = (n0) hf.b.e(parcel, r10, n0.CREATOR);
                    break;
                case 14:
                    pVar = (p) hf.b.e(parcel, r10, p.CREATOR);
                    break;
                default:
                    hf.b.z(parcel, r10);
                    break;
            }
        }
        hf.b.k(parcel, A);
        return new AuthenticationExtensions(nVar, r1Var, a0Var, x1Var, g0Var, i0Var, t1Var, l0Var, oVar, q0Var, cVar, n0Var, pVar);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new AuthenticationExtensions[i10];
    }
}
