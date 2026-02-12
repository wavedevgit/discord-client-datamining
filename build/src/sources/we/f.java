package we;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f extends jf.a {
    @NonNull
    public static final Parcelable.Creator<f> CREATOR = new s();

    /* renamed from: d  reason: collision with root package name */
    private final j f52728d;

    /* renamed from: e  reason: collision with root package name */
    private final String f52729e;

    /* renamed from: i  reason: collision with root package name */
    private final int f52730i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private j f52731a;

        /* renamed from: b  reason: collision with root package name */
        private String f52732b;

        /* renamed from: c  reason: collision with root package name */
        private int f52733c;

        public f a() {
            return new f(this.f52731a, this.f52732b, this.f52733c);
        }

        public a b(j jVar) {
            this.f52731a = jVar;
            return this;
        }

        public final a c(String str) {
            this.f52732b = str;
            return this;
        }

        public final a d(int i10) {
            this.f52733c = i10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(j jVar, String str, int i10) {
        this.f52728d = (j) hf.q.l(jVar);
        this.f52729e = str;
        this.f52730i = i10;
    }

    public static a b() {
        return new a();
    }

    public static a d(f fVar) {
        hf.q.l(fVar);
        a b10 = b();
        b10.b(fVar.c());
        b10.d(fVar.f52730i);
        String str = fVar.f52729e;
        if (str != null) {
            b10.c(str);
        }
        return b10;
    }

    public j c() {
        return this.f52728d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof f)) {
            return false;
        }
        f fVar = (f) obj;
        if (!hf.o.a(this.f52728d, fVar.f52728d) || !hf.o.a(this.f52729e, fVar.f52729e) || this.f52730i != fVar.f52730i) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return hf.o.b(this.f52728d, this.f52729e);
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.q(parcel, 1, c(), i10, false);
        jf.c.s(parcel, 2, this.f52729e, false);
        jf.c.l(parcel, 3, this.f52730i);
        jf.c.b(parcel, a10);
    }
}
