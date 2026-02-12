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
    private final List f51589d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f51590e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f51591i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final ArrayList f51592a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        private boolean f51593b = false;

        /* renamed from: c  reason: collision with root package name */
        private boolean f51594c = false;

        public a a(LocationRequest locationRequest) {
            if (locationRequest != null) {
                this.f51592a.add(locationRequest);
            }
            return this;
        }

        public d b() {
            return new d(this.f51592a, this.f51593b, this.f51594c);
        }

        public a c(boolean z10) {
            this.f51593b = z10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(List list, boolean z10, boolean z11) {
        this.f51589d = list;
        this.f51590e = z10;
        this.f51591i = z11;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        List list = this.f51589d;
        int a10 = jf.c.a(parcel);
        jf.c.w(parcel, 1, Collections.unmodifiableList(list), false);
        jf.c.c(parcel, 2, this.f51590e);
        jf.c.c(parcel, 3, this.f51591i);
        jf.c.b(parcel, a10);
    }
}
