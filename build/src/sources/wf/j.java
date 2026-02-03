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
    private final b f52276d;

    /* renamed from: e  reason: collision with root package name */
    private final Boolean f52277e;

    /* renamed from: i  reason: collision with root package name */
    private final b0 f52278i;

    /* renamed from: o  reason: collision with root package name */
    private final z f52279o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private b f52280a;

        /* renamed from: b  reason: collision with root package name */
        private Boolean f52281b;

        /* renamed from: c  reason: collision with root package name */
        private z f52282c;

        public j a() {
            String bVar;
            String zVar;
            b bVar2 = this.f52280a;
            if (bVar2 == null) {
                bVar = null;
            } else {
                bVar = bVar2.toString();
            }
            Boolean bool = this.f52281b;
            z zVar2 = this.f52282c;
            if (zVar2 == null) {
                zVar = null;
            } else {
                zVar = zVar2.toString();
            }
            return new j(bVar, bool, null, zVar);
        }

        public a b(b bVar) {
            this.f52280a = bVar;
            return this;
        }

        public a c(Boolean bool) {
            this.f52281b = bool;
            return this;
        }

        public a d(z zVar) {
            this.f52282c = zVar;
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
        this.f52276d = a10;
        this.f52277e = bool;
        if (str2 == null) {
            a11 = null;
        } else {
            a11 = b0.a(str2);
        }
        this.f52278i = a11;
        if (str3 != null) {
            zVar = z.a(str3);
        }
        this.f52279o = zVar;
    }

    public String b() {
        b bVar = this.f52276d;
        if (bVar == null) {
            return null;
        }
        return bVar.toString();
    }

    public Boolean c() {
        return this.f52277e;
    }

    public z d() {
        z zVar = this.f52279o;
        if (zVar == null) {
            Boolean bool = this.f52277e;
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
        if (!gf.o.a(this.f52276d, jVar.f52276d) || !gf.o.a(this.f52277e, jVar.f52277e) || !gf.o.a(this.f52278i, jVar.f52278i) || !gf.o.a(d(), jVar.d())) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return gf.o.b(this.f52276d, this.f52277e, this.f52278i, d());
    }

    public final String toString() {
        z zVar = this.f52279o;
        b0 b0Var = this.f52278i;
        String valueOf = String.valueOf(this.f52276d);
        String valueOf2 = String.valueOf(b0Var);
        String valueOf3 = String.valueOf(zVar);
        return "AuthenticatorSelectionCriteria{\n attachment=" + valueOf + ", \n requireResidentKey=" + this.f52277e + ", \n requireUserVerification=" + valueOf2 + ", \n residentKeyRequirement=" + valueOf3 + "\n }";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        String b0Var;
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 2, b(), false);
        hf.c.d(parcel, 3, c(), false);
        b0 b0Var2 = this.f52278i;
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
