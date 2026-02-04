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
    private final String f51576d;

    /* renamed from: e  reason: collision with root package name */
    private final String f51577e;

    /* renamed from: i  reason: collision with root package name */
    private final String f51578i;

    /* renamed from: o  reason: collision with root package name */
    private final String f51579o;

    /* renamed from: p  reason: collision with root package name */
    private final Uri f51580p;

    /* renamed from: q  reason: collision with root package name */
    private final String f51581q;

    /* renamed from: r  reason: collision with root package name */
    private final String f51582r;

    /* renamed from: s  reason: collision with root package name */
    private final String f51583s;

    /* renamed from: t  reason: collision with root package name */
    private final wf.q f51584t;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(String str, String str2, String str3, String str4, Uri uri, String str5, String str6, String str7, wf.q qVar) {
        this.f51576d = (String) gf.q.l(str);
        this.f51577e = str2;
        this.f51578i = str3;
        this.f51579o = str4;
        this.f51580p = uri;
        this.f51581q = str5;
        this.f51582r = str6;
        this.f51583s = str7;
        this.f51584t = qVar;
    }

    public String b() {
        return this.f51577e;
    }

    public String c() {
        return this.f51579o;
    }

    public String d() {
        return this.f51578i;
    }

    public String e() {
        return this.f51582r;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof i)) {
            return false;
        }
        i iVar = (i) obj;
        if (!gf.o.a(this.f51576d, iVar.f51576d) || !gf.o.a(this.f51577e, iVar.f51577e) || !gf.o.a(this.f51578i, iVar.f51578i) || !gf.o.a(this.f51579o, iVar.f51579o) || !gf.o.a(this.f51580p, iVar.f51580p) || !gf.o.a(this.f51581q, iVar.f51581q) || !gf.o.a(this.f51582r, iVar.f51582r) || !gf.o.a(this.f51583s, iVar.f51583s) || !gf.o.a(this.f51584t, iVar.f51584t)) {
            return false;
        }
        return true;
    }

    public String f() {
        return this.f51576d;
    }

    public String g() {
        return this.f51581q;
    }

    public int hashCode() {
        return gf.o.b(this.f51576d, this.f51577e, this.f51578i, this.f51579o, this.f51580p, this.f51581q, this.f51582r, this.f51583s, this.f51584t);
    }

    public String i() {
        return this.f51583s;
    }

    public Uri j() {
        return this.f51580p;
    }

    public wf.q k() {
        return this.f51584t;
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
