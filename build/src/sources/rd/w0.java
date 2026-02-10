package rd;

import android.os.Bundle;
import com.google.android.exoplayer2.g;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class w0 implements com.google.android.exoplayer2.g {

    /* renamed from: o  reason: collision with root package name */
    public static final w0 f48055o = new w0(new u0[0]);

    /* renamed from: p  reason: collision with root package name */
    private static final String f48056p = oe.w0.B0(0);

    /* renamed from: q  reason: collision with root package name */
    public static final g.a f48057q = new g.a() { // from class: rd.v0
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return w0.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final int f48058d;

    /* renamed from: e  reason: collision with root package name */
    private final oi.s f48059e;

    /* renamed from: i  reason: collision with root package name */
    private int f48060i;

    public w0(u0... u0VarArr) {
        this.f48059e = oi.s.p(u0VarArr);
        this.f48058d = u0VarArr.length;
        d();
    }

    public static /* synthetic */ w0 a(Bundle bundle) {
        ArrayList parcelableArrayList = bundle.getParcelableArrayList(f48056p);
        if (parcelableArrayList == null) {
            return new w0(new u0[0]);
        }
        return new w0((u0[]) oe.d.d(u0.f48041s, parcelableArrayList).toArray(new u0[0]));
    }

    private void d() {
        int i10 = 0;
        while (i10 < this.f48059e.size()) {
            int i11 = i10 + 1;
            for (int i12 = i11; i12 < this.f48059e.size(); i12++) {
                if (((u0) this.f48059e.get(i10)).equals(this.f48059e.get(i12))) {
                    oe.y.d("TrackGroupArray", "", new IllegalArgumentException("Multiple identical TrackGroups added to one TrackGroupArray."));
                }
            }
            i10 = i11;
        }
    }

    public u0 b(int i10) {
        return (u0) this.f48059e.get(i10);
    }

    public int c(u0 u0Var) {
        int indexOf = this.f48059e.indexOf(u0Var);
        if (indexOf >= 0) {
            return indexOf;
        }
        return -1;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && w0.class == obj.getClass()) {
            w0 w0Var = (w0) obj;
            if (this.f48058d == w0Var.f48058d && this.f48059e.equals(w0Var.f48059e)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        if (this.f48060i == 0) {
            this.f48060i = this.f48059e.hashCode();
        }
        return this.f48060i;
    }
}
