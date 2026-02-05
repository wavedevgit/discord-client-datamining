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
    private final String f52265d;

    /* renamed from: e  reason: collision with root package name */
    private final String f52266e;

    /* renamed from: i  reason: collision with root package name */
    private final String f52267i;

    /* renamed from: o  reason: collision with root package name */
    private final String f52268o;

    /* renamed from: p  reason: collision with root package name */
    private final Uri f52269p;

    /* renamed from: q  reason: collision with root package name */
    private final String f52270q;

    /* renamed from: r  reason: collision with root package name */
    private final String f52271r;

    /* renamed from: s  reason: collision with root package name */
    private final String f52272s;

    /* renamed from: t  reason: collision with root package name */
    private final wf.q f52273t;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(String str, String str2, String str3, String str4, Uri uri, String str5, String str6, String str7, wf.q qVar) {
        this.f52265d = (String) gf.q.l(str);
        this.f52266e = str2;
        this.f52267i = str3;
        this.f52268o = str4;
        this.f52269p = uri;
        this.f52270q = str5;
        this.f52271r = str6;
        this.f52272s = str7;
        this.f52273t = qVar;
    }

    public String b() {
        return this.f52266e;
    }

    public String c() {
        return this.f52268o;
    }

    public String d() {
        return this.f52267i;
    }

    public String e() {
        return this.f52271r;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof i)) {
            return false;
        }
        i iVar = (i) obj;
        if (!gf.o.a(this.f52265d, iVar.f52265d) || !gf.o.a(this.f52266e, iVar.f52266e) || !gf.o.a(this.f52267i, iVar.f52267i) || !gf.o.a(this.f52268o, iVar.f52268o) || !gf.o.a(this.f52269p, iVar.f52269p) || !gf.o.a(this.f52270q, iVar.f52270q) || !gf.o.a(this.f52271r, iVar.f52271r) || !gf.o.a(this.f52272s, iVar.f52272s) || !gf.o.a(this.f52273t, iVar.f52273t)) {
            return false;
        }
        return true;
    }

    public String f() {
        return this.f52265d;
    }

    public String g() {
        return this.f52270q;
    }

    public int hashCode() {
        return gf.o.b(this.f52265d, this.f52266e, this.f52267i, this.f52268o, this.f52269p, this.f52270q, this.f52271r, this.f52272s, this.f52273t);
    }

    public String i() {
        return this.f52272s;
    }

    public Uri j() {
        return this.f52269p;
    }

    public wf.q l() {
        return this.f52273t;
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
        hf.c.q(parcel, 9, l(), i10, false);
        hf.c.b(parcel, a10);
    }
}
