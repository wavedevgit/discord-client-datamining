package wf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class u extends hf.a {
    @NonNull
    public static final Parcelable.Creator<u> CREATOR = new w0();

    /* renamed from: d  reason: collision with root package name */
    private final String f53841d;

    /* renamed from: e  reason: collision with root package name */
    private final String f53842e;

    /* renamed from: i  reason: collision with root package name */
    private final String f53843i;

    public u(String str, String str2, String str3) {
        this.f53841d = (String) gf.q.l(str);
        this.f53842e = (String) gf.q.l(str2);
        this.f53843i = str3;
    }

    public String b() {
        return this.f53843i;
    }

    public String c() {
        return this.f53841d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof u)) {
            return false;
        }
        u uVar = (u) obj;
        if (!gf.o.a(this.f53841d, uVar.f53841d) || !gf.o.a(this.f53842e, uVar.f53842e) || !gf.o.a(this.f53843i, uVar.f53843i)) {
            return false;
        }
        return true;
    }

    public String getName() {
        return this.f53842e;
    }

    public int hashCode() {
        return gf.o.b(this.f53841d, this.f53842e, this.f53843i);
    }

    public final String toString() {
        return "PublicKeyCredentialRpEntity{\n id='" + this.f53841d + "', \n name='" + this.f53842e + "', \n icon='" + this.f53843i + "'}";
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
