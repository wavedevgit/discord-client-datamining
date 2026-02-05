package ve;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f extends hf.a {
    @NonNull
    public static final Parcelable.Creator<f> CREATOR = new s();

    /* renamed from: d  reason: collision with root package name */
    private final j f52258d;

    /* renamed from: e  reason: collision with root package name */
    private final String f52259e;

    /* renamed from: i  reason: collision with root package name */
    private final int f52260i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private j f52261a;

        /* renamed from: b  reason: collision with root package name */
        private String f52262b;

        /* renamed from: c  reason: collision with root package name */
        private int f52263c;

        public f a() {
            return new f(this.f52261a, this.f52262b, this.f52263c);
        }

        public a b(j jVar) {
            this.f52261a = jVar;
            return this;
        }

        public final a c(String str) {
            this.f52262b = str;
            return this;
        }

        public final a d(int i10) {
            this.f52263c = i10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(j jVar, String str, int i10) {
        this.f52258d = (j) gf.q.l(jVar);
        this.f52259e = str;
        this.f52260i = i10;
    }

    public static a b() {
        return new a();
    }

    public static a d(f fVar) {
        gf.q.l(fVar);
        a b10 = b();
        b10.b(fVar.c());
        b10.d(fVar.f52260i);
        String str = fVar.f52259e;
        if (str != null) {
            b10.c(str);
        }
        return b10;
    }

    public j c() {
        return this.f52258d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof f)) {
            return false;
        }
        f fVar = (f) obj;
        if (!gf.o.a(this.f52258d, fVar.f52258d) || !gf.o.a(this.f52259e, fVar.f52259e) || this.f52260i != fVar.f52260i) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return gf.o.b(this.f52258d, this.f52259e);
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.q(parcel, 1, c(), i10, false);
        hf.c.s(parcel, 2, this.f52259e, false);
        hf.c.l(parcel, 3, this.f52260i);
        hf.c.b(parcel, a10);
    }
}
