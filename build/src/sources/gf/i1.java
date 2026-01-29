package gf;

import android.accounts.Account;
import android.os.Bundle;
import android.os.IBinder;
import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.api.Scope;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i1 implements Parcelable.Creator {
    /* JADX INFO: Access modifiers changed from: package-private */
    public static void a(f fVar, Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, fVar.f26781d);
        hf.c.l(parcel, 2, fVar.f26782e);
        hf.c.l(parcel, 3, fVar.f26783i);
        hf.c.s(parcel, 4, fVar.f26784o, false);
        hf.c.k(parcel, 5, fVar.f26785p, false);
        hf.c.v(parcel, 6, fVar.f26786q, i10, false);
        hf.c.e(parcel, 7, fVar.f26787r, false);
        hf.c.q(parcel, 8, fVar.f26788s, i10, false);
        hf.c.v(parcel, 10, fVar.f26789t, i10, false);
        hf.c.v(parcel, 11, fVar.f26790u, i10, false);
        hf.c.c(parcel, 12, fVar.f26791v);
        hf.c.l(parcel, 13, fVar.f26792w);
        hf.c.c(parcel, 14, fVar.f26793x);
        hf.c.s(parcel, 15, fVar.b(), false);
        hf.c.b(parcel, a10);
    }

    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = hf.b.A(parcel);
        Scope[] scopeArr = f.f26780z;
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
            int r10 = hf.b.r(parcel);
            switch (hf.b.l(r10)) {
                case 1:
                    i10 = hf.b.t(parcel, r10);
                    break;
                case 2:
                    i11 = hf.b.t(parcel, r10);
                    break;
                case 3:
                    i12 = hf.b.t(parcel, r10);
                    break;
                case 4:
                    str = hf.b.f(parcel, r10);
                    break;
                case 5:
                    iBinder = hf.b.s(parcel, r10);
                    break;
                case 6:
                    scopeArr = (Scope[]) hf.b.i(parcel, r10, Scope.CREATOR);
                    break;
                case 7:
                    bundle = hf.b.a(parcel, r10);
                    break;
                case 8:
                    account = (Account) hf.b.e(parcel, r10, Account.CREATOR);
                    break;
                case 9:
                default:
                    hf.b.z(parcel, r10);
                    break;
                case 10:
                    dVarArr = (com.google.android.gms.common.d[]) hf.b.i(parcel, r10, com.google.android.gms.common.d.CREATOR);
                    break;
                case 11:
                    dVarArr2 = (com.google.android.gms.common.d[]) hf.b.i(parcel, r10, com.google.android.gms.common.d.CREATOR);
                    break;
                case 12:
                    z10 = hf.b.m(parcel, r10);
                    break;
                case 13:
                    i13 = hf.b.t(parcel, r10);
                    break;
                case 14:
                    z11 = hf.b.m(parcel, r10);
                    break;
                case 15:
                    str2 = hf.b.f(parcel, r10);
                    break;
            }
        }
        hf.b.k(parcel, A);
        return new f(i10, i11, i12, str, iBinder, scopeArr, bundle, account, dVarArr, dVarArr2, z10, i13, z11, str2);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new f[i10];
    }
}
