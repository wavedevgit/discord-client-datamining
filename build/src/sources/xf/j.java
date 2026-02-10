package xf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import xf.b;
import xf.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class j extends jf.a {
    @NonNull
    public static final Parcelable.Creator<j> CREATOR = new p1();

    /* renamed from: d  reason: collision with root package name */
    private final b f54652d;

    /* renamed from: e  reason: collision with root package name */
    private final Boolean f54653e;

    /* renamed from: i  reason: collision with root package name */
    private final b0 f54654i;

    /* renamed from: o  reason: collision with root package name */
    private final z f54655o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private b f54656a;

        /* renamed from: b  reason: collision with root package name */
        private Boolean f54657b;

        /* renamed from: c  reason: collision with root package name */
        private z f54658c;

        public j a() {
            String bVar;
            String zVar;
            b bVar2 = this.f54656a;
            if (bVar2 == null) {
                bVar = null;
            } else {
                bVar = bVar2.toString();
            }
            Boolean bool = this.f54657b;
            z zVar2 = this.f54658c;
            if (zVar2 == null) {
                zVar = null;
            } else {
                zVar = zVar2.toString();
            }
            return new j(bVar, bool, null, zVar);
        }

        public a b(b bVar) {
            this.f54656a = bVar;
            return this;
        }

        public a c(Boolean bool) {
            this.f54657b = bool;
            return this;
        }

        public a d(z zVar) {
            this.f54658c = zVar;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(String str, Boolean bool, String str2, String str3) {
        b a10;
        b0 a11;
        z zVar = null;
        if (str == null) {
            a10 = null;
        } else {
            try {
                a10 = b.a(str);
            } catch (b.a | d1 | z.a e10) {
                throw new IllegalArgumentException(e10);
            }
        }
        this.f54652d = a10;
        this.f54653e = bool;
        if (str2 == null) {
            a11 = null;
        } else {
            a11 = b0.a(str2);
        }
        this.f54654i = a11;
        if (str3 != null) {
            zVar = z.a(str3);
        }
        this.f54655o = zVar;
    }

    public String b() {
        b bVar = this.f54652d;
        if (bVar == null) {
            return null;
        }
        return bVar.toString();
    }

    public Boolean c() {
        return this.f54653e;
    }

    public z d() {
        z zVar = this.f54655o;
        if (zVar == null) {
            Boolean bool = this.f54653e;
            if (bool != null && bool.booleanValue()) {
                return z.RESIDENT_KEY_REQUIRED;
            }
            return z.RESIDENT_KEY_DISCOURAGED;
        }
        return zVar;
    }

    public String e() {
        z d10 = d();
        if (d10 == null) {
            return null;
        }
        return d10.toString();
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof j)) {
            return false;
        }
        j jVar = (j) obj;
        if (!hf.o.a(this.f54652d, jVar.f54652d) || !hf.o.a(this.f54653e, jVar.f54653e) || !hf.o.a(this.f54654i, jVar.f54654i) || !hf.o.a(d(), jVar.d())) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return hf.o.b(this.f54652d, this.f54653e, this.f54654i, d());
    }

    public final String toString() {
        z zVar = this.f54655o;
        b0 b0Var = this.f54654i;
        String valueOf = String.valueOf(this.f54652d);
        String valueOf2 = String.valueOf(b0Var);
        String valueOf3 = String.valueOf(zVar);
        return "AuthenticatorSelectionCriteria{\n attachment=" + valueOf + ", \n requireResidentKey=" + this.f54653e + ", \n requireUserVerification=" + valueOf2 + ", \n residentKeyRequirement=" + valueOf3 + "\n }";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        String b0Var;
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 2, b(), false);
        jf.c.d(parcel, 3, c(), false);
        b0 b0Var2 = this.f54654i;
        if (b0Var2 == null) {
            b0Var = null;
        } else {
            b0Var = b0Var2.toString();
        }
        jf.c.s(parcel, 4, b0Var, false);
        jf.c.s(parcel, 5, e(), false);
        jf.c.b(parcel, a10);
    }
}
