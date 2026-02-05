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
    final int f24803d;

    /* renamed from: e  reason: collision with root package name */
    final int f24804e;

    /* renamed from: i  reason: collision with root package name */
    final int f24805i;

    /* renamed from: o  reason: collision with root package name */
    String f24806o;

    /* renamed from: p  reason: collision with root package name */
    IBinder f24807p;

    /* renamed from: q  reason: collision with root package name */
    Scope[] f24808q;

    /* renamed from: r  reason: collision with root package name */
    Bundle f24809r;

    /* renamed from: s  reason: collision with root package name */
    Account f24810s;

    /* renamed from: t  reason: collision with root package name */
    com.google.android.gms.common.d[] f24811t;

    /* renamed from: u  reason: collision with root package name */
    com.google.android.gms.common.d[] f24812u;

    /* renamed from: v  reason: collision with root package name */
    final boolean f24813v;

    /* renamed from: w  reason: collision with root package name */
    final int f24814w;

    /* renamed from: x  reason: collision with root package name */
    boolean f24815x;

    /* renamed from: y  reason: collision with root package name */
    private final String f24816y;
    @NonNull
    public static final Parcelable.Creator<f> CREATOR = new g1();

    /* renamed from: z  reason: collision with root package name */
    static final Scope[] f24802z = new Scope[0];
    static final com.google.android.gms.common.d[] A = new com.google.android.gms.common.d[0];

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(int i10, int i11, int i12, String str, IBinder iBinder, Scope[] scopeArr, Bundle bundle, Account account, com.google.android.gms.common.d[] dVarArr, com.google.android.gms.common.d[] dVarArr2, boolean z10, int i13, boolean z11, String str2) {
        Account account2;
        scopeArr = scopeArr == null ? f24802z : scopeArr;
        bundle = bundle == null ? new Bundle() : bundle;
        dVarArr = dVarArr == null ? A : dVarArr;
        dVarArr2 = dVarArr2 == null ? A : dVarArr2;
        this.f24803d = i10;
        this.f24804e = i11;
        this.f24805i = i12;
        if ("com.google.android.gms".equals(str)) {
            this.f24806o = "com.google.android.gms";
        } else {
            this.f24806o = str;
        }
        if (i10 < 2) {
            if (iBinder != null) {
                account2 = a.h(j.a.f(iBinder));
            } else {
                account2 = null;
            }
            this.f24810s = account2;
        } else {
            this.f24807p = iBinder;
            this.f24810s = account;
        }
        this.f24808q = scopeArr;
        this.f24809r = bundle;
        this.f24811t = dVarArr;
        this.f24812u = dVarArr2;
        this.f24813v = z10;
        this.f24814w = i13;
        this.f24815x = z11;
        this.f24816y = str2;
    }

    public String b() {
        return this.f24816y;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        g1.a(this, parcel, i10);
    }
}
