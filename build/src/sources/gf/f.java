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
    final int f26892d;

    /* renamed from: e  reason: collision with root package name */
    final int f26893e;

    /* renamed from: i  reason: collision with root package name */
    final int f26894i;

    /* renamed from: o  reason: collision with root package name */
    String f26895o;

    /* renamed from: p  reason: collision with root package name */
    IBinder f26896p;

    /* renamed from: q  reason: collision with root package name */
    Scope[] f26897q;

    /* renamed from: r  reason: collision with root package name */
    Bundle f26898r;

    /* renamed from: s  reason: collision with root package name */
    Account f26899s;

    /* renamed from: t  reason: collision with root package name */
    com.google.android.gms.common.d[] f26900t;

    /* renamed from: u  reason: collision with root package name */
    com.google.android.gms.common.d[] f26901u;

    /* renamed from: v  reason: collision with root package name */
    final boolean f26902v;

    /* renamed from: w  reason: collision with root package name */
    final int f26903w;

    /* renamed from: x  reason: collision with root package name */
    boolean f26904x;

    /* renamed from: y  reason: collision with root package name */
    private final String f26905y;
    @NonNull
    public static final Parcelable.Creator<f> CREATOR = new i1();

    /* renamed from: z  reason: collision with root package name */
    static final Scope[] f26891z = new Scope[0];
    static final com.google.android.gms.common.d[] A = new com.google.android.gms.common.d[0];

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(int i10, int i11, int i12, String str, IBinder iBinder, Scope[] scopeArr, Bundle bundle, Account account, com.google.android.gms.common.d[] dVarArr, com.google.android.gms.common.d[] dVarArr2, boolean z10, int i13, boolean z11, String str2) {
        Account account2;
        scopeArr = scopeArr == null ? f26891z : scopeArr;
        bundle = bundle == null ? new Bundle() : bundle;
        dVarArr = dVarArr == null ? A : dVarArr;
        dVarArr2 = dVarArr2 == null ? A : dVarArr2;
        this.f26892d = i10;
        this.f26893e = i11;
        this.f26894i = i12;
        if ("com.google.android.gms".equals(str)) {
            this.f26895o = "com.google.android.gms";
        } else {
            this.f26895o = str;
        }
        if (i10 < 2) {
            if (iBinder != null) {
                account2 = a.h(j.a.f(iBinder));
            } else {
                account2 = null;
            }
            this.f26899s = account2;
        } else {
            this.f26896p = iBinder;
            this.f26899s = account;
        }
        this.f26897q = scopeArr;
        this.f26898r = bundle;
        this.f26900t = dVarArr;
        this.f26901u = dVarArr2;
        this.f26902v = z10;
        this.f26903w = i13;
        this.f26904x = z11;
        this.f26905y = str2;
    }

    public String b() {
        return this.f26905y;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        i1.a(this, parcel, i10);
    }
}
