package ug;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import com.google.android.gms.location.LocationRequest;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d extends hf.a {
    @NonNull
    public static final Parcelable.Creator<d> CREATOR = new j();

    /* renamed from: d  reason: collision with root package name */
    private final List f51438d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f51439e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f51440i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final ArrayList f51441a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        private boolean f51442b = false;

        /* renamed from: c  reason: collision with root package name */
        private boolean f51443c = false;

        public a a(LocationRequest locationRequest) {
            if (locationRequest != null) {
                this.f51441a.add(locationRequest);
            }
            return this;
        }

        public d b() {
            return new d(this.f51441a, this.f51442b, this.f51443c);
        }

        public a c(boolean z10) {
            this.f51442b = z10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(List list, boolean z10, boolean z11) {
        this.f51438d = list;
        this.f51439e = z10;
        this.f51440i = z11;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        List list = this.f51438d;
        int a10 = hf.c.a(parcel);
        hf.c.w(parcel, 1, Collections.unmodifiableList(list), false);
        hf.c.c(parcel, 2, this.f51439e);
        hf.c.c(parcel, 3, this.f51440i);
        hf.c.b(parcel, a10);
    }
}
