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
    final int f25056d;

    /* renamed from: e  reason: collision with root package name */
    final int f25057e;

    /* renamed from: i  reason: collision with root package name */
    final int f25058i;

    /* renamed from: o  reason: collision with root package name */
    String f25059o;

    /* renamed from: p  reason: collision with root package name */
    IBinder f25060p;

    /* renamed from: q  reason: collision with root package name */
    Scope[] f25061q;

    /* renamed from: r  reason: collision with root package name */
    Bundle f25062r;

    /* renamed from: s  reason: collision with root package name */
    Account f25063s;

    /* renamed from: t  reason: collision with root package name */
    com.google.android.gms.common.d[] f25064t;

    /* renamed from: u  reason: collision with root package name */
    com.google.android.gms.common.d[] f25065u;

    /* renamed from: v  reason: collision with root package name */
    final boolean f25066v;

    /* renamed from: w  reason: collision with root package name */
    final int f25067w;

    /* renamed from: x  reason: collision with root package name */
    boolean f25068x;

    /* renamed from: y  reason: collision with root package name */
    private final String f25069y;
    @NonNull
    public static final Parcelable.Creator<f> CREATOR = new g1();

    /* renamed from: z  reason: collision with root package name */
    static final Scope[] f25055z = new Scope[0];
    static final com.google.android.gms.common.d[] A = new com.google.android.gms.common.d[0];

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(int i10, int i11, int i12, String str, IBinder iBinder, Scope[] scopeArr, Bundle bundle, Account account, com.google.android.gms.common.d[] dVarArr, com.google.android.gms.common.d[] dVarArr2, boolean z10, int i13, boolean z11, String str2) {
        Account account2;
        scopeArr = scopeArr == null ? f25055z : scopeArr;
        bundle = bundle == null ? new Bundle() : bundle;
        dVarArr = dVarArr == null ? A : dVarArr;
        dVarArr2 = dVarArr2 == null ? A : dVarArr2;
        this.f25056d = i10;
        this.f25057e = i11;
        this.f25058i = i12;
        if ("com.google.android.gms".equals(str)) {
            this.f25059o = "com.google.android.gms";
        } else {
            this.f25059o = str;
        }
        if (i10 < 2) {
            if (iBinder != null) {
                account2 = a.h(j.a.f(iBinder));
            } else {
                account2 = null;
            }
            this.f25063s = account2;
        } else {
            this.f25060p = iBinder;
            this.f25063s = account;
        }
        this.f25061q = scopeArr;
        this.f25062r = bundle;
        this.f25064t = dVarArr;
        this.f25065u = dVarArr2;
        this.f25066v = z10;
        this.f25067w = i13;
        this.f25068x = z11;
        this.f25069y = str2;
    }

    public String b() {
        return this.f25069y;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        g1.a(this, parcel, i10);
    }
}
