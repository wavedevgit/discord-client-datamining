package gf;

import android.accounts.Account;
import android.os.Bundle;
import android.os.IBinder;
import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import com.google.android.gms.common.api.Scope;
import gf.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f extends hf.a {

    /* renamed from: d  reason: collision with root package name */
    final int f25104d;

    /* renamed from: e  reason: collision with root package name */
    final int f25105e;

    /* renamed from: i  reason: collision with root package name */
    final int f25106i;

    /* renamed from: o  reason: collision with root package name */
    String f25107o;

    /* renamed from: p  reason: collision with root package name */
    IBinder f25108p;

    /* renamed from: q  reason: collision with root package name */
    Scope[] f25109q;

    /* renamed from: r  reason: collision with root package name */
    Bundle f25110r;

    /* renamed from: s  reason: collision with root package name */
    Account f25111s;

    /* renamed from: t  reason: collision with root package name */
    com.google.android.gms.common.d[] f25112t;

    /* renamed from: u  reason: collision with root package name */
    com.google.android.gms.common.d[] f25113u;

    /* renamed from: v  reason: collision with root package name */
    final boolean f25114v;

    /* renamed from: w  reason: collision with root package name */
    final int f25115w;

    /* renamed from: x  reason: collision with root package name */
    boolean f25116x;

    /* renamed from: y  reason: collision with root package name */
    private final String f25117y;
    @NonNull
    public static final Parcelable.Creator<f> CREATOR = new g1();

    /* renamed from: z  reason: collision with root package name */
    static final Scope[] f25103z = new Scope[0];
    static final com.google.android.gms.common.d[] A = new com.google.android.gms.common.d[0];

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(int i10, int i11, int i12, String str, IBinder iBinder, Scope[] scopeArr, Bundle bundle, Account account, com.google.android.gms.common.d[] dVarArr, com.google.android.gms.common.d[] dVarArr2, boolean z10, int i13, boolean z11, String str2) {
        Account account2;
        scopeArr = scopeArr == null ? f25103z : scopeArr;
        bundle = bundle == null ? new Bundle() : bundle;
        dVarArr = dVarArr == null ? A : dVarArr;
        dVarArr2 = dVarArr2 == null ? A : dVarArr2;
        this.f25104d = i10;
        this.f25105e = i11;
        this.f25106i = i12;
        if ("com.google.android.gms".equals(str)) {
            this.f25107o = "com.google.android.gms";
        } else {
            this.f25107o = str;
        }
        if (i10 < 2) {
            if (iBinder != null) {
                account2 = a.h(j.a.f(iBinder));
            } else {
                account2 = null;
            }
            this.f25111s = account2;
        } else {
            this.f25108p = iBinder;
            this.f25111s = account;
        }
        this.f25109q = scopeArr;
        this.f25110r = bundle;
        this.f25112t = dVarArr;
        this.f25113u = dVarArr2;
        this.f25114v = z10;
        this.f25115w = i13;
        this.f25116x = z11;
        this.f25117y = str2;
    }

    public String b() {
        return this.f25117y;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        g1.a(this, parcel, i10);
    }
}
