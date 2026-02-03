package wf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class u extends hf.a {
    @NonNull
    public static final Parcelable.Creator<u> CREATOR = new w0();

    /* renamed from: d  reason: collision with root package name */
    private final String f52360d;

    /* renamed from: e  reason: collision with root package name */
    private final String f52361e;

    /* renamed from: i  reason: collision with root package name */
    private final String f52362i;

    public u(String str, String str2, String str3) {
        this.f52360d = (String) gf.q.l(str);
        this.f52361e = (String) gf.q.l(str2);
        this.f52362i = str3;
    }

    public String b() {
        return this.f52362i;
    }

    public String c() {
        return this.f52360d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof u)) {
            return false;
        }
        u uVar = (u) obj;
        if (!gf.o.a(this.f52360d, uVar.f52360d) || !gf.o.a(this.f52361e, uVar.f52361e) || !gf.o.a(this.f52362i, uVar.f52362i)) {
            return false;
        }
        return true;
    }

    public String getName() {
        return this.f52361e;
    }

    public int hashCode() {
        return gf.o.b(this.f52360d, this.f52361e, this.f52362i);
    }

    public final String toString() {
        return "PublicKeyCredentialRpEntity{\n id='" + this.f52360d + "', \n name='" + this.f52361e + "', \n icon='" + this.f52362i + "'}";
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
