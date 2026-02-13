package xf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class u extends jf.a {
    @NonNull
    public static final Parcelable.Creator<u> CREATOR = new w0();

    /* renamed from: d  reason: collision with root package name */
    private final String f55305d;

    /* renamed from: e  reason: collision with root package name */
    private final String f55306e;

    /* renamed from: i  reason: collision with root package name */
    private final String f55307i;

    public u(String str, String str2, String str3) {
        this.f55305d = (String) hf.q.l(str);
        this.f55306e = (String) hf.q.l(str2);
        this.f55307i = str3;
    }

    public String b() {
        return this.f55307i;
    }

    public String c() {
        return this.f55305d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof u)) {
            return false;
        }
        u uVar = (u) obj;
        if (!hf.o.a(this.f55305d, uVar.f55305d) || !hf.o.a(this.f55306e, uVar.f55306e) || !hf.o.a(this.f55307i, uVar.f55307i)) {
            return false;
        }
        return true;
    }

    public String getName() {
        return this.f55306e;
    }

    public int hashCode() {
        return hf.o.b(this.f55305d, this.f55306e, this.f55307i);
    }

    public final String toString() {
        return "PublicKeyCredentialRpEntity{\n id='" + this.f55305d + "', \n name='" + this.f55306e + "', \n icon='" + this.f55307i + "'}";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 2, c(), false);
        jf.c.s(parcel, 3, getName(), false);
        jf.c.s(parcel, 4, b(), false);
        jf.c.b(parcel, a10);
    }
}
