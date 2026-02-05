package ve;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class j extends hf.a {
    @NonNull
    public static final Parcelable.Creator<j> CREATOR = new w();

    /* renamed from: d  reason: collision with root package name */
    private final String f52274d;

    /* renamed from: e  reason: collision with root package name */
    private final String f52275e;

    public j(String str, String str2) {
        this.f52274d = gf.q.g(((String) gf.q.m(str, "Account identifier cannot be null")).trim(), "Account identifier cannot be empty");
        this.f52275e = gf.q.f(str2);
    }

    public String b() {
        return this.f52274d;
    }

    public String c() {
        return this.f52275e;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof j)) {
            return false;
        }
        j jVar = (j) obj;
        if (!gf.o.a(this.f52274d, jVar.f52274d) || !gf.o.a(this.f52275e, jVar.f52275e)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return gf.o.b(this.f52274d, this.f52275e);
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, b(), false);
        hf.c.s(parcel, 2, c(), false);
        hf.c.b(parcel, a10);
    }
}
