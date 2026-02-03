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
    private final String f51251d;

    /* renamed from: e  reason: collision with root package name */
    private final String f51252e;

    /* renamed from: i  reason: collision with root package name */
    private final String f51253i;

    /* renamed from: o  reason: collision with root package name */
    private final String f51254o;

    /* renamed from: p  reason: collision with root package name */
    private final Uri f51255p;

    /* renamed from: q  reason: collision with root package name */
    private final String f51256q;

    /* renamed from: r  reason: collision with root package name */
    private final String f51257r;

    /* renamed from: s  reason: collision with root package name */
    private final String f51258s;

    /* renamed from: t  reason: collision with root package name */
    private final wf.q f51259t;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(String str, String str2, String str3, String str4, Uri uri, String str5, String str6, String str7, wf.q qVar) {
        this.f51251d = (String) gf.q.l(str);
        this.f51252e = str2;
        this.f51253i = str3;
        this.f51254o = str4;
        this.f51255p = uri;
        this.f51256q = str5;
        this.f51257r = str6;
        this.f51258s = str7;
        this.f51259t = qVar;
    }

    public String b() {
        return this.f51252e;
    }

    public String c() {
        return this.f51254o;
    }

    public String d() {
        return this.f51253i;
    }

    public String e() {
        return this.f51257r;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof i)) {
            return false;
        }
        i iVar = (i) obj;
        if (!gf.o.a(this.f51251d, iVar.f51251d) || !gf.o.a(this.f51252e, iVar.f51252e) || !gf.o.a(this.f51253i, iVar.f51253i) || !gf.o.a(this.f51254o, iVar.f51254o) || !gf.o.a(this.f51255p, iVar.f51255p) || !gf.o.a(this.f51256q, iVar.f51256q) || !gf.o.a(this.f51257r, iVar.f51257r) || !gf.o.a(this.f51258s, iVar.f51258s) || !gf.o.a(this.f51259t, iVar.f51259t)) {
            return false;
        }
        return true;
    }

    public String f() {
        return this.f51251d;
    }

    public String g() {
        return this.f51256q;
    }

    public int hashCode() {
        return gf.o.b(this.f51251d, this.f51252e, this.f51253i, this.f51254o, this.f51255p, this.f51256q, this.f51257r, this.f51258s, this.f51259t);
    }

    public String i() {
        return this.f51258s;
    }

    public Uri j() {
        return this.f51255p;
    }

    public wf.q k() {
        return this.f51259t;
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
