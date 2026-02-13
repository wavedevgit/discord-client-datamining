package we;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f extends jf.a {
    @NonNull
    public static final Parcelable.Creator<f> CREATOR = new s();

    /* renamed from: d  reason: collision with root package name */
    private final j f53296d;

    /* renamed from: e  reason: collision with root package name */
    private final String f53297e;

    /* renamed from: i  reason: collision with root package name */
    private final int f53298i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private j f53299a;

        /* renamed from: b  reason: collision with root package name */
        private String f53300b;

        /* renamed from: c  reason: collision with root package name */
        private int f53301c;

        public f a() {
            return new f(this.f53299a, this.f53300b, this.f53301c);
        }

        public a b(j jVar) {
            this.f53299a = jVar;
            return this;
        }

        public final a c(String str) {
            this.f53300b = str;
            return this;
        }

        public final a d(int i10) {
            this.f53301c = i10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(j jVar, String str, int i10) {
        this.f53296d = (j) hf.q.l(jVar);
        this.f53297e = str;
        this.f53298i = i10;
    }

    public static a b() {
        return new a();
    }

    public static a d(f fVar) {
        hf.q.l(fVar);
        a b10 = b();
        b10.b(fVar.c());
        b10.d(fVar.f53298i);
        String str = fVar.f53297e;
        if (str != null) {
            b10.c(str);
        }
        return b10;
    }

    public j c() {
        return this.f53296d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof f)) {
            return false;
        }
        f fVar = (f) obj;
        if (!hf.o.a(this.f53296d, fVar.f53296d) || !hf.o.a(this.f53297e, fVar.f53297e) || this.f53298i != fVar.f53298i) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return hf.o.b(this.f53296d, this.f53297e);
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.q(parcel, 1, c(), i10, false);
        jf.c.s(parcel, 2, this.f53297e, false);
        jf.c.l(parcel, 3, this.f53298i);
        jf.c.b(parcel, a10);
    }
}
