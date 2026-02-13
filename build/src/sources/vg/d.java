package vg;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import com.google.android.gms.location.LocationRequest;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d extends jf.a {
    @NonNull
    public static final Parcelable.Creator<d> CREATOR = new j();

    /* renamed from: d  reason: collision with root package name */
    private final List f52157d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f52158e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f52159i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final ArrayList f52160a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        private boolean f52161b = false;

        /* renamed from: c  reason: collision with root package name */
        private boolean f52162c = false;

        public a a(LocationRequest locationRequest) {
            if (locationRequest != null) {
                this.f52160a.add(locationRequest);
            }
            return this;
        }

        public d b() {
            return new d(this.f52160a, this.f52161b, this.f52162c);
        }

        public a c(boolean z10) {
            this.f52161b = z10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(List list, boolean z10, boolean z11) {
        this.f52157d = list;
        this.f52158e = z10;
        this.f52159i = z11;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        List list = this.f52157d;
        int a10 = jf.c.a(parcel);
        jf.c.w(parcel, 1, Collections.unmodifiableList(list), false);
        jf.c.c(parcel, 2, this.f52158e);
        jf.c.c(parcel, 3, this.f52159i);
        jf.c.b(parcel, a10);
    }
}
