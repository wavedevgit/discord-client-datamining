package wf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class u extends hf.a {
    @NonNull
    public static final Parcelable.Creator<u> CREATOR = new w0();

    /* renamed from: d  reason: collision with root package name */
    private final String f53793d;

    /* renamed from: e  reason: collision with root package name */
    private final String f53794e;

    /* renamed from: i  reason: collision with root package name */
    private final String f53795i;

    public u(String str, String str2, String str3) {
        this.f53793d = (String) gf.q.l(str);
        this.f53794e = (String) gf.q.l(str2);
        this.f53795i = str3;
    }

    public String b() {
        return this.f53795i;
    }

    public String c() {
        return this.f53793d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof u)) {
            return false;
        }
        u uVar = (u) obj;
        if (!gf.o.a(this.f53793d, uVar.f53793d) || !gf.o.a(this.f53794e, uVar.f53794e) || !gf.o.a(this.f53795i, uVar.f53795i)) {
            return false;
        }
        return true;
    }

    public String getName() {
        return this.f53794e;
    }

    public int hashCode() {
        return gf.o.b(this.f53793d, this.f53794e, this.f53795i);
    }

    public final String toString() {
        return "PublicKeyCredentialRpEntity{\n id='" + this.f53793d + "', \n name='" + this.f53794e + "', \n icon='" + this.f53795i + "'}";
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
