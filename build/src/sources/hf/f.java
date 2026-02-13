package hf;

import android.accounts.Account;
import android.os.Bundle;
import android.os.IBinder;
import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import com.google.android.gms.common.api.Scope;
import hf.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f extends jf.a {

    /* renamed from: d  reason: collision with root package name */
    final int f27802d;

    /* renamed from: e  reason: collision with root package name */
    final int f27803e;

    /* renamed from: i  reason: collision with root package name */
    final int f27804i;

    /* renamed from: o  reason: collision with root package name */
    String f27805o;

    /* renamed from: p  reason: collision with root package name */
    IBinder f27806p;

    /* renamed from: q  reason: collision with root package name */
    Scope[] f27807q;

    /* renamed from: r  reason: collision with root package name */
    Bundle f27808r;

    /* renamed from: s  reason: collision with root package name */
    Account f27809s;

    /* renamed from: t  reason: collision with root package name */
    com.google.android.gms.common.d[] f27810t;

    /* renamed from: u  reason: collision with root package name */
    com.google.android.gms.common.d[] f27811u;

    /* renamed from: v  reason: collision with root package name */
    final boolean f27812v;

    /* renamed from: w  reason: collision with root package name */
    final int f27813w;

    /* renamed from: x  reason: collision with root package name */
    boolean f27814x;

    /* renamed from: y  reason: collision with root package name */
    private final String f27815y;
    @NonNull
    public static final Parcelable.Creator<f> CREATOR = new g1();

    /* renamed from: z  reason: collision with root package name */
    static final Scope[] f27801z = new Scope[0];
    static final com.google.android.gms.common.d[] A = new com.google.android.gms.common.d[0];

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(int i10, int i11, int i12, String str, IBinder iBinder, Scope[] scopeArr, Bundle bundle, Account account, com.google.android.gms.common.d[] dVarArr, com.google.android.gms.common.d[] dVarArr2, boolean z10, int i13, boolean z11, String str2) {
        Account account2;
        scopeArr = scopeArr == null ? f27801z : scopeArr;
        bundle = bundle == null ? new Bundle() : bundle;
        dVarArr = dVarArr == null ? A : dVarArr;
        dVarArr2 = dVarArr2 == null ? A : dVarArr2;
        this.f27802d = i10;
        this.f27803e = i11;
        this.f27804i = i12;
        if ("com.google.android.gms".equals(str)) {
            this.f27805o = "com.google.android.gms";
        } else {
            this.f27805o = str;
        }
        if (i10 < 2) {
            if (iBinder != null) {
                account2 = a.i(j.a.f(iBinder));
            } else {
                account2 = null;
            }
            this.f27809s = account2;
        } else {
            this.f27806p = iBinder;
            this.f27809s = account;
        }
        this.f27807q = scopeArr;
        this.f27808r = bundle;
        this.f27810t = dVarArr;
        this.f27811u = dVarArr2;
        this.f27812v = z10;
        this.f27813w = i13;
        this.f27814x = z11;
        this.f27815y = str2;
    }

    public String b() {
        return this.f27815y;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        g1.a(this, parcel, i10);
    }
}
