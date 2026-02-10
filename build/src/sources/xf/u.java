package xf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class u extends jf.a {
    @NonNull
    public static final Parcelable.Creator<u> CREATOR = new w0();

    /* renamed from: d  reason: collision with root package name */
    private final String f54736d;

    /* renamed from: e  reason: collision with root package name */
    private final String f54737e;

    /* renamed from: i  reason: collision with root package name */
    private final String f54738i;

    public u(String str, String str2, String str3) {
        this.f54736d = (String) hf.q.l(str);
        this.f54737e = (String) hf.q.l(str2);
        this.f54738i = str3;
    }

    public String b() {
        return this.f54738i;
    }

    public String c() {
        return this.f54736d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof u)) {
            return false;
        }
        u uVar = (u) obj;
        if (!hf.o.a(this.f54736d, uVar.f54736d) || !hf.o.a(this.f54737e, uVar.f54737e) || !hf.o.a(this.f54738i, uVar.f54738i)) {
            return false;
        }
        return true;
    }

    public String getName() {
        return this.f54737e;
    }

    public int hashCode() {
        return hf.o.b(this.f54736d, this.f54737e, this.f54738i);
    }

    public final String toString() {
        return "PublicKeyCredentialRpEntity{\n id='" + this.f54736d + "', \n name='" + this.f54737e + "', \n icon='" + this.f54738i + "'}";
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
