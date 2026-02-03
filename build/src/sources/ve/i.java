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
    private final String f51579d;

    /* renamed from: e  reason: collision with root package name */
    private final String f51580e;

    /* renamed from: i  reason: collision with root package name */
    private final String f51581i;

    /* renamed from: o  reason: collision with root package name */
    private final String f51582o;

    /* renamed from: p  reason: collision with root package name */
    private final Uri f51583p;

    /* renamed from: q  reason: collision with root package name */
    private final String f51584q;

    /* renamed from: r  reason: collision with root package name */
    private final String f51585r;

    /* renamed from: s  reason: collision with root package name */
    private final String f51586s;

    /* renamed from: t  reason: collision with root package name */
    private final wf.q f51587t;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(String str, String str2, String str3, String str4, Uri uri, String str5, String str6, String str7, wf.q qVar) {
        this.f51579d = (String) gf.q.l(str);
        this.f51580e = str2;
        this.f51581i = str3;
        this.f51582o = str4;
        this.f51583p = uri;
        this.f51584q = str5;
        this.f51585r = str6;
        this.f51586s = str7;
        this.f51587t = qVar;
    }

    public String b() {
        return this.f51580e;
    }

    public String c() {
        return this.f51582o;
    }

    public String d() {
        return this.f51581i;
    }

    public String e() {
        return this.f51585r;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof i)) {
            return false;
        }
        i iVar = (i) obj;
        if (!gf.o.a(this.f51579d, iVar.f51579d) || !gf.o.a(this.f51580e, iVar.f51580e) || !gf.o.a(this.f51581i, iVar.f51581i) || !gf.o.a(this.f51582o, iVar.f51582o) || !gf.o.a(this.f51583p, iVar.f51583p) || !gf.o.a(this.f51584q, iVar.f51584q) || !gf.o.a(this.f51585r, iVar.f51585r) || !gf.o.a(this.f51586s, iVar.f51586s) || !gf.o.a(this.f51587t, iVar.f51587t)) {
            return false;
        }
        return true;
    }

    public String f() {
        return this.f51579d;
    }

    public String g() {
        return this.f51584q;
    }

    public int hashCode() {
        return gf.o.b(this.f51579d, this.f51580e, this.f51581i, this.f51582o, this.f51583p, this.f51584q, this.f51585r, this.f51586s, this.f51587t);
    }

    public String i() {
        return this.f51586s;
    }

    public Uri j() {
        return this.f51583p;
    }

    public wf.q k() {
        return this.f51587t;
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
