package hf;

import android.accounts.Account;
import android.os.Bundle;
import android.os.IBinder;
import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.api.Scope;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g1 implements Parcelable.Creator {
    /* JADX INFO: Access modifiers changed from: package-private */
    public static void a(f fVar, Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, fVar.f27233d);
        jf.c.l(parcel, 2, fVar.f27234e);
        jf.c.l(parcel, 3, fVar.f27235i);
        jf.c.s(parcel, 4, fVar.f27236o, false);
        jf.c.k(parcel, 5, fVar.f27237p, false);
        jf.c.v(parcel, 6, fVar.f27238q, i10, false);
        jf.c.e(parcel, 7, fVar.f27239r, false);
        jf.c.q(parcel, 8, fVar.f27240s, i10, false);
        jf.c.v(parcel, 10, fVar.f27241t, i10, false);
        jf.c.v(parcel, 11, fVar.f27242u, i10, false);
        jf.c.c(parcel, 12, fVar.f27243v);
        jf.c.l(parcel, 13, fVar.f27244w);
        jf.c.c(parcel, 14, fVar.f27245x);
        jf.c.s(parcel, 15, fVar.b(), false);
        jf.c.b(parcel, a10);
    }

    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = jf.b.A(parcel);
        Scope[] scopeArr = f.f27232z;
        Bundle bundle = new Bundle();
        com.google.android.gms.common.d[] dVarArr = f.A;
        com.google.android.gms.common.d[] dVarArr2 = dVarArr;
        String str = null;
        IBinder iBinder = null;
        Account account = null;
        String str2 = null;
        int i10 = 0;
        int i11 = 0;
        int i12 = 0;
        boolean z10 = false;
        int i13 = 0;
        boolean z11 = false;
        while (parcel.dataPosition() < A) {
            int r10 = jf.b.r(parcel);
            switch (jf.b.l(r10)) {
                case 1:
                    i10 = jf.b.t(parcel, r10);
                    break;
                case 2:
                    i11 = jf.b.t(parcel, r10);
                    break;
                case 3:
                    i12 = jf.b.t(parcel, r10);
                    break;
                case 4:
                    str = jf.b.f(parcel, r10);
                    break;
                case 5:
                    iBinder = jf.b.s(parcel, r10);
                    break;
                case 6:
                    scopeArr = (Scope[]) jf.b.i(parcel, r10, Scope.CREATOR);
                    break;
                case 7:
                    bundle = jf.b.a(parcel, r10);
                    break;
                case 8:
                    account = (Account) jf.b.e(parcel, r10, Account.CREATOR);
                    break;
                case 9:
                default:
                    jf.b.z(parcel, r10);
                    break;
                case 10:
                    dVarArr = (com.google.android.gms.common.d[]) jf.b.i(parcel, r10, com.google.android.gms.common.d.CREATOR);
                    break;
                case 11:
                    dVarArr2 = (com.google.android.gms.common.d[]) jf.b.i(parcel, r10, com.google.android.gms.common.d.CREATOR);
                    break;
                case 12:
                    z10 = jf.b.m(parcel, r10);
                    break;
                case 13:
                    i13 = jf.b.t(parcel, r10);
                    break;
                case 14:
                    z11 = jf.b.m(parcel, r10);
                    break;
                case 15:
                    str2 = jf.b.f(parcel, r10);
                    break;
            }
        }
        jf.b.k(parcel, A);
        return new f(i10, i11, i12, str, iBinder, scopeArr, bundle, account, dVarArr, dVarArr2, z10, i13, z11, str2);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new f[i10];
    }
}
