package ve;

import android.net.Uri;
import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i extends hf.a {
    @NonNull
    public static final Parcelable.Creator<i> CREATOR = new u();

    /* renamed from: d  reason: collision with root package name */
    private final String f51127d;

    /* renamed from: e  reason: collision with root package name */
    private final String f51128e;

    /* renamed from: i  reason: collision with root package name */
    private final String f51129i;

    /* renamed from: o  reason: collision with root package name */
    private final String f51130o;

    /* renamed from: p  reason: collision with root package name */
    private final Uri f51131p;

    /* renamed from: q  reason: collision with root package name */
    private final String f51132q;

    /* renamed from: r  reason: collision with root package name */
    private final String f51133r;

    /* renamed from: s  reason: collision with root package name */
    private final String f51134s;

    /* renamed from: t  reason: collision with root package name */
    private final wf.q f51135t;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(String str, String str2, String str3, String str4, Uri uri, String str5, String str6, String str7, wf.q qVar) {
        this.f51127d = (String) gf.q.l(str);
        this.f51128e = str2;
        this.f51129i = str3;
        this.f51130o = str4;
        this.f51131p = uri;
        this.f51132q = str5;
        this.f51133r = str6;
        this.f51134s = str7;
        this.f51135t = qVar;
    }

    public String b() {
        return this.f51128e;
    }

    public String c() {
        return this.f51130o;
    }

    public String d() {
        return this.f51129i;
    }

    public String e() {
        return this.f51133r;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof i)) {
            return false;
        }
        i iVar = (i) obj;
        if (!gf.o.a(this.f51127d, iVar.f51127d) || !gf.o.a(this.f51128e, iVar.f51128e) || !gf.o.a(this.f51129i, iVar.f51129i) || !gf.o.a(this.f51130o, iVar.f51130o) || !gf.o.a(this.f51131p, iVar.f51131p) || !gf.o.a(this.f51132q, iVar.f51132q) || !gf.o.a(this.f51133r, iVar.f51133r) || !gf.o.a(this.f51134s, iVar.f51134s) || !gf.o.a(this.f51135t, iVar.f51135t)) {
            return false;
        }
        return true;
    }

    public String f() {
        return this.f51127d;
    }

    public String g() {
        return this.f51132q;
    }

    public int hashCode() {
        return gf.o.b(this.f51127d, this.f51128e, this.f51129i, this.f51130o, this.f51131p, this.f51132q, this.f51133r, this.f51134s, this.f51135t);
    }

    public String i() {
        return this.f51134s;
    }

    public Uri j() {
        return this.f51131p;
    }

    public wf.q k() {
        return this.f51135t;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, f(), false);
        hf.c.s(parcel, 2, b(), false);
        hf.c.s(parcel, 3, d(), false);
        hf.c.s(parcel, 4, c(), false);
        hf.c.q(parcel, 5, j(), i10, false);
        hf.c.s(parcel, 6, g(), false);
        hf.c.s(parcel, 7, e(), false);
        hf.c.s(parcel, 8, i(), false);
        hf.c.q(parcel, 9, k(), i10, false);
        hf.c.b(parcel, a10);
    }
}
