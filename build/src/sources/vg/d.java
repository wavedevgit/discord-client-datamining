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
    private final List f51588d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f51589e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f51590i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final ArrayList f51591a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        private boolean f51592b = false;

        /* renamed from: c  reason: collision with root package name */
        private boolean f51593c = false;

        public a a(LocationRequest locationRequest) {
            if (locationRequest != null) {
                this.f51591a.add(locationRequest);
            }
            return this;
        }

        public d b() {
            return new d(this.f51591a, this.f51592b, this.f51593c);
        }

        public a c(boolean z10) {
            this.f51592b = z10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(List list, boolean z10, boolean z11) {
        this.f51588d = list;
        this.f51589e = z10;
        this.f51590i = z11;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        List list = this.f51588d;
        int a10 = jf.c.a(parcel);
        jf.c.w(parcel, 1, Collections.unmodifiableList(list), false);
        jf.c.c(parcel, 2, this.f51589e);
        jf.c.c(parcel, 3, this.f51590i);
        jf.c.b(parcel, a10);
    }
}
