package qd;

import android.os.Bundle;
import com.google.android.exoplayer2.g;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class w0 implements com.google.android.exoplayer2.g {

    /* renamed from: o  reason: collision with root package name */
    public static final w0 f46937o = new w0(new u0[0]);

    /* renamed from: p  reason: collision with root package name */
    private static final String f46938p = ne.w0.B0(0);

    /* renamed from: q  reason: collision with root package name */
    public static final g.a f46939q = new g.a() { // from class: qd.v0
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return w0.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final int f46940d;

    /* renamed from: e  reason: collision with root package name */
    private final ni.s f46941e;

    /* renamed from: i  reason: collision with root package name */
    private int f46942i;

    public w0(u0... u0VarArr) {
        this.f46941e = ni.s.p(u0VarArr);
        this.f46940d = u0VarArr.length;
        d();
    }

    public static /* synthetic */ w0 a(Bundle bundle) {
        ArrayList parcelableArrayList = bundle.getParcelableArrayList(f46938p);
        if (parcelableArrayList == null) {
            return new w0(new u0[0]);
        }
        return new w0((u0[]) ne.d.d(u0.f46923s, parcelableArrayList).toArray(new u0[0]));
    }

    private void d() {
        int i10 = 0;
        while (i10 < this.f46941e.size()) {
            int i11 = i10 + 1;
            for (int i12 = i11; i12 < this.f46941e.size(); i12++) {
                if (((u0) this.f46941e.get(i10)).equals(this.f46941e.get(i12))) {
                    ne.y.d("TrackGroupArray", "", new IllegalArgumentException("Multiple identical TrackGroups added to one TrackGroupArray."));
                }
            }
            i10 = i11;
        }
    }

    public u0 b(int i10) {
        return (u0) this.f46941e.get(i10);
    }

    public int c(u0 u0Var) {
        int indexOf = this.f46941e.indexOf(u0Var);
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
            if (this.f46940d == w0Var.f46940d && this.f46941e.equals(w0Var.f46941e)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        if (this.f46942i == 0) {
            this.f46942i = this.f46941e.hashCode();
        }
        return this.f46942i;
    }
}
