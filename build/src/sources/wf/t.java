package wf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import wf.k;
import wf.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class t extends hf.a {
    @NonNull
    public static final Parcelable.Creator<t> CREATOR = new v0();

    /* renamed from: d  reason: collision with root package name */
    private final v f53012d;

    /* renamed from: e  reason: collision with root package name */
    private final k f53013e;

    public t(String str, int i10) {
        gf.q.l(str);
        try {
            this.f53012d = v.a(str);
            gf.q.l(Integer.valueOf(i10));
            try {
                this.f53013e = k.a(i10);
            } catch (k.a e10) {
                throw new IllegalArgumentException(e10);
            }
        } catch (v.a e11) {
            throw new IllegalArgumentException(e11);
        }
    }

    public int b() {
        return this.f53013e.b();
    }

    public String c() {
        return this.f53012d.toString();
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof t)) {
            return false;
        }
        t tVar = (t) obj;
        if (!this.f53012d.equals(tVar.f53012d) || !this.f53013e.equals(tVar.f53013e)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return gf.o.b(this.f53012d, this.f53013e);
    }

    public final String toString() {
        k kVar = this.f53013e;
        String valueOf = String.valueOf(this.f53012d);
        String valueOf2 = String.valueOf(kVar);
        return "PublicKeyCredentialParameters{\n type=" + valueOf + ", \n algorithm=" + valueOf2 + "\n }";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 2, c(), false);
        hf.c.n(parcel, 3, Integer.valueOf(b()), false);
        hf.c.b(parcel, a10);
    }
}
