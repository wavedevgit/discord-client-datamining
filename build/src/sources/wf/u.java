package wf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class u extends hf.a {
    @NonNull
    public static final Parcelable.Creator<u> CREATOR = new w0();

    /* renamed from: d  reason: collision with root package name */
    private final String f53014d;

    /* renamed from: e  reason: collision with root package name */
    private final String f53015e;

    /* renamed from: i  reason: collision with root package name */
    private final String f53016i;

    public u(String str, String str2, String str3) {
        this.f53014d = (String) gf.q.l(str);
        this.f53015e = (String) gf.q.l(str2);
        this.f53016i = str3;
    }

    public String b() {
        return this.f53016i;
    }

    public String c() {
        return this.f53014d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof u)) {
            return false;
        }
        u uVar = (u) obj;
        if (!gf.o.a(this.f53014d, uVar.f53014d) || !gf.o.a(this.f53015e, uVar.f53015e) || !gf.o.a(this.f53016i, uVar.f53016i)) {
            return false;
        }
        return true;
    }

    public String getName() {
        return this.f53015e;
    }

    public int hashCode() {
        return gf.o.b(this.f53014d, this.f53015e, this.f53016i);
    }

    public final String toString() {
        return "PublicKeyCredentialRpEntity{\n id='" + this.f53014d + "', \n name='" + this.f53015e + "', \n icon='" + this.f53016i + "'}";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 2, c(), false);
        hf.c.s(parcel, 3, getName(), false);
        hf.c.s(parcel, 4, b(), false);
        hf.c.b(parcel, a10);
    }
}
