package we;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f extends jf.a {
    @NonNull
    public static final Parcelable.Creator<f> CREATOR = new s();

    /* renamed from: d  reason: collision with root package name */
    private final j f53698d;

    /* renamed from: e  reason: collision with root package name */
    private final String f53699e;

    /* renamed from: i  reason: collision with root package name */
    private final int f53700i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private j f53701a;

        /* renamed from: b  reason: collision with root package name */
        private String f53702b;

        /* renamed from: c  reason: collision with root package name */
        private int f53703c;

        public f a() {
            return new f(this.f53701a, this.f53702b, this.f53703c);
        }

        public a b(j jVar) {
            this.f53701a = jVar;
            return this;
        }

        public final a c(String str) {
            this.f53702b = str;
            return this;
        }

        public final a d(int i10) {
            this.f53703c = i10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(j jVar, String str, int i10) {
        this.f53698d = (j) hf.q.l(jVar);
        this.f53699e = str;
        this.f53700i = i10;
    }

    public static a b() {
        return new a();
    }

    public static a d(f fVar) {
        hf.q.l(fVar);
        a b10 = b();
        b10.b(fVar.c());
        b10.d(fVar.f53700i);
        String str = fVar.f53699e;
        if (str != null) {
            b10.c(str);
        }
        return b10;
    }

    public j c() {
        return this.f53698d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof f)) {
            return false;
        }
        f fVar = (f) obj;
        if (!hf.o.a(this.f53698d, fVar.f53698d) || !hf.o.a(this.f53699e, fVar.f53699e) || this.f53700i != fVar.f53700i) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return hf.o.b(this.f53698d, this.f53699e);
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.q(parcel, 1, c(), i10, false);
        jf.c.s(parcel, 2, this.f53699e, false);
        jf.c.l(parcel, 3, this.f53700i);
        jf.c.b(parcel, a10);
    }
}
