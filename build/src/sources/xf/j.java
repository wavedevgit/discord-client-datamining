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
    private final b f55221d;

    /* renamed from: e  reason: collision with root package name */
    private final Boolean f55222e;

    /* renamed from: i  reason: collision with root package name */
    private final b0 f55223i;

    /* renamed from: o  reason: collision with root package name */
    private final z f55224o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private b f55225a;

        /* renamed from: b  reason: collision with root package name */
        private Boolean f55226b;

        /* renamed from: c  reason: collision with root package name */
        private z f55227c;

        public j a() {
            String bVar;
            String zVar;
            b bVar2 = this.f55225a;
            if (bVar2 == null) {
                bVar = null;
            } else {
                bVar = bVar2.toString();
            }
            Boolean bool = this.f55226b;
            z zVar2 = this.f55227c;
            if (zVar2 == null) {
                zVar = null;
            } else {
                zVar = zVar2.toString();
            }
            return new j(bVar, bool, null, zVar);
        }

        public a b(b bVar) {
            this.f55225a = bVar;
            return this;
        }

        public a c(Boolean bool) {
            this.f55226b = bool;
            return this;
        }

        public a d(z zVar) {
            this.f55227c = zVar;
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
        this.f55221d = a10;
        this.f55222e = bool;
        if (str2 == null) {
            a11 = null;
        } else {
            a11 = b0.a(str2);
        }
        this.f55223i = a11;
        if (str3 != null) {
            zVar = z.a(str3);
        }
        this.f55224o = zVar;
    }

    public String b() {
        b bVar = this.f55221d;
        if (bVar == null) {
            return null;
        }
        return bVar.toString();
    }

    public Boolean c() {
        return this.f55222e;
    }

    public z d() {
        z zVar = this.f55224o;
        if (zVar == null) {
            Boolean bool = this.f55222e;
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
        if (!hf.o.a(this.f55221d, jVar.f55221d) || !hf.o.a(this.f55222e, jVar.f55222e) || !hf.o.a(this.f55223i, jVar.f55223i) || !hf.o.a(d(), jVar.d())) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return hf.o.b(this.f55221d, this.f55222e, this.f55223i, d());
    }

    public final String toString() {
        z zVar = this.f55224o;
        b0 b0Var = this.f55223i;
        String valueOf = String.valueOf(this.f55221d);
        String valueOf2 = String.valueOf(b0Var);
        String valueOf3 = String.valueOf(zVar);
        return "AuthenticatorSelectionCriteria{\n attachment=" + valueOf + ", \n requireResidentKey=" + this.f55222e + ", \n requireUserVerification=" + valueOf2 + ", \n residentKeyRequirement=" + valueOf3 + "\n }";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        String b0Var;
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 2, b(), false);
        jf.c.d(parcel, 3, c(), false);
        b0 b0Var2 = this.f55223i;
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
