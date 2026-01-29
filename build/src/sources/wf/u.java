package wf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class u extends hf.a {
    @NonNull
    public static final Parcelable.Creator<u> CREATOR = new w0();

    /* renamed from: d  reason: collision with root package name */
    private final String f52555d;

    /* renamed from: e  reason: collision with root package name */
    private final String f52556e;

    /* renamed from: i  reason: collision with root package name */
    private final String f52557i;

    public u(String str, String str2, String str3) {
        this.f52555d = (String) gf.q.l(str);
        this.f52556e = (String) gf.q.l(str2);
        this.f52557i = str3;
    }

    public String b() {
        return this.f52557i;
    }

    public String c() {
        return this.f52555d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof u)) {
            return false;
        }
        u uVar = (u) obj;
        if (!gf.o.a(this.f52555d, uVar.f52555d) || !gf.o.a(this.f52556e, uVar.f52556e) || !gf.o.a(this.f52557i, uVar.f52557i)) {
            return false;
        }
        return true;
    }

    public String getName() {
        return this.f52556e;
    }

    public int hashCode() {
        return gf.o.b(this.f52555d, this.f52556e, this.f52557i);
    }

    public final String toString() {
        return "PublicKeyCredentialRpEntity{\n id='" + this.f52555d + "', \n name='" + this.f52556e + "', \n icon='" + this.f52557i + "'}";
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
