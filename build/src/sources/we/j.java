package we;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class j extends jf.a {
    @NonNull
    public static final Parcelable.Creator<j> CREATOR = new w();

    /* renamed from: d  reason: collision with root package name */
    private final String f53312d;

    /* renamed from: e  reason: collision with root package name */
    private final String f53313e;

    public j(String str, String str2) {
        this.f53312d = hf.q.g(((String) hf.q.m(str, "Account identifier cannot be null")).trim(), "Account identifier cannot be empty");
        this.f53313e = hf.q.f(str2);
    }

    public String b() {
        return this.f53312d;
    }

    public String c() {
        return this.f53313e;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof j)) {
            return false;
        }
        j jVar = (j) obj;
        if (!hf.o.a(this.f53312d, jVar.f53312d) || !hf.o.a(this.f53313e, jVar.f53313e)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return hf.o.b(this.f53312d, this.f53313e);
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, b(), false);
        jf.c.s(parcel, 2, c(), false);
        jf.c.b(parcel, a10);
    }
}
