package xf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class u extends jf.a {
    @NonNull
    public static final Parcelable.Creator<u> CREATOR = new w0();

    /* renamed from: d  reason: collision with root package name */
    private final String f54737d;

    /* renamed from: e  reason: collision with root package name */
    private final String f54738e;

    /* renamed from: i  reason: collision with root package name */
    private final String f54739i;

    public u(String str, String str2, String str3) {
        this.f54737d = (String) hf.q.l(str);
        this.f54738e = (String) hf.q.l(str2);
        this.f54739i = str3;
    }

    public String b() {
        return this.f54739i;
    }

    public String c() {
        return this.f54737d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof u)) {
            return false;
        }
        u uVar = (u) obj;
        if (!hf.o.a(this.f54737d, uVar.f54737d) || !hf.o.a(this.f54738e, uVar.f54738e) || !hf.o.a(this.f54739i, uVar.f54739i)) {
            return false;
        }
        return true;
    }

    public String getName() {
        return this.f54738e;
    }

    public int hashCode() {
        return hf.o.b(this.f54737d, this.f54738e, this.f54739i);
    }

    public final String toString() {
        return "PublicKeyCredentialRpEntity{\n id='" + this.f54737d + "', \n name='" + this.f54738e + "', \n icon='" + this.f54739i + "'}";
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
