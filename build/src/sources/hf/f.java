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
    final int f26015d;

    /* renamed from: e  reason: collision with root package name */
    final int f26016e;

    /* renamed from: i  reason: collision with root package name */
    final int f26017i;

    /* renamed from: o  reason: collision with root package name */
    String f26018o;

    /* renamed from: p  reason: collision with root package name */
    IBinder f26019p;

    /* renamed from: q  reason: collision with root package name */
    Scope[] f26020q;

    /* renamed from: r  reason: collision with root package name */
    Bundle f26021r;

    /* renamed from: s  reason: collision with root package name */
    Account f26022s;

    /* renamed from: t  reason: collision with root package name */
    com.google.android.gms.common.d[] f26023t;

    /* renamed from: u  reason: collision with root package name */
    com.google.android.gms.common.d[] f26024u;

    /* renamed from: v  reason: collision with root package name */
    final boolean f26025v;

    /* renamed from: w  reason: collision with root package name */
    final int f26026w;

    /* renamed from: x  reason: collision with root package name */
    boolean f26027x;

    /* renamed from: y  reason: collision with root package name */
    private final String f26028y;
    @NonNull
    public static final Parcelable.Creator<f> CREATOR = new g1();

    /* renamed from: z  reason: collision with root package name */
    static final Scope[] f26014z = new Scope[0];
    static final com.google.android.gms.common.d[] A = new com.google.android.gms.common.d[0];

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(int i10, int i11, int i12, String str, IBinder iBinder, Scope[] scopeArr, Bundle bundle, Account account, com.google.android.gms.common.d[] dVarArr, com.google.android.gms.common.d[] dVarArr2, boolean z10, int i13, boolean z11, String str2) {
        Account account2;
        scopeArr = scopeArr == null ? f26014z : scopeArr;
        bundle = bundle == null ? new Bundle() : bundle;
        dVarArr = dVarArr == null ? A : dVarArr;
        dVarArr2 = dVarArr2 == null ? A : dVarArr2;
        this.f26015d = i10;
        this.f26016e = i11;
        this.f26017i = i12;
        if ("com.google.android.gms".equals(str)) {
            this.f26018o = "com.google.android.gms";
        } else {
            this.f26018o = str;
        }
        if (i10 < 2) {
            if (iBinder != null) {
                account2 = a.h(j.a.f(iBinder));
            } else {
                account2 = null;
            }
            this.f26022s = account2;
        } else {
            this.f26019p = iBinder;
            this.f26022s = account;
        }
        this.f26020q = scopeArr;
        this.f26021r = bundle;
        this.f26023t = dVarArr;
        this.f26024u = dVarArr2;
        this.f26025v = z10;
        this.f26026w = i13;
        this.f26027x = z11;
        this.f26028y = str2;
    }

    public String b() {
        return this.f26028y;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        g1.a(this, parcel, i10);
    }
}
