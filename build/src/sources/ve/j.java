package ve;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class j extends hf.a {
    @NonNull
    public static final Parcelable.Creator<j> CREATOR = new w();

    /* renamed from: d  reason: collision with root package name */
    private final String f52639d;

    /* renamed from: e  reason: collision with root package name */
    private final String f52640e;

    public j(String str, String str2) {
        this.f52639d = gf.q.g(((String) gf.q.m(str, "Account identifier cannot be null")).trim(), "Account identifier cannot be empty");
        this.f52640e = gf.q.f(str2);
    }

    public String b() {
        return this.f52639d;
    }

    public String c() {
        return this.f52640e;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof j)) {
            return false;
        }
        j jVar = (j) obj;
        if (!gf.o.a(this.f52639d, jVar.f52639d) || !gf.o.a(this.f52640e, jVar.f52640e)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return gf.o.b(this.f52639d, this.f52640e);
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, b(), false);
        hf.c.s(parcel, 2, c(), false);
        hf.c.b(parcel, a10);
    }
}
