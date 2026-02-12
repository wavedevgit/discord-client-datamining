package xf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import xf.k;
import xf.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class t extends jf.a {
    @NonNull
    public static final Parcelable.Creator<t> CREATOR = new v0();

    /* renamed from: d  reason: collision with root package name */
    private final v f54735d;

    /* renamed from: e  reason: collision with root package name */
    private final k f54736e;

    public t(String str, int i10) {
        hf.q.l(str);
        try {
            this.f54735d = v.a(str);
            hf.q.l(Integer.valueOf(i10));
            try {
                this.f54736e = k.a(i10);
            } catch (k.a e10) {
                throw new IllegalArgumentException(e10);
            }
        } catch (v.a e11) {
            throw new IllegalArgumentException(e11);
        }
    }

    public int b() {
        return this.f54736e.b();
    }

    public String c() {
        return this.f54735d.toString();
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof t)) {
            return false;
        }
        t tVar = (t) obj;
        if (!this.f54735d.equals(tVar.f54735d) || !this.f54736e.equals(tVar.f54736e)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return hf.o.b(this.f54735d, this.f54736e);
    }

    public final String toString() {
        k kVar = this.f54736e;
        String valueOf = String.valueOf(this.f54735d);
        String valueOf2 = String.valueOf(kVar);
        return "PublicKeyCredentialParameters{\n type=" + valueOf + ", \n algorithm=" + valueOf2 + "\n }";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 2, c(), false);
        jf.c.n(parcel, 3, Integer.valueOf(b()), false);
        jf.c.b(parcel, a10);
    }
}
