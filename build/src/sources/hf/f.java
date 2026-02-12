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
    final int f27234d;

    /* renamed from: e  reason: collision with root package name */
    final int f27235e;

    /* renamed from: i  reason: collision with root package name */
    final int f27236i;

    /* renamed from: o  reason: collision with root package name */
    String f27237o;

    /* renamed from: p  reason: collision with root package name */
    IBinder f27238p;

    /* renamed from: q  reason: collision with root package name */
    Scope[] f27239q;

    /* renamed from: r  reason: collision with root package name */
    Bundle f27240r;

    /* renamed from: s  reason: collision with root package name */
    Account f27241s;

    /* renamed from: t  reason: collision with root package name */
    com.google.android.gms.common.d[] f27242t;

    /* renamed from: u  reason: collision with root package name */
    com.google.android.gms.common.d[] f27243u;

    /* renamed from: v  reason: collision with root package name */
    final boolean f27244v;

    /* renamed from: w  reason: collision with root package name */
    final int f27245w;

    /* renamed from: x  reason: collision with root package name */
    boolean f27246x;

    /* renamed from: y  reason: collision with root package name */
    private final String f27247y;
    @NonNull
    public static final Parcelable.Creator<f> CREATOR = new g1();

    /* renamed from: z  reason: collision with root package name */
    static final Scope[] f27233z = new Scope[0];
    static final com.google.android.gms.common.d[] A = new com.google.android.gms.common.d[0];

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(int i10, int i11, int i12, String str, IBinder iBinder, Scope[] scopeArr, Bundle bundle, Account account, com.google.android.gms.common.d[] dVarArr, com.google.android.gms.common.d[] dVarArr2, boolean z10, int i13, boolean z11, String str2) {
        Account account2;
        scopeArr = scopeArr == null ? f27233z : scopeArr;
        bundle = bundle == null ? new Bundle() : bundle;
        dVarArr = dVarArr == null ? A : dVarArr;
        dVarArr2 = dVarArr2 == null ? A : dVarArr2;
        this.f27234d = i10;
        this.f27235e = i11;
        this.f27236i = i12;
        if ("com.google.android.gms".equals(str)) {
            this.f27237o = "com.google.android.gms";
        } else {
            this.f27237o = str;
        }
        if (i10 < 2) {
            if (iBinder != null) {
                account2 = a.i(j.a.f(iBinder));
            } else {
                account2 = null;
            }
            this.f27241s = account2;
        } else {
            this.f27238p = iBinder;
            this.f27241s = account;
        }
        this.f27239q = scopeArr;
        this.f27240r = bundle;
        this.f27242t = dVarArr;
        this.f27243u = dVarArr2;
        this.f27244v = z10;
        this.f27245w = i13;
        this.f27246x = z11;
        this.f27247y = str2;
    }

    public String b() {
        return this.f27247y;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        g1.a(this, parcel, i10);
    }
}
