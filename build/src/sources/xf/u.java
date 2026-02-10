package xf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class u extends jf.a {
    @NonNull
    public static final Parcelable.Creator<u> CREATOR = new w0();

    /* renamed from: d  reason: collision with root package name */
    private final String f55004d;

    /* renamed from: e  reason: collision with root package name */
    private final String f55005e;

    /* renamed from: i  reason: collision with root package name */
    private final String f55006i;

    public u(String str, String str2, String str3) {
        this.f55004d = (String) hf.q.l(str);
        this.f55005e = (String) hf.q.l(str2);
        this.f55006i = str3;
    }

    public String b() {
        return this.f55006i;
    }

    public String c() {
        return this.f55004d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof u)) {
            return false;
        }
        u uVar = (u) obj;
        if (!hf.o.a(this.f55004d, uVar.f55004d) || !hf.o.a(this.f55005e, uVar.f55005e) || !hf.o.a(this.f55006i, uVar.f55006i)) {
            return false;
        }
        return true;
    }

    public String getName() {
        return this.f55005e;
    }

    public int hashCode() {
        return hf.o.b(this.f55004d, this.f55005e, this.f55006i);
    }

    public final String toString() {
        return "PublicKeyCredentialRpEntity{\n id='" + this.f55004d + "', \n name='" + this.f55005e + "', \n icon='" + this.f55006i + "'}";
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
