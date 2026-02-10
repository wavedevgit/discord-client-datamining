package we;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f extends jf.a {
    @NonNull
    public static final Parcelable.Creator<f> CREATOR = new s();

    /* renamed from: d  reason: collision with root package name */
    private final j f52727d;

    /* renamed from: e  reason: collision with root package name */
    private final String f52728e;

    /* renamed from: i  reason: collision with root package name */
    private final int f52729i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private j f52730a;

        /* renamed from: b  reason: collision with root package name */
        private String f52731b;

        /* renamed from: c  reason: collision with root package name */
        private int f52732c;

        public f a() {
            return new f(this.f52730a, this.f52731b, this.f52732c);
        }

        public a b(j jVar) {
            this.f52730a = jVar;
            return this;
        }

        public final a c(String str) {
            this.f52731b = str;
            return this;
        }

        public final a d(int i10) {
            this.f52732c = i10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(j jVar, String str, int i10) {
        this.f52727d = (j) hf.q.l(jVar);
        this.f52728e = str;
        this.f52729i = i10;
    }

    public static a b() {
        return new a();
    }

    public static a d(f fVar) {
        hf.q.l(fVar);
        a b10 = b();
        b10.b(fVar.c());
        b10.d(fVar.f52729i);
        String str = fVar.f52728e;
        if (str != null) {
            b10.c(str);
        }
        return b10;
    }

    public j c() {
        return this.f52727d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof f)) {
            return false;
        }
        f fVar = (f) obj;
        if (!hf.o.a(this.f52727d, fVar.f52727d) || !hf.o.a(this.f52728e, fVar.f52728e) || this.f52729i != fVar.f52729i) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return hf.o.b(this.f52727d, this.f52728e);
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.q(parcel, 1, c(), i10, false);
        jf.c.s(parcel, 2, this.f52728e, false);
        jf.c.l(parcel, 3, this.f52729i);
        jf.c.b(parcel, a10);
    }
}
