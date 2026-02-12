package we;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class j extends jf.a {
    @NonNull
    public static final Parcelable.Creator<j> CREATOR = new w();

    /* renamed from: d  reason: collision with root package name */
    private final String f52744d;

    /* renamed from: e  reason: collision with root package name */
    private final String f52745e;

    public j(String str, String str2) {
        this.f52744d = hf.q.g(((String) hf.q.m(str, "Account identifier cannot be null")).trim(), "Account identifier cannot be empty");
        this.f52745e = hf.q.f(str2);
    }

    public String b() {
        return this.f52744d;
    }

    public String c() {
        return this.f52745e;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof j)) {
            return false;
        }
        j jVar = (j) obj;
        if (!hf.o.a(this.f52744d, jVar.f52744d) || !hf.o.a(this.f52745e, jVar.f52745e)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return hf.o.b(this.f52744d, this.f52745e);
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, b(), false);
        jf.c.s(parcel, 2, c(), false);
        jf.c.b(parcel, a10);
    }
}
