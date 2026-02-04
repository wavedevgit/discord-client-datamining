package wf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import wf.b;
import wf.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class j extends hf.a {
    @NonNull
    public static final Parcelable.Creator<j> CREATOR = new p1();

    /* renamed from: d  reason: collision with root package name */
    private final b f52273d;

    /* renamed from: e  reason: collision with root package name */
    private final Boolean f52274e;

    /* renamed from: i  reason: collision with root package name */
    private final b0 f52275i;

    /* renamed from: o  reason: collision with root package name */
    private final z f52276o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private b f52277a;

        /* renamed from: b  reason: collision with root package name */
        private Boolean f52278b;

        /* renamed from: c  reason: collision with root package name */
        private z f52279c;

        public j a() {
            String bVar;
            String zVar;
            b bVar2 = this.f52277a;
            if (bVar2 == null) {
                bVar = null;
            } else {
                bVar = bVar2.toString();
            }
            Boolean bool = this.f52278b;
            z zVar2 = this.f52279c;
            if (zVar2 == null) {
                zVar = null;
            } else {
                zVar = zVar2.toString();
            }
            return new j(bVar, bool, null, zVar);
        }

        public a b(b bVar) {
            this.f52277a = bVar;
            return this;
        }

        public a c(Boolean bool) {
            this.f52278b = bool;
            return this;
        }

        public a d(z zVar) {
            this.f52279c = zVar;
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
        this.f52273d = a10;
        this.f52274e = bool;
        if (str2 == null) {
            a11 = null;
        } else {
            a11 = b0.a(str2);
        }
        this.f52275i = a11;
        if (str3 != null) {
            zVar = z.a(str3);
        }
        this.f52276o = zVar;
    }

    public String b() {
        b bVar = this.f52273d;
        if (bVar == null) {
            return null;
        }
        return bVar.toString();
    }

    public Boolean c() {
        return this.f52274e;
    }

    public z d() {
        z zVar = this.f52276o;
        if (zVar == null) {
            Boolean bool = this.f52274e;
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
        if (!gf.o.a(this.f52273d, jVar.f52273d) || !gf.o.a(this.f52274e, jVar.f52274e) || !gf.o.a(this.f52275i, jVar.f52275i) || !gf.o.a(d(), jVar.d())) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return gf.o.b(this.f52273d, this.f52274e, this.f52275i, d());
    }

    public final String toString() {
        z zVar = this.f52276o;
        b0 b0Var = this.f52275i;
        String valueOf = String.valueOf(this.f52273d);
        String valueOf2 = String.valueOf(b0Var);
        String valueOf3 = String.valueOf(zVar);
        return "AuthenticatorSelectionCriteria{\n attachment=" + valueOf + ", \n requireResidentKey=" + this.f52274e + ", \n requireUserVerification=" + valueOf2 + ", \n residentKeyRequirement=" + valueOf3 + "\n }";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        String b0Var;
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 2, b(), false);
        hf.c.d(parcel, 3, c(), false);
        b0 b0Var2 = this.f52275i;
        if (b0Var2 == null) {
            b0Var = null;
        } else {
            b0Var = b0Var2.toString();
        }
        hf.c.s(parcel, 4, b0Var, false);
        hf.c.s(parcel, 5, e(), false);
        hf.c.b(parcel, a10);
    }
}
