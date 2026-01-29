package ve;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f extends hf.a {
    @NonNull
    public static final Parcelable.Creator<f> CREATOR = new s();

    /* renamed from: d  reason: collision with root package name */
    private final j f51104d;

    /* renamed from: e  reason: collision with root package name */
    private final String f51105e;

    /* renamed from: i  reason: collision with root package name */
    private final int f51106i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private j f51107a;

        /* renamed from: b  reason: collision with root package name */
        private String f51108b;

        /* renamed from: c  reason: collision with root package name */
        private int f51109c;

        public f a() {
            return new f(this.f51107a, this.f51108b, this.f51109c);
        }

        public a b(j jVar) {
            this.f51107a = jVar;
            return this;
        }

        public final a c(String str) {
            this.f51108b = str;
            return this;
        }

        public final a d(int i10) {
            this.f51109c = i10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(j jVar, String str, int i10) {
        this.f51104d = (j) gf.q.l(jVar);
        this.f51105e = str;
        this.f51106i = i10;
    }

    public static a b() {
        return new a();
    }

    public static a d(f fVar) {
        gf.q.l(fVar);
        a b10 = b();
        b10.b(fVar.c());
        b10.d(fVar.f51106i);
        String str = fVar.f51105e;
        if (str != null) {
            b10.c(str);
        }
        return b10;
    }

    public j c() {
        return this.f51104d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof f)) {
            return false;
        }
        f fVar = (f) obj;
        if (!gf.o.a(this.f51104d, fVar.f51104d) || !gf.o.a(this.f51105e, fVar.f51105e) || this.f51106i != fVar.f51106i) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return gf.o.b(this.f51104d, this.f51105e);
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.q(parcel, 1, c(), i10, false);
        hf.c.s(parcel, 2, this.f51105e, false);
        hf.c.l(parcel, 3, this.f51106i);
        hf.c.b(parcel, a10);
    }
}
